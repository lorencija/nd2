!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";var o=function(){function t(t,e,n){this.paskolosDydis=t,this.terminas=e,this.palukanos=n}return t.prototype.skaiciuoti=function(){},t}();e.a=o},,function(t,e,n){"use strict";n.r(e);var o,r=n(0),i=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(e,n,o,r){var i=t.call(this,e,n,o)||this;return i.paskolosobjektas=r,i}return i(e,t),e.prototype.skaiciuoti=function(){return 0===this.paskolosDydis&&(this.paskolosDydis=this.paskolosDydis+1),Math.round(this.paskolosDydis*(1+this.palukanos/100)/(12*this.terminas))},e}(r.a);function a(){var t=parseInt(document.getElementById("vpaskola").value);0===t&&(t+=1),function(t,e){var n=document.getElementById("daigtas"),o=n.selectedIndex,r=n.options[o],i=r.value,a=c(i),l=new u(t,e,a,i),d=l.skaiciuoti();s(t,d,e,a),document.getElementById("daigtas").oninput=function(){o=n.selectedIndex,r=n.options[o],i=r.value,a=c(i),l=new u(t,e,a,i),d=l.skaiciuoti(),s(t,d,e,a)}}(t,parseInt(document.getElementById("vterminas").value))}function s(t,e,n,o){document.getElementById("skaiciuoti").onclick=function(){document.getElementById("vrezultatai").innerHTML="Prašoma suma - "+t+" Eur,\n         mėnesio įmoka - "+e+" Eur, paskolos terminas - "+n+" metais, palūkanų norma - \n         "+o+"%."}}function c(t){var e=0;return"dviratis"===t?e=20:"masina"===t?e=15:"remontas"===t?e=10:"kita"===t&&(e=25),e}!function(){function t(t,e,n){var o=document.getElementById(e),r=document.getElementById(t);o.innerText=document.getElementById(t).value+n,a(),r.oninput=function(){var e=document.getElementById(t).value;"0"===e&&(e=1*e+1),o.innerHTML=e+n,document.getElementById("vrezultatai").innerHTML="",a()}}t("vpaskola","vpaskolosdydis"," Eur"),t("vterminas","vterminodydis"," metai")}()}]);
//# sourceMappingURL=vartojama.js.map