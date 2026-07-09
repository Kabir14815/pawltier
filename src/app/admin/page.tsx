"use client";

import { useState } from "react";
import { FaPaw, FaCalendarAlt, FaUsers, FaStar, FaChartBar, FaBell, FaSearch, FaEllipsisV, FaCheck, FaClock, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const mockAppointments = [
  {
    id: "APT001",
    ownerName: "Priya Sharma",
    petName: "Bruno",
    petType: "Dog",
    eventDate: "2024-02-15",
    eventLocation: "The Grand Banquet Hall, Mumbai",
    mobile: "+91 98765 43210",
    status: "confirmed",
    service: "Wedding Pet Sitting",
    hours: "Full Day",
  },
  {
    id: "APT002",
    ownerName: "Rohan Mehta",
    petName: "Whiskers",
    petType: "Cat",
    eventDate: "2024-02-18",
    eventLocation: "Jaipur Palace Resort",
    mobile: "+91 87654 32109",
    status: "pending",
    service: "Event Pet Sitting",
    hours: "5-6 hours",
  },
  {
    id: "APT003",
    ownerName: "Ananya K",
    petName: "Milo",
    petType: "Dog",
    eventDate: "2024-02-20",
    eventLocation: "Home — Koramangala, Bangalore",
    mobile: "+91 76543 21098",
    status: "confirmed",
    service: "Home Pet Sitting",
    hours: "3-4 hours",
  },
  {
    id: "APT004",
    ownerName: "Vikram Nair",
    petName: "Biscuit",
    petType: "Dog",
    eventDate: "2024-02-22",
    eventLocation: "Hotel Taj, Delhi",
    mobile: "+91 65432 10987",
    status: "cancelled",
    service: "Overnight Care",
    hours: "Overnight",
  },
  {
    id: "APT005",
    ownerName: "Sunita Patel",
    petName: "Max",
    petType: "Dog",
    eventDate: "2024-02-25",
    eventLocation: "Home — Baner, Pune",
    mobile: "+91 54321 09876",
    status: "pending",
    service: "Senior Pet Care",
    hours: "1-2 hours",
  },
];

const stats = [
  { label: "Total Appointments", value: "247", icon: FaCalendarAlt, color: "#FF6B35", bg: "bg-orange-50", trend: "+12% this month" },
  { label: "Active Sitters", value: "38", icon: FaUsers, color: "#4A90D9", bg: "bg-blue-50", trend: "+3 new" },
  { label: "Avg. Rating", value: "4.9★", icon: FaStar, color: "#F59E0B", bg: "bg-yellow-50", trend: "Based on 189 reviews" },
  { label: "Revenue", value: "₹1.2L", icon: FaChartBar, color: "#48BB78", bg: "bg-green-50", trend: "+18% this month" },
];

const statusStyles: Record<string, string> = {
  confirmed: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  cancelled: "bg-red-100 text-red-600",
};

const statusIcons: Record<string, React.ElementType> = {
  confirmed: FaCheck,
  pending: FaClock,
  cancelled: FaTimes,
};

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("appointments");
  const [searchQuery, setSearchQuery] = useState("");
  const [appointments, setAppointments] = useState(mockAppointments);

  const filtered = appointments.filter(
    (a) =>
      a.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const updateStatus = (id: string, status: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const navItems = [
    { id: "appointments", label: "Appointments", icon: FaCalendarAlt },
    { id: "sitters", label: "Sitters", icon: FaUsers },
    { id: "analytics", label: "Analytics", icon: FaChartBar },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#1A1A2E] text-white flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] flex items-center justify-center shadow-lg">
            <FaPaw className="text-white text-lg" />
          </div>
          <div>
            <span className="text-lg font-bold">Pawltier</span>
            <p className="text-sm text-gray-400">Admin Dashboard</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 text-left ${
                activeTab === item.id
                  ? "bg-[#FF6B35] text-white shadow-lg"
                  : "text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="text-lg" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-6 py-4 border-t border-white/10">
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            ← Back to Website
          </a>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 overflow-auto">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center"
          >
            <HiMenuAlt3 className="text-xl" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-[#1A1A2E]">
              {activeTab === "appointments" && "Appointments"}
              {activeTab === "sitters" && "Sitter Management"}
              {activeTab === "analytics" && "Analytics"}
            </h1>
            <p className="text-sm text-gray-400">
              {new Date().toLocaleDateString("en-IN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaBell className="text-gray-500 text-base" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF6B35] rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-base">
              A
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-11 h-11 ${stat.bg} rounded-xl flex items-center justify-center`}
                  >
                    <stat.icon className="text-xl" style={{ color: stat.color }} />
                  </div>
                </div>
                <p className="text-3xl font-extrabold text-[#1A1A2E]">{stat.value}</p>
                <p className="text-base text-gray-500 mt-0.5">{stat.label}</p>
                <p className="text-sm font-medium mt-2" style={{ color: stat.color }}>
                  {stat.trend}
                </p>
              </div>
            ))}
          </div>

          {/* Appointments tab */}
          {activeTab === "appointments" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Table header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border-b border-gray-50">
                <h2 className="font-bold text-[#1A1A2E]">All Appointments</h2>
                <div className="relative w-full sm:w-64">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search by name, pet, or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-gray-200 text-base text-[#1A1A2E] placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-base">
                  <thead>
                    <tr className="bg-gray-50">
                      {["ID", "Owner / Pet", "Service", "Event Date", "Location", "Status", "Actions"].map(
                        (h) => (
                          <th
                            key={h}
                            className="text-left px-5 py-3 text-sm font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap"
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filtered.map((apt) => {
                      const StatusIcon = statusIcons[apt.status];
                      return (
                        <tr key={apt.id} className="hover:bg-gray-50 transition-colors duration-150">
                          <td className="px-5 py-4 font-mono text-sm text-gray-400 whitespace-nowrap">
                            {apt.id}
                          </td>
                          <td className="px-5 py-4">
                            <p className="font-semibold text-[#1A1A2E]">{apt.ownerName}</p>
                            <p className="text-sm text-gray-400">
                              {apt.petName} · {apt.petType}
                            </p>
                            <p className="text-sm text-gray-400">{apt.mobile}</p>
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap">
                            <span className="text-[#4A4A6A]">{apt.service}</span>
                            <p className="text-sm text-gray-400">{apt.hours}</p>
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap text-[#4A4A6A]">
                            {new Date(apt.eventDate).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </td>
                          <td className="px-5 py-4 max-w-[160px]">
                            <p className="text-[#4A4A6A] truncate text-sm">{apt.eventLocation}</p>
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[apt.status]}`}
                            >
                              <StatusIcon className="text-xs" />
                              {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                              {apt.status !== "confirmed" && (
                                <button
                                  onClick={() => updateStatus(apt.id, "confirmed")}
                                  className="px-3 py-1.5 rounded-lg bg-green-50 text-green-600 text-sm font-semibold hover:bg-green-100 transition-colors"
                                >
                                  Confirm
                                </button>
                              )}
                              {apt.status !== "cancelled" && (
                                <button
                                  onClick={() => updateStatus(apt.id, "cancelled")}
                                  className="px-3 py-1.5 rounded-lg bg-red-50 text-red-500 text-sm font-semibold hover:bg-red-100 transition-colors"
                                >
                                  Cancel
                                </button>
                              )}
                              <button className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <FaEllipsisV className="text-gray-400 text-sm" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {filtered.length === 0 && (
                  <div className="py-16 text-center text-gray-400">
                    <FaPaw className="text-4xl mx-auto mb-3 opacity-30" />
                    <p>No appointments found</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Sitters tab */}
          {activeTab === "sitters" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="max-w-md mx-auto">
                <div className="text-7xl mb-4">🐾</div>
                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                  Sitter Management
                </h2>
                <p className="text-gray-400 mb-6">
                  Full sitter management with profiles, ratings, availability calendar, and earnings — coming soon in the next update.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Active", value: "38", color: "text-green-600", bg: "bg-green-50" },
                    { label: "Pending", value: "12", color: "text-yellow-600", bg: "bg-yellow-50" },
                    { label: "Total", value: "50", color: "text-blue-600", bg: "bg-blue-50" },
                  ].map((s) => (
                    <div key={s.label} className={`${s.bg} rounded-xl p-4 text-center`}>
                      <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
                      <p className="text-sm text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Analytics tab */}
          {activeTab === "analytics" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="max-w-md mx-auto">
                <div className="text-7xl mb-4">📊</div>
                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                  Analytics Dashboard
                </h2>
                <p className="text-gray-400 mb-6">
                  Detailed charts for booking trends, revenue, popular services, and customer retention — coming soon.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "This Month's Revenue", value: "₹1,24,500", note: "+18% vs last month" },
                    { label: "Conversion Rate", value: "68%", note: "+5% vs last month" },
                    { label: "Repeat Customers", value: "43%", note: "Strong loyalty" },
                    { label: "Avg. Booking Value", value: "₹1,240", note: "Per appointment" },
                  ].map((m) => (
                    <div key={m.label} className="bg-gray-50 rounded-xl p-4 text-left">
                      <p className="text-sm text-gray-400 mb-1">{m.label}</p>
                      <p className="text-2xl font-bold text-[#1A1A2E]">{m.value}</p>
                      <p className="text-sm text-[#48BB78] font-medium mt-0.5">{m.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
