import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Plus, 
  Package, 
  Trash2, 
  Edit3, 
  Image as ImageIcon,
  DollarSign,
  Archive,
  Search
} from "lucide-react";
import coolingPadImage from "@/assets/cooling-pad.jpg";
import laptopBagImage from "@/assets/laptop-bag.jpg";
import keyboardImage from "@/assets/keyboard.jpg";
import chargerImage from "@/assets/charger.jpg";

const ProductManagement = () => {
  const [activeForm, setActiveForm] = useState<"add" | "list" | null>("list");
  const [products, setProducts] = useState([
    { id: 1, name: "RGB Cooling Pad Pro", price: 89.99, stock: 25, category: "Cooling Pads", image: coolingPadImage, status: "Active" },
    { id: 2, name: "Premium Laptop Backpack", price: 59.99, stock: 18, category: "Bags", image: laptopBagImage, status: "Active" },
    { id: 3, name: "Wireless Mechanical Keyboard", price: 149.99, stock: 12, category: "Keyboards", image: keyboardImage, status: "Active" },
    { id: 4, name: "Fast Charge USB-C Hub", price: 39.99, stock: 8, category: "Chargers", image: chargerImage, status: "Active" },
    { id: 5, name: "Gaming Mouse Pad XL", price: 24.99, stock: 35, category: "Accessories", image: coolingPadImage, status: "Active" },
    { id: 6, name: "Laptop Stand Adjustable", price: 45.99, stock: 22, category: "Stands", image: laptopBagImage, status: "Active" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: ""
  });

  const totalProducts = products.length;
  const activeProducts = products.filter(p => p.status === "Active").length;
  const lowStockProducts = products.filter(p => p.stock < 10).length;
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);

  const handleAddProduct = () => {
    if (formData.name && formData.price && formData.stock && formData.category) {
      const newProduct = {
        id: products.length + 1,
        name: formData.name,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        category: formData.category,
        image: coolingPadImage,
        status: "Active"
      };
      setProducts([...products, newProduct]);
      setFormData({ name: "", price: "", stock: "", category: "", description: "" });
      setActiveForm("list");
    }
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const getStockBadge = (stock: number) => {
    if (stock < 5) return { variant: "destructive" as const, text: "Very Low" };
    if (stock < 10) return { variant: "warning" as const, text: "Low Stock" };
    return { variant: "success" as const, text: "In Stock" };
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
              <Package className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{totalProducts}</div>
              <p className="text-xs text-muted-foreground">{activeProducts} active products</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock Items</CardTitle>
              <Archive className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{lowStockProducts}</div>
              <p className="text-xs text-muted-foreground">Need restocking</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Inventory Value</CardTitle>
              <DollarSign className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${totalValue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Total stock value</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Categories</CardTitle>
              <Package className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">6</div>
              <p className="text-xs text-muted-foreground">Product categories</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Product Management</h1>
            <p className="text-muted-foreground">Manage your product inventory and catalog</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={activeForm === "list" ? "default" : "outline"} 
              onClick={() => setActiveForm("list")}
              className="flex items-center gap-2"
            >
              <Package className="h-4 w-4" />
              View Products
            </Button>
            <Button 
              variant={activeForm === "add" ? "default" : "outline"} 
              onClick={() => setActiveForm("add")}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Add Product Form */}
        {activeForm === "add" && (
          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                Add New Product
              </CardTitle>
              <CardDescription>Fill in the details to add a new product to your inventory</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input 
                    id="name"
                    placeholder="Enter product name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input 
                    id="category"
                    placeholder="e.g., Keyboards, Bags, etc."
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input 
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input 
                    id="stock"
                    type="number"
                    placeholder="0"
                    value={formData.stock}
                    onChange={(e) => setFormData({...formData, stock: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Enter product description..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>
              <div className="flex gap-3">
                <Button variant="gradient" onClick={handleAddProduct} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Product
                </Button>
                <Button variant="outline" onClick={() => setActiveForm("list")}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Products List */}
        {activeForm === "list" && (
          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Product Inventory ({totalProducts} Products)
              </CardTitle>
              <CardDescription>Manage and monitor your product catalog</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                  <div key={product.id} className="bg-background/50 rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-foreground">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                        </div>
                      </div>
                      <Badge {...getStockBadge(product.stock)}>
                        {getStockBadge(product.stock).text}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Price:</span>
                        <div className="font-semibold text-foreground">${product.price}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Stock:</span>
                        <div className="font-semibold text-foreground">{product.stock} units</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit3 className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        onClick={() => handleDeleteProduct(product.id)}
                        className="flex-1"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;