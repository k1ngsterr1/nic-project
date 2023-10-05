import { QuerySnapshot } from "@firebase/firestore";
import Axios from "axios";
import app from "../firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const db = app.firestore();

async function saveProductsToFirestore() {
  try {
    const response = await Axios.get("https://fakestoreapi.com/products");
    const products = response.data;

    console.log(products);

    products.forEach(async (product: any) => {
      for (const product of products) {
        console.log(`Saving product with ID ${product.id}`);
        try {
          await db
            .collection("products")
            .doc(product.id.toString())
            .set(product);
          console.log(`Saved product with ID ${product.id}`);
        } catch (error) {
          console.error(`Error saving product ${product.id}:`, error);
        }
      }
    });
    console.log("Products saved to Firestore successfully");
  } catch (error) {
    console.error("Error fetching/saving products:", error);
  }
}

saveProductsToFirestore();

async function fetchProductsFromFirestore() {
  try {
    const QuerySnapshot = await db.collection("products").get();
    const products: any[] = [];
    QuerySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    return products;
  } catch (error) {
    console.error("Error fetching products from Firestore:", error);
    throw error;
  }
}

export { saveProductsToFirestore, fetchProductsFromFirestore };
