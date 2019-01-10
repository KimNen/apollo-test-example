import gql from "graphql-tag";

export const getReview = () => { 
    return gql`
        query{
            reviews(episode:EMPIRE){
                episode
                commentary
            }
        }
    `
}