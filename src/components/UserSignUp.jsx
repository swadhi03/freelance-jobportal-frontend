import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './UserSignUp.css';
import sign from '../uploads/bgsign.jpg';

const UserSignUp = () => {
    const [data, changeData] = useState(
        { "name": "", "phone": "", "email": "", "specialization": "", "gender": "", "address": "", "pincode": "", "image": "", "password": "", "cfmpassword": "" }
    )
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        const minPasswordLength = 6;
        const maxPasswordLength = 12;
        const phoneLength = 10;
        const pincodeLength = 6;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple regex for email validation
        const nameRegex = /^[a-zA-Z\s]+$/;  // Name validation (only letters and spaces)


        if (!data.phone || data.phone.length !== phoneLength) {
            alert("Enter valid contact number")
            return;
        }

        if (!data.pincode || data.pincode.length !== pincodeLength) {
            alert("Enter valid pincode")
            return;
        }

        if (data.password.length < minPasswordLength || data.password.length > maxPasswordLength) {
            alert("Enter strong password with letters, alphabets and atleast one special character");
            return;
        }

        if (!data.email || !emailRegex.test(data.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!data.name || !nameRegex.test(data.name)) {
            alert("Name must only contain letters and cannot be empty.");
        return;
    }

        if (data.password == data.cfmpassword) {
            let newInput = { "name": data.name, "phone": data.phone, "email": data.email, "specialization": data.specialization, "gender": data.gender, "address": data.address, "pincode": data.pincode, "image": data.image, "password": data.password, "cfmpassword": data.cfmpassword }

            axios.post("http://localhost:8080/UserSignup", newInput).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("Registered Successfully")
                        changeData({ "name": "", "phone": "", "email": "", "specialization": "", "gender": "", "address": "", "pincode": "", "image": "", "password": "", "cfmpassword": "" })
                    } else {
                        alert("Registration failed")
                        changeData({ "name": "", "phone": "", "email": "", "specialization": "", "gender": "", "address": "", "pincode": "", "image": "", "password": "", "cfmpassword": "" })
                    }
                }
            ).catch(
                (error) => {
                    console.log(error.message)
                    alert(error.message)
                }
            ).finally()
        } else {
            alert("Password and Confirm password does not match")
        }
    }
    return (
        <div>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundImage: `url(${sign})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="row" id='signup'>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone No</label>
                                <input type="number" className="form-control" name="phone" value={data.phone} minLength={10} maxLength={10} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email-id</label>
                                <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Specialization</label>
                                <select name="specialization" id="" className="form-control" value={data.specialization} onChange={inputHandler}>
                                    <option value=""></option>
                                    <option value="Bottle Art">Bottle Art</option>
                                    <option value="Paintings">Paintings</option>
                                    <option value="Frames">Frames</option>
                                    <option value="Key Chains">Key Chains</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender" id="" className="form-control" value={data.gender} onChange={inputHandler}>
                                    <option value=""></option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea type="textarea" name="address" id="" className="form-control" minLength={10} maxLength={35} value={data.address} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="number" className="form-control" name="pincode" minLength={6} maxLength={6} value={data.pincode} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Image</label>
                                <input type="file" name="image" id="" className="form-control" value={data.image} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" id="" className="form-control" minLength={6} value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" name="cfmpassword" id="" className="form-control" minLength={6} value={data.cfmpassword} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <Link to="/signin" className="btn btn-success">Joined User</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSignUp