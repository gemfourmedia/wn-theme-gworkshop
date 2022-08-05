module.exports = {
    content: [
        './theme.yaml',
        './**/*.htm',
        './assets/src/js/**/*.{js,vue}'
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
            },
            fontFamily: {
                heading: ["'Lexend'", 'sans-serif'],
                body: ["'Lexend'", 'sans-serif'],
            },
        },
    },
    plugins: [
    ],
}
