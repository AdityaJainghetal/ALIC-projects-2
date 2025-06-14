import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Layout } from '../../layouts/Layout';
import { CoursesAllGrid } from './CoursesAllGrid';
const coursesData = [
  {
    id: 1,
    title: "Foundation Course",
    features: [
      " Live classes on 10 subjects of Law, GK, English (Old+New Laws)  ",
      " Live chat with faculty - student interaction during the class.",
      " Recordings of all the live classes available same day",
      " Class notes (delivered by faculty in class)",
      " Study modules in hard copy (delivered at residence of student)",
      " Regular objective tests Prelims + Mains Topic wise ",
      " Separate live doubt clearing sessions and discussions on the objective tests.",
      " Regular descriptive tests on the pattern of Mains Exam.",
      " Live discussion on the model synopsis of each question of the descriptive test.",
      " Evaluation and individual review of the answer sheets of each student."

    ],
    price: "₹75,000",
    validity: "18 Months",
    faculty: "Nitesh Sir, Anamika Mam",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"
  },

  {
    id: 2,
    title: "Foundation Advanced",
    features: [
         "Live classes on 10 subjects of Law, GK, English (Old+New Laws)",
    "Live chat with faculty - student interaction during the class.",
    "Recordings of all the live classes available same day",
    "Class notes (delivered by faculty in class)",
    "Study modules in hard copy (delivered at residence of student)",
    "Regular objective tests (Prelims + Mains Topic wise)",
    "Separate live doubt clearing sessions and discussions on the objective tests.",
    "Regular descriptive tests on the pattern of Mains Exam.",
    "Live discussion on the model synopsis of each question of the descriptive test.",
    "Evaluation and individual review of the answer sheets of each student."


    ],
    price: "₹75,000",
    validity: "36 Months",
    faculty: "Nitesh Sir, Anamika Mam",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 3,
    title: "Target Judiciary",
    features: [
      " Caters to10 subjects of Law ( Major and Minor ), GK, Hindi , English & Computer ( Recorded )",
 "Revision classes for crucial topics ( Recorded ) & Doubt Discussion Group . "
    ],
    price: "₹25,000",
    validity: "13 Months",
    type: "Recorded Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"


  },
  {
    id: 4,
    title: "BNSS",
    features: [
      " Live Classes of BNSS",
"Recording of the LIVE classes" ,
"Topic test ",
" Validity - Till completion of Subject",
    ],
    price: "₹5,000",
    validity: "Till completion",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 5,
    title: "MP Local Laws",
    features: [
      "Live Classes",
      "Recorded videos of the live classes",
"Class Notes",
"Study Modules in Hard Copy ",
   "Objective Tests (For Prelims) ",
   " Descriptive Test (For Mains) ",
 "Duration of the course will be around 20-22 classes to complete the syllabus of the two Acts -  ",
 " MP Land Revenue Code ",
 "MP Accommodation Control Act ",






    ],
    price: "₹7,999",
    validity: "1 Year",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 6,
    title: "RJS Essay Writing",
    features: [
       "24 Live Classes",
    "Recordings of all the LIVE Classes",
    "70 Essay (40 Essay Classroom Discussion + 30 Practice Sets)",
    "Practice Set with Model Answers",
    "Evaluation of Essay with detailed feedback & Suggestion",
    "Personal Mentorship"
    ],
    price: "₹8,000",
    validity: "6 Months",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 7,
    title: "Translation Course",
    features: [
      "15+ classes (English ↔ Hindi)",
      "40+ practice sets",
"English to Hindi Translation:- 20+ Sets",
"Hindi to English Translation :- 20+ Sets",
// "Validity:- 6 Months",
"Mode:- Online / Offline",
    ],
    price: "₹5,000",
    validity: "6 Months",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 8,
    title: "Judgement Writing",
    features: [
 "Judgement Writing for State Judiciary Examination"  ,
      "MPCJ",
    "CGCJ",
    "UPPCS J",
    "UKPCS J",
    "Rajasthan Judiciary",
    "Delhi Judiciary"
    ],
    price: "₹5,000",
    validity: "6 Months",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 9,
    title: "Bharatiya Sakshya Adhiniyam (BSA)",
    features: [
       "LIVE Classes",
    "Recordings of LIVE Classes",
     "Test over app",
        "2 Attempt Each",
        "Answers with Explanation",
    ],
    price: "₹5,000",
    validity: "6 Months",
    faculty: "Nitesh Sir",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 10,
    title: "Essay & Precise Writing",
    features: [
      "Total Classes: 13+ classes",
         "Article writing: 20+ Sets",
        "Precise: 10+ Sets",
         "Validity: 6 Months",
    "Mode: Online / Offline",
    "Evaluation",

    ],
    price: "₹4,000",
    validity: "6 Months",
    type: "Recorded Course"
  }
  // ... more courses
];

