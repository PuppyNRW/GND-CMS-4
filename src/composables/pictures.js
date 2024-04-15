import { strapi } from './http.common'

const getParties = async () => {
    const query = `query parties {
  parties(pagination: { pageSize: 200 }){
    data {
      id
      attributes {
        Title
        Date
        Creator
      }
    }
  }
}`

    const res = await strapi.post('/graphql', {
        query,
    })
    return res.data.data.parties.data
}

const getPictures = async (id, start, limit) => {
    const query = `query Party($partyId: ID!, $start: Int, $limit: Int){
  party(id: $partyId) {
    data{
      id
      attributes{
        Creator
        Date
        PhotosCount
        Photos(pagination:{start: $start, limit: $limit}) {
          data {
            attributes {
              url
              formats
            }
          }
        }
      }
    }
  }
}`
    const res = await strapi.post('/graphql', {
        query,
        variables: {
            partyId: id,
            start,
            limit,
        },
    })
    return res.data.data.party.data
}

export { getParties, getPictures }
