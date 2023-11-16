import React from 'react'
import axios from 'axios'
const Upload=({data})=> {

   const uploaddata=async ()=>{
            try {
                const response = await axios.post('http://127.0.0.1:5001/api/data', data);
                 alert("Successfully uploaded the data")
                console.log(response.data);
            } catch (error) {
                alert('Error posting data:', error)
                console.error('Error posting data:', error);
            }
    }
  return (
    <button className="btn btn-primary" onClick={uploaddata}>Upload</button>
  )
}

export default Upload