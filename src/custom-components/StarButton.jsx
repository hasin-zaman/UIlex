import { Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function StarButton() {
  const openGitHub = () => {
    window.open("https://github.com/hasin-zaman/UIlex", "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={openGitHub}
            className="mt-1 relative inline-flex overflow-hidden rounded-full p-[1px]"
          >
            <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[hsl(var(--sidebar-background))] px-2 py-1 text-sm font-medium text-primary-foreground backdrop-blur-3xl">
              <Star width="20" />
            </span>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Star Us</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}