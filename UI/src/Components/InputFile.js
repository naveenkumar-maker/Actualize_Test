import React from 'react'
import GetExcel from './GetExcel';
const InputFile=({getchilddata})=> {
    const handleFileChange=(e)=>{
       console.log(e);
       const file = e.target.files[0];
       GetExcel(file, (data) => {
        getchilddata(data);
      });
    }
  return (
    <div className="mb-3">
    <label htmlFor="fileInput" className="form-label">
      Choose Excel File
    </label> <br/>
    <input
      type="file"
      className="form-control"
      id="fileInput"
      accept=".xlsx, .xls"
      onChange={handleFileChange}
    />
  </div>
  )
}

export default InputFile