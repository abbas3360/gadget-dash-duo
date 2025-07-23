import UserDashboard from "@/components/UserDashboard";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const User = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <UserDashboard />;
      case "categories":
        return (
          <div className="min-h-screen bg-background p-6 pt-20 md:pt-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-4">Product Categories</h1>
              <p className="text-muted-foreground">Browse products by category.</p>
            </div>
          </div>
        );
      case "cart":
        return (
          <div className="min-h-screen bg-background p-6 pt-20 md:pt-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-4">Shopping Cart</h1>
              <p className="text-muted-foreground">Review items in your cart.</p>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="min-h-screen bg-background p-6 pt-20 md:pt-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-4">My Orders</h1>
              <p className="text-muted-foreground">Track your order history.</p>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="min-h-screen bg-background p-6 pt-20 md:pt-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-4">User Profile</h1>
              <p className="text-muted-foreground">Manage your account settings.</p>
            </div>
          </div>
        );
      default:
        return <UserDashboard />;
    }
  };

  return (
    <div>
      <Navigation type="user" activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="pt-16 md:pt-20 pb-20 md:pb-0">
        {renderContent()}
      </div>
    </div>
  );
};

export default User;