import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function DragAndDropFormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log("Files dropped:", acceptedFiles);
      // Handle files as needed (upload, preview, etc.)
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection} {...getRootProps()}>
        <input {...getInputProps()} />
        <div style={styles.dropzone}>
          <p>Drag & Drop Files Here</p>
        </div>
      </div>

      <div style={styles.rightSection}>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100vh",
    width: "100%",
    padding: "20px",
  },
  leftSection: {
    width: "30%",
    border: "2px dashed #007bff",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f0f8ff",
  },
  dropzone: {
    padding: "20px",
    border: "2px dashed #007bff",
    backgroundColor: "#e0f7ff",
    color: "#007bff",
    fontSize: "16px",
    borderRadius: "8px",
  },
  rightSection: {
    width: "68%",
    border: "1px solid #ccc",
    padding: "1%",
    backgroundColor: "#ffffff",
  },
  inputGroup: {
    margin: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
};

export default DragAndDropFormComponent;
