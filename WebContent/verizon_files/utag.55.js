//tealium universal tag - utag.55 ut4.0.201709191558, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){jQuery("#footerVzwOptIn .vzw-button-red").on('mousedown',function(){vzwLinkTrack(vzwDL.page.platform+":global:footer:get email updates");});jQuery("#footerLinksHeader .footerSocialIcons a").on('mousedown',function(){if(jQuery(this).hasClass('facebookIcon')){lName='facebook';}else if(jQuery(this).hasClass('twitterIcon')){lName='twitter';}else if(jQuery(this).hasClass('googleplusIcon')){lName='google +';}else if(jQuery(this).hasClass('emailIcon')){lName='email';}else if(jQuery(this).hasClass('chatIcon')){lName='verizon community';}
vzwLinkTrack(vzwDL.page.platform+":global:footer:social:"+lName);});jQuery('#footerLinks .footerMainLinks div li a').on('click',function(){var category=jQuery(this).parent().parent().parent().children('h3').text().toLowerCase();lName=jQuery(this).text().toLowerCase();vzwLinkTrack(vzwDL.page.platform+":super footer:"+category+":"+lName);});jQuery("#footerLinks .footerBottomLinks a").on('click',function(){var lName=jQuery(this).text().toLowerCase();vzwLinkTrack(vzwDL.page.platform+":footer:"+lName);});jQuery("#footerIcons a").on('click',function(){var lName=jQuery(this).text().toLowerCase();vzwLinkTrack(vzwDL.page.platform+":footer:certification:"+lName);});}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("55","vzw.main");}catch(error){utag.DB(error);}