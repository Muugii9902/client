import React, { useEffect, useState } from "react";
import Userhead from "./user-head";
import UserRow from "./user-row";

const UserList = () => {
  const [users, SetUsers] = useState();
  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    SetUsers(users);
  };
  const createEmployee = async () => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Naraa",
        lastname: "Davaa",
        email: "naraa@gmail.com",
        position: "Developer",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { users } = await res.json();
  };
  const DeleteEmployeeByID = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    console.log("hshshdsdsd", id);
    const { users } = await res.json();
  };
  const PutEmployeeByID = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Muugii",
        lastname: "Muugii",
        email: "changed",
        position: "dev",
        profileImg: "none",
      }),
    });
    const { users } = await res.json();
  };

  useEffect(() => {
    getEmployeesData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <Userhead />
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow
              user={user}
              DeleteEmployeeByID={DeleteEmployeeByID}
              PutEmployeeByID={PutEmployeeByID}
            />
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-info btn-outline" onClick={createEmployee}>
          Ажилтан нэмэх
        </button>
      </div>
    </div>
  );
};

export default UserList;
