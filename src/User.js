import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [User, setUser] = useState([]);
  useEffect(() => {
    setUser([
      {
        id: 1,
        username: "person1",
        email: "person1@gmail.com",
        country: "india",
        state: "Tamilnadu",
        city: "Chennai",
        Dateofbirth: "24-09-2001",
        phoneno: "9087654321",
        gender: "male",
      },
      {
        id: 2,
        username: "person2",
        email: "person2@gmail.com",
        country: "india",
        state: "Tamilnadu",
        city: "Vellore",
        Dateofbirth: "25-01-2001",
        phoneno: "9087656821",
        gender: "Female",
      },
    ]);
  }, []);

let deleteUser = () => {
    const result = window.confirm('if you want to delete')
    if(result){
        alert("deleted")
    }
}
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/Create_User"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Create User
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>country</th>
                  <th>state</th>
                  <th>city </th>
                  <th>Date of Birth</th>
                  <th>phone no</th>
                  <th>gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>country</th>
                  <th>state</th>
                  <th>city </th>
                  <th>Date of Birth</th>
                  <th>phone no</th>
                  <th>gender</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {User.map((User) => {
                  return (
                    <tr>
                      <td>{User.id}</td>
                      <td>{User.username}</td>
                      <td>{User.email}</td>
                      <td>{User.country}</td>
                      <td>{User.state}</td>
                      <td>{User.city}</td>
                      <td>{User.Dateofbirth}</td>
                      <td>{User.phoneno}</td>
                      <td>{User.gender}</td>
                      <td>
                        <Link to={`/User/${User.id}`} className="btn btn-warning mr-1">View</Link>
                        <Link to={`/Edit_User/${User.id}`} className="btn btn-primary mr-1">Edit</Link>
                        <button onClick={()=>deleteUser()} className="btn btn-danger">Delete</button>
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
}

export default User;
