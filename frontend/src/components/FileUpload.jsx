import { useState } from "react";
import { uploadFile } from "../api/api";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    try {
      setStatus("Uploading...");
      const res = await uploadFile(file);
      setStatus(res.message || "Upload successful");
    } catch (error) {
      setStatus("Upload failed");
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Upload PDF</h3>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>Upload</button>

      <p>{status}</p>
    </div>
  );
}

export default FileUpload;