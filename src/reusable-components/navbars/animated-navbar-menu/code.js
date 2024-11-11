const animatedNavbarMenuCode = `
import React, { useState, useEffect } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function AnimatedNavbarMenu({
  items = ["Home", "Inventions", "Gallery", "Institution", "Contact"],
  dropdownBg = "#151B28",
  hoverBgColor = "#646465",
  dropdownWidth = "100vw",
  dropdownHeight = "100vh",
  iconMenuColor = "#2F84FF",
  iconMenuSize = "40px",
  dropdownPosition = "right",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      const menuItems = document.querySelectorAll("li.menu-item");
      menuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          item.style.backgroundColor = hoverBgColor;
        });
        item.addEventListener("mouseleave", () => {
          item.style.backgroundColor = "transparent";
        });
      });
      return () => {
        menuItems.forEach((item) => {
          item.removeEventListener("mouseenter", () => {});
          item.removeEventListener("mouseleave", () => {});
        });
      };
    }
  }, [isOpen, hoverBgColor]);

  return (
    <nav
      style={{
        zIndex: 10,
      }}
    >
      {/* Toggle Button with Animated Icon */}
      <button
        className={\`m-0 p-0 cursor-pointer bg-none border-none transition-transform duration-300 ease-in-out transform \${
          isOpen ? "rotate-90" : "rotate-0"
        }\`}
        onClick={toggleMenu}
        aria-label="Menu Toggle"
      >
        {isOpen ? (
          <Cross2Icon
            style={{
              color: iconMenuColor,
              width: iconMenuSize,
              height: iconMenuSize,
            }}
          />
        ) : (
          <HamburgerMenuIcon
            style={{
              color: iconMenuColor,
              width: iconMenuSize,
              height: iconMenuSize,
            }}
          />
        )}
      </button>

      {/* Smooth Full-Width Slide-In Dropdown */}
      <div
        className="fixed top-0 overflow-hidden"
        style={{
          [dropdownPosition === "left" ? "left" : "right"]: 0,
          width: isOpen ? dropdownWidth : "0",
          height: isOpen ? dropdownHeight : "0",
          backgroundColor: dropdownBg,
          boxShadow: isOpen ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
          transition: "width 0.4s ease, height 0.4s ease",
          zIndex: -1,
        }}
      >
        {/* Slide-In Menu Items */}
        <ul
          className={\`list-none py-8 px-4 m-0 flex flex-col items-center \${
            isOpen ? "opacity-100" : "opacity-0"
          }\`}
        >
          {items.map((item, index) => (
            <li
              key={item}
              className={\`menu-item \${isOpen ? "opacity-100" : "opacity-0"} text-center \${
                isOpen ? "-translate-x-0" : "translate-x-[-100px]"
              } w-full mb-[1.5rem] transition-colors duration-300 ease-in-out \`}
              style={{
                transition: \`opacity 0.4s ease \${
                  index * 0.1
                }s, transform 0.4s ease \${index * 0.1}s\`,
              }}
            >
              <a
                href="#"
                className={\`block px-4 py-3 text-white text-decoration-none rounded-md text-[1.1rem] font-medium transition-colors duration-200 ease-in-out\`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
`;

const animatedNavbarMenuCodeUsage = `  <AnimatedNavbarMenu
                 items = {["Home", "Inventions", "Gallery", "Institution", "Contact"]}
                 hoverBgColor = "#646465"
                 dropdownBg = "#151B28"
                 dropdownPosition = "right"
                 dropdownWidth = "100vw"
                 dropdownHeight = "100vh"
                 iconMenuColor = "#2F84FF"
                 iconMenuSize = "40px"
              />`;

export { animatedNavbarMenuCode, animatedNavbarMenuCodeUsage };
