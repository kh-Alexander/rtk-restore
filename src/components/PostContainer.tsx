import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAPI } from "../services/BookService";
import PostItem from "./PostItem";
import { IPost, INewItem } from "../models/IPost";
import { userSlice } from "../store/reducers/UserSlice";

import ShoppingCartTable from "./ShoppingCartTable";

const PostContainer = () => {
  // useLogger(onAddedToCart);

  const [items, setItems] = useState({});
  // console.log(items, "ITEMS-PostContainer");

  const [limit, setLimit] = useState(10);
  const {
    data: books,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllbooksQuery(limit, { pollingInterval: 115000 });

  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const { addBook } = userSlice.actions;

  const dispatch = useDispatch();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };
  const handleRemove = (post: IPost) => {
    deletePost(post);
  };
  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  const onAddedToCart = (id: number) => {
    if (typeof books !== "undefined") {
      const book = books.find((p: any) => p.id === id)!;
      console.log(book, "BOOK");
      const newItem: INewItem = {
        id: book.id,
        name: book.title,
        price: book.price,
        count: 1,
        // total: 1,
      };
      // console.log(newItem, "newItem");

      dispatch(addBook(newItem));
      // setItems(book);
      setItems(newItem);
    }
  };

  return (
    <div>
      <div className=" flex justify-between px-2 h-8  mb-8 bg-gray-200 ">
        <button onClick={handleCreate} className="underline hover:bg-green-300">
          Add new post
        </button>
        <br></br>
        <button
          onClick={() => refetch()}
          className="underline hover:bg-pink-300 "
        >
          Refetch
        </button>
      </div>

      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Ошибка при загрузке</h1>}
      {books &&
        books.map((el) => (
          <PostItem
            key={el.id}
            post={el}
            remove={handleRemove}
            update={handleUpdate}
            // onAddedToCart={onAddedToCart}
            onAddedToCart={() => onAddedToCart(el.id)}
          />
        ))}
      <ShoppingCartTable />
    </div>
  );
};

export default PostContainer;
