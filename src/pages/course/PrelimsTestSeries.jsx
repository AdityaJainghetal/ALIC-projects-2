// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const PrelimsTestSeries = () => {
//     const [courses, setCourses] = useState([]);
//     // const courses = [
//     //     {
//     //         id: 1,
//     //         title: "Prelims Test Series - Basic",
//     //         features: [
//     //             "Weekly mock tests",
//     //             "Detailed solutions and ranking",
//     //             "Topic-wise performance analysis"
//     //         ],
//     //         price: "₹5,000", 
//     //         duration: "6 Months",
//     //         faculty: "Test Team",
//     //         type: "Test Series"
//     //     },
//     //     {
//     //         id: 2,
//     //         title: "Prelims Test Series - Advanced",
//     //         features: [
//     //             "All features of Basic",
//     //             "Additional revision tests",
//     //             "1-on-1 performance review"
//     //         ],
//     //         price: "₹8,000",
//     //         duration: "12 Months",
//     //         faculty: "Expert Faculty",
//     //         type: "Test Series"
//     //     }
//     // ];

//       const fetchCourses = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/test/display');
//       // Check if response has data property and it's an array
//       if (response.data && Array.isArray(response.data.data)) {
//         setCourses(response.data.data);
//       } else {
//         console.error("API response data is not in expected format:", response.data);
//         setCourses([]); // Set to empty array if format is unexpected
//         toast.error("Invalid course data format received from server");
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//       toast.error("Failed to load courses. Please try again.");
//       setCourses([]); // Set to empty array on error
//       setLoading(false);
//     }
//   };

//     return (
//         <div className="container my-5">
//             {/* <h2 className="text-center mb-4">Prelims Test Series</h2> */}
//             <div className="row">
//                 {courses.map((test) => (
//                     <div className="col-md-6 mb-4" key={test.id}>
//                         <Card className="h-100">
//                             <Card.Header className="bg-white d-flex justify-content-between align-items-center">
//                                 <Card.Title className="mb-0">{course.testmodule}</Card.Title>
//                                 <span style={{ color: "#C81A1E" }} className="fw-bold">{test.Price}</span>
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
//                                         <span>{test.Price}</span>
//                                     </div>
//                                     <div className="d-flex justify-content-between mb-2 border-bottom">
//                                         <span className="fw-bold">Duration:</span>
//                                         <span>{test.Durations}</span>
//                                     </div>
//                                     {/* <div className="d-flex justify-content-between mb-2 border-bottom">
//                                         <span className="fw-bold">Faculty:</span>
//                                         <span>{test.CourseDescription}</span>
//                                     </div> */}
//                                     <div className="d-flex justify-content-between mb-2">
//                                         <span className="fw-bold">Type:</span>
//                                         <span>{test.testserie}</span>
//                                     </div>
//                                 </div>
//                             </Card.Body>
//                             <Card.Footer className="bg-white">
//                                 <Link
//                                     to={`/prelims-test/${test.id}`}
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

// export default PrelimsTestSeries;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';

// const PrelimsTestSeries = () => {
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchCourses();
//     }, []);

//     const fetchCourses = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/test/display');
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
//                                 <Card.Title className="mb-0">{test.testmodule}</Card.Title>
//                                 <span style={{ color: "#C81A1E" }} className="fw-bold">{test.Price}</span>
//                             </Card.Header>
//                             <Card.Body>
//                                 <h6>Features:</h6>
//                                 <ul className="mb-3">
//                                    {test.CourseDescription}
//                                 </ul>

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

// export default PrelimsTestSeries;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import DOMPurify from 'dompurify';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';

// const PrelimsTestSeries = () => {
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchCourses();
//     }, []);

//     const fetchCourses = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/test/display');
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
//                                         <span>{test.testseries}</span>
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

// export default PrelimsTestSeries;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Card, Button } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';
// import DOMPurify from 'dompurify';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { fetchcategory, fetchSubcategory, fetchSubsubcategory } from "../../api";

// const PrelimsTestSeries = () => {
//     const [courses, setCourses] = useState([]);
//     const [filteredCourses, setFilteredCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const { subsubcategory } = useParams();

//     useEffect(() => {
//         fetchCourses();
//     }, []);


//     useEffect(() => {
//     const fetchCategories = async () => {
//       setLoading(true);
//       try {
//         const response = await fetchcategory();
//         if (response.data) {
//           setCategories(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         toast.error("Failed to load categories. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchAllSubcategories = async () => {
//       try {
//         const response = await fetchSubcategory();
//         if (response.data) {
//           setSubCategories(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching subcategories:", error);
//         toast.error("Failed to load subcategories. Please try again.");
//       }
//     };
//     fetchAllSubcategories();
//   }, []);

//   useEffect(() => {
//     const fetchAllSubsubcategories = async () => {
//       try {
//         const response = await fetchSubsubcategory();
//         if (response.data) {
//           setSubsubCategories(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching subsubcategories:", error);
//         toast.error("Failed to load subsubcategories. Please try again.");
//       }
//     };
//     fetchAllSubsubcategories();
//   }, []);


//     useEffect(() => {
//         if (subsubcategory && courses.length > 0) {
//             const filtered = courses.filter(course => 
//                 course.subsubcategory && course.subsubcategory.toLowerCase() === subsubcategory.toLowerCase()
//             );
//             setFilteredCourses(filtered);
//         } else {
//             setFilteredCourses(courses);
//         }
//     }, [subsubcategory, courses]);

//     const fetchCourses = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/test/display');
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

