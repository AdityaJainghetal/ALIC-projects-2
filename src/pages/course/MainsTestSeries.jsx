import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainsTestSeries = () => {
    const mainsTests = [
        {
            id: 1,
            title: "Mains Test Series - Standard",
            features: [
                "Weekly Mains test (essay + case laws)",
                "Model answers & expert feedback",
                "Evaluation by faculty with suggestions"
            ],
            price: "₹6,000",
            duration: "6 Months",
            faculty: "Law Experts Panel",
            type: "Test Series"
        },
        {
            id: 2,
            title: "Mains Test Series - Intensive",
            features: [
                "All features of Standard series",
                "Personal mentor for writing improvement",
                "Additional writing workshops"
            ],
            price: "₹9,500",
            duration: "12 Months",
            faculty: "Senior Law Faculty",
            type: "Test Series"
        }
    ];

    return (
        <div className="container my-5">
            {/* <h2 className="text-center mb-4">Mains Test Series</h2> */}
            <div className="row">
                {mainsTests.map((test) => (
                    <div className="col-md-6 mb-4" key={test.id}>
                        <Card className="h-100">
                            <Card.Header className="bg-white d-flex justify-content-between align-items-center">
                                <Card.Title className="mb-0">{test.title}</Card.Title>
                                <span style={{ color: "#C81A1E" }} className="fw-bold">{test.price}</span>
                            </Card.Header>
                            <Card.Body>
                                <h6>Features:</h6>
                                <ul className="mb-3">
                                    {test.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                <div className="card-text">
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="fw-bold">Price:</span>
                                        <span>{test.price}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="fw-bold">Duration:</span>
                                        <span>{test.duration}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="fw-bold">Faculty:</span>
                                        <span>{test.faculty}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="fw-bold">Type:</span>
                                        <span>{test.type}</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer className="bg-white">
                                <Link
                                    to={`/mains-test/${test.id}`}
                                    className="btn w-100 mb-2"
                                    style={{ background: "#C81A1E", color: "white" }}
                                >
                                    View Details
                                </Link>
                                <div className="d-flex gap-2">
                                    <Button variant="outline-danger" className="w-50">Free Demo</Button>
                                    <Button variant="outline-dark" className="w-50">Explore </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainsTestSeries;
