import { create } from "zustand";
import { Product } from "@/types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  clearCart: () => void;
}

// Initial dummy products in cart
const initialCart: CartItem[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 3.9, count: 120 },
    quantity: 1,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: { rate: 4.1, count: 259 },
    quantity: 2,
  },
];

export const useCartStore = create<CartStore>((set, get) => ({
  cart: initialCart,
  addToCart: (product: Product) => {
    const existing = get().cart.find((item) => item.id === product.id);
    if (existing) {
      set({
        cart: get().cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      set({ cart: [...get().cart, { ...product, quantity: 1 }] });
    }
  },
  removeFromCart: (id) => set({ cart: get().cart.filter((item) => item.id !== id) }),
  increment: (id) =>
    set({
      cart: get().cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }),
  decrement: (id) =>
    set({
      cart: get().cart.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      ),
    }),
  clearCart: () => set({ cart: [] }),
}));