// export default PrelimsTestSeries;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Card, Button } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';
// import DOMPurify from 'dompurify';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { fetchcategory, fetchSubcategory, fetchSubsubcategory } from "../../api";

// const PrelimsTestSeries = ({selectedCategoryId}) => {
//     const [courses, setCourses] = useState([]);
//     const [filteredCourses, setFilteredCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [categories, setCategories] = useState([]);
//     const [subCategories, setSubCategories] = useState([]);
//     const [subsubCategories, setSubsubCategories] = useState([]);
//     const { category, subcategory, subsubcategory } = useParams();


//     console.log(selectedCategoryId, "PRE");
//     console.log(filteredCourses,'data')

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
//     }, [category, subcategory, subsubcategory, courses]);

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
//             const response = await axios.get('http://localhost:8000/test/display');
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

//         if (subsubcategory) {
//             const subsubcategoryObj = subsubCategories.find(subsub => 
//                 subsub.subsubcategoryname.toLowerCase() === subsubcategory.toLowerCase()
//             );
//             if (subsubcategoryObj) {
//                 filtered = filtered.filter(course => 
//                     course.subsubcategory === subsubcategoryObj._id
//                 );
//             }
//         }

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

// export default PrelimsTestSeries;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { fetchcategory, fetchSubcategory, fetchSubsubcategory } from "../../api";

const PrelimsTestSeries = ({ selectedCategoryId }) => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [subsubCategories, setSubsubCategories] = useState([]);
    const { category, subcategory, subsubcategory } = useParams();

    console.log(selectedCategoryId, "PRE");
    console.log(filteredCourses, 'data show');

    useEffect(() => {
        fetchCourses();
        fetchCategories();
        fetchAllSubcategories();
        fetchAllSubsubcategories();
    }, []);

    useEffect(() => {
        if (courses.length > 0) {
            filterCourses();
        }
    }, [category, subcategory, subsubcategory, courses, selectedCategoryId]); // ✅ Added selectedCategoryId dependency

    const fetchCategories = async () => {
        try {
            const response = await fetchcategory();
            if (response.data) {
                setCategories(response.data);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
            toast.error("Failed to load categories. Please try again.");
        }
    };

    const fetchAllSubcategories = async () => {
        try {
            const response = await fetchSubcategory();
            if (response.data) {
                setSubCategories(response.data);
            }
        } catch (error) {
            console.error("Error fetching subcategories:", error);
            toast.error("Failed to load subcategories. Please try again.");
        }
    };

    const fetchAllSubsubcategories = async () => {
        try {
            const response = await fetchSubsubcategory();
            if (response.data) {
                setSubsubCategories(response.data);
            }
        } catch (error) {
            console.error("Error fetching subsubcategories:", error);
            toast.error("Failed to load subsubcategories. Please try again.");
        }
    };

    const fetchCourses = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8000/test/display');
            if (response.data && Array.isArray(response.data.data)) {
                setCourses(response.data.data);
            } else {
                console.error("API response data is not in expected format:", response.data);
                setCourses([]);
                toast.error("Invalid course data format received from server");
            }
        } catch (error) {
            console.error("Error fetching courses:", error);
            toast.error("Failed to load courses. Please try again.");
            setCourses([]);
        } finally {
            setLoading(false);
        }
    };

    const filterCourses = () => {
        let filtered = [...courses];

        if (category) {
            const categoryObj = categories.find(cat =>
                cat.categoryname.toLowerCase() === category.toLowerCase()
            );
            if (categoryObj) {
                filtered = filtered.filter(course =>
                    course.category === categoryObj._id
                );
            }
        }

        if (subcategory) {
            const subcategoryObj = subCategories.find(sub =>
                sub.subcategoryname.toLowerCase() === subcategory.toLowerCase()
            );
            if (subcategoryObj) {
                filtered = filtered.filter(course =>
                    course.subcategory === subcategoryObj._id
                );
            }
        }

        // ✅ NEW: Filter by selectedCategoryId which matches subsubCategory.name
  // ✅ NEW: Filter by selectedCategoryId.name safely
if (
    selectedCategoryId &&
    typeof selectedCategoryId.name === 'string' &&
    selectedCategoryId.name.trim() !== ''
) {
    filtered = filtered.filter(course =>
        course.subsubCategory &&
        course.subsubCategory.name &&
        course.subsubCategory.name.toLowerCase() === selectedCategoryId.name.toLowerCase()
    );
}


        setFilteredCourses(filtered);
    };

    const sanitizeHtml = (html) => {
        return DOMPurify.sanitize(html);
    };

    if (loading) {
        return <div className="container my-5 text-center">Loading courses...</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((test) => (
                        <div className="col-md-6 mb-4" key={test._id}>
                            <Card className="h-100">
                                <Card.Header className="bg-white d-flex justify-content-between align-items-center">
                                    <Card.Title className="mb-0">
                                        {test.testmodule}
                                    </Card.Title>
                                    <span style={{ color: "#C81A1E" }} className="fw-bold">
                                        {test.Price}
                                    </span>
                                </Card.Header>
                                <Card.Body>
                                    <h6>Features:</h6>
                                    <div
                                        className="mb-3"
                                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(test.CourseDescription) }}
                                    />

                                    <div className="card-text">
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="fw-bold">Price:</span>
                                            <span>{test.Price}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="fw-bold">Duration:</span>
                                            <span>{test.Durations}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="fw-bold">Type:</span>
                                            <span>{test.testseries}</span>
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
                        <h4>No courses found for this category</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrelimsTestSeries;
