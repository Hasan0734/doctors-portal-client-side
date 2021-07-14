import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const  [info, setInfo] = useState({});
    const [file, setFile] = useState(null)
    ;
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
           const newFile = e.target.files[0];
           setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch(("https://calm-shelf-07611.herokuapp.com/addADoctor"), {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }
    
   

    return (
        <div className="container-fluid row">
            <div className="col-md-2  sidebar-container">
                <Sidebar></Sidebar>
            </div>
            <div  style={{background: '#f4fdfb'}} className="col-md-10">
            <h3 className="mt-5 ms-3">Add Doctor</h3>
            <div style={{width: '95%', padding: '40px', marginTop: '50px'}} className="card box-container ms-3">
                   <h4 className="text-color">Add Doctor</h4>
                   <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="email">Enter Email</label>
                            <input onBlur={handleBlur} className="form-control mt-2" name="email" type="text" placeholder="Enter Email"/>
                        </div>
                        <div className="form-group my-4">
                            <label for="name">Enter Name</label>
                            <input onBlur={handleBlur} className="form-control mt-2" name="name" type="text" placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label for="file">Upload Image</label>
                        <input onChange={handleFileChange} className="form-control mt-2"type="file" name='file' placeholder="Image"/>
                        </div>
                        <button className="mt-3 btn main-button" type="submit">Submit</button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;