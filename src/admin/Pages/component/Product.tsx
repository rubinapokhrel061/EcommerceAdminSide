import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { deleteProduct, fetchProducts } from "../../Store/dataSlice";

const ProductTable = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div className="flex flex-col p-5 md:p-10">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <caption className="py-2 text-start text-xl font-bold ">
                List of Product:
              </caption>
              <thead>
                <tr className="bg-[#595959] text-white">
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-medium  uppercase"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-medium  uppercase"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-medium  uppercase"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-medium  uppercase"
                  >
                    Stocks
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-medium  uppercase"
                  >
                    Created_at
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-base font-medium  uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products &&
                  products.length > 0 &&
                  products.map((product, key) => (
                    <tr key={key}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 w-[200px] h-[200px] object-contain">
                        <img
                          className=""
                          src={product.productImageUrl}
                          alt={product.productName}
                        />
                        {product.productName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {product.Category?.categoryName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {product.productPrice}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {product.productTotalStockQty}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {product.createdAt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          onClick={() => handleDelete(product.id)}
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {(!products || products.length === 0) && (
        <div className="flex justify-center p-5">
          <p className="text-center text-gray-500">No users found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
