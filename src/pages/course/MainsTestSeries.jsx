// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const MainsTestSeries = () => {
//     const mainsTests = [
//         {
//             id: 1,
//             title: "Mains Test Series - Standard",
//             features: [
//                 "Weekly Mains test (essay + case laws)",
//                 "Model answers & expert feedback",
//                 "Evaluation by faculty with suggestions"
//             ],
//             price: "₹6,000",
//             duration: "6 Months",
//             faculty: "Law Experts Panel",
//             type: "Test Series"
//         },
//         {
//             id: 2,
//             title: "Mains Test Series - Intensive",
//             features: [
//                 "All features of Standard series",
//                 "Personal mentor for writing improvement",
//                 "Additional writing workshops"
//             ],
//             price: "₹9,500",
//             duration: "12 Months",
//             faculty: "Senior Law Faculty",
//             type: "Test Series"
//         }
//     ];

//     return (
//         <div className="container my-5">
//             {/* <h2 className="text-center mb-4">Mains Test Series</h2> */}
//             <div className="row">
//                 {mainsTests.map((test) => (
//                     <div className="col-md-6 mb-4" key={test.id}>
//                         <Card className="h-100">
//                             <Card.Header className="bg-white d-flex justify-content-between align-items-center">
//                                 <Card.Title className="mb-0">{test.title}</Card.Title>
//                                 <span style={{ color: "#C81A1E" }} className="fw-bold">{test.price}</span>
//                             </Card.Header>
//                             <Card.Body>
//                                 <h6>Features:</h6>
//                                 <ul className="mb-3">
//                                     {test.features.map((feature, i) => (
//                                         <li key={i}>{feature}</li>
//                                     ))}
//                                 </ul>

//                                 <div className="card-text">
//                                     <div className="d-flex justify-content-between mb-2 border-bottom">
//                                         <span className="fw-bold">Price:</span>
//                                         <span>{test.price}</span>
//                                     </div>
//                                     <div className="d-flex justify-content-between mb-2 border-bottom">
//                                         <span className="fw-bold">Duration:</span>
//                                         <span>{test.duration}</span>
//                                     </div>
//                                     <div className="d-flex justify-content-between mb-2 border-bottom">
//                                         <span className="fw-bold">Faculty:</span>
//                                         <span>{test.faculty}</span>
//                                     </div>
//                                     <div className="d-flex justify-content-between mb-2">
//                                         <span className="fw-bold">Type:</span>
//                                         <span>{test.type}</span>
//                                     </div>
//                                 </div>
//                             </Card.Body>
//                             <Card.Footer className="bg-white">
//                                 <Link
//                                     to={`/mains-test/${test.id}`}
//                                     className="btn w-100 mb-2"
//                                     style={{ background: "#C81A1E", color: "white" }}
//                                 >
//                                     View Details
//                                 </Link>
//                                 <div className="d-flex gap-2">
//                                     <Button variant="outline-danger" className="w-50">Free Demo</Button>
//                                     <Button variant="outline-dark" className="w-50">Explore </Button>
//                                 </div>
//                             </Card.Footer>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MainsTestSeries;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import DOMPurify from 'dompurify';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';

// const MainsTestSeries = () => {
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchCourses();
//     }, []);

//     const fetchCourses = async () => {
//         try {
//             const response = await axios.get('https://backend-alic-4.onrender.com/main/display');
//             if (response.data && Array.isArray(response.data.data)) {
//                 setCourses(response.data.data);
//             } else {
//                 console.error("API response data is not in expected format:", response.data);
//                 setCourses([]);
//                 toast.error("Invalid course data format received from server");
//             }
//             setLoading(false);
//         } catch (error) {
//             console.error("Error fetching courses:", error);
//             toast.error("Failed to load courses. Please try again.");
//             setCourses([]);
//             setLoading(false);
//         }
//     };

//     const sanitizeHtml = (html) => {
//         return DOMPurify.sanitize(html);
//     };

//     if (loading) {
//         return <div className="container my-5 text-center">Loading courses...</div>;
//     }

//     return (
//         <div className="container my-5">
//             <div className="row">
//                 {courses.map((test) => (
//                     <div className="col-md-6 mb-4" key={test._id}>
//                         <Card className="h-100">
//                             <Card.Header className="bg-white d-flex justify-content-between align-items-center">
//                                 <Card.Title className="mb-0">
//                                     {test.testmodule}
//                                 </Card.Title>
//                                 <span style={{ color: "#C81A1E" }} className="fw-bold">
//                                     {test.Price}
//                                 </span>
//                             </Card.Header>
//                             <Card.Body>
//                                 <h6>Features:</h6>
//                                 <div 
//                                     className="mb-3"
//                                     dangerouslySetInnerHTML={{ __html: sanitizeHtml(test.CourseDescription) }}
//                                 />

//                                 <div className="card-text">
//                                     <div className="d-flex justify-content-between mb-2 border-bottom">
//                                         <span className="fw-bold">Price:</span>
//                                         <span>{test.Price}</span>
//                                     </div>
//                                     <div className="d-flex justify-content-between mb-2 border-bottom">
//                                         <span className="fw-bold">Duration:</span>
//                                         <span>{test.Durations}</span>
//                                     </div>
//                                     <div className="d-flex justify-content-between mb-2">
//                                         <span className="fw-bold">Type:</span>
//                                         <span>{test.testserie}</span>
//                                     </div>
//                                 </div>
//                             </Card.Body>
//                             <Card.Footer className="bg-white">
//                                 <Link
//                                     to={`/prelims-test/${test._id}`}
//                                     className="btn w-100 mb-2"
//                                     style={{ background: "#C81A1E", color: "white" }}
//                                 >
//                                     View Details
//                                 </Link>
//                                 <div className="d-flex gap-2">
//                                     <Button variant="outline-danger" className="w-50">Free Demo</Button>
//                                     <Button variant="outline-dark" className="w-50">Explore</Button>
//                                 </div>
//                             </Card.Footer>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MainsTestSeries;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const MainsTestSeries = ({selectedCategoryId}) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('https://backend-alic-4.onrender.com/main/display');
            if (response.data && Array.isArray(response.data)) {
                setCourses(response.data);
            } else if (response.data && Array.isArray(response.data.data)) {
                setCourses(response.data.data);
            } else {
                console.error("API response data is not in expected format:", response.data);
                setCourses([]);
                toast.error("Invalid course data format received from server");
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching courses:", error);
            toast.error("Failed to load courses. Please try again.");
            setCourses([]);
            setLoading(false);
        }
    };

    const sanitizeHtml = (html) => {
        return { __html: DOMPurify.sanitize(html || '') };
    };

    if (loading) {
        return <div className="container my-5 text-center">Loading courses...</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                {courses.length > 0 ? (
                    courses.map((test) => (
                        <div className="col-md-6 mb-4" key={test._id}>
                            <Card className="h-100">
                                <Card.Header className="bg-white d-flex justify-content-between align-items-center">
                                    <Card.Title className="mb-0">
                                        {test.testmodule || 'Test Series'}
                                    </Card.Title>
                                    <span style={{ color: "#C81A1E" }} className="fw-bold">
                                        ₹{test.Price ? test.Price.toLocaleString('en-IN') : 'N/A'}
                                    </span>
                                </Card.Header>
                                <Card.Body>
                                    <h6>Features:</h6>
                                    <div 
                                        className="mb-3"
                                        dangerouslySetInnerHTML={sanitizeHtml(test.CourseDescription)}
                                    />

                                    <div className="card-text">
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="fw-bold">Price:</span>
                                            <span>₹{test.Price ? test.Price.toLocaleString('en-IN') : 'N/A'}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="fw-bold">Duration:</span>
                                            <span>{test.Durations || 'N/A'}</span>
                                        </div>
                                      
                                    </div>
                                </Card.Body>
                                <Card.Footer className="bg-white">
                                    <Link
                                        to={`/prelims-test/${test._id}`}
                                        className="btn w-100 mb-2"
                                        style={{ background: "#C81A1E", color: "white" }}
                                    >
                                        View Details
                                    </Link>
                                    <div className="d-flex gap-2">
                                        <Button variant="outline-danger" className="w-50">Free Demo</Button>
                                        <Button variant="outline-dark" className="w-50">Explore</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No courses available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainsTestSeries;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Card, Button } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';
// import DOMPurify from 'dompurify';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { fetchcategory, fetchSubcategory, fetchSubsubcategory } from "../../api";

// const MainsTestSeries = ({ selectedCategoryId }) => {
//     const [courses, setCourses] = useState([]);
//     const [filteredCourses, setFilteredCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [categories, setCategories] = useState([]);
//     const [subCategories, setSubCategories] = useState([]);
//     const [subsubCategories, setSubsubCategories] = useState([]);
//     const { category, subcategory, subsubcategory } = useParams();

//     console.log(selectedCategoryId, "PRE");
//     console.log(filteredCourses, 'data show');

//     useEffect(() => {
//         fetchCourses();
//         fetchCategories();
//         fetchAllSubcategories();
//         fetchAllSubsubcategories();
//     }, []);

//     useEffect(() => {
//         if (courses.length > 0) {
//             filterCourses();
//         }
//     }, [category, subcategory, subsubcategory, courses, selectedCategoryId]); // ✅ Added selectedCategoryId dependency

//     const fetchCategories = async () => {
//         try {
//             const response = await fetchcategory();
//             if (response.data) {
//                 setCategories(response.data);
//             }
//         } catch (error) {
//             console.error("Error fetching categories:", error);
//             toast.error("Failed to load categories. Please try again.");
//         }
//     };

//     const fetchAllSubcategories = async () => {
//         try {
//             const response = await fetchSubcategory();
//             if (response.data) {
//                 setSubCategories(response.data);
//             }
//         } catch (error) {
//             console.error("Error fetching subcategories:", error);
//             toast.error("Failed to load subcategories. Please try again.");
//         }
//     };

//     const fetchAllSubsubcategories = async () => {
//         try {
//             const response = await fetchSubsubcategory();
//             if (response.data) {
//                 setSubsubCategories(response.data);
//             }
//         } catch (error) {
//             console.error("Error fetching subsubcategories:", error);
//             toast.error("Failed to load subsubcategories. Please try again.");
//         }
//     };

//     const fetchCourses = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get('https://backend-alic-4.onrender.com/main/display');
//             if (response.data && Array.isArray(response.data.data)) {
//                 setCourses(response.data.data);
//             } else {
//                 console.error("API response data is not in expected format:", response.data);
//                 setCourses([]);
//                 toast.error("Invalid course data format received from server");
//             }
//         } catch (error) {
//             console.error("Error fetching courses:", error);
//             toast.error("Failed to load courses. Please try again.");
//             setCourses([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const filterCourses = () => {
//         let filtered = [...courses];

//         if (category) {
//             const categoryObj = categories.find(cat =>
//                 cat.categoryname.toLowerCase() === category.toLowerCase()
//             );
//             if (categoryObj) {
//                 filtered = filtered.filter(course =>
//                     course.category === categoryObj._id
//                 );
//             }
//         }

//         if (subcategory) {
//             const subcategoryObj = subCategories.find(sub =>
//                 sub.subcategoryname.toLowerCase() === subcategory.toLowerCase()
//             );
//             if (subcategoryObj) {
//                 filtered = filtered.filter(course =>
//                     course.subcategory === subcategoryObj._id
//                 );
//             }
//         }

//         // ✅ NEW: Filter by selectedCategoryId which matches subsubCategory.name
//   // ✅ NEW: Filter by selectedCategoryId.name safely
// if (
//     selectedCategoryId &&
//     typeof selectedCategoryId.name === 'string' &&
//     selectedCategoryId.name.trim() !== ''
// ) {
//     filtered = filtered.filter(course =>
//         course.subsubCategory &&
//         course.subsubCategory.name &&
//         course.subsubCategory.name.toLowerCase() === selectedCategoryId.name.toLowerCase()
//     );
// }


//         setFilteredCourses(filtered);
//     };

//     const sanitizeHtml = (html) => {
//         return DOMPurify.sanitize(html);
//     };

//     if (loading) {
//         return <div className="container my-5 text-center">Loading courses...</div>;
//     }

//     return (
//         <div className="container my-5">
//             <div className="row">
//                 {filteredCourses.length > 0 ? (
//                     filteredCourses.map((test) => (
//                         <div className="col-md-6 mb-4" key={test._id}>
//                             <Card className="h-100">
//                                 <Card.Header className="bg-white d-flex justify-content-between align-items-center">
//                                     <Card.Title className="mb-0">
//                                         {test.testmodule}
//                                     </Card.Title>
//                                     <span style={{ color: "#C81A1E" }} className="fw-bold">
//                                         {test.Price}
//                                     </span>
//                                 </Card.Header>
//                                 <Card.Body>
//                                     <h6>Features:</h6>
//                                     <div
//                                         className="mb-3"
//                                         dangerouslySetInnerHTML={{ __html: sanitizeHtml(test.CourseDescription) }}
//                                     />

//                                     <div className="card-text">
//                                         <div className="d-flex justify-content-between mb-2 border-bottom">
//                                             <span className="fw-bold">Price:</span>
//                                             <span>{test.Price}</span>
//                                         </div>
//                                         <div className="d-flex justify-content-between mb-2 border-bottom">
//                                             <span className="fw-bold">Duration:</span>
//                                             <span>{test.Durations}</span>
//                                         </div>
//                                         <div className="d-flex justify-content-between mb-2">
//                                             <span className="fw-bold">Type:</span>
//                                             <span>{test.testseries}</span>
//                                         </div>
//                                     </div>
//                                 </Card.Body>
//                                 <Card.Footer className="bg-white">
//                                     <Link
//                                         to={`/prelims-test/${test._id}`}
//                                         className="btn w-100 mb-2"
//                                         style={{ background: "#C81A1E", color: "white" }}
//                                     >
//                                         View Details
//                                     </Link>
//                                     <div className="d-flex gap-2">
//                                         <Button variant="outline-danger" className="w-50">Free Demo</Button>
//                                         <Button variant="outline-dark" className="w-50">Explore</Button>
//                                     </div>
//                                 </Card.Footer>
//                             </Card>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="col-12 text-center">
//                         <h4>No courses found for this category</h4>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MainsTestSeries;
