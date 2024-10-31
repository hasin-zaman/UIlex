import { productCardCode, productCardUsage } from "./code";
import { useState } from "react";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";
import ProductCard from "./ProductCard";

export function ProductCardPage() {
    const [loading, setLoading] = useState(false);

    const handleAddToCart = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    };

    return (
        <>
            <Title componentTitle="Product Card" githubUsername="nawalirfan" githubLink="https://github.com/nawalirfan" />
            <Card className="flex-grow h-full w-full mb-5">
                <CodeAndComponentViewer
                    component={<ProductCard
                        title={'IPhone 16 Pro Max 256gb Desert Titanium'}
                        imgLink={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSGqMgjwSO-qaa6zk_fGPzrST0c7hWt4TdA&s'}
                        price={6000}
                        currency={'$'}
                        rating={3}
                        handleAddToCart={handleAddToCart}
                        isLoading={loading}
                    />}
                    codeString={productCardCode}
                    usageCodeString={productCardUsage}
                />
            </Card>
        </>
    );
}