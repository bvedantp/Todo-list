(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,'* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n    color: whitesmoke;\n}\n\nheader {\n    padding: 18px;\n    background-color: rebeccapurple;\n}\n\nbody {\n    display: flex;\n    flex-direction: column; \n    min-height: 100vh; /*to make footer sticky down */\n    background-color: rgba(197, 151, 243, 0.521);\n}\n\n#content {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n}\n\n.proj-list {\n    display: flex;\n    flex-direction: column;\n    margin-right: 2vw;\n    padding: 12px;\n    min-width: 20vw;\n    gap: 10px;\n    background-color: rgba(88, 74, 102, 0.616);\n}\n\n.proj-list button {\n    background-color: rgba(197, 151, 243, 0.521);\n    padding: 12px;\n    border: 3px solid rebeccapurple;\n    border-radius: 10px;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.proj-list h4 {\n    text-align: center;\n    border-bottom: 3px white;\n    border-bottom-width: 1px;\n    border-bottom-style: groove;\n    max-width: 13em;\n    overflow: hidden; /* so overflowed text ... m render ho */\n    text-overflow: ellipsis;\n    padding: 5px;\n}\n\n.all-todos {\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n    padding-top: 18px;\n    gap: 30px;\n    margin: 5px;\n    min-width: 70vw;\n}\n\n.all-todos h3 {\n    font-size: xx-large;\n    text-shadow: 2px 6px 9px rebeccapurple;\n}\n\n.all-todos h3:after {\n    content: ""; /* This is necessary for the border bottom line to work. */ \n    display: block; /* This will put the pseudo element on its own line. */\n    width: 50%; /* Change this to whatever width you want. */\n    padding-top: 16px; /* This creates some space between the element and the border. */\n    border-bottom: 2px solid whitesmoke; /* This creates the border. Replace black with whatever color you want. */\n}\n\n#add-todo {\n    position: fixed;\n    top: 90%;\n    font-size: x-large;\n    font-weight: 600;\n    right: 3%;\n    height: 60px;\n    width: 60px;\n    text-align: center;\n    vertical-align: middle;\n    background-color: rgb(162, 70, 255);\n    border-radius: 50%;\n    border: 1px solid rgb(203, 178, 228);\n    box-shadow: 2px 3px 12px rebeccapurple;\n}\n\n.todos {\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n    gap: 15px;\n    text-shadow: 1px 1px 12px rebeccapurple;\n}\n\n.todos li {\n    display: flex;\n    justify-content: flex-start;\n    gap: 5px;\n    border: 1px solid grey;\n    padding: 8px;\n    border-radius: 8px;\n    align-items: center;\n}\n\n.todos button {\n    display:inline-block;\n    height: 19px;\n    width: 19px;\n    border-radius: 50%;\n    border: 1px solid red;\n}\n\n.todos i {\n    margin-left: auto; /*to add icon to very right  |||  float:right is used if no flexbox*/\n}\n\nfooter {\n    margin-top: auto; /* to set footer to bottom*/\n    text-align: center;\n    background-color: rgb(61, 49, 73);\n    padding: 6px;\n}',""]);const d=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],d=0;d<n.length;d++){var l=n[d],s=o.base?l[0]+o.base:l[0],c=a[s]||0,p="".concat(s," ").concat(c);a[s]=c+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var l=o(n,r),s=0;s<a.length;s++){var c=t(a[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),d=t(565),l=t.n(d),s=t(216),c=t.n(s),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=c(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const x=document.getElementById("content");(()=>{let n=document.createElement("div");n.classList.add("proj-list");let e=document.createElement("button");e.innerHTML="Add Project +";let t=document.createElement("h4");t.innerHTML="Project 1";let o=document.createElement("div");o.classList.add("all-todos");let r=document.createElement("h3");r.innerText="Project 1";let a=document.createElement("ul");a.innerHTML='<li><button></button> This is one tododaaadaddddddddd 11/2/22 <i class="far fa-trash-alt"></i></li>\n    <li><button></button>This is another todo<i class="far fa-trash-alt"></i></li>';let i=document.createElement("button");i.id="add-todo",i.innerText="+",x.appendChild(n),x.appendChild(o),x.appendChild(i),n.appendChild(e),n.appendChild(t),o.appendChild(r),o.appendChild(a)})()})()})();