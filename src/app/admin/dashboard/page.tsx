/* eslint-disable no-console */
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@heroui/react";
import { Users, Activity, Settings, ArrowUpRight } from "lucide-react";

export default function DashboardPage() {
  const [data, setData] = useState<{
    count: number;
    pagination: any;
    profileCount: number;
    profileList: any[];
    unverified: number;
    users: any[];
    verified: number;
  } | null>(null);
  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(
        "https://api-hyperbuds-backend.onrender.com/api/v1/users/admin/dashboard",
      );
      const json = await res.json();

      setData(json);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const stats = [
    {
      title: "Total Collaborators",
      value: data?.count,
      icon: Users,
      accent: "bg-purple-50 text-purple-700 ring-purple-100",
    },
    {
      title: "Active Sessions",
      value: data?.verified,
      icon: Activity,
      accent: "bg-violet-50 text-violet-700 ring-violet-100",
    },
    {
      title: "Profiles",
      value: data?.profileCount,
      icon: Users,
      accent: "bg-amber-50 text-amber-700 ring-amber-100",
    },
    {
      title: "System Health",
      value: "98%",
      icon: Settings,
      accent: "bg-purple-50 text-purple-700 ring-purple-100",
    },
  ];

  return (
    <div className="space-y-6 text-slate-900">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-6 px-6 py-6 lg:grid-cols-[1.6fr_0.9fr] lg:px-8 lg:py-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-100">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-700" />
              Admin overview
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                Manage operations with clarity.
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-slate-600 lg:text-base">
                Track collaborator activity, monitor system health, and move
                through the portal with a calm, professional interface.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-purple-700/20 transition hover:bg-purple-800">
                Create collaborator
                <ArrowUpRight size={16} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                View activity
              </button>
            </div>
          </div>

          <div className="grid gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
            <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Today
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-100">
                Light mode only
              </div>
            </div>
            <div className="rounded-xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-100">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                System health
              </p>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-semibold text-slate-900">98%</p>
                  <p className="text-sm text-slate-500">
                    Stable and performing well
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
                  Healthy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <Card
                key={i}
                className="border border-slate-200 bg-white shadow-sm"
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className={`rounded-2xl p-3 ring-1 ${stat.accent}`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{stat.title}</p>
                    <p className="text-2xl font-semibold text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-6 lg:p-7">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-purple-50 p-3 text-purple-700 ring-1 ring-purple-100">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Activity Overview
                  </h3>
                  <p className="max-w-prose text-sm leading-6 text-slate-600">
                    Chart integration would go here. The page now uses a cleaner
                    visual hierarchy, stronger spacing, and a purple-led accent
                    system.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-4">
          <Card className="border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-4">
              <h4 className="text-sm font-semibold text-slate-900">
                Quick Actions
              </h4>
              <div className="mt-3 flex flex-col gap-2">
                <button className="w-full rounded-xl bg-purple-700 px-3 py-2.5 text-left text-sm font-medium text-white shadow-sm transition hover:bg-purple-800">
                  Create Collaborator
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  View Logs
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-4">
              <h4 className="text-sm font-semibold text-slate-900">
                System Status
              </h4>
              <div className="mt-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
                <p className="text-sm text-slate-600">
                  All systems operational
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  No alerts, no degraded services.
                </p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
