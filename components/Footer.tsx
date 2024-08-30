// components/Footer.tsx

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Ваше підприємство. Всі права захищені.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
            Політика конфіденційності
          </Link>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-white">
            Умови використання
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
