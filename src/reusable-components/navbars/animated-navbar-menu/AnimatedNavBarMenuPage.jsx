import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import AnimatedNavbarMenu from "./AnimatedNavBarMenu";
import { animatedNavbarMenuCode, animatedNavbarMenuCodeUsage } from "./code";

export function AnimatedNavbarMenuPage() {
  return (
    <>
      <Title
        componentTitle="Animated Navbar Menu"
        githubUsername="jovdim"
        githubLink="https://github.com/jovdim"
      />
      <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
        <CodeAndComponentViewer
          component={
            
              <AnimatedNavbarMenu
                 items = {["Home", "Inventions", "Gallery", "Institution", "Contact"]}
                 hoverBgColor = "#646465"
                 dropdownBg = "#151B28"
                 dropdownPosition = "right"
                 dropdownWidth = "100vw"
                 dropdownHeight = "100vh"
                 iconMenuColor = "#2F84FF"
                 iconMenuSize = "40px"
              />
          }
          codeString={animatedNavbarMenuCode}
          usageCodeString={animatedNavbarMenuCodeUsage}
        />
      </Card>
    </>
  );
}
