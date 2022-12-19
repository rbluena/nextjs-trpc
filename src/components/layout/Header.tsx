import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
  { title: "Home", path: "/" },
  { title: "Sign Up", path: "/signup" },
  { title: "Sign In", path: "/signin" },
];

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-navy-100 px-8 py-4">
      <nav>
        <ul className="flex gap-4">
          {routes.map((item) => {
            const isActive = router.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  className={`text-navy-800 hover:underline ${
                    isActive ? "underline" : ""
                  }`}
                  href={item.path}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
