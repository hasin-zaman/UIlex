import Avatar from "./Avatar";
import { avatarCode, avatarUsage } from "./code";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";

export function AvatarPage() {
    return (
        <>
            <Title componentTitle="Avatar" githubUsername="naguib-med" githubLink="https://github.com/naguib-med" />
            <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
                <CodeAndComponentViewer
                    component={
                        <>
                            <Avatar type="image" imgSrc="https://ui-avatars.com/api/?background=random" size="h-16 w-16" borderColor="border-2 border-gray-300" />
                            <Avatar type="initials" initials="JD" size="h-12 w-12" bgColor="bg-blue-500" textColor="text-white" />
                            <Avatar type="icon" icon="👤" size="h-12 w-12" bgColor="bg-green-500" textColor="text-white" />
                            <Avatar type="image" imgSrc="https://ui-avatars.com/api/?background=random" size="h-16 w-16" status="online" />
                            <Avatar type="image" imgSrc="https://ui-avatars.com/api/?background=random" size="h-16 w-16" badgeCount={5} />
                        </>
                    }
                    codeString={avatarCode}
                    usageCodeString={avatarUsage}
                />
            </Card>
        </>
    );
}
