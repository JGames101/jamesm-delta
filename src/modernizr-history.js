/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-history-setclasses !*/
!function(n,e,o){function s(n,e){return typeof n===e}function i(){var n,e,o,i,a,f,l;for(var c in r)if(r.hasOwnProperty(c)){if(n=[],e=r[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(o=0;o<e.options.aliases.length;o++)n.push(e.options.aliases[o].toLowerCase());for(i=s(e.fn,"function")?e.fn():e.fn,a=0;a<n.length;a++)f=n[a],l=f.split("."),1===l.length?Modernizr[l[0]]=i:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=i),t.push((i?"":"no-")+l.join("-"))}}function a(n){var e=l.className,o=Modernizr._config.classPrefix||"";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");e=e.replace(s,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(e+=" "+o+n.join(" "+o),c?l.className.baseVal=e:l.className=e)}var t=[],r=[],f={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var o=this;setTimeout(function(){e(o[n])},0)},addTest:function(n,e,o){r.push({name:n,fn:e,options:o})},addAsyncTest:function(n){r.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var l=e.documentElement,c="svg"===l.nodeName.toLowerCase();Modernizr.addTest("history",function(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol?n.history&&"pushState"in n.history:!1}),i(),a(t),delete f.addTest,delete f.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();n.Modernizr=Modernizr}(window,document);