import { v2 as cloudinary } from "cloudinary";
import productmodel from "../models/productmodel.js";

// Helper: upload a buffer to Cloudinary and return the secure URL
const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { resource_type: "image" },
            (error, result) => {
                if (error) return reject(error);
                resolve(result.secure_url);
            }
        );
        stream.end(fileBuffer);
    });
};

// function for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subcategory, sizes, bestseller } = req.body;

        // Collect only the images that were actually uploaded
        const imageFiles = [
            req.files.image1?.[0],
            req.files.image2?.[0],
            req.files.image3?.[0],
            req.files.image4?.[0],
        ].filter(Boolean);

        // Upload all images to Cloudinary in parallel
        const imageUrls = await Promise.all(
            imageFiles.map((file) => uploadToCloudinary(file.buffer))
        );

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subcategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true",
            images: imageUrls,
            date: Date.now(),
        };

        const product = new productmodel(productData);
        await product.save();

        res.json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// function for list products
const listProduct = async (req, res) => {
    try {
        const products = await productmodel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// function for removing a product
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        await productmodel.findByIdAndDelete(id);
        res.json({ success: true, message: "Product removed successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// function for a single product
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productmodel.findById(productId);
        if (!product) {
            return res.json({ success: false, message: "Product not found" });
        }
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addProduct, listProduct, removeProduct, singleProduct };