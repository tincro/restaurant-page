const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify")
        }
    },
};