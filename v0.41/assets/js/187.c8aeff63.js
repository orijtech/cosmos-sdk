(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{792:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"concepts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),o("p",[o("em",[e._v("Disclaimer: This is work in progress. Mechanisms are susceptible to change.")])]),e._v(" "),o("p",[e._v("The governance process is divided in a few steps that are outlined below:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Proposal submission:")]),e._v(" Proposal is submitted to the blockchain with a\ndeposit.")]),e._v(" "),o("li",[o("strong",[e._v("Vote:")]),e._v(" Once deposit reaches a certain value ("),o("code",[e._v("MinDeposit")]),e._v("), proposal is\nconfirmed and vote opens. Bonded Atom holders can then send "),o("code",[e._v("TxGovVote")]),e._v("\ntransactions to vote on the proposal.")]),e._v(" "),o("li",[e._v("If the proposal involves a software upgrade:\n"),o("ul",[o("li",[o("strong",[e._v("Signal:")]),e._v(" Validators start signaling that they are ready to switch to the\nnew version.")]),e._v(" "),o("li",[o("strong",[e._v("Switch:")]),e._v(" Once more than 75% of validators have signaled that they are\nready to switch, their software automatically flips to the new version.")])])])]),e._v(" "),o("h2",{attrs:{id:"proposal-submission"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposal-submission"}},[e._v("#")]),e._v(" Proposal submission")]),e._v(" "),o("h3",{attrs:{id:"right-to-submit-a-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#right-to-submit-a-proposal"}},[e._v("#")]),e._v(" Right to submit a proposal")]),e._v(" "),o("p",[e._v("Any Atom holder, whether bonded or unbonded, can submit proposals by sending a\n"),o("code",[e._v("TxGovProposal")]),e._v(" transaction. Once a proposal is submitted, it is identified by\nits unique "),o("code",[e._v("proposalID")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"proposal-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposal-types"}},[e._v("#")]),e._v(" Proposal types")]),e._v(" "),o("p",[e._v("In the initial version of the governance module, there are two types of\nproposal:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("PlainTextProposal")]),e._v(" All the proposals that do not involve a modification of\nthe source code go under this type. For example, an opinion poll would use a\nproposal of type "),o("code",[e._v("PlainTextProposal")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("SoftwareUpgradeProposal")]),e._v(". If accepted, validators are expected to update\ntheir software in accordance with the proposal. They must do so by following\na 2-steps process described in the "),o("a",{attrs:{href:"#software-upgrade"}},[e._v("Software Upgrade")]),e._v("\nsection below. Software upgrade roadmap may be discussed and agreed on via\n"),o("code",[e._v("PlainTextProposals")]),e._v(", but actual software upgrades must be performed via\n"),o("code",[e._v("SoftwareUpgradeProposals")]),e._v(".")])]),e._v(" "),o("p",[e._v("Other modules may expand upon the governance module by implementing their own\nproposal types and handlers. These types are registered and processed through the\ngovernance module (eg. "),o("code",[e._v("ParamChangeProposal")]),e._v("), which then execute the respective\nmodule's proposal handler when a proposal passes. This custom handler may perform\narbitrary state changes.")]),e._v(" "),o("h2",{attrs:{id:"deposit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deposit"}},[e._v("#")]),e._v(" Deposit")]),e._v(" "),o("p",[e._v("To prevent spam, proposals must be submitted with a deposit in the coins defined in the "),o("code",[e._v("MinDeposit")]),e._v(" param. The voting period will not start until the proposal's deposit equals "),o("code",[e._v("MinDeposit")]),e._v(".")]),e._v(" "),o("p",[e._v("When a proposal is submitted, it has to be accompanied by a deposit that must be strictly positive, but can be inferior to "),o("code",[e._v("MinDeposit")]),e._v(". The submitter doesn't need to pay for the entire deposit on their own. If a proposal's deposit is inferior to "),o("code",[e._v("MinDeposit")]),e._v(", other token holders can increase the proposal's deposit by sending a "),o("code",[e._v("Deposit")]),e._v(" transaction. The deposit is kept in an escrow in the governance "),o("code",[e._v("ModuleAccount")]),e._v(" until the proposal is finalized (passed or rejected).")]),e._v(" "),o("p",[e._v("Once the proposal's deposit reaches "),o("code",[e._v("MinDeposit")]),e._v(", it enters voting period. If proposal's deposit does not reach "),o("code",[e._v("MinDeposit")]),e._v(" before "),o("code",[e._v("MaxDepositPeriod")]),e._v(", proposal closes and nobody can deposit on it anymore.")]),e._v(" "),o("h3",{attrs:{id:"deposit-refund-and-burn"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deposit-refund-and-burn"}},[e._v("#")]),e._v(" Deposit refund and burn")]),e._v(" "),o("p",[e._v("When a the a proposal finalized, the coins from the deposit are either refunded or burned, according to the final tally of the proposal:")]),e._v(" "),o("ul",[o("li",[e._v("If the proposal is approved or if it's rejected but "),o("em",[e._v("not")]),e._v(" vetoed, deposits will automatically be refunded to their respective depositor (transferred from the governance "),o("code",[e._v("ModuleAccount")]),e._v(").")]),e._v(" "),o("li",[e._v("When the proposal is vetoed with a supermajority, deposits be burned from the governance "),o("code",[e._v("ModuleAccount")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"vote"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vote"}},[e._v("#")]),e._v(" Vote")]),e._v(" "),o("h3",{attrs:{id:"participants"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#participants"}},[e._v("#")]),e._v(" Participants")]),e._v(" "),o("p",[o("em",[e._v("Participants")]),e._v(" are users that have the right to vote on proposals. On the\nCosmos Hub, participants are bonded Atom holders. Unbonded Atom holders and\nother users do not get the right to participate in governance. However, they\ncan submit and deposit on proposals.")]),e._v(" "),o("p",[e._v("Note that some "),o("em",[e._v("participants")]),e._v(" can be forbidden to vote on a proposal under a\ncertain validator if:")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("participant")]),e._v(" bonded or unbonded Atoms to said validator after proposal\nentered voting period.")]),e._v(" "),o("li",[o("em",[e._v("participant")]),e._v(" became validator after proposal entered voting period.")])]),e._v(" "),o("p",[e._v("This does not prevent "),o("em",[e._v("participant")]),e._v(" to vote with Atoms bonded to other\nvalidators. For example, if a "),o("em",[e._v("participant")]),e._v(" bonded some Atoms to validator A\nbefore a proposal entered voting period and other Atoms to validator B after\nproposal entered voting period, only the vote under validator B will be\nforbidden.")]),e._v(" "),o("h3",{attrs:{id:"voting-period"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voting-period"}},[e._v("#")]),e._v(" Voting period")]),e._v(" "),o("p",[e._v("Once a proposal reaches "),o("code",[e._v("MinDeposit")]),e._v(", it immediately enters "),o("code",[e._v("Voting period")]),e._v(". We\ndefine "),o("code",[e._v("Voting period")]),e._v(" as the interval between the moment the vote opens and\nthe moment the vote closes. "),o("code",[e._v("Voting period")]),e._v(" should always be shorter than\n"),o("code",[e._v("Unbonding period")]),e._v(" to prevent double voting. The initial value of\n"),o("code",[e._v("Voting period")]),e._v(" is 2 weeks.")]),e._v(" "),o("h3",{attrs:{id:"option-set"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-set"}},[e._v("#")]),e._v(" Option set")]),e._v(" "),o("p",[e._v("The option set of a proposal refers to the set of choices a participant can\nchoose from when casting its vote.")]),e._v(" "),o("p",[e._v("The initial option set includes the following options:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Yes")])]),e._v(" "),o("li",[o("code",[e._v("No")])]),e._v(" "),o("li",[o("code",[e._v("NoWithVeto")])]),e._v(" "),o("li",[o("code",[e._v("Abstain")])])]),e._v(" "),o("p",[o("code",[e._v("NoWithVeto")]),e._v(" counts as "),o("code",[e._v("No")]),e._v(" but also adds a "),o("code",[e._v("Veto")]),e._v(" vote. "),o("code",[e._v("Abstain")]),e._v(" option\nallows voters to signal that they do not intend to vote in favor or against the\nproposal but accept the result of the vote.")]),e._v(" "),o("p",[o("em",[e._v("Note: from the UI, for urgent proposals we should maybe add a ‘Not Urgent’\noption that casts a "),o("code",[e._v("NoWithVeto")]),e._v(" vote.")])]),e._v(" "),o("h3",{attrs:{id:"quorum"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quorum"}},[e._v("#")]),e._v(" Quorum")]),e._v(" "),o("p",[e._v("Quorum is defined as the minimum percentage of voting power that needs to be\ncasted on a proposal for the result to be valid.")]),e._v(" "),o("h3",{attrs:{id:"threshold"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#threshold"}},[e._v("#")]),e._v(" Threshold")]),e._v(" "),o("p",[e._v("Threshold is defined as the minimum proportion of "),o("code",[e._v("Yes")]),e._v(" votes (excluding\n"),o("code",[e._v("Abstain")]),e._v(" votes) for the proposal to be accepted.")]),e._v(" "),o("p",[e._v("Initially, the threshold is set at 50% with a possibility to veto if more than\n1/3rd of votes (excluding "),o("code",[e._v("Abstain")]),e._v(" votes) are "),o("code",[e._v("NoWithVeto")]),e._v(" votes. This means\nthat proposals are accepted if the proportion of "),o("code",[e._v("Yes")]),e._v(" votes (excluding\n"),o("code",[e._v("Abstain")]),e._v(" votes) at the end of the voting period is superior to 50% and if the\nproportion of "),o("code",[e._v("NoWithVeto")]),e._v(" votes is inferior to 1/3 (excluding "),o("code",[e._v("Abstain")]),e._v("\nvotes).")]),e._v(" "),o("p",[e._v("Proposals can be accepted before the end of the voting period if they meet a special condition. Namely, if the ratio of "),o("code",[e._v("Yes")]),e._v(" votes to "),o("code",[e._v("InitTotalVotingPower")]),e._v("exceeds 2:3, the proposal will be immediately accepted, even if the "),o("code",[e._v("Voting period")]),e._v(" is not finished. "),o("code",[e._v("InitTotalVotingPower")]),e._v(" is the total voting power of all bonded Atom holders at the moment when the vote opens.\nThis condition exists so that the network can react quickly in case of urgency.")]),e._v(" "),o("h3",{attrs:{id:"inheritance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#inheritance"}},[e._v("#")]),e._v(" Inheritance")]),e._v(" "),o("p",[e._v("If a delegator does not vote, it will inherit its validator vote.")]),e._v(" "),o("ul",[o("li",[e._v("If the delegator votes before its validator, it will not inherit from the\nvalidator's vote.")]),e._v(" "),o("li",[e._v("If the delegator votes after its validator, it will override its validator\nvote with its own. If the proposal is urgent, it is possible\nthat the vote will close before delegators have a chance to react and\noverride their validator's vote. This is not a problem, as proposals require more than 2/3rd of the total voting power to pass before the end of the voting period. If more than 2/3rd of validators collude, they can censor the votes of delegators anyway.")])]),e._v(" "),o("h3",{attrs:{id:"validator-s-punishment-for-non-voting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validator-s-punishment-for-non-voting"}},[e._v("#")]),e._v(" Validator’s punishment for non-voting")]),e._v(" "),o("p",[e._v("At present, validators are not punished for failing to vote.")]),e._v(" "),o("h3",{attrs:{id:"governance-address"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#governance-address"}},[e._v("#")]),e._v(" Governance address")]),e._v(" "),o("p",[e._v("Later, we may add permissioned keys that could only sign txs from certain modules. For the MVP, the "),o("code",[e._v("Governance address")]),e._v(" will be the main validator address generated at account creation. This address corresponds to a different PrivKey than the Tendermint PrivKey which is responsible for signing consensus messages. Validators thus do not have to sign governance transactions with the sensitive Tendermint PrivKey.")]),e._v(" "),o("h2",{attrs:{id:"software-upgrade"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software-upgrade"}},[e._v("#")]),e._v(" Software Upgrade")]),e._v(" "),o("p",[e._v("If proposals are of type "),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(", then nodes need to upgrade\ntheir software to the new version that was voted. This process is divided in\ntwo steps.")]),e._v(" "),o("h3",{attrs:{id:"signal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#signal"}},[e._v("#")]),e._v(" Signal")]),e._v(" "),o("p",[e._v("After a "),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(" is accepted, validators are expected to\ndownload and install the new version of the software while continuing to run\nthe previous version. Once a validator has downloaded and installed the\nupgrade, it will start signaling to the network that it is ready to switch by\nincluding the proposal's "),o("code",[e._v("proposalID")]),e._v(" in its "),o("em",[e._v("precommits")]),e._v(".("),o("em",[e._v("Note: Confirmation\nthat we want it in the precommit?")]),e._v(")")]),e._v(" "),o("p",[e._v("Note: There is only one signal slot per "),o("em",[e._v("precommit")]),e._v(". If several\n"),o("code",[e._v("SoftwareUpgradeProposals")]),e._v(" are accepted in a short timeframe, a pipeline will\nform and they will be implemented one after the other in the order that they\nwere accepted.")]),e._v(" "),o("h3",{attrs:{id:"switch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[e._v("#")]),e._v(" Switch")]),e._v(" "),o("p",[e._v("Once a block contains more than 2/3rd "),o("em",[e._v("precommits")]),e._v(" where a common\n"),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(" is signaled, all the nodes (including validator\nnodes, non-validating full nodes and light-nodes) are expected to switch to the\nnew version of the software.")]),e._v(" "),o("p",[o("em",[e._v("Note: Not clear how the flip is handled programmatically")])])])}),[],!1,null,null,null);t.default=s.exports}}]);