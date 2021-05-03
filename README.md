# cypress-ui-inspect

## 代码参考
图片对比插件 https://github.com/jaredpalmer/cypress-image-snapshot
通过附加Command：

``` javascript 
//示例代码
cy.get('.todoapp').toMatchImageSnapshot({
    imageConfig: {
      threshold: 0.001,
    },
  })
```

设计比较好的插件 https://github.com/Lakitna/cypress-commands
其中有插件附加command的实现与相关的测试用例

附加参考示例：https://github.com/cypress-io/cypress-xpath

Cypress的自定义command的定义方法 https://docs.cypress.io/api/cypress-api/custom-commands#Syntax

Cypress的插件编写指南 https://docs.cypress.io/guides/tooling/plugins-guide


## 使用方法
1. 安装plugin对应的npm
2. 在cypress/support/index.js中添加对应的包信息




