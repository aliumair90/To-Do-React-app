import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [allTodos, setTodos] = useState([]);
  const [newName, setName] = useState(" ");
  const [newDescription, setDescription] = useState(" ");
  const navigate = useNavigate();

  const handleEdit = () => {
    if (newName.trim() === "" || newDescription.trim() === "") {
      <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>;
    } else {
      const prevData = JSON?.parse(localStorage?.getItem("data"));
      const temp = prevData.filter((each) => each.Id != id);
      const newData = [
        ...temp,
        {
          Id: id,
          name: newName,
          desc: newDescription,
        },
      ];

      localStorage?.setItem("data", JSON?.stringify(newData));

      navigate("/list");
    }
  };

  useEffect(() => {
    const prevData = JSON?.parse(localStorage?.getItem("data"));
    const temp = prevData.filter((each) => each.Id == id)[0];
    setName(temp.name);
    setDescription(temp.desc);
  }, []);

  return (
    <>
      <div className="p-3 mb-2 bg-info text-white">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Task Name
          </label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Task Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Task description
          </label>
          <textarea
            value={newDescription}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="exampleFormControlText"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-success" onClick={handleEdit}>
          Save
        </button>
      </div>
    </>
  );
}

export default Edit;
