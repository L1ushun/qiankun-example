const { name } = require('./package');
const path = require("path")

module.exports = {
    webpack: config => {
        config.output.library = `${name}`;
        config.output.libraryTarget = 'umd';
        config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "src")
        }
        return config;
    },
    devServer: (configFunction) => {
        return (proxy, allowedHost) => {
            const config = configFunction(proxy, allowedHost);
            config.historyApiFallback = true;
            config.open = false;
            config.hot = false;
            config.liveReload = false;
            config.headers = {
                'Access-Control-Allow-Origin': '*',
            };
            return config;
        }
    }
}
