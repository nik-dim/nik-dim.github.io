import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';
import Logo from './Logo/Portfolio.svg';

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    // background: ${props => props.theme.colors.primaryDark};
    background: grey;
  }
  color: white;
  fontsize: 18px,
  position: absolute;
  width: 100%;
`;

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
          ...acc,
          home: value,
        }
        : {
          ...acc,
          links: [...acc.links, { name: capitalize(key), value }],
        };
    },
    { links: [], home: null },
  );

const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks);

            const homeLink = home && (
              // <Image
              //   src={Logo}
              //   width="50px"
              //   alt="Portfolio Logo"
              //   onClick={home.onClick}
              //   style={{
              //     cursor: 'pointer',
              //   }}
              // />
              <RouteLink
                key={'name'}
                // onClick={value.onClick}
                // selected={value.selected}
                name={'name'}
              />
            );
            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
                name={name}
              />
            ));

            return (
              <Fragment>
                {/* <RouteLink
                  key={'name'}
                  // onClick={value.onClick}
                  // selected={value.selected}
                  name={'Nikos Dimitriadis'}
                /> */}
                {/* <div>{'Nikos Dimitriadis'}</div> */}
                {homeLink}
                <font size="+3">{'Nikos Dimitriadis'}.</font>
                {/* <Flex>{'nikdim'}</Flex> */}
                <Flex mr={[0, 3, 5]}>{navLinks}</Flex>
              </Fragment>
            );
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
);

export default Header;
