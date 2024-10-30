import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { singleOrder } from "../Store/dataSlice";
import NavbarAdmin from "../Layout/NavbarAdmin";

const SingleOrder = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    singleOrder: [order],
  } = useAppSelector((state) => state.data);

  useEffect(() => {
    if (id) {
      dispatch(singleOrder(id));
    }
  }, [id, dispatch]);

  console.log(order);

  return (
    <>
      <div>
        {" "}
        <NavbarAdmin />
      </div>

      <div className="py-20 px-4 md:px-6 2xl:px-20 bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800">Order {id}</h1>
        <p className="text-base text-gray-600">{order?.createdAt}</p>

        <div className="mt-10 flex flex-col space-y-4">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">My Order</h2>
            <div className="flex space-x-4">
              <img
                src={order?.Product?.productImageUrl}
                alt="Product"
                className="w-32 rounded-md"
              />
              <div className="flex flex-col">
                <h3 className="text-lg text-gray-800">
                  {order?.Product?.productName}
                </h3>
                <p className="text-gray-600">
                  Rs. {order?.Product?.productPrice}
                </p>
                <p className="text-gray-600">Qty: {order?.quantity}</p>
                <p className="font-semibold text-gray-800">
                  Total: Rs. {order?.Product?.productPrice * order?.quantity}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Summary</h3>
            <div className="flex justify-between text-gray-700">
              <span>Payment Method</span>
              <span>{order?.Order?.Payment?.paymentMethod}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Payment Status</span>
              <span>{order?.Order?.Payment?.paymentStatus}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Order Status</span>
              <span>{order?.Order?.orderStatus}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800">
              <span>Total</span>
              <span>
                Rs. {100 + order?.quantity * order?.Product?.productPrice}
              </span>
            </div>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Customer</h3>
            <p className="text-gray-700">UserName: test</p>
            <p className="text-gray-700">Address: Itahari</p>
            <p className="text-gray-700">Phone: 9123123</p>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Delete Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleOrder;
