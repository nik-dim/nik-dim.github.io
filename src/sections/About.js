import React from 'react';
import { Box, Image, Flex, Heading } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import Intro from '../components/Intro';
import TextBlock from '../components/TextBlock';
import SocialLink from '../components/SocialLink';
import Emoji from '../components/Emoji';
// import { View } from 'react-native'
// import ParticlesBg from 'particles-bg'
// import Typist from 'react-typist';

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;



const About = () => (
  <Section.Container id="about">
    <Section.Header label="person" />
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={data => {
        const { aboutMe, socialLinks, profile } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap" direction='column'>
            {/* <div id="wrapper"> */}
            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Fade right>
                <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
              <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
                {console.log(socialLinks)}
                {socialLinks.map(({ id, ...rest }) => (
                  <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                    <SocialLink {...rest} />
                  </Box>
                ))}
              </Flex>
            </Box>
            {/* <FontAwesomeIcon */}
            <Box width={[0, 1, 4 / 6]} px={[1, 2, 4]} className="intro section-border">
              {/* <Typist>
                <span> Hello. I am Nikolaos Dimitriadis </span>
                <Typist.Backspace count={26} delay={200} />
                <span> go by Nikos!</span>
              </Typist> */}
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>
            {/* <FontAwesomeIcon name={'linked-in'} /> */}
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;
