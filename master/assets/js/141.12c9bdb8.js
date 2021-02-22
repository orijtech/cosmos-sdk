(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{798:function(e,t,o){"use strict";o.r(t);var s=o(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("The "),o("code",[e._v("context")]),e._v(" is a data structure intended to be passed from function to function that carries information about the current state of the application. It provides an access to a branched storage (a safe branch of the entire state) as well as useful objects and information like "),o("code",[e._v("gasMeter")]),e._v(", "),o("code",[e._v("block height")]),e._v(", "),o("code",[e._v("consensus parameters")]),e._v(" and more.")]),e._v(" "),o("h2",{attrs:{id:"pre-requisites-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites-readings"}},[e._v("#")]),e._v(" Pre-requisites Readings")]),e._v(" "),o("ul",[o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of an SDK Application")])],1),e._v(" "),o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[e._v("Lifecycle of a Transaction")])],1)]),e._v(" "),o("h2",{attrs:{id:"context-definition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context-definition"}},[e._v("#")]),e._v(" Context Definition")]),e._v(" "),o("p",[e._v("The SDK "),o("code",[e._v("Context")]),e._v(" is a custom data structure that contains Go's stdlib "),o("a",{attrs:{href:"https://golang.org/pkg/context",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("context")]),o("OutboundLink")],1),e._v(" as its base, and has many additional types within its definition that are specific to the Cosmos SDK. The "),o("code",[e._v("Context")]),e._v(" is integral to transaction processing in that it allows modules to easily access their respective "),o("RouterLink",{attrs:{to:"/core/store.html#base-layer-kvstores"}},[e._v("store")]),e._v(" in the "),o("RouterLink",{attrs:{to:"/core/store.html#multistore"}},[o("code",[e._v("multistore")])]),e._v(" and retrieve transactional context such as the block header and gas meter.")],1),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"LyoKQ29udGV4dCBpcyBhbiBpbW11dGFibGUgb2JqZWN0IGNvbnRhaW5zIGFsbCBpbmZvcm1hdGlvbiBuZWVkZWQgdG8KcHJvY2VzcyBhIHJlcXVlc3QuCgpJdCBjb250YWlucyBhIGNvbnRleHQuQ29udGV4dCBvYmplY3QgaW5zaWRlIGlmIHlvdSB3YW50IHRvIHVzZSB0aGF0LApidXQgcGxlYXNlIGRvIG5vdCBvdmVyLXVzZSBpdC4gV2UgdHJ5IHRvIGtlZXAgYWxsIGRhdGEgc3RydWN0dXJlZAphbmQgc3RhbmRhcmQgYWRkaXRpb25zIGhlcmUgd291bGQgYmUgYmV0dGVyIGp1c3QgdG8gYWRkIHRvIHRoZSBDb250ZXh0IHN0cnVjdAoqLwp0eXBlIENvbnRleHQgc3RydWN0IHsKCWN0eCAgICAgICAgICAgY29udGV4dC5Db250ZXh0CgltcyAgICAgICAgICAgIE11bHRpU3RvcmUKCWhlYWRlciAgICAgICAgdG1wcm90by5IZWFkZXIKCWNoYWluSUQgICAgICAgc3RyaW5nCgl0eEJ5dGVzICAgICAgIFtdYnl0ZQoJbG9nZ2VyICAgICAgICBsb2cuTG9nZ2VyCgl2b3RlSW5mbyAgICAgIFtdYWJjaS5Wb3RlSW5mbwoJZ2FzTWV0ZXIgICAgICBHYXNNZXRlcgoJYmxvY2tHYXNNZXRlciBHYXNNZXRlcgoJY2hlY2tUeCAgICAgICBib29sCglyZWNoZWNrVHggICAgIGJvb2wgLy8gaWYgcmVjaGVja1R4ID09IHRydWUsIHRoZW4gY2hlY2tUeCBtdXN0IGFsc28gYmUgdHJ1ZQoJbWluR2FzUHJpY2UgICBEZWNDb2lucwoJY29uc1BhcmFtcyAgICAqYWJjaS5Db25zZW5zdXNQYXJhbXMKCWV2ZW50TWFuYWdlciAgKkV2ZW50TWFuYWdlcgp9"}})],1),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Context:")]),e._v(" The base type is a Go "),o("a",{attrs:{href:"https://golang.org/pkg/context",target:"_blank",rel:"noopener noreferrer"}},[e._v("Context"),o("OutboundLink")],1),e._v(", which is explained further in the "),o("a",{attrs:{href:"#go-context-package"}},[e._v("Go Context Package")]),e._v(" section below.")]),e._v(" "),o("li",[o("strong",[e._v("Multistore:")]),e._v(" Every application's "),o("code",[e._v("BaseApp")]),e._v(" contains a "),o("RouterLink",{attrs:{to:"/core/store.html#multistore"}},[o("code",[e._v("CommitMultiStore")])]),e._v(" which is provided when a "),o("code",[e._v("Context")]),e._v(" is created. Calling the "),o("code",[e._v("KVStore()")]),e._v(" and "),o("code",[e._v("TransientStore()")]),e._v(" methods allows modules to fetch their respective "),o("RouterLink",{attrs:{to:"/core/store.html#base-layer-kvstores"}},[o("code",[e._v("KVStore")])]),e._v(" using their unique "),o("code",[e._v("StoreKey")]),e._v(".")],1),e._v(" "),o("li",[o("strong",[e._v("ABCI Header:")]),e._v(" The "),o("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#header",target:"_blank",rel:"noopener noreferrer"}},[e._v("header"),o("OutboundLink")],1),e._v(" is an ABCI type. It carries important information about the state of the blockchain, such as block height and proposer of the current block.")]),e._v(" "),o("li",[o("strong",[e._v("Chain ID:")]),e._v(" The unique identification number of the blockchain a block pertains to.")]),e._v(" "),o("li",[o("strong",[e._v("Transaction Bytes:")]),e._v(" The "),o("code",[e._v("[]byte")]),e._v(" representation of a transaction being processed using the context. Every transaction is processed by various parts of the SDK and consensus engine (e.g. Tendermint) throughout its "),o("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[e._v("lifecycle")]),e._v(", some of which to not have any understanding of transaction types. Thus, transactions are marshaled into the generic "),o("code",[e._v("[]byte")]),e._v(" type using some kind of "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[e._v("encoding format")]),e._v(" such as "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[e._v("Amino")]),e._v(".")],1),e._v(" "),o("li",[o("strong",[e._v("Logger:")]),e._v(" A "),o("code",[e._v("logger")]),e._v(" from the Tendermint libraries. Learn more about logs "),o("a",{attrs:{href:"https://tendermint.com/docs/tendermint-core/how-to-read-logs.html#how-to-read-logs",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(". Modules call this method to create their own unique module-specific logger.")]),e._v(" "),o("li",[o("strong",[e._v("VoteInfo:")]),e._v(" A list of the ABCI type "),o("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#voteinfo",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("VoteInfo")]),o("OutboundLink")],1),e._v(", which includes the name of a validator and a boolean indicating whether they have signed the block.")]),e._v(" "),o("li",[o("strong",[e._v("Gas Meters:")]),e._v(" Specifically, a "),o("RouterLink",{attrs:{to:"/basics/gas-fees.html#main-gas-meter"}},[o("code",[e._v("gasMeter")])]),e._v(" for the transaction currently being processed using the context and a "),o("RouterLink",{attrs:{to:"/basics/gas-fees.html#block-gas-meter"}},[o("code",[e._v("blockGasMeter")])]),e._v(" for the entire block it belongs to. Users specify how much in fees they wish to pay for the execution of their transaction; these gas meters keep track of how much "),o("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[e._v("gas")]),e._v(" has been used in the transaction or block so far. If the gas meter runs out, execution halts.")],1),e._v(" "),o("li",[o("strong",[e._v("CheckTx Mode:")]),e._v(" A boolean value indicating whether a transaction should be processed in "),o("code",[e._v("CheckTx")]),e._v(" or "),o("code",[e._v("DeliverTx")]),e._v(" mode.")]),e._v(" "),o("li",[o("strong",[e._v("Min Gas Price:")]),e._v(" The minimum "),o("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[e._v("gas")]),e._v(" price a node is willing to take in order to include a transaction in its block. This price is a local value configured by each node individually, and should therefore "),o("strong",[e._v("not be used in any functions used in sequences leading to state-transitions")]),e._v(".")],1),e._v(" "),o("li",[o("strong",[e._v("Consensus Params:")]),e._v(" The ABCI type "),o("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/apps.html#consensus-parameters",target:"_blank",rel:"noopener noreferrer"}},[e._v("Consensus Parameters"),o("OutboundLink")],1),e._v(", which specify certain limits for the blockchain, such as maximum gas for a block.")]),e._v(" "),o("li",[o("strong",[e._v("Event Manager:")]),e._v(" The event manager allows any caller with access to a "),o("code",[e._v("Context")]),e._v(" to emit "),o("RouterLink",{attrs:{to:"/core/events.html"}},[o("code",[e._v("Events")])]),e._v(". Modules may define module specific\n"),o("code",[e._v("Events")]),e._v(" by defining various "),o("code",[e._v("Types")]),e._v(" and "),o("code",[e._v("Attributes")]),e._v(" or use the common definitions found in "),o("code",[e._v("types/")]),e._v(". Clients can subscribe or query for these "),o("code",[e._v("Events")]),e._v(". These "),o("code",[e._v("Events")]),e._v(" are collected throughout "),o("code",[e._v("DeliverTx")]),e._v(", "),o("code",[e._v("BeginBlock")]),e._v(", and "),o("code",[e._v("EndBlock")]),e._v(" and are returned to Tendermint for indexing. For example:")],1)]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudChzZGsuTmV3RXZlbnQoCiAgICBzZGsuRXZlbnRUeXBlTWVzc2FnZSwKICAgIHNkay5OZXdBdHRyaWJ1dGUoc2RrLkF0dHJpYnV0ZUtleU1vZHVsZSwgdHlwZXMuQXR0cmlidXRlVmFsdWVDYXRlZ29yeSkpLAopCg=="}}),e._v(" "),o("h2",{attrs:{id:"go-context-package"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#go-context-package"}},[e._v("#")]),e._v(" Go Context Package")]),e._v(" "),o("p",[e._v("A basic "),o("code",[e._v("Context")]),e._v(" is defined in the "),o("a",{attrs:{href:"https://golang.org/pkg/context",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang Context Package"),o("OutboundLink")],1),e._v(". A "),o("code",[e._v("Context")]),e._v("\nis an immutable data structure that carries request-scoped data across APIs and processes. Contexts\nare also designed to enable concurrency and to be used in goroutines.")]),e._v(" "),o("p",[e._v("Contexts are intended to be "),o("strong",[e._v("immutable")]),e._v("; they should never be edited. Instead, the convention is\nto create a child context from its parent using a "),o("code",[e._v("With")]),e._v(" function. For example:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y2hpbGRDdHggPSBwYXJlbnRDdHguV2l0aEJsb2NrSGVhZGVyKGhlYWRlcikK"}}),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://golang.org/pkg/context",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang Context Package"),o("OutboundLink")],1),e._v(" documentation instructs developers to\nexplicitly pass a context "),o("code",[e._v("ctx")]),e._v(" as the first argument of a process.")]),e._v(" "),o("h2",{attrs:{id:"store-branching"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#store-branching"}},[e._v("#")]),e._v(" Store branching")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Context")]),e._v(" contains a "),o("code",[e._v("MultiStore")]),e._v(", which allows for branchinig and caching functionality using "),o("code",[e._v("CacheMultiStore")]),e._v("\n(queries in "),o("code",[e._v("CacheMultiStore")]),e._v(" are cached to avoid future round trips).\nEach "),o("code",[e._v("KVStore")]),e._v(" is branched in a safe and isolated ephemeral storage. Processes are free to write changes to\nthe "),o("code",[e._v("CacheMultiStore")]),e._v(". If a state-transition sequence is performed without issue, the store branch can\nbe committed to the underlying store at the end of the sequence or disregard them if something\ngoes wrong. The pattern of usage for a Context is as follows:")]),e._v(" "),o("ol",[o("li",[e._v("A process receives a Context "),o("code",[e._v("ctx")]),e._v(" from its parent process, which provides information needed to\nperform the process.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("ctx.ms")]),e._v(" is a "),o("strong",[e._v("branched store")]),e._v(", i.e. a branch of the "),o("RouterLink",{attrs:{to:"/core/store.html#multistore"}},[e._v("multistore")]),e._v(" is made so that the process can make changes to the state as it executes, without changing the original"),o("code",[e._v("ctx.ms")]),e._v(". This is useful to protect the underlying multistore in case the changes need to be reverted at some point in the execution.")],1),e._v(" "),o("li",[e._v("The process may read and write from "),o("code",[e._v("ctx")]),e._v(" as it is executing. It may call a subprocess and pass\n"),o("code",[e._v("ctx")]),e._v(" to it as needed.")]),e._v(" "),o("li",[e._v("When a subprocess returns, it checks if the result is a success or failure. If a failure, nothing\nneeds to be done - the branch "),o("code",[e._v("ctx")]),e._v(" is simply discarded. If successful, the changes made to\nthe "),o("code",[e._v("CacheMultiStore")]),e._v(" can be committed to the original "),o("code",[e._v("ctx.ms")]),e._v(" via "),o("code",[e._v("Write()")]),e._v(".")])]),e._v(" "),o("p",[e._v("For example, here is a snippet from the "),o("RouterLink",{attrs:{to:"/core/baseapp.html#runtx-and-runmsgs"}},[o("code",[e._v("runTx")])]),e._v(" function in\n"),o("RouterLink",{attrs:{to:"/core/baseapp.html"}},[o("code",[e._v("baseapp")])]),e._v(":")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cnVuTXNnQ3R4LCBtc0NhY2hlIDo9IGFwcC5jYWNoZVR4Q29udGV4dChjdHgsIHR4Qnl0ZXMpCnJlc3VsdCA9IGFwcC5ydW5Nc2dzKHJ1bk1zZ0N0eCwgbXNncywgbW9kZSkKcmVzdWx0Lkdhc1dhbnRlZCA9IGdhc1dhbnRlZAoKaWYgbW9kZSAhPSBydW5UeE1vZGVEZWxpdmVyIHsKICByZXR1cm4gcmVzdWx0Cn0KCmlmIHJlc3VsdC5Jc09LKCkgewogIG1zQ2FjaGUuV3JpdGUoKQp9Cg=="}}),e._v(" "),o("p",[e._v("Here is the process:")]),e._v(" "),o("ol",[o("li",[e._v("Prior to calling "),o("code",[e._v("runMsgs")]),e._v(" on the message(s) in the transaction, it uses "),o("code",[e._v("app.cacheTxContext()")]),e._v("\nto branch and cache the context and multistore.")]),e._v(" "),o("li",[o("code",[e._v("runMsgCtx")]),e._v(" - the context with branched store, is used in "),o("code",[e._v("runMsgs")]),e._v(" to return a result.")]),e._v(" "),o("li",[e._v("If the process is running in "),o("RouterLink",{attrs:{to:"/core/baseapp.html#checktx"}},[o("code",[e._v("checkTxMode")])]),e._v(", there is no need to write the\nchanges - the result is returned immediately.")],1),e._v(" "),o("li",[e._v("If the process is running in "),o("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[o("code",[e._v("deliverTxMode")])]),e._v(" and the result indicates\na successful run over all the messages, the branched multistore is written back to the original.")],1)]),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn about the "),o("RouterLink",{attrs:{to:"/core/node.html"}},[e._v("node client")])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);