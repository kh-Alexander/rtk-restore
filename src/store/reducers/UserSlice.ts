import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewItem } from "../../models/IPost";

const initialState: INewItem[] = [
  {
    id: 0,
    name: "",
    price: 0,
    count: 1,
    // total: 0,
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<INewItem>) {
      const book = action.payload;
      state.push(book);
    },
  },
});
export default userSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { INewItem } from "../../models/IPost";

// const x = (book) => {
//   let newItem;
//   if (book) {
//     newItem = {
//       ...book,
//       total: 1,
//     };
//   } else {
//     newItem = {
//       book,
//     };
//   }
//   return newItem;
// };

// const initialState: INewItem[] = [
//   {
//     id: 0,
//     name: "",
//     price: 0,
//   },
// ];

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addBook(state, action: PayloadAction<INewItem>) {
//       const book = action.payload;
//       const res = x(book);
//       state.push(res);
//     },
//   },
// });
// export default userSlice.reducer;
