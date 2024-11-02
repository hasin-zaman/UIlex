const ratingInputComponentCode = `import { useState } from "react";

const RatingInputComponent = ({ totalStars = 5, onRate }) => {
    const [selectedStar, setSelectedStar] = useState(0);

    const handleStarClick = (index) => {
        setSelectedStar(index + 1);
        if (onRate) {
            onRate(index + 1);
        }
    };

    return (
        <div className="flex items-center">
            {[...Array(totalStars)].map((_, index) => (
                <span
                    key={index}
                    onClick={() => handleStarClick(index)}
                    className={\`cursor-pointer text-2xl transition-all duration-500 \${selectedStar > index ? "text-yellow-500" : "text-gray-300"}\`}
                >
                    ★
                </span>
            ))}
            <span className="ml-2 mt-1 text-slate-400 text-sm font-semibold transition-all duration-500">
                {selectedStar}/5
            </span>
        </div>
    );
};

export default RatingInputComponent;`;

const ratingInputComponentUsage = `<RatingInputComponent
    totalStars={5}
    onRate={handleRate}
/>`;

export { ratingInputComponentCode, ratingInputComponentUsage };
