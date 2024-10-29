import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchOrders } from "../../Store/dataSlice";
import { OrderStatus } from "../../Types/dataTypes";

const OrderTable = () => {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 mb-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5  pb-10">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Orders
        </h4>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                ID
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Phone Number
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Shipping Address
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Order Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((order, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      <Link to={`/order/${order.id}`}>{order.id}</Link>
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      <p className="text-sm">{order.phoneNumber}</p>
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {order.shippingAddress}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
                        order.orderStatus === OrderStatus.Delivered
                          ? "bg-green-200 text-green-600"
                          : order.orderStatus === OrderStatus.Cancel
                          ? "bg-red-200 text-red-600"
                          : "bg-yellow-200 text-yellow-600"
                      }`}
                    >
                      {order.orderStatus}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-700">
                        Edit
                      </button>
                      <button className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-700">
                        Delete
                      </button>
                      <Link
                        to={`/order/${order.id}`}
                        className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-700"
                      >
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
