import { gradientButtonCode, gradientButtonUsage } from "./code";
import { useState } from "react";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import GradientButton from "./GradientButton";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";

export function GradientButtonPage() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    };

    return (
        <>
            <Title componentTitle="Gradient Button" githubUsername="nawalirfan" githubLink="https://github.com/nawalirfan" />
            <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
                <CodeAndComponentViewer
                    component={
                        <GradientButton
                            btnText="Submit"
                            isLoading={loading}
                            onClick={handleClick}
                            height="h-[50px]"
                            width="w-[150px]"
                            borderRadius="rounded-[18px]"
                            fromColor="from-blue-500"
                            viaColor="via-violet-500"
                            toColor="to-pink-500"
                        />
                    }
                    codeString={gradientButtonCode}
                    usageCodeString={gradientButtonUsage}
                />
            </Card>

        </>
    );
}