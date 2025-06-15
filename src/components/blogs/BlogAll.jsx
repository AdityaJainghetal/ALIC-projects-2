import React, { useState, useEffect } from "react";
import { BlogPagination } from "./BlogPagination";
import { BlogItem } from "./BlogItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import post1 from "../../assets/alec-img/blogs/one.jpg";
import post2 from "../../assets/alec-img/blogs/two.jpg";
import post3 from "../../assets/alec-img/blogs/three.jpg";
import post4 from "../../assets/alec-img/blogs/four.jpg";
import post5 from "../../assets/alec-img/blogs/five.jpg";
import post6 from "../../assets/alec-img/blogs/six.jpg";
import post7 from "../../assets/alec-img/blogs/seven.jpg";
import post8 from "../../assets/alec-img/blogs/eight.jpg";
import post9 from "../../assets/alec-img/blogs/one.jpg";
import { CoursesSidebar } from "../courses/CoursesSidebar";
import { BlogSidebar } from "./BlogSidebar";

export const BlogAll = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:8000/blog/display');
      if (!response.ok) throw new Error('Failed to fetch blogs');
      const data = await response.json();
      const blogsArray = Array.isArray(data) ? data : data.data || [];
      setBlogs(blogsArray);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      toast.error('Error fetching blogs: ' + err.message);
      setLoading(false);
    }
  };

  const fallbackBlogPosts = [
    { image: post1, date: "22 Mar 2025", author: "Aishwarya Chourasia", title: "Justice Yashwant Varma transfer? What is the In-House Enquiry Procedure?", excerpt: "Introduction The legal fraternity was shaken when reports emerged regarding." },
    { image: post2, date: "21 Mar 2025", author: "Aishwarya Chourasia", title: "How Can High Court Judges Be Removed?", excerpt: "Recently a major controversy erupted after a large amount of unaccounted." },
    { image: post3, date: "21 Mar 2025", author: "Manas Shrivastava", title: "Vested and Contingent Interest under the Transfer of Property Act 1882", excerpt: "When a property is transferred, the interest of the transferee." },
    { image: post4, date: "21 Mar 2025", author: "Manas Shrivastava", title: "Vested and Contingent Interest under the Transfer of Property Act 1882", excerpt: "When a property is transferred, the interest of the transferee." },
    { image: post5, date: "21 Mar 2025", author: "Manas Shrivastava", title: "Vested and Contingent Interest under the Transfer of Property Act 1882", excerpt: "When a property is transferred, the interest of the transferee." },
    { image: post6, date: "22 Mar 2025", author: "Aishwarya Chourasia", title: "Justice Yashwant Varma transfer? What is the In-House Enquiry Procedure?", excerpt: "Introduction The legal fraternity was shaken when reports emerged regarding." },
    { image: post7, date: "Jan 04, 2024", author: "John Doe", title: "Comprehensive Student Guide for New Educations System", excerpt: "Education is a dynamic and evolving field that plays a crucial." },
    { image: post8, date: "Jan 03, 2024", author: "John Doe", title: "Overview of the New Education System for Students", excerpt: "Education is a dynamic and evolving field that plays a crucial." },
    { image: post9, date: "Jan 01, 2024", author: "John Doe", title: "Student Guide for the New Education System", excerpt: "Education is a dynamic and evolving field that plays a crucial." },
  ];

  const displayBlogs = blogs.length > 0 ? blogs : fallbackBlogPosts;

  if (loading) {
    return (
      <section id="margin-top">
        <div className="td_height_120 td_height_lg_80" />
        <div className="container text-center">
          <p>Loading blogs...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="margin-top">
        <div className="td_height_120 td_height_lg_80" />
        <div className="container text-center">
          <p className="text-danger">Loading... {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="margin-top">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row">
          {/* Sidebar */}
           <div className="col-lg-4">
                     <BlogSidebar />
                   </div>
          {/* Blog Cards */}
          <div className="col-lg-8">
            <div className="row">
              {displayBlogs.map((blog, index) => {
                const blogDate = blog.LastDate
                  ? new Date(blog.LastDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                  : blog.date || "No date";
                const blogImage = Array.isArray(blog.images) && blog.images.length > 0
                  ? blog.images[0]
                  : blog.image || post1;

                return (
                  <div className="col-md-6 mb-4" key={blog._id || index}>
                    <BlogItem
                      image={blogImage}
                      date={blogDate}
                      author={blog.author || "Unknown Author"}
                      title={blog.title || "No Title"}
                      excerpt={blog.excerpt || "No excerpt available"}
                      blogId={blog._id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="td_height_60 td_height_lg_40" />

        {/* Pagination */}
        <BlogPagination />
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
