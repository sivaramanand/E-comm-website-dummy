import React,{useState} from 'react'
import "./fileUpload.css"
const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      if (selectedFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    };
  
    const handleFileUpload = () => {
      if (file) {
        console.log("File uploaded:", file);
      }
    };
  
    return (
      <div className="file-upload">
        <input type="file" onChange={handleFileChange} />
        {preview && (
          <div className="preview">
            <img src={preview} alt="Preview" />
          </div>
        )}
        <button onClick={handleFileUpload}>Upload</button>
      </div>
    );
}

export default FileUpload
