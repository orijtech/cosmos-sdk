(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{819:function(g,C,I){"use strict";I.r(C);var A=I(1),t=Object(A.a)({},(function(){var g=this,C=g.$createElement,I=g._self._c||C;return I("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[I("h1",{attrs:{id:"cosmos-sdk-设计概览"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-sdk-设计概览"}},[g._v("#")]),g._v(" Cosmos SDK 设计概览")]),g._v(" "),I("p",[g._v("Cosmos SDK是一个方便开发者开发基于Tendermint的安全可靠状态机的一套框架。其核心是Golang版的ABCI的实现。它附带一个"),I("code",[g._v("multistore")]),g._v("来持久化存储数据还有一个"),I("code",[g._v("router")]),g._v("来处理交易。")]),g._v(" "),I("p",[g._v("下面一个简单的视图展示了当从Tendermint的"),I("code",[g._v("DeliverTx")]),g._v("请求（"),I("code",[g._v("CheckTx")]),g._v("的处理流程与其相同，除了不会执行状态的改变）中接收到一笔交易时，基于Cosmos SDK构建的应用程序是如何处理交易的：")]),g._v(" "),I("ol",[I("li",[g._v("解码从Tendermint共识引擎接收到的交易（记住Tendermint只处理"),I("code",[g._v("[]bytes")]),g._v("）")]),g._v(" "),I("li",[g._v("从交易中提取消息并进行基本的合理性检查。")]),g._v(" "),I("li",[g._v("将每条消息路由至对应的模块进行处理。")]),g._v(" "),I("li",[g._v("提交状态变更。")])]),g._v(" "),I("p",[g._v("应用同样可以生成交易，进行编码并传递给底层的Tendermint来进行广播")]),g._v(" "),I("h2",{attrs:{id:"baseapp"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#baseapp"}},[g._v("#")]),g._v(" "),I("code",[g._v("baseapp")])]),g._v(" "),I("p",[I("code",[g._v("baseApp")]),g._v(" 是Cosmos SDK的ABCI的实现样板。里面的 "),I("code",[g._v("router")]),g._v(" 用来把交易路由到对应的模块。我们应用程序的主体文件"),I("code",[g._v("app.go")]),g._v(" 将自定义"),I("code",[g._v("app")]),g._v("类型，它将嵌入"),I("code",[g._v("baseapp")]),g._v("。这样，自定义的"),I("code",[g._v("app")]),g._v("类型将自动继承"),I("code",[g._v("baseapp")]),g._v("的所有方法。阅览"),I("a",{attrs:{href:"https://github.com/cosmos/sdk-application-tutorial/blob/master/app.go#L27",target:"_blank",rel:"noopener noreferrer"}},[g._v("SDK应用教程"),I("OutboundLink")],1),g._v("代码示例。")]),g._v(" "),I("p",[I("code",[g._v("baseapp")]),g._v("的目的是在存储和可扩展状态机的之间提供安全接口，同时尽可能少地定义该状态机（保持对ABCI的真实性）。")]),g._v(" "),I("p",[g._v("有关"),I("code",[g._v("baseapp")]),g._v("的更多信息，请点击"),I("RouterLink",{attrs:{to:"/cn/concepts/baseapp.html"}},[g._v("这里")]),g._v("。")],1),g._v(" "),I("h2",{attrs:{id:"multistore"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#multistore"}},[g._v("#")]),g._v(" Multistore")]),g._v(" "),I("p",[g._v("Cosmos SDK 为状态持久化提供了 multistore 。multistore 允许开发者声明任意数量的"),I("a",{attrs:{href:"https://github.com/blocklayerhq/chainkit",target:"_blank",rel:"noopener noreferrer"}},[I("code",[g._v("KVStores")]),I("OutboundLink")],1),g._v("。"),I("code",[g._v("KVStores")]),g._v("只接受"),I("code",[g._v("[]byte")]),g._v("类型作为值，因此任何自定义的类型都需要在存储之前使用"),I("a",{attrs:{href:"https://github.com/tendermint/go-amino",target:"_blank",rel:"noopener noreferrer"}},[g._v("go-amino"),I("OutboundLink")],1),g._v("进行编码。")]),g._v(" "),I("p",[g._v("multistore 抽象用于区分不同的模块的状态，每个都由其自身模块管理。要了解更多关于 multistore 的信息，点击"),I("RouterLink",{attrs:{to:"/cn/concepts/store.html"}},[g._v("这里")])],1),g._v(" "),I("h2",{attrs:{id:"modules"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[g._v("#")]),g._v(" Modules")]),g._v(" "),I("p",[g._v("Cosmos SDK 的强大之处在于其模块化开发的理念。应用程序通过把一组可以互相操作的模块组合起来进行构建。每个模块定义状态子集，并包含其自己的消息/交易处理器，而SDK负责将每条消息路由到其各自归属的模块。")]),g._v(" "),I("p",[g._v("下面是一个简化视图, 旨在说明每个应用链的全节点是如何处理接收的有效块中交易的:")]),g._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIOS6pOaYk+mAmui/h+WFqOiKgueCueeahCBUZW5kZXJtaW50IOW8leaTjueahERlbGl2ZXJUeAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIOS8oOmAkuWIsOW6lOeUqOWxggogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tdi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAg5bqU55So77yI5bGC77yJICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgfCAgICAgICAgIOeUqCBiYXNlYXBwIOeahOaWueazlTog6Kej56CBIFR4LCAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgfCAgICAgICAgICAgICDmj5Dlj5blj4rot6/nlLHmtojmga8gICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIOa2iOaBr+S8oOe7meebuOW6lOeahOaooeWdl+WkhOeQhgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tLS0tLS0tLS0tKyAgKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tdi0tLS0tLS0tLS0rCnwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgfAp8ICBBVVRIIE1PRFVMRSAgIHwgIHwgIEJBTksgTU9EVUxFICB8ICB8IFNUQUtJTkcgTU9EVUxFIHwgIHwgICBHT1YgTU9EVUxFICAgIHwKfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICB8CnwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgfCAgfCDlpITnkIbmtojmga8sIOabtOaUueeKtuaAgSB8CnwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgfAp8ICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tLS0tLS0tLS0tKyAgKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tKy0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIOi/lOWbnue7k+aenOWIsCBUZW5kZXJtaW50CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKDA9T2ssIDE9RXJyKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Cg=="}}),g._v(" "),I("p",[g._v("每个模块都可以看做一个小型的状态机。开发人员需要定义模块所处理的状态的子集，以及修改状态的message自定义类型("),I("em",[g._v("注意")]),g._v(" : message 是由 "),I("code",[g._v("baseapp")]),g._v(" 的方法从交易中提取的)。通常，每个模块在 multistore 声明它自己的"),I("code",[g._v("KVStore")]),g._v(" 来持久化保存它所定义的状态子集。大多数开发者在构建自己的模块时也需要访问其他的第三方模块。鉴于Cosmos-SDK是一个开源的框架，一些模块可能是恶意的，这就意味着需要安全原则来合理化模块之间的交互。这些原则基于"),I("RouterLink",{attrs:{to:"/cn/intro/ocap.html"}},[g._v("object-capabilities")]),g._v("。实际上，这意味着不是让每个模块保留其他模块的访问控制列表，而是每个模块都实现称作"),I("code",[g._v("keeper")]),g._v("的特殊对象，这些对象可以传递给其他模块并授予预先定义的一组能力。")],1),g._v(" "),I("p",[g._v("SDK模块在SDK的"),I("code",[g._v("x/")]),g._v("目录下定义。一些核心模块包括：")]),g._v(" "),I("ul",[I("li",[I("code",[g._v("x/auth")]),g._v(": 用于管理账户和签名.")]),g._v(" "),I("li",[I("code",[g._v("x/bank")]),g._v(": 用于实现token和token转账.")]),g._v(" "),I("li",[I("code",[g._v("x/staking")]),g._v(" + "),I("code",[g._v("x/slashing")]),g._v(": 用于构建POS区块链.")])]),g._v(" "),I("p",[g._v("除了"),I("code",[g._v("x/")]),g._v("中已有的模块，任何人都可以在他们的应用程序中使用它们自己定义的模块。你可以查看"),I("a",{attrs:{href:"https://learnblockchain.cn/docs/cosmos/tutorial/04-keeper.html",target:"_blank",rel:"noopener noreferrer"}},[g._v("示例教程"),I("OutboundLink")],1),g._v("。")]),g._v(" "),I("h3",{attrs:{id:"接下来-学习-cosmos-sdk-安全模型-ocap"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#接下来-学习-cosmos-sdk-安全模型-ocap"}},[g._v("#")]),g._v(" 接下来 学习 Cosmos SDK 安全模型，"),I("RouterLink",{attrs:{to:"/cn/intro/ocap.html"}},[g._v("ocap")])],1)],1)}),[],!1,null,null,null);C.default=t.exports}}]);