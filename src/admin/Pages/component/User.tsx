import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchUsers } from "../../Store/dataSlice";

const UserTable = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="flex flex-col p-5 md:p-10">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <caption className="py-2 text-start text-xl font-bold ">
                List of users:
              </caption>
              <thead>
                <tr className="bg-[#595959] text-white">
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-medium  uppercase"
                  >
                    UserName
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-medium  uppercase"
                  >
                    UserID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-medium  uppercase"
                  >
                    Email
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
                {users &&
                  users.length > 0 &&
                  users.map((user, key) => (
                    <tr key={key}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {user.username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
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

      {(!users || users.length === 0) && (
        <div className="flex justify-center p-5">
          <p className="text-center text-gray-500">No users found.</p>
        </div>
      )}
    </div>
  );
};

export default UserTable;
