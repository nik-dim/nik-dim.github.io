// import React from 'react';
// import PropTypes from 'prop-types';
// import { Heading, Image, Text, Flex, Box } from 'rebass';
// import { StaticQuery, graphql } from 'gatsby';
// import styled from 'styled-components';
// import Fade from 'react-reveal/Fade';
// import Section from '../components/Section';
// import { CardContainer, Card } from '../components/Card';
// import SocialLink from '../components/SocialLink';
// import Triangle from '../components/Triangle';
// import ImageSubtitle from '../components/ImageSubtitle';
// import Hide from '../components/Hide';

// const Background = () => (
//   <div>
//     <Triangle
//       color="secondaryLight"
//       height={['80vh', '80vh']}
//       width={['100vw', '100vw']}
//       invertX
//     />

//     <Triangle
//       color="background"
//       height={['50vh', '20vh']}
//       width={['50vw', '50vw']}
//       invertX
//     />

//     <Triangle
//       color="primaryDark"
//       height={['25vh', '40vh']}
//       width={['75vw', '60vw']}
//       invertX
//       invertY
//     />

//     <Triangle
//       color="backgroundDark"
//       height={['25vh', '20vh']}
//       width={['100vw', '100vw']}
//       invertY
//     />
//   </div>
// );

// const CARD_HEIGHT = '200px';

// const MEDIA_QUERY_SMALL = '@media (max-width: 200px)';

// const Title = styled(Text)`
//   font-size: 14px;
//   font-weight: 600;
//   text-transform: uppercase;
//   display: table;
//   border-bottom: ${props => props.theme.colors.primary} 5px solid;
// `;

// const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   width: 100%;
//   width: calc(100% - ${CARD_HEIGHT});

//   ${MEDIA_QUERY_SMALL} {
//     width: calc(100% - (${CARD_HEIGHT} / 2));
//   }
// `;

// const ImageContainer = styled.div`
//   margin: auto;
//   width: ${CARD_HEIGHT};

//   ${MEDIA_QUERY_SMALL} {
//     width: calc(${CARD_HEIGHT} * 2);
//   }
// `;

// const ProjectImage = styled(Image)`
//   width: ${CARD_HEIGHT};
//   height: ${CARD_HEIGHT};
//   padding: 40px;
//   margin-top: 0px;

//   ${MEDIA_QUERY_SMALL} {
//     height: calc(${CARD_HEIGHT} / 2);
//     width: calc(${CARD_HEIGHT} / 2);
//     margin-top: calc(${CARD_HEIGHT} / 4);
//     padding: 10px;
//   }
// `;

// const ProjectTag = styled.div`
//   position: relative;
//   height: ${CARD_HEIGHT};
//   top: calc(
//     -${CARD_HEIGHT} - 3.5px
//   ); /*don't know why I have to add 3.5px here ... */

//   ${MEDIA_QUERY_SMALL} {
//     top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
//   }
// `;

// const CoverImage = styled.img`
//   width: 100%;
//   object-fit: cover;
// `;

// const EllipsisHeading = styled(Text)`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-inline-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   border-bottom: ${props => props.theme.colors.primary} 5px solid;
// `;
// const Post = ({ title, text, image, url, date, time }) => (
//   <Card onClick={() => window.open(url, '_blank')} pb={4}>
//     <EllipsisHeading m={3} p={1}>
//       {title}
//     </EllipsisHeading>
//     {image && <CoverImage src={image} height="200px" alt={title} />}
//     <Text m={3}>{text}</Text>
//     <ImageSubtitle bg="white" color="black" x="right" y="bottom" >
//       {`${date}`}
//     </ImageSubtitle>
//   </Card>
// );

// const Education = ({
//   name,
//   description,
//   projectUrl,
//   repositoryUrl,
//   type,
//   publishedDate,
//   logo,
// }) => (
//     <Card onClick={() => window.open(url, '_blank')} pb={4} className='intro section-border'>
//       {/* <EllipsisHeading m={3} p={1}>
//         {name}
//       </EllipsisHeading> */}
//       {logo && <CoverImage src={logo.image.src} height="200px" alt={name} />}
//       <EllipsisHeading m={3} p={1}>
//         {name}
//       </EllipsisHeading>
//       <Text m={3}>{description}</Text>
//       <ImageSubtitle bg="white" color="black" x="right" y="bottom">
//         {`${publishedDate}`}
//       </ImageSubtitle>
//     </Card>
//   );

// Education.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   // projectUrl: PropTypes.string,
//   repositoryUrl: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   publishedDate: PropTypes.string.isRequired,
//   logo: PropTypes.shape({
//     image: PropTypes.shape({
//       src: PropTypes.string,
//     }),
//     title: PropTypes.string,
//   }).isRequired,
// };

// const Educations = () => (
//   <Section.Container id="education" >
//     <Section.Header name="Projects" icon="💻" label="notebook" />
//     <StaticQuery
//       query={graphql`
//         query EducationsQuery {
//           contentfulAbout {
//             educations {
//               id
//               name
//               description
//               projectUrl
//               repositoryUrl
//               publishedDate(formatString: "YYYY")
//               type
//               logo {
//                 title
//                 image: resize(width: 400, quality: 100) {
//                   src
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={({ contentfulAbout }) => (
//         <CardContainer minWidth="250px">
//           {/* { console.log(contentfulAbout.educations)} */}
//           {contentfulAbout.educations.map((p, i) => (
//             <Fade bottom delay={i * 200} key={p.id}>
//               <Education {...p} />
//             </Fade>
//           ))}

//         </CardContainer>
//       )}
//     />
//   </Section.Container>
// );

// export default Educations;
