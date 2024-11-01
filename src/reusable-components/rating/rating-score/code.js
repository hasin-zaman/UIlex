const RatingScoreComponentCode = `const RatingScoreComponent = ({ totalStars = 5, Rate, totalReviews }) => {
    const filledStars = Math.floor(Rate);
    const halfStar = Rate % 1 !== 0;
    const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);

    return (
        <div className="">
            <div className="flex items-center">
                <span className="mr-2 mt-1 text-black font-extrabold">
                    {Rate.toFixed(1)}/5
                </span>

                {[...Array(filledStars)].map((_, index) => (
                    <span
                        key={\`filled-\${index}\`}
                        className="cursor-pointer text-2xl text-yellow-500"
                    >
                        ★
                    </span>
                ))}

                {halfStar && (
                    <span
                        key="half"
                        className="cursor-pointer text-2xl text-yellow-500"
                        style={{
                            display: "inline-block",
                            width: "1em",
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        <span
                            style={{
                                position: "absolute",
                                width: "50%",
                                overflow: "hidden",
                                color: "#eab308",
                                whiteSpace: "nowrap",
                            }}
                        >
                            ★
                        </span>
                        <span style={{ color: "gray" }}>★</span>
                    </span>
                )}

                {[...Array(emptyStars)].map((_, index) => (
                    <span
                        key={\`empty-\${index}\`}
                        className="cursor-pointer text-2xl text-gray-300"
                    >
                        ★
                    </span>
                ))}
            </div>
            <div className="mt-0.5 text-slate-400 text-xs font-semibold">
                Based on {totalReviews}
                {totalReviews > 1 ? \` Reviews\` : \` Review\`}
            </div>
        </div>
    );
};`;

const RatingScoreComponentUsage = `<RatingScoreComponent
    totalStars={5}
    Rate={4.5}
    totalReviews={500}
/>`;

export { RatingScoreComponentCode, RatingScoreComponentUsage };
