//tealium universal tag - utag.852 ut4.0.201803160739, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){jQuery('#content').on('click','.devices-container .breadcrumb-link',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack('breadcrumbs:'+lName);});jQuery('#content').on('mousedown','.devices-container .gw-filter-by',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');if(jQuery(this).hasClass('gw-filter-by-up-arrow')){var expandCollapse=":collapse";}else{expandCollapse=":expand";}
vzwLinkTrack(lName+expandCollapse);});jQuery('#content').on('mousedown','#content-filters .brand-filter-name',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');if(jQuery(this).hasClass('brand-filter-name-open')){var expandCollapse=":collapse";}else{expandCollapse=":expand";}
vzwLinkTrack("filter category:"+lName+expandCollapse);});jQuery('#content').on('change','#content-filters input',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).val().toLowerCase();var cat=jQuery(this).parents('ul').siblings('.brand-filter-name').text().toLowerCase();if(jQuery(this).is(':checked')){var expandCollapse=":checked";}else{expandCollapse=":unchecked";}
vzwLinkTrack("filter:"+cat+':'+lName+expandCollapse);});jQuery('#content').on('click','#content-filters .quick-buttons',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack("Filter:"+lName);setTimeout(function(){if(jQuery('.modal-content').is(':visible')){vzwPageView(vzwDL.page.channel+'/no filtered results found overlay');}},200);});jQuery('#content .header').on('mousedown','.sticky-compare-tile .m-compare-close',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack('compare modal:'+lName);});jQuery('#content .header').on('mousedown','.sticky-compare-tile:last button,.sticky-compare-tile:last a',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack('compare modal:'+lName);});jQuery('#content').on('change','#paymentOptions',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).find('option:selected').text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack("filter:retail price:"+lName);});jQuery('#content').on('change','#sortOptions',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).find('option:selected').text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack("filter:sort by:"+lName);});jQuery('#content').on('mousedown','.tile',function(e){e.stopPropagation();s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var brand=jQuery(this).find('.brand-price-div a span').eq(0).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');var type=jQuery(this).find('.brand-price-div a span').eq(1).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');if(jQuery(this).is('#tile_byod')){vzwLinkTrack("device selected:bring your own device");}else{vzwLinkTrack("device selected:"+brand+' '+type);}
setTimeout(function(){if(jQuery('.promo-modal').is(':visible')){jQuery('.promo-modal .closeModal').on('click',function(){vzwLinkTrack('promo modal:close modal');});}},150);}).find('input.colorList-input').on('mousedown',function(e){e.stopPropagation();s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;brand=jQuery(this).parents('.tile').find('.brand-price-div a span').eq(0).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');type=jQuery(this).parents('.tile').find('.brand-price-div a span').eq(1).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');var color=jQuery(this).val();vzwLinkTrack(brand+' '+type+':color:'+color);});jQuery('#content').on('mousedown','.tile .quick-buttons',function(e){e.stopPropagation();s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;brand=jQuery(this).parents('.tile').find('.brand-price-div a span').eq(0).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');type=jQuery(this).parents('.tile').find('.brand-price-div a span').eq(1).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');var button=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack(brand+' '+type+':'+button);}).find('.tile .offer-text').on('mousedown',function(e){e.stopPropagation();s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;brand=jQuery(this).parents('.tile').find('.brand-price-div a span').eq(0).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');type=jQuery(this).parents('.tile').find('.brand-price-div a span').eq(1).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');var offer=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack(brand+' '+type+':'+offer);setTimeout(function(){if(jQuery('.promo-modal').is(':visible')){vzwPageView(vzwDL.page.channel+'/promo modal overlay');jQuery('.promo-modal .closeModal').on('click',function(){vzwLinkTrack('promo modal:close modal');});}},250);});jQuery('#content').on('mousedown','.tile a[itemprop="aggregateRating"]',function(e){e.stopPropagation();s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;brand=jQuery(this).parents('.tile').find('.brand-price-div a span').eq(0).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');type=jQuery(this).parents('.tile').find('.brand-price-div a span').eq(1).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');var button=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack(brand+' '+type+':reviews');});jQuery('body').on('click','#quick-view-container .offer-text-icon',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack('quick view:'+lName);setTimeout(function(){if(jQuery('.promo-modal').is(':visible')){jQuery('.promo-modal .closeModal').on('click',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;vzwLinkTrack('quick view:promo modal:close modal');});}},250);});jQuery('body').on('mousedown','#quick-view-container .customizedSwipeDots li.slick-active',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var num=jQuery(this).index();num=num+1;vzwLinkTrack('quick view:carousel pagination:'+num);});jQuery('body').on('mousedown','.Overlay-modal.closeModal',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;vzwLinkTrack('quick view:close modal');});jQuery('body').on('change','#quick-view-container .colorList-input',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).val().toLowerCase();vzwLinkTrack('quick view:color:'+lName);});jQuery('body').on('change','#quick-view-container .capacity-input',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).val().toLowerCase();vzwLinkTrack('quick view:storage:'+lName);});jQuery('body').on('click','#quick-view-container .quick-buttons',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack('quick view:'+lName);});jQuery('#content').on('click','.devices-container li .applied-filter-after',function(){s.linkTrackVarsCustom="prop64";s.prop64='1D:'+vzwDL.page.platform;var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack('clear filters:'+lName);});jQuery('#content').on('click','.tnt17789 a',function(){var lName=jQuery(this).text().toLowerCase();vzwLinkTrack(lName+':treatment1');});}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("852","vzw.main");}catch(error){utag.DB(error);}