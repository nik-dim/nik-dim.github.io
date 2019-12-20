import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';
import Intro from '../components/Intro';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const BOX_HEIGHT = '300px';
const CARD_HEIGHT = '250px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - 0.4*${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;


const Education = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => (
    <Card p={0} className="intro section-border" >
      <Flex style={{ height: CARD_HEIGHT }}>
        <TextContainer>
          <span>
            <Title my={0} pb={0}>
              {name}
            </Title>
          </span>
          <Text width={[1]} style={{ overflow: 'auto' }}>
            {description}
          </Text>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="white" color="black" y="bottom" x="left">{publishedDate}</ImageSubtitle>
          </Hide>
        </TextContainer>

        <ImageContainer>
          <ProjectImage src={logo.image.src} alt={logo.title} />
          <ProjectTag>
            <Flex
              style={{
                float: 'right',
              }}
            >
              {/* <Box mx={1} fontSize={5}>
                <SocialLink
                  name="Check repository"
                  fontAwesomeIcon="linkedin"
                  url={repositoryUrl}
                />
              </Box> */}
              {/* <Box mx={1} fontSize={5}>
                <SocialLink
                  name="What's that?"
                  fontAwesomeIcon="globe"
                  url={projectUrl}
                />
              </Box> */}
            </Flex>
            <ImageSubtitle bg="background" color="black" y="bottom" x="right">
              {type}
            </ImageSubtitle>
          </ProjectTag>
        </ImageContainer>
      </Flex>
    </Card>
  );


const TimelineElement = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => (
    <VerticalTimelineElement
      // className="vertical-timeline-element--work"
      className="border"
      contentStyle={{ background: 'rgb(0, 0,0)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0,0)' }}
      date={publishedDate}
      iconStyle={{ background: 'gray', color: '#fff' }}
    // icon={<WorkIcon />}
    >
      <h4 className="vertical-timeline-element-title">{name}</h4>
      <h5 className="vertical-timeline-element-subtitle">{type}</h5>
      <p>{description}</p>
    </VerticalTimelineElement>
  );

Education.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // projectUrl: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string,
  type: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Educations = () => (
  <Section.Container id="Education" >
    {/* <Section.Header name="Education" icon="💻" label="notebook" /> */}
    <StaticQuery
      query={graphql`
        query EducationsQuery {
          contentfulAbout {
            educations {
              id
              name
              description
              projectUrl
              repositoryUrl
              publishedDate(formatString: "YYYY")
              type
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        // <CardContainer minWidth="350px">
        //   {/* {console.log(contentfulAbout.projects)} */}
        //   {/* <FontAwesomeIcon name={'linked-in'} /> */}
        //   {contentfulAbout.projects.map((p, i) => (
        //     <Fade bottom delay={i * 200} key={p.id} >
        //       <Education {...p} />
        //     </Fade>
        //   ))}
        // </CardContainer>
        <VerticalTimeline>
          {contentfulAbout.educations.map((p, i) => (
            // <Fade bottom delay={i * 200} key={p.id} >
            <TimelineElement {...p} key={p.id} />
            // </Fade>
          ))}
        </VerticalTimeline>
      )}
    />
  </Section.Container>
);

export default Educations;
