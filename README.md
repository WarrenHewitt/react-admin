# 学习使用ant design pro

[文档地址 https://pro.ant.design/index-cn](https://pro.ant.design/index-cn)

- 修改端口号h和关闭自动打开浏览器：
    - 修改package.json的"start": "cross-env port=5656 browser=none APP_TYPE=site umi dev"中，注意不要放到最后
    - 修改node_modules/af-webpack/lib/dev.js中的如下代码
```js
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 5656; // 修改默认值
(0, _openBrowser.default)(urls.localUrlForBrowser); // 注释该行
```

- 如果是用create-react-app创建的项目：修改node_modules/react-scripts/scripts/start.js文件中的
```js
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000; // 修改默认值
openBrowser(urls.localUrlForBrowser); //注释该行
```