# cypress-ui-inspect

## 代码参考
图片对比插件 https://github.com/jaredpalmer/cypress-image-snapshot
通过customer Command：

``` javascript 
//示例代码
cy.get('.todoapp').toMatchImageSnapshot({
    imageConfig: {
      threshold: 0.001,
    },
  })
```

设计比较好的插件 https://github.com/Lakitna/cypress-commands
其中有插件添加 customer command的实现与相关的测试用例

附加参考示例：https://github.com/cypress-io/cypress-xpath

Cypress的自定义command的定义方法 https://docs.cypress.io/api/cypress-api/custom-commands#Syntax

Cypress的插件编写指南 https://docs.cypress.io/guides/tooling/plugins-guide


## plugin 实现思路
同步方法：直接在customer command中同步调用uiinspect。
考虑对比失败的时候通过should 让用例失败。

customer command中的options中可以放图片识别的参数，让用户手动指定对比的阈值。


## 使用方法
1. 安装plugin对应的npm
2. 在cypress/support/index.js中添加对应的包信息
```
require('cypress-ui-inspect');
```




