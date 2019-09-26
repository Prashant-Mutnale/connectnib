import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import { Button } from 'react-bootstrap';
import css from "../styles.css"
import Router from 'next/router'

class AboutUs extends Component {
  state = {maindata: ''}
  static async getInitialProps({ query, req }) {
    console.log("query", query)
    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json()
    // return { productsList: data.google_search_list }
    console.log("data",data)
    return {
      employeelist: data.data
    }
  }
  async getemployeById(dataID) {
    fetch('https://reqres.in/api/users/' + dataID)
      .then((res) => {
        res.json().then((data)=>{
          console.log("data",data)
          this.setState({
            maindata: data.data.email
          })
        })
      })
      .then((data) => {
        
      });
  }
  render() {
    console.log("details", this.props.employeeDetails)
    return (
      <Layout>
        <Head>
          <title>{this.props.listId}</title>
        </Head>
        <div>
          <div className={css.aboutbanner}>
            <h1>Welcome to Connectnib</h1>
          </div>
          <div className={css.aboutListHead}>
            <h2>
              Who we are
              <h3>{this.state.maindata}</h3>
              </h2>
            <div className={css.aboutHead}>
              <div className="container">
                <h3>Finding a permanent solution is our ultimate goal!</h3>
                <p>Connectnib, a platform for SaaS Software collection which provides custom built e-commerce solutions and personalized digital experiences</p>
              </div>
            </div>
            <div className={css.countHolder}>
              <div className="container">
                {
                  this.props.employeelist.map((items, i) => {
                    return (
                      <h4 onClick={() => { this.getemployeById(items.id) }}>{items.first_name}</h4>
                    )
                  })
                }
                
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
