import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'e8vemzil',
    dataset: 'production',
    useCdn: true
})