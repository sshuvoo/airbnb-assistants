import { toolsData } from '@/data/tools-data'
import Image from 'next/image'
import { SectionHeader } from './section-header'

export function ToolsSection() {
  return (
    <>
      <SectionHeader
        className="pt-21 pb-34"
        title={{ plain: 'Our', accent: 'Tools' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div className="bg-foreground pt-9.5 pb-21.25">
        <div className="container">
          <div className="xs:grid-cols-2 mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-[auto_auto_auto] lg:gap-10">
            {toolsData.map((tool) => (
              <div
                key={tool.id}
                className="bg-background flex h-34.75 items-center justify-center rounded-[11px] transition-all duration-300 hover:shadow-[0px_4px_30px_0px_#FF8AA847] xl:w-72.5"
              >
                <Image
                  className="xs:h-12 h-14 max-h-14 max-w-52.5 sm:h-14"
                  src={tool.image}
                  alt={tool.name}
                  width={174}
                  height={46}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
