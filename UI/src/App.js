// import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import DisplayTable from './Components/DisplayTable';
import InputFile from './Components/InputFile';
import Upload from './Components/Upload';

function App() {
  const [Data, setData] = useState([]);
    const handlechange=(e)=>{
          console.log(e);
          setData(e)
    }
    
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-5">
        <InputFile getchilddata={handlechange}/>
        </div>
        <div className="col-md-5">
        <Upload data={Data}/>
        </div>
      </div>
      <DisplayTable data={Data}/>
    </div>
  );
}

export default App;
