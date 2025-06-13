import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import courseThumb from '../../assets/alec-img/courses/course-1.jpg'; // replace with actual image

const TargetJudiciaryCourse = () => {
    const targetJudiciaryCourse = {
        id: 3,
        title: "Target Judiciary",
        image: courseThumb,
        features: [
            "Recorded classes (10 subjects + GK/Hindi/English/Computer)",
            "Doubt discussion group",
            "Comprehensive coverage of judiciary syllabus",
            "Flexible learning at your own pace",
            "Regular updates with latest legal amendments"
        ],
        price: "₹25,000",
        duration: "13 Months",
        faculty: "Expert Judiciary Faculty",
        type: "Recorded Course"
    };

    return (
        <div className="py-4" style={{ backgroundColor: "#f5f7fa" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 mb-4">
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Img
                                variant="top"
                                src={targetJudiciaryCourse.image}
                                alt={targetJudiciaryCourse.title}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Header className="bg-white d-flex justify-content-between align-items-center">
                                <Card.Title className="mb-0">{targetJudiciaryCourse.title}</Card.Title>
                                <span style={{ color: "#C81A1E" }} className="fw-bold">
                                    {targetJudiciaryCourse.price}
                                </span>
                            </Card.Header>
                            <Card.Body>
                                <h6>Features:</h6>
                                <ul className="mb-3">
                                    {targetJudiciaryCourse.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                <div className="card-text">
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="fw-bold">Price:</span>
                                        <span>{targetJudiciaryCourse.price}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="fw-bold">Duration:</span>
                                        <span>{targetJudiciaryCourse.duration}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="fw-bold">Faculty:</span>
                                        <span>{targetJudiciaryCourse.faculty}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="fw-bold">Course Type:</span>
                                        <span>{targetJudiciaryCourse.type}</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer className="bg-white">
                                <Link
                                    to={`/courses/${targetJudiciaryCourse.id}`}
                                    className="btn w-100 mb-2"
                                    style={{ background: "#C81A1E", color: "white" }}
                                >
                                    View Details
                                </Link>
                                <div className="d-flex gap-2">
                                    <Button variant="outline-danger" className="w-50">Free Demo</Button>
                                    <Button variant="outline-dark" className="w-50">Explore Courses</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TargetJudiciaryCourse;
