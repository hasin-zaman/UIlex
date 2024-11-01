import React from "react";

export default function Avatar({
                                   type = "image", // "image", "initials", "icon"
                                   imgSrc,
                                   altText = "User avatar",
                                   initials = "A",
                                   icon = "👤",
                                   size = "h-12 w-12",
                                   bgColor = "bg-gray-300",
                                   textColor = "text-white",
                                   borderRadius = "rounded-full",
                                   borderColor = "border-2 border-white",
                                   status = null, // "online", "offline", null
                                   statusColor = "bg-green-500",
                                   badgeCount = 0,
                                   badgeColor = "bg-red-500",
                               }) {
    const renderAvatarContent = () => {
        switch (type) {
            case "image":
                return imgSrc ? <img src={imgSrc} alt={altText} className={`object-cover ${size} ${borderRadius}`} /> : null;
            case "initials":
                return <span className={`font-semibold ${textColor} ${size === "h-12 w-12" ? "text-lg" : "text-base"}`}>{initials}</span>;
            case "icon":
                return <span className={`text-xl ${textColor}`}>{icon}</span>;
            default:
                return null;
        }
    };

    return (
        <div className={`relative inline-flex items-center justify-center ${size} ${bgColor} ${borderColor} ${borderRadius}`}>
            {renderAvatarContent()}

            {status && (
                <span className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ${status === "online" ? statusColor : "bg-gray-400"} ring-2 ring-white`}></span>
            )}

            {badgeCount > 0 && (
                <span className={`absolute top-0 right-0 block h-4 w-4 text-xs font-bold text-white ${badgeColor} rounded-full flex items-center justify-center`}>
          {badgeCount > 9 ? "9+" : badgeCount}
        </span>
            )}
        </div>
    );
}
