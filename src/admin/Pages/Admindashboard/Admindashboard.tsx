import AdminLayout from "../../Layout/AdminLayout";
import { useAppSelector } from "../../Store/hooks";

import { FaShoppingCart, FaUsers, FaBox } from "react-icons/fa"; // Import the icons
import CardStat from "./Component/CardDataStats";

const ECommerce: React.FC = () => {
  const { orders, products, users } = useAppSelector((state) => state.data);
  const counts = {
    ordersCount: orders.length,
    usersCount: users.length,
    productsCount: products.length,
  };

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 gap-8 p-16 md:grid-cols-2 md:gap-10 md:py-24 xl:grid-cols-3 ">
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
    </AdminLayout>
  );
};

export default ECommerce;
