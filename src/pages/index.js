import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import Stylesheet from "../styles/index.scss";

const Home = () => {

  const data = useStaticQuery(graphql`
  query {
    allNpsBenchmarkDataXlsxSheet1 {
      edges {
        node {
          id
          About
          Business_Type
          Company_Name
          Employee_Size_
          Focus_keyword
          Founded__Age_of_Co__
          Headquater
          Industry
          Meta_Description
          Meta_Title
          Meta_keywords
          Meta_keywords_to_be_updated
          NPS
          Source
          website
          Type
        }
      }
    }
  }


  `)

  const edges = data.allNpsBenchmarkDataXlsxSheet1.edges;

  return(
    <>
    <ol>
    {edges.map((edge, index) => {
        const slug = edge.node.Company_Name.replace(/\s+/g, '-').toLowerCase();
      return(
      <li key={index.toString()}>
              <Link to={'/nps/'+slug}>
        <h2>{edge.node.Company_Name}</h2>
        <p>Type: {edge.node.Type}</p>
        <p>Size: {edge.node.Employee_Size_}</p>
        </Link>
      </li>
      )
    })}
    </ol>
    </>
  );
}

export default Home;