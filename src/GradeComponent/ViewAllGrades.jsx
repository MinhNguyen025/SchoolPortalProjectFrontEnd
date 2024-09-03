import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ViewAllGrades = () => {
  const [allGrades, setAllGrades] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const [filteredGrades, setFilteredGrades] = useState([]); // State for filtered grades
  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  let navigate = useNavigate();

  useEffect(() => {
    const getAllGrade = async () => {
      const allGrades = await retrieveAllGrade();
      if (allGrades) {
        setAllGrades(allGrades.grades);
        setFilteredGrades(allGrades.grades); // Initialize filtered grades
      }
    };

    getAllGrade();
  }, []);

  useEffect(() => {
    // Filter grades whenever search query changes
    const result = allGrades.filter((grade) =>
        grade.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGrades(result);
  }, [searchQuery, allGrades]);

  const retrieveAllGrade = async () => {
    const response = await axios.get(
        "http://localhost:8080/api/grade/fetch/all"
    );
    console.log(response.data);
    return response.data;
  };

  const deleteGrade = (gradeId, e) => {
    fetch("http://localhost:8080/api/grade/delete?gradeId=" + gradeId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + admin_jwtToken,
      },
    })
        .then((result) => {
          result.json().then((res) => {
            if (res.success) {
              toast.success(res.responseMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              setTimeout(() => {
                window.location.reload(true);
              }, 1000);
            } else if (!res.success) {
              toast.error(res.responseMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(() => {
                window.location.reload(true);
              }, 1000);
            }
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("It seems server is down", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.reload(true);
          }, 1000);
        });
  };

  const updateGrade = (grade) => {
    navigate("/admin/grade/update", { state: grade });
  };

  const viewCourses = (gradeId) => {
    navigate(`/admin/grade/${gradeId}/course/`);
  };

  const viewBatches = (gradeId) => {
    navigate(`/admin/grade/${gradeId}/batch/`);
  };

  return (
      <div className="mt-3">
        <div
            className="card form-card ms-2 me-2 mb-5 shadow-lg"
            style={{
              height: "45rem",
            }}
        >
          <div
              className="card-header custom-bg-text text-center bg-color"
              style={{
                borderRadius: "1em",
                height: "50px",
              }}
          >
            <h2>All Grades</h2>
          </div>
          <div
              className="card-body"
              style={{
                overflowY: "auto",
              }}
          >
            {/* Search Input Field */}
            <div className="mb-3">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Grade Name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="table-responsive">
              <table className="table table-hover text-color text-center">
                <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">Grade Id</th>
                  <th scope="col">Grade Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {filteredGrades.map((grade) => {
                  return (
                      <tr key={grade.id}>
                        <td>
                          <b>{grade.id}</b>
                        </td>
                        <td>
                          <b>{grade.name}</b>
                        </td>
                        <td>
                          <b>{grade.description}</b>
                        </td>
                        <td>
                          <button
                              onClick={() => updateGrade(grade)}
                              className="btn btn-sm bg-color custom-bg-text ms-2"
                          >
                            Update
                          </button>

                          <button
                              onClick={() => deleteGrade(grade.id)}
                              className="btn btn-sm bg-color custom-bg-text ms-2"
                          >
                            Delete
                          </button>

                          <button
                              onClick={() => viewCourses(grade.id)}
                              className="btn btn-sm bg-color custom-bg-text ms-2"
                          >
                            Courses
                          </button>
                          <button
                              onClick={() => viewBatches(grade.id)}
                              className="btn btn-sm bg-color custom-bg-text ms-2"
                          >
                            Batches
                          </button>
                        </td>
                      </tr>
                  );
                })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ViewAllGrades;
