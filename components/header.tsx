"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonPrimary } from "./button-primary";

const navLinks = [
  { title: "Home", href: "/#", id: "hero" },
  { title: "About", href: "/#about", id: "about" },
  { title: "Services", href: "/#services", id: "services" },
  { title: "Pricing", href: "/#pricing", id: "pricing" },
  { title: "Blog", href: "/#blog", id: "blog" },
  { title: "Resources", href: "/#resources", id: "resources" },
];

export function Header() {
  const sectionId = useActiveSection(navLinks.map((l) => l.id));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="max-w-7xl h-16 sm:h-22.25 bg-background mx-auto flex justify-between items-center px-5">
          <Image
            className="aspect-125/45 w-20 sm:w-31.25"
            src={"./images/logo/google.svg"}
            alt="google"
            width={125}
            height={45}
          />

          <ul className="text-[18px] leading-[150%] tracking-normal font-normal gap-x-6.25 hidden lg:flex">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  className={`${sectionId === link.id ? "text-primary underline underline-offset-12 font-bold" : ""}`}
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-4">
            <ButtonPrimary
              className="hidden sm:flex"
              label="Schedule A Meeting"
            />
            <button
              className="lg:hidden p-2 -mr-2 rounded-md transition-colors"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent>
          <SheetHeader className="sr-only">
            <SheetTitle>Mobile Menu</SheetTitle>
            <SheetDescription>
              Find all the navigation links in the mobile menu.
            </SheetDescription>
          </SheetHeader>
          <div className="px-6 h-22.25 border-b border-border flex items-center">
            <Image
              src={"./images/logo/google.svg"}
              alt="google"
              width={100}
              height={36}
            />
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-y-1">
              {navLinks.map((link, i) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-x-3 px-4 py-3 rounded-lg text-[17px] font-medium transition-all duration-150 ${
                      sectionId === link.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "hover:bg-accent hover:text-primary"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SheetFooter>
            <ButtonPrimary
              className="w-full justify-center"
              label="Schedule A Meeting"
            />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
