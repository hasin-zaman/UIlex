export default function QuadLayerFillHoverButton({
                                                     btnText = "Hover Me",
                                                     isLoading = false,
                                                     onClick,
                                                     bgColor = "bg-transparent",
                                                     hoverLayerColor = "bg-indigo-500",
                                                     textColor = "text-indigo-600",
                                                     hoverTextColor = "text-white",
                                                     borderRadius = "rounded-md",
                                                     borderColor = "border-2 border-indigo-600",
                                                 }) {
    return (
        <button
            type="button"
            disabled={isLoading}
            onClick={onClick}
            className={`group relative px-6 py-2 overflow-hidden font-semibold ${bgColor} ${textColor} ${borderRadius} ${borderColor} transition-all duration-300 flex items-center justify-center gap-2`}
        >
            <span className={`absolute top-0 left-0 w-full h-0 ${hoverLayerColor} transition-all duration-300 ease-out group-hover:h-1/2`}></span>
            <span className={`absolute bottom-0 right-0 w-full h-0 ${hoverLayerColor} transition-all duration-300 ease-out group-hover:h-1/2`}></span>
            <span className={`absolute top-0 right-0 w-0 h-full ${hoverLayerColor} transition-all duration-300 ease-out group-hover:w-1/2`}></span>
            <span className={`absolute bottom-0 left-0 w-0 h-full ${hoverLayerColor} transition-all duration-300 ease-out group-hover:w-1/2`}></span>

            <div className="flex items-center">
                {isLoading && (
                    <div className="border-t-4 border-white rounded-full h-5 w-5 animate-spin mr-2"></div>
                )}

                <span className={`relative transition duration-300 ${textColor} group-hover:${hoverTextColor} ${isLoading ? 'ml-2' : ''}`}>
                    {btnText}
                </span>
            </div>
        </button>
    );
}

