import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";


// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
// markup
const IndexPage = () => {
 
  return (
    <main style={pageStyles}>
      <h1> Welcome to my Gatsby site! </h1>
      <Layout pageTitle="Home Page">
        <p> I 'm making this by following the Gatsby Tutorial.</p>{" "}
      </Layout>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/download.jpg"
      />
    </main>
  );
};

export default IndexPage;
