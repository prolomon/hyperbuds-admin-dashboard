import {
  Users,
  CreditCard,
  HeadphonesIcon,
  BarChart2,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const stats = [
  {
    label: "Total Members",
    value: "12,480",
    change: "+8%",
    up: true,
    icon: Users,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    label: "Revenue",
    value: "$48,290",
    change: "+12%",
    up: true,
    icon: CreditCard,
    color: "bg-green-100 text-green-600",
  },
  {
    label: "Support Tickets",
    value: "134",
    change: "-5%",
    up: false,
    icon: HeadphonesIcon,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    label: "Monthly Reports",
    value: "28",
    change: "+3%",
    up: true,
    icon: BarChart2,
    color: "bg-purple-100 text-purple-600",
  },
];

const recentActivity = [
  { user: "Alice Johnson", action: "Joined as member", time: "2 min ago" },
  { user: "Bob Smith", action: "Made a payment of $99", time: "15 min ago" },
  { user: "Carol Williams", action: "Opened a support ticket", time: "1 hr ago" },
  { user: "David Brown", action: "Renewed subscription", time: "3 hr ago" },
  { user: "Eva Martinez", action: "Joined as member", time: "5 hr ago" },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map(({ label, value, change, up, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4">
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${color}`}>
              <Icon size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-xl font-bold text-gray-900">{value}</p>
              <p className={`text-xs font-medium flex items-center gap-0.5 ${up ? "text-green-500" : "text-red-500"}`}>
                {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {change} this month
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-base font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-100">
          {recentActivity.map(({ user, action, time }) => (
            <li key={`${user}-${time}`} className="py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-800">{user}</p>
                <p className="text-xs text-gray-500">{action}</p>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">{time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
