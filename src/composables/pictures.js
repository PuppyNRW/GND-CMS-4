import { strapi } from './http.common'

const getParties = async () => {
    const query = `query Party {
    parties {
        Date
        PhotosCount
        Creator
        Title
        documentId
    }
}
`

    const res = await strapi.post('/graphql', {
        query,
    })
    // console.log(`res: ${JSON.stringify(res.data.data.parties)}`)
    return res.data.data.parties
}

const getPictures = async (id, start, limit) => {
    const query = `
    query Party($id: ID!, $start: Int!, $limit: Int!) {
        party(documentId: $id) {
            documentId
            Title
            Creator
            Date
            PhotosCount
            Photos(pagination: { start: $start, limit: $limit }) {
                documentId
                url
                formats
            }
        }
    }`

    const variables = { id, start, limit }

    try {
        const res = await strapi.post('/graphql', {
            query,
            variables,
        })

        if (res.data.errors) {
            console.error('GraphQL Errors:', res.data.errors)
            throw new Error('GraphQL query failed')
        }

        return res.data.data.party
    } catch (error) {
        console.error('Error fetching pictures:', error)
        throw error
    }
}

export { getParties, getPictures }
