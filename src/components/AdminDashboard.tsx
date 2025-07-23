import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  AlertTriangle, 
  MessageSquare, 
  Plus,
  TrendingUp,
  Users,
  DollarSign
} from "lucide-react";

const AdminDashboard = () => {
  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 5500 },
  ];

  const lowStockItems = [
    { name: "Laptop Cooling Pad", stock: 5 },
    { name: "USB-C Charger", stock: 3 },
    { name: "Wireless Mouse", stock: 2 },
  ];

  const recentMessages = [
    { customer: "John Doe", message: "Issue with order #1234", time: "2 min ago" },
    { customer: "Jane Smith", message: "Product inquiry", time: "15 min ago" },
    { customer: "Mike Johnson", message: "Return request", time: "1 hour ago" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Laptop Accessories Store Management</p>
          </div>
          <Button variant="gradient" size="lg" className="w-full md:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$45,231</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1,234</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Orders</CardTitle>
              <Package className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">23</div>
              <p className="text-xs text-muted-foreground">Need attention</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">856</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5.2% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Sales Overview
              </CardTitle>
              <CardDescription>Monthly sales performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-2">
                {salesData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-gradient-primary rounded-t-lg mb-2 transition-all duration-500 hover:opacity-80"
                      style={{ height: `${(data.sales / 6000) * 200}px` }}
                    ></div>
                    <span className="text-xs text-muted-foreground">{data.month}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Inventory Alerts */}
          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Low Stock Alerts
              </CardTitle>
              <CardDescription>Items running low on inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lowStockItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <span className="font-medium text-foreground">{item.name}</span>
                    <Badge variant="destructive">{item.stock} left</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Messages */}
        <Card className="bg-gradient-card border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Recent Customer Messages
            </CardTitle>
            <CardDescription>Latest customer inquiries and feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((message, index) => (
                <div key={index} className="flex items-start justify-between p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                  <div className="flex-1">
                    <div className="font-medium text-foreground">{message.customer}</div>
                    <div className="text-sm text-muted-foreground mt-1">{message.message}</div>
                  </div>
                  <div className="text-xs text-muted-foreground ml-4">{message.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;