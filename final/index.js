var D=new Set,u=({id:_,cssText:q})=>{if(D.has(_)||document.querySelector(`#${_}`))return;const Z=document.createElement("style");Z.id=_,Z.textContent=q,Z.classList.add("evenbetterapi-css-module"),document.head.appendChild(Z),D.add(_)},Y=u;var d=`
.eb-checkbox__input {
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    width: 1.15em;
    height: 1.15em;
    border: .1em solid grey;
    border-radius: 4px;
    display: inline-grid;
    place-content: center;
    margin: 0;
}
.eb-checkbox__input:checked:before {
    transform: scale(1);
}
.eb-checkbox__input:before {
    content: "";
    transform: scale(0);
    width: .65em;
    height: .65em;
    border-radius: 2px;
    box-shadow: inset 1em 1em var(--c-fg-secondary);
}
.eb-button__label {
    display: inline-flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`,h=()=>{Y({id:"checkbox",cssText:d});const _=document.createElement("div");_.classList.add("eb-button__label");const q=document.createElement("div");q.classList.add("eb-checkbox");const Z=document.createElement("div");Z.classList.add("formkit-outer"),Z.dataset.family="box",Z.dataset.type="checkbox",Z.dataset.complete="true";const K=document.createElement("label");K.classList.add("formkit-wrapper","eb-checkbox__wrapper"),K.dataset.checked="true";const z=document.createElement("span");z.classList.add("formkit-inner","eb-checkbox__inner");const F=document.createElement("input");F.classList.add("formkit-input","eb-checkbox__input"),F.type="checkbox";const G=document.createElement("span");return G.classList.add("formkit-decorator"),G.setAttribute("aria-hidden","true"),z.appendChild(F),z.appendChild(G),K.appendChild(z),Z.appendChild(K),q.appendChild(Z),_.appendChild(q),_};function w(_){const q=document.createElement("div");q.classList.add("c-menu-bar"),q.style.width="100%";const Z=document.createElement("div");Z.classList.add("p-menubar","p-component"),Z.setAttribute("data-pc-name","menubar"),Z.setAttribute("data-pc-section","root");const K=document.createElement("div");K.classList.add("p-menubar-start"),K.setAttribute("data-pc-section","start");const z=document.createElement("div");z.classList.add("c-settings__title"),z.style.padding="0 var(--c-space-4)",z.style.fontWeight="700",z.textContent=_.title,K.appendChild(z);const F=document.createElement("ul");F.classList.add("p-menubar-root-list"),_.items.forEach((Q)=>{const X=document.createElement("li");X.classList.add("p-menuitem"),X.setAttribute("role","menuitem");const H=document.createElement("div");H.classList.add("p-menuitem-content"),H.setAttribute("data-pc-section","content");const W=document.createElement("div");W.classList.add("c-settings__item"),W.setAttribute("data-is-active","true"),W.addEventListener("click",()=>{Z.classList.remove("p-menubar-mobile-active")});const $=document.createElement("a");if($.setAttribute("href",Q.url),$.setAttribute("draggable","false"),$.draggable=!1,$.classList.add("p-menuitem-link"),U.eventManager.on("onPageOpen",(A)=>{if(A.newUrl===Q.url){if(Q.onOpen)Q.onOpen();$.style.backgroundColor="rgba(255,255,255,.04)",$.style.borderRadius="var(--c-border-radius-2)"}else $.style.backgroundColor="",$.style.borderRadius=""}),Q.icon){const A=document.createElement("i");A.classList.add("c-icon","fas",Q.icon),A.style.marginRight="var(--c-space-2)",$.appendChild(A)}const L=document.createElement("span");L.textContent=Q.title,$.appendChild(L),W.appendChild($),H.appendChild(W),X.appendChild(H),F.appendChild(X)});const G=document.createElement("a");G.setAttribute("role","button"),G.setAttribute("tabindex","0"),G.classList.add("p-menubar-button"),G.setAttribute("aria-haspopup","true"),G.setAttribute("aria-expanded","false"),G.setAttribute("aria-label","Navigation"),G.setAttribute("data-pc-section","button"),G.setAttribute("aria-controls","pv_id_3"),G.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true" data-pc-section="menubuttonicon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z" fill="currentColor"></path></svg>',G.addEventListener("click",()=>{Z.classList.toggle("p-menubar-mobile-active"),F.style.zIndex=Z.classList.contains("p-menubar-mobile-active")?"1200":""}),window.addEventListener("resize",()=>{if(window.innerWidth<955)Z.classList.add("p-menubar-mobile");else Z.classList.remove("p-menubar-mobile"),Z.classList.remove("p-menubar-mobile-active")}),window.dispatchEvent(new Event("resize"));const J=document.createElement("div");if(J.classList.add("p-menubar-end"),J.setAttribute("data-pc-section","end"),J.style.display="flex",J.style.gap=".5em",J.style.alignItems="center",_.customButtons)_.customButtons.forEach((Q)=>{J.appendChild(Q)});return Z.appendChild(K),Z.appendChild(G),Z.appendChild(F),Z.appendChild(J),q.appendChild(Z),q}var j;(function(K){K["INFO"]="info";K["ERROR"]="error";K["WARN"]="warn"})(j||(j={}));window.global=window;class I{log(_,q){const K=`${(new Date()).toString()} [EvenBetterAPI]`;switch(_){case j.INFO:console.log(`${K} [INFO] ${q}`);break;case j.ERROR:console.error(`${K} [ERROR] ${q}`);break;case j.WARN:console.warn(`${K} [WARN] ${q}`);break;default:console.log(`${K} [UNKNOWN] ${q}`)}}info(_){this.log(j.INFO,_)}error(_){this.log(j.ERROR,_)}warn(_){this.log(j.WARN,_)}}var s=new I,V=s;class O{events={};registerEvent(_,q){this.events[_]=q}triggerEvent(_,q){const Z=this.events[_];if(Z)Z.trigger(q);else console.error(`Event "${_}" not registered.`)}on(_,q){const Z=this.events[_];if(Z)Z.addHandler(q);else console.error(`Event "${_}" not registered.`)}initEvents(){V.info(`Initializing ${Object.keys(this.events).length} custom events`);for(let _ in this.events)this.events[_].init()}}class R{handlers=[];addHandler(_){this.handlers.push(_)}init(){const _=setInterval(()=>{if(p())clearInterval(_),this.trigger()},25)}trigger(){this.handlers.forEach((_)=>_())}}var p=()=>{return document.querySelector(".c-authenticated")!==null};class T{handlers=[];addHandler(_){this.handlers.push(_)}init(){new MutationObserver((q)=>{for(let Z of q)if(Z.type==="childList")Z.addedNodes.forEach((K)=>{const z=K;if(K.nodeType===1&&z.classList.contains("p-contextmenu"))this.trigger(z)})}).observe(document.body,{childList:!0,subtree:!0})}trigger(_){this.handlers.forEach((q)=>q(_))}}class x{handlers=[];eventManager;constructor(_){this.eventManager=_}addHandler(_){this.handlers.push(_)}init(){let _=window.location.href;const q=new MutationObserver(()=>{if(window.location.href!==_){let K=new URL(window.location.href).hash,z=new URL(_).hash;if(_=window.location.href,K.includes("?custom-path="))K=K.split("?custom-path=")[1];if(z.includes("?custom-path="))z=z.split("?custom-path=")[1];document.querySelector(".c-content")?.setAttribute("data-page",K),this.trigger({newUrl:K,oldUrl:z})}}),Z={subtree:!0,childList:!0};q.observe(document,Z)}trigger(_){if(V.info(`Page updated: ${_.oldUrl} -> ${_.newUrl}`),_.newUrl.startsWith("#/settings/"))this.eventManager.triggerEvent("onSettingsTabOpen",_.newUrl.replace("#/settings/",""));this.handlers.forEach((q)=>q(_))}}class y{handlers=[];addHandler(_){this.handlers.push(_)}init(){}trigger(_){V.info(`Settings tab opened: ${_}`),this.handlers.forEach((q)=>q(_))}}var r=`
  .evenbetter-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
  }
  
  .evenbetter-modal__content {
    background-color: var(--c-bg-default);
    padding: 1rem;
    border-radius: 5px;
    width: 50%;
    max-width: 500px;
  }
  
  .evenbetter-modal__content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .evenbetter-modal__content-header-title {
    font-size: 1.1rem;
    margin: 0;
  }
  
  .evenbetter-modal__content-body {
    margin-bottom: 1rem;
  }
  
  .evenbetter-modal__content-body-text {
    font-size: 0.9rem;
    color: var(--c-fg-subtle);
    word-break: break-word;
    user-select: text !important;
    -webkit-user-select: text !important;
  
    white-space: break-spaces;
    overflow: auto;
    max-height: 40em;
  }
  
  .evenbetter-modal__content-body a {
    color: var(--c-fg-default);
  }
  
  .evenbetter-modal__content-body-close {
    background-color: var(--c-bg-subtle);
    border: 1px solid var(--c-header-cell-border);
    color: #fff;
    padding: 0.5rem;
    width: 100%;
    margin-top: 0.5rem;
    cursor: pointer;
    transition: 0.2s ease background-color;
  }
  
  .evenbetter-modal__content-body-close:hover {
    background-color: var(--c-bg-default);
  }
`;document.addEventListener("keydown",(_)=>{if(_.key==="Escape")f()});var i=({title:_,content:q})=>{Y({id:"evenbetterapi-modal",cssText:r.toString()});const Z=document.createElement("div");Z.classList.add("evenbetter-modal");const K=document.createElement("div");K.classList.add("evenbetter-modal__content");const z=document.createElement("div");z.classList.add("evenbetter-modal__content-header");const F=document.createElement("h2");F.classList.add("evenbetter-modal__content-header-title"),F.textContent=_,z.appendChild(F);const G=document.createElement("div");G.classList.add("evenbetter-modal__content-body");const J=document.createElement("p");J.classList.add("evenbetter-modal__content-body-text"),J.textContent=q;const Q=document.createElement("button");return Q.classList.add("evenbetter-modal__content-body-close"),Q.textContent="Close",Q.addEventListener("click",f),G.appendChild(J),G.appendChild(Q),K.appendChild(z),K.appendChild(G),Z.appendChild(K),Z.setAttribute("data-modal-title",_),Z},l=()=>{return document.querySelector(".evenbetter-modal")!==null},f=()=>{document.querySelector(".evenbetter-modal")?.remove()},b=({title:_,content:q})=>{if(l())f();const Z=i({title:_,content:q});document.body.appendChild(Z)};var m=`
.v-toast--fade-in {
    animation: fadeIn 0.15s ease-in-out forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.v-toast--fade-out {
    animation: fadeOut 0.15s ease-in-out forwards;
}
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}`,a=(_,q,Z)=>{const K=document.createElement("div");K.classList.add("v-toast"),K.classList.add(`v-toast--${Z}`);const z=document.createElement("div");z.setAttribute("role","alert"),z.classList.add("v-toast__item"),z.classList.add(`v-toast__item--${q}`),z.classList.add(`v-toast__item--${Z}`),K.appendChild(z);const F=document.createElement("div");F.classList.add("v-toast__icon"),z.appendChild(F);const G=document.createElement("p");return G.classList.add("v-toast__text"),G.textContent=_,z.appendChild(G),K.classList.add("v-toast--fade-in"),K},S=(_)=>{const{message:q,type:Z,position:K,duration:z}=_;Y({id:"eb-toast",cssText:m});let F=document.querySelector(`.v-toast--${K}`);if(!F)F=document.createElement("div"),F.classList.add("v-toast"),F.classList.add(`v-toast--${K}`),document.body.appendChild(F);const G=a(q,Z,K);F.appendChild(G),setTimeout(()=>{G.classList.add("v-toast--fade-out"),setTimeout(()=>{G.remove()},150)},z-150)};function B(_,q="Search...",Z=!1,K){Y({id:"eb-text-input",cssText:o});const z=document.createElement("div");z.classList.add("formkit-outer","c-text-input__outer"),z.setAttribute("style",`width: ${_};`);const F=document.createElement("div");F.classList.add("formkit-wrapper"),F.style.display="flex";const G=document.createElement("div");G.classList.add("formkit-inner","eb-text-input__inner");const J=document.createElement("div");J.classList.add("c-text-input__prefix"),J.setAttribute("style","align-self: center; color: var(--c-fg-subtle);");const Q=document.createElement("i");if(Q.classList.add("c-icon","fas"),K)Q.classList.add(K);const X=document.createElement("input");if(X.setAttribute("placeholder",q),X.setAttribute("spellcheck","false"),X.classList.add("formkit-input","c-text-input__input"),X.setAttribute("type","text"),X.setAttribute("style","width: 100%; background: transparent; border: 0; outline: 0; color: inherit; box-sizing: border-box; line-height: inherit;"),K)J.appendChild(Q);if(G.appendChild(J),G.appendChild(X),Z){const H=document.createElement("button");H.innerHTML='<i class="fas fa-copy"></i>',H.setAttribute("style","background: transparent; border: 0; outline: 0; cursor: pointer; padding: 0; margin-left: 10px;"),H.addEventListener("click",()=>{navigator.clipboard.writeText(X.value),U.toast.showToast({message:"Copied to clipboard",position:"bottom",type:"info",duration:1000})}),G.appendChild(H)}return F.appendChild(G),z.appendChild(F),z}var o=`
.eb-text-input__inner {
    gap: var(--c-space-1); 
    flex: 1; 
    display: flex; 
    align-items: center; 
    padding-left: var(--c-space-2); 
    padding-right: var(--c-space-2); 
    box-sizing: border-box; 
    border: var(--c-border-width-1) solid var(--c-border-default); 
    border-radius: var(--c-border-radius-2); 
    color: var(--c-fg-default); 
    background-color: var(--c-bg-default); 
    min-height: var(--c-space-10);
}
.eb-text-input__inner:focus-within {
    border: var(--c-border-width-2) solid var(--c-border-secondary);
}
.eb-text-input__inner textarea {
  padding-top: var(--c-space-2);
}
`;class P{handlers=[];commandObserver=null;selectedCommand=null;addHandler(_){this.handlers.push(_)}init(){const _=(K)=>{this.commandObserver=new MutationObserver((z)=>{const F=q();if(F!==this.selectedCommand)this.selectedCommand=F}),this.commandObserver.observe(K,{attributes:!0,subtree:!0})},q=()=>{return document.querySelector("[command-item][aria-selected='true']")};new MutationObserver((K)=>{for(let z of K)if(z.type==="childList")z.addedNodes.forEach((F)=>{const G=F;if(F.nodeType===1&&G.hasAttribute("command-theme"))_(G)}),z.removedNodes.forEach((F)=>{const G=F;if(F.nodeType===1&&G.hasAttribute("command-theme")){if(!this.selectedCommand)return;const J=this.selectedCommand.getAttribute("data-value");if(J)this.trigger(J);if(this.commandObserver)this.commandObserver.disconnect(),this.commandObserver=null}})}).observe(document.body,{childList:!0,subtree:!0})}trigger(_){this.handlers.forEach((q)=>q(_))}}var N=window.Caido;var M=[],C=(_)=>{_.on("onCommandRun",(q)=>{const Z=M.find((K)=>K.commandName===q);if(!Z)return;n(Z)})},n=(_)=>{const q=document.createElement("div");q.classList.add("custom");const Z=document.createElement("div");Z.setAttribute("command-root",""),q.appendChild(Z);const K=document.createElement("div");K.setAttribute("command-dialog",""),Z.appendChild(K);const z=document.createElement("div");z.setAttribute("command-dialog-mask",""),z.style.display="flex",z.style.justifyContent="center",z.style.alignItems="center",z.addEventListener("click",()=>{q.remove()}),K.appendChild(z);const F=document.createElement("div");F.setAttribute("command-dialog-wrapper",""),F.style.minWidth="600px",F.style.padding="1em",F.style.margin="0",z.appendChild(F);const G=document.createElement("div");G.setAttribute("command-dialog-body",""),G.style.display="flex",G.style.gap="0.5em",F.addEventListener("click",(X)=>{X.stopPropagation()}),F.appendChild(G);const J=U.components.createTextInput("100%",_.promptPlaceholder);J.style.zIndex="100",J.addEventListener("click",(X)=>{X.stopPropagation()}),G.appendChild(J);const Q=N.ui.button({label:"Submit",variant:"primary"});Q.addEventListener("click",()=>{const X=J.querySelector("input");_.onPrompt(X.value),q.remove()}),G.appendChild(Q),document.body.appendChild(q),J.querySelector("input")?.focus(),J.addEventListener("keydown",(X)=>{if(X.key==="Enter")Q.click();if(X.key==="Escape")q.remove()})},t=(_,q,Z)=>{M.push({commandName:_,promptPlaceholder:q,onPrompt:Z})},g={createPromptCommand:t};var v=async()=>{if(localStorage.getItem("previousPath"))setTimeout(()=>{window.location.hash=localStorage.getItem("previousPath")||"",localStorage.removeItem("previousPath")},200);const _=new WebSocket("ws://localhost:8081");_.addEventListener("open",()=>{U.toast.showToast({message:"Connected to Caido Hot Reloading Server",duration:2000,type:"success",position:"bottom"})}),_.addEventListener("close",()=>{U.toast.showToast({message:"Disconnected from Caido Hot Reloading Server",duration:2000,type:"error",position:"bottom"})}),_.addEventListener("message",(K)=>{try{const z=JSON.parse(K.data),F=z.event,G=z.data;switch(F){case"caido:loadJS":q(G,"");break;case"caido:loadCSS":q("",G);break;case"caido:reload":localStorage.setItem("previousPath",window.location.hash),location.reload();break;default:console.error("Unknown event type received:",F)}}catch(z){console.error("Error parsing WebSocket message:",z)}});const q=async(K,z)=>{const F=await Z();if(!F)return;const G={input:{data:F.data,migrations:F.migrations}};if(K)G.input.data.js=K;if(z)G.input.data.css=z;return N.graphql.updateViewerSettings(G)},Z=async()=>{return await N.graphql.userSettings().then((K)=>{return K.viewer.settings})}};var e=`
  :root {
    --c-table-background: #2b2e35;
    --c-table-even-item-row: #353942;
    --c-table-item-row-hover: var(--c-bg-default);
  }
  .c-evenbetter_table_card-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .c-evenbetter_table-container {
    overscroll-behavior-y: none;
    overflow: auto;
    height: 100%;
    border-radius: 5px !important;
  }
  .c-evenbetter_table_header-row {
    min-width: fit-content;
    width: 100%;
    white-space: nowrap;
    border-bottom: 2px solid var(--c-bg-default);
    background-color: var(--c-table-background);
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .c-evenbetter_table_header-cell {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: var(--c-space-2) var(--c-space-4);
    color: var(--c-fg-subtle);
    user-select: none;
    min-width: var(--1e00f3f4);
    box-sizing: border-box;
    border-right: .1em solid var(--c-bg-default);
  }
  [data-sortable="true"][data-is-resizing="false"]
    .c-evenbetter_table_header-cell {
    cursor: pointer;
  }
  [data-align="start"] .c-evenbetter_header-cell_wrapper {
    flex-direction: row;
  }
  .c-evenbetter_header-cell_wrapper {
    display: inline-flex;
    gap: var(--c-space-2);
    width: 100%;
  }
  .c-evenbetter_header-cell_content {
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
  }
  .c-evenbetter_table-item-cell {
    min-width: var(--cellWidth);
    display: inline-flex;
    align-items: center;
    padding: 0 1rem;
    width: var(--cellWidth);
    height: 100%;
    box-sizing: border-box;
  }
  .c-evenbetter_table-item-cell__inner {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .c-evenbetter_table-item-row {
    display: flex;
    min-width: fit-content;
    height: 42px;
    box-sizing: border-box;
    white-space: nowrap;
    border-bottom: 0.1em solid var(--c-bg-default);
    width: 100%;
  }
  .c-evenbetter_table-item-row:hover {
    background-color: var(--c-table-item-row-hover);
  }
  .c-evenbetter_table_row[data-is-even="true"] {
    background-color: var(--c-table-even-item-row);
  }
  .c-evenbetter_table_row:hover {
    cursor: pointer;
    background-color: var(--c-table-item-row-hover);
  }
  .c-evenbetter_table_header-cell:last-child {
    border-right: none;
  }
  .c-evenbetter_table {
    outline: none;
    width: 100%;
    height: 100%;
    display: flex;
}`,_1=()=>{return'<div class="c-evenbetter_table_card-body"><div class="c-evenbetter_table-container" data-is-empty="false" data-is-loading="false" style="overflow-y: auto;"><div class="c-evenbetter_table_header-row"></div><div class="c-table__wrapper" style="margin-top: 0px;"></div></div></div>'},c=(_)=>{return new k(_)};class k{_;tableElement;tableWrapper;constructor(_){this.config=_;Y({id:"eb-table-css",cssText:e}),this.tableElement=document.createElement("div"),this.tableElement.className="c-evenbetter_table",this.tableElement.style.overflow="auto",this.tableElement.style.width="100%",this.tableElement.style.height=this.config.tableHeight,this.tableElement.setAttribute("data-row-height",this.config.rowHeight||"42px"),this.tableElement.innerHTML=_1(),this.tableWrapper=this.tableElement.querySelector(".c-table__wrapper");const q=this.tableElement.querySelector(".c-evenbetter_table_card-body");if(!q)throw new Error("Card body not found");q.style.height=this.config.tableHeight,q.style.width="100%";const Z=this.tableElement.querySelector(".c-evenbetter_table_header-row");if(!Z)throw new Error("Column row not found");this.config.columns.forEach((K)=>{Z.innerHTML+=`<div class="c-evenbetter_table_header-cell" data-sortable="true" data-resizable="true" data-align="start" data-is-resizing="false" style="--1e00f3f4: 4rem; width: max(${K.width}, 56px);"><div class="c-evenbetter_header-cell_wrapper"><div class="c-evenbetter_header-cell_content">${K.name}</div></div></div>`})}filterRows(_){const q=this.tableWrapper.querySelectorAll(".c-evenbetter_table_row");let Z=1;q.forEach((K,z)=>{const F=K,G=K.querySelectorAll(".c-evenbetter_table-item-cell");let J=!1;if(G.forEach((Q)=>{if(Q.textContent?.toLowerCase().includes(_.toLowerCase()))J=!0}),J)F.style.display="flex",F.setAttribute("data-is-even",(Z%2===0).toString()),Z++;else F.style.display="none",F.removeAttribute("data-is-even")})}clearRows(){this.tableWrapper.innerHTML=""}addRow(_,q){const Z=(this.tableWrapper.children.length+1)%2===0,K=document.createElement("div");K.className="c-evenbetter_table_row",K.setAttribute("data-is-even",Z.toString());const z=document.createElement("div");if(z.className="c-evenbetter_table-item-row",this.config.rowHeight)z.style.height=this.config.rowHeight;if(_.forEach((F)=>{const G=this.config.columns.find((X)=>X.name===F.columnName)?.width,J=document.createElement("div");J.className="c-evenbetter_table-item-cell",J.setAttribute("data-column-id",F.columnName),J.setAttribute("data-align","start"),J.style.setProperty("--cellWidth",`max(${G}, 56px)`);const Q=document.createElement("div");if(Q.className="c-evenbetter_table-item-cell__inner",typeof F.value==="string")Q.textContent=F.value;else Q.appendChild(F.value);J.appendChild(Q),z.appendChild(J)}),q)z.addEventListener("click",q);K.appendChild(z),this.tableWrapper.appendChild(K)}getHTMLElement(){return this.tableElement}static createTable(_){return new k(_)}}var K1=function(){const _=new O,q=new R,Z=new y,K=new x(_),z=new T,F=new P;return _.registerEvent("onCaidoLoad",q),_.registerEvent("onSettingsTabOpen",Z),_.registerEvent("onPageOpen",K),_.registerEvent("onContextMenuOpen",z),_.registerEvent("onCommandRun",F),_.initEvents(),C(_),{modal:{openModal:b,closeModal:f},toast:{showToast:S},components:{createTable:c,createNavigationBar:w,createCheckbox:h,createTextInput:B},eventManager:_,loadCSS:Y,promptCommands:g,hotReloading:v}},E;if(typeof window!=="undefined"&&window.EvenBetterAPI)E=window.EvenBetterAPI;else if(E=K1(),typeof window!=="undefined")window.EvenBetterAPI=E;var U=E;export{U as default};
