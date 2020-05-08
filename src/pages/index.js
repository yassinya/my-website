import React from 'react'

import Layout from '../components/layout'
import { FaTwitter, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import Competence from '../components/competence';

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
        <div className="job">
          <span>Full Stack Web Developer</span>
        </div>
        <a  href={this.state.showEmail ? "mailto:"+this.state.email : null} className={this.state.showEmail ? 'contact-btn show-email' : 'contact-btn'} onClick={this.showEmailAddress}>{this.state.showEmail ? this.state.email : 'Get in touch'}</a>
        <div className="links">
          <a href="https://en.wikipedia.org/wiki/Djibouti" target="_blank" title="Get to know my small country!"><FaMapMarkerAlt className="icon"/> Djibouti</a>
          <a href="https://twitter.com/yassin_dev" target="_blank"><FaTwitter className="icon"/> @yassin_dev</a>
          <a href="https://github.com/yassinya" target="_blank"><FaGithub className="icon"/> yassinya</a>
        </div>
      </div>
      <Competence competenceName="PHP" interval="4900"/>
      <Competence competenceName="Laravel" interval="6100"/>
      <Competence competenceName="CSS" interval="5000"/>
      <Competence competenceName="HTML" interval="5600"/>
      <Competence competenceName="Javascript" interval="6800"/>
      <Competence competenceName="React" interval="4800"/>
      <Competence competenceName="Linux" interval="9000"/>
      <Competence competenceName="SQL" interval="7200"/>
      <Competence competenceName="GIT" interval="6200"/>
      <Competence competenceName="Nginx" interval="5000"/>
    </Layout>
  )}

  showEmailAddress = () => {
    this.setState({
      contactBtnLabel: this.state.email,
      showEmail: !this.state.showEmail
    })
  }

}

 