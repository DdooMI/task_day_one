import { create } from "zustand";
export const useProducts = create((set) => ({
    products:[],
   load:() =>{
    fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => set(({products:data.products})))
            .catch(error => console.error(error));
   }
}))