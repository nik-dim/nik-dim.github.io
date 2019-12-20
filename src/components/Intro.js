import React from 'react'
import TextBlock from '../components/TextBlock.js'
import Emoji from './Emoji.js'


const Intro = () => (
    <TextBlock>
        <p><strong className="dropcap"><Emoji symbol="👋"/></strong>Hello! I'm Nikolaos Dimitriadis. I go by Nikos.</p>        
        <p>I am a senior undergraduate ECE student @ NTUA. I work on Machine Learning and Tropical Geometry under the supervision of Professor <a href="https://https://robotics.ntua.gr/members/maragos/">Petros Maragos</a>. I am very interested in conducting research in the intersection of ML, Optimization and multi-agent systems. </p>
        <p>I am a classical guitar player!</p>
    </TextBlock>
)

export default Intro