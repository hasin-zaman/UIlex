import { Inbox, Mail, Settings, Home, Phone, Cloud, Info } from "lucide-react";

export const navlinks = [
  {
    title: "Buttons",
    icon: Inbox,
    subItems: [
      { title: "Loading Button", url: "/buttons/loading-button" },
      { title: "Button 2", url: "#" },
      { title: "Button 3", url: "#" },
    ],
  },
  {
    title: "Text",
    icon: Mail,
    subItems: [
      { title: "Text 1", url: "#" },
      { title: "Text 2", url: "#" },
      { title: "Text 3", url: "#" },
    ],
  },
  {
    title: "Input Fields",
    icon: Mail,
    subItems: [
      { title: "Animated Input", url: "/input-fields/animated-input" },
      { title: "Input Field 2", url: "#" },
      { title: "Input Field 3", url: "#" },
    ],
  },
  {
    title: "Dialog Box",
    icon: Settings,
    subItems: [
      { title: "Dialog Box 1", url: "#" },
      { title: "Dialog Box 2", url: "#" },
      { title: "Dialog Box 3", url: "#" },
    ],
  },
  {
    title: "Forms",
    icon: Home,
    subItems: [
      { title: "Form 1", url: "#" },
      { title: "Form 2", url: "#" },
      { title: "Form 3", url: "#" },
    ],
  },
  {
    title: "Cards",
    icon: Phone,
    subItems: [
      { title: "Card 1", url: "#" },
      { title: "Card 2", url: "#" },
      { title: "Card 3", url: "#" },
    ],
  },
  {
    title: "Tables",
    icon: Info,
    subItems: [
      { title: "Table 1", url: "#" },
      { title: "Table 2", url: "#" },
      { title: "Table 3", url: "#" },
    ],
  },
];