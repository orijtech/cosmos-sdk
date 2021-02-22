(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{575:function(t,r,v){t.exports=v.p+"assets/img/high-level.ca0b5f8e.png"},576:function(t,r,v){t.exports=v.p+"assets/img/validatorSetChange.29acad68.png"},577:function(t,r,v){t.exports=v.p+"assets/img/trustPropagate.8fcf2160.png"},696:function(t,r,v){"use strict";v.r(r);var _=v(1),e=Object(_.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"라이트-클라이언트-개요"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#라이트-클라이언트-개요"}},[t._v("#")]),t._v(" 라이트 클라이언트 개요")]),t._v(" "),_("p",[_("strong",[t._v("코스모스 SDK 라이트 클라이언트 RPC 문서를 [여기]에서 확인하세요(https://cosmos.network/rpc/)")])]),t._v(" "),_("h2",{attrs:{id:"소개"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#소개"}},[t._v("#")]),t._v(" 소개")]),t._v(" "),_("p",[t._v("라이트 클라이언트는 핸드폰 같은 클라이언트에서 블록체인 상태(state)에 대한 증거(proof)를 풀노드로부터 전달받을 수 있게 합니다. 라이트 클라이언트는 전송받은 증거에 대한 검증을 자체적으로 수행할 수 있기 때문에 풀노드를 신뢰하지 않아도 되며, 풀노드의 거짓 정보 전달을 확인할 수 있다.")]),t._v(" "),_("p",[t._v("라이트 클라이언트는 대역폭(bandwidth), 컴퓨터 연산력 그리고 저장공간 측면에서 큰 리소스를 소모하지 않고도 풀노드와 동일한 보안을 제공할 수 있다. 또한 유저의 설정에 따라 모듈화 된 기능성을 제공할 수 있다. 이런 우수한 기능은 개발자들이 풀 블록체인 노드가 없이도 안전하고, 효율적이고, 사용성이 높은 모바일 애플리케이션, 웹사이트 등을 만들 수 있게 한다.")]),t._v(" "),_("h3",{attrs:{id:"라이트-클라이언트란-무엇인가"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#라이트-클라이언트란-무엇인가"}},[t._v("#")]),t._v(" 라이트 클라이언트란 무엇인가")]),t._v(" "),_("p",[t._v("코스모스 SDK 라이트 클라이언트 (Gaia-lite)는 두 가지 요소로 나뉘어 있다. 첫 번째 요소는 모든 텐더민트 기반 애플리케이션들의 기본적인 컴포넌트다. 해당 컴포넌트는 헤더 체인을 따르면서 풀노드가 제공하는 증거를 신뢰할 수 있는 검증인을 통해 확인하는 방식으로 보안과 연결성 측면을 담당한다. 두 번째 요소는 코스모스 허브("),_("code",[t._v("gaiad")]),t._v(")에 고유한 컴포넌트다. 일종의 쿼리 엔드포인트(query endpoint)로써 애플리케이션 특정 기능을 드러내는 역할을 수행한다. 애플리케이션 상태에 대한 모든 쿼리는 쿼리 엔드포인트(query endpoint)를 통해 이루어진다. 쿼리 엔드포인트를 이용하는 것에 가장 큰 장점은 애플리케이션이 리턴하는 증거를 검증할 수 있다는 것이다.")]),t._v(" "),_("h3",{attrs:{id:"하이레벨-아키텍처-high-level-architecture"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#하이레벨-아키텍처-high-level-architecture"}},[t._v("#")]),t._v(" 하이레벨 아키텍처(High-level Architecture)")]),t._v(" "),_("p",[t._v("코스모스 허브(또는 다른 존)를 위한 제삼자 클라이언트 애플리케이션을 만드려고 하는 개발자는 기본 규례적(canonical) API를 기반으로 개발을 해야 합니다. API는 여러 가지 부품으로 이루어져 있습니다. 코스모스 생태계의 모든 존은 기본적으로 ICS0(텐더민트API)를 공개해야 하나, 그 외에 모듈들은 선택 사항입니다. 모든 존은 모듈 API를 도입할 여부를 기능에 따라 선택할 권리가 있습니다.")]),t._v(" "),_("p",[t._v("기본적으로 코스모스 허브는 "),_("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS0",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS0"),_("OutboundLink")],1),t._v(" (텐더민트API), "),_("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS1",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS1"),_("OutboundLink")],1),t._v(" (키API), "),_("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS20"),_("OutboundLink")],1),t._v(" (토큰API), "),_("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS21",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS21"),_("OutboundLink")],1),t._v(" (스테이킹API),\n"),_("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS22",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS22"),_("OutboundLink")],1),t._v(" (거버넌스API) and "),_("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS23",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS23"),_("OutboundLink")],1),t._v(" (슬래싱API)를 도입하고 있습니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:v(575),alt:"high-level"}})]),t._v(" "),_("p",[t._v("모든 애플리케이션은 Gaia-lite 클라이언트를 기반으로 운영되는 것을 원칙으로 삼습니다. Gaia-lite 외의 소프트웨어는 특정 존 API에 대한 안정성을 보장하지 않습니다.")]),t._v(" "),_("h3",{attrs:{id:"비교"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#비교"}},[t._v("#")]),t._v(" 비교")]),t._v(" "),_("p",[t._v("ABCI 풀노드는 다음과 같은 항목에서 라이트 클라이언트와 다릅니다:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[t._v("풀노드")]),t._v(" "),_("th",[t._v("라이트 클라이언트")]),t._v(" "),_("th",[t._v("설명")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("트랜잭션 검증 및 실행")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("No")]),t._v(" "),_("td",[t._v("풀노드는 모든 트랜잭션을 검증하고 실행하지만, 라이트 클라이언트는 모든 트랜잭션을 처리하지 않습니다")])]),t._v(" "),_("tr",[_("td",[t._v("검증 및 블록 저장")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("No")]),t._v(" "),_("td",[t._v("풀노드는 모든 블록을 검증하고 보관하지만, 라이트 클라이언트는 블록 저장을 하지 않습니다")])]),t._v(" "),_("tr",[_("td",[t._v("합의 절차 참여")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("No")]),t._v(" "),_("td",[t._v("검증인 세트에 포함된 풀노드는 합의 절차에 참여하지만, 라이트 클라이언트는 절대로 합의 절차에 참여할 수 없습니다")])]),t._v(" "),_("tr",[_("td",[t._v("대역폭 사용량")]),t._v(" "),_("td",[t._v("대량")]),t._v(" "),_("td",[t._v("소량")]),t._v(" "),_("td",[t._v("풀노드는 모든 블록을 전달받기 때문에 충분한 대역폭이 확보되지 않는 경우 다른 뒤질 확률이 있습니다. 검증인 풀노드가 낮은 대역폭으로 지연되는 경우 합의 절차 전체가 늦어질 수 있습니다. 라이트 클라이언트는 로컬 호출만을 처리하기 때문에 소량의 대역폭을 사용합니다")])]),t._v(" "),_("tr",[_("td",[t._v("연산력 사용량")]),t._v(" "),_("td",[t._v("대량")]),t._v(" "),_("td",[t._v("소량")]),t._v(" "),_("td",[t._v("풀노드는 모든 트랜잭션을 처리하며 모든 블록을 검증해야 하기 때문에 대량의 컴퓨터 연산력을 사용합니다.")])]),t._v(" "),_("tr",[_("td",[t._v("저장 공간 사용량")]),t._v(" "),_("td",[t._v("대량")]),t._v(" "),_("td",[t._v("소량")]),t._v(" "),_("td",[t._v("풀노드는 모든 블록과 ABCI 상태를 저장합니다. 라이트 클라이언트는 검증인 세트와 일부 체크포인트만을 저장합니다.")])]),t._v(" "),_("tr",[_("td",[t._v("전력 사용량")]),t._v(" "),_("td",[t._v("대량")]),t._v(" "),_("td",[t._v("소량")]),t._v(" "),_("td",[t._v("풀노드는 24시간 돌아가는 고성능 머신 환경이 제공되어야 하기 때문에 대량의 전력을 소모합니다. 라이트 클라이언트의 경우 유저 애플리케이션과 동일한 환경에서 운용될 수 있습니다. 라이트 클라이언트는 모바일 기기 같은 저성능 기기에서도 사용될 수 있습니다. 또한 라이트 클라이언트는 필요에 따라 클라이언트 작동을 출 수 있기 때문에 모바일 기기 같은 저전력 소모를 필요로 하는 환경에서 이용될 수 있습니다.")])]),t._v(" "),_("tr",[_("td",[t._v("API 제공")]),t._v(" "),_("td",[t._v("모든 코스모스 API")]),t._v(" "),_("td",[t._v("모듈 API")]),t._v(" "),_("td",[t._v("풀노드는 모든 코스모스 API를 지원합니다. 라이트 클라이언트는 유저 설정에 따라 모듈 API를 제공합니다.")])]),t._v(" "),_("tr",[_("td",[t._v("보안")]),t._v(" "),_("td",[t._v("높음")]),t._v(" "),_("td",[t._v("높음")]),t._v(" "),_("td",[t._v("풀노드는 자체적으로 모든 트랜잭션과 블록을 검증합니다. 라이트 클라이언트는 모든 트랜잭션을 검증하지 않지만 다른 풀노드를 통해 데이터를 전달받아 자체적인 검증을 할 수 있습니다. 풀노드와 라이트 클라이언트는 둘 다 제삼자 노드를 신뢰할 필요 없이 데이터 검증이 가능하기 때문에 높은 수준의 보안을 제공합니다")])])])]),t._v(" "),_("p",[t._v("위 표와 같이 가이아 라이트 클라이언트는 소량의 대역폭, 연산력, 저장 공간, 전력을 가지고도  유저가 필요로 하는 모든 기능과 보안을 제공합니다.")]),t._v(" "),_("h2",{attrs:{id:"보안-유지하기"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#보안-유지하기"}},[t._v("#")]),t._v(" 보안 유지하기")]),t._v(" "),_("h3",{attrs:{id:"신뢰-가능한-검증인-세트"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#신뢰-가능한-검증인-세트"}},[t._v("#")]),t._v(" 신뢰 가능한 검증인 세트")]),t._v(" "),_("p",[t._v("가이아 라이트 클라이언트의 디자인 철학은 다음과 같은 원칙을 따릅니다:")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("검증인 노드와 다른 풀 노드를 포함한 모든 블록체인 노드를 신뢰하지 않는다")])]),t._v(" "),_("li",[_("strong",[t._v("오직 전체적인 검증인 세트(validator set) 만을 신뢰한다")])])]),t._v(" "),_("p",[t._v("초기에 신뢰될 수 있는 검증인 세트(통상 제네시스 파일에 있는 검증인 세트)는 신뢰 저장소(trust store)에 미리 세팅되어야 합니다. 이후, 런타임에서 라이트 클라이언트가 다른 검증인 세트를 발견하게 된다면 클라이언트는 해당 검증인 세트를 별도로 검증한 후 새로운 검증인 세트를 저장소에 보관하게 됩니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:v(576),alt:"validator-set-change"}})]),t._v(" "),_("h3",{attrs:{id:"신뢰-전파-trust-propagation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#신뢰-전파-trust-propagation"}},[t._v("#")]),t._v(" 신뢰 전파(trust propagation)")]),t._v(" "),_("p",[t._v("위에 항목에 나열된 바와 같이, 라이트 클라이언트(lcd)는 신뢰할 수 있는 검증인 세트를 별도로 검증합니다. 검증인 세트는 일종의 신뢰의 기반이 되며, 이런 신뢰를 기반으로 블록 정보와 트랜잭션 정보 같은 다른 블록체인 데이터에 신뢰를 전파(propogate)하는데 이용됩니다. 신뢰 전파 아키텍처는 다음과 같습니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:v(577),alt:"change-process"}})]),t._v(" "),_("p",[t._v("라이트 클라이언트는 통상 신뢰 가능한 검증인 세트를 통해 모든 프리 커밋 정보와 블록 헤더 정보가 포함된 각 블록의 커밋을 검증할 수 있습니다. 이후 블록 해시 값, 데이터 해시 값 그리고 앱해시(appHash)에 대한 신뢰를 파생합니다. 머클 증거(merkle proof)와 위의 정보를 이용해 모든 트랜잭션 데이터와 ABCI의 상태(state)를 검증할 수 있게 됩니다.")])])}),[],!1,null,null,null);r.default=e.exports}}]);