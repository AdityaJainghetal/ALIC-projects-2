// import React from "react";
// import { Nav } from "react-bootstrap";

// const SidebarContent = ({ activeTab, setActiveTab }) => (
//   <div className="p-3">
//     <h5 className="fw-bold mb-3 border-bottom pb-2">Filters</h5>
//     <div className="mb-4">
//       <label className="form-label fw-semibold">Course Type</label>
//       <div className="form-check">
//         <input className="form-check-input" type="checkbox" id="foundation" />
//         <label className="form-check-label" htmlFor="foundation">
//           Foundation Course
//         </label>
//       </div>
//       <div className="form-check">
//         <input className="form-check-input" type="checkbox" id="advance" />
//         <label className="form-check-label" htmlFor="advance">
//           Foundation Advance
//         </label>
//       </div>
//     </div>

//     <h5 className="fw-bold mb-3 border-bottom pb-2">Courses</h5>
//     <Nav className="flex-column gap-2">
//       <Nav.Link
//         onClick={() => setActiveTab("foundation")}
//         className={`fw-medium ${activeTab === "foundation" ? "text-primary fw-bold" : ""}`}
//       >
//         Live Courses
//       </Nav.Link>
//       <Nav.Link
//         onClick={() => setActiveTab("target")}
//         className={`fw-medium ${activeTab === "target" ? "text-primary fw-bold" : ""}`}
//       >
//         Recorded Courses
//       </Nav.Link>
//       <Nav.Link
//         onClick={() => setActiveTab("prelims")}
//         className={`fw-medium ${activeTab === "prelims" ? "text-primary fw-bold" : ""}`}
//       >
//       Test Series
//       </Nav.Link>
//       {/* <Nav.Link
//         onClick={() => setActiveTab("mains")}
//         className={`fw-medium ${activeTab === "mains" ? "text-primary fw-bold" : ""}`}
//       >
//         Mains Test Series
//       </Nav.Link> */}
//     </Nav>
//   </div>
// );

// export default SidebarContent;




// import React, { useEffect, useState } from "react";
// import { Nav } from "react-bootstrap";
// import { fetchSubcategory } from "../../api";
// import { toast } from "react-toastify";

// const SidebarContent = ({ activeTab, setActiveTab }) => {
//   const [subCategories, setSubCategories] = useState([]);

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

//   return (
//     <div className="p-3">
//       <h5 className="fw-bold mb-3 border-bottom pb-2">Filters</h5>
//       <div className="mb-4">
//         <label className="form-label fw-semibold">Course Type</label>
       
//         <div className="form-check">
//             <Nav className="flex-column gap-2">
//               <input className="form-check-input" type="checkbox"  />
//         {subCategories.map((category) => (
//           <Nav.Link
//             key={category._id}
//             onClick={() => setActiveTab(category._id)}
//             className={`fw-medium ${activeTab === category._id ? "text-primary fw-bold" : ""}`}
//           >
//             {category.name}
           
//           </Nav.Link>
//         ))}
//       </Nav>
//       </div>

    

//       <h5 className="fw-bold mb-3 border-bottom pb-2">Courses</h5>
//       <Nav className="flex-column gap-2">
//         <Nav.Link
//           onClick={() => setActiveTab("foundation")}
//           className={`fw-medium ${activeTab === "foundation" ? "text-primary fw-bold" : ""}`}
//         >
//           Live Courses
//         </Nav.Link>
//         <Nav.Link
//           onClick={() => setActiveTab("target")}
//           className={`fw-medium ${activeTab === "target" ? "text-primary fw-bold" : ""}`}
//         >
//           Recorded Courses
//         </Nav.Link>
//         <Nav.Link
//           onClick={() => setActiveTab("prelims")}
//           className={`fw-medium ${activeTab === "prelims" ? "text-primary fw-bold" : ""}`}
//         >
//           Test Series
//         </Nav.Link>
//       </Nav>
   
//     </div>
//      </div>
    
