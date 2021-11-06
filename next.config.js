module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/protected',
                permanent: true,
            },
        ]
    },
}