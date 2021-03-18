(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{607:function(t,e,a){t.exports=a.p+"assets/img/high-level.ca0b5f8e.png"},608:function(t,e,a){t.exports=a.p+"assets/img/validatorSetChange.29acad68.png"},609:function(t,e,a){t.exports=a.p+"assets/img/trustPropagate.8fcf2160.png"},793:function(t,e,a){"use strict";a.r(e);var n=a(1),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"light-client-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#light-client-overview"}},[t._v("#")]),t._v(" Light Client Overview")]),t._v(" "),n("p",[n("strong",[t._v("See the Cosmos SDK Light Client RPC documentation "),n("a",{attrs:{href:"https://cosmos.network/rpc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("A light client allows clients, such as mobile phones, to receive proofs of the state of the\nblockchain from any full node. Light clients do not have to trust any full node, since they are able\nto verify any proof they receive.")]),t._v(" "),n("p",[t._v("A light client can provide the same security as a full node with minimal requirements for\nbandwidth, computing and storage resource. It can also provide modular functionality\naccording to users' configuration. These features allow developers to build secure, efficient,\nand usable mobile apps, websites, and other applications without deploying or\nmaintaining any full blockchain nodes.")]),t._v(" "),n("h3",{attrs:{id:"what-is-a-light-client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-light-client"}},[t._v("#")]),t._v(" What is a Light Client?")]),t._v(" "),n("p",[t._v("The Cosmos SDK Light Client (Gaia-lite) is split into two separate components. The first component is generic for\nany Tendermint-based application. It handles the security and connectivity aspects of following the header\nchain and verify proofs from full nodes against a locally trusted validator set. Furthermore, it exposes the same\nAPI as any Tendermint Core node. The second component is specific for the Cosmos Hub ("),n("code",[t._v("gaiad")]),t._v("). It works as a query\nendpoint and exposes the application specific functionality, which can be arbitrary. All queries against the\napplication state must go through the query endpoint. The advantage of the query endpoint is that it can verify\nthe proofs that the application returns.")]),t._v(" "),n("h3",{attrs:{id:"high-level-architecture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#high-level-architecture"}},[t._v("#")]),t._v(" High-Level Architecture")]),t._v(" "),n("p",[t._v("An application developer that wants to build a third party client application for the Cosmos Hub (or any\nother zone) should build it against its canonical API. That API is a combination of multiple parts.\nAll zones have to expose ICS0 (TendermintAPI). Beyond that any zone is free to choose any\ncombination of module APIs, depending on which modules the state machine uses. The Cosmos Hub will\ninitially support "),n("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS0",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS0"),n("OutboundLink")],1),t._v(" (TendermintAPI), "),n("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS1",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS1"),n("OutboundLink")],1),t._v(" (KeyAPI), "),n("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS20"),n("OutboundLink")],1),t._v(" (TokenAPI), "),n("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS21",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS21"),n("OutboundLink")],1),t._v(" (StakingAPI),\n"),n("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS22",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS22"),n("OutboundLink")],1),t._v(" (GovernanceAPI) and "),n("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS23",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS23"),n("OutboundLink")],1),t._v(" (SlashingAPI).")]),t._v(" "),n("p",[n("img",{attrs:{src:a(607),alt:"high-level"}})]),t._v(" "),n("p",[t._v("All applications are expected to run only against Gaia-lite. Gaia-lite is the only piece of software\nthat offers stability guarantees around the zone API.")]),t._v(" "),n("h3",{attrs:{id:"comparison"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[t._v("#")]),t._v(" Comparison")]),t._v(" "),n("p",[t._v("A full node of ABCI is different from a light client in the following ways:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Full Node")]),t._v(" "),n("th",[t._v("Gaia-lite")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Execute and verify transactions")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("A full node will execute and verify all transactions while Gaia-lite won't.")])]),t._v(" "),n("tr",[n("td",[t._v("Verify and save blocks")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("A full node will verify and save all blocks while Gaia-lite won't.")])]),t._v(" "),n("tr",[n("td",[t._v("Consensus participation")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("Only when a full node is a validator will it participate in consensus. Lite nodes never participate in consensus.")])]),t._v(" "),n("tr",[n("td",[t._v("Bandwidth cost")]),t._v(" "),n("td",[t._v("High")]),t._v(" "),n("td",[t._v("Low")]),t._v(" "),n("td",[t._v("A full node will receive all blocks. If bandwidth is limited, it will fall behind the main network. What's more, if it happens to be a validator, it will slow down the consensus process. Light clients require little bandwidth, only when serving local requests.")])]),t._v(" "),n("tr",[n("td",[t._v("Computing resources")]),t._v(" "),n("td",[t._v("High")]),t._v(" "),n("td",[t._v("Low")]),t._v(" "),n("td",[t._v("A full node will execute all transactions and verify all blocks, which requires considerable computing resources.")])]),t._v(" "),n("tr",[n("td",[t._v("Storage resources")]),t._v(" "),n("td",[t._v("High")]),t._v(" "),n("td",[t._v("Low")]),t._v(" "),n("td",[t._v("A full node will save all blocks and ABCI states. Gaia-lite just saves validator sets and some checkpoints.")])]),t._v(" "),n("tr",[n("td",[t._v("Power consumption")]),t._v(" "),n("td",[t._v("High")]),t._v(" "),n("td",[t._v("Low")]),t._v(" "),n("td",[t._v("Full nodes must be deployed on machines which have high performance and will be running all the time. Gaia-lite can be deployed on the same machines as users' applications, or on independent machines but with lower performance. Light clients can be shut down anytime when necessary. Gaia-lite consumes very little power, so even mobile devices can meet the power requirements.")])]),t._v(" "),n("tr",[n("td",[t._v("Provide APIs")]),t._v(" "),n("td",[t._v("All cosmos APIs")]),t._v(" "),n("td",[t._v("Modular APIs")]),t._v(" "),n("td",[t._v("A full node supports all Cosmos APIs. Gaia-lite provides modular APIs according to users' configuration.")])]),t._v(" "),n("tr",[n("td",[t._v("Secuity level")]),t._v(" "),n("td",[t._v("High")]),t._v(" "),n("td",[t._v("High")]),t._v(" "),n("td",[t._v("A full node will verify all transactions and blocks by itself. A light client can't do this, but it can query data from other full nodes and verify the data independently. Therefore, both full nodes and light clients don't need to trust any third nodes and can achieve high security.")])])])]),t._v(" "),n("p",[t._v("According to the above table, Gaia-lite can meet many users' functionality and security requirements, but require little bandwidth, computing, storage, and power.")]),t._v(" "),n("h2",{attrs:{id:"achieving-security"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#achieving-security"}},[t._v("#")]),t._v(" Achieving Security")]),t._v(" "),n("h3",{attrs:{id:"trusted-validator-set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#trusted-validator-set"}},[t._v("#")]),t._v(" Trusted Validator Set")]),t._v(" "),n("p",[t._v("The base design philosophy of Gaia-lite follows two rules:")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("Doesn't trust any blockchain nodes, including validator nodes and other full nodes")])]),t._v(" "),n("li",[n("strong",[t._v("Only trusts the whole validator set")])])]),t._v(" "),n("p",[t._v("The original trusted validator set should be prepositioned into its trust store. Usually this\nvalidator set comes from a genesis file. During runtime, if Gaia-lite detects a different validator set,\nit will verify it and save the new validated validator set to the trust store.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(608),alt:"validator-set-change"}})]),t._v(" "),n("h3",{attrs:{id:"trust-propagation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#trust-propagation"}},[t._v("#")]),t._v(" Trust Propagation")]),t._v(" "),n("p",[t._v("From the above section, we come to know how to get a trusted validator set and how lcd keeps track of\nvalidator set evolution. The validator set is the foundation of trust, and the trust can propagate to\nother blockchain data, such as blocks and transactions. The propagation architecture is shown as")]),t._v(" "),n("p",[t._v("follows:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(609),alt:"change-process"}})]),t._v(" "),n("p",[t._v("In general, with a trusted validator set, a light client can verify each block commit which contains all pre-commit\ndata and block header data. Then the block hash, data hash and appHash are trusted. Based on this\nand merkle proof, all transactions data and ABCI states can be verified too.")])])}),[],!1,null,null,null);e.default=o.exports}}]);