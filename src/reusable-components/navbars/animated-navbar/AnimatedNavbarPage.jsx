import { animatedNavbarCode, animatedNavbarCodeUsage } from "./code";
import AnimatedNavbar from "./AnimatedNavbar";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";

export function AnimatedNavbarPage() {
  return (
    <>
      <Title 
        componentTitle="Animated Navbar" 
        githubUsername="Govindggupta"
        githubLink="https://github.com/Govindggupta"
      />
      <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
        <CodeAndComponentViewer
          component={
            <AnimatedNavbar
              items={['Home', 'About', 'Services', 'Portfolio', 'Contact']}
              navbarColor="bg-gray-800"
              textColor="text-white"
              hoverBgColor="gray"
            />
          }
          codeString={animatedNavbarCode}
          usageCodeString={animatedNavbarCodeUsage}
        />
      </Card>    
    </>
  );
}
