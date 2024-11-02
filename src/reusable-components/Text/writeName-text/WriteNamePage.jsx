import { WriteNameCode, WriteNameUsage } from "./code";
import { useState } from "react";
import WriteName from "./WriteName";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";

export function WriteNamePage() {
  // const [loading, setLoading] = useState(false);

  // const handleClick = () => {
  //   setLoading(true);
  //   setTimeout(() => setLoading(false), 1000);
  // };

  return (
    <>
        <Title componentTitle="Write Name" githubUsername="Giang0402" githubLink="https://github.com/Giang0402"/>
        <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
            <CodeAndComponentViewer
                component={<WriteName 
                borderColor="border-blue-500"
                borderRadius="rounded-md"
                TextColor="text-blue-500"
                lineColor = "bg-blue-400"
                />} 
                codeString={WriteNameCode}
                usageCodeString={WriteNameUsage}
            />
        </Card>    
    </>
  );
}