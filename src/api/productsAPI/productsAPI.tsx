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

    products.forEach(async (product: any) => {
      for (const product of products) {
        try {
          await db
            .collection("products")
            .doc(product.id.toString())
            .set(product);
        } catch (error) {}
      }
    });
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

async function fetchSpecificProduct(productId: any) {
  try {
    const productDoc = await db.collection("products").doc(productId).get();
    if (!productDoc.exists) {
      throw new Error("Product not found");
    }
    return productDoc.data();
  } catch (error) {
    console.error("Error fetching product from Firestore:", error);
    throw error;
  }
}

// async function fetchAnotherProduct(anotherProductId: any, productId: any) {
//   try {
//     if (anotherProductId != productId) {
//       const productDoc = await db
//         .collection("products")
//         .doc(anotherProductId)
//         .get();
//       if (!productDoc.exists) {
//         throw new Error("Product not found");
//       }
//       return productDoc.data();
//     }
//   } catch (error) {
//     console.error("Error fetching product from Firestore:", error);
//     throw error;
//   }
// }

export {
  saveProductsToFirestore,
  fetchProductsFromFirestore,
  fetchSpecificProduct,
};
