import React, { useEffect, useState } from "react";
import Userhead from "./user-head";
import UserRow from "./user-row";
import { nanoid } from "nanoid";
const UserList = () => {
  const newId = nanoid();
  console.log(newId);

  const [users, SetUsers] = useState();

  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    position: " ",
    image: "",
    id: newId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    SetUsers(users);
  };

  const createEmployee = async () => {
    console.log("hadgalah towchworking");
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
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
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn  btn-info btn-outline"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Ажилтан нэмэх
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Мэдээлэл</h3>
            <p className="py-4"></p>
            <form onSubmit={handleSubmit}>
              <input
                className="p-2 border rounded-md m-1"
                type="text"
                placeholder="Firstname:"
                name="firstname"
                value={inputs.firstname}
                onChange={handleChange}
              />
              <input
                className="p-2 border rounded-md m-1"
                type="text"
                placeholder="Lastname:"
                name="lastname"
                value={inputs.lastname}
                onChange={handleChange}
              />
              <input
                className="p-2 border rounded-md m-1"
                type="text"
                placeholder="@email:"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
              <input
                className="p-2 border rounded-md m-1"
                type="text"
                placeholder="Position:"
                name="position"
                value={inputs.position}
                onChange={handleChange}
              />
              <input
                className="p-2 border rounded-md m-1"
                type="file"
                placeholder="Image:"
                name="profileImg"
                value={inputs.profileImg}
                onChange={handleChange}
              />
              <button
                className="border p-2 rounded-md bg-lime-300 m-1"
                onClick={createEmployee}
                type="submit"
              >
                Хадгалах
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default UserList;
