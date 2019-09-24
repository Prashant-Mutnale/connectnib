import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import { Button } from 'react-bootstrap';
import css from "../styles.css"
import { PushSpinner } from "react-spinners-kit";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }
  render() {
    return (
      <Layout>

        <div>
          <div className={css.aboutbanner}>
            <h1>Welcome to Connectnib</h1>
          </div>
          <div className={css.aboutListHead}>
            <h2>
              Who we are
              </h2>
            <div className={css.aboutHead}>
              <div className="container">
                <PushSpinner
                  size={30}
                  color="#686769"
                  loading={this.state.loading}
                />
                <h3>Finding a permanent solution is our ultimate goal!</h3>
                <p>Connectnib, a platform for SaaS Software collection which provides custom built e-commerce solutions and personalized digital experiences</p>
              </div>
            </div>
            <div className={css.countHolder}>
              <div className="container">
                <ul>
                  <li>
                    <h3>150</h3>
                    <p>Products</p>
                  </li>
                  <li>
                    <h3>15</h3>
                    <p>Years of Experience</p>
                  </li>
                  <li>
                    <h3>250</h3>
                    <p>Completed Projects</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={css.contactusHolder}>
              <div className="container">
                <h4>CALL US</h4>
                <p>Have questions or want to get <br /> in contact with sales?</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutUs
