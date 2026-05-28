"use client";

import { Sidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen overflow-hidden">
      <Sidebar />
      {/* <div className="flex flex-col flex-1">
        <Navbar /> */}
      <main className="flex-1 overflow-y-auto bg-default-50/50 p-4 md:p-8">
        {children}
      </main>
      {/* </div> */}
    </div>
  );
}
