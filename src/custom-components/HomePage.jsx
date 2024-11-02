import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Header } from "./Header";
import { contributors } from "@/lib/contributors";

export function HomePage() {
    return (
        <main className="relative min-h-screen md:h-screen w-full flex justify-center items-end">
            <Header />
            <div className="min-h-[70%] m-auto px-10 py-24">
        
                <div className="mb-8">
                    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 drop-shadow-lg leading-tight">
                        About Us
                    </h2>
                    <div className="w-16 h-1 mt-3 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 rounded-full"></div>
                </div>
  
                <div className="max-w-4xl mx-auto mb-10">
                    <p className="text-lg leading-relaxed text-gray-300 tracking-wide">
                        UIlex is a community-driven platform where developers can share their reusable 
                        components for the benefit of the community and their future projects. Often, 
                        developers, including myself, face challenges when searching through previous 
                        projects to find components that can be reused. With UIlex, you can add your reusable 
                        components for both yourself and the rest of the community. You can make meaningful 
                        contributions and get featured on UIlex. This initiative is meant to encourage innovation, 
                        creativity, and collaboration.
                    </p>
                </div>
  
                <div className="mt-8">
                    <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-pink-500 animate-fadeIn">
                        Our Contributors
                    </h3>
                    <div className="w-12 h-1 mt-3 bg-gradient-to-r from-teal-400 via-purple-400 to-pink-500 rounded-full"></div>
                    <div className="flex flex-row items-center mt-5 w-full">
                        <AnimatedTooltip items={contributors} />
                    </div>
                </div>
            </div>
        </main>
    );
}
  