import RegistrationRules from "@/components/RegistrationRules";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
        <RegistrationRules />
        <div className="flex justify-center items-center p-4">
        <Link href="/user/signingpage">
            <Button >
                Ознайомився
            </Button>
         </Link>
        </div>
    </div>
  );
}