const Modal = ({ inputs, handleChange, handleSubmit, createEmployee }) => {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
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
    </>
  );
};
export default Modal;
