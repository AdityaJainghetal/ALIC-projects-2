import React, { useState } from "react";
import { Nav, Offcanvas, Button } from "react-bootstrap";

const SidebarContent = ({ activeTab, setActiveTab }) => {
  return (
    <div className="p-3">
      <h5 className="fw-bold mb-3 border-bottom pb-2">Courses</h5>
      <Nav className="flex-column gap-2 mb-4">
        <Nav.Link
          onClick={() => setActiveTab('foundation')}
          className={`fw-medium ${activeTab === 'foundation' ? 'text-danger' : ''}`}
        >
           Live Courses
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveTab('target')}
          className={`fw-medium ${activeTab === 'target' ? 'text-danger' : ''}`}
        >
          Recorded Courses
        </Nav.Link>
      </Nav>

      <h5 className="fw-bold mb-3 border-bottom pb-2">Test Series</h5>
      <Nav className="flex-column gap-2">
        <Nav.Link
          onClick={() => setActiveTab('prelims')}
          className={`fw-medium ${activeTab === 'prelims' ? 'text-danger' : ''}`}
        >
          Prelims Test Series
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveTab('mains')}
          className={`fw-medium ${activeTab === 'mains' ? 'text-danger' : ''}`}
        >
          Mains Test Series
        </Nav.Link>
      </Nav>
    </div>
  );
};

const MpSidebar = ({ activeTab, setActiveTab }) => {
  const [show, setShow] = useState(false);
  const toggleSidebar = () => setShow(!show);

  return (
    <>
      {/* Toggle button - visible only on mobile */}
      <div className="d-md-none text-end p-2">
        <Button variant="dark" onClick={toggleSidebar}>
          ☰ Courses & Test Series
        </Button>
      </div>

      {/* Offcanvas - Mobile */}
      <Offcanvas
        show={show}
        onHide={toggleSidebar}
        placement="start"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Courses & Test Series</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Static Sidebar - Desktop Only */}
      <div className="d-none d-md-block bg-light sidebar-desktop">
        <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
};

export default MpSidebar;