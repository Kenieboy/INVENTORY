import React, { useState } from "react";

// components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

// custom component
import NewEntryListItem from "./NewEntryListItem";

function NewEntry() {
  const [navMenus, setNavMenus] = useState([
    {
      id: 1,
      title: "Customers",
      subMenus: [
        { id: 1, subMenu: "Invoice", page: "/invoice" },
        { id: 2, subMenu: "Receive payment", page: "/invoice" },
        { id: 3, subMenu: "Estimate", page: "/invoice" },
        { id: 4, subMenu: "Creadit note", page: "/invoice" },
        { id: 5, subMenu: "Sales receipt", page: "/invoice" },
        { id: 6, subMenu: "Refund receipt", page: "/invoice" },
        { id: 7, subMenu: "Delayed Credit", page: "/invoice" },
        { id: 8, subMenu: "Delayed charge", page: "/invoice" },
        { id: 9, subMenu: "Add customer", page: "/invoice" },
      ],
    },

    {
      id: 2,
      title: "Suppliers",
      subMenus: [
        { id: 1, subMenu: "Expense", page: "/invoice" },
        { id: 2, subMenu: "Check", page: "/invoice" },
        { id: 3, subMenu: "Bill", page: "/invoice" },
        { id: 4, subMenu: "Pay bills", page: "/invoice" },
        { id: 5, subMenu: "Purchase order", page: "/invoice" },
        { id: 6, subMenu: "Supplier credit", page: "/invoice" },
        { id: 7, subMenu: "Credit card credit", page: "/invoice" },
        { id: 8, subMenu: "Add supplier", page: "/invoice" },
      ],
    },

    {
      id: 3,
      title: "Team",
      subMenus: [
        { id: 1, subMenu: "Single time activity", page: "/invoice" },
        { id: 2, subMenu: "Weekly timesheet", page: "/invoice" },
      ],
    },

    {
      id: 4,
      title: "Other",
      subMenus: [
        { id: 1, subMenu: "Bank deposit", page: "/invoice" },
        { id: 2, subMenu: "Transfer", page: "/invoice" },
        { id: 3, subMenu: "Journal entry", page: "/invoice" },
        { id: 4, subMenu: "Statement", page: "/invoice" },
        { id: 5, subMenu: "Pay down credit card", page: "/invoice" },
        { id: 6, subMenu: "Add product/services", page: "/invoice" },
      ],
    },
  ]);
  return (
    <div className="mt-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>New</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] ">
                {navMenus.map((menu) => (
                  <div key={menu.id}>
                    <h2 className="mb-2 ml-3 font-bold text-lg">
                      {menu.title.toUpperCase()}
                    </h2>
                    {menu.subMenus.map((submenu) => (
                      <NewEntryListItem key={submenu.id} href={submenu.page}>
                        <p className="text-xs hover:underline">
                          {submenu.subMenu}
                        </p>
                      </NewEntryListItem>
                    ))}
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NewEntry;
