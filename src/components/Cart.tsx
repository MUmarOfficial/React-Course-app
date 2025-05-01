import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const [FirstItem, setFirstItem] = useState({
    name: "Pizza",
    quantity: 1,
  });
  useEffect(() => {
    setTimeout(() => {
      setFirstItem((item) => {
        return {
          ...item,
          // quantity: item.quantity + 1 && item.quantity <= 10,
        };
      });
    }, 1000);
  });

  return (
    <section className="flex flex-col justify-center items-center gap-6 px-36 py-18 border rounded-3xl text-white shadow-2xl shadow-black/50 bg-black/50 backdrop-blur-md">
      <h1 className="text-4xl font-semibold">Cart</h1>
      <ul className="flex flex-col gap-4 w-full">
        <MenuItem
          item={FirstItem}
        />

        <MenuItem
          item={{
            name: "Burger",
            quantity: 2,
          }}
        />

        <MenuItem
          item={{
            name: "Pasta",
            quantity: 3,
          }}
        />
      </ul>
    </section>
  );
};

export default Cart;
