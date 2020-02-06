const Company = require('./models/company.model.js');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

//CompanyType
const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: { type: GraphQLID },
        company_title: { type: GraphQLString }
    })
});

//Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        companies: {
            type: new GraphQLList(CompanyType),
            resolve(parent, args) {
            return Company.find({});
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return_.find(companies, {id: args.id})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCompany: {
            type: CompanyType,
            args: {
                company_title: { type: GraphQLString }
            },
            resolve(parent, args){
                let company = new Company ({
                    company_title: args.company_title
                });
                return company.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
