import QuadLayerFillHoverButton from "./QuadLayerFillHoverButton";
import { quadLayerFillHoverButtonCode, quadLayerFillHoverButtonUsage } from "./code";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function QuadLayerFillHoverButtonPage() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    }

    return (
        <>
            <Title componentTitle="Quad Layer Fill Hover Button" githubUsername="naguib-med" githubLink="https://github.com/naguib-med" />
            <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
                <CodeAndComponentViewer
                    component={
                        <QuadLayerFillHoverButton
                            btnText="Hover Me"
                            isLoading={loading}
                            onClick={handleClick}
                            bgColor="bg-transparent"
                            hoverLayerColor="bg-blue-500"
                            textColor="text-blue-600"
                            hoverTextColor="text-white"
                            borderRadius="rounded-lg"
                            borderColor="border-2 border-blue-600"
                        />
                    }
                    codeString={quadLayerFillHoverButtonCode}
                    usageCodeString={quadLayerFillHoverButtonUsage}
                />
            </Card>
        </>
    );
}
