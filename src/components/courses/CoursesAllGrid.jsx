import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import courseThumb1 from "../../assets/alec-img/courses/course-1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CoursesAllGrid = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/allcourse');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>Error: {error}</div>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // For desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480, // mobile portrait
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (

    <>
     {/* <div className="td_height_140 td_height_lg_75" /> */}
         <div className="td_height_140 td_height_lg_90" />
    <div className="course-slider-wrapper mb-5">
      <Slider {...sliderSettings}>
        {courses.map((course, idx) => (
          <div key={course._id || idx} className="p-2">
            <div className="td_card td_style_3 d-block td_radius_10">
              {course.label && (
                <span className="td_card_label td_accent_bg td_white_color">
                  {course.label}
                </span>
              )}
              <Link to={`/courses-layout`} className="td_card_thumb">
                <img
                  src={Array.isArray(course.images) ? course.images[0] : course.images || courseThumb1}
                  alt={course.Coursename}
                  className="img-fluid"
                />
              </Link>
              <div className="p-2 td_white_bg">
                <div className="td_card_info_in">
                  <h5 className="td_card_title text-center td_fs_14 td_mb_16">
                    <Link to={`/courses-layout`}>{course.Coursename || "Judiciary Course"}</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>

  );
};
