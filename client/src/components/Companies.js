import React, { Component, Fragment } from 'react';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import CompanyItem from './CompanyItem';

const COMPANIES_QUERY = gql`
   {
       companies {
           company_title
       }
   }
`
export class Companies extends Component {
    render() {
        return(
            <Query query={COMPANIES_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h4>Loading</h4>;
                        if (error) return console.log(error);
                        
                        console.log(data)
                        return (
                            <Fragment>
                                {
                                    data.companies.map(company => (
                                        <CompanyItem key={company.company_title} company={company} />
                                    ))
                                }
                            </Fragment>
                        )
                        
                    }
                }
            </Query>
        )
    }   
}
   
                
            

export default Companies
