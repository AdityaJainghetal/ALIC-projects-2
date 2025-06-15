// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Card, Button } from 'react-bootstrap';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Layout } from '../../layouts/Layout';
// import { CoursesAllGrid } from './CoursesAllGrid';



// const CouresesFull = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);

//    const handleCourseClick = (courseId) => {
//     navigate(`/enroll/${courseId}`);
//   };


//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(`http://localhost:8000/api/courses${id}`);
//         console.log(res.data)
//         setCourse(res.data);
//       } catch (err) {
//         console.error("Failed to fetch product", err);
//         setError("Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [id])




//   useEffect(() => {
//     const foundCourse = coursesData.find(c => c.id.toString() === id);
//     if (!foundCourse) {
//       navigate('/');
//       return;
//     }
//     setCourse(foundCourse);
//   }, [id, navigate]);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   if (!course) return <Container>Loading...</Container>;

//   return (
//     <>
//      {/* <div className="td_height_112 td_height_lg_60" /> */}
//       <div className="col-md-12">
//                      <CoursesAllGrid/>
//                </div>
//       <Layout header={9} footer={1}>
// <Container className="my-5">
//       <Card className="mb-5 shadow rounded-4 border-0">
//         <Card.Header className="bg-[] text-white d-flex justify-content-between align-items-center rounded-top-4 px-4 py-3">
//           <h2 className="mb-0 fs-4">{course.title}</h2>
//           <Button variant="light" size="sm" onClick={() => navigate(-1)}>
//             ⬅ Back
//           </Button>
//         </Card.Header>

//         <Card.Body className="px-0 py-0">
//           <div className="row g-0">
//             {/* Left Column - Video */}
//             <div className="col-md-7 p-4">
//               <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm bg-dark">
//                 {course.URL ? (
//                   <iframe
//                     src={course.URL}
//                     title={`${course.title} preview`}
//                     allowFullScreen
//                     className="border-0"
//                   ></iframe>
//                 ) : (
//                   <div className="d-flex justify-content-center align-items-center h-100 text-white">
//                     <div className="text-center">
//                       <div className="fs-1 mb-2">🎬</div>
//                       <p>Video Coming Soon</p>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Additional Video Info (Optional) */}
//               <div className="mt-3">
//                 <h5 className="d-flex align-items-center gap-2">
//                   <span className="badge bg-secondary">📺</span> Course Preview
//                 </h5>
//                 <p className="text-muted small">{course.URL|| "Watch this preview to understand the course content."}</p>
//               </div>
//             </div>

//             {/* Right Column - Course Details */}
//             <div className="col-md-5 p-4 border-start">
//               <h4 className="mb-3 text-secondary d-flex align-items-center gap-2">
//                 <span>🔹</span> Features
//               </h4>
//               <ul className="mb-4">
//                 {course.features.map((feature, i) => (
//                   <li key={i} className="mb-2 d-flex align-items-start gap-2">
//                     <span className="text-success">✓</span> {feature}
//                   </li>
//                 ))}
//               </ul>

//               <div className="bg-light p-3 rounded-3 mb-4">
//                 <div className="mb-1">
//                   <strong>💰 Price:</strong> <span className="text-success fw-bold">{course.Price}</span>
//                 </div>
//                 <div className="mb-1">
//                   <strong>⏳ Validity:</strong> {course.CourseDescription}
//                 </div>
//                 <div className="mb-1">
//                   <strong>👨‍🏫 Faculty:</strong> {course.InstructorCourse || "Not specified"}
//                 </div>
//                 <div>
//                   <strong>🎓 Type:</strong> {course.type}
//                 </div>
//               </div>

//               <Button style={{ backgroundColor: "#801E23", border: "none" }} size="lg" className="w-100 fw-bold shadow-sm py-2" onClick={handleCourseClick ()}>
//                 🚀 Enroll Now
//               </Button>

//               {/* Additional Info (Optional) */}
//               <div className="mt-3 small text-muted">
//                 <div className="d-flex gap-2 mb-1">
//                   <span>✔</span> <span>Certificate included</span>
//                 </div>
//                 <div className="d-flex gap-2">
//                   <span>✔</span> <span>Lifetime access</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>


