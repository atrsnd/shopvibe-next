import { create } from "zustand";
import { Product } from "@/types/product";

interface BuyNowState {
  product: Product | null;
  setBuyNowProduct: (product: Product) => void;
  clearBuyNow: () => void;
}

export const useBuyNowStore = create<BuyNowState>((set) => ({
  product: null,
  setBuyNowProduct: (product) => set({ product }),
  clearBuyNow: () => set({ product: null }),
}));
