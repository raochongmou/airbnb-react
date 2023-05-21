const { resolve } = require("path");
const resolves = curname => resolve(__dirname, curname);
const CracoLessPlugin = require("craco-less");

module.exports = {
  // less插件
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  // 别名配置
  webpack: {
    alias: {
      "@": resolves("src"),
      components: resolve("src/components")
    }
  },
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc"
    }
  }
};
