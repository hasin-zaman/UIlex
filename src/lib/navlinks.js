import { SendHorizontal, Package2, SquareAsterisk, Bell, Star, Users, RectangleEllipsis } from "lucide-react";

export const navlinks = [
  {
    title: "Buttons",
    icon: SendHorizontal,
    subItems: [
      { title: "Loading Button", url: "/buttons/loading-button" },
      { title: "Gradient Button", url: "/buttons/gradient-button" },
      { title: "Quad Layer Fill Hover Button", url: "/buttons/quad-layer-fill-hover-button" },
    ],
  },
  {
    title: "Dialog Boxes",
    icon: Package2,
    subItems: [
      { title: "Confirmation", url: "/dialogs/confirmation-dialog" },
    ],
  },
  {
    title: "Cards",
    icon: SquareAsterisk,
    subItems: [
      { title: "Product Card", url: "/cards/product-card" },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    subItems: [
      { title: "Success Notification", url: "/notifications/success" },
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
  {
    title: "Avatars",
    icon: Users,
    subItems: [
      { title: "Avatar", url: "/avatars/avatar" },
    ],
  },
  {
    title: "Input Fields",
    icon: RectangleEllipsis,
    subItems: [
      { title: "Animated Input", url: "/input-fields/animated-input" },
    ],
  },
  {
    title: "Navbars",
    icon: RectangleEllipsis,
    subItems: [
      { title: "Animated Navbar", url: "/navbar/animated-navbar" },
    ],
  },
];
