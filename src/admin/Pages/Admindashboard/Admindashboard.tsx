import AdminLayout from "../../Layout/AdminLayout";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";

import { FaShoppingCart, FaUsers, FaBox } from "react-icons/fa"; // Import the icons
import CardStat from "./Component/CardDataStats";
import { useEffect } from "react";
import { fetchProducts } from "../../Store/dataSlice";
import Card from "./Component/Card";

const ECommerce: React.FC = () => {
  const { orders, products, users } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const counts = {
    ordersCount: orders.length,
    usersCount: users.length,
    productsCount: products.length,
  };
  console.log(localStorage.getItem("token"));
  return (
    <AdminLayout>
      <div className="grid grid-cols-1 gap-8 p-16 md:grid-cols-2 md:gap-10 md:py-20 xl:grid-cols-3 ">
        <CardStat
          title="Total Orders"
          count={counts.ordersCount}
          icon={<FaShoppingCart size={32} />}
        />
        <CardStat
          title="Total Users"
          count={counts.usersCount}
          icon={<FaUsers size={32} />}
        />
        <CardStat
          title="Total Products"
          count={counts.productsCount}
          icon={<FaBox size={32} />}
        />
      </div>
      <div className="  min-h-[70vh]  items-center">
        <h2 className="text-3xl underline ml-4 text-center py-4 font-extrabold text-[#FFA500]">
          Best Products
        </h2>
        <div className="flex flex-wrap items-center justify-center mx-auto gap-4 md:gap-6 mt-6">
          {products.length > 0 ? (
            products.map((pd) => {
              return <Card key={pd.id} data={pd} />;
            })
          ) : (
            <div>No Product found Here..</div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ECommerce;
