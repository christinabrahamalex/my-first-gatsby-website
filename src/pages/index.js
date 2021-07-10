import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

const indexPage = () => {
  return(
    <Layout pageTitle="Home page">
      <p>Will be a great gatsby</p>
      <StaticImage src="https://i.pinimg.com/originals/55/6d/99/556d99dec040634f46a27f25159da3a8.jpg"/>
      <StaticImage src="../images/eyepops.jpg"/>
    </Layout>
  )
};

export default indexPage
