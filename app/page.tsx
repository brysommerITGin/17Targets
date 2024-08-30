"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SustainableDevelopmentGoals from "@/components/SustainableGoalsSection";

export default function Home() {
  return (
  <>
    <Navbar />
    <div className="p-6 min-h-screen">
    <SustainableDevelopmentGoals />
    <div className="flex justify-center mt-8">
      <Link href="/user/cabinet">
        <Button>
        ЗАРЕЄСТРУВАТИСЯ НА ПЛАТФОРМІ
        </Button>
      </Link>  
    </div>
    </div>
  </>
  );
}

