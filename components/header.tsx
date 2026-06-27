'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useActiveSection } from '@/hooks/use-active-section'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ButtonPrimary } from './button-primary'

const navLinks = [
  { title: 'Home', href: '#home', id: 'home' },
  { title: 'Services', href: '#services', id: 'services' },
  { title: 'Pricing', href: '#pricing', id: 'pricing' },
  { title: 'Tools', href: '#tools', id: 'tools' },
  { title: 'Reviews', href: '#reviews', id: 'reviews' },
  { title: 'Faq', href: '#faq', id: 'faq' },
]

const sectionIds = navLinks.map((l) => l.id)

export function Header() {
  const sectionId = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-background sticky top-0 z-9999 w-full shadow-[0px_4px_62px_0px_#FAC4D2A1]">
        <div className="bg-background container flex h-16 items-center justify-between sm:h-22.25">
          <Link href={'#home'}>
            <Image
              className="aspect-125/45 w-20 sm:w-31.25"
              src={'./images/logo/google.svg'}
              alt="google"
              width={125}
              height={45}
            />
          </Link>

          <ul className="hidden gap-x-6.25 text-[18px] leading-[150%] font-normal tracking-normal lg:flex">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  className={`transition-all duration-300 ${sectionId === link.id ? 'text-primary font-bold underline underline-offset-12' : ''}`}
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
              className="-mr-2 rounded-md p-2 transition-colors lg:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent className="z-99999 max-w-87.5">
          <SheetHeader className="sr-only">
            <SheetTitle>Mobile Menu</SheetTitle>
            <SheetDescription>
              Find all the navigation links in the mobile menu.
            </SheetDescription>
          </SheetHeader>
          <div className="border-border flex h-22.25 items-center border-b px-6">
            <Image
              src={'./images/logo/google.svg'}
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
                    className={`flex items-center gap-x-3 rounded-lg px-4 py-3 text-[17px] font-medium transition-all duration-150 ${
                      sectionId === link.id
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'hover:bg-accent hover:text-primary'
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
  )
}
