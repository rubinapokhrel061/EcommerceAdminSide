import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { deleteUser, fetchUsers } from "../../Store/dataSlice";

const UserTable = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };
  return (
    <div className="flex flex-col">
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 mb-10 shadow-default sm:px-7.5 pb-10">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black"> Users List:</h4>
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="min-w-[220px] text-center py-4 px-4 font-medium text-black xl:pl-11">
                  UserID
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                  UserName
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black">
                  Email
                </th>

                <th className="py-4 px-4 font-medium text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user, key) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                      <p className="font-medium text-black">{user.id}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4">
                      <p className="text-black ">{user.username}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4">
                      <p className="text-black">{user.email}</p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4">
                      <div className="flex items-center space-x-3.5">
                        <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-700">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
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
