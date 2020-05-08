import React from 'react'

import Layout from '../components/layout'
import { FaTwitter, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import Skill from '../components/Skill';

export default class IndexPage extends React.Component  {


    state = {
      email: 'yassinrsc@gmail.com',
      showEmail: false,
    }

  render() {
    return (
    <Layout>
      <div className="content">
        <div className="heading">
          <h1>Hi there, I am Yassin Youssouf</h1>
        </div>
        <div className="hat">
          <span>Back end developer</span>
        </div>
        <a  href={this.state.showEmail ? "mailto:"+this.state.email : null} className={this.state.showEmail ? 'contact-btn show-email' : 'contact-btn'} onClick={this.showEmailAddress}>{this.state.showEmail ? this.state.email : 'Get in touch'}</a>
        <div className="links">
          <a href="https://en.wikipedia.org/wiki/Djibouti" target="_blank" title="Get to know my small country!"><FaMapMarkerAlt className="icon"/> Djibouti</a>
          <a href="https://twitter.com/yassin_dev" target="_blank"><FaTwitter className="icon"/> @yassin_dev</a>
          <a href="https://github.com/yassinya" target="_blank"><FaGithub className="icon"/> yassinya</a>
        </div>
      </div>
      <Skill skillName="PHP" interval="4900"/>
      <Skill skillName="Laravel" interval="6100"/>
      <Skill skillName="CSS" interval="5000"/>
      <Skill skillName="HTML" interval="5600"/>
      <Skill skillName="Javascript" interval="6800"/>
      <Skill skillName="React" interval="4800"/>
      <Skill skillName="Linux" interval="9000"/>
      <Skill skillName="SQL" interval="7200"/>
      <Skill skillName="GIT" interval="6200"/>
      <Skill skillName="Nginx" interval="5000"/>
    </Layout>
  )}

  showEmailAddress = () => {
    this.setState({
      contactBtnLabel: this.state.email,
      showEmail: !this.state.showEmail
    })
  }

}

 