(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{610:function(e,t,o){e.exports=o.p+"assets/img/simpleMerkleTree.35a69100.png"},611:function(e,t,o){e.exports=o.p+"assets/img/existProof.16d0e856.png"},612:function(e,t,o){e.exports=o.p+"assets/img/absence1.9fe56931.png"},613:function(e,t,o){e.exports=o.p+"assets/img/absence2.d0d2b33b.png"},614:function(e,t,o){e.exports=o.p+"assets/img/absence3.c3f6007e.png"},615:function(e,t,o){e.exports=o.p+"assets/img/substoreProof.10b5e7ad.png"},616:function(e,t,o){e.exports=o.p+"assets/img/commitValidation.dd75cbe3.png"},617:function(e,t,o){e.exports=o.p+"assets/img/updateValidatorToHeight.6ff55d6c.png"},794:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"specifications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[e._v("#")]),e._v(" Specifications")]),e._v(" "),s("p",[e._v("This specification describes how to implement the LCD. LCD supports modular APIs. Currently, only\nICS0 (TendermintAPI), ICS1 (Key API) and ICS20 (Token API) are supported. Later, if necessary, more\nAPIs can be included.")]),e._v(" "),s("h2",{attrs:{id:"build-and-verify-proof-of-abci-states"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-and-verify-proof-of-abci-states"}},[e._v("#")]),e._v(" Build and Verify Proof of ABCI States")]),e._v(" "),s("p",[e._v("As we all know,  storage of cosmos-sdk based application contains multi-substores. Each substore is\nimplemented by a IAVL store. These substores are organized by simple Merkle tree. To build the tree,\nwe need to extract name, height and store root hash from these substores to build a set of simple\nMerkle leaf nodes, then calculate hash from leaf nodes to root. The root hash of the simple Merkle\ntree is the AppHash which will be included in block header.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(610),alt:"Simple Merkle Tree"}})]),e._v(" "),s("p",[e._v("As we have discussed in LCD trust-propagation,\nthe AppHash can be verified by checking voting power against a trusted validator set. Here we just\nneed to build proof from ABCI state to AppHash. The proof contains two parts:")]),e._v(" "),s("ul",[s("li",[e._v("IAVL proof")]),e._v(" "),s("li",[e._v("Substore to AppHash proof")])]),e._v(" "),s("h3",{attrs:{id:"iavl-proof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iavl-proof"}},[e._v("#")]),e._v(" IAVL Proof")]),e._v(" "),s("p",[e._v("The proof has two types: existence proof and absence proof. If the query key exists in the IAVL\nstore, then it returns key-value and its existence proof. On the other hand, if the key doesn't\nexist, then it only returns absence proof which can demonstrate the key definitely doesn't exist.")]),e._v(" "),s("h3",{attrs:{id:"iavl-existence-proof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iavl-existence-proof"}},[e._v("#")]),e._v(" IAVL Existence Proof")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDb21taXRJRCBzdHJ1Y3QgewogICAgVmVyc2lvbiBpbnQ2NAogICAgSGFzaCAgICBbXWJ5dGUKfQoKdHlwZSBzdG9yZUNvcmUgc3RydWN0IHsKICAgIENvbW1pdElEIENvbW1pdElECn0KCnR5cGUgTXVsdGlTdG9yZUNvbW1pdElEIHN0cnVjdCB7CiAgICBOYW1lIHN0cmluZwogICAgQ29yZSBzdG9yZUNvcmUKfQoKdHlwZSBwcm9vZklubmVyTm9kZSBzdHJ1Y3QgewogICAgSGVpZ2h0ICBpbnQ4CiAgICBTaXplICAgIGludDY0CiAgICBWZXJzaW9uIGludDY0CiAgICBMZWZ0ICAgIFtdYnl0ZQogICAgUmlnaHQgICBbXWJ5dGUKfQoKdHlwZSBLZXlFeGlzdHNQcm9vZiBzdHJ1Y3QgewogICAgTXVsdGlTdG9yZUNvbW1pdEluZm8gW11NdWx0aVN0b3JlQ29tbWl0SUQgLy9BbGwgc3Vic3RvcmUgY29tbWl0SURzCiAgICBTdG9yZU5hbWUgc3RyaW5nIC8vQ3VycmVudCBzdWJzdG9yZSBuYW1lCiAgICBIZWlnaHQgIGludDY0IC8vVGhlIGNvbW1pdCBoZWlnaHQgb2YgY3VycmVudCBzdWJzdG9yZQogICAgUm9vdEhhc2ggY21uLkhleEJ5dGVzIC8vVGhlIHJvb3QgaGFzaCBvZiB0aGlzIElBVkwgdHJlZQogICAgVmVyc2lvbiAgaW50NjQgLy9UaGUgdmVyc2lvbiBvZiB0aGUga2V5LXZhbHVlIGluIHRoaXMgSUFWTCB0cmVlCiAgICBJbm5lck5vZGVzIFtdcHJvb2ZJbm5lck5vZGUgLy9UaGUgcGF0aCBmcm9tIHRvIHJvb3Qgbm9kZSB0byBrZXktdmFsdWUgbGVhZiBub2RlCn0K"}}),e._v(" "),s("p",[e._v("The data structure of exist proof is shown as above. The process to build and verify existence proof\nis shown as follows:")]),e._v(" "),s("p",[s("img",{attrs:{src:o(611),alt:"Exist Proof"}})]),e._v(" "),s("p",[e._v("Steps to build proof:")]),e._v(" "),s("ul",[s("li",[e._v("Access the IAVL tree from the root node.")]),e._v(" "),s("li",[e._v("Record the visited nodes in InnerNodes,")]),e._v(" "),s("li",[e._v("Once the target leaf node is found, assign leaf node version to proof version")]),e._v(" "),s("li",[e._v("Assign the current IAVL tree height to proof height")]),e._v(" "),s("li",[e._v("Assign the current IAVL tree rootHash to proof rootHash")]),e._v(" "),s("li",[e._v("Assign the current substore name to proof StoreName")]),e._v(" "),s("li",[e._v("Read multistore commitInfo from db by height and assign it to proof StoreCommitInfo")])]),e._v(" "),s("p",[e._v("Steps to verify proof:")]),e._v(" "),s("ul",[s("li",[e._v("Build leaf node with key, value and proof version.")]),e._v(" "),s("li",[e._v("Calculate leaf node hash")]),e._v(" "),s("li",[e._v("Assign the hash to the first innerNode's rightHash, then calculate first innerNode hash")]),e._v(" "),s("li",[e._v("Propagate the hash calculation process. If prior innerNode is the left child of next innerNode, then assign the prior innerNode hash to the left hash of next innerNode. Otherwise, assign the prior innerNode hash to the right hash of next innerNode.")]),e._v(" "),s("li",[e._v("The hash of last innerNode should be equal to the rootHash of this proof. Otherwise, the proof is invalid.")])]),e._v(" "),s("h3",{attrs:{id:"iavl-absence-proof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iavl-absence-proof"}},[e._v("#")]),e._v(" IAVL Absence Proof")]),e._v(" "),s("p",[e._v("As we all know, all IAVL leaf nodes are sorted by the key of each leaf nodes. So we can calculate\nthe position of the target key in the whole key set of this IAVL tree. As shown below, we can find\nout the left key and the right key. If we can demonstrate that both left key and right key\ndefinitely exist, and they are adjacent nodes. Thus the target key definitely doesn't exist.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(612),alt:"Absence Proof1"}})]),e._v(" "),s("p",[e._v("If the target key is larger than the right most leaf node or less than the left most key, then the\ntarget key definitely doesn't exist.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(613),alt:"Absence Proof2"}}),s("img",{attrs:{src:o(614),alt:"Absence Proof3"}})]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBwcm9vZkxlYWZOb2RlIHN0cnVjdCB7CiAgICBLZXlCeXRlcyAgIGNtbi5IZXhCeXRlcwogICAgVmFsdWVCeXRlcyBjbW4uSGV4Qnl0ZXMKICAgIFZlcnNpb24gICAgaW50NjQKfQoKdHlwZSBwYXRoV2l0aE5vZGUgc3RydWN0IHsKICAgIElubmVyTm9kZXMgW11wcm9vZklubmVyTm9kZQogICAgTm9kZSBwcm9vZkxlYWZOb2RlCn0KCnR5cGUgS2V5QWJzZW50UHJvb2Ygc3RydWN0IHsKICAgIE11bHRpU3RvcmVDb21taXRJbmZvIFtdTXVsdGlTdG9yZUNvbW1pdElECiAgICBTdG9yZU5hbWUgc3RyaW5nCiAgICBIZWlnaHQgIGludDY0CiAgICBSb290SGFzaCBjbW4uSGV4Qnl0ZXMKICAgIExlZnQgICpwYXRoV2l0aE5vZGUgLy8gUHJvb2YgdGhlIGxlZnQga2V5IGV4aXN0CiAgICBSaWdodCAqcGF0aFdpdGhOb2RlICAvL1Byb29mIHRoZSByaWdodCBrZXkgZXhpc3QKfQo="}}),e._v(" "),s("p",[e._v("The above is the data structure of absence proof. Steps to build proof:")]),e._v(" "),s("ul",[s("li",[e._v("Access the IAVL tree from the root node.")]),e._v(" "),s("li",[e._v("Get the deserved index(Marked as INDEX) of the key in whole key set.")]),e._v(" "),s("li",[e._v("If the returned index equals to 0, the right index should be 0 and left node doesn't exist")]),e._v(" "),s("li",[e._v("If the returned index equals to the size of the whole key set, the left node index should be INDEX-1 and the right node doesn't exist.")]),e._v(" "),s("li",[e._v("Otherwise, the right node index should be INDEX and the left node index should be INDEX-1")]),e._v(" "),s("li",[e._v("Assign the current IAVL tree height to proof height")]),e._v(" "),s("li",[e._v("Assign the current IAVL tree rootHash to proof rootHash")]),e._v(" "),s("li",[e._v("Assign the current substore name to proof StoreName")]),e._v(" "),s("li",[e._v("Read multistore commitInfo from db by height and assign it to proof StoreCommitInfo")])]),e._v(" "),s("p",[e._v("Steps to verify proof:")]),e._v(" "),s("ul",[s("li",[e._v("If only right node exist, verify its exist proof and verify if it is the left most node")]),e._v(" "),s("li",[e._v("If only left node exist, verify its exist proof and verify if it is the right most node.")]),e._v(" "),s("li",[e._v("If both right node and left node exist, verify if they are adjacent.")])]),e._v(" "),s("h3",{attrs:{id:"substores-to-apphash-proof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#substores-to-apphash-proof"}},[e._v("#")]),e._v(" Substores to AppHash Proof")]),e._v(" "),s("p",[e._v("After verify the IAVL proof, then we can start to verify substore proof against AppHash. Firstly,\niterate MultiStoreCommitInfo and find the substore commitID by proof StoreName. Verify if yhe Hash\nin commitID equals to proof RootHash. If not, the proof is invalid. Then sort the substore\ncommitInfo array by the hash of substore name. Finally, build the simple Merkle tree with all\nsubstore commitInfo array and verify if the Merkle root hash equal to appHash.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(615),alt:"substore proof"}})]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTaW1wbGVIYXNoRnJvbVR3b0hhc2hlcyhsZWZ0IFtdYnl0ZSwgcmlnaHQgW11ieXRlKSBbXWJ5dGUgewogICAgdmFyIGhhc2hlciA9IHJpcGVtZDE2MC5OZXcoKQoKICAgIGVyciA6PSBlbmNvZGVCeXRlU2xpY2UoaGFzaGVyLCBsZWZ0KQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcGFuaWMoZXJyKQogICAgfQoKICAgIGVyciA9IGVuY29kZUJ5dGVTbGljZShoYXNoZXIsIHJpZ2h0KQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcGFuaWMoZXJyKQogICAgfQoKICAgIHJldHVybiBoYXNoZXIuU3VtKG5pbCkKfQoKZnVuYyBTaW1wbGVIYXNoRnJvbUhhc2hlcyhoYXNoZXMgW11bXWJ5dGUpIFtdYnl0ZSB7CiAgICAvLyBSZWN1cnNpdmUgaW1wbC4KICAgIHN3aXRjaCBsZW4oaGFzaGVzKSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgICByZXR1cm4gbmlsCiAgICAgICAgY2FzZSAxOgogICAgICAgICAgICByZXR1cm4gaGFzaGVzWzBdCiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgbGVmdCA6PSBTaW1wbGVIYXNoRnJvbUhhc2hlcyhoYXNoZXNbOihsZW4oaGFzaGVzKSsxKS8yXSkKICAgICAgICAgICAgcmlnaHQgOj0gU2ltcGxlSGFzaEZyb21IYXNoZXMoaGFzaGVzWyhsZW4oaGFzaGVzKSsxKS8yOl0pCiAgICAgICAgICAgIHJldHVybiBTaW1wbGVIYXNoRnJvbVR3b0hhc2hlcyhsZWZ0LCByaWdodCkKICAgIH0KfQo="}}),e._v(" "),s("h2",{attrs:{id:"verify-block-header-against-validator-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify-block-header-against-validator-set"}},[e._v("#")]),e._v(" Verify block header against validator set")]),e._v(" "),s("p",[e._v("Above sections refer appHash frequently. But where does the trusted appHash come from? Actually,\nthe appHash exist in block header, next we need to verify blocks header at specific height against\nLCD trusted validator set. The validation flow is shown as follows:")]),e._v(" "),s("p",[s("img",{attrs:{src:o(616),alt:"commit verification"}})]),e._v(" "),s("p",[e._v("When the trusted validator set doesn't match the block header, we need to try to update our\nvalidator set to the height of this block. LCD has a rule that each validator set change should not\naffect more than 1/3 voting power. Compare with the trusted validator set, if the voting power of\ntarget validator set changes more than 1/3. We have to verify if there are hidden validator set\nchanges before the target validator set. Only when all validator set changes obey this rule, can our\nvalidator set update be accomplished.")]),e._v(" "),s("p",[e._v("For instance:")]),e._v(" "),s("p",[s("img",{attrs:{src:o(617),alt:"Update validator set to height"}})]),e._v(" "),s("ul",[s("li",[e._v("Update to 10000, tooMuchChangeErr")]),e._v(" "),s("li",[e._v("Update to 5050,  tooMuchChangeErr")]),e._v(" "),s("li",[e._v("Update to 2575, Success")]),e._v(" "),s("li",[e._v("Update to 5050, Success")]),e._v(" "),s("li",[e._v("Update to 10000,tooMuchChangeErr")]),e._v(" "),s("li",[e._v("Update to 7525, Success")]),e._v(" "),s("li",[e._v("Update to 10000, Success")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);