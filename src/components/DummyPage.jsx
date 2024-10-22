import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './DummyPage.css';

const DummyPage = () => {
    const [data, setData] = useState([])

    const [token, setToken] = useState(sessionStorage.getItem("token"))
    const [userId, setserId] = useState(
        { "userId": sessionStorage.getItem("userId") }
    )

    const fetchData = () => {
        axios.post("http://localhost:8080/ViewAccount", userId, {
            headers: { "token": token, "Content-Type": "application/json" }
        }).then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div className='DummyPage-body'>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map((value, index) => {
                                return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                    <div className="profile-container">
                                        <div className="profile-photo">
                                            <img src={value.profile} alt="Profile" />
                                        </div>
                                        <div className="profile-info">
                                            <h1 className="profile-name">{value.myname}</h1>
                                            <p className="profile-email">Email: {value.email}</p>
                                            <p className="profile-phone">Phone: {value.phoneno}</p>
                                            <p className="profile-description">{value.description}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DummyPage