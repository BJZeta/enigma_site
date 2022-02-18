import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'e8vemzil',
    dataset: 'production',
    apiVersion: '2022-02-17',
    useCdn: true
})