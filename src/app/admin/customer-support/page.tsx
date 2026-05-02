import { HeadphonesIcon, CheckCircle, Clock, AlertCircle } from "lucide-react";

const tickets = [
  { id: "TKT-101", user: "Alice Johnson", subject: "Cannot access Pro features", priority: "High", status: "Open", created: "Apr 29, 2025" },
  { id: "TKT-102", user: "Bob Smith", subject: "Billing issue – double charged", priority: "High", status: "In Progress", created: "Apr 28, 2025" },
  { id: "TKT-103", user: "Carol Williams", subject: "Password reset not working", priority: "Medium", status: "Resolved", created: "Apr 26, 2025" },
  { id: "TKT-104", user: "David Brown", subject: "Feature request: dark mode", priority: "Low", status: "Open", created: "Apr 24, 2025" },
  { id: "TKT-105", user: "Eva Martinez", subject: "App crashes on mobile", priority: "High", status: "In Progress", created: "Apr 22, 2025" },
];

const statusColor: Record<string, string> = {
  Open: "bg-red-100 text-red-600",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Resolved: "bg-green-100 text-green-700",
};

const priorityColor: Record<string, string> = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-green-600",
};

const summaryCards = [
  { label: "Open Tickets", value: "42", icon: AlertCircle, color: "bg-red-100 text-red-600" },
  { label: "In Progress", value: "18", icon: Clock, color: "bg-yellow-100 text-yellow-600" },
  { label: "Resolved", value: "76", icon: CheckCircle, color: "bg-green-100 text-green-600" },
];

export default function CustomerSupportPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <HeadphonesIcon className="text-indigo-600" size={24} />
        <h1 className="text-2xl font-bold text-gray-900">Customer Support</h1>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {summaryCards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4">
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${color}`}>
              <Icon size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-xl font-bold text-gray-900">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tickets table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-800">Support Tickets</h2>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
              <th className="text-left px-6 py-3">Ticket ID</th>
              <th className="text-left px-6 py-3">User</th>
              <th className="text-left px-6 py-3">Subject</th>
              <th className="text-left px-6 py-3">Priority</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tickets.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-3 font-mono text-gray-500 text-xs">{t.id}</td>
                <td className="px-6 py-3 font-medium text-gray-800">{t.user}</td>
                <td className="px-6 py-3 text-gray-600">{t.subject}</td>
                <td className={`px-6 py-3 font-medium ${priorityColor[t.priority]}`}>{t.priority}</td>
                <td className="px-6 py-3">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor[t.status]}`}>
                    {t.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-gray-500">{t.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
