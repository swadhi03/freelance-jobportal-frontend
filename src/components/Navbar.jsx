import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css';

const Navbar = () => {
    const navigate = useNavigate()
    const Logout = () => {
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Work Connect</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/create">Create Post</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/viewmine">View My Cart</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/ViewAccount">My Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/viewallpost">Cart</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/search">Search</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <button onClick={Logout} className="btn btn-success">Logout</button>
                            </li>
                        </ul>
                        <li class="nav-item dropdown">
                            <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/signup">SignUp</a></li>
                                <li><a class="dropdown-item" href="/signin">SignIn</a></li>
                                {/*<li><a class="dropdown-item" href="#">Something else here</a></li>*/}
                            </ul>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar