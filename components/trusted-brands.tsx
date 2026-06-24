import Image from "next/image";
import Marquee from "react-fast-marquee";

const brandList = [
  {
    name: "Agoda",
    imageUrl: "./images/trusted-brands/agoda.svg",
  },
  {
    name: "Airbnb",
    imageUrl: "./images/trusted-brands/airbnb.svg",
  },
  {
    name: "Booking.com",
    imageUrl: "./images/trusted-brands/booking.svg",
  },
  {
    name: "Expedia",
    imageUrl: "./images/trusted-brands/expedia.svg",
  },
  {
    name: "Home-To-Go",
    imageUrl: "./images/trusted-brands/home-to-go.svg",
  },
  {
    name: "TripAdvisor",
    imageUrl: "./images/trusted-brands/tripadvisor.svg",
  },
  {
    name: "Vrbo",
    imageUrl: "./images/trusted-brands/vrbo.svg",
  },
];

export function TrustedBrands() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 pt-12.5">
        <h2 className="font-semibold text-xl leading-[100%] text-center">
          Trusted by leaders in 50+ industries
        </h2>
      </div>
      <div className="mt-9 bg-foreground h-19.25 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-5 overflow-hidden">
          <Marquee pauseOnHover>
            <div className="flex items-center gap-x-15.25">
              {[...brandList, ...brandList].map((brand, i) => (
                <Image
                  key={i}
                  src={brand.imageUrl}
                  alt={brand.name}
                  width={0}
                  height={0}
                  className="h-9 w-auto max-w-47"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
