# 利用 npx create-react-app my-app 

- `npm start`

- `npm test`

- `npm run build`

- `npm run eject` 单向操作，拿回 webpack 等的配置（操作前先 commit）

## 脚手架以外手动安装的包

- `react-router-dom`

- `node-sass` 使用 sass scss

- `antd` 后安装，因为可能和前面的 node-sass 版本冲突 

- `html2canvas` 

- `jspdf`

- `xlsx`

- 如果出现了 `You are using a whole package of antd` 请安装 `babel-plugin-import`； 本项目是执行了 eject 操作，否则安装了该插件也会失效

- `Redux Toolkit`

# 项目/文件说明

目录
```
|- old  (原有代码,待迁移)
|- src
    |- App.js
    |- index.js
    |- pages
        |- home
            |- home.js
        |- practice
            |- hoc  (高阶组件实践)
            |- index.js
            |- react.js
        |- third
            |- sheetJs.js  (导出excel示例)
        |- welcome
            |- welcome.js
    |- serviceWorker.js

|- jsconfig.json vscode 配置js项目
|- push.sh 推送代码
|- .env  create-react-app 一些配置
```
