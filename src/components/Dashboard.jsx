import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import { Carousel, Card, Button } from 'react-bootstrap';
import Navbar from './Navbar';  // Assuming you have a Navbar component
import caro1 from '../uploads/caro-1.jpg';
import caro2 from '../uploads/caro2.jpg';
import caro3 from '../uploads/caro3.jpg';
import jewel from '../uploads/jewellery.jpg';
import bottle from '../uploads/bottle.jpg';
import frame from '../uploads/frames.jpg';

const Dashboard = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Carousel */}
            <div className="container my-5">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={caro1} />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={caro2} alt="Second slide" />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={caro3} alt="Third slide" />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* About Section */}
            <div className="container text-center my-5">
                <h2>About Us</h2>
                <p>Our freelance portal connects artisans with clients looking for unique handmade crafts. We help bridge the gap between skill and opportunity by offering a platform for talented individuals to showcase their work.</p>
            </div>

            {/* Card Section (Portfolio or Services) */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Our Artisans' Work</h2>
                <div className="row">
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src={frame} />
                            <Card.Body>
                                <Card.Title>Handcrafted Photo Frames</Card.Title>
                                <Card.Text>
                                    Description about this specific work or project.
                                </Card.Text>
                                <Button variant="primary">View More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src={bottle} />
                            <Card.Body>
                                <Card.Title>Bottle Works</Card.Title>
                                <Card.Text>
                                    Another description of an artisan’s project.
                                </Card.Text>
                                <Button variant="primary">View More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src={jewel} />
                            <Card.Body>
                                <Card.Title>Handmade Jewelry</Card.Title>
                                <Card.Text>
                                    Showcase of a different type of artwork.
                                </Card.Text>
                                <Button variant="primary">View More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Contact Us</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <Button variant="primary" type="submit">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
