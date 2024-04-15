import React from "react";

// components
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

function NewEntryListItem({ title, href, description, children }) {
  return (
    <li>
      <NavigationMenuLink asChild className="">
        <a
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
          href={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export default NewEntryListItem;
