import { footerData } from '@/data/footer-data'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-border border-t">
      <section className="py-8 sm:py-12 md:py-16 lg:pt-22.5 lg:pb-20.75">
        <div className="xs:grid-cols-2 container grid grid-cols-1 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          <div className="xs:col-span-2 pr-8 sm:col-span-3 lg:col-span-2">
            <Image
              src={footerData.brand.logo.src}
              alt={footerData.brand.logo.alt}
              width={106}
              height={38}
            />
            <p className="font-plus-jakarta-sans mt-5.25 max-w-170 text-sm leading-5.5 font-medium text-[#48484A] lg:max-w-99">
              {footerData.brand.description}
            </p>
            <div className="mt-7.5 flex items-center gap-x-[34.34px]">
              {footerData.socials.map((social, idx) => (
                <Link key={idx} href={social.href}>
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={social.size.w}
                    height={social.size.h}
                  />
                </Link>
              ))}
            </div>
          </div>
          {footerData.linkGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-[16px] leading-6 font-bold text-[#18181B]">
                {group.heading}
              </h3>
              <ul className="mt-5.25 text-sm leading-10 font-medium">
                {group.links.map((link, linkIdx) => (
                  <li className="hover:underline" key={linkIdx}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary flex h-16.75 items-center justify-center">
        <p className="font-secondary text-center text-sm leading-5.5 font-normal text-white">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by XYz
        </p>
      </section>
    </footer>
  )
}
