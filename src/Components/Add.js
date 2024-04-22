import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
function Add() {
  const [newName, setName] = useState(" ");
  const [newDescription, setDescription] = useState(" ");
  const navigate = useNavigate();

  const handleSave = () => {
    // Check if either newName or newDescription is empty
    if (newName.trim() === "" || newDescription.trim() === "") {
      // Display alert if either newName or newDescription is empty
      alert("Please fill in both name and description fields.");
    } else {
      const id = uuidv4();
      const prevData = JSON?.parse(localStorage?.getItem("data"));
      let newData = [];
      if (prevData) {
        newData = [
          ...prevData,
          {
            Id: id,
            name: newName,
            desc: newDescription,
          },
        ];
      } else {
        newData = [
          {
            Id: id,
            name: newName,
            desc: newDescription,
          },
        ];
      }

      localStorage?.setItem("data", JSON.stringify(newData));

      // Only navigate to "/list" if data is saved successfully
      navigate("/list");
    }
  };
  return (
    <>
      <div className="p-3 mb-2p-3 mb-2 bg-info text-white">
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
        <button type="button" className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
}

export default Add;
