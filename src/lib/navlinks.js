import { Inbox, Mail, Settings, Home, Phone, Cloud, Info, BotMessageSquare, Star } from "lucide-react";

export const navlinks = [
  {
    title: "Buttons",
    icon: Inbox,
    subItems: [
      { title: "Loading Button", url: "/buttons/loading-button" },
      { title: "Gradient Button", url: "/buttons/gradient-button" },
      { title: "Quad Layer Fill Hover Button", url: "/buttons/quad-layer-fill-hover-button" },
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
    title: "Dialog Box",
    icon: Settings,
    subItems: [
      { title: "Confirmation", url: "/dialogs/confirmation-dialog" },
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
      { title: "Product Card", url: "/cards/product-card" },
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
  {
    title: "Notifications",
    icon: BotMessageSquare,
    subItems: [
      { title: "Success Notification", url: "/notifications/success" },
      { title: "Table 2", url: "#" },
      { title: "Table 3", url: "#" },
    ],
  },
  {
        title: "Ratings",
        icon: Star,
        subItems: [
            { title: "Rating Input Component", url: "/ratings/rating-input" },
            { title: "Rating Score Component", url: "/ratings/rating-score" },
        ],
    },
];
