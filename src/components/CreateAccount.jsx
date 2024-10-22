import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const CreateAccount = () => {
    const [token,setToken]=useState(sessionStorage.getItem("token"))

    const[input,setInput]=useState(
        {"myname":"","profile":"","description":"","email":"","phoneno":"","userId":sessionStorage.getItem("userId")}
    )

    const InputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(input)
        console.log(token)
        axios.post("http://localhost:8080/UpdateAccount",input, {
            headers:{'token':sessionStorage.getItem("token"),"Content-Type":"application/json"}
        }).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Profile Updated")
                } else {
                    alert("Updation Failed")
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="myname" value={input.myname} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <input type="textarea" className="form-control" name="description" value={input.description} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">email-id</label>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Contact No</label>
                            <input type="text" className="form-control" name="phoneno" value={input.phoneno} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="file" name="profile" id="" className="form-control" value={input.profile} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue} >Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default CreateAccount