//       <h3 className="mb-4">Other Courses</h3>
//       <Slider {...sliderSettings}>
//         {coursesData
//           .filter(c => c.id.toString() !== id) // वर्तमान कोर्स को छोड़कर
//           .map(course => (
//             <div key={course.id} className="px-2">
//               <Card style={{ display: 'flex', flexDirection: 'row' }}
//                 className="h-100 cursor-pointer"
//                 onClick={() => navigate(`/courses/${course.id}`)}
//               >
//                 <Card.Body style={{ flex: '1' }}>
//                   <Card.Title>{course.title}</Card.Title>
//                   <Card.Text>
//                     <small className="text-muted">{course.type}</small><br />
//                     <strong>Price:</strong> {course.price}
//                   </Card.Text>
//                 </Card.Body>

//                 {/* Right Side - Image */}
//                 <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
//                   <Card.Img
//                     src={course.imageUrl}
//                     alt={course.title}
//                     style={{
//                       width: '200px',
//                       height: '100%',
//                       objectFit: 'cover'
//                     }}
//                   />
//                 </div>

//               </Card>
//             </div>
//           ))}
//       </Slider>
//     </Container>
//     </Layout>
//     </>

//   );
// };

// export default CouresesFull;



// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Card, Button, Spinner } from 'react-bootstrap';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axios from 'axios';
// import { Layout } from '../../layouts/Layout';
// import { CoursesAllGrid } from './CoursesAllGrid';

// const CouresesFull = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [relatedCourses, setRelatedCourses] = useState([]);

//   const handleCourseClick = (courseId) => {
//     navigate(`/enroll/${courseId}`);
//   };

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(`http://localhost:8000/api/courses/${id}`);
//         setCourse(res.data);
        
//         // Fetch related courses (same category or type)
//         const relatedRes = await axios.get(`http://localhost:8000/api/courses?category=${res.data.category}&exclude=${id}`);
//         setRelatedCourses(relatedRes.data);
//       } catch (err) {
//         console.error("Failed to fetch course", err);
//         setError("Failed to load course details");
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchCourse();
//   }, [id]);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   if (loading) return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
//       <Spinner animation="border" variant="primary" />
//     </Container>
//   );

//   if (error) return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
//       <div className="alert alert-danger">{error}</div>
//     </Container>
//   );

//   if (!course) return null;

//   return (
//     <>
//       <div className="col-md-12">
//         <CoursesAllGrid />
//       </div>
//       <Layout header={9} footer={1}>
//         <Container className="my-5">
//           <Card className="mb-5 shadow rounded-4 border-0">
//             <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center rounded-top-4 px-4 py-3">
//               <h2 className="mb-0 fs-4">{course.title}</h2>
//               <Button variant="light" size="sm" onClick={() => navigate(-1)}>
//                 ⬅ Back
//               </Button>
//             </Card.Header>

//             <Card.Body className="px-0 py-0">
//               <div className="row g-0">
//                 {/* Left Column - Video */}
//                 <div className="col-md-7 p-4">
//                   <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm bg-dark">
//                     {course.URL ? (
//                       <iframe
//                         src={course.URL}
//                         title={`${course.title} preview`}
//                         allowFullScreen
//                         className="border-0"
//                       ></iframe>
//                     ) : (
//                       <div className="d-flex justify-content-center align-items-center h-100 text-white">
//                         <div className="text-center">
//                           <div className="fs-1 mb-2">🎬</div>
//                           <p>Video Coming Soon</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Course Description */}
//                   <div className="mt-4">
//                     <h4>Course Description</h4>
//                     <p>{course.description || "No description available."}</p>
//                   </div>
//                 </div>

//                 {/* Right Column - Course Details */}
//                 <div className="col-md-5 p-4 border-start">
//                   <h4 className="mb-3 text-secondary d-flex align-items-center gap-2">
//                     <span>🔹</span> Features
//                   </h4>
//                   <ul className="mb-4">
//                     {course.features && course.features.length > 0 ? (
//                       course.features.map((feature, i) => (
//                         <li key={i} className="mb-2 d-flex align-items-start gap-2">
//                           <span className="text-success">✓</span> {feature}
//                         </li>
//                       ))
//                     ) : (
//                       <li>No features listed</li>
//                     )}
//                   </ul>

