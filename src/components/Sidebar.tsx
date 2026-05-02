"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  HeadphonesIcon,
  BarChart2,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Members", href: "/admin/members", icon: Users },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Customer Support", href: "/admin/customer-support", icon: HeadphonesIcon },
  { label: "Reports", href: "/admin/reports", icon: BarChart2 },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    router.push("/");
  };

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-indigo-700">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20">
          <LayoutDashboard size={18} className="text-white" />
        </div>
        <span className="text-lg font-bold text-white tracking-tight">HyperBuds</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive(href)
                ? "bg-white text-indigo-700"
                : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
            }`}
          >
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-indigo-700">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-indigo-600 min-h-screen shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white shadow-md"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <aside
        className={`md:hidden fixed top-0 left-0 z-40 h-full w-64 bg-indigo-600 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
