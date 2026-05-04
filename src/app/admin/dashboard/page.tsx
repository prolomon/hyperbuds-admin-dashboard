"use client";

import { Card, CardContent } from "@heroui/react";
import { Users, Activity, Settings, HelpCircle } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Collaborators",
      value: "24",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Active Sessions",
      value: "12",
      icon: Activity,
      color: "text-green-500",
    },
    {
      title: "System Health",
      value: "98%",
      icon: Settings,
      color: "text-purple-500",
    },
    {
      title: "Support Tickets",
      value: "3",
      icon: HelpCircle,
      color: "text-amber-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-default-500">Welcome back to your admin overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card
            key={i}
            className="border-none bg-background/60 dark:bg-default-100/50"
          >
            <CardContent className="p-4 flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-default-100 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-small text-default-500">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none bg-background/60 dark:bg-default-100/50">
        <CardContent className="p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
          <Activity className="text-default-300 mb-4" size={48} />
          <h3 className="text-xl font-semibold">Activity Overview</h3>
          <p className="text-default-500 max-w-md">
            Chart integration would go here. Using Hero UI components for a
            modern look.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
