import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleClick = () => {
    navigate("/Add");
  };
  const handleDelete = (id) => {
    const temp = data.filter((each) => each.Id != id);
    localStorage.setItem("data", JSON.stringify(temp));
    setData(temp);
  };
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("data"));
    setData(temp);
  }, []);

  return (
    <>
      <div className="header text-center">
        <h2> My To-Do App </h2>
        <button
          type="button"
          class="btn btn-primary mt-2 "
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
      <div></div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((each, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{each.name}</td>
                  <td>{each.desc}</td>
                  <td>
                    <button
                      className="btn btn btn-primary"
                      onClick={() => navigate("/edit/" + each.Id)}
                    >
                      Edit
                    </button>
                    <button
                      className="m-2 btn btn-danger"
                      onClick={() => handleDelete(each.Id)}
                    >
                      Delete
                    </button>
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
