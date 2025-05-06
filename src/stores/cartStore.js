import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (event) => {
    set({
      cartItems: [...get().cartItems, { ...event, amount: 1 }]
    });
  },

  updateAmount: (ticketId, amount) => {
    if (amount < 1) return;
    set({
      cartItems: get().cartItems.map(item =>
        item.ticketId === ticketId ? { ...item, amount } : item
      )
    });
  },

  removeFromCart: (ticketId) => {
    set({
      cartItems: get().cartItems.filter(item => item.ticketId !== ticketId)
    });
  },

  clearCart: () => {
    set({ cartItems: [] });
  }
}));
