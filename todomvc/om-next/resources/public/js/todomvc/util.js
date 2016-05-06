// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('todomvc.util');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
todomvc.util.hidden = (function todomvc$util$hidden(is_hidden){
if(cljs.core.truth_(is_hidden)){
return {"display": "none"};
} else {
return {};
}
});
todomvc.util.pluralize = (function todomvc$util$pluralize(n,word){
if((n === (1))){
return word;
} else {
return [cljs.core.str(word),cljs.core.str("s")].join('');
}
});
todomvc.util.transit_post = (function todomvc$util$transit_post(url){
return (function (p__14687,cb){
var map__14688 = p__14687;
var map__14688__$1 = ((((!((map__14688 == null)))?((((map__14688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14688):map__14688);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14688__$1,cljs.core.cst$kw$remote);
return goog.net.XhrIo.send(url,((function (map__14688,map__14688__$1,remote){
return (function (e){
var this$ = this;
var G__14690 = cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),this$.getResponseText());
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14690) : cb.call(null,G__14690));
});})(map__14688,map__14688__$1,remote))
,"POST",cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),remote),{"Content-Type": "application/transit+json"});
});
});
