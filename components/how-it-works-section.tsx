import { howItWorksData } from "@/data/how-it-works-data";
import Image from "next/image";
import { SectionHeader } from "./section-header";

export function HowItWorksSection() {
  return (
    <section>
      <SectionHeader
        className="mt-16.75"
        title={{ plain: "Getting Started is", accent: "Easy" }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div className="grid grid-cols-[auto_auto_auto] max-w-7xl mx-auto justify-center gap-x-9.5">
        {howItWorksData.map((item) => (
          <div className="w-71.25" key={item.step}>
            <div className=" h-48 flex justify-center items-center border-2 border-[#FDEBF0] rounded-[9px] relative">
              <Image
                src={item.icon}
                alt={item.label}
                width={item.iconSize.w}
                height={item.iconSize.h}
              />
              <div className="size-19 border-[5px] border-primary rounded-full absolute -top-5.25 -left-4.25 bg-background flex justify-center items-center font-medium text-[29.23px] leading-[100%]">
                {item.step}
              </div>
            </div>
            <h3 className="mt-8.25 font-semibold text-[20px] leading-[100%] text-center max-w-63.75 mx-auto">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-5 mt-21">
        <div className="bg-[#FDEBF0] border border-[#F8BECD] rounded-[33px] p-9.5 pr-0 grid grid-cols-[40%_60%]">
          <div>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
            <p>ggg</p>
          </div>
          <div className="flex justify-end">
            <Image
              className="aspect-642/465 object-contain"
              src="/images/get-started/get-started-cover.png"
              width={642}
              height={465}
              alt="get started cover"
            />
          </div>
        </div>
      </div>
      <div className="py-40" />
    </section>
  );
}
