// import React from "react";
// import { Layout } from "../../layouts/Layout";
// import { CoursesAllContainerSidebar } from "../../components/courses/CoursesAllContainerSidebar";
// // import { CoursesAllGridSidebar } from "../../components/courses/CoursesAllGridSidebar";
// import { CoursesAllList } from "../../components/courses/CoursesAllList";

// export const Judgement = () => {
//   return (
//     <Layout

//     >
//       <CoursesAllContainerSidebar isGrid>
//         <CoursesAllList />
//       </CoursesAllContainerSidebar>
//     </Layout>
//   );
// };



import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";
import { CoursesAllContainerSidebar } from "../../components/courses/CoursesAllContainerSidebar";
import { CoursesAllList } from "../../components/courses/CoursesAllList";

export const Judgement = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Layout>
      <CoursesAllContainerSidebar 
        isGrid
        onCategorySelect={handleCategorySelect}
      >
        <CoursesAllList selectedCategory={selectedCategory} />
      </CoursesAllContainerSidebar>
    </Layout>
  );
};