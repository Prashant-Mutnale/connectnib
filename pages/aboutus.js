import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import { Button } from 'react-bootstrap';
import css from "../styles.css"

class AboutUs extends Component {
  render() {
    return (
      <Layout>
        <div>
          <div className={css.aboutbanner}>
            <h1>Welcome to Connectnib</h1>
          </div>
          <div className={css.categoriesListHead}>
            <h2>
              About us
              </h2>
              <div className={css.blogContainer}>
                  <div className="container">
                      <div className="row">

                      </div>
                  </div>
              </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutUs
