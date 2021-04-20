// import React, { useContext, useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
// import { Container, Row, Col } from 'react-bootstrap';
// // import Title from '../Title/Title';
// // import AboutImg from '../Image/AboutImg';
// import PortfolioContext from '../../context/context';

// const About = () => {
//   const { about } = useContext(PortfolioContext);
//   const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

//   const [isDesktop, setIsDesktop] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth > 769) {
//       setIsDesktop(true);
//       setIsMobile(false);
//     } else {
//       setIsMobile(true);
//       setIsDesktop(false);
//     }
//   }, []);

//   return (
//     <section id="about">
//       <Container>
//         <Title title="About Me" />
//         <Row className="about-wrapper">
//           <Col md={6} sm={12}>
//             <Fade bottom duration={1000} delay={600} distance="30px">
//               <div className="about-wrapper__image">
//                 <AboutImg alt="profile picture" filename={img} />
//               </div>
//             </Fade>
//           </Col>
//           <Col md={6} sm={12}>
//             <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
//               <div className="about-wrapper__info">
//                 <p className="about-wrapper__info-text">
//                   {paragraphOne ||
//                     'I\'m a success driven Junior Software Engineer with that known for being an autodidact(Self Taught). These reasons are why I thrive in software development. '}
//                 </p>
//                 <p className="about-wrapper__info-text">
//                   {paragraphTwo ||
//                     'Colleagues and stakeholders I\'ve collaborated with highlight my ambitious, patient, problem-solving nature. This along with my growth-adaptive mindset for a technology-driven field.'}
//                 </p>
//                 <p className="about-wrapper__info-text">
//                   {paragraphThree || 'Would love to speak further, feel free to contact me for your projects/goals.'}
//                 </p>
//                 {resume && (
//                   <span className="d-flex mt-3">
//                     <a
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="cta-btn cta-btn--resume"
//                       href={resume}
//                     >
//                       Resume
//                     </a>
//                   </span>
//                 )}
//               </div>
//             </Fade>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default About;
