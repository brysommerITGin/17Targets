import RegistrationRules from "@/components/RegistrationRules";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header>
        <h1>Кабінет</h1>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </header>
        
        
        <div className="flex justify-center items-center p-4">
        <Link href="/user/signingpage">
            <Button >
                Ознайомитися і підписати правила
            </Button>
         </Link>
        </div>
    </div>
  );
}