const CouresesFull = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const foundCourse = coursesData.find(c => c.id.toString() === id);
    if (!foundCourse) {
      navigate('/');
      return;
    }
    setCourse(foundCourse);
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

  if (!course) return <Container>Loading...</Container>;

  return (
    <>
     {/* <div className="td_height_112 td_height_lg_60" /> */}
      <div className="col-md-12">
                     <CoursesAllGrid/>
               </div>
      <Layout header={9} footer={1}>
<Container className="my-5">
      <Card className="mb-5 shadow rounded-4 border-0">
        <Card.Header className="bg-[] text-white d-flex justify-content-between align-items-center rounded-top-4 px-4 py-3">
          <h2 className="mb-0 fs-4">{course.title}</h2>
          <Button variant="light" size="sm" onClick={() => navigate(-1)}>
            ⬅ Back
          </Button>
        </Card.Header>

        <Card.Body className="px-0 py-0">
          <div className="row g-0">
            {/* Left Column - Video */}
            <div className="col-md-7 p-4">
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm bg-dark">
                {course.videoUrl ? (
                  <iframe
                    src={course.videoUrl}
                    title={`${course.title} preview`}
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

              {/* Additional Video Info (Optional) */}
              <div className="mt-3">
                <h5 className="d-flex align-items-center gap-2">
                  <span className="badge bg-secondary">📺</span> Course Preview
                </h5>
                <p className="text-muted small">{course.videoDescription || "Watch this preview to understand the course content."}</p>
              </div>
            </div>

            {/* Right Column - Course Details */}
            <div className="col-md-5 p-4 border-start">
              <h4 className="mb-3 text-secondary d-flex align-items-center gap-2">
                <span>🔹</span> Features
              </h4>
              <ul className="mb-4">
                {course.features.map((feature, i) => (
                  <li key={i} className="mb-2 d-flex align-items-start gap-2">
                    <span className="text-success">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="bg-light p-3 rounded-3 mb-4">
                <div className="mb-1">
                  <strong>💰 Price:</strong> <span className="text-success fw-bold">{course.price}</span>
                </div>
                <div className="mb-1">
                  <strong>⏳ Validity:</strong> {course.validity}
                </div>
                <div className="mb-1">
                  <strong>👨‍🏫 Faculty:</strong> {course.faculty || "Not specified"}
                </div>
                <div>
                  <strong>🎓 Type:</strong> {course.type}
                </div>
              </div>

              <Button style={{ backgroundColor: "#801E23", border: "none" }} size="lg" className="w-100 fw-bold shadow-sm py-2">
                🚀 Enroll Now
              </Button>

              {/* Additional Info (Optional) */}
              <div className="mt-3 small text-muted">
                <div className="d-flex gap-2 mb-1">
                  <span>✔</span> <span>Certificate included</span>
                </div>
                <div className="d-flex gap-2">
                  <span>✔</span> <span>Lifetime access</span>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>


      <h3 className="mb-4">Other Courses</h3>
      <Slider {...sliderSettings}>
        {coursesData
          .filter(c => c.id.toString() !== id) // वर्तमान कोर्स को छोड़कर
          .map(course => (
            <div key={course.id} className="px-2">
              <Card style={{ display: 'flex', flexDirection: 'row' }}
                className="h-100 cursor-pointer"
                onClick={() => navigate(`/courses/${course.id}`)}
              >
                <Card.Body style={{ flex: '1' }}>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>
                    <small className="text-muted">{course.type}</small><br />
                    <strong>Price:</strong> {course.price}
                  </Card.Text>
                </Card.Body>

                {/* Right Side - Image */}
                <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                  <Card.Img
                    src={course.imageUrl}
                    alt={course.title}
                    style={{
                      width: '200px',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

              </Card>
            </div>
          ))}
      </Slider>
    </Container>
    </Layout>
    </>

  );
};

export default CouresesFull;