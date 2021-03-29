import React from 'react';
import {graphql} from 'gatsby';
import Stylesheet from "../styles/benchmark.scss";

export const query = graphql`
query ($slug: String) {
    npsBenchmarkDataXlsxSheet1(Company_Name: {eq: $slug}) {
      About
      Business_Type
      Company_Name
      Focus_keyword
      Employee_Size_
      Founded__Age_of_Co__
      Headquater
      Industry
      Meta_Description
      Meta_Title
      Meta_keywords
      Meta_keywords_to_be_updated
      NPS
      Source
      Type
      website
      id
      _xEMPTY
    }
  }
`

const Benchmark = ({data}) => {
    const datas = data.npsBenchmarkDataXlsxSheet1;
    return(
        <>
          <h1>{datas.Company_Name}</h1>
          <p>{datas.About}</p>
          <p>Business Type : {datas.Business_Type}</p>
          <p>Focus Keyword : {datas.Focus_keyword}</p>
          <p>Employee Size : {datas.Employee_Size_}</p>
          <p>Founded Age : {datas.Founded__Age_of_Co__}</p>
          <p>Headquarters : {datas.Headquater}</p>
          <p>Industry : {datas.Industry}</p>
          <p>Meta Description : {datas.Meta_Description}</p>
          <p>Meta Title : {datas.Meta_Title}</p>
          {datas.NPS &&<p>NPS : {datas.NPS}</p>}
          <p>Type : {datas.Type}</p>
          <p>Website : <a href={datas.website}>{datas.website}</a></p>
        </>
    )
}

export default Benchmark;