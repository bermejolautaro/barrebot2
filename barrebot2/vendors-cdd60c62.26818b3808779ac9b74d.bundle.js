(self.webpackChunkbarrebot_aureliajs=self.webpackChunkbarrebot_aureliajs||[]).push([[449],{"aurelia-testing":(t,e,n)=>{"use strict";n.r(e),n.d(e,{CompileSpy:()=>i.CompileSpy,ComponentTester:()=>l,StageComponent:()=>a,ViewSpy:()=>r.ViewSpy,configure:()=>p,waitFor:()=>h,waitForDocumentElement:()=>c,waitForDocumentElements:()=>u});var i=n("aurelia-testing/compile-spy"),r=n("aurelia-testing/view-spy"),o=n(781),s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t};function h(t,e){void 0===e&&(e={present:!0,interval:50,timeout:5e3});var n=!1;return e=s({present:!0,interval:50,timeout:5e3},e),Promise.race([new Promise((function(t,i){return setTimeout((function(){n=!0,i(new Error(e.present?"Element not found":"Element not removed"))}),e.timeout)})),function i(){var r=t(),o=null!==r&&(!(r instanceof NodeList)&&!r.jquery||r.length>0);return!e.present==!o||n?Promise.resolve(r):new Promise((function(t){return setTimeout(t,e.interval)})).then(i)}()])}function c(t,e){return h((function(){return document.querySelector(t)}),e)}function u(t,e){return h((function(){return document.querySelectorAll(t)}),e)}var a=function(){function t(){}return t.withResources=function(t){return void 0===t&&(t=[]),(new l).withResources(t)},t}(),l=function(){function t(){this.resources=[]}return t.prototype.configure=function(t){return t.use.standardConfiguration()},t.prototype.bootstrap=function(t){this.configure=t},t.prototype.withResources=function(t){return this.resources=t,this},t.prototype.inView=function(t){return this.html=t,this},t.prototype.boundTo=function(t){return this.bindingContext=t,this},t.prototype.manuallyHandleLifecycle=function(){return this._prepareLifecycle(),this},t.prototype.create=function(t){var e=this;return t((function(t){return Promise.resolve(e.configure(t)).then((function(){return e.resources&&t.use.globalResources(e.resources),t.start().then((function(){return e.host=document.createElement("div"),e.host.innerHTML=e.html,document.body.appendChild(e.host),t.enhance(e.bindingContext,e.host).then((function(){return e.rootView=t.root,e.element=e.host.firstElementChild,t.root.controllers.length&&(e.viewModel=t.root.controllers[0].viewModel),new Promise((function(t){return setTimeout((function(){return t()}),0)}))}))}))}))}))},t.prototype.dispose=function(){if(void 0===this.host||void 0===this.rootView)throw new Error("Cannot call ComponentTester.dispose() before ComponentTester.create()");return this.rootView.detached(),this.rootView.unbind(),this.host.parentNode.removeChild(this.host)},t.prototype._prepareLifecycle=function(){var t=this,e=o.G7.prototype.bind;o.G7.prototype.bind=function(){},this.bind=function(n){return new Promise((function(i){o.G7.prototype.bind=e,void 0!==n&&(t.bindingContext=n),t.rootView.bind(t.bindingContext),setTimeout((function(){return i()}),0)}))};var n=o.G7.prototype.attached;o.G7.prototype.attached=function(){},this.attached=function(){return new Promise((function(e){o.G7.prototype.attached=n,t.rootView.attached(),setTimeout((function(){return e()}),0)}))},this.detached=function(){return new Promise((function(e){t.rootView.detached(),setTimeout((function(){return e()}),0)}))},this.unbind=function(){return new Promise((function(e){t.rootView.unbind(),setTimeout((function(){return e()}),0)}))}},t.prototype.waitForElement=function(t,e){var n=this;return h((function(){return n.element.querySelector(t)}),e)},t.prototype.waitForElements=function(t,e){var n=this;return h((function(){return n.element.querySelectorAll(t)}),e)},t}();function p(t){t.globalResources(["./compile-spy","./view-spy"])}},"aurelia-testing/compile-spy":(t,e,n)=>{"use strict";n.r(e),n.d(e,{CompileSpy:()=>h});var i=n(781),r=n(158),o=n(99),s=n(15),h=function(){function t(t,e){(0,o.jl)("compile-spy").info(t.toString(),e)}return function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([(0,i.OV)("compile-spy"),(0,r.f3)(s.SO.Element,i.C1)],t)}()},"aurelia-testing/view-spy":(t,e,n)=>{"use strict";n.r(e),n.d(e,{ViewSpy:()=>o});var i=n(781),r=n(99),o=function(){function t(){this.logger=(0,r.jl)("view-spy")}return t.prototype._log=function(t,e){this.value||"created"!==t?this.value&&-1!==this.value.indexOf(t)&&this.logger.info(t,this.view,e):this.logger.info(t,this.view)},t.prototype.created=function(t){this.view=t,this._log("created")},t.prototype.bind=function(t){this._log("bind",t)},t.prototype.attached=function(){this._log("attached")},t.prototype.detached=function(){this._log("detached")},t.prototype.unbind=function(){this._log("unbind")},function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([(0,i.OV)("view-spy")],t)}()},639:()=>{},231:(t,e,n)=>{"use strict";var i,r=n(15);Object.defineProperty(r.iw,"Loader",{get:function(){return i||(i=n(757).HV)},set:function(t){i=t}})},195:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const i=t=>"bigint"==typeof t||!Number.isNaN(Number(t))&&Math.floor(Number(t))===t,r=t=>"bigint"==typeof t||t>=0&&Number.isSafeInteger(t);function o(t,e){if(0===e.length)return t;let n;const i=[...t];for(let t=i.length-1,r=0,o=0;t>0;t--,r++){r%=e.length,o+=n=e[r].codePointAt(0);const s=(n+r+o)%t,h=i[t],c=i[s];i[s]=h,i[t]=c}return i}const s=(t,e)=>t.reduce(((n,i)=>{const r=e.indexOf(i);if(-1===r)throw new Error(`The provided ID (${t.join("")}) is invalid, as it contains characters that do not exist in the alphabet (${e.join("")})`);if("bigint"==typeof n)return n*BigInt(e.length)+BigInt(r);const o=n*e.length+r;if(Number.isSafeInteger(o))return o;if("function"==typeof BigInt)return BigInt(n)*BigInt(e.length)+BigInt(r);throw new Error("Unable to decode the provided string, due to lack of support for BigInt numbers in the current environment")}),0),h=/^\+?\d+$/,c=t=>new RegExp(t.map((t=>u(t))).sort(((t,e)=>e.length-t.length)).join("|")),u=t=>t.replace(/[\s#$()*+,.?[\\\]^{|}-]/g,"\\$&");class a{constructor(t="",e=0,n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",i="cfhistuCFHISTU"){if(this.minLength=e,"number"!=typeof e)throw new TypeError(`Hashids: Provided 'minLength' has to be a number (is ${typeof e})`);if("string"!=typeof t)throw new TypeError(`Hashids: Provided 'salt' has to be a string (is ${typeof t})`);if("string"!=typeof n)throw new TypeError(`Hashids: Provided alphabet has to be a string (is ${typeof n})`);const r=Array.from(t),s=Array.from(n),h=Array.from(i);this.salt=r;const a=[...new Set(s)];var l;if(a.length<16)throw new Error(`Hashids: alphabet must contain at least 16 unique characters, provided: ${a.join("")}`);this.alphabet=(l=h,a.filter((t=>!l.includes(t))));const p=(f=a,h.filter((t=>f.includes(t))));var f;let d,g;this.seps=o(p,r),(0===this.seps.length||this.alphabet.length/this.seps.length>3.5)&&(d=Math.ceil(this.alphabet.length/3.5),d>this.seps.length&&(g=d-this.seps.length,this.seps.push(...this.alphabet.slice(0,g)),this.alphabet=this.alphabet.slice(g))),this.alphabet=o(this.alphabet,r);const y=Math.ceil(this.alphabet.length/12);this.alphabet.length<3?(this.guards=this.seps.slice(0,y),this.seps=this.seps.slice(y)):(this.guards=this.alphabet.slice(0,y),this.alphabet=this.alphabet.slice(y)),this.guardsRegExp=c(this.guards),this.sepsRegExp=c(this.seps),this.allowedCharsRegExp=(t=>new RegExp(`^[${t.map((t=>u(t))).sort(((t,e)=>e.length-t.length)).join("")}]+$`))([...this.alphabet,...this.guards,...this.seps])}encode(t,...e){let n=Array.isArray(t)?t:[...null!=t?[t]:[],...e];return 0===n.length?"":(n.every(i)||(n=n.map((t=>{return"bigint"==typeof t||"number"==typeof t?t:(e=String(t),h.test(e)?Number.parseInt(e,10):Number.NaN);var e}))),n.every(r)?this._encode(n).join(""):"")}decode(t){return t&&"string"==typeof t&&0!==t.length?this._decode(t):[]}encodeHex(t){let e=t;switch(typeof e){case"bigint":e=e.toString(16);break;case"string":if(!/^[\dA-Fa-f]+$/.test(e))return"";break;default:throw new Error(`Hashids: The provided value is neither a string, nor a BigInt (got: ${typeof e})`)}const n=(i=e,12,r=t=>Number.parseInt(`1${t}`,16),Array.from({length:Math.ceil(i.length/12)},((t,e)=>r(i.slice(12*e,12*(e+1))))));var i,r;return this.encode(n)}decodeHex(t){return this.decode(t).map((t=>t.toString(16).slice(1))).join("")}isValidId(t){return this.allowedCharsRegExp.test(t)}_encode(t){let{alphabet:e}=this;const n=t.reduce(((t,e,n)=>t+("bigint"==typeof e?Number(e%BigInt(n+100)):e%(n+100))),0);let i=[e[n%e.length]];const r=[...i],{seps:s}=this,{guards:h}=this;if(t.forEach(((n,h)=>{const c=r.concat(this.salt,e);e=o(e,c);const u=((t,e)=>{const n=[];let i=t;if("bigint"==typeof i){const t=BigInt(e.length);do{n.unshift(e[Number(i%t)]),i/=t}while(i>BigInt(0))}else do{n.unshift(e[i%e.length]),i=Math.floor(i/e.length)}while(i>0);return n})(n,e);if(i.push(...u),h+1<t.length){const t=u[0].codePointAt(0)+h,e="bigint"==typeof n?Number(n%BigInt(t)):n%t;i.push(s[e%s.length])}})),i.length<this.minLength){const t=(n+i[0].codePointAt(0))%h.length;if(i.unshift(h[t]),i.length<this.minLength){const t=(n+i[2].codePointAt(0))%h.length;i.push(h[t])}}const c=Math.floor(e.length/2);for(;i.length<this.minLength;){e=o(e,e),i.unshift(...e.slice(c)),i.push(...e.slice(0,c));const t=i.length-this.minLength;if(t>0){const e=t/2;i=i.slice(e,e+this.minLength)}}return i}_decode(t){if(!this.isValidId(t))throw new Error(`The provided ID (${t}) is invalid, as it contains characters that do not exist in the alphabet (${this.guards.join("")}${this.seps.join("")}${this.alphabet.join("")})`);const e=t.split(this.guardsRegExp),n=e[3===e.length||2===e.length?1:0];if(0===n.length)return[];const i=n[Symbol.iterator]().next().value,r=n.slice(i.length).split(this.sepsRegExp);let h=this.alphabet;const c=[];for(const t of r){const e=o(h,[i,...this.salt,...h].slice(0,h.length));c.push(s(Array.from(t),e)),h=e}return this._encode(c).join("")!==t?[]:c}}}}]);