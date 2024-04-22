import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleClick = () => {
    navigate("/Add");
  };

  const handleDelete = () => {
    const temp = data.filter((task) => !selectedTasks.includes(task.Id));
    localStorage.setItem("data", JSON.stringify(temp));
    setData(temp);
    setSelectedTasks([]);
  };

  const handleCheckboxChange = (taskId) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("data")) || [];
    setData(temp);
  }, []);

  return (
    <>
      <div className="header text-center">
        <h2>My To-Do App</h2>
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={handleClick}
        >
          Add Task
        </button>
        {selectedTasks.length > 0 && (
          <button className="btn btn-danger mt-2 ms-2" onClick={handleDelete}>
            Delete Selected
          </button>
        )}
      </div>
      <div></div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th>Actions</th>
            <th>
              <input
                type="checkbox"
                checked={selectedTasks.length === data.length}
                onChange={() => {
                  if (selectedTasks.length === data.length) {
                    setSelectedTasks([]);
                  } else {
                    setSelectedTasks(data.map((task) => task.Id));
                  }
                }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((each, index) => {
            return (
              <tr key={each.Id}>
                <th scope="row">{index + 1}</th>
                <td>{each.name}</td>
                <td>{each.desc}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/edit/" + each.Id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedTasks.includes(each.Id)}
                    onChange={() => handleCheckboxChange(each.Id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default List;
