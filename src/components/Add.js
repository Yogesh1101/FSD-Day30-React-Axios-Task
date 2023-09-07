import { TextField } from "@mui/material";
import React, { useState } from "react";

function Add({ onAddUser }) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData);
    setFormData({ name: "", username: "", email: "", phone: "", website: "" });
  };

  return (
    <div className="container">
      <h1 className="sub-heading">ADD NEW USER</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="NAME"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="USERNAME"
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="EMAIL ADDRESS"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="PHONE NUMBER"
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="WEBSITE"
          value={formData.website}
          onChange={(event) =>
            setFormData({ ...formData, website: event.target.value })
          }
        />
        <button type="submit" className="btn btn-success mt-4">
          ADD USER
        </button>
      </form>
    </div>
  );
}

export default Add;
