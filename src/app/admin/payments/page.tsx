import { CreditCard, TrendingUp, DollarSign, ArrowDownCircle } from "lucide-react";

const transactions = [
  { id: "TXN-001", user: "Alice Johnson", amount: "$99.00", plan: "Pro", date: "Apr 30, 2025", status: "Completed" },
  { id: "TXN-002", user: "Bob Smith", amount: "$29.00", plan: "Basic", date: "Apr 28, 2025", status: "Completed" },
  { id: "TXN-003", user: "Carol Williams", amount: "$299.00", plan: "Enterprise", date: "Apr 25, 2025", status: "Pending" },
  { id: "TXN-004", user: "David Brown", amount: "$99.00", plan: "Pro", date: "Apr 22, 2025", status: "Completed" },
  { id: "TXN-005", user: "Frank Lee", amount: "$99.00", plan: "Pro", date: "Apr 18, 2025", status: "Failed" },
];

const statusColor: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-600",
};

const summaryCards = [
  { label: "Total Revenue", value: "$48,290", icon: DollarSign, color: "bg-green-100 text-green-600" },
  { label: "This Month", value: "$6,840", icon: TrendingUp, color: "bg-indigo-100 text-indigo-600" },
  { label: "Pending Payouts", value: "$1,200", icon: ArrowDownCircle, color: "bg-yellow-100 text-yellow-600" },
];

export default function PaymentsPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="text-indigo-600" size={24} />
        <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
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

      {/* Transactions table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-800">Recent Transactions</h2>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
              <th className="text-left px-6 py-3">Transaction ID</th>
              <th className="text-left px-6 py-3">User</th>
              <th className="text-left px-6 py-3">Amount</th>
              <th className="text-left px-6 py-3">Plan</th>
              <th className="text-left px-6 py-3">Date</th>
              <th className="text-left px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-3 font-mono text-gray-500 text-xs">{t.id}</td>
                <td className="px-6 py-3 font-medium text-gray-800">{t.user}</td>
                <td className="px-6 py-3 font-semibold text-gray-900">{t.amount}</td>
                <td className="px-6 py-3 text-gray-700">{t.plan}</td>
                <td className="px-6 py-3 text-gray-500">{t.date}</td>
                <td className="px-6 py-3">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor[t.status]}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
