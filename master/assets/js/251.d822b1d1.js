(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{899:function(e,o,n){"use strict";n.r(o);var t=n(1),i=Object(t.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"state"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),n("h2",{attrs:{id:"signing-info-liveness"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-info-liveness"}},[e._v("#")]),e._v(" Signing Info (Liveness)")]),e._v(" "),n("p",[e._v("Every block includes a set of precommits by the validators for the previous block,\nknown as the "),n("code",[e._v("LastCommitInfo")]),e._v(" provided by Tendermint. A "),n("code",[e._v("LastCommitInfo")]),e._v(" is valid so\nlong as it contains precommits from +2/3 of total voting power.")]),e._v(" "),n("p",[e._v("Proposers are incentivized to include precommits from all validators in the Tendermint "),n("code",[e._v("LastCommitInfo")]),e._v("\nby receiving additional fees proportional to the difference between the voting\npower included in the "),n("code",[e._v("LastCommitInfo")]),e._v(" and +2/3 (see "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/spec/fee_distribution",target:"_blank",rel:"noopener noreferrer"}},[e._v("fee distribution"),n("OutboundLink")],1),e._v(").")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBMYXN0Q29tbWl0SW5mbyBzdHJ1Y3QgewoJUm91bmQgaW50MzIKCVZvdGVzIFtdVm90ZUluZm8KfQo="}}),e._v(" "),n("p",[e._v("Validators are penalized for failing to be included in the "),n("code",[e._v("LastCommitInfo")]),e._v(" for some\nnumber of blocks by being automatically jailed, potentially slashed, and unbonded.")]),e._v(" "),n("p",[e._v("Information about validator's liveness activity is tracked through "),n("code",[e._v("ValidatorSigningInfo")]),e._v(".\nIt is indexed in the store as follows:")]),e._v(" "),n("ul",[n("li",[e._v("ValidatorSigningInfo: "),n("code",[e._v("0x01 | ConsAddress -> ProtocolBuffer(ValSigningInfo)")])]),e._v(" "),n("li",[e._v("MissedBlocksBitArray: "),n("code",[e._v("0x02 | ConsAddress | LittleEndianUint64(signArrayIndex) -> VarInt(didMiss)")]),e._v("  (varint is a number encoding format)")])]),e._v(" "),n("p",[e._v("The first mapping allows us to easily lookup the recent signing info for a\nvalidator based on the validator's consensus address.")]),e._v(" "),n("p",[e._v("The second mapping ("),n("code",[e._v("MissedBlocksBitArray")]),e._v(") acts\nas a bit-array of size "),n("code",[e._v("SignedBlocksWindow")]),e._v(" that tells us if the validator missed\nthe block for a given index in the bit-array. The index in the bit-array is given\nas little endian uint64.\nThe result is a "),n("code",[e._v("varint")]),e._v(" that takes on "),n("code",[e._v("0")]),e._v(" or "),n("code",[e._v("1")]),e._v(", where "),n("code",[e._v("0")]),e._v(" indicates the\nvalidator did not miss (did sign) the corresponding block, and "),n("code",[e._v("1")]),e._v(" indicates\nthey missed the block (did not sign).")]),e._v(" "),n("p",[e._v("Note that the "),n("code",[e._v("MissedBlocksBitArray")]),e._v(" is not explicitly initialized up-front. Keys\nare added as we progress through the first "),n("code",[e._v("SignedBlocksWindow")]),e._v(" blocks for a newly\nbonded validator. The "),n("code",[e._v("SignedBlocksWindow")]),e._v(" parameter defines the size\n(number of blocks) of the sliding window used to track validator liveness.")]),e._v(" "),n("p",[e._v("The information stored for tracking validator liveness is as follows:")]),e._v(" "),n("p",[n("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVmFsaWRhdG9yU2lnbmluZ0luZm8gZGVmaW5lcyBhIHZhbGlkYXRvcidzIHNpZ25pbmcgaW5mbyBmb3IgbW9uaXRvcmluZyB0aGVpcgovLyBsaXZlbmVzcyBhY3Rpdml0eS4KbWVzc2FnZSBWYWxpZGF0b3JTaWduaW5nSW5mbyB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICAgPSB0cnVlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CgogIHN0cmluZyBhZGRyZXNzID0gMTsKICAvLyBoZWlnaHQgYXQgd2hpY2ggdmFsaWRhdG9yIHdhcyBmaXJzdCBhIGNhbmRpZGF0ZSBPUiB3YXMgdW5qYWlsZWQKICBpbnQ2NCBzdGFydF9oZWlnaHQgPSAyIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O3N0YXJ0X2hlaWdodFwmcXVvdDsmcXVvdDtdOwogIC8vIGluZGV4IG9mZnNldCBpbnRvIHNpZ25lZCBibG9jayBiaXQgYXJyYXkKICBpbnQ2NCBpbmRleF9vZmZzZXQgPSAzIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2luZGV4X29mZnNldFwmcXVvdDsmcXVvdDtdOwogIC8vIHRpbWVzdGFtcCB2YWxpZGF0b3IgY2Fubm90IGJlIHVuamFpbGVkIHVudGlsCiAgZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCBqYWlsZWRfdW50aWwgPSA0CiAgICAgIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2phaWxlZF91bnRpbFwmcXVvdDsmcXVvdDssIChnb2dvcHJvdG8uc3RkdGltZSkgPSB0cnVlLCAoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKICAvLyB3aGV0aGVyIG9yIG5vdCBhIHZhbGlkYXRvciBoYXMgYmVlbiB0b21ic3RvbmVkIChraWxsZWQgb3V0IG9mIHZhbGlkYXRvcgogIC8vIHNldCkKICBib29sIHRvbWJzdG9uZWQgPSA1OwogIC8vIG1pc3NlZCBibG9ja3MgY291bnRlciAodG8gYXZvaWQgc2Nhbm5pbmcgdGhlIGFycmF5IGV2ZXJ5IHRpbWUpCiAgaW50NjQgbWlzc2VkX2Jsb2Nrc19jb3VudGVyID0gNiBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDttaXNzZWRfYmxvY2tzX2NvdW50ZXJcJnF1b3Q7JnF1b3Q7XTsKfQoKLy8gUGFyYW1zIHJlcHJlc2VudHMgdGhlIHBhcmFtZXRlcnMgdXNlZCBmb3IgYnkgdGhlIHNsYXNoaW5nIG1vZHVsZS4KbWVzc2FnZSBQYXJhbXMgew=="}})],1)],1)}),[],!1,null,null,null);o.default=i.exports}}]);