//                   <div className="bg-light p-3 rounded-3 mb-4">
//                     <div className="mb-2">
//                       <strong>💰 Price:</strong> <span className="text-success fw-bold">${course.price}</span>
//                     </div>
//                     <div className="mb-2">
//                       <strong>⏳ Duration:</strong> {course.duration || "Not specified"}
//                     </div>
//                     <div className="mb-2">
//                       <strong>👨‍🏫 Instructor:</strong> {course.instructor || "Not specified"}
//                     </div>
//                     <div className="mb-2">
//                       <strong>📅 Start Date:</strong> {course.startDate || "Flexible"}
//                     </div>
//                     <div>
//                       <strong>🎓 Category:</strong> {course.category || "General"}
//                     </div>
//                   </div>

//                   <Button 
//                     style={{ backgroundColor: "#801E23", border: "none" }} 
//                     size="lg" 
//                     className="w-100 fw-bold shadow-sm py-2" 
//                     onClick={() => handleCourseClick(course.id)}
//                   >
//                     🚀 Enroll Now
//                   </Button>

//                   <div className="mt-3 small text-muted">
//                     <div className="d-flex gap-2 mb-1">
//                       <span>✔</span> <span>Certificate included</span>
//                     </div>
//                     <div className="d-flex gap-2">
//                       <span>✔</span> <span>Lifetime access</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>

//           {relatedCourses.length > 0 && (
//             <>
//               <h3 className="mb-4">Related Courses</h3>
//               <Slider {...sliderSettings}>
//                 {relatedCourses.map(relatedCourse => (
//                   <div key={relatedCourse.id} className="px-2">
//                     <Card 
//                       className="h-100 cursor-pointer"
//                       onClick={() => navigate(`/courses/${relatedCourse.id}`)}
//                     >
//                       <Card.Img
//                         variant="top"
//                         src={relatedCourse.imageUrl || 'https://via.placeholder.com/300x200'}
//                         alt={relatedCourse.title}
//                         style={{ height: '150px', objectFit: 'cover' }}
//                       />
//                       <Card.Body>
//                         <Card.Title>{relatedCourse.title}</Card.Title>
//                         <Card.Text>
//                           <small className="text-muted">{relatedCourse.category}</small><br />
//                           <strong>Price:</strong> ${relatedCourse.price}
//                         </Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </div>
//                 ))}
//               </Slider>
//             </>
//           )}
//         </Container>
//       </Layout>
//     </>
//   );
// };

// export default CouresesFull;



// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Card, Button, Spinner, Alert } from 'react-bootstrap';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axios from 'axios';
// import { Layout } from '../../layouts/Layout';
// import { CoursesAllGrid } from './CoursesAllGrid';

// const CouresesFull = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [relatedCourses, setRelatedCourses] = useState([]);

//   const handleCourseClick = (courseId) => {
//     navigate(`/enroll/${courseId}`);
//   };

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // Fetch the main course data
//         const courseResponse = await axios.get(`http://localhost:8000/api/courses/${id}`);
//         if (!courseResponse.data) {
//           throw new Error('Course not found');
//         }
//         setCourse(courseResponse.data);
        
//         // Fetch related courses if category exists
//         if (courseResponse.data.category) {
//           try {
//             const relatedResponse = await axios.get(
//               `http://localhost:8000/api/courses/related/${courseResponse.data.category}/${id}`
//             );
//             setRelatedCourses(relatedResponse.data);
//           } catch (relatedError) {
//             console.warn("Couldn't fetch related courses:", relatedError);
//             setRelatedCourses([]);
//           }
//         }
//       } catch (err) {
//         console.error("Failed to fetch course:", err);
//         setError(err.response?.data?.message || err.message || 'Failed to load course details');
//         if (err.response?.status === 404) {
//           navigate('/not-found', { replace: true });
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseData();
//   }, [id, navigate]);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   if (loading) {
//     return (
//       <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
//         <Spinner animation="border" variant="primary" />
//         <span className="ms-3">Loading course details...</span>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container className="my-5">
//         <Alert variant="danger" className="text-center">
//           <h4>Error Loading Course</h4>
//           <p>{error}</p>
//           <Button variant="primary" onClick={() => window.location.reload()}>
//             Try Again
//           </Button>
//         </Alert>
//       </Container>
//     );
//   }

