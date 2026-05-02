import { BarChart2, FileText, Download, TrendingUp } from "lucide-react";

const reports = [
  { id: 1, name: "Monthly Revenue Report", type: "Finance", generated: "May 1, 2025", size: "1.2 MB" },
  { id: 2, name: "New Member Signups – April", type: "Members", generated: "Apr 30, 2025", size: "340 KB" },
  { id: 3, name: "Support Ticket Summary", type: "Support", generated: "Apr 30, 2025", size: "512 KB" },
  { id: 4, name: "Churn Rate Analysis Q1", type: "Finance", generated: "Apr 28, 2025", size: "2.1 MB" },
  { id: 5, name: "Payment Failure Breakdown", type: "Finance", generated: "Apr 25, 2025", size: "890 KB" },
  { id: 6, name: "Member Activity Heatmap", type: "Engagement", generated: "Apr 22, 2025", size: "1.8 MB" },
];

const typeColor: Record<string, string> = {
  Finance: "bg-indigo-100 text-indigo-700",
  Members: "bg-green-100 text-green-700",
  Support: "bg-yellow-100 text-yellow-700",
  Engagement: "bg-purple-100 text-purple-700",
};

const summaryCards = [
  { label: "Total Reports", value: "28", icon: FileText, color: "bg-indigo-100 text-indigo-600" },
  { label: "Generated This Month", value: "6", icon: TrendingUp, color: "bg-green-100 text-green-600" },
];

export default function ReportsPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <BarChart2 className="text-indigo-600" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
          <FileText size={16} />
          Generate Report
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
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

      {/* Reports list */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-800">Available Reports</h2>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
              <th className="text-left px-6 py-3">Report Name</th>
              <th className="text-left px-6 py-3">Type</th>
              <th className="text-left px-6 py-3">Generated</th>
              <th className="text-left px-6 py-3">Size</th>
              <th className="text-left px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reports.map((r) => (
              <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-3 font-medium text-gray-800">{r.name}</td>
                <td className="px-6 py-3">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColor[r.type]}`}>
                    {r.type}
                  </span>
                </td>
                <td className="px-6 py-3 text-gray-500">{r.generated}</td>
                <td className="px-6 py-3 text-gray-500">{r.size}</td>
                <td className="px-6 py-3">
                  <button className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 text-xs font-medium transition-colors">
                    <Download size={14} />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
