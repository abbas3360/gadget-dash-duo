import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  Search,
  Bell,
  User,
  Menu,
  Grid3X3,
  ListOrdered
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  type: "admin" | "user";
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ type, activeTab, onTabChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const adminTabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "customers", label: "Customers", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const userTabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "categories", label: "Categories", icon: Grid3X3 },
    { id: "cart", label: "Cart", icon: ShoppingCart },
    { id: "orders", label: "Orders", icon: ListOrdered },
    { id: "profile", label: "Profile", icon: User },
  ];

  const tabs = type === "admin" ? adminTabs : userTabs;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b shadow-sm">
        <div className="max-w-7xl mx-auto w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Laptop Accessories</span>
              {type === "admin" && (
                <Badge variant="secondary" className="ml-2">Admin</Badge>
              )}
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onTabChange(tab.id)}
                  className="flex items-center gap-2"
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                  {tab.id === "cart" && type === "user" && (
                    <Badge variant="destructive" className="ml-1 h-5 min-w-5 text-xs">3</Badge>
                  )}
                  {tab.id === "orders" && type === "admin" && (
                    <Badge variant="warning" className="ml-1 h-5 min-w-5 text-xs">23</Badge>
                  )}
                </Button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {type === "admin" ? "Admin" : "Alex"}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b shadow-sm">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-foreground">Laptop Accessories</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="secondary" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {type === "admin" ? "Admin" : "Alex"}
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="fixed top-16 right-0 bottom-0 w-64 bg-card border-l shadow-lg p-4">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => {
                      onTabChange(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full justify-start gap-3"
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                    {tab.id === "cart" && type === "user" && (
                      <Badge variant="destructive" className="ml-auto h-5 min-w-5 text-xs">3</Badge>
                    )}
                    {tab.id === "orders" && type === "admin" && (
                      <Badge variant="warning" className="ml-auto h-5 min-w-5 text-xs">23</Badge>
                    )}
                  </Button>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t">
                <Button variant="outline" size="sm" className="w-full justify-start gap-3">
                  <User className="h-4 w-4" />
                  {type === "admin" ? "Admin Profile" : "Alex's Profile"}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-t shadow-lg">
          <div className="grid grid-cols-5 py-2">
            {tabs.slice(0, 5).map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                size="sm"
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex flex-col items-center gap-1 h-auto py-2 px-2",
                  activeTab === tab.id && "text-primary"
                )}
              >
                <div className="relative">
                  <tab.icon className="h-5 w-5" />
                  {tab.id === "cart" && type === "user" && (
                    <Badge className="absolute -top-2 -right-2 h-4 min-w-4 text-xs bg-destructive">3</Badge>
                  )}
                  {tab.id === "orders" && type === "admin" && (
                    <Badge className="absolute -top-2 -right-2 h-4 min-w-4 text-xs bg-warning">23</Badge>
                  )}
                </div>
                <span className="text-xs">{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;