//   if (!course) {
//     return (
//       <Container className="my-5">
//         <Alert variant="warning" className="text-center">
//           <h4>Course Not Found</h4>
//           <p>The requested course could not be found.</p>
//           <Button variant="primary" onClick={() => navigate('/courses')}>
//             Browse All Courses
//           </Button>
//         </Alert>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <div className="col-md-12">
//         <CoursesAllGrid />
//       </div>
//       <Layout header={9} footer={1}>
//         <Container className="my-5">
//           <Card className="mb-5 shadow rounded-4 border-0">
//             <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center rounded-top-4 px-4 py-3">
//               <h2 className="mb-0 fs-4">{course.title}</h2>
//               <Button variant="light" size="sm" onClick={() => navigate(-1)}>
//                 ⬅ Back
//               </Button>
//             </Card.Header>

//             <Card.Body className="px-0 py-0">
//               <div className="row g-0">
//                 {/* Left Column - Video and Description */}
//                 <div className="col-md-7 p-4">
//                   <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm bg-dark">
//                     {course.URL ? (
//                       <iframe
//                         src={course.Url}
//                         title={`${course.title} preview`}
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="border-0"
//                       ></iframe>
//                     ) : (
//                       <div className="d-flex justify-content-center align-items-center h-100 text-white">
//                         <div className="text-center">
//                           <div className="fs-1 mb-2">🎬</div>
//                           <p>Video Coming Soon</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="mt-4">
//                     <h4>Course Description</h4>
//                     <p>{course.description || "No description available."}</p>
                    
//                     {course.curriculum && (
//                       <>
//                         <h5 className="mt-4">Curriculum</h5>
//                         <ul className="list-group">
//                           {course.curriculum.map((item, index) => (
//                             <li key={index} className="list-group-item border-0 ps-0">
//                               <strong>Module {index + 1}:</strong> {item}
//                             </li>
//                           ))}
//                         </ul>
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 {/* Right Column - Course Details */}
//                 <div className="col-md-5 p-4 border-start">
//                   <h4 className="mb-3 text-secondary d-flex align-items-center gap-2">
//                     <span>🔹</span> Course Details
//                   </h4>
                  
//                   {course.CourseDescription && course.CourseDescription.length > 0 && (
//                     <>
//                       <h5>Features</h5>
//                       <ul className="mb-4">
//                         {course.features.map((CourseDescription, i) => (
//                           <li key={i} className="mb-2 d-flex align-items-start gap-2">
//                             <span className="text-success">✓</span> {CourseDescription}
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   )}

//                   <div className="bg-light p-3 rounded-3 mb-4">
//                     <div className="mb-2">
//                       <strong>💰 Price:</strong> 
//                       <span className="text-success fw-bold ms-2">
//                         {course.Price ? `$${course.price}` : 'Free'}
//                       </span>
//                       {course.originalPrice && (
//                         <span className="text-decoration-line-through text-muted ms-2">
//                           ${course.Price}
//                         </span>
//                       )}
//                     </div>
//                     <div className="mb-2">
//                       <strong>⏳ Duration:</strong> 
//                       <span className="ms-2">{course.Durations || "Self-paced"}</span>
//                     </div>
//                     <div className="mb-2">
//                       <strong>👨‍🏫 Instructor:</strong> 
//                       <span className="ms-2">{course.InstructorCourse || "Expert Team"}</span>
//                     </div>
//                     <div className="mb-2">
//                       <strong>📅 Start Date:</strong> 
//                       <span className="ms-2">{course.LastDate || "Enroll anytime"}</span>
//                     </div>
//                     {/* <div>
//                       <strong>🎓 Level:</strong> 
//                       <span className="ms-2">{course.level || "All levels"}</span>
//                     </div> */}
//                   </div>

//                   <Button 
//                     variant="primary"
//                     size="lg" 
//                     className="w-100 fw-bold shadow-sm py-2 mb-3" 
//                     onClick={() => handleCourseClick(course._id || course.id)}
//                   >
//                     🚀 Enroll Now
//                   </Button>

//                   <div className="border p-3 rounded-3">
//                     <h5 className="mb-3">What's Included</h5>
//                     <ul className="list-unstyled">
//                       <li className="mb-2 d-flex align-items-start">
//                         <span className="text-success me-2">✔</span>
//                         <span>Certificate of completion</span>
//                       </li>
//                       <li className="mb-2 d-flex align-items-start">
//                         <span className="text-success me-2">✔</span>
//                         <span>Lifetime access to course materials</span>
//                       </li>
//                       <li className="mb-2 d-flex align-items-start">
//                         <span className="text-success me-2">✔</span>
//                         <span>Q&A support</span>
//                       </li>
//                       {course.downloadableResources && (
//                         <li className="d-flex align-items-start">
//                           <span className="text-success me-2">✔</span>
//                           <span>Downloadable resources</span>
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>

