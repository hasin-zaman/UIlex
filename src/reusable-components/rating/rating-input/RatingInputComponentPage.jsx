import { useState } from "react";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { ratingInputComponentCode, ratingInputComponentUsage } from "./code";

import RatingInputComponent from "./RatingInputComponent";

export function RatingInputComponentPage() {
    const [rating, setRating] = useState(0);

    const handleRate = (newRating) => {
        setRating(newRating);
        console.log("Rating:", newRating);
    };

    return (
        <>
            <Title
                componentTitle="Rating Input Component"
                githubUsername="dtd0103"
                githubLink="https://github.com/dtd0103"
            />
            <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
                <CodeAndComponentViewer
                    component={
                        <RatingInputComponent
                            totalStars={5}
                            onRate={handleRate}
                            totalReviews={500}
                        />
                    }
                    codeString={ratingInputComponentCode}
                    usageCodeString={ratingInputComponentUsage}
                />
            </Card>
        </>
    );
}
