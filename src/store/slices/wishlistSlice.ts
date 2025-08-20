import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "../../types";

const STORAGE_KEY = "wishlist";

function loadFromStorage(): Movie[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveToStorage(movies: Movie[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
}

interface WishlistState {
  items: Movie[];
}

const initialState: WishlistState = {
  items: loadFromStorage(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Movie>) => {
      if (!state.items.find((m) => m.id === action.payload.id)) {
        state.items.push(action.payload);
        saveToStorage(state.items);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((m) => m.id !== action.payload);
      saveToStorage(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveToStorage([]);
    },
    hydrateWishlist: (state) => {
      state.items = loadFromStorage();
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  hydrateWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
