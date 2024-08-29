"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const DocumentIdPage = ({
    params
}: {
    params: { 
      documentId: string,
      email: string
    }
}
) => {
    const [buttonState, setButtonState] = useState<{
        text: string
      }>({
        text: "Перевірити підпис", // Початковий текст
      })

      const encodedEmail = decodeURIComponent(params.email)

      useEffect(() => {
        toast.success(`Ми надіслали лист з посиланням для підпису на пошту ${encodedEmail}`);
      }, [params.email]);

      const handleCheckSignature = async () => {
        try {
          const response = await axios.post("/api/checksignature", { documentId: params.documentId, email: params.email });
          console.log(response.data)
    
          if (response.data.result === true) {
            // Якщо підпис перевірено
            setButtonState({
              text: "Підпис перевірено",
            })
          } else {
            // Якщо підпис не пройшов перевірку
            setButtonState({
              text: "Спробуйте ще раз",
            })
          }
        } catch (error) {
          console.error(error)
          // У випадку помилки також можна змінити стиль або повідомити користувача
          setButtonState({
            text: "Помилка! Спробуйте ще раз",
          })
        }
      }

    return ( 
      <div>
        
        <h1 className="text-xl p-6">
          Мої Документи
        </h1>
        <div className="p-2">

            <Link href={ 'https://paperless.com.ua/uk/share/CjgZAQN5iBzPt-A_Ub8dqJEa0Gt1Z3l50fLeFZHxe0c' + params.documentId }>
                <Button
                    type="button"
                    variant="default"
                >
                    Переглянути документ
                </Button>
            </Link>

        </div>

        <div className="p-2">
            <Button
                    type="button"
                    variant="default"
                    onClick={handleCheckSignature}
            >
                    {buttonState.text}
            </Button>
        </div>

        <div className="p-2">

            <Link href='/user/cabinet'>
                <Button
                    type="button"
                    variant="default"
                >
                    Переглянути документ
                </Button>
            </Link>

        </div>

      </div>
                
    );
}
 
export default DocumentIdPage;