

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export const CoursesAllList = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleCourseClick = (courseId) => {
//     navigate(`/judgements-details/${courseId}`);
//   };

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/judement/display');
//         if (!response.ok) {
//           throw new Error('Failed to fetch courses');
//         }
//         const data = await response.json();
//         setCourses(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//  <div className="row td_gap_y_10 td_row_gap_30">
//   {courses.map((course) => (
//     <div key={course.id} className="col-xl-12 mb-4 ">
//       <div
//         className="td_card td_style_5 td_type_3"
//         style={{
//           padding:"10px",
//           border: '2px solid #e0e0e0', // Thicker border
//           borderRadius: '12px', // Rounded corners
//           boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Subtle shadow
//           transition: 'all 0.3s ease', // Smooth hover effect
//           ':hover': {
//             boxShadow: '0 6px 16px rgba(0,0,0,0.15)', // Enhanced shadow on hover
//             borderColor: '#0066cc' // Blue border on hover
//           }
//         }}
//       >
//         {/* Rest of your existing card content remains exactly the same */}
//         <div className="td_card_thumb" onClick={() => handleCourseClick(course._id)} style={{ cursor: 'pointer' }}>
//           <span className="td_card_thumb_in td_radius_10">
//             <img src={Array.isArray(course.images) ? course.images[0] : course.images} alt={course.title} />
//             <span className="td_card_label td_fs_14 td_white_color td_accent_bg">
//               {course.lastDate}
//             </span>
//           </span>
//         </div>
//         <div className="td_card_content">
//           <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
//             <span onClick={() => handleCourseClick(course._id)} style={{ cursor: 'pointer' }}>
//               {course.title}
//             </span>
//           </h2>
//           <div>
//             <p>{course.subTitle}.</p>
//           </div>
//           <div className="td_card_btns_wrap justify-content-between">
//             <div className="td_btn td_style_1 td_type_3 td_radius_10 td_medium td_fs_14">
//               <span className="td_accent_color">
//                 <span>Posted By : </span>
//                 <span className="td_fs_18 td_medium td_heading_color">
//                   {course.publicerName}
//                 </span>
//               </span>
//             </div>
//             <div
//               onClick={() => handleCourseClick(course._id)}
//               className="td_btn td_style_1 td_type_3 td_radius_10 td_medium td_fs_14"
//               style={{ cursor: 'pointer' }}
//             >
//               <span className="td_btn_in td_white_color td_accent_bg">Read more...</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
//   );
// };



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export const CoursesAllList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/judgements-details/${courseId}`);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8000/judement/display');
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="row td_gap_y_10 td_row_gap_30">
      {courses.map((course) => (
        <div key={course.id} className="col-xl-12 mb-4 ">
          <div
            className="td_card td_style_5 td_type_3"
            style={{
              padding: "10px",
              border: '2px solid #e0e0e0',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              ':hover': {
                boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                borderColor: '#0066cc'
              }
            }}
          >
            <div className="td_card_thumb" onClick={() => handleCourseClick(course._id)} style={{ cursor: 'pointer' }}>
              <span className="td_card_thumb_in td_radius_10">
                <img src={Array.isArray(course.images) ? course.images[0] : course.images} alt={course.title} />
                <span className="td_card_label td_fs_14 td_white_color td_accent_bg">
                  {dayjs(course.lastDate).format('DD MMM YYYY')}
                </span>
              </span>
            </div>
            <div className="td_card_content">
              <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                <span onClick={() => handleCourseClick(course._id)} style={{ cursor: 'pointer' }}>
                  {course.title}
                </span>
              </h2>
              <div>
                <p>{course.subTitle}.</p>
              </div>
              <div className="td_card_btns_wrap justify-content-between">
                <div className="td_btn td_style_1 td_type_3 td_radius_10 td_medium td_fs_14">
                  <span className="td_accent_color">
                    <span>Posted By : </span>
                    <span className="td_fs_18 td_medium td_heading_color">
                      {course.publicerName}
                    </span>
                  </span>
                </div>
                <div
                  onClick={() => handleCourseClick(course._id)}
                  className="td_btn td_style_1 td_type_3 td_radius_10 td_medium td_fs_14"
                  style={{ cursor: 'pointer' }}
                >
                  <span className="td_btn_in td_white_color td_accent_bg">Read more...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};