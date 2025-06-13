import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MpSidebar from './MpSidebar';
import FoundationCourses from './FoundationCourse';
import TargetJudiciaryCourse from './TargetJudiciary';
import { Layout } from '../../layouts/Layout';
import PrelimsTestSeries from './PrelimsTestSeries';
import MainsTestSeries from './MainsTestSeries';
import { CoursesAllGrid } from '../../components/courses/CoursesAllGrid';

const CourseLayout = () => {
  const [activeTab, setActiveTab] = useState('foundation');

  const renderContent = () => {
    switch(activeTab) {
      case 'target':
        return <TargetJudiciaryCourse />;
      case 'foundation':
      default:
        return <FoundationCourses />;

         case 'prelims':
        return <PrelimsTestSeries />;
         case 'mains':
        return <MainsTestSeries />;
    }
  };

  return (

        <Layout header={9} footer={1}>
          {/* <div className="td_height_120 td_height_lg_60" /> */}
    <Container fluid>
      <Row>
        <CoursesAllGrid />

           {/* <Col md={12} lg={12} className="p-0">

        </Col> */}

        <Col md={3} lg={2} className="p-0">
          <MpSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </Col>
        <Col md={9} lg={10} className="p-4">



 <h3 className="td_fs_10 mt-4 ms-3">
                Mp Judiciary Examination
              </h3>
          {renderContent()}
        </Col>
      </Row>
    </Container>
    </Layout>
  );
};

export default CourseLayout;