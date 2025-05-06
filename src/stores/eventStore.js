import { create } from 'zustand'
import axios from 'axios'

export const useEventStore = create((set) => ({
	events: [],
	isLoading: false,
	isError: false,

	fetchEvents: async () => {
		set({ isLoading: true, isError: false })
		try {
		const response = await axios.get('https://santosnr6.github.io/Data/events.json');
		set({ events: response.data.events, isLoading: false })
		} catch (error) {
		console.error("Error fetching:", error)
		set({ isError: true, isLoading: false })
		}
	}
}))
