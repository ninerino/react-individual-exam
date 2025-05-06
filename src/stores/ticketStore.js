import { create } from 'zustand';

export const useTicketStore = create((set) => ({
  confirmedTickets: [],

  confirmTickets: (items) => {
    set(state => ({
      confirmedTickets: [...state.confirmedTickets, ...items]
    }));
  }
}));
