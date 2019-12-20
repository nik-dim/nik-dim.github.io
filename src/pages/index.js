import React, { Component } from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Education from '../sections/Education';
import Writing from '../sections/Writing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../stylesheets/screen.scss'
// import '../stylesheets/_layout.scss'
import ParticlesBg from 'particles-bg'


const IndexPage = () => (
  <Layout>
    <div // className={classNames('outer-wrapper', 'home-wrapper')} 
    >
      {/* <Helmet title={title} meta={meta} script={script}></Helmet> */}
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,500"
        rel="stylesheet"
      />
      <Header />
      <About />
      {/* <Landing /> */}
      <Education />
      <Projects />

      {/* <Writing /> */}
      <Footer />
    </div>
    {/* <ParticlesBg color="#888888" num={250} type="cobweb" bg={true} /> */}
  </Layout>
);

export default IndexPage;
