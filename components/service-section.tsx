import { services } from "@/data/service-data";
import Image from "next/image";
import { SectionHeader } from "./section-header";

export function ServiceSection() {
  return (
    <section>
      <SectionHeader
        className="py-13.75"
        title={{ plain: "Our", accent: "Service" }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div>
        <div className="max-w-7xl mx-auto px-5 justify-items-center sm:justify-center grid grid-cols-1 sm:grid-cols-[auto_auto] xl:grid-cols-[auto_auto_auto] gap-6.25">
          {services.map((service) => (
            <div
              key={service.id}
              className="px-8.25 py-7.5 max-w-99.25 rounded-[13px] border border-[#FAC4D2] hover:shadow-[0px_4px_90.3px_0px_#D7CDCF78] hover:border-transparent transition-all duration-300"
            >
              <div className="h-25 flex items-end mt-3.5 mb-8.75">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={service.imageSize.w}
                  height={service.imageSize.h}
                />
              </div>
              <h2 className="font-bold text-text text-[24px] leading-[125%] tracking-normal max-w-64">
                {service.title}
              </h2>
              <p className="font-medium text-sm leading-[100%] tracking-normal mt-3.5 max-w-76.5">
                {service.description}
              </p>
              <button className="w-29.75 h-9.5 border border-primary text-primary rounded-[44px] mt-8.75 font-medium text-sm tracking-normal leading-[100%]">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
