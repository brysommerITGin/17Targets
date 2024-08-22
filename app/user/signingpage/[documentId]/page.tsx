import { Button } from "@/components/ui/button";
import Link from "next/link";

const documentIdPage = ({
    params
}: {
    params: { documentId: string }
}
) => {
    return ( 
        <div className="p-6">
            <Link href={ 'https://paperless.com.ua/uk/share/CjgZAQN5iBzPt-A_Ub8dqJEa0Gt1Z3l50fLeFZHxe0c' + params.documentId }>
                <Button
                    type="button"
                    variant="link"
                >
                    Відмінити
                </Button>
            </Link>
        </div>        
    );
}
 
export default documentIdPage;