/**
 * Automaton Customer Interface Framework
 * Version: 3.2.6
 * Release Date: 4/4/2018
 * (c) Nuance Communications (http://www.nuance.com)
 */

!function(){function n(n,a){var o=t(n,a);if(!o)throw new Error('ACIF Loader: Could not resolve version number for app "'+a+'"');var r=e+"/sites/320/assets/"+a;if("local"===o){return"https://localhost:"+{acif:4200,storage:4201}[a]+"/"+a+".js"}return"latest"===o?r+"/latest/"+a+".js":"debug"===o?r+"/"+n+"/"+a+"-debug.js":o.match(/^debug-/)?(o=o.replace("debug-",""),r+"/"+o+"/"+a+"-debug.js"):r+"/"+o+"/"+a+".js"}function t(n,t){var e=window;try{e=window.top}catch(n){}var a=new RegExp("nuance[-_]?"+t+"[-_]?version=([^&]+)","i"),o="nuance_"+t+"_version",r=(e.location.href.match(a)||[])[1]||e[o]||(sessionStorage?sessionStorage.getItem(o):null)||(localStorage?localStorage.getItem(o):null)||n;return r!==n&&sessionStorage.setItem(o,r),r}window.inQ=window.inQ||{};var e=function(){try{return Inq.API.get("cdnUrl")}catch(n){}try{return Inq.getData().cdnURL}catch(n){return"https://static.inq.com"}}(),a=function(){var a=document.getElementById("nuance-acif-js"),o=a.acif,r=n(o.acifVersion,"acif"),i=inqFrame.Inq.siteID,c=t("","configs"),s="local"===c?"https://localhost:8080/acif-configs.js":e+"/sites/"+i+"/assets/automatons/acif-configs.js",u=[r,s];for(var d in o){var l=o[d];l.match(/\.js$/)&&u.push(l)}return u}();document.getElementById("nuance-acif")||function(n){var t=document.createElement("iframe");t.name="nuance-automaton-frame",t.id="nuance-acif",t.style.display="none",document.body.appendChild(t);var e=n.map(function(n){return'<script src="'+n+'" type="text/javascript" charset="UTF-8"><\/script>'}).join("\n        "),a='\n    <!doctype html>\n    <html>\n      <head>\n        <script type="text/javascript">\n          window.inQ = parent.inQ;\n          window.inQ.frame = window;\n          window.inqFrame = parent.inqFrame;\n          window.Inq = parent.Inq;\n        <\/script>\n      </head>\n      <body>\n        '+e+"\n      </body>\n    </html>\n    ",o=t.contentWindow.document;o.open(),o.write(a),o.close()}(a)}();
//# sourceMappingURL=acif-loader.map