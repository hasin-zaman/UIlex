import { AnimatedInputCode, AnimatedInputUsage } from "./code";
import AnimatedInput from "./AnimatedInput";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";

export function AnimatedInputPage() {
  return (
    <>
        <Title componentTitle="Animated Input" githubUsername="Giang0402" githubLink="https://github.com/Giang0402"/>
        <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
            <CodeAndComponentViewer
                component={<AnimatedInput 
                borderColor="border-blue-500"
                borderRadius="rounded-md"
                TextColor="text-blue-500"
                lineColor = "bg-blue-400"
                />} 
                codeString={AnimatedInputCode}
                usageCodeString={AnimatedInputUsage}
            />
        </Card>    
    </>
  );
}