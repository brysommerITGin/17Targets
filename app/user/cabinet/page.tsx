"use client";

import { useState } from "react";
import RegistrationRules from "@/components/RegistrationRules";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-0 top-0 left-0 w-64 bg-white shadow-md border-r border-gray-200 p-4 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-64`}
      >
        <div className="flex flex-col space-y-4">
          <button className="md:hidden p-2" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <h2 className="text-xl font-semibold text-gray-900">Навігація</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block p-2 rounded hover:bg-gray-200">
                Головна
              </Link>
            </li>
            <li>
              <Link href="/about" className="block p-2 rounded hover:bg-gray-200">
                Про нас
              </Link>
            </li>
            <li>
              <Link href="/services" className="block p-2 rounded hover:bg-gray-200">
                Послуги
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block p-2 rounded hover:bg-gray-200">
                Контакти
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between border-b border-gray-200 p-4 bg-white md:relative">
          <button className="md:hidden p-2" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Кабінет</h1>
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <Button variant="outline">Увійти</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        <main className="flex-1 p-4">
          <p className="text-lg text-gray-700 mb-4">
            Ласкаво просимо до вашого кабінету!
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Щоб розпочати, ознайомтеся з правилами та підпишіть їх.
          </p>
          <Link href="/user/signingpage">
            <Button>
              Ознайомитися і підписати правила
            </Button>
          </Link>
        </main>

        <footer className="mt-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Ваше підприємство. Всі права захищені.</p>
        </footer>
      </div>
    </div>
  );
}
