import AdminLayout from "../Layout/AdminLayout";
import OrderTable from "./component/Order";
import ProductTable from "./component/Product";
import UserTable from "./component/User";

const Dashboard = () => {
  return (
    <AdminLayout>
      <UserTable />
      <ProductTable />
      <OrderTable />
    </AdminLayout>
  );
};

export default Dashboard;
