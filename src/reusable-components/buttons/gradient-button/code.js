const gradientButtonCode =
    `export default function GradientButton({ btnText = 'Submit', isLoading = false, height, width, borderRadius = '20px', type, onClick, fromColor = 'from-blue-500', viaColor = 'viw-purple-500', toColor = 'to-pink-500' }) {
    return (
        <div className={\`\${height} \${width} flex items-center justify-center py-3\`}>
            <button
                type={type}
                disabled={isLoading}
                onClick={onClick}
                className={\`pe-6 py-3 text-white font-semibold \${borderRadius} bg-gradient-to-r \${fromColor} \${viaColor} \${toColor} hover:brightness-110 transition duration-300 \${height} \${width}\`}
            >

                <div className="flex items-center justify-center gap-2">
                    <div className={\`border-t-4 border-white rounded-full h-6 w-6 animate-spin \${isLoading ? 'opacity-100' : 'opacity-0'}\`} />
                    {btnText}
                </div>
            </button>
        </div>
    );
}`;

const gradientButtonUsage =
    `<GradientButton
     btnText="Submit"
     isLoading={loading}
     onClick={handleClick}
     height="h-[50px]"
     width="w-[150px]"
     borderRadius="rounded-[18px]"
     fromColor="from-blue-500"
     viaColor="via-violet-500"
     toColor="to-pink-500"
/>`;

export { gradientButtonCode, gradientButtonUsage }