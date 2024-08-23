import React, { useEffect, useState } from "react";
import Userhead from "./user-head";
import UserRow from "./user-row";
import { nanoid } from "nanoid";
import Modal from "./modal";
const UserList = () => {
  const [listedited, setListedited] = useState(false);
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
    setListedited(!listedited);
  };
  const DeleteEmployeeByID = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    console.log("hshshdsdsd", id);
    const { users } = await res.json();
    setListedited(!listedited);
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
    setListedited(!listedited);
  };

  useEffect(() => {
    getEmployeesData();
  }, [listedited]);
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
        <Modal
          inputs={inputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          createEmployee={createEmployee}
        />
      </div>
    </div>
  );
};

export default UserList;
