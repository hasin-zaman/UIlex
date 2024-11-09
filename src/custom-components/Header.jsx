import { SidebarTrigger } from "@/components/ui/sidebar";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { StarButton } from "./StarButton";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full h-12 flex justify-between items-center pr-4 z-10">
      <SidebarTrigger />
      <div className="md:h-12 w-full h-8">
        <TextHoverEffect text="By The People. For The People." />
      </div>
      <StarButton />
    </header>
  );
}