//   );
// };

// export default SidebarContent;


// import React, { useEffect, useState } from "react";
// import { Nav } from "react-bootstrap";
// import { fetchcategory,fetchSubcategory } from "../../api";
// import { toast } from "react-toastify";

// const SidebarContent = ({ activeTab, setActiveTab }) => {
//   const [subCategories, setSubCategories] = useState([]);

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


//     useEffect(() => {
//       const fetchCategories = async () => {
//         setLoading(true);
//         try {
//           const response = await fetchcategory();
//           if (response.data) {
//             setCategories(response.data);
//           }
//         } catch (error) {
//           console.error("Error fetching categories:", error);
//           toast.error("Failed to load categories. Please try again.");
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchCategories();
//     }, []);

//   return (
//     <div className="p-3">
//       <h5 className="fw-bold mb-3 border-bottom pb-2">Filters</h5>
//       <div className="mb-4">
//         <label className="form-label fw-semibold">Course Type</label>
        
//         <Nav className="flex-column gap-2">
//           {subCategories.map((category) => (
//             <div className="form-check" key={category._id}>
//               <input 
//                 className="form-check-input" 
//                 type="checkbox" 
//                 checked={activeTab === category._id}
//                 onChange={() => setActiveTab(category._id)}
//               />
//               <label 
//                 className={`form-check-label fw-medium ${activeTab === category._id ? "text-primary fw-bold" : ""}`}
//                 onClick={() => setActiveTab(category._id)}
//               >
//                 {category.name}
//               </label>
//             </div>
//           ))}
//         </Nav>
//       </div>

//       <h5 className="fw-bold mb-3 border-bottom pb-2">Courses</h5>
//       <Nav className="flex-column gap-2">
//         <div className="form-check">
//           <input 
//             className="form-check-input" 
//             type="checkbox" 
//             checked={activeTab === "foundation"}
//             onChange={() => setActiveTab("foundation")}
        
//         {categories.map((category) => (
//           <option key={category._id} value={category._id}>
//             {category.name}
//           </option>
//             />
//       </Nav>
//     </div>
//   );
// };

// export default SidebarContent;


import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { fetchcategory, fetchSubcategory } from "../../api";
import { toast } from "react-toastify";

const SidebarContent = ({ activeTab, setActiveTab }) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
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
    fetchAllSubcategories();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetchcategory();
        if (response.data) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to load categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Filter subcategories based on selected category
  const filteredSubCategories = selectedCategory
    ? subCategories.filter((subCat) => subCat.category === selectedCategory)
    : subCategories;

  return (
    <div className="p-3">
      <h5 className="fw-bold mb-3 border-bottom pb-2">Courses</h5>
      <div className="mb-4">
        <Nav className="flex-column gap-2">
          {categories.map((category) => (
            <div className="form-check" key={category._id}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategory === category._id}
                onChange={() => 
                  setSelectedCategory(selectedCategory === category._id ? null : category._id)
                }
              />
              <label
                className={`form-check-label fw-medium ${
                  selectedCategory === category._id ? "text-primary fw-bold" : ""
                }`}
                onClick={() => 
                  setSelectedCategory(selectedCategory === category._id ? null : category._id)
                }
              >
                {category.name}
              </label>
            </div>
          ))}
        </Nav>
      </div>

      <h5 className="fw-bold mb-3 border-bottom pb-2">Judicary</h5>
      <div className="mb-4">
        <Nav className="flex-column gap-2">
          {filteredSubCategories.map((subCategory) => (
            <div className="form-check" key={subCategory._id}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={activeTab === subCategory._id}
                onChange={() => setActiveTab(subCategory._id)}
              />
              <label
                className={`form-check-label fw-medium ${
                  activeTab === subCategory._id ? "text-primary fw-bold" : ""
                }`}
                onClick={() => setActiveTab(subCategory._id)}
              >
                {subCategory.name}
              </label>
            </div>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default SidebarContent;