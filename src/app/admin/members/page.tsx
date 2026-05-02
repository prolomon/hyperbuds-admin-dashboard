import { Users, UserPlus, Search } from "lucide-react";

const members = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", plan: "Pro", status: "Active", joined: "Jan 12, 2025" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", plan: "Basic", status: "Active", joined: "Feb 3, 2025" },
  { id: 3, name: "Carol Williams", email: "carol@example.com", plan: "Enterprise", status: "Inactive", joined: "Mar 7, 2025" },
  { id: 4, name: "David Brown", email: "david@example.com", plan: "Pro", status: "Active", joined: "Mar 19, 2025" },
  { id: 5, name: "Eva Martinez", email: "eva@example.com", plan: "Basic", status: "Active", joined: "Apr 2, 2025" },
  { id: 6, name: "Frank Lee", email: "frank@example.com", plan: "Pro", status: "Suspended", joined: "Apr 14, 2025" },
];

const statusColor: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-gray-100 text-gray-600",
  Suspended: "bg-red-100 text-red-600",
};

export default function MembersPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Users className="text-indigo-600" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">Members</h1>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
          <UserPlus size={16} />
          Add Member
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search members…"
          className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Plan</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {members.map((m) => (
              <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-3 font-medium text-gray-800">{m.name}</td>
                <td className="px-6 py-3 text-gray-500">{m.email}</td>
                <td className="px-6 py-3 text-gray-700">{m.plan}</td>
                <td className="px-6 py-3">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor[m.status]}`}>
                    {m.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-gray-500">{m.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
