(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{691:function(e,a,t){"use strict";t.r(a);var o=t(1),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-010-modular-antehandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-010-modular-antehandler"}},[e._v("#")]),e._v(" ADR 010: Modular AnteHandler")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("2019 Aug 31: Initial draft")])]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("The current AnteHandler design allows users to either use the default AnteHandler provided in "),t("code",[e._v("x/auth")]),e._v(" or to build their own AnteHandler from scratch. Ideally AnteHandler functionality is split into multiple, modular functions that can be chained together along with custom ante-functions so that users do not have to rewrite common antehandler logic when they want to implement custom behavior.")]),e._v(" "),t("p",[e._v("For example, let's say a user wants to implement some custom signature verification logic. In the current codebase, the user would have to write their own Antehandler from scratch largely reimplementing much of the same code and then set their own custom, monolithic antehandler in the baseapp. Instead, we would like to allow users to specify custom behavior when necessary and combine them with default ante-handler functionality in a way that is as modular and flexible as possible.")]),e._v(" "),t("h2",{attrs:{id:"proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}},[e._v("#")]),e._v(" Proposals")]),e._v(" "),t("h3",{attrs:{id:"per-module-antehandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#per-module-antehandler"}},[e._v("#")]),e._v(" Per-Module AnteHandler")]),e._v(" "),t("p",[e._v("One approach is to use the "),t("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/types/module",target:"_blank",rel:"noopener noreferrer"}},[e._v("ModuleManager"),t("OutboundLink")],1),e._v(" and have each module implement its own antehandler if it requires custom antehandler logic. The ModuleManager can then be passed in an AnteHandler order in the same way it has an order for BeginBlockers and EndBlockers. The ModuleManager returns a single AnteHandler function that will take in a tx and run each module's "),t("code",[e._v("AnteHandle")]),e._v(" in the specified order. The module manager's AnteHandler is set as the baseapp's AnteHandler.")]),e._v(" "),t("p",[e._v("Pros:")]),e._v(" "),t("ol",[t("li",[e._v("Simple to implement")]),e._v(" "),t("li",[e._v("Utilizes the existing ModuleManager architecture")])]),e._v(" "),t("p",[e._v("Cons:")]),e._v(" "),t("ol",[t("li",[e._v("Improves granularity but still cannot get more granular than a per-module basis. e.g. If auth's "),t("code",[e._v("AnteHandle")]),e._v(" function is in charge of validating memo and signatures, users cannot swap the signature-checking functionality while keeping the rest of auth's "),t("code",[e._v("AnteHandle")]),e._v(" functionality.")]),e._v(" "),t("li",[e._v('Module AnteHandler are run one after the other. There is no way for one AnteHandler to wrap or "decorate" another.')])]),e._v(" "),t("h3",{attrs:{id:"decorator-pattern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decorator-pattern"}},[e._v("#")]),e._v(" Decorator Pattern")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/iov-one/weave",target:"_blank",rel:"noopener noreferrer"}},[e._v("weave project"),t("OutboundLink")],1),e._v(" achieves AnteHandler modularity through the use of a decorator pattern. The interface is designed as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRGVjb3JhdG9yIHdyYXBzIGEgSGFuZGxlciB0byBwcm92aWRlIGNvbW1vbiBmdW5jdGlvbmFsaXR5Ci8vIGxpa2UgYXV0aGVudGljYXRpb24sIG9yIGZlZS1oYW5kbGluZywgdG8gbWFueSBIYW5kbGVycwp0eXBlIERlY29yYXRvciBpbnRlcmZhY2UgewoJQ2hlY2soY3R4IENvbnRleHQsIHN0b3JlIEtWU3RvcmUsIHR4IFR4LCBuZXh0IENoZWNrZXIpICgqQ2hlY2tSZXN1bHQsIGVycm9yKQoJRGVsaXZlcihjdHggQ29udGV4dCwgc3RvcmUgS1ZTdG9yZSwgdHggVHgsIG5leHQgRGVsaXZlcmVyKSAoKkRlbGl2ZXJSZXN1bHQsIGVycm9yKQp9Cg=="}}),e._v(" "),t("p",[e._v("Each decorator works like a modularized SDK antehandler function, but it can take in a "),t("code",[e._v("next")]),e._v(" argument that may be another decorator or a Handler (which does not take in a next argument). These decorators can be chained together, one decorator being passed in as the "),t("code",[e._v("next")]),e._v(" argument of the previous decorator in the chain. The chain ends in a Router which can take a tx and route to the appropriate msg handler.")]),e._v(" "),t("p",[e._v("A key benefit of this approach is that one Decorator can wrap its internal logic around the next Checker/Deliverer. A weave Decorator may do the following:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRXhhbXBsZSBEZWNvcmF0b3IncyBEZWxpdmVyIGZ1bmN0aW9uCmZ1bmMgKGV4YW1wbGUgRGVjb3JhdG9yKSBEZWxpdmVyKGN0eCBDb250ZXh0LCBzdG9yZSBLVlN0b3JlLCB0eCBUeCwgbmV4dCBEZWxpdmVyZXIpIHsKICAgIC8vIERvIHNvbWUgcHJlLXByb2Nlc3NpbmcgbG9naWMKCiAgICByZXMsIGVyciA6PSBuZXh0LkRlbGl2ZXIoY3R4LCBzdG9yZSwgdHgpCgogICAgLy8gRG8gc29tZSBwb3N0LXByb2Nlc3NpbmcgbG9naWMgZ2l2ZW4gdGhlIHJlc3VsdCBhbmQgZXJyb3IKfQo="}}),e._v(" "),t("p",[e._v("Pros:")]),e._v(" "),t("ol",[t("li",[e._v("Weave Decorators can wrap over the next decorator/handler in the chain. The ability to both pre-process and post-process may be useful in certain settings.")]),e._v(" "),t("li",[e._v("Provides a nested modular structure that isn't possible in the solution above, while also allowing for a linear one-after-the-other structure like the solution above.")])]),e._v(" "),t("p",[e._v("Cons:")]),e._v(" "),t("ol",[t("li",[e._v("It is hard to understand at first glance the state updates that would occur after a Decorator runs given the "),t("code",[e._v("ctx")]),e._v(", "),t("code",[e._v("store")]),e._v(", and "),t("code",[e._v("tx")]),e._v(". A Decorator can have an arbitrary number of nested Decorators being called within its function body, each possibly doing some pre- and post-processing before calling the next decorator on the chain. Thus to understand what a Decorator is doing, one must also understand what every other decorator further along the chain is also doing. This can get quite complicated to understand. A linear, one-after-the-other approach while less powerful, may be much easier to reason about.")])]),e._v(" "),t("h3",{attrs:{id:"chained-micro-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chained-micro-functions"}},[e._v("#")]),e._v(" Chained Micro-Functions")]),e._v(" "),t("p",[e._v("The benefit of Weave's approach is that the Decorators can be very concise, which when chained together allows for maximum customizability. However, the nested structure can get quite complex and thus hard to reason about.")]),e._v(" "),t("p",[e._v('Another approach is to split the AnteHandler functionality into tightly scoped "micro-functions", while preserving the one-after-the-other ordering that would come from the ModuleManager approach.')]),e._v(" "),t("p",[e._v("We can then have a way to chain these micro-functions so that they run one after the other. Modules may define multiple ante micro-functions and then also provide a default per-module AnteHandler that implements a default, suggested order for these micro-functions.")]),e._v(" "),t("p",[e._v("Users can order the AnteHandlers easily by simply using the ModuleManager. The ModuleManager will take in a list of AnteHandlers and return a single AnteHandler that runs each AnteHandler in the order of the list provided. If the user is comfortable with the default ordering of each module, this is as simple as providing a list with each module's antehandler (exactly the same as BeginBlocker and EndBlocker).")]),e._v(" "),t("p",[e._v("If however, users wish to change the order or add, modify, or delete ante micro-functions in anyway; they can always define their own ante micro-functions and add them explicitly to the list that gets passed into module manager.")]),e._v(" "),t("h4",{attrs:{id:"default-workflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-workflow"}},[e._v("#")]),e._v(" Default Workflow:")]),e._v(" "),t("p",[e._v("This is an example of a user's AnteHandler if they choose not to make any custom micro-functions.")]),e._v(" "),t("h5",{attrs:{id:"sdk-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sdk-code"}},[e._v("#")]),e._v(" SDK code:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2hhaW5zIHRvZ2V0aGVyIGEgbGlzdCBvZiBBbnRlSGFuZGxlciBtaWNyby1mdW5jdGlvbnMgdGhhdCBnZXQgcnVuIG9uZSBhZnRlciB0aGUgb3RoZXIuCi8vIFJldHVybmVkIEFudGVIYW5kbGVyIHdpbGwgYWJvcnQgb24gZmlyc3QgZXJyb3IuCmZ1bmMgQ2hhaW5lcihvcmRlciBbXUFudGVIYW5kbGVyKSBBbnRlSGFuZGxlciB7CiAgICByZXR1cm4gZnVuYyhjdHggQ29udGV4dCwgdHggVHgsIHNpbXVsYXRlIGJvb2wpIChuZXdDdHggQ29udGV4dCwgZXJyIGVycm9yKSB7CiAgICAgICAgZm9yIF8sIGFudGUgOj0gcmFuZ2Ugb3JkZXIgewogICAgICAgICAgICBjdHgsIGVyciA6PSBhbnRlKGN0eCwgdHgsIHNpbXVsYXRlKQogICAgICAgICAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICAgICAgICAgIHJldHVybiBjdHgsIGVycgogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHJldHVybiBjdHgsIGVycgogICAgfQp9Cg=="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQW50ZUhhbmRsZXIgbWljcm8tZnVuY3Rpb24gdG8gdmVyaWZ5IHNpZ25hdHVyZXMKZnVuYyBWZXJpZnlTaWduYXR1cmVzKGN0eCBDb250ZXh0LCB0eCBUeCwgc2ltdWxhdGUgYm9vbCkgKG5ld0N0eCBDb250ZXh0LCBlcnIgZXJyb3IpIHsKICAgIC8vIHZlcmlmeSBzaWduYXR1cmVzCiAgICAvLyBSZXR1cm5zIEludmFsaWRTaWduYXR1cmUgUmVzdWx0IGFuZCBhYm9ydD10cnVlIGlmIHNpZ3MgaW52YWxpZAogICAgLy8gUmV0dXJuIE9LIHJlc3VsdCBhbmQgYWJvcnQ9ZmFsc2UgaWYgc2lncyBhcmUgdmFsaWQKfQoKLy8gQW50ZUhhbmRsZXIgbWljcm8tZnVuY3Rpb24gdG8gdmFsaWRhdGUgbWVtbwpmdW5jIFZhbGlkYXRlTWVtbyhjdHggQ29udGV4dCwgdHggVHgsIHNpbXVsYXRlIGJvb2wpIChuZXdDdHggQ29udGV4dCwgZXJyIGVycm9yKSB7CiAgICAvLyB2YWxpZGF0ZSBtZW1vCn0KCi8vIEF1dGggZGVmaW5lcyBpdHMgb3duIGRlZmF1bHQgYW50ZS1oYW5kbGVyIGJ5IGNoYWluaW5nIGl0cyBtaWNyby1mdW5jdGlvbnMgaW4gYSByZWNvbW1lbmRlZCBvcmRlcgpBdXRoTW9kdWxlQW50ZUhhbmRsZXIgOj0gQ2hhaW5lcihbXUFudGVIYW5kbGVye1ZlcmlmeVNpZ25hdHVyZXMsIFZhbGlkYXRlTWVtb30pCg=="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRGlzdHJpYnV0aW9uIG1pY3JvLWZ1bmN0aW9uIHRvIGRlZHVjdCBmZWVzIGZyb20gdHgKZnVuYyBEZWR1Y3RGZWVzKGN0eCBDb250ZXh0LCB0eCBUeCwgc2ltdWxhdGUgYm9vbCkgKG5ld0N0eCBDb250ZXh0LCBlcnIgZXJyb3IpIHsKICAgIC8vIERlZHVjdCBmZWVzIGZyb20gdHgKICAgIC8vIEFib3J0IGlmIGluc3VmZmljaWVudCBmdW5kcyBpbiBhY2NvdW50IHRvIHBheSBmb3IgZmVlcwp9CgovLyBEaXN0cmlidXRpb24gbWljcm8tZnVuY3Rpb24gdG8gY2hlY2sgaWYgZmVlcyAmZ3Q7IG1lbXBvb2wgcGFyYW1ldGVyCmZ1bmMgQ2hlY2tNZW1wb29sRmVlcyhjdHggQ29udGV4dCwgdHggVHgsIHNpbXVsYXRlIGJvb2wpIChuZXdDdHggQ29udGV4dCwgZXJyIGVycm9yKSB7CiAgICAvLyBJZiBDaGVja1R4OiBBYm9ydCBpZiB0aGUgZmVlcyBhcmUgbGVzcyB0aGFuIHRoZSBtZW1wb29sJ3MgbWluRmVlIHBhcmFtZXRlcgp9CgovLyBEaXN0cmlidXRpb24gZGVmaW5lcyBpdHMgb3duIGRlZmF1bHQgYW50ZS1oYW5kbGVyIGJ5IGNoYWluaW5nIGl0cyBtaWNyby1mdW5jdGlvbnMgaW4gYSByZWNvbW1lbmRlZCBvcmRlcgpEaXN0ck1vZHVsZUFudGVIYW5kbGVyIDo9IENoYWluZXIoW11BbnRlSGFuZGxlcntDaGVja01lbXBvb2xGZWVzLCBEZWR1Y3RGZWVzfSkK"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNb2R1bGVNYW5hZ2VyIHN0cnVjdCB7CiAgICAvLyBvdGhlciBmaWVsZHMKICAgIEFudGVIYW5kbGVyT3JkZXIgW11BbnRlSGFuZGxlcgp9CgpmdW5jIChtbSBNb2R1bGVNYW5hZ2VyKSBHZXRBbnRlSGFuZGxlcigpIEFudGVIYW5kbGVyIHsKICAgIHJldHVuIENoYWluZXIobW0uQW50ZUhhbmRsZXJPcmRlcikKfQo="}}),e._v(" "),t("h5",{attrs:{id:"user-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-code"}},[e._v("#")]),e._v(" User Code:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTm90ZTogU2luY2UgdXNlciBpcyBub3QgbWFraW5nIGFueSBjdXN0b20gbW9kaWZpY2F0aW9ucywgd2UgY2FuIGp1c3QgU2V0QW50ZUhhbmRsZXJPcmRlciB3aXRoIHRoZSBkZWZhdWx0IEFudGVIYW5kbGVycyBwcm92aWRlZCBieSBlYWNoIG1vZHVsZSBpbiBvdXIgcHJlZmVycmVkIG9yZGVyCm1vZHVsZU1hbmFnZXIuU2V0QW50ZUhhbmRsZXJPcmRlcihbXUFudGVIYW5kbGVyKEF1dGhNb2R1bGVBbnRlSGFuZGxlciwgRGlzdHJNb2R1bGVBbnRlSGFuZGxlcikpCgphcHAuU2V0QW50ZUhhbmRsZXIobW0uR2V0QW50ZUhhbmRsZXIoKSkK"}}),e._v(" "),t("h4",{attrs:{id:"custom-workflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-workflow"}},[e._v("#")]),e._v(" Custom Workflow")]),e._v(" "),t("p",[e._v("This is an example workflow for a user that wants to implement custom antehandler logic. In this example, the user wants to implement custom signature verification and change the order of antehandler so that validate memo runs before signature verification.")]),e._v(" "),t("h5",{attrs:{id:"user-code-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-code-2"}},[e._v("#")]),e._v(" User Code")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVXNlciBjYW4gaW1wbGVtZW50IHRoZWlyIG93biBjdXN0b20gc2lnbmF0dXJlIHZlcmlmaWNhdGlvbiBhbnRlaGFuZGxlciBtaWNyby1mdW5jdGlvbgpmdW5jIEN1c3RvbVNpZ1ZlcmlmeShjdHggQ29udGV4dCwgdHggVHgsIHNpbXVsYXRlIGJvb2wpIChuZXdDdHggQ29udGV4dCwgZXJyIGVycm9yKSB7CiAgICAvLyBkbyBzb21lIGN1c3RvbSBzaWduYXR1cmUgdmVyaWZpY2F0aW9uIGxvZ2ljCn0K"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWljcm8tZnVuY3Rpb25zIGFsbG93IHVzZXJzIHRvIGNoYW5nZSBvcmRlciBvZiB3aGVuIHRoZXkgZ2V0IGV4ZWN1dGVkLCBhbmQgc3dhcCBvdXQgZGVmYXVsdCBhbnRlLWZ1bmN0aW9uYWxpdHkgd2l0aCB0aGVpciBvd24gY3VzdG9tIGxvZ2ljLgovLyBOb3RlIHRoYXQgdXNlcnMgY2FuIHN0aWxsIGNoYWluIHRoZSBkZWZhdWx0IGRpc3RyaWJ1dGlvbiBtb2R1bGUgaGFuZGxlciwgYW5kIGF1dGggbWljcm8tZnVuY3Rpb24gYWxvbmcgd2l0aCB0aGVpciBjdXN0b20gYW50ZSBmdW5jdGlvbgptb2R1bGVNYW5hZ2VyLlNldEFudGVIYW5kbGVyT3JkZXIoW11BbnRlSGFuZGxlcihWYWxpZGF0ZU1lbW8sIEN1c3RvbVNpZ1ZlcmlmeSwgRGlzdHJNb2R1bGVBbnRlSGFuZGxlcikpCg=="}}),e._v(" "),t("p",[e._v("Pros:")]),e._v(" "),t("ol",[t("li",[e._v("Allows for ante functionality to be as modular as possible.")]),e._v(" "),t("li",[e._v("For users that do not need custom ante-functionality, there is little difference between how antehandlers work and how BeginBlock and EndBlock work in ModuleManager.")]),e._v(" "),t("li",[e._v("Still easy to understand")])]),e._v(" "),t("p",[e._v("Cons:")]),e._v(" "),t("ol",[t("li",[e._v("Cannot wrap antehandlers with decorators like you can with Weave.")])]),e._v(" "),t("h3",{attrs:{id:"simple-decorators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-decorators"}},[e._v("#")]),e._v(" Simple Decorators")]),e._v(" "),t("p",[e._v("This approach takes inspiration from Weave's decorator design while trying to minimize the number of breaking changes to the SDK and maximizing simplicity. Like Weave decorators, this approach allows one "),t("code",[e._v("AnteDecorator")]),e._v(" to wrap the next AnteHandler to do pre- and post-processing on the result. This is useful since decorators can do defer/cleanups after an AnteHandler returns as well as perform some setup beforehand. Unlike Weave decorators, these "),t("code",[e._v("AnteDecorator")]),e._v(" functions can only wrap over the AnteHandler rather than the entire handler execution path. This is deliberate as we want decorators from different modules to perform authentication/validation on a "),t("code",[e._v("tx")]),e._v(". However, we do not want decorators being capable of wrapping and modifying the results of a "),t("code",[e._v("MsgHandler")]),e._v(".")]),e._v(" "),t("p",[e._v("In addition, this approach will not break any core SDK API's. Since we preserve the notion of an AnteHandler and still set a single AnteHandler in baseapp, the decorator is simply an additional approach available for users that desire more customization. The API of modules (namely "),t("code",[e._v("x/auth")]),e._v(") may break with this approach, but the core API remains untouched.")]),e._v(" "),t("p",[e._v("Allow Decorator interface that can be chained together to create an SDK AnteHandler.")]),e._v(" "),t("p",[e._v("This allows users to choose between implementing an AnteHandler by themselves and setting it in the baseapp, or use the decorator pattern to chain their custom decorators with SDK provided decorators in the order they wish.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQW4gQW50ZURlY29yYXRvciB3cmFwcyBhbiBBbnRlSGFuZGxlciwgYW5kIGNhbiBkbyBwcmUtIGFuZCBwb3N0LXByb2Nlc3Npbmcgb24gdGhlIG5leHQgQW50ZUhhbmRsZXIKdHlwZSBBbnRlRGVjb3JhdG9yIGludGVyZmFjZSB7CiAgICBBbnRlSGFuZGxlKGN0eCBDb250ZXh0LCB0eCBUeCwgc2ltdWxhdGUgYm9vbCwgbmV4dCBBbnRlSGFuZGxlcikgKG5ld0N0eCBDb250ZXh0LCBlcnIgZXJyb3IpCn0K"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2hhaW5BbnRlRGVjb3JhdG9ycyB3aWxsIHJlY3Vyc2l2ZWx5IGxpbmsgYWxsIG9mIHRoZSBBbnRlRGVjb3JhdG9ycyBpbiB0aGUgY2hhaW4gYW5kIHJldHVybiBhIGZpbmFsIEFudGVIYW5kbGVyIGZ1bmN0aW9uCi8vIFRoaXMgaXMgZG9uZSB0byBwcmVzZXJ2ZSB0aGUgYWJpbGl0eSB0byBzZXQgYSBzaW5nbGUgQW50ZUhhbmRsZXIgZnVuY3Rpb24gaW4gdGhlIGJhc2VhcHAuCmZ1bmMgQ2hhaW5BbnRlRGVjb3JhdG9ycyhjaGFpbiAuLi5BbnRlRGVjb3JhdG9yKSBBbnRlSGFuZGxlciB7CiAgICBpZiBsZW4oY2hhaW4pID09IDEgewogICAgICAgIHJldHVybiBmdW5jKGN0eCBDb250ZXh0LCB0eCBUeCwgc2ltdWxhdGUgYm9vbCkgewogICAgICAgICAgICBjaGFpblswXS5BbnRlSGFuZGxlKGN0eCwgdHgsIHNpbXVsYXRlLCBuaWwpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuIGZ1bmMoY3R4IENvbnRleHQsIHR4IFR4LCBzaW11bGF0ZSBib29sKSB7CiAgICAgICAgY2hhaW5bMF0uQW50ZUhhbmRsZShjdHgsIHR4LCBzaW11bGF0ZSwgQ2hhaW5BbnRlRGVjb3JhdG9ycyhjaGFpblsxOl0pKQogICAgfQp9Cg=="}}),e._v(" "),t("h4",{attrs:{id:"example-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-code"}},[e._v("#")]),e._v(" Example Code")]),e._v(" "),t("p",[e._v("Define AnteDecorator functions")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2V0dXAgR2FzTWV0ZXIsIGNhdGNoIE91dE9mR2FzUGFuaWMgYW5kIGhhbmRsZSBhcHByb3ByaWF0ZWx5CnR5cGUgU2V0VXBDb250ZXh0RGVjb3JhdG9yIHN0cnVjdHt9CgpmdW5jIChzdWQgU2V0VXBDb250ZXh0RGVjb3JhdG9yKSBBbnRlSGFuZGxlKGN0eCBDb250ZXh0LCB0eCBUeCwgc2ltdWxhdGUgYm9vbCwgbmV4dCBBbnRlSGFuZGxlcikgKG5ld0N0eCBDb250ZXh0LCBlcnIgZXJyb3IpIHsKICAgIGN0eC5HYXNNZXRlciA9IE5ld0dhc01ldGVyKHR4LkdhcykKCiAgICBkZWZlciBmdW5jKCkgewogICAgICAgIC8vIHJlY292ZXIgZnJvbSBPdXRPZkdhcyBwYW5pYyBhbmQgaGFuZGxlIGFwcHJvcHJpYXRlbHkKICAgIH0KCiAgICByZXR1cm4gbmV4dChjdHgsIHR4LCBzaW11bGF0ZSkKfQoKLy8gU2lnbmF0dXJlIFZlcmlmaWNhdGlvbiBkZWNvcmF0b3IuIFZlcmlmeSBTaWduYXR1cmVzIGFuZCBtb3ZlIG9uCnR5cGUgU2lnVmVyaWZ5RGVjb3JhdG9yIHN0cnVjdHt9CgpmdW5jIChzdmQgU2lnVmVyaWZ5RGVjb3JhdG9yKSBBbnRlSGFuZGxlKGN0eCBDb250ZXh0LCB0eCBUeCwgc2ltdWxhdGUgYm9vbCwgbmV4dCBBbnRlSGFuZGxlcikgKG5ld0N0eCBDb250ZXh0LCBlcnIgZXJyb3IpIHsKICAgIC8vIHZlcmlmeSBzaWdzLiBSZXR1cm4gZXJyb3IgaWYgaW52YWxpZAoKICAgIC8vIGNhbGwgbmV4dCBhbnRlaGFuZGxlciBpZiBzaWdzIG9rCiAgICByZXR1cm4gbmV4dChjdHgsIHR4LCBzaW11bGF0ZSkKfQoKLy8gVXNlci1kZWZpbmVkIERlY29yYXRvci4gQ2FuIGNob29zZSB0byBwcmUtIGFuZCBwb3N0LXByb2Nlc3Mgb24gQW50ZUhhbmRsZXIKdHlwZSBVc2VyRGVmaW5lZERlY29yYXRvciBzdHJ1Y3R7CiAgICAvLyBjdXN0b20gZmllbGRzCn0KCmZ1bmMgKHVkZCBVc2VyRGVmaW5lZERlY29yYXRvcikgQW50ZUhhbmRsZShjdHggQ29udGV4dCwgdHggVHgsIHNpbXVsYXRlIGJvb2wsIG5leHQgQW50ZUhhbmRsZXIpIChuZXdDdHggQ29udGV4dCwgZXJyIGVycm9yKSB7CiAgICAvLyBwcmUtcHJvY2Vzc2luZyBsb2dpYwoKICAgIGN0eCwgZXJyID0gbmV4dChjdHgsIHR4LCBzaW11bGF0ZSkKCiAgICAvLyBwb3N0LXByb2Nlc3NpbmcgbG9naWMKfQo="}}),e._v(" "),t("p",[e._v("Link AnteDecorators to create a final AnteHandler. Set this AnteHandler in baseapp.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlIGZpbmFsIGFudGVoYW5kbGVyIGJ5IGNoYWluaW5nIHRoZSBkZWNvcmF0b3JzIHRvZ2V0aGVyCmFudGVoYW5kbGVyIDo9IENoYWluQW50ZURlY29yYXRvcnMoTmV3U2V0VXBDb250ZXh0RGVjb3JhdG9yKCksIE5ld1NpZ1ZlcmlmeURlY29yYXRvcigpLCBOZXdVc2VyRGVmaW5lZERlY29yYXRvcigpKQoKLy8gU2V0IGNoYWluZWQgQW50ZWhhbmRsZXIgaW4gdGhlIGJhc2VhcHAKYmFwcC5TZXRBbnRlSGFuZGxlcihhbnRlaGFuZGxlcikK"}}),e._v(" "),t("p",[e._v("Pros:")]),e._v(" "),t("ol",[t("li",[e._v("Allows one decorator to pre- and post-process the next AnteHandler, similar to the Weave design.")]),e._v(" "),t("li",[e._v("Do not need to break baseapp API. Users can still set a single AnteHandler if they choose.")])]),e._v(" "),t("p",[e._v("Cons:")]),e._v(" "),t("ol",[t("li",[e._v("Decorator pattern may have a deeply nested structure that is hard to understand, this is mitigated by having the decorator order explicitly listed in the "),t("code",[e._v("ChainAnteDecorators")]),e._v(" function.")]),e._v(" "),t("li",[e._v("Does not make use of the ModuleManager design. Since this is already being used for BeginBlocker/EndBlocker, this proposal seems unaligned with that design pattern.")])]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("blockquote",[t("p",[e._v("Accepted Simple Decorators approach")])]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("p",[e._v("Since pros and cons are written for each approach, it is omitted from this section")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/4572",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4572"),t("OutboundLink")],1),e._v(":  Modular AnteHandler Issue")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/4583",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4582"),t("OutboundLink")],1),e._v(": Initial Implementation of Per-Module AnteHandler Approach")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/iov-one/weave/blob/master/handler.go#L35",target:"_blank",rel:"noopener noreferrer"}},[e._v("Weave Decorator Code"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://vimeo.com/showcase/6189877",target:"_blank",rel:"noopener noreferrer"}},[e._v("Weave Design Videos"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);