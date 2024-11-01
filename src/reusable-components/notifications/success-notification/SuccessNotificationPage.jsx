import { successNotificationCode, successNotificationCodeUsage } from "./code";
import { useState } from "react";
import SuccessNotification from "./SuccessNotification";
import CodeAndComponentViewer from "@/custom-components/CodeAndComponentViewer";
import { Title } from "@/custom-components/Title";
import { Card } from "@/components/ui/card";

export function SuccessNotificationPage() {
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
    // setTimeout(() => setShowNotification(false), 3000); // Auto close after 3 seconds
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      <Title componentTitle="Success Notification" githubUsername="ntdungem" githubLink="https://github.com/ntdungem"/>
      <Card className="flex-grow h-[90%] w-full mb-5 overflow-hidden">
        <CodeAndComponentViewer
          component={
            <>
              <button 
                onClick={handleShowNotification} 
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Show Success Notification
              </button>
              {showNotification && (
                <SuccessNotification
                  message="Operation was successful!"
                  onClose={handleCloseNotification}
                />
              )}
            </>
          }
          codeString={successNotificationCode}
          usageCodeString={successNotificationCodeUsage}
        />
      </Card>    
    </>
  );
}