//           {relatedCourses.length > 0 && (
//             <div className="mt-5">
//               <h3 className="mb-4">You Might Also Like</h3>
//               <Slider {...sliderSettings}>
//                 {relatedCourses.map((relatedCourse) => (
//                   <div key={relatedCourse._id || relatedCourse.id} className="px-2">
//                     <Card 
//                       className="h-100 cursor-pointer shadow-sm"
//                       onClick={() => navigate(`/courses/${relatedCourse._id || relatedCourse.id}`)}
//                     >
//                       <Card.Img
//                         variant="top"
//                         src={relatedCourse.URL || 'https://via.placeholder.com/300x200?text=Course+Image'}
//                         alt={relatedCourse.title}
//                         style={{ height: '160px', objectFit: 'cover' }}
//                       />
//                       <Card.Body>
//                         <Card.Title className="fs-6">{relatedCourse.title}</Card.Title>
//                         <div className="d-flex justify-content-between align-items-center mt-3">
//                           <span className="badge bg-secondary">{relatedCourse.level || 'All Levels'}</span>
//                           <strong className="text-primary">
//                             {relatedCourse.price ? `$${relatedCourse.price}` : 'Free'}
//                           </strong>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           )}
//         </Container>
//       </Layout>
//     </>
//   );
// };

// export default CouresesFull;




// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Card, Button, Spinner, Alert } from 'react-bootstrap';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axios from 'axios';
// import { Layout } from '../../layouts/Layout';
// import { CoursesAllGrid } from './CoursesAllGrid';

// const CouresesFull = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [relatedCourses, setRelatedCourses] = useState([]);

//   const handleCourseClick = (courseId) => {
//     navigate(`/enroll/${courseId}`);
//   };

//   // useEffect(() => {
//   //   const fetchCourseData = async () => {
//   //     try {
//   //       setLoading(true);
//   //       setError(null);
        
//   //       // Fetch the main course data
//   //       const courseResponse = await axios.get(`http://localhost:8000/api/courses/${id}`);
//   //       if (!courseResponse.data) {
//   //         throw new Error('Course not found');
//   //       }
//   //       setCourse(courseResponse.data);
        
//   //       // Fetch related courses if category exists
//   //       if (courseResponse.data.category) {
//   //         const relatedResponse = await axios.get(`http://localhost:8000/api/courses?category=${courseResponse.data.category}&limit=4`);
//   //         setRelatedCourses(relatedResponse.data);
//   //       }
//   //     } catch (err) {
//   //       console.error("Failed to fetch course:", err);
//   //       setError(err.response?.data?.message || err.message || 'Failed to load course details');
//   //       if (err.response?.status === 404) {
//   //         navigate('/not-found', { replace: true });
//   //       }
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchCourseData();
//   // }, [id, navigate]);








// useEffect(() => {
//   const fetchCourseData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       // Fetch the main course data
//       const courseResponse = await axios.get(`http://localhost:8000/api/courses/${id}`);
//       if (!courseResponse.data) {
//         throw new Error('Course not found');
//       }
//       setCourse(courseResponse.data);
      
//       // Fetch related courses if category exists
//       if (courseResponse.data.category) {
//         // Extract category ID if category is an object, or use directly if it's a string
//         const categoryId = courseResponse.data.category._id || courseResponse.data.category;
//         const relatedResponse = await axios.get(
//           `http://localhost:8000/api/courses?category=${categoryId}&limit=4`
//         );
//         setRelatedCourses(relatedResponse.data);
//       }
//     } catch (err) {
//       console.error("Failed to fetch course:", err);
//       setError(err.response?.data?.message || err.message || 'Failed to load course details');
//       if (err.response?.status === 404) {
//         navigate('/not-found', { replace: true });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchCourseData();
// }, [id, navigate]);


//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   if (loading) {
//     return (
//       <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
//         <Spinner animation="border" variant="primary" />
//         <span className="ms-3">Loading course details...</span>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container className="my-5">
//         <Alert variant="danger" className="text-center">
//           <h4>Error Loading Course</h4>
//           <p>{error}</p>
//           <Button variant="primary" onClick={() => window.location.reload()}>
//             Try Again
//           </Button>
//         </Alert>
//       </Container>
//     );
//   }

//   if (!course) {
//     return (
//       <Container className="my-5">
//         <Alert variant="warning" className="text-center">
//           <h4>Course Not Found</h4>
//           <p>The requested course could not be found.</p>
//           <Button variant="primary" onClick={() => navigate('/courses')}>
//             Browse All Courses
//           </Button>
//         </Alert>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <div className="col-md-12">
//         <CoursesAllGrid />
//       </div>
//       <Layout header={9} footer={1}>
//         <Container className="my-5">
//           <Card className="mb-5 shadow rounded-4 border-0">
//             <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center rounded-top-4 px-4 py-3">
//               <h2 className="mb-0 fs-4">{course.title || 'Course Title'}</h2>
//               <Button variant="light" size="sm" onClick={() => navigate(-1)}>
//                 ⬅ Back
//               </Button>
//             </Card.Header>

//             <Card.Body className="px-0 py-0">
//               <div className="row g-0">
//                 {/* Left Column - Video and Description */}
//                 <div className="col-md-7 p-4">
//                   <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm bg-dark">
//                     {course.URL ? (
//                       <iframe
//                         src={course.URL}
//                         title={`${course.title} preview`}
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="border-0"
//                       ></iframe>
//                     ) : (
//                       <div className="d-flex justify-content-center align-items-center h-100 text-white">
//                         <div className="text-center">
//                           <div className="fs-1 mb-2">🎬</div>
//                           <p>Video Coming Soon</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="mt-4">
//                     <h4>Course Description</h4>
//                     <p>{course.CourseDescription || "No description available."}</p>
                    
//                     {course.curriculum && course.curriculum.length > 0 && (
//                       <>
//                         <h5 className="mt-4">Curriculum</h5>
//                         <ul className="list-group">
//                           {course.curriculum.map((item, index) => (
//                             <li key={index} className="list-group-item border-0 ps-0">
//                               <strong>Module {index + 1}:</strong> {item}
//                             </li>
//                           ))}
//                         </ul>
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 {/* Right Column - Course Details */}
//                 <div className="col-md-5 p-4 border-start">
//                   <h4 className="mb-3 text-secondary d-flex align-items-center gap-2">
//                     <span>🔹</span> Course Details
//                   </h4>
                  
//                   {course.features && course.features.length > 0 && (
//                     <>
//                       <h5>Features</h5>
//                       <ul className="mb-4">
//                         {course.features.map((feature, i) => (
//                           <li key={i} className="mb-2 d-flex align-items-start gap-2">
//                             <span className="text-success">✓</span> {feature}
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   )}

//                   <div className="bg-light p-3 rounded-3 mb-4">
//                     <div className="mb-2">
//                       <strong>💰 Price:</strong> 
//                       <span className="text-success fw-bold ms-2">
//                         {course.price ? `$${course.price}` : 'Free'}
//                       </span>
//                       {course.originalPrice && course.originalPrice > course.price && (
//                         <span className="text-decoration-line-through text-muted ms-2">
//                           ${course.originalPrice}
//                         </span>
//                       )}
//                     </div>
//                     <div className="mb-2">
//                       <strong>⏳ Duration:</strong> 
//                       <span className="ms-2">{course.duration || "Self-paced"}</span>
//                     </div>
//                     <div className="mb-2">
//                       <strong>👨‍🏫 Instructor:</strong> 
//                       <span className="ms-2">{course.instructor || "Expert Team"}</span>
//                     </div>
//                     <div className="mb-2">
//                       <strong>📅 Start Date:</strong> 
//                       <span className="ms-2">{course.startDate || "Enroll anytime"}</span>
//                     </div>
//                     <div>
//                       <strong>🎓 Level:</strong> 
//                       <span className="ms-2">{course.level || "All levels"}</span>
//                     </div>
//                   </div>

//                   <Button 
//                     variant="primary"
//                     size="lg" 
//                     className="w-100 fw-bold shadow-sm py-2 mb-3" 
//                     onClick={() => handleCourseClick(course._id)}
//                   >
//                     🚀 Enroll Now
//                   </Button>

