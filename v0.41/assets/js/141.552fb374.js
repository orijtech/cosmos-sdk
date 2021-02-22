(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{879:function(t,e,a){"use strict";a.r(e);var c=a(1),n=Object(c.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("h2",{attrs:{id:"accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[t._v("#")]),t._v(" Accounts")]),t._v(" "),a("p",[t._v("Accounts contain authentication information for a uniquely identified external user of an SDK blockchain,\nincluding public key, address, and account number / sequence number for replay protection. For efficiency,\nsince account balances must also be fetched to pay fees, account structs also store the balance of a user\nas "),a("code",[t._v("sdk.Coins")]),t._v(".")]),t._v(" "),a("p",[t._v("Accounts are exposed externally as an interface, and stored internally as\neither a base account or vesting account. Module clients wishing to add more\naccount types may do so.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("0x01 | Address -> amino(account)")])])]),t._v(" "),a("h3",{attrs:{id:"account-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-interface"}},[t._v("#")]),t._v(" Account Interface")]),t._v(" "),a("p",[t._v("The account interface exposes methods to read and write standard account information.\nNote that all of these methods operate on an account struct confirming to the interface")]),t._v(" "),a("ul",[a("li",[t._v("in order to write the account to the store, the account keeper will need to be used.")])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBY2NvdW50IGludGVyZmFjZSB7CiAgR2V0QWRkcmVzcygpIEFjY0FkZHJlc3MKICBTZXRBZGRyZXNzKEFjY0FkZHJlc3MpCgogIEdldFB1YktleSgpIFB1YktleQogIFNldFB1YktleShQdWJLZXkpCgogIEdldEFjY291bnROdW1iZXIoKSB1aW50NjQKICBTZXRBY2NvdW50TnVtYmVyKHVpbnQ2NCkKCiAgR2V0U2VxdWVuY2UoKSB1aW50NjQKICBTZXRTZXF1ZW5jZSh1aW50NjQpCgogIEdldENvaW5zKCkgQ29pbnMKICBTZXRDb2lucyhDb2lucykKfQo="}}),t._v(" "),a("h4",{attrs:{id:"base-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-account"}},[t._v("#")]),t._v(" Base Account")]),t._v(" "),a("p",[t._v("A base account is the simplest and most common account type, which just stores all requisite\nfields directly in a struct.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCYXNlQWNjb3VudCBzdHJ1Y3QgewogIEFkZHJlc3MgICAgICAgQWNjQWRkcmVzcwogIENvaW5zICAgICAgICAgQ29pbnMKICBQdWJLZXkgICAgICAgIFB1YktleQogIEFjY291bnROdW1iZXIgdWludDY0CiAgU2VxdWVuY2UgICAgICB1aW50NjQKfQo="}}),t._v(" "),a("h3",{attrs:{id:"vesting-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vesting-account"}},[t._v("#")]),t._v(" Vesting Account")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/modules/auth/vesting.html"}},[t._v("Vesting")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);