import React, { FC } from "react";
import { useEffect } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
  onAddedToCart: any;
}

const PostItem: FC<PostItemProps> = ({
  post,
  remove,
  update,
  onAddedToCart,
}) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };
  // const onAddedToCart = (id: number) => {
  //   console.log(id, "test Add");

  // };

  return (
    <div className=" flex pt-2 pb-2 w-full mt-2 bg-green-200">
      <div onClick={handleUpdate}></div>
      <div className="flex justify-between w-full bg-blue-100">
        <img
          // className="w-32 md:w-32 lg:w-48"
          className="w-32 relative"
          src={post.coverImage}
          alt="cover"
        />
        <div className="">
          <div>
            {post.id}. {post.title}
          </div>
          <div>{post.author}</div>
          <div> {post.price}</div>
          <button
            className="bg-green-400 py-2 px-4 mt-4 rounded-full"
            onClick={onAddedToCart}
            // onClick={() => console.log(post.id, "test Add")}
          >
            Add to cart
          </button>
        </div>
        <button
          className=" h-7 w-16  mx-4 h-8 bg-red-200  "
          onClick={handleRemove}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default PostItem;
