import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`);
        setUsers(response.data.user); // Assuming the data array is named "user"
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [filter]); // Re-run useEffect when filter changes

  return (
    <div>
      <div className="font-bold mt-6 text-lg ml-1.5">
        Users
      </div>
      <div className="my-2">
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {users.map((user, index) => (
          // Use a unique identifier if available (e.g., user.id)
          <User key={user.id ? user.id : index} user={user} />
        ))}
      </div>
    </div>
  );
}
function User({ user }) {
    const navigate = useNavigate();
  
    return (
    <div className="flex justify-between">
        <div className="flex">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
              {user.firstName[0]}
            </div>
          </div>
          <div className="flex flex-col justify-center h-full">
            <div>
              {user.firstName} {user.lastName}
            </div>
          </div>
        </div>
  
        <div className="flex flex-col justify-center h-full">
          <Button
            onClick={(e) => {
              navigate("/signin");
            }}
            buttonText={"Send Money"}
          />
        </div>
    </div>
    );
}