//                   <div className="border p-3 rounded-3">
//                     <h5 className="mb-3">What's Included</h5>
//                     <ul className="list-unstyled">
//                       <li className="mb-2 d-flex align-items-start">
//                         <span className="text-success me-2">✔</span>
//                         <span>Certificate of completion</span>
//                       </li>
//                       <li className="mb-2 d-flex align-items-start">
//                         <span className="text-success me-2">✔</span>
//                         <span>Lifetime access to course materials</span>
//                       </li>
//                       <li className="mb-2 d-flex align-items-start">
//                         <span className="text-success me-2">✔</span>
//                         <span>Q&A support</span>
//                       </li>
//                       {course.downloadableResources && (
//                         <li className="d-flex align-items-start">
//                           <span className="text-success me-2">✔</span>
//                           <span>Downloadable resources</span>
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>

//           {relatedCourses.length > 0 && (
//             <div className="mt-5">
//               <h3 className="mb-4">You Might Also Like</h3>
//               <Slider {...sliderSettings}>
//                 {relatedCourses.map((relatedCourse) => (
//                   <div key={relatedCourse._id} className="px-2">
//                     <Card 
//                       className="h-100 cursor-pointer shadow-sm"
//                       onClick={() => navigate(`/courses/${relatedCourse._id}`)}
//                     >
//                       <Card.Img
//                         variant="top"
//                         src={relatedCourse.imageUrl || 'https://via.placeholder.com/300x200?text=Course+Image'}
//                         alt={relatedCourse.title}
//                         style={{ height: '160px', objectFit: 'cover' }}
//                       />
//                       <Card.Body>
//                         <Card.Title className="fs-6">{relatedCourse.title}</Card.Title>
//                         <div className="d-flex justify-content-between align-items-center mt-3">
//                           <span className="badge bg-secondary">{relatedCourse.level || 'All Levels'}</span>
//                           <strong className="text-primary">
//                             {relatedCourse.price ? `$${relatedCourse.price}` : 'Free'}
//                           </strong>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           )}
//         </Container>
//       </Layout>
//     </>
//   );
// };

// export default CouresesFull;















import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Spinner, Alert } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Layout } from '../../layouts/Layout';
import { CoursesAllGrid } from './CoursesAllGrid';

