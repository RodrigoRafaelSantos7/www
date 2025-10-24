import { Home } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { homePath } from "@/paths";

const NotFoundPage = () => (
  <div className="flex w-full items-center justify-center">
    <div className="flex h-screen items-center border-x">
      <div>
        <div className="absolute inset-x-0 h-px bg-border" />
        <Empty className="md:m-24">
          <EmptyHeader>
            <EmptyTitle className="font-black font-mono text-8xl">
              404
            </EmptyTitle>
            <EmptyDescription className="text-nowrap">
              The page you're looking for might have been <br />
              moved or doesn't exist.
            </EmptyDescription>
          </EmptyHeader>
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
        </Empty>
        <div className="absolute inset-x-0 h-px bg-border" />
      </div>
    </div>
  </div>
);

export default NotFoundPage;
