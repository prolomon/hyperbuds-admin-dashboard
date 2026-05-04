"use client";

import React from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Plus,
} from "lucide-react";
import { Button, Avatar, Accordion, Tooltip } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";

import { ThemeSwitcher } from "@/components/theme-switch";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    href: "/admin/dashboard",
  },
  {
    title: "Collaborators",
    icon: <Users size={20} />,
    children: [
      {
        title: "All Collaborators",
        icon: <Users size={16} />,
        href: "/admin/collaborators",
      },
      {
        title: "Add Collaborator",
        icon: <Plus size={16} />,
        href: "/admin/collaborators/add-collaborator",
      },
    ],
  },
  {
    title: "Logs",
    icon: <FileText size={20} />,
    href: "/admin/log",
  },
  {
    title: "Settings",
    icon: <Settings size={20} />,
    href: "/admin/settings",
  },
  {
    title: "Help & Support",
    icon: <HelpCircle size={20} />,
    href: "/admin/help-support",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(true);

  const isActive = (path: string) => pathname === path;

  return (
    <aside
      className={`bg-content1 border-r border-divider h-screen sticky top-0 transition-all duration-300 flex flex-col ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        {isOpen && (
          <div className="flex items-center gap-2 font-bold text-xl overflow-hidden whitespace-nowrap">
            <div className="bg-primary p-1.5 rounded-lg shrink-0">
              <LayoutDashboard className="text-primary-foreground" size={20} />
            </div>
            <span>Unified Portal</span>
          </div>
        )}
        <Button
          isIconOnly
          className={!isOpen ? "mx-auto" : ""}
          variant="ghost"
          onPress={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      <div className="flex-grow overflow-y-auto py-4 px-3 flex flex-col gap-2">
        {sidebarItems.map((item) => {
          if (item.children) {
            return (
              <Accordion key={item.title} className="px-0">
                <Accordion.Item key={item.title}>
                  <Accordion.Heading>
                    <Accordion.Trigger className="w-full flex items-center gap-2 py-2 px-3 hover:bg-default-100 rounded-lg">
                      {item.icon}
                      {isOpen && (
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      )}
                    </Accordion.Trigger>
                  </Accordion.Heading>
                  <Accordion.Panel>
                    <div className="flex flex-col gap-1 pl-6 pt-1">
                      {item.children.map((child) => (
                        <Button
                          key={child.href}
                          fullWidth
                          className="justify-start gap-2 h-9 px-2"
                          size="sm"
                          variant={isActive(child.href) ? "primary" : "ghost"}
                          onPress={() => router.push(child.href)}
                        >
                          {child.icon}
                          {isOpen && <span>{child.title}</span>}
                        </Button>
                      ))}
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            );
          }

          const content = (
            <Button
              fullWidth
              className={`justify-start gap-3 p-3 h-12 ${!isOpen ? "justify-center" : ""}`}
              variant={isActive(item.href || "") ? "primary" : "ghost"}
              onPress={() => router.push(item.href || "#")}
            >
              {item.icon}
              {isOpen && (
                <span className="font-medium text-sm">{item.title}</span>
              )}
            </Button>
          );

          return isOpen ? (
            <div key={item.title}>{content}</div>
          ) : (
            <Tooltip key={item.title}>
              <Tooltip.Trigger>{content}</Tooltip.Trigger>
              <Tooltip.Content placement="right">{item.title}</Tooltip.Content>
            </Tooltip>
          );
        })}
      </div>

      <div className="p-4 border-t border-divider flex flex-col gap-4">
        <div
          className={`flex items-center ${isOpen ? "justify-between" : "justify-center"}`}
        >
          {isOpen && (
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                <Avatar.Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              </Avatar>
              <div className="flex flex-col">
                <span className="text-xs font-bold whitespace-nowrap overflow-hidden">
                  John Doe
                </span>
                <span className="text-[10px] text-default-500">Admin</span>
              </div>
            </div>
          )}
          {!isOpen && (
            <Avatar size="sm">
              <Avatar.Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </Avatar>
          )}
          {isOpen && <ThemeSwitcher />}
        </div>
        {!isOpen && (
          <div className="flex justify-center">
            <ThemeSwitcher />
          </div>
        )}
        <Button
          className={!isOpen ? "mx-auto" : ""}
          variant="danger"
          fullWidth={isOpen}
          isIconOnly={!isOpen}
          onPress={() => router.push("/")}
        >
          <LogOut size={20} />
          {isOpen && "Logout"}
        </Button>
      </div>
    </aside>
  );
}
