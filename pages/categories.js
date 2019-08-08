import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import { Button } from 'react-bootstrap';
import css from "../styles.css"

class Categories extends Component {
  render() {
    return (
      <Layout>
        <div>
          <div className={css.categoriesbanner}>
            <h1>Check why the best <br />
              companies invested in us</h1>
          </div>
          <div className={css.aboutus}>
            <h2>
              Categories
              </h2>
          </div>
          <div className={css.categoriesList}></div>
        </div>
      </Layout>
    );
  }
}

export default Categories
