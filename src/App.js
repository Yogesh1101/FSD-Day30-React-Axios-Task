import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) =>
        console.log("Error while Fetching the User Data: ", error)
      );
  }, []);

  const addUser = (formData) => {
    axios
      .post(API_URL, formData)
      .then((response) => {
        setUsers([...users, response.data]);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  const editUser = (formData) => {
    axios
      .put(`${API_URL}/${editingUser.id}`, formData)
      .then((response) => {
        const updatedUsers = users.map((user) =>
          user.id === editingUser.id ? response.data : user
        );
        setUsers(updatedUsers);
        setEditingUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error editing user:", error);
      });
  };

  const deleteUser = (userId) => {
    axios
      .delete(`${API_URL}/${userId}`)
      .then(() => {
        alert("Are you sure you want to delete this user?");
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="App container">
      <h1 className="main-heading">REACT AXIOS TASK</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              users={users}
              onEditUser={(user) => setEditingUser(user)}
              onDeleteUser={deleteUser}
            />
          }
        ></Route>
        <Route
          path="/add"
          element={<Add onAddUser={addUser} />}
        ></Route>
        <Route
          path="/edit/:id"
          element={<Edit user={editingUser} onEditUser={editUser} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
