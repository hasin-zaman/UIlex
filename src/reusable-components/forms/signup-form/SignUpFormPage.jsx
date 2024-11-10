import { SignUpFormCode, SignUpFormCodeUsage } from "./code";
import SignUpForm from "./SignUpForm";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";

export function SignUpFormPage() {
    return (
        <>
            <Title
                componentTitle="Sign Up Form"
                githubUsername="Ravi0529"
                githubLink="https://github.com/Ravi0529"
            />
            <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
                <CodeAndComponentViewer
                    component={
                        <SignUpForm
                            title='Sign Up'
                            titlecolor='black'
                            bgColor='linear-gradient(to top right, #34D399, #3B82F6, #A78BFA)'
                            formBg='white'
                            usernames={["username", "email", "password"]}
                            focusRingColor='#93C5FD'
                            buttonTextColor='white'
                            buttonBg='#2563EB'
                            buttonText='Sign Up'
                        />
                    }
                    codeString={SignUpFormCode}
                    usageCodeString={SignUpFormCodeUsage}
                />
            </Card>
        </>
    );
}