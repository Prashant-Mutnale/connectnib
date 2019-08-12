import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import { Button } from 'react-bootstrap';
import css from "../styles.css"
import { useRouter } from 'next/router'

class Categories extends Component {
    componentDidMount(){
        console.log(location)
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

export default Categories
