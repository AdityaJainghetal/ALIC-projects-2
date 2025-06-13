// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import $ from "jquery";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// // import "jquery-ui-dist/jquery-ui"; // for #slider-range (make sure jquery-ui is installed)

// import {  fetchcategory } from "../../judement/api"

// const categories = [
//   { name: "Landmark Judgement" },
//   { name: "Latest Judgement", count: 45 },
//   { name: "Judgement", count: 16 },
//   { name: "Law", count: 45 },
//   { name: "5 Years LLb", count: 42 },
//   { name: "Legal", count: 44 },
//   { name: "Landmark", count: 44 },
//   { name: "Latest", count: 44 },
// ];


// export const CoursesSidebar = () => {
//   useEffect(() => {
//     // jQuery UI slider
//     $("#slider-range").slider({
//       range: true,
//       min: 10,
//       max: 400,
//       values: [60, 300],
//       slide: function (event, ui) {
//         $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
//       },
//     });
//     $("#amount").val(
//       "$" +
//         $("#slider-range").slider("values", 0) +
//         " - $" +
//         $("#slider-range").slider("values", 1)
//     );
//   }, []);



  
//     const fetchCategories = async () => {
//       setLoading(true)
//       try {
//         const response = await fetchcategory();
//         if (response.data) {
//           setCategories(response.data)
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching categories:", error)
//         setError("Failed to load categories. Please try again.")
//         setLoading(false)
//       }
//     }
  
//     useEffect(() => {
//       fetchCategories()
//     }, [])
  
  
  
  
//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <div className="d-lg-none d-flex justify-content-end p-3">
//         <button
//           className="btn btn-danger mt-4 shadow"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#mobileSidebar"
//           aria-controls="mobileSidebar"
//         >
//           <i className="bi bi-funnel-fill me-2"></i>Open Filter
//         </button>
//       </div>

//       {/* Mobile Sidebar (80% width) */}
//       <div
//         className="offcanvas offcanvas-start custom-offcanvas-width"
//         tabIndex="-1"
//         id="mobileSidebar"
//         aria-labelledby="mobileSidebarLabel"
//       >
//         <div className="offcanvas-header border-bottom">
//           <h5 className="offcanvas-title" id="mobileSidebarLabel">
//             Filters
//           </h5>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
//           <SidebarContent />
//         </div>
//       </div>

//       {/* Desktop Sidebar */}
//       <div className="d-none d-lg-block p-4 border-end" style={{ minWidth: "250px" }}>
//         <SidebarContent />
//       </div>

//       {/* Custom style for 80% width on mobile sidebar */}
//       <style>{`
//         @media (max-width: 991.98px) {
//           .custom-offcanvas-width {
//             width: 80% !important;
//           }
//         }

//         .category-link:hover {
//           color: #dc3545;
//           text-decoration: underline;
//         }

//         #slider-range {
//           height: 8px;
//           background: #dee2e6;
//           border-radius: 5px;
//         }

//         #slider-range .ui-slider-handle {
//           background: #dc3545;
//           border: none;
//           width: 20px;
//           height: 20px;
//           top: -6px;
//           border-radius: 50%;
//         }
//       `}</style>
//     </>
//   );
// };

// // Sidebar Content Component
// const SidebarContent = () => {
//   return (
//     <div  className="td_sidebar_filter m-0 me-0">
//       {/* Categories Section */}
//       <div className="td_filter_widget mb-4">
//         <h3 className="td_filter_widget_title h5 mb-3 text-uppercase border-bottom pb-2">
//           Categories
//         </h3>
//         <div className="td_filter_category fw-semibold">
//           {categories.map((category, index) => (
//             <Link
//               key={index}
//               to="/courses-grid-view"
//               className="d-block mb-2 text-dark text-decoration-none category-link"
//             >
//               {category.name}
//             </Link>
//           ))}
//         </div>
//       </div>


//     </div>
//   );
// };



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "jquery-ui-dist/jquery-ui"; // for #slider-range (make sure jquery-ui is installed)

import { fetchcategory } from "../BlogsCategory/api";

export const CoursesSidebar = () => {
  useEffect(() => {
    // jQuery UI slider
    $("#slider-range").slider({
      range: true,
      min: 10,
      max: 400,
      values: [60, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="d-lg-none d-flex justify-content-end p-3">
        <button
          className="btn btn-danger mt-4 shadow"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
          aria-controls="mobileSidebar"
        >
          <i className="bi bi-funnel-fill me-2"></i>Open Filter
        </button>
      </div>

      {/* Mobile Sidebar (80% width) */}
      <div
        className="offcanvas offcanvas-start custom-offcanvas-width"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="mobileSidebarLabel">
            Filters
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <SidebarContent />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="d-none d-lg-block p-4 border-end" style={{ minWidth: "250px" }}>
        <SidebarContent />
      </div>

      {/* Custom style for 80% width on mobile sidebar */}
      <style>{`
        @media (max-width: 991.98px) {
          .custom-offcanvas-width {
            width: 80% !important;
          }
        }

        .category-link:hover {
          color: #dc3545;
          text-decoration: underline;
        }

        #slider-range {
          height: 8px;
          background: #dee2e6;
          border-radius: 5px;
        }

        #slider-range .ui-slider-handle {
          background: #dc3545;
          border: none;
          width: 20px;
          height: 20px;
          top: -6px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

// Sidebar Content Component
const SidebarContent = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetchcategory();
      if (response.data) {
        setCategories(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError("Failed to load categories. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div className="td_sidebar_filter m-0 me-0">
      {/* Categories Section */}
      <div className="td_filter_widget mb-4">
        <h3 className="td_filter_widget_title h5 mb-3 text-uppercase border-bottom pb-2">
          Categories
        </h3>
        <div className="td_filter_category fw-semibold">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/courses-grid-view"
              className="d-block mb-2 text-dark text-decoration-none category-link"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};