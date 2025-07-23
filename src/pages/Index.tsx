import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Shield, User } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
              <Package className="h-10 w-10 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Laptop Accessories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your premier destination for high-quality laptop accessories. Experience our modern dashboard interfaces designed for both customers and administrators.
            </p>
          </div>
        </div>

        {/* Dashboard Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Customer Dashboard</h3>
              <p className="text-muted-foreground mb-6">
                Browse products, manage orders, and enjoy a seamless shopping experience.
              </p>
              <Link to="/user">
                <Button variant="gradient" size="lg" className="w-full">
                  Enter User Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Admin Dashboard</h3>
              <p className="text-muted-foreground mb-6">
                Manage inventory, track sales, and oversee your e-commerce operations.
              </p>
              <Link to="/admin">
                <Button variant="gradient" size="lg" className="w-full">
                  Enter Admin Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8">
          <div className="text-center">
            <div className="text-primary font-semibold mb-1">Mobile-First Design</div>
            <div className="text-sm text-muted-foreground">Optimized for all devices</div>
          </div>
          <div className="text-center">
            <div className="text-primary font-semibold mb-1">Modern UI/UX</div>
            <div className="text-sm text-muted-foreground">Clean and intuitive interface</div>
          </div>
          <div className="text-center">
            <div className="text-primary font-semibold mb-1">Real-time Updates</div>
            <div className="text-sm text-muted-foreground">Live data synchronization</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
