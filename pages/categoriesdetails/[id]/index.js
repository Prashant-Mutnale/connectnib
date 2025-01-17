import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
// import Nav from '../components/nav'
import Layout from '../../../components/Layout'
import { Button } from 'react-bootstrap';
import css from "../../../styles.css"
import { withRouter } from 'next/router'

class CategoriesDetails extends Component {
  componentDidMount(){
    console.log("pathname",this.props.router.asPath)
    console.log(this.props.router.asPath.split('/'))
    let m = this.props.router.asPath.split('/')
    console.log(m[2])
  }
  render() {
    return (
      <Layout>
        <div>
          <div className={css.categoriesbanner}>
            <h1>Categories details</h1>
          </div>
          <div className={css.categoriesListHead}>
            <h2>
              Categories
              </h2>
          </div>
          <div className="container">
            <div className={css.categoriesList}>
              <ul>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
                <li>
                  <div className={css.categoriesCards}>
                    <h3>Getting Started</h3>
                    <p>Answers & Artivles related to getting started</p>
                    <a>View</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter (CategoriesDetails)
