System.register(["./chunk-vendor.js","./chunk-frameworks.js","./chunk-input-demux.js","./chunk-ref-selector.js"],function(){"use strict";var m,F,y,a,b,k,L,q,S,x,M;return{setters:[function(c){m=c.a,F=c.r,y=c.o,a=c.t,b=c.c},function(c){k=c.r,L=c.aD,q=c.aE,S=c.y,x=c.g,M=c.e},function(){},function(){}],execute:function(){var c=Object.defineProperty,g=(e,t)=>c(e,"name",{value:t,configurable:!0});m("click",".js-codespaces-update-skus-url",e=>{const t=e.currentTarget;if(!t)return;const o=t.getAttribute("data-refname");if(document.querySelector("form.js-prefetch-codespace-location")&&o){const s=document.querySelector("[data-codespace-skus-url]"),r=s?s.getAttribute("data-codespace-skus-url"):"";if(r){const i=new URL(r,window.location.origin);i.searchParams.set("ref_name",o),s&&s.setAttribute("data-codespace-skus-url",i.toString()),s&&s.setAttribute("data-branch-has-changed","true")}}}),m("remote-input-error","#js-codespaces-repository-select",()=>{const e=document.querySelector("#js-codespaces-unable-load-repositories-warning");e.hidden=!1}),F(".js-new-codespace-form",async function(e,t){const o=e.closest("[data-replace-remote-form-target]"),n=o.querySelector(".js-new-codespace-submit-button");n instanceof HTMLInputElement&&(n.disabled=!0),e.classList.remove("is-error"),e.classList.add("is-loading");try{const s=await t.html();o.replaceWith(s.html)}catch(s){e.classList.remove("is-loading"),e.classList.add("is-error")}});let B=null;function C(e){B=e,e!==null&&document.querySelector(".js-codespace-loading-steps").setAttribute("data-current-state",B)}g(C,"advanceLoadingState"),y(".js-codespace-loading-steps",{constructor:HTMLElement,add:e=>{const t=e.getAttribute("data-current-state");t&&C(t)}}),y(".js-codespace-advance-state",{constructor:HTMLElement,add:e=>{const t=e.getAttribute("data-state");t&&C(t)}});let D=null;function O(e){F(".js-fetch-cascade-token",async function(t,o){try{D=(await o.json()).json.token}catch(n){}}),k(e)}g(O,"fetchCascadeToken");function I(e,t,o){if(document.querySelector(e)){const s=Date.now(),i=setInterval(g(()=>{const P=Date.now()-s;if(D||P>=o){clearInterval(i),t(D||void 0);return}},"checkToken"),50)}}g(I,"waitForCascadeTokenWithTimeout"),y(".js-auto-submit-form",{constructor:HTMLFormElement,initialize:k}),y(".js-workbench-form-container",{constructor:HTMLElement,add:e=>{const t=e.querySelector(".js-cascade-token");H(e,t)}});function H(e,t){if(t.value!==""){const o=e.querySelector("form");k(o)}else{const o=document.querySelector(".js-fetch-cascade-token");O(o),I(".js-workbench-form-container",$,1e4)}}g(H,"resolveCascadeToken");function $(e){const t=document.querySelector(".js-workbench-form-container form");t&&e?(V(t,e),R(t,e),k(t)):C("failed")}g($,"insertCodespaceTokenIntoShowAuthForm");function V(e,t){const o=e.querySelector(".js-cascade-token");o&&o.setAttribute("value",t)}g(V,"insertCodespaceTokenIntoCascadeField");function R(e,t){const o=e.querySelector(".js-partner-info");if(o){let n=o.getAttribute("value");n&&(n=n.replace("%CASCADE_TOKEN_PLACEHOLDER%",t),o.setAttribute("value",n))}}g(R,"insertCodespaceTokenIntoPartnerInfo");var U=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=(e,t)=>U(e,"name",{value:t,configurable:!0}),h=(e,t,o,n)=>{for(var s=n>1?void 0:n?Y(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&U(t,o,s),s};let l=class extends HTMLElement{async connectedCallback(){if(this.createCodespaceForm){const e=await L(this.createCodespaceForm,!this.vscsLocationList);this.updatePickableLocations(e)}}toggleLoadingVscode(){const e=this.loadingVscode.hidden,t=this.children;for(let o=0;o<t.length;o++)t[o].hidden=e;this.loadingVscode.hidden=!e}pollForVscode(e){this.toggleLoadingVscode();const t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}async updatePickableLocations(e){if(!e){const o=this.createCodespaceForm.getAttribute("data-codespace-locations-url");if(!o)return;e=await q(o)}const t=e.available;if(this.vscsLocationList){const o=this.vscsLocationList.querySelectorAll(".SelectMenu-item");for(const s of o)t.includes(s.getAttribute("data-location"))?s.removeAttribute("hidden"):s.setAttribute("hidden","hidden");const n=this.createCodespaceForm.querySelector('[name="codespace[location]"]');if(n&&!t.includes(n.value)){n.value=e.current,this.vscsLocationSummary.textContent=this.vscsLocationSummary.getAttribute("data-blank-title");for(const s of o)s.setAttribute("aria-checked","false")}}}vscsTargetUrlUpdated(e){const t=e.currentTarget;this.vscsTargetUrl.value=t.value}};Z(l,"NewCodespaceElement"),h([a],l.prototype,"form",2),h([a],l.prototype,"createCodespaceForm",2),h([a],l.prototype,"createCodespaceWithSkuSelectForm",2),h([a],l.prototype,"vscsTargetUrl",2),h([a],l.prototype,"vscsLocationList",2),h([a],l.prototype,"vscsLocationSummary",2),h([a],l.prototype,"loadingVscode",2),h([a],l.prototype,"vscodePoller",2),l=h([b],l);var J=Object.defineProperty,_=(e,t)=>J(e,"name",{value:t,configurable:!0});m("submit",".js-toggle-hidden-codespace-form",function(e){const t=e.currentTarget;u(t)}),m("click",".js-create-codespace-with-sku-button",async function(e){const t=e.currentTarget,o=t.closest("[data-target*='new-codespace.createCodespaceForm']")||t.closest("[data-target*='new-codespace.createCodespaceWithSkuSelectForm']");await L(o),o.classList.contains("js-open-in-vscode-form")?(u(o),E(o)):(o.submit(),j())});function u(e){const t=e.querySelectorAll(".js-toggle-hidden");for(const n of t)n.hidden=!n.hidden;const o=e.querySelectorAll(".js-toggle-disabled");for(const n of o)n.getAttribute("aria-disabled")?n.removeAttribute("aria-disabled"):n.setAttribute("aria-disabled","true")}_(u,"toggleFormSubmissionInFlight");function W(e){return e.closest("[data-replace-remote-form-target]")}_(W,"getFormTarget");async function j(){const e=document.querySelector(".js-codespaces-details-container");e&&(e.open=!1);const t=document.querySelector("new-codespace");if(t)try{const o=await fetch("/codespaces/new");if(o&&o.ok){const n=S(document,await o.text());t.replaceWith(n)}}catch(o){}}_(j,"createFormSubmitted"),m("submit",".js-create-codespaces-form-command",function(e){const t=e.currentTarget;t.classList.contains("js-open-in-vscode-form")||(j(),u(t))}),m("submit","form.js-codespaces-delete-form",async function(e){e.preventDefault();const t=e.currentTarget;try{const o=await fetch(t.action,{method:t.method,body:new FormData(t),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(o.ok){const n=S(document,await o.text());W(t).replaceWith(n)}else if(o.status===401)t.submit();else throw new Error(`Unexpected response: ${o.statusText}`)}finally{u(t)}}),m("submit","form.js-open-in-vscode-form",async function(e){e.preventDefault();const t=e.currentTarget;await E(t)});async function X(e,t){const o=document.querySelector(`#${e}`),n=await x({content:o.content.cloneNode(!0),dialogClass:"project-dialog"});return t&&t.setAttribute("aria-expanded","true"),n.addEventListener("dialog:remove",function(){t&&u(t)},{once:!0}),n}_(X,"openDialog");async function E(e){const t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(t.ok){const o=await t.json();o.codespace_url?(window.location.href=o.codespace_url,u(e),j()):(e.closest("get-repo")||e.closest("new-codespace")?(e.setAttribute("data-src",o.loading_url),e.dispatchEvent(new CustomEvent("pollvscode"))):e.closest("prefetch-pane")&&(e.setAttribute("data-src",o.loading_url),e.dispatchEvent(new CustomEvent("prpollvscode"))),u(e))}else t.status===422&&await X("concurrency-error",e)}_(E,"createCodespaceIntoVscode");var N=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,te=(e,t)=>N(e,"name",{value:t,configurable:!0}),T=(e,t,o,n)=>{for(var s=n>1?void 0:n?ee(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&N(t,o,s),s};let w=class extends HTMLElement{constructor(){super(...arguments);this.abortPoll=null}connectedCallback(){this.abortPoll=new AbortController,this.loadingIndicator.hidden||this.startPoll()}disconnectedCallback(){var e;(e=this.abortPoll)==null||e.abort()}async exportBranch(e){e.preventDefault(),this.form.hidden=!0,this.loadingIndicator.hidden=!1,(await fetch(this.form.action,{method:this.form.method,body:new FormData(this.form),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}})).ok?this.startPoll():(this.form.hidden=!1,this.loadingIndicator.hidden=!0)}async startPoll(){const e=this.getAttribute("data-exported-codespace-url")||"",t=await this.poll(e);if(t)if(t.ok)this.loadingIndicator.hidden=!0,this.viewBranchLink.hidden=!1;else{const o=this.getAttribute("data-export-error-redirect-url")||"";window.location.href=o}}async poll(e,t=1e3){var o,n;if((o=this.abortPoll)==null?void 0:o.signal.aborted)return;const s=await fetch(e,{signal:(n=this.abortPoll)==null?void 0:n.signal});return s.status===202?(await new Promise(r=>setTimeout(r,t)),this.poll(e,t*1.5)):s}};te(w,"ExportBranchElement"),T([a],w.prototype,"form",2),T([a],w.prototype,"loadingIndicator",2),T([a],w.prototype,"viewBranchLink",2),w=T([b],w);var z=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,se=(e,t)=>z(e,"name",{value:t,configurable:!0}),p=(e,t,o,n)=>{for(var s=n>1?void 0:n?oe(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&z(t,o,s),s};let d=class extends HTMLElement{reset(e){for(e.preventDefault(),this.dropdownDetails.hidden=!1,this.modalDetails.hidden=!0,this.exportDetails.hidden=!0,this.skuForm.hidden=!1;this.resultMessage.firstChild;)this.resultMessage.removeChild(this.resultMessage.firstChild);this.resultMessage.hidden=!0,this.errorMessage.hidden=!0}showSettingsModal(){this.dropdownDetails.hidden=!0,this.modalDetails.open=!0,this.modalDetails.hidden=!1,this.dynamicSkus&&this.dynamicSkus.setAttribute("src",this.dynamicSkus.getAttribute("data-src"))}showExportModal(){this.dropdownDetails.hidden=!0,this.exportDetails.open=!0,this.exportDetails.hidden=!1,this.insertBranchExportComponent()}async updateSku(){u(this.skuForm);try{const e=await fetch(this.skuForm.action,{method:this.skuForm.method,body:new FormData(this.skuForm),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(e.ok){const t=S(document,await e.text());this.resultMessage.appendChild(t),this.skuForm.hidden=!0,this.resultMessage.hidden=!1}else this.errorMessage.hidden=!1,this.skuForm.hidden=!0}finally{u(this.skuForm)}}async insertBranchExportComponent(){const e=this.querySelector("[data-branch-export-url]");if(!e)return;const t=e.getAttribute("data-branch-export-url");if(!t)return;const o=await M(document,t);!o||(e.innerHTML="",e.appendChild(o))}};se(d,"OptionsPopoverElement"),p([a],d.prototype,"dropdownDetails",2),p([a],d.prototype,"modalDetails",2),p([a],d.prototype,"settingsModal",2),p([a],d.prototype,"skuForm",2),p([a],d.prototype,"resultMessage",2),p([a],d.prototype,"errorMessage",2),p([a],d.prototype,"exportDetails",2),p([a],d.prototype,"dynamicSkus",2),d=p([b],d);var K=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,re=(e,t)=>K(e,"name",{value:t,configurable:!0}),v=(e,t,o,n)=>{for(var s=n>1?void 0:n?ne(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&K(t,o,s),s};let f=class extends HTMLElement{constructor(){super(...arguments);this.prefetching=!1,this.remainingRetries=3}async connectedCallback(){this.openSkuButton&&this.skipSkuButton?this.prefetchLocationAndSkus():this.showOpenSkuButton()}async prefetchLocationAndSkus(){const e=this.getAttribute("data-branch-has-changed")==="true";if(this.prefetching&&!e)return;const t=document.querySelector("form.js-prefetch-codespace-location")||document.querySelector("form.js-open-in-vscode-form")||document.querySelector("form.js-open-in-web-form");if(t){this.prefetching=!0;const o=await L(t);if(o&&(this.currentLocation=o.current),!this.skuSelect)return;const n=this.getAttribute("data-codespace-skus-url");if(this.currentLocation&&n){const s=await fetch(`${n}&location=${this.currentLocation}`,{headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/html_fragment"}});if(s.ok){this.setAttribute("data-branch-has-changed","false");const r=S(document,await s.text()),P=Array.from(r.querySelectorAll("input[name='codespace[sku_name]']")).filter(ce=>!ce.disabled);P.length===1?(P[0].select(),this.showSkipSkuButton()):this.showOpenSkuButton(),this.skuSelect.replaceWith(r),this.skuSelect.hidden=!1,this.skuError&&(this.skuError.hidden=!0)}else this.showOpenSkuButton(),this.remainingRetries-=1,this.remainingRetries>0&&(this.prefetching=!1),this.skuSelect.hidden=!0,this.skuError&&(this.skuError.hidden=!1)}}}showOpenSkuButton(){var e;this.shownButton===void 0&&this.openSkuButton&&(this.shownButton=this.openSkuButton,this.shownButton.hidden=!1,(e=this.skipSkuButton)==null||e.remove())}showSkipSkuButton(){var e,t;if(this.shownButton===void 0&&this.skipSkuButton){this.shownButton=this.skipSkuButton,this.shownButton.hidden=!1;const o=(e=this.openSkuButton)==null?void 0:e.parentElement;o&&o instanceof HTMLDetailsElement&&(o.hidden=!0),(t=this.openSkuButton)==null||t.remove()}}toggleLoadingVscode(){if(this.loadingVscode){const e=this.loadingVscode.hidden,t=this.children;for(let o=0;o<t.length;o++)t[o].hidden=e;this.loadingVscode.hidden=!e}}pollForVscode(e){if(this.vscodePoller){this.toggleLoadingVscode();const t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}}};re(f,"PrefetchPaneElement"),v([a],f.prototype,"skuSelect",2),v([a],f.prototype,"skuError",2),v([a],f.prototype,"loadingVscode",2),v([a],f.prototype,"vscodePoller",2),v([a],f.prototype,"openSkuButton",2),v([a],f.prototype,"skipSkuButton",2),f=v([b],f);var G=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,ie=(e,t)=>G(e,"name",{value:t,configurable:!0}),Q=(e,t,o,n)=>{for(var s=n>1?void 0:n?ae(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&G(t,o,s),s};let A=class extends HTMLElement{async connectedCallback(){this.closeDetailsPopover();const e=this.getAttribute("data-codespace-url");e&&(window.location.href=e)}closeDetailsPopover(){const e=document.querySelector(".js-codespaces-details-container");e&&(e.open=!1)}};ie(A,"VscodeForwarderElement"),Q([a],A.prototype,"vscodeLink",2),A=Q([b],A)}}});
//# sourceMappingURL=codespaces-effb2e03.js.map
