"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  Building2,
  CreditCard,
  HelpCircle,
  Home,
  Menu,
  MessagesSquare,
  Receipt,
  Settings,
  Users2,
  Video,
  Wallet,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        icon: Home,
        href: "/dashboard",
      },
      {
        title: "Analytics",
        icon: BarChart2,
        href: "/analytics",
      },
      {
        title: "Organization",
        icon: Building2,
        href: "/organization",
      },
    ],
  },
  {
    title: "Finance",
    items: [
      {
        title: "Transactions",
        icon: Wallet,
        href: "/transactions",
      },
      {
        title: "Invoices",
        icon: Receipt,
        href: "/invoices",
      },
      {
        title: "Payments",
        icon: CreditCard,
        href: "/payments",
      },
    ],
  },
  {
    title: "Team",
    items: [
      {
        title: "Members",
        icon: Users2,
        href: "/members",
      },
      {
        title: "Chat",
        icon: MessagesSquare,
        href: "/chat",
      },
      {
        title: "Meetings",
        icon: Video,
        href: "/meetings",
      },
    ],
  },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden fixed left-4 top-4 z-40"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
          </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <aside className={cn("hidden lg:block w-64 border-r", className)}>
        <SidebarContent />
      </aside>
    </>
  );

  function SidebarContent() {
    return (
      <div className="h-full flex flex-col">
        <div className="h-16 flex items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl">Financial Dashboard</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 py-4">
          <nav className="grid gap-2 px-4">
            {sidebarItems.map((group, i) => (
              <div key={i} className="grid gap-2">
                <h3 className="text-xs font-semibold text-muted-foreground px-2">
                  {group.title}
                </h3>
                {group.items.map((item, j) => (
                  <Button
                    key={j}
                    asChild
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className="justify-start"
                  >
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </div>
            ))}
          </nav>
        </ScrollArea>
        <div className="border-t p-4">
          <nav className="grid gap-2">
            <Button asChild variant="ghost" className="justify-start">
              <Link href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start">
              <Link href="/help">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    );
  }
}
