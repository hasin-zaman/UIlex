import { LoginFormCode, SignInFormUsage } from "./code";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";
import LoginForm from "./SignInForm";

export function LoginFormPage() {
    return (
        <>
            <Title
                componentTitle="Login Form"
                githubUsername="jovdim"
                githubLink="https://github.com/jovdim"
            />
            <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
                <CodeAndComponentViewer
                    component={
                        <LoginForm
                            title='Login'
                            titleColor='black'
                            bgColor='linear-gradient(to top right, #F472B6, #FB923C, #FACC15)'
                            formBg='white'
                            focusRingColor='#FB923C'
                            buttonTextColor='white'
                            buttonBg='#F472B6'
                            buttonText='Login'
                           forgotPasswordRoute="#"
                           SignUpRoute="#"
                        />
                    }
                    codeString={LoginFormCode}
                    usageCodeString={SignInFormUsage}
                />
            </Card>
        </>
    );
}
