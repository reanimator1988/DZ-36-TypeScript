import { createSlice } from '@reduxjs/toolkit';

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: {
    shoppingList: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.shoppingList.push({
        id: Date.now(),
        caption: action.payload.caption,
        amount: action.payload.amount,
      });
    },
    editItem: (state, action) => {
      const { id, caption, amount } = action.payload;
      const itemToUpdate = state.shoppingList.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.caption = caption;
        itemToUpdate.amount = amount;
      }
    },
    deleteItem: (state, action) => {
      const idToDelete = action.payload.id;
      state.shoppingList = state.shoppingList.filter((item) => item.id !== idToDelete);
    },
  },
});

export const { addItem, editItem, deleteItem } = shoppingSlice.actions;

export default shoppingSlice.reducer;
