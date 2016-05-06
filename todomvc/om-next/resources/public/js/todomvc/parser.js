// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('todomvc.parser');
goog.require('cljs.core');
goog.require('om.next');
if(typeof todomvc.parser.read !== 'undefined'){
} else {
todomvc.parser.read = (function (){var method_table__6721__auto__ = (function (){var G__14787 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14787) : cljs.core.atom.call(null,G__14787));
})();
var prefer_table__6722__auto__ = (function (){var G__14788 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14788) : cljs.core.atom.call(null,G__14788));
})();
var method_cache__6723__auto__ = (function (){var G__14789 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14789) : cljs.core.atom.call(null,G__14789));
})();
var cached_hierarchy__6724__auto__ = (function (){var G__14790 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14790) : cljs.core.atom.call(null,G__14790));
})();
var hierarchy__6725__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("todomvc.parser","read"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__6725__auto__,method_table__6721__auto__,prefer_table__6722__auto__,method_cache__6723__auto__,cached_hierarchy__6724__auto__));
})();
}
todomvc.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__14791,k,_){
var map__14792 = p__14791;
var map__14792__$1 = ((((!((map__14792 == null)))?((((map__14792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14792):map__14792);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14792__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
if(cljs.core.contains_QMARK_(st,k)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,k)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,true], null);
}
}));
todomvc.parser.join = (function todomvc$parser$join(st,ref){
var G__14795 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,ref);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$todos_SLASH_editing.cljs$core$IFn$_invoke$arity$1(st),ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14795,cljs.core.cst$kw$todo_SLASH_editing,true);
} else {
return G__14795;
}
});
todomvc.parser.get_todos = (function todomvc$parser$get_todos(st){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14796_SHARP_){
return todomvc.parser.join(st,p1__14796_SHARP_);
})),cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,cljs.core.cst$kw$todos_SLASH_list));
});
todomvc.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$todos_SLASH_list,(function (p__14797,k,_){
var map__14798 = p__14797;
var map__14798__$1 = ((((!((map__14798 == null)))?((((map__14798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14798):map__14798);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14798__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
if(cljs.core.contains_QMARK_(st,k)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,todomvc.parser.get_todos(st)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,true], null);
}
}));
if(typeof todomvc.parser.mutate !== 'undefined'){
} else {
todomvc.parser.mutate = (function (){var method_table__6721__auto__ = (function (){var G__14800 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14800) : cljs.core.atom.call(null,G__14800));
})();
var prefer_table__6722__auto__ = (function (){var G__14801 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14801) : cljs.core.atom.call(null,G__14801));
})();
var method_cache__6723__auto__ = (function (){var G__14802 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14802) : cljs.core.atom.call(null,G__14802));
})();
var cached_hierarchy__6724__auto__ = (function (){var G__14803 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14803) : cljs.core.atom.call(null,G__14803));
})();
var hierarchy__6725__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("todomvc.parser","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__6725__auto__,method_table__6721__auto__,prefer_table__6722__auto__,method_cache__6723__auto__,cached_hierarchy__6724__auto__));
})();
}
todomvc.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,true], null);
}));
todomvc.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$todos_SLASH_clear,(function (p__14805,_,___$1){
var map__14806 = p__14805;
var map__14806__$1 = ((((!((map__14806 == null)))?((((map__14806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14806):map__14806);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14806__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14806,map__14806__$1,state){
return (function (){
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$todos_SLASH_list], null),((function (st,map__14806,map__14806__$1,state){
return (function (list){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (st,map__14806,map__14806__$1,state){
return (function (p1__14804_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14804_SHARP_,cljs.core.cst$kw$todo_SLASH_completed));
});})(st,map__14806,map__14806__$1,state))
),list);
});})(st,map__14806,map__14806__$1,state))
);
});})(map__14806,map__14806__$1,state))
], null);
}));
todomvc.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$todos_SLASH_toggle_DASH_all,(function (p__14809,_,p__14810){
var map__14811 = p__14809;
var map__14811__$1 = ((((!((map__14811 == null)))?((((map__14811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14811):map__14811);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14811__$1,cljs.core.cst$kw$state);
var map__14812 = p__14810;
var map__14812__$1 = ((((!((map__14812 == null)))?((((map__14812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14812):map__14812);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14812__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14811,map__14811__$1,state,map__14812,map__14812__$1,value){
return (function (){
var step = ((function (map__14811,map__14811__$1,state,map__14812,map__14812__$1,value){
return (function todomvc$parser$step(state_SINGLEQUOTE_,ref){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state_SINGLEQUOTE_,ref,cljs.core.assoc,cljs.core.cst$kw$todo_SLASH_completed,value);
});})(map__14811,map__14811__$1,state,map__14812,map__14812__$1,value))
;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__14811,map__14811__$1,state,map__14812,map__14812__$1,value){
return (function (p1__14808_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,p1__14808_SHARP_,cljs.core.cst$kw$todos_SLASH_list.cljs$core$IFn$_invoke$arity$1(p1__14808_SHARP_));
});})(map__14811,map__14811__$1,state,map__14812,map__14812__$1,value))
);
});})(map__14811,map__14811__$1,state,map__14812,map__14812__$1,value))
], null);
}));
todomvc.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$todo_SLASH_update,(function (p__14815,_,new_props){
var map__14816 = p__14815;
var map__14816__$1 = ((((!((map__14816 == null)))?((((map__14816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14816):map__14816);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14816__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14816__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,true,cljs.core.cst$kw$action,((function (map__14816,map__14816__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.merge,cljs.core.array_seq([new_props], 0));
});})(map__14816,map__14816__$1,state,ref))
], null);
}));
todomvc.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$todo_SLASH_edit,(function (p__14818,_,p__14819){
var map__14820 = p__14818;
var map__14820__$1 = ((((!((map__14820 == null)))?((((map__14820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14820):map__14820);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14820__$1,cljs.core.cst$kw$state);
var map__14821 = p__14819;
var map__14821__$1 = ((((!((map__14821 == null)))?((((map__14821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14821):map__14821);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14821__$1,cljs.core.cst$kw$db_SLASH_id);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14820,map__14820__$1,state,map__14821,map__14821__$1,id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$todos_SLASH_editing,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$todos_SLASH_by_DASH_id,id], null));
});})(map__14820,map__14820__$1,state,map__14821,map__14821__$1,id))
], null);
}));
todomvc.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$todo_SLASH_cancel_DASH_edit,(function (p__14824,_,___$1){
var map__14825 = p__14824;
var map__14825__$1 = ((((!((map__14825 == null)))?((((map__14825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14825):map__14825);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14825__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14825,map__14825__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$todos_SLASH_editing);
});})(map__14825,map__14825__$1,state))
], null);
}));
todomvc.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$todos_SLASH_create_DASH_temp,(function (p__14827,_,new_todo){
var map__14828 = p__14827;
var map__14828__$1 = ((((!((map__14828 == null)))?((((map__14828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14828):map__14828);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14828__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$todos_SLASH_list], null),cljs.core.cst$kw$action,((function (map__14828,map__14828__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$todos_SLASH_temp,new_todo);
});})(map__14828,map__14828__$1,state))
], null);
}));
todomvc.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$todos_SLASH_delete_DASH_temp,(function (p__14830,_,___$1){
var map__14831 = p__14830;
var map__14831__$1 = ((((!((map__14831 == null)))?((((map__14831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14831):map__14831);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14831__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$todos_SLASH_list], null),cljs.core.cst$kw$action,((function (map__14831,map__14831__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$todos_SLASH_temp);
});})(map__14831,map__14831__$1,state))
], null);
}));
