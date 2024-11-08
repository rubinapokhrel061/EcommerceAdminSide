import { Link } from "react-router-dom";
import { Product } from "../../../Types/dataTypes";

interface CardProps {
  data: Product;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg max-w-sm sm:max-w-[300px] md:max-w-sm p-4 hover:shadow-2xl mx-auto">
      <Link to={`/product/${data.id}`} className="block">
        <img
          className="rounded-t-lg w-[70vw] h-[30vh] object-contain"
          src={data?.productImageUrl}
          alt="product image"
        />
        <h2 className="capitalize text-2xl font-bold pt-2 tracking-tight text-gray-800 hover:text-blue-600 transition-colors duration-200">
          {data?.productName}
        </h2>
        <span className="text-xl text-gray-700">Rs.{data?.productPrice}</span>
      </Link>
    </div>
  );
};

export default Card;
