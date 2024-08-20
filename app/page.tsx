"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <Link href="/user/signingpage">
        <Button>
          Новий користувач
        </Button>
      </Link>  
    </div>
  );
}

