import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
// import Nav from '../components/nav'
import Layout from '../../../components/Layout'
import { Button } from 'react-bootstrap';
import css from "../../../styles.css"
import { withRouter } from 'next/router'
import Router from 'next/router'

class CategoriesDetails extends Component {
  // componentDidMount(){
  //   console.log("pathname",this.props.router.asPath)
  //   console.log(this.props.router.asPath.split('/'))
  //   let m = this.props.router.asPath.split('/')
  //   console.log(m[2])
  // }
  static async getInitialProps({query }) {
    // const res = await fetch('https://api.myjson.com/bins/yp9yb')
    // const data = await res.json()
    console.log("query",query)
    return {
      querydata: query.id
    }
    // return { productsList: data.google_search_list }
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>{this.props.querydata}</title>
        </Head>
        <div className={css.topMargin}>

        </div>
          {this.props.querydata}
      </Layout>
    );
  }
}

export default withRouter (CategoriesDetails)
