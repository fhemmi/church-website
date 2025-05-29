// import React from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';

// import { Link } from 'react-router-dom';
// import HeroSection from '../components/Herosection';

// const Home = () => {
//   return (
//     <>
//       <HeroSection />
//       <section className="bg-light text-center py-5">
//         <Container>
//           <h1 className="display-4 fw-bold">Welcome to Faith Church</h1>
//           <p className="lead">A place to experience the love of Christ and grow in faith.</p>
//           <Button as={Link} to="/about" variant="primary" size="lg">
//             Learn More About Us
//           </Button>
//         </Container>
//       </section>

//       {/* Info Cards */}
//       <section className="py-5">
//         <Container>
//           <Row className="text-center g-4">
//             <Col md={4}>
//               <Card className="h-100 shadow-sm">
//                 <Card.Body>
//                   <i className="bi bi-clock display-4 text-primary mb-3"></i>
//                   <h5>Sunday Service</h5>
//                   <p>Join us every Sunday at 10:00 AM</p>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="h-100 shadow-sm">
//                 <Card.Body>
//                   <i className="bi bi-geo-alt display-4 text-danger mb-3"></i>
//                   <h5>Location</h5>
//                   <p>123 Faith Street, Lagos, Nigeria</p>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="h-100 shadow-sm">
//                 <Card.Body>
//                   <i className="bi bi-chat-dots display-4 text-success mb-3"></i>
//                   <h5>Message of Hope</h5>
//                   <p>God has a plan for you. Walk in His light.</p>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Featured Sermon */}
//       <section className="bg-primary text-white py-5">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={8}>
//               <h2 className="mb-3">Latest Sermon: “Faith Over Fear”</h2>
//               <p>Listen to this week's uplifting message by Pastor John — a reminder to trust in God's promises in uncertain times.</p>
//             </Col>
//             <Col md={4} className="text-md-end">
//               <Button as={Link} to="/sermons" variant="light" size="lg">
//                 Watch Sermons
//               </Button>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* CTA */}
//       <section className="text-center py-5 bg-light">
//         <Container>
//           <h3 className="fw-bold">Join Our Family</h3>
//           <p>We’d love to welcome you this Sunday. Let us walk with you in your faith journey.</p>
//           <Button as={Link} to="/contact" variant="success">
//             Get in Touch
//           </Button>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Home;


import React from 'react';
import HeroSection from '../components/Herosection';
import MissionSection from '../components/Missionsection';
import FeatureCards from '../components/Featurecards';
import './Home.css';
import '../components/Herosection.css'

const Home = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <FeatureCards />
    </>
  );
};

export default Home;
