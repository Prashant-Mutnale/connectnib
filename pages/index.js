import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import { Button } from 'react-bootstrap';
import css from "../styles.css"

class Home extends Component {
  static async getInitialProps({ }) {
    const res = await fetch('https://api.myjson.com/bins/yp9yb')
    const data = await res.json()
    return { productsList: data.google_search_list }
  }
  render() {
    console.log(this.props.productsList)
    return (
      <Layout>
        <div>
          <div className={css.banner}>
            <h1>Check why the best <br />
              companies invested in us</h1>
          </div>
          <div className={css.aboutus}>
            <h2>
              About us
              </h2>
            <p>Collection of different software categories based on <br />different businesses to improve the customer experience and management.</p>
          </div>
          <div className={css.homeCategories}>
            <div className="container">
              <h2>Categories</h2>
              <p>
                Acquire’s simple, yet powerful tools encourage customer engagement
and success across the board</p>
              <ul>
                {
                  Object.values(this.props.productsList).map((items) => {
                    console.log("items", items)
                    return (
                      <li>
                        <Link
                          href="/categories">
                          <div className={css.homeCategoriesCards}>
                            <div className={css.homeCategoriesLogo}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="45" viewBox="0 0 65 45">
                                <g fill="none" fill-rule="evenodd">
                                  <path fill="#0265FF" fill-rule="nonzero" d="M64.304 4H49.696c-.385 0-.696.264-.696.59v8.865c0 .326.311.59.696.59h2.782v2.66c0 .11.073.212.189.263a.401.401 0 0 0 .361-.023l4.779-2.9h6.497c.385 0 .696-.264.696-.59V4.59c0-.327-.311-.591-.696-.591z" />
                                  <path fill="#FFF" fill-rule="nonzero" stroke="#0265FF" stroke-width="1.5" d="M3.75.75h12.5v8.545h-3.043v2.55l-3.679-2.55H3.75V.75zm10.149 11.576a.41.41 0 0 1 .004.002l-.004-.002z" />
                                  <g transform="translate(1)">
                                    <rect width="49.5" height="28.875" x="2.75" y="15.125" stroke="#0265FF" stroke-width="1.5" rx="14.438" transform="matrix(-1 0 0 1 55 0)" />
                                    <path fill="#0265FF" d="M23.267 11.342a.644.644 0 0 1 .518-.342h7.352a.623.623 0 0 1 .498.312l1.106 1.616c.525.763.197 2.197-.498 2.197h-9.487c-.683 0-1.014-1.389-.518-2.168l1.03-1.615z" />
                                    <rect width="2.75" height="9.625" x="26.125" y="4.125" fill="#0265FF" rx="1" />
                                    <g fill="#FFF" stroke="#0265FF" stroke-width="1.5" transform="translate(0 23.375)">
                                      <rect width="6.875" height="13.75" rx="3.438" transform="matrix(-1 0 0 1 6.875 0)" />
                                      <rect width="6.875" height="13.75" x="48.125" rx="3.438" transform="matrix(-1 0 0 1 103.125 0)" />
                                    </g>
                                    <g fill="#0265FF">
                                      <path d="M35.75 27.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z" />
                                      <path fill-rule="nonzero" d="M19.25 27.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z" />
                                      <path d="M23.375 33h8.25a4.124 4.124 0 1 1-8.25 0z" />
                                    </g>
                                    <circle cx="27.5" cy="1.375" r="1.375" fill="#0265FF" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <h3>{items}</h3>
                            <p>View the conversations your Bot is having with customers</p>
                            <Link href="/categories"><a className={css.visitlink}>Visit</a></Link>
                          </div>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
              <div className={css.viewMoreButton}>
                <Button variant="success" className={css.btnsuccess}>View More</Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home
