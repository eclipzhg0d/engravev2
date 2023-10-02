import Link from "next/link";

import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

export function MainNav({ className, ...props }) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/dashboard/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/dashboard/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/dashboard/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>{" "}
      <Link
        href="/"
        className=" text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Live
      </Link>
    </nav>
  );
}