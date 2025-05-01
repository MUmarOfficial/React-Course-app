type Props = {
  item: {
    name: string;
    quantity: number;
  };
};

const MenuItem = (props: Props) => {
  return (
    <li className="list-none flex gap-40  bg-transparent py-4 px-8 rounded-md text-white  border hover:border hover:border-blue-500 transition-all duration-300 ease-in-out shadow-md shadow-black/50 cursor-pointer">
      <h2>{props.item.name}</h2>
      <span>{props.item.quantity}</span>
    </li>
  );
};

export default MenuItem;
