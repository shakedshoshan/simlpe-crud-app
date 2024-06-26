const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");

const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('hello from node API')
});

// routes
app.use("/api/product", productRoute);

// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find()
//         console.log("All products fetched successfully!");
//         res.status(200).json(products)
//     } catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// app.get('/api/product/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const products = await Product.findById(id)
//         console.log("One product fetched successfully!");
//         res.status(200).json(products)
//     } catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// //-----create products-----//
// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body)
//         if(!product){
//             return res.status(404).json({message: 'Product data not found!'})
//         }
//         console.log("Product created successfully!");
//         res.status(200).json(product)
//     } catch(error){
//         res.status(500).json({message: error.message})
//     }

//     // console.log(req.body);
//     // res.send(req.body);
// });


// //-----update products-----//
// app.put('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
    
//         const product = await Product.findByIdAndUpdate(id, req.body);
    
//         if (!product) {
//           return res.status(404).json({ message: "Product not found" });
//         }
    
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
// })


// //-----delete products-----//
//  app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
    
//         const product = await Product.findByIdAndDelete(id);
    
//         if (!product) {
//           return res.status(404).json({ message: "Product not found" });
//         }
    
//         res.status(200).json({ message: "Product deleted successfully" });
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
// })
mongoose
  .connect(
   SECRET_MONGODB_URI,
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });


 


