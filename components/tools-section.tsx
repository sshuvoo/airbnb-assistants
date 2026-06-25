import { toolsData } from "@/data/tools-data";
import Image from "next/image";
import { SectionHeader } from "./section-header";

export function ToolsSection() {
  return (
    <>
      <SectionHeader
        className="pb-34 pt-21"
        title={{ plain: "Our", accent: "Tools" }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div className="bg-foreground pb-21.25 pt-9.5">
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-[auto_auto_auto] lg:gap-10">
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className="xl:w-72.5 h-24 sm:h-34.75 flex justify-center items-center bg-background rounded-[11px] hover:shadow-[0px_4px_30px_0px_#FF8AA847] transition-all duration-300"
            >
              <Image
                className="max-h-14 w-28 sm:w-auto"
                src={tool.image}
                alt={tool.name}
                width={174}
                height={46}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
