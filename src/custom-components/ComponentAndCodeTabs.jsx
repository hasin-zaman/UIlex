import { Tabs } from "@/components/ui/tabs";
import CodeDisplay from "./CodeDisplay";

export function ComponentAndCodeTabs({ component, codeString, usageCodeString }) {
    const tabs = [
        {
          title: "Component",
          value: "component",
          content: (
            <div className="bg-card text-card-foreground h-full w-full flex items-center justify-center rounded-xl p-4 border border-border">
              <div className="bg-foreground h-full w-full flex items-center justify-center rounded-lg">
                {component}
              </div>
            </div>
          ),
        },
        {
          title: "Code",
          value: "code",
          content: (
            <CodeDisplay codeString={codeString} />
          ),
        },
        {
          title: "Usage",
          value: "usage",
          content: (
            <CodeDisplay codeString={usageCodeString} />
          ),
        },
      ];
      

  return (
    <div className="flex-grow w-full pb-5 overflow-hidden">
      <div className="h-[87%] relative flex flex-col w-full items-start justify-start">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}