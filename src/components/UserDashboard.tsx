import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingBag, 
  Laptop, 
  Gamepad2, 
  Keyboard, 
  Battery, 
  Star,
  ShoppingCart,
  Package,
  Heart,
  User
} from "lucide-react";
import coolingPadImage from "@/assets/cooling-pad.jpg";
import laptopBagImage from "@/assets/laptop-bag.jpg";
import keyboardImage from "@/assets/keyboard.jpg";
import chargerImage from "@/assets/charger.jpg";

const UserDashboard = () => {
  const categories = [
    { name: "Laptop Bags", icon: ShoppingBag, count: 45 },
    { name: "Cooling Pads", icon: Laptop, count: 32 },
    { name: "Keyboards", icon: Keyboard, count: 28 },
    { name: "Chargers", icon: Battery, count: 56 },
    { name: "Gaming", icon: Gamepad2, count: 23 },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "RGB Cooling Pad Pro",
      price: 89.99,
      originalPrice: 129.99,
      image: coolingPadImage,
      rating: 4.8,
      reviews: 156,
      discount: 30
    },
    {
      id: 2,
      name: "Premium Laptop Backpack",
      price: 59.99,
      originalPrice: 79.99,
      image: laptopBagImage,
      rating: 4.6,
      reviews: 98,
      discount: 25
    },
    {
      id: 3,
      name: "Wireless Mechanical Keyboard",
      price: 149.99,
      originalPrice: 199.99,
      image: keyboardImage,
      rating: 4.9,
      reviews: 203,
      discount: 25
    },
    {
      id: 4,
      name: "Fast Charge USB-C Hub",
      price: 39.99,
      originalPrice: 59.99,
      image: chargerImage,
      rating: 4.7,
      reviews: 87,
      discount: 33
    },
  ];

  const recentOrders = [
    { id: "#LA-001", product: "RGB Cooling Pad", status: "Delivered", date: "Dec 15", price: "$89.99" },
    { id: "#LA-002", product: "Laptop Backpack", status: "Shipped", date: "Dec 18", price: "$59.99" },
    { id: "#LA-003", product: "Wireless Mouse", status: "Processing", date: "Dec 20", price: "$29.99" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "success";
      case "Shipped": return "default";
      case "Processing": return "warning";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-primary rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Welcome back, Alex!</h1>
                <p className="text-white/80">Discover the latest laptop accessories</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-xl font-bold">12</div>
                <div className="text-sm text-white/80">Total Orders</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">3</div>
                <div className="text-sm text-white/80">In Cart</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">8</div>
                <div className="text-sm text-white/80">Wishlist</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">$247</div>
                <div className="text-sm text-white/80">Total Saved</div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-20"></div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-foreground">Featured Products</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="bg-gradient-card border-0 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                      -{product.discount}%
                    </Badge>
                  )}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-foreground mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Button size="sm" variant="gradient">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Orders & Cart Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                My Recent Orders
              </CardTitle>
              <CardDescription>Track your latest purchases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{order.id}</div>
                      <div className="text-sm text-muted-foreground">{order.product}</div>
                    </div>
                    <div className="text-right mr-4">
                      <div className="font-medium text-foreground">{order.price}</div>
                      <div className="text-sm text-muted-foreground">{order.date}</div>
                    </div>
                    <Badge variant={getStatusColor(order.status) as any}>
                      {order.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cart Preview */}
          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                Cart Preview
              </CardTitle>
              <CardDescription>3 items ready for checkout</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                  <img src={coolingPadImage} alt="Product" className="w-12 h-12 rounded object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-foreground">RGB Cooling Pad</div>
                    <div className="text-sm text-muted-foreground">Qty: 1</div>
                  </div>
                  <div className="font-medium text-foreground">$89.99</div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                  <img src={keyboardImage} alt="Product" className="w-12 h-12 rounded object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Wireless Keyboard</div>
                    <div className="text-sm text-muted-foreground">Qty: 1</div>
                  </div>
                  <div className="font-medium text-foreground">$149.99</div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-foreground">Total</span>
                    <span className="text-xl font-bold text-foreground">$267.97</span>
                  </div>
                  <Button variant="gradient" className="w-full">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Offers Banner */}
        <Card className="bg-gradient-primary border-0 shadow-lg text-white overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">🎉 Holiday Special Offer!</h3>
              <p className="text-white/90 mb-4">Get up to 40% off on selected laptop accessories. Limited time offer ending soon!</p>
              <Button variant="secondary" size="lg">
                Shop Now
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute right-20 bottom-0 w-20 h-20 bg-white/5 rounded-full translate-y-10"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;