const CouresesFull = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(false);

  const handleCourseClick = (courseId) => {
    navigate(`/enroll/${courseId}`);
  };

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch the main course data
        const courseResponse = await axios.get(`http://localhost:8000/api/courses/${id}`);
        if (!courseResponse.data) {
          throw new Error('Course not found');
        }
        setCourse(courseResponse.data);
        
        // Fetch related courses if category exists
        if (courseResponse.data.category) {
          setRelatedLoading(true);
          const categoryId = typeof courseResponse.data.category === 'object' 
            ? courseResponse.data.category._id 
            : courseResponse.data.category;
          
          // const relatedResponse = await axios.get(
          //   `http://localhost:8000/api/courses?category=${categoryId}&limit=4&exclude=${id}`
          // );
          // setRelatedCourses(relatedResponse.data);
        }
      } catch (err) {
        console.error("Failed to fetch course:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
          config: err.config
        });
        setError(err.response?.data?.message || err.message || 'Failed to load course details');
        if (err.response?.status === 404) {
          navigate('/not-found', { replace: true });
        }
      } finally {
        setLoading(false);
        setRelatedLoading(false);
      }
    };

    fetchCourseData();
  }, [id, navigate]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <Spinner animation="border" variant="primary" />
        <span className="ms-3">Loading course details...</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger" className="text-center">
          <h4>Error Loading Course</h4>
          <p>{error}</p>
          <Button variant="primary" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </Alert>
      </Container>
    );
  }

  if (!course) {
    return (
      <Container className="my-5">
        <Alert variant="warning" className="text-center">
          <h4>Course Not Found</h4>
          <p>The requested course could not be found.</p>
          <Button variant="primary" onClick={() => navigate('/courses')}>
            Browse All Courses
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <>
      <div className="col-md-12">
        <CoursesAllGrid />
      </div>
      <Layout header={9} footer={1}>
        <Container className="my-5">
          <Card className="mb-5 shadow rounded-4 border-0">
            <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center rounded-top-4 px-4 py-3">
              <h2 className="mb-0 fs-4">{course.title || 'Course Title'}</h2>
              <Button variant="light" size="sm" onClick={() => navigate(-1)}>
                ⬅ Back
              </Button>
            </Card.Header>

            <Card.Body className="px-0 py-0">
              <div className="row g-0">
                {/* Left Column - Video and Description */}
                <div className="col-md-7 p-4">
                  <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm bg-dark">
                    {course.URL ? (
                      <iframe
                        src={course.URL}
                        title={`${course.title} preview`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                      ></iframe>
                    ) : (
                      <div className="d-flex justify-content-center align-items-center h-100 text-white">
                        <div className="text-center">
                          <div className="fs-1 mb-2">🎬</div>
                          <p>Video Coming Soon</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <h4>Course Description</h4>
                    <p>{course.CourseDescription || "No description available."}</p>
                    
                    {course.curriculum && course.curriculum.length > 0 && (
                      <>
                        <h5 className="mt-4">Curriculum</h5>
                        <ul className="list-group">
                          {course.curriculum.map((item, index) => (
                            <li key={index} className="list-group-item border-0 ps-0">
                              <strong>Module {index + 1}:</strong> {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>

                {/* Right Column - Course Details */}
                <div className="col-md-5 p-4 border-start">
                  <h4 className="mb-3 text-secondary d-flex align-items-center gap-2">
                    <span>🔹</span> Course Details
                  </h4>
                  
                  {course.features && course.features.length > 0 && (
                    <>
                      <h5>Features</h5>
                      <ul className="mb-4">
                        {course.features.map((feature, i) => (
                          <li key={i} className="mb-2 d-flex align-items-start gap-2">
                            <span className="text-success">✓</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <div className="bg-light p-3 rounded-3 mb-4">
                    <div className="mb-2">
                      <strong>💰 Price:</strong> 
                      <span className="text-success fw-bold ms-2">
                        {course.price ? `$${course.price}` : 'Free'}
                      </span>
                      {course.originalPrice && course.originalPrice > course.price && (
                        <span className="text-decoration-line-through text-muted ms-2">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="mb-2">
                      <strong>⏳ Duration:</strong> 
                      <span className="ms-2">{course.duration || "Self-paced"}</span>
                    </div>
                    <div className="mb-2">
                      <strong>👨‍🏫 Instructor:</strong> 
                      <span className="ms-2">{course.instructor || "Expert Team"}</span>
                    </div>
                    <div className="mb-2">
                      <strong>📅 Start Date:</strong> 
                      <span className="ms-2">{course.startDate || "Enroll anytime"}</span>
                    </div>
                    <div>
                      <strong>🎓 Level:</strong> 
                      <span className="ms-2">{course.level || "All levels"}</span>
                    </div>
                  </div>

                  <Button 
                    variant="primary"
                    size="lg" 
                    className="w-100 fw-bold shadow-sm py-2 mb-3" 
                    onClick={() => handleCourseClick(course._id)}
                  >
                    🚀 Enroll Now
                  </Button>

                  <div className="border p-3 rounded-3">
                    <h5 className="mb-3">What's Included</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2 d-flex align-items-start">
                        <span className="text-success me-2">✔</span>
                        <span>Certificate of completion</span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="text-success me-2">✔</span>
                        <span>Lifetime access to course materials</span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <span className="text-success me-2">✔</span>
                        <span>Q&A support</span>
                      </li>
                      {course.downloadableResources && (
                        <li className="d-flex align-items-start">
                          <span className="text-success me-2">✔</span>
                          <span>Downloadable resources</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          {relatedLoading ? (
            <div className="text-center my-4">
              <Spinner animation="border" variant="secondary" />
              <p className="mt-2">Loading related courses...</p>
            </div>
          ) : relatedCourses.length > 0 ? (
            <div className="mt-5">
              <h3 className="mb-4">You Might Also Like</h3>
              <Slider {...sliderSettings}>
                {relatedCourses.map((relatedCourse) => (
                  <div key={relatedCourse._id} className="px-2">
                    <Card 
                      className="h-100 cursor-pointer shadow-sm"
                      onClick={() => navigate(`/courses/${relatedCourse._id}`)}
                    >
                      <Card.Img
                        variant="top"
                        src={relatedCourse.imageUrl || 'https://via.placeholder.com/300x200?text=Course+Image'}
                        alt={relatedCourse.title}
                        style={{ height: '160px', objectFit: 'cover' }}
                      />
                      <Card.Body>
                        <Card.Title className="fs-6">{relatedCourse.title}</Card.Title>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <span className="badge bg-secondary">{relatedCourse.level || 'All Levels'}</span>
                          <strong className="text-primary">
                            {relatedCourse.price ? `$${relatedCourse.price}` : 'Free'}
                          </strong>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </Slider>
            </div>
          ) : null}
        </Container>
      </Layout>
    </>
  );
};

export default CouresesFull;