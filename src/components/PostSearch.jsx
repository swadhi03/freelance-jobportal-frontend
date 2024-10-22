import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const PostSearch = () => {
    const [data, changeData] = useState(
        {
            "name": "",
        }
    )
    const [result, changeResult] = useState([])
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/PostSearch", data).then(
            (response) => {
                console.log(response.data)
                changeResult(response.data)
            }
        ).catch(
            (error) => {
                alert(error)
            }
        ).finally()
    }
    return (
        <div>
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Work </label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                        </div>
                        <div className="row g-3">
                            {result.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div class="card">
                                            <img src={value.image} class="card-img-top" alt='...' />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">Size :{value.size}</p>
                                                <p class="card-text">Price :{value.price}</p>
                                                <a href="#" class="btn btn-primary">Select Me</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostSearch