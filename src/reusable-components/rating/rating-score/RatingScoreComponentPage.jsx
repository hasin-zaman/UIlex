import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { RatingScoreComponentCode, RatingScoreComponentUsage } from "./code";

import RatingScoreComponent from "./RatingScoreComponent";

export function RatingScoreComponentPage() {
    return (
        <>
            <Title
                componentTitle="Rating Score Component"
                githubUsername="dtd0103"
                githubLink="https://github.com/dtd0103"
            />
            <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
                <CodeAndComponentViewer
                    component={
                        <RatingScoreComponent
                            totalStars={5}
                            Rate={4.5}
                            totalReviews={500}
                        />
                    }
                    codeString={RatingScoreComponentCode}
                    usageCodeString={RatingScoreComponentUsage}
                />
            </Card>
        </>
    );
}
