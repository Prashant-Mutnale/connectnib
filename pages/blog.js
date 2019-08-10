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
          <div className={css.blogbanner}>
            <h1>Check why the best <br />
              companies invested in us</h1>
          </div>
          <div className={css.categoriesListHead}>
            <h2>
              Blog
              </h2>
              <div className={css.blogContainer}>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-4">
                                <div className={css.blogCard}>
                                    <div className={css.blogImage}>
                                        <img src={'/static/images/blogcard.jpg'}/>
                                    </div>
                                    <div className={css.blogContent}>
                                        <h3>Oracle</h3>
                                        <p>Product Updates: 8 New Features to Help You Convert Visitors into Paying Customers</p>
                                        <a>Read More</a>
                                    </div>
                                </div>
                          </div>
                          <div className="col-lg-4">
                                <div className={css.blogCard}>
                                    <div className={css.blogImage}>
                                        <img src={'/static/images/blogcard.jpg'}/>
                                    </div>
                                    <div className={css.blogContent}>
                                        <h3>Oracle</h3>
                                        <p>Product Updates: 8 New Features to Help You Convert Visitors into Paying Customers</p>
                                        <a>Read More</a>
                                    </div>
                                </div>
                          </div>
                          <div className="col-lg-4">
                                <div className={css.blogCard}>
                                    <div className={css.blogImage}>
                                        <img src={'/static/images/blogcard.jpg'}/>
                                    </div>
                                    <div className={css.blogContent}>
                                        <h3>Oracle</h3>
                                        <p>Product Updates: 8 New Features to Help You Convert Visitors into Paying Customers</p>
                                        <a>Read More</a>
                                    </div>
                                </div>
                          </div>
                          <div className="col-lg-4">
                                <div className={css.blogCard}>
                                    <div className={css.blogImage}>
                                        <img src={'/static/images/blogcard.jpg'}/>
                                    </div>
                                    <div className={css.blogContent}>
                                        <h3>Oracle</h3>
                                        <p>Product Updates: 8 New Features to Help You Convert Visitors into Paying Customers</p>
                                        <a>Read More</a>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Categories
