import { Home } from "lucide-react";
import Link from "next/link";
import { AnimateIn } from "@/components/animations/animate";
import { buttonVariants } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { homePath } from "@/paths";

const NotFound = () => (
  <div className="flex w-full items-center justify-center">
    <div className="flex h-screen items-center border-x">
      <div>
        <div className="absolute inset-x-0 h-px bg-border" />
        <AnimateIn variant="fadeUp">
          <Empty className="md:m-24">
            <AnimateIn delay={0.2} variant="fadeUp">
              <EmptyHeader>
                <EmptyTitle className="whitespace-pre font-mono text-[0.5rem] text-accent md:text-xl">
                  {`
       _             _            _           
   _  /\\ \\         / /\\       _  /\\ \\         
  /\\_\\\\ \\ \\       / /  \\     /\\_\\\\ \\ \\        
 / / / \\ \\ \\     / / /\\ \\   / / / \\ \\ \\       
/ / /   \\ \\ \\   / / /\\ \\ \\ / / /   \\ \\ \\      
\\ \\ \\____\\ \\ \\ /_/ /  \\ \\ \\\\ \\ \\____\\ \\ \\     
 \\ \\________\\ \\\\ \\ \\   \\ \\ \\\\ \\________\\ \\    
  \\/________/\\ \\\\ \\ \\   \\ \\ \\/________/\\ \\   
            \\ \\ \\\\ \\ \\___\\ \\ \\         \\ \\ \\  
             \\ \\_\\\\ \\/____\\ \\ \\         \\ \\_\\ 
              \\/_/ \\_________\\/          \\/_/ 
                                              
          `}
                </EmptyTitle>
                <EmptyDescription className="text-nowrap">
                  The page you're looking for might have been <br />
                  moved or doesn't exist.
                </EmptyDescription>
              </EmptyHeader>
            </AnimateIn>
            <AnimateIn delay={0.4} variant="fadeUp">
              <EmptyContent>
                <div className="flex gap-2">
                  <Link
                    className={buttonVariants({ variant: "link", size: "lg" })}
                    href={homePath()}
                    prefetch={true}
                  >
                    <Home /> Go Home
                  </Link>
                </div>
              </EmptyContent>
            </AnimateIn>
          </Empty>
        </AnimateIn>
        <div className="absolute inset-x-0 h-px bg-border" />
      </div>
    </div>
  </div>
);

export { NotFound };
