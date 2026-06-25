export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  imageSize: {
    w: number;
    h: number;
  };
}

export const services: Service[] = [
  {
    id: 1,
    icon: "./images/icons/service/task.svg",
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSize: { w: 84, h: 84 },
  },
  {
    id: 2,
    icon: "./images/icons/service/calender.svg",
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSize: { w: 98, h: 97 },
  },
  {
    id: 3,
    icon: "./images/icons/service/cleaner.svg",
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSize: { w: 78, h: 78 },
  },
  {
    id: 4,
    icon: "./images/icons/service/review.svg",
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSize: { w: 91.8, h: 88.33 },
  },
  {
    id: 5,
    icon: "./images/icons/service/tracker.svg",
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSize: { w: 75, h: 89.75 },
  },
  {
    id: 6,
    icon: "./images/icons/service/support.svg",
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSize: { w: 74.68, h: 100.71 },
  },
];
