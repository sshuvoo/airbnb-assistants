export interface HowItWorksStep {
  step: string;
  icon: string;
  label: string;
  iconSize: {
    w: number;
    h: number;
  };
}

export const howItWorksData: HowItWorksStep[] = [
  {
    step: "01",
    icon: "./images/get-started/user-plus.svg",
    label: "Add requirements\n& sign up today",
    iconSize: { w: 72.18, h: 58 },
  },
  {
    step: "02",
    icon: "./images/get-started/users.svg",
    label: "Connect with your CSM &\nonboarding team",
    iconSize: { w: 108.57, h: 123.74 },
  },
  {
    step: "03",
    icon: "./images/get-started/headphones.svg",
    label: "Meet your STR\nAssistant next week",
    iconSize: { w: 69.86, h: 58 },
  },
];
