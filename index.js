import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import addItemRoute from './Routes/addItemRoute.js';
import getItemsRoute from './Routes/getItemsRoute.js';
import deleteItemsRoute from './Routes/deleteItemsRoute.js';
import updateItemsRoute from './Routes/updateItemsRoute.js';
import signupRoute from './Routes/signupRoute.js'
// import uploadImageRoute from './Routes/uploadImageRoute.js';
import { handleImageUpload } from './controllers/uploadImageController.js'
import multer from 'multer';

const app = express();
const port = 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://husnaink467:5262@cluster0.ghk3bf3.mongodb.net/?retryWrites=true&w=majority');

app.use('/',addItemRoute);
app.use('/',getItemsRoute);
app.use('/',deleteItemsRoute);
app.use('/',updateItemsRoute);
app.use('/', signupRoute);
// app.use('/upload-image', uploadImageRoute); 

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), handleImageUpload);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import adsController from './adsController.js'; r
// import car from './Routes/Car.js';
// const app = express();
// const port = 5000;

// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb+srv://husnaink467:5262@cluster0.ghk3bf3.mongodb.net/?retryWrites=true&w=majority');

// app.use('/ads', adsController); // Updated route path

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//     app.use('/add-item',car);
// });











// import mongoose from 'mongoose';
// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { carModel } from "./modules/carModel.js";

// const app = express();
// const port = 5000;

// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb+srv://husnaink467:5262@cluster0.ghk3bf3.mongodb.net/?retryWrites=true&w=majority');

// app.post('/add-item', async (req, res) => {
//     try {
//         const { name, description, price, admprice, image } = req.body;
//         const newItem = new carModel({
//             name,
//             description,
//             price,
//             admprice,
//             image,
//         });

//         console.log("Added successfully");
//         const result = await newItem.save();
//         res.status(201).json(result);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/get-items', async (req, res) => {
//     try {
//         console.log("Fetched");
//         const items = await carModel.find();
//         res.status(200).json(items);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.put('/update-item/:id', async (req, res) => {
//     try {
//       const itemId = req.params.id;
//       const { name, description, price, admprice, image } = req.body;
  
//       // Find the item by ID and update its properties
//       const updatedItem = await carModel.findByIdAndUpdate(
//         itemId,
//         {
//           name,
//           description,
//           price,
//           admprice,
//           image,
//         },
//         { new: true } // Return the updated document
//       );
  
//       if (!updatedItem) {
//         return res.status(404).json({ error: 'Item not found' });
//       }
  
//       res.status(200).json(updatedItem);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

// app.delete('/delete-item/:id', async (req, res) => {
//     try {
//         console.log("Deleted");
//         const itemId = req.params.id;
//         const deletedItem = await carModel.findByIdAndDelete(itemId);

//         if (!deletedItem) {
//             return res.status(404).json({ error: 'Ad not found' });
//         }

//         res.status(200).json({ message: 'Ad deleted' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });