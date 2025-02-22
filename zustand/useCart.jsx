import { create } from "zustand";

export const useCart = create((set) => ({
    cart: [],

    addToCart: (product) => {
        set(state => ({
            cart: [...state.cart, { ...product, quantity: product.quantity || 1 }]
        }));
    },

    inc: (id) => set(state => ({
        cart: state.cart.map(item =>
            item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        ),
    })),

    dec: (id) => set(state => ({
        cart: state.cart
            .map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter(item => item.quantity > 0), 
    })),
}));
