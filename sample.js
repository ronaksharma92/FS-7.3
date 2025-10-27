const mongoose = require("mongoose");
const Product = require("./models/productModel");

mongoose.connect("mongodb://localhost:27017/ecommerceDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log(err));

async function insertProducts() {
  await Product.insertMany([
    {
      name: "T-Shirt",
      price: 799,
      category: "Clothing",
      variants: [
        { color: "Red", size: "M", stock: 50 },
        { color: "Blue", size: "L", stock: 30 }
      ]
    },
    {
      name: "Sneakers",
      price: 2999,
      category: "Footwear",
      variants: [
        { color: "White", size: "9", stock: 20 },
        { color: "Black", size: "10", stock: 15 }
      ]
    },
    {
      name: "Backpack",
      price: 1499,
      category: "Accessories",
      variants: [
        { color: "Grey", size: "Medium", stock: 40 },
        { color: "Blue", size: "Large", stock: 25 }
      ]
    }
  ]);
  console.log("✅ Sample products inserted!");
  mongoose.connection.close();
}

insertProducts();
