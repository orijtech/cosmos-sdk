(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{745:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"query-lifecycle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-lifecycle"}},[e._v("#")]),e._v(" Query Lifecycle")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("This document describes the lifecycle of a query in a SDK application, from the user interface to application stores and back.")]),e._v(" "),o("h2",{attrs:{id:"pre-requisite-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),o("ul",[o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[e._v("Transaction Lifecycle")])],1)]),e._v(" "),o("h2",{attrs:{id:"query-creation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-creation"}},[e._v("#")]),e._v(" Query Creation")]),e._v(" "),o("p",[e._v("A "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[o("strong",[e._v("query")])]),e._v(" is a request for information made by end-users of applications through an interface and processed by a full-node. Users can query information about the network, the application itself, and application state directly from the application's stores or modules. Note that queries are different from "),o("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("transactions")]),e._v(" (view the lifecycle "),o("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[e._v("here")]),e._v("), particularly in that they do not require consensus to be processed (as they do not trigger state-transitions); they can be fully handled by one full-node.")],1),e._v(" "),o("p",[e._v("For the purpose of explaining the query lifecycle, let's say "),o("code",[e._v("MyQuery")]),e._v(" is requesting a list of delegations made by a certain delegator address in the application called "),o("code",[e._v("simapp")]),e._v(". As to be expected, the "),o("RouterLink",{attrs:{to:"/x/staking/spec/"}},[o("code",[e._v("staking")])]),e._v(" module handles this query. But first, there are a few ways "),o("code",[e._v("MyQuery")]),e._v(" can be created by users.")],1),e._v(" "),o("h3",{attrs:{id:"cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),o("p",[e._v("The main interface for an application is the command-line interface. Users connect to a full-node and run the CLI directly from their machines - the CLI interacts directly with the full-node. To create "),o("code",[e._v("MyQuery")]),e._v(" from their terminal, users type the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBzdGFraW5nIGRlbGVnYXRpb25zICZsdDtkZWxlZ2F0b3JBZGRyZXNzJmd0Owo="}}),e._v(" "),o("p",[e._v("This query command was defined by the "),o("RouterLink",{attrs:{to:"/x/staking/spec/"}},[o("code",[e._v("staking")])]),e._v(" module developer and added to the list of subcommands by the application developer when creating the CLI.")],1),e._v(" "),o("p",[e._v("Note that the general format is as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBbbW9kdWxlTmFtZV0gW2NvbW1hbmRdICZsdDthcmd1bWVudHMmZ3Q7IC0tZmxhZyAmbHQ7ZmxhZ0FyZyZndDsK"}}),e._v(" "),o("p",[e._v("To provide values such as "),o("code",[e._v("--node")]),e._v(" (the full-node the CLI connects to), the user can use the "),o("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[o("code",[e._v("app.toml")])]),e._v(" config file to set them or provide them as flags.")],1),e._v(" "),o("p",[e._v("The CLI understands a specific set of commands, defined in a hierarchical structure by the application developer: from the "),o("RouterLink",{attrs:{to:"/core/cli.html#root-command"}},[e._v("root command")]),e._v(" ("),o("code",[e._v("simd")]),e._v("), the type of command ("),o("code",[e._v("Myquery")]),e._v("), the module that contains the command ("),o("code",[e._v("staking")]),e._v("), and command itself ("),o("code",[e._v("delegations")]),e._v("). Thus, the CLI knows exactly which module handles this command and directly passes the call there.")],1),e._v(" "),o("h3",{attrs:{id:"grpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[e._v("A patch introduced in "),o("code",[e._v("go-grpc v1.34.0")]),e._v(" made gRPC incompatible with the "),o("code",[e._v("gogoproto")]),e._v(" library, making some "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/8426",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC queries"),o("OutboundLink")],1),e._v(" panic. As such, the SDK requires that "),o("code",[e._v("go-grpc <=v1.33.2")]),e._v(" is installed in your "),o("code",[e._v("go.mod")]),e._v(".")]),e._v(" "),o("p",[e._v("To make sure that gRPC is working properly, it is "),o("strong",[e._v("highly recommended")]),e._v(" to add the following line in your application's "),o("code",[e._v("go.mod")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cmVwbGFjZSBnb29nbGUuZ29sYW5nLm9yZy9ncnBjID0mZ3Q7IGdvb2dsZS5nb2xhbmcub3JnL2dycGMgdjEuMzMuMgo="}}),e._v(" "),o("p",[e._v("Please see "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/8392",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #8392"),o("OutboundLink")],1),e._v(" for more info.")])],1),e._v(" "),o("p",[e._v("Another interface through which users can make queries, introduced in Cosmos SDK v0.40, is "),o("a",{attrs:{href:"https://grpc.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),o("OutboundLink")],1),e._v(" requests to a "),o("RouterLink",{attrs:{to:"/core/grpc_rest.html#grpc-server"}},[e._v("gRPC server")]),e._v(". The endpoints are defined as "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),o("OutboundLink")],1),e._v(" service methods inside "),o("code",[e._v(".proto")]),e._v(" files, written in Protobuf's own language-agnostic interface definition language (IDL). The Protobuf ecosystem developed tools for code-generation from "),o("code",[e._v("*.proto")]),e._v(" files into various languages. These tools allow to build gRPC clients easily.")],1),e._v(" "),o("p",[e._v("One such tool is "),o("a",{attrs:{href:"https://github.com/fullstorydev/grpcurl",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpcurl"),o("OutboundLink")],1),e._v(", and a gRPC request for "),o("code",[e._v("MyQuery")]),e._v(" using this client looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCBcCiAgICAtcGxhaW50ZXh0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMgV2Ugd2FudCByZXN1bHRzIGluIHBsYWluIHRlc3QKICAgIC1pbXBvcnQtcGF0aCAuL3Byb3RvIFwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBJbXBvcnQgdGhlc2UgLnByb3RvIGZpbGVzCiAgICAtcHJvdG8gLi9wcm90by9jb3Ntb3Mvc3Rha2luZy92MWJldGExL3F1ZXJ5LnByb3RvIFwgICMgTG9vayBpbnRvIHRoaXMgLnByb3RvIGZpbGUgZm9yIHRoZSBRdWVyeSBwcm90b2J1ZiBzZXJ2aWNlCiAgICAtZCAneyZxdW90O2FkZHJlc3MmcXVvdDs6JnF1b3Q7JE1ZX0RFTEVHQVRPUiZxdW90O30nIFwgICAgICAgICAgICAgICAgICAgIyBRdWVyeSBhcmd1bWVudHMKICAgIGxvY2FsaG9zdDo5MDkwIFwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBnUlBDIHNlcnZlciBlbmRwb2ludAogICAgY29zbW9zLnN0YWtpbmcudjFiZXRhMS5RdWVyeS9EZWxlZ2F0aW9ucyAgICAgICAgICAgICAjIEZ1bGx5LXF1YWxpZmllZCBzZXJ2aWNlIG1ldGhvZCBuYW1lCg=="}}),e._v(" "),o("h3",{attrs:{id:"rest"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[e._v("#")]),e._v(" REST")]),e._v(" "),o("p",[e._v("Another interface through which users can make queries is through HTTP Requests to a "),o("RouterLink",{attrs:{to:"/core/grpc_rest.html#rest-server"}},[e._v("REST server")]),e._v(". The REST server is fully auto-generated from Protobuf services, using "),o("a",{attrs:{href:"https://github.com/grpc-ecosystem/grpc-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC-gateway"),o("OutboundLink")],1),e._v(".")],1),e._v(" "),o("p",[e._v("An example HTTP request for "),o("code",[e._v("MyQuery")]),e._v(" looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"R0VUIGh0dHA6Ly9sb2NhbGhvc3Q6MTMxNy9jb3Ntb3Mvc3Rha2luZy92MWJldGExL2RlbGVnYXRvcnMve2RlbGVnYXRvckFkZHJ9L2RlbGVnYXRpb25zCg=="}}),e._v(" "),o("h2",{attrs:{id:"how-queries-are-handled-by-the-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-queries-are-handled-by-the-cli"}},[e._v("#")]),e._v(" How Queries are Handled by the CLI")]),e._v(" "),o("p",[e._v("The examples above show how an external user can interact with a node by querying its state. To understand more in details the exact lifecycle of a query, let's dig into how the CLI prepares the query, and how the node handles it. The interactions from the users' perspective are a bit different, but the underlying functions are almost identical because they are implementations of the same command defined by the module developer. This step of processing happens within the CLI, gRPC or REST server and heavily involves a "),o("code",[e._v("client.Context")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("The first thing that is created in the execution of a CLI command is a "),o("code",[e._v("client.Context")]),e._v(". A "),o("code",[e._v("client.Context")]),e._v(" is an object that stores all the data needed to process a request on the user side. In particular, a "),o("code",[e._v("client.Context")]),e._v(" stores the following:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Codec")]),e._v(": The "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[e._v("encoder/decoder")]),e._v(" used by the application, used to marshal the parameters and query before making the Tendermint RPC request and unmarshal the returned response into a JSON object. The default codec used by the CLI is Protobuf.")],1),e._v(" "),o("li",[o("strong",[e._v("Account Decoder")]),e._v(": The account decoder from the "),o("RouterLink",{attrs:{to:"/x/auth/spec/"}},[o("code",[e._v("auth")])]),e._v(" module, which translates "),o("code",[e._v("[]byte")]),e._v("s into accounts.")],1),e._v(" "),o("li",[o("strong",[e._v("RPC Client")]),e._v(": The Tendermint RPC Client, or node, to which the request will be relayed to.")]),e._v(" "),o("li",[o("strong",[e._v("Keyring")]),e._v(": A "),o("RouterLink",{attrs:{to:"/basics/accounts.html#keyring"}},[e._v("Key Manager")]),e._v(" used to sign transactions and handle other operations with keys.")],1),e._v(" "),o("li",[o("strong",[e._v("Output Writer")]),e._v(": A "),o("a",{attrs:{href:"https://golang.org/pkg/io/#Writer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Writer"),o("OutboundLink")],1),e._v(" used to output the response.")]),e._v(" "),o("li",[o("strong",[e._v("Configurations")]),e._v(": The flags configured by the user for this command, including "),o("code",[e._v("--height")]),e._v(", specifying the height of the blockchain to query and "),o("code",[e._v("--indent")]),e._v(", which indicates to add an indent to the JSON response.")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("client.Context")]),e._v(" also contains various functions such as "),o("code",[e._v("Query()")]),e._v(" which retrieves the RPC Client and makes an ABCI call to relay a query to a full-node.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ29udGV4dCBpbXBsZW1lbnRzIGEgdHlwaWNhbCBjb250ZXh0IGNyZWF0ZWQgaW4gU0RLIG1vZHVsZXMgZm9yIHRyYW5zYWN0aW9uCi8vIGhhbmRsaW5nIGFuZCBxdWVyaWVzLgp0eXBlIENvbnRleHQgc3RydWN0IHsKCUZyb21BZGRyZXNzICAgICAgIHNkay5BY2NBZGRyZXNzCglDbGllbnQgICAgICAgICAgICBycGNjbGllbnQuQ2xpZW50CglDaGFpbklEICAgICAgICAgICBzdHJpbmcKCUpTT05NYXJzaGFsZXIgICAgIGNvZGVjLkpTT05NYXJzaGFsZXIKCUludGVyZmFjZVJlZ2lzdHJ5IGNvZGVjdHlwZXMuSW50ZXJmYWNlUmVnaXN0cnkKCUlucHV0ICAgICAgICAgICAgIGlvLlJlYWRlcgoJS2V5cmluZyAgICAgICAgICAga2V5cmluZy5LZXlyaW5nCglPdXRwdXQgICAgICAgICAgICBpby5Xcml0ZXIKCU91dHB1dEZvcm1hdCAgICAgIHN0cmluZwoJSGVpZ2h0ICAgICAgICAgICAgaW50NjQKCUhvbWVEaXIgICAgICAgICAgIHN0cmluZwoJS2V5cmluZ0RpciAgICAgICAgc3RyaW5nCglGcm9tICAgICAgICAgICAgICBzdHJpbmcKCUJyb2FkY2FzdE1vZGUgICAgIHN0cmluZwoJRnJvbU5hbWUgICAgICAgICAgc3RyaW5nCglTaWduTW9kZVN0ciAgICAgICBzdHJpbmcKCVVzZUxlZGdlciAgICAgICAgIGJvb2wKCVNpbXVsYXRlICAgICAgICAgIGJvb2wKCUdlbmVyYXRlT25seSAgICAgIGJvb2wKCU9mZmxpbmUgICAgICAgICAgIGJvb2wKCVNraXBDb25maXJtICAgICAgIGJvb2wKCVR4Q29uZmlnICAgICAgICAgIFR4Q29uZmlnCglBY2NvdW50UmV0cmlldmVyICBBY2NvdW50UmV0cmlldmVyCglOb2RlVVJJICAgICAgICAgICBzdHJpbmcKCgkvLyBUT0RPOiBEZXByZWNhdGVkIChyZW1vdmUpLgoJTGVnYWN5QW1pbm8gKmNvZGVjLkxlZ2FjeUFtaW5vCn0="}})],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("client.Context")]),e._v("'s primary role is to store data used during interactions with the end-user and provide methods to interact with this data - it is used before and after the query is processed by the full-node. Specifically, in handling "),o("code",[e._v("MyQuery")]),e._v(", the "),o("code",[e._v("client.Context")]),e._v(" is utilized to encode the query parameters, retrieve the full-node, and write the output. Prior to being relayed to a full-node, the query needs to be encoded into a "),o("code",[e._v("[]byte")]),e._v(" form, as full-nodes are application-agnostic and do not understand specific types. The full-node (RPC Client) itself is retrieved using the "),o("code",[e._v("client.Context")]),e._v(", which knows which node the user CLI is connected to. The query is relayed to this full-node to be processed. Finally, the "),o("code",[e._v("client.Context")]),e._v(" contains a "),o("code",[e._v("Writer")]),e._v(" to write output when the response is returned. These steps are further described in later sections.")]),e._v(" "),o("h3",{attrs:{id:"arguments-and-route-creation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arguments-and-route-creation"}},[e._v("#")]),e._v(" Arguments and Route Creation")]),e._v(" "),o("p",[e._v("At this point in the lifecycle, the user has created a CLI command with all of the data they wish to include in their query. A "),o("code",[e._v("client.Context")]),e._v(" exists to assist in the rest of the "),o("code",[e._v("MyQuery")]),e._v("'s journey. Now, the next step is to parse the command or request, extract the arguments, and encode everything. These steps all happen on the user side within the interface they are interacting with.")]),e._v(" "),o("h4",{attrs:{id:"encoding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),o("p",[e._v("In our case (querying an address's delegations), "),o("code",[e._v("MyQuery")]),e._v(" contains an "),o("RouterLink",{attrs:{to:"/basics/accounts.html#addresses"}},[e._v("address")]),e._v(" "),o("code",[e._v("delegatorAddress")]),e._v(" as its only argument. However, the request can only contain "),o("code",[e._v("[]byte")]),e._v("s, as it will be relayed to a consensus engine (e.g. Tendermint Core) of a full-node that has no inherent knowledge of the application types. Thus, the "),o("code",[e._v("codec")]),e._v(" of "),o("code",[e._v("client.Context")]),e._v(" is used to marshal the address.")],1),e._v(" "),o("p",[e._v("Here is what the code looks like for the CLI command:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CQkJZGVsQWRkciwgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMihhcmdzWzBdKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQ=="}})],1),e._v(" "),o("h4",{attrs:{id:"grpc-query-client-creation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc-query-client-creation"}},[e._v("#")]),e._v(" gRPC Query Client Creation")]),e._v(" "),o("p",[e._v("The SDK leverages code generated from Protobuf services to make queries. The "),o("code",[e._v("staking")]),e._v(" module's "),o("code",[e._v("MyQuery")]),e._v(" service generates a "),o("code",[e._v("queryClient")]),e._v(", which the CLI will use to make queries. Here is the relevant code:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CQkJY2xpZW50Q3R4LCBlcnIgOj0gY2xpZW50LkdldENsaWVudFF1ZXJ5Q29udGV4dChjbWQpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgkJCXF1ZXJ5Q2xpZW50IDo9IHR5cGVzLk5ld1F1ZXJ5Q2xpZW50KGNsaWVudEN0eCkKCgkJCWRlbEFkZHIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoYXJnc1swXSkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCXBhZ2VSZXEsIGVyciA6PSBjbGllbnQuUmVhZFBhZ2VSZXF1ZXN0KGNtZC5GbGFncygpKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJcGFyYW1zIDo9ICZhbXA7dHlwZXMuUXVlcnlEZWxlZ2F0b3JEZWxlZ2F0aW9uc1JlcXVlc3R7CgkJCQlEZWxlZ2F0b3JBZGRyOiBkZWxBZGRyLlN0cmluZygpLAoJCQkJUGFnaW5hdGlvbjogICAgcGFnZVJlcSwKCQkJfQoKCQkJcmVzLCBlcnIgOj0gcXVlcnlDbGllbnQuRGVsZWdhdG9yRGVsZWdhdGlvbnMoY29udGV4dC5CYWNrZ3JvdW5kKCksIHBhcmFtcykKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0="}})],1),e._v(" "),o("p",[e._v("Under the hood, the "),o("code",[e._v("client.Context")]),e._v(" has a "),o("code",[e._v("Query()")]),e._v(" function used to retrieve the pre-configured node and relay a query to it; the function takes the query fully-qualified service method name as path (in our case: "),o("code",[e._v("/cosmos.staking.v1beta1.Query/Delegations")]),e._v("), and arguments as parameters. It first retrieves the RPC Client (called the "),o("RouterLink",{attrs:{to:"/core/node.html"}},[o("strong",[e._v("node")])]),e._v(") configured by the user to relay this query to, and creates the "),o("code",[e._v("ABCIQueryOptions")]),e._v(" (parameters formatted for the ABCI call). The node is then used to make the ABCI call, "),o("code",[e._v("ABCIQueryWithOptions()")]),e._v(".")],1),e._v(" "),o("p",[e._v("Here is what the code looks like:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoY3R4IENvbnRleHQpIHF1ZXJ5QUJDSShyZXEgYWJjaS5SZXF1ZXN0UXVlcnkpIChhYmNpLlJlc3BvbnNlUXVlcnksIGVycm9yKSB7Cglub2RlLCBlcnIgOj0gY3R4LkdldE5vZGUoKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGFiY2kuUmVzcG9uc2VRdWVyeXt9LCBlcnIKCX0KCglvcHRzIDo9IHJwY2NsaWVudC5BQkNJUXVlcnlPcHRpb25zewoJCUhlaWdodDogY3R4LkhlaWdodCwKCQlQcm92ZTogIHJlcS5Qcm92ZSwKCX0KCglyZXN1bHQsIGVyciA6PSBub2RlLkFCQ0lRdWVyeVdpdGhPcHRpb25zKGNvbnRleHQuQmFja2dyb3VuZCgpLCByZXEuUGF0aCwgcmVxLkRhdGEsIG9wdHMpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gYWJjaS5SZXNwb25zZVF1ZXJ5e30sIGVycgoJfQoKCWlmICFyZXN1bHQuUmVzcG9uc2UuSXNPSygpIHsKCQlyZXR1cm4gYWJjaS5SZXNwb25zZVF1ZXJ5e30sIGVycm9ycy5OZXcocmVzdWx0LlJlc3BvbnNlLkxvZykKCX0KCgkvLyBkYXRhIGZyb20gdHJ1c3RlZCBub2RlIG9yIHN1YnNwYWNlIHF1ZXJ5IGRvZXNuJ3QgbmVlZCB2ZXJpZmljYXRpb24KCWlmICFvcHRzLlByb3ZlIHx8ICFpc1F1ZXJ5U3RvcmVXaXRoUHJvb2YocmVxLlBhdGgpIHsKCQlyZXR1cm4gcmVzdWx0LlJlc3BvbnNlLCBuaWwKCX0KCglyZXR1cm4gcmVzdWx0LlJlc3BvbnNlLCBuaWwKfQ=="}})],1),e._v(" "),o("h2",{attrs:{id:"rpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rpc"}},[e._v("#")]),e._v(" RPC")]),e._v(" "),o("p",[e._v("With a call to "),o("code",[e._v("ABCIQueryWithOptions()")]),e._v(", "),o("code",[e._v("MyQuery")]),e._v(" is received by a "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[e._v("full-node")]),e._v(" which will then process the request. Note that, while the RPC is made to the consensus engine (e.g. Tendermint Core) of a full-node, queries are not part of consensus and will not be broadcasted to the rest of the network, as they do not require anything the network needs to agree upon.")],1),e._v(" "),o("p",[e._v("Read more about ABCI Clients and Tendermint RPC in the Tendermint documentation "),o("a",{attrs:{href:"https://tendermint.com/rpc",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"application-query-handling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-query-handling"}},[e._v("#")]),e._v(" Application Query Handling")]),e._v(" "),o("p",[e._v("When a query is received by the full-node after it has been relayed from the underlying consensus engine, it is now being handled within an environment that understands application-specific types and has a copy of the state. "),o("RouterLink",{attrs:{to:"/core/baseapp.html"}},[o("code",[e._v("baseapp")])]),e._v(" implements the ABCI "),o("RouterLink",{attrs:{to:"/core/baseapp.html#query"}},[o("code",[e._v("Query()")])]),e._v(" function and handles gRPC queries. The query route is parsed, and it it matches the fully-qualified service method name of an existing service method (most likely in one of the modules), then "),o("code",[e._v("baseapp")]),e._v(" will relay the request to the relevant module.")],1),e._v(" "),o("p",[e._v("Apart from gRPC routes, "),o("code",[e._v("baseapp")]),e._v(" also handles four different types of queries: "),o("code",[e._v("app")]),e._v(", "),o("code",[e._v("store")]),e._v(", "),o("code",[e._v("p2p")]),e._v(", and "),o("code",[e._v("custom")]),e._v(". The first three types ("),o("code",[e._v("app")]),e._v(", "),o("code",[e._v("store")]),e._v(", "),o("code",[e._v("p2p")]),e._v(") are purely application-level and thus directly handled by "),o("code",[e._v("baseapp")]),e._v(" or the stores, but the "),o("code",[e._v("custom")]),e._v(" query type requires "),o("code",[e._v("baseapp")]),e._v(" to route the query to a module's "),o("RouterLink",{attrs:{to:"/building-modules/query-services.html#legacy-queriers"}},[e._v("legacy queriers")]),e._v(". To learn more about these queries, please refer to "),o("RouterLink",{attrs:{to:"/core/grpc_rest.html#tendermint-rpc"}},[e._v("this guide")]),e._v(".")],1),e._v(" "),o("p",[e._v("Since "),o("code",[e._v("MyQuery")]),e._v(" has a Protobuf fully-qualified service method name from the "),o("code",[e._v("staking")]),e._v(" module (recall "),o("code",[e._v("/cosmos.staking.v1beta1.Query/Delegations")]),e._v("), "),o("code",[e._v("baseapp")]),e._v(" first parses the path, then uses its own internal "),o("code",[e._v("GRPCQueryRouter")]),e._v(" to retrieve the corresponding gRPC handler, and routes the query to the module. The gRPC handler is responsible for recognizing this query, retrieving the appropriate values from the application's stores, and returning a response. Read more about query services "),o("RouterLink",{attrs:{to:"/building-modules/query-services.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("p",[e._v("Once a result is received from the querier, "),o("code",[e._v("baseapp")]),e._v(" begins the process of returning a response to the user.")]),e._v(" "),o("h2",{attrs:{id:"response"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),o("p",[e._v("Since "),o("code",[e._v("Query()")]),e._v(" is an ABCI function, "),o("code",[e._v("baseapp")]),e._v(" returns the response as an "),o("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#messages",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("abci.ResponseQuery")]),o("OutboundLink")],1),e._v(" type. The "),o("code",[e._v("client.Context")]),e._v(" "),o("code",[e._v("Query()")]),e._v(" routine receives the response and.")]),e._v(" "),o("h3",{attrs:{id:"cli-response"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cli-response"}},[e._v("#")]),e._v(" CLI Response")]),e._v(" "),o("p",[e._v("The application "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[o("code",[e._v("codec")])]),e._v(" is used to unmarshal the response to a JSON and the "),o("code",[e._v("client.Context")]),e._v(" prints the output to the command line, applying any configurations such as the output type (text, JSON or YAML).")],1),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoY3R4IENvbnRleHQpIHByaW50T3V0cHV0KG91dCBbXWJ5dGUpIGVycm9yIHsKCWlmIGN0eC5PdXRwdXRGb3JtYXQgPT0gJnF1b3Q7dGV4dCZxdW90OyB7CgkJLy8gaGFuZGxlIHRleHQgZm9ybWF0IGJ5IGRlY29kaW5nIGFuZCByZS1lbmNvZGluZyBKU09OIGFzIFlBTUwKCQl2YXIgaiBpbnRlcmZhY2V7fQoKCQllcnIgOj0ganNvbi5Vbm1hcnNoYWwob3V0LCAmYW1wO2opCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBlcnIKCQl9CgoJCW91dCwgZXJyID0geWFtbC5NYXJzaGFsKGopCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBlcnIKCQl9Cgl9CgoJd3JpdGVyIDo9IGN0eC5PdXRwdXQKCWlmIHdyaXRlciA9PSBuaWwgewoJCXdyaXRlciA9IG9zLlN0ZG91dAoJfQoKCV8sIGVyciA6PSB3cml0ZXIuV3JpdGUob3V0KQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGVycgoJfQoKCWlmIGN0eC5PdXRwdXRGb3JtYXQgIT0gJnF1b3Q7dGV4dCZxdW90OyB7CgkJLy8gYXBwZW5kIG5ldy1saW5lIGZvciBmb3JtYXRzIGJlc2lkZXMgWUFNTAoJCV8sIGVyciA9IHdyaXRlci5Xcml0ZShbXWJ5dGUoJnF1b3Q7XG4mcXVvdDspKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gZXJyCgkJfQoJfQoKCXJldHVybiBuaWwKfQ=="}})],1),e._v(" "),o("p",[e._v("And that's a wrap! The result of the query is outputted to the console by the CLI.")]),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Read more about "),o("RouterLink",{attrs:{to:"/basics/accounts.html"}},[e._v("accounts")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);