import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Status } from "../../Types/status";
import { API } from "../../http";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { useNavigate } from "react-router-dom";
import { addProduct, AddProduct } from "../../Store/dataSlice";
import AdminLayout from "../../Layout/AdminLayout";

const AddProductPage = () => {
  interface Category {
    id: string;
    categoryName: string;
  }

  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.data);
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [data, setData] = useState<AddProduct>({
    productName: "",
    categoryId: "",
    image: null,
    productDescription: "",
    productPrice: 0,
    productTotalStockQty: 0,
  });

  const fetchCategories = async () => {
    const response = await API.get("admin/category");
    if (response.status === 200) {
      setCategories(response.data.data);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    setData({
      ...data,
      [name]: name === "image" ? files?.[0] : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(addProduct(data));
    if (status === Status.SUCCESS) {
      // navigate("/dashboard");
    } else {
      navigate("/addproduct");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <AdminLayout>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Add a new product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label
                htmlFor="productName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Name
              </label>

              <input
                type="text"
                name="productName"
                id="productName"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Smart Watch"
                required
              />
            </div>

            <div>
              <label
                htmlFor="productTotalStockQty"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Total Stock Quantity
              </label>
              <input
                type="number"
                name="productTotalStockQty"
                id="productTotalStockQty"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="5"
                required
              />
            </div>

            <div>
              <label
                htmlFor="productPrice"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Price
              </label>
              <input
                type="number"
                name="productPrice"
                id="productPrice"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Rs 2999"
                required
              />
            </div>

            <div>
              <label
                htmlFor="categoryId"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category
              </label>
              <select
                id="categoryId"
                name="categoryId"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                required
              >
                <option value="" disabled hidden>
                  Select a category
                </option>
                {categories?.length > 0 &&
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.categoryName}
                    </option>
                  ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="productDescription"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                id="productDescription"
                name="productDescription"
                rows={8}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your description here"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Image URL
              </label>
              <input
                type="file"
                name="image"
                id="productImage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="w-full p-2 rounded-xl mt-8 font-medium text-white bg-gradient-to-b from-gray-700 to-gray-900 md:p-3">
            Add Product
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddProductPage;
