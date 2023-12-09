import { useAppSelector } from "../hooks/redux";
import { INewItem } from "../models/IPost";
import { useState, useEffect } from "react";

const ShoppingCartTable = () => {
  const [itemsOut, setItemsOut] = useState<Array<INewItem>>([]);
  const data = useAppSelector((state) => state.userReducer);
  // console.log(itemsOut, "OUT");

  useEffect(() => {
    const data1 = data.reduce((total, el) => {
      (total[el.id] || (total[el.id] = [])).push(el);
      return total;
    }, {});
    // console.log(y, "YYYY");

    const arr = Object.values(data1);

    console.log(arr, "AAA");

    const getItems = (arr) => {
      const newData: INewItem[] = [];
      arr.forEach((el: any) => {
        el.forEach((item) => {
          const count = el.length;
          const price = count * item.price;
          const newEl = {
            ...item,
            count,
            price,
          };
          newData.push(newEl);
        });
      });
      // console.log(newData, "newData");
      let items = newData.filter((el, index) => {
        return (
          index === newData.findIndex((p) => el.id === p.id) && el.id !== 0
        );
      });
      return items;
    };
    const items = getItems(arr);
    setItemsOut(items);
  }, [data]);
  // console.log(items, "ITEMS-YYYYYY");
  console.log(itemsOut, "itemsOut");

  const updateItems = (id: number, items: INewItem[], quontity = 0) => {
    const transfomItems = items.map((el) => {
      const newItems: INewItem[] = [];
      if (el.id === id) {
        const count = el.count + quontity;
        const price = (el.price / el.count) * count;
        const newEl = {
          ...el,
          count,
          price,
        };
        newItems.push(newEl);
      } else {
        newItems.push(el);
      }
      // console.log(newItems, "yyy");
      return newItems;
    });

    const res = transfomItems.flat();
    return res;
  };

  let finalPay = 0;
  itemsOut.forEach((el) => {
    finalPay += el.price;
  });

  let onIncrease = (id: number) => {
    const res = updateItems(id, itemsOut, 1);
    setItemsOut(res);
  };

  let onDecrease = (id: number) => {
    itemsOut.forEach((el) => {
      const res = updateItems(id, itemsOut, -1);
      setItemsOut(res);
    });
  };

  let onDelete = (id: number) => {
    let quontity = 0;
    itemsOut.forEach((el) => {
      if (el.id === id) {
        quontity = el.count;
      }
    });
    const res = updateItems(id, itemsOut, -quontity);
    setItemsOut(res);
  };

  const renderRow = (item: INewItem, idx) => {
    const { id, name, count, price } = item;
    console.log(price, "PRICE");
    return (
      <tr key={idx} className="table-fixed text-center">
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>{price} руб</td>
        <td>
          <button
            onClick={() => onIncrease(id)}
            // onClick={() => console.log(id, "onIncrease")} // test
            className="py-2 px-2 mr-1 bg-green-200 rounded hover:shadow-md transition-all"
          >
            Inc
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="py-2 px-2 mr-1 bg-yellow-200 rounded hover:shadow-md transition-all"
          >
            Dec
          </button>
          <button
            onClick={() => onDelete(id)}
            className="py-2 px-2 bg-red-200 rounded hover:shadow-md transition-all"
          >
            Del
          </button>
        </td>
      </tr>
    );
  };
  const arrOut: INewItem[] = [];
  itemsOut.forEach((el) => {
    if (el.count !== 0) {
      arrOut.push(el);
    }
  });
  return (
    <div className="">
      <h2 className="font-bold text-3xl  pt-8">Your Order</h2>
      <table className="table-fixed  w-full">
        <thead>
          <tr className="border-y-2">
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {arrOut !== undefined ? (
          <tbody className="">{arrOut.map(renderRow)}</tbody>
        ) : (
          <tbody>{}</tbody>
        )}
      </table>
      <div className="text-right">Total: {finalPay} руб</div>
    </div>
  );
};

export default ShoppingCartTable;
