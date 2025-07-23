import AdminDashboard from "@/components/AdminDashboard";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <AdminDashboard />;
      case "products":
        return (
          <div className="min-h-screen bg-background p-6 pt-20 md:pt-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-4">Products Management</h1>
              <p className="text-muted-foreground">Manage your product catalog here.</p>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="min-h-screen bg-background p-6 pt-20 md:pt-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-4">Orders Management</h1>
              <p className="text-muted-foreground">Track and manage customer orders.</p>
            </div>
          </div>
        );
      case "customers":
        return (
          <div className="min-h-screen bg-background p-6 pt-20 md:pt-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-4">Customer Management</h1>
              <p className="text-muted-foreground">View and manage customer accounts.</p>
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="min-h-screen bg-background p-6 pt-20 md:pt-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-4">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Detailed analytics and reports.</p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="min-h-screen bg-background p-6 pt-20 md:pt-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-4">Admin Settings</h1>
              <p className="text-muted-foreground">Configure your admin dashboard.</p>
            </div>
          </div>
        );
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div>
      <Navigation type="admin" activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="pt-16 md:pt-20 pb-20 md:pb-0">
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;