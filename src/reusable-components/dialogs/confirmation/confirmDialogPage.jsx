import { confirmDialogCode, confirmDialogUsage } from "./code";
import { useState } from "react";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";
import ConfirmDialog from "./confirmDialog";
import GradientButton from "@/reusable-components/buttons/gradient-button/GradientButton";

export function ConfirmDialogPage() {
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Title componentTitle="Gradient Button" githubUsername="nawalirfan" githubLink="https://github.com/nawalirfan" />
            <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
                <CodeAndComponentViewer
                    component={
                        <>
                            <GradientButton btnText="Delete" borderRadius="rounded-lg" onClick={() => setIsOpen(true)} fromColor="from-red-500" viaColor="via-red-500" toColor="to-red-500"/>
                            {isOpen && <ConfirmDialog
                                title="Confirm Delete"
                                confirmationText="Are you sure you want to delete this item?"
                                handleSubmit={handleSubmit}
                                closeDialog={() => setIsOpen(false)}
                            />}
                        </>

                    }
                    codeString={confirmDialogCode}
                    usageCodeString={confirmDialogUsage}
                />
            </Card>

        </>
    );
}