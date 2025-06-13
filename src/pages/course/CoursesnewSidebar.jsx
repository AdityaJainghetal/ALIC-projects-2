import React from "react";
import { Nav } from "react-bootstrap";

const SidebarContent = ({ activeTab, setActiveTab }) => (
  <div className="p-3">
    <h5 className="fw-bold mb-3 border-bottom pb-2">Filters</h5>
    <div className="mb-4">
      <label className="form-label fw-semibold">Course Type</label>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="foundation" />
        <label className="form-check-label" htmlFor="foundation">
          Foundation Course
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="advance" />
        <label className="form-check-label" htmlFor="advance">
          Foundation Advance
        </label>
      </div>
    </div>

    <h5 className="fw-bold mb-3 border-bottom pb-2">Courses</h5>
    <Nav className="flex-column gap-2">
      <Nav.Link
        onClick={() => setActiveTab("foundation")}
        className={`fw-medium ${activeTab === "foundation" ? "text-primary fw-bold" : ""}`}
      >
        Live Courses
      </Nav.Link>
      <Nav.Link
        onClick={() => setActiveTab("target")}
        className={`fw-medium ${activeTab === "target" ? "text-primary fw-bold" : ""}`}
      >
        Recorded Courses
      </Nav.Link>
      <Nav.Link
        onClick={() => setActiveTab("prelims")}
        className={`fw-medium ${activeTab === "prelims" ? "text-primary fw-bold" : ""}`}
      >
      Test Series
      </Nav.Link>
      {/* <Nav.Link
        onClick={() => setActiveTab("mains")}
        className={`fw-medium ${activeTab === "mains" ? "text-primary fw-bold" : ""}`}
      >
        Mains Test Series
      </Nav.Link> */}
    </Nav>
  </div>
);

export default SidebarContent;
