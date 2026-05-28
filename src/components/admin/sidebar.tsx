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
import Image from "next/image";
import Link from "next/link";

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
  const activeRowClass =
    "bg-purple-700 text-white shadow-md shadow-purple-700/20";
  const inactiveRowClass = "text-slate-700 hover:bg-slate-100";

  return (
    <aside
      className={`h-screen sticky top-0 transition-all duration-300 flex flex-col border-r border-slate-200 bg-white text-slate-900 shadow-[0_0_0_1px_rgba(15,23,42,0.02)] ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-4">
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-3" href="/admin/dashboard">
            <div className="rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
              <Image alt="Hyperbuds" height={40} src="/logo.png" width={40} />
            </div>
            {isOpen && (
              <span className="font-semibold tracking-tight text-[15px]">
                Hyperbuds
              </span>
            )}
          </Link>
        </div>
        <Button
          isIconOnly
          className={!isOpen ? "mx-auto" : ""}
          variant="ghost"
          onPress={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      <div className="flex-grow overflow-y-auto px-3 py-4 flex flex-col gap-2">
        {sidebarItems.map((item) => {
          if (item.children) {
            return (
              <Accordion key={item.title} className="px-0">
                <Accordion.Item key={item.title}>
                  <Accordion.Heading>
                    <Accordion.Trigger className="w-full flex items-center gap-2 rounded-xl px-3 py-2.5 hover:bg-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-500">{item.icon}</span>
                        {isOpen && (
                          <span className="text-sm font-medium text-slate-700">
                            {item.title}
                          </span>
                        )}
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Heading>
                  <Accordion.Panel>
                    <div className="flex flex-col gap-1.5 pl-6 pt-1.5">
                      {item.children.map((child) => (
                        <Button
                          key={child.href}
                          fullWidth
                          className={`justify-start gap-2 h-10 px-3 rounded-xl ${
                            isActive(child.href)
                              ? activeRowClass
                              : inactiveRowClass
                          }`}
                          size="sm"
                          variant="ghost"
                          onPress={() => router.push(child.href)}
                        >
                          <span
                            className={
                              isActive(child.href)
                                ? "text-white"
                                : "text-slate-500"
                            }
                          >
                            {child.icon}
                          </span>
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
              className={`justify-start gap-3 h-11 rounded-xl px-3 ${
                !isOpen ? "justify-center" : ""
              } ${isActive(item.href || "") ? activeRowClass : inactiveRowClass}`}
              variant="ghost"
              onPress={() => router.push(item.href || "#")}
            >
              <span
                className={
                  isActive(item.href || "") ? "text-white" : "text-slate-500"
                }
              >
                {item.icon}
              </span>
              {isOpen && (
                <span
                  className={`font-medium text-sm ${
                    isActive(item.href || "") ? "text-white" : "text-slate-700"
                  }`}
                >
                  {item.title}
                </span>
              )}
            </Button>
          );

          return isOpen ? (
            <div key={item.title} className="relative">
              {isActive(item.href || "") && (
                <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-md bg-blue-600" />
              )}
              {content}
            </div>
          ) : (
            <Tooltip key={item.title}>
              <Tooltip.Trigger>{content}</Tooltip.Trigger>
              <Tooltip.Content placement="right">{item.title}</Tooltip.Content>
            </Tooltip>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 border-t border-slate-200/80 p-4">
        <div
          className={`flex items-center ${isOpen ? "justify-between" : "justify-center"}`}
        >
          {isOpen && (
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                <Avatar.Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              </Avatar>
              <div className="flex flex-col">
                <span className="text-xs font-semibold whitespace-nowrap overflow-hidden text-slate-800">
                  John Doe
                </span>
                <span className="text-[10px] text-slate-500">Admin</span>
              </div>
            </div>
          )}
          {!isOpen && (
            <Avatar size="sm">
              <Avatar.Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </Avatar>
          )}
        </div>
        <Button
          className={!isOpen ? "mx-auto" : ""}
          fullWidth={isOpen}
          isIconOnly={!isOpen}
          variant="ghost"
          onPress={() => router.push("/")}
        >
          <LogOut size={20} />
          {isOpen && "Logout"}
        </Button>
      </div>
    </aside>
  );
}
