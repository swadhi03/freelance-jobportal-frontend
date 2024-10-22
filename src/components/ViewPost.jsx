import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './ViewPost.css';

const ViewPost = () => {
    const [data,setData]=useState([])

    const[token,setToken]=useState(sessionStorage.getItem("token"))
    const[userId,setserId]=useState(
        {"userId":sessionStorage.getItem("userId")}
    )

    const fetchData=()=>{
        axios.post("http://localhost:8080/ViewMine",userId,{
            headers:{"token":token,"Content-Type":"application/json"}
        }).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map((value,index)=>{
                                return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card">
                                    <img src={value.image} class="card-img-top" alt='...'/>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.name}</h5>
                                            <p class="card-text">Size :{value.size}</p>
                                            <p class="card-text">Price :{value.price}</p>
                                            <a href="#" class="btn btn-primary">Select Me</a>
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

export default ViewPost