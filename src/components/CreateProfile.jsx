import axios from 'axios'
import React, { useState, useTransition } from 'react'
import Navbar from './Navbar'

const CreateProfile = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"))

    const [input, setInput] = useState(
        { "name": "", "size": "", "price": "", "image": "", "userId": sessionStorage.getItem("userId") }
    )

    const InputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        console.log(token)
        axios.post("http://localhost:8080/create", input, {
            headers: { 'token': sessionStorage.getItem("token"), "Content-Type": "application/json" }
        }).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Post Created Successfully")
                } else {
                    alert("Posting Failed")
                }
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Freelancer Name</label>
                                <input type="text" className="form-control" name="username" value={input.username} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Size</label>
                                <input type="text" className="form-control" name="size" value={input.size} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Price</label>
                                <input type="text" className="form-control" name="price" value={input.price} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Image</label>
                                <input type="file" name="image" id="" className="form-control" value={input.image} onChange={InputHandler} />
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

export default CreateProfile