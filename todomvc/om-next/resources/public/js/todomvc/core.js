// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('todomvc.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('todomvc.parser');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('todomvc.item');
goog.require('goog.History');
goog.require('goog.events');
goog.require('todomvc.util');
goog.require('om.next');
todomvc.core.main = (function todomvc$core$main(todos,p__11086){
var map__11093 = p__11086;
var map__11093__$1 = ((((!((map__11093 == null)))?((((map__11093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11093):map__11093);
var props = map__11093__$1;
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11093__$1,cljs.core.cst$kw$todos_SLASH_list);
var checked_QMARK_ = cljs.core.every_QMARK_(cljs.core.cst$kw$todo_SLASH_completed,list);
var G__11095 = {"id": "main", "style": todomvc.util.hidden(cljs.core.empty_QMARK_(list))};
var G__11096 = om.util.force_children((function (){var G__11098 = {"id": "toggle-all", "type": "checkbox", "onChange": ((function (G__11095,checked_QMARK_,map__11093,map__11093__$1,props,list){
return (function (_){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(todos,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$todos_SLASH_toggle_DASH_all),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,!(checked_QMARK_))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$todos_SLASH_list))))));
});})(G__11095,checked_QMARK_,map__11093,map__11093__$1,props,list))
, "checked": checked_QMARK_};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__11098) : om.dom.input.call(null,G__11098));
})());
var G__11097 = om.util.force_children(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"id": "todo-list"},cljs.core.map.cljs$core$IFn$_invoke$arity$2(todomvc.item.item,list)));
return React.DOM.section(G__11095,G__11096,G__11097);
});
todomvc.core.clear_button = (function todomvc$core$clear_button(todos,completed){
if((completed > (0))){
var G__11101 = {"id": "clear-completed", "onClick": (function (_){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(todos,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$todos_SLASH_clear))))))))));
})};
var G__11102 = om.util.force_children([cljs.core.str("Clear completed ("),cljs.core.str(completed),cljs.core.str(")")].join(''));
return React.DOM.button(G__11101,G__11102);
} else {
return null;
}
});
todomvc.core.footer = (function todomvc$core$footer(todos,props,active,completed){
var G__11120 = {"id": "footer", "style": todomvc.util.hidden(cljs.core.empty_QMARK_(cljs.core.cst$kw$todos_SLASH_list.cljs$core$IFn$_invoke$arity$1(props)))};
var G__11121 = om.util.force_children((function (){var G__11124 = {"id": "todo-count"};
var G__11125 = om.util.force_children((function (){var G__11127 = null;
var G__11128 = om.util.force_children(active);
return React.DOM.strong(G__11127,G__11128);
})());
var G__11126 = om.util.force_children([cljs.core.str(" "),cljs.core.str(todomvc.util.pluralize(active,"item")),cljs.core.str(" left")].join(''));
return React.DOM.span(G__11124,G__11125,G__11126);
})());
var G__11122 = om.util.force_children(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"id": "filters", "className": cljs.core.name(cljs.core.cst$kw$todos_SLASH_showing.cljs$core$IFn$_invoke$arity$1(props))},cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__11120,G__11121){
return (function (p__11129){
var vec__11130 = p__11129;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11130,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11130,(1),null);
var G__11133 = null;
var G__11134 = om.util.force_children((function (){var G__11135 = {"href": [cljs.core.str("#/"),cljs.core.str(x)].join('')};
var G__11136 = om.util.force_children(y);
return React.DOM.a(G__11135,G__11136);
})());
return React.DOM.li(G__11133,G__11134);
});})(G__11120,G__11121))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","All"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active","Active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["completed","Completed"], null)], null))));
var G__11123 = om.util.force_children(todomvc.core.clear_button(todos,completed));
return React.DOM.footer(G__11120,G__11121,G__11122,G__11123);
});
/**
 * @constructor
 */
todomvc.core.Todos = (function todomvc$core$Todos(){
var this__10194__auto__ = this;
React.Component.apply(this__10194__auto__,arguments);

if(!((this__10194__auto__.initLocalState == null))){
this__10194__auto__.state = this__10194__auto__.initLocalState();
} else {
this__10194__auto__.state = {};
}

return this__10194__auto__;
});

todomvc.core.Todos.prototype = goog.object.clone(React.Component.prototype);

var x11142_11174 = todomvc.core.Todos.prototype;
x11142_11174.componentWillUpdate = ((function (x11142_11174){
return (function (next_props__10135__auto__,next_state__10136__auto__){
var this__10134__auto__ = this;
om.next.merge_pending_props_BANG_(this__10134__auto__);

return om.next.merge_pending_state_BANG_(this__10134__auto__);
});})(x11142_11174))
;

x11142_11174.shouldComponentUpdate = ((function (x11142_11174){
return (function (next_props__10135__auto__,next_state__10136__auto__){
var this__10134__auto__ = this;
var or__5808__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10134__auto__),goog.object.get(next_props__10135__auto__,"omcljs$value"));
if(or__5808__auto__){
return or__5808__auto__;
} else {
var and__5796__auto__ = this__10134__auto__.state;
if(cljs.core.truth_(and__5796__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__11145 = this__10134__auto__.state;
var G__11146 = "omcljs$state";
return goog.object.get(G__11145,G__11146);
})(),goog.object.get(next_state__10136__auto__,"omcljs$state"));
} else {
return and__5796__auto__;
}
}
});})(x11142_11174))
;

x11142_11174.componentWillUnmount = ((function (x11142_11174){
return (function (){
var this__10134__auto__ = this;
var r__10140__auto__ = om.next.get_reconciler(this__10134__auto__);
var cfg__10141__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10140__auto__);
var st__10142__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10141__auto__);
var indexer__10139__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10141__auto__);
if((st__10142__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10142__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10134__auto__], 0));
}

if((indexer__10139__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10139__auto__,this__10134__auto__);
}
});})(x11142_11174))
;

x11142_11174.componentDidUpdate = ((function (x11142_11174){
return (function (prev_props__10137__auto__,prev_state__10138__auto__){
var this__10134__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10134__auto__);
});})(x11142_11174))
;

x11142_11174.isMounted = ((function (x11142_11174){
return (function (){
var this__10134__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10134__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11142_11174))
;

x11142_11174.componentWillMount = ((function (x11142_11174){
return (function (){
var this__10134__auto__ = this;
var indexer__10139__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10134__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10139__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10139__auto__,this__10134__auto__);
}
});})(x11142_11174))
;

x11142_11174.render = ((function (x11142_11174){
return (function (){
var this__10133__auto__ = this;
var this$ = this__10133__auto__;
var _STAR_reconciler_STAR_11147 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11148 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11149 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11150 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11151 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10133__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10133__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10133__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10133__auto__);

om.next._STAR_parent_STAR_ = this__10133__auto__;

try{var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om.next.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$todos_SLASH_showing,cljs.core.cst$kw$all], null)], 0));
var map__11152 = props;
var map__11152__$1 = ((((!((map__11152 == null)))?((((map__11152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11152):map__11152);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11152__$1,cljs.core.cst$kw$todos_SLASH_list);
var active = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$todo_SLASH_completed,list));
var completed = (cljs.core.count(list) - active);
var G__11162 = null;
var G__11163 = om.util.force_children((function (){var G__11164 = {"id": "header"};
var G__11165 = om.util.force_children((function (){var G__11169 = null;
var G__11170 = om.util.force_children("todos");
return React.DOM.h1(G__11169,G__11170);
})());
var G__11166 = om.util.force_children((function (){var G__11171 = {"ref": "newField", "id": "new-todo", "placeholder": "What needs to be done?", "onKeyDown": ((function (G__11164,G__11165,G__11162,props,map__11152,map__11152__$1,list,active,completed,_STAR_reconciler_STAR_11147,_STAR_depth_STAR_11148,_STAR_shared_STAR_11149,_STAR_instrument_STAR_11150,_STAR_parent_STAR_11151,this$,this__10133__auto__,x11142_11174){
return (function (p1__11137_SHARP_){
return p1__11137_SHARP_;
});})(G__11164,G__11165,G__11162,props,map__11152,map__11152__$1,list,active,completed,_STAR_reconciler_STAR_11147,_STAR_depth_STAR_11148,_STAR_shared_STAR_11149,_STAR_instrument_STAR_11150,_STAR_parent_STAR_11151,this$,this__10133__auto__,x11142_11174))
};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__11171) : om.dom.input.call(null,G__11171));
})());
var G__11167 = om.util.force_children(todomvc.core.main(this$,props));
var G__11168 = om.util.force_children(todomvc.core.footer(this$,props,active,completed));
return React.DOM.header(G__11164,G__11165,G__11166,G__11167,G__11168);
})());
return React.DOM.div(G__11162,G__11163);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11151;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11150;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11149;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11148;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11147;
}});})(x11142_11174))
;


todomvc.core.Todos.prototype.constructor = todomvc.core.Todos;

todomvc.core.Todos.prototype.constructor.displayName = "todomvc.core/Todos";

todomvc.core.Todos.prototype.om$isComponent = true;

var x11172_11175 = todomvc.core.Todos;
x11172_11175.om$next$IQueryParams$ = true;

x11172_11175.om$next$IQueryParams$params$arity$1 = ((function (x11172_11175){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$todo_DASH_item,om.next.get_query(todomvc.item.TodoItem)], null);
});})(x11172_11175))
;

x11172_11175.om$next$IQuery$ = true;

x11172_11175.om$next$IQuery$query$arity$1 = ((function (x11172_11175){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$todos_SLASH_list,cljs.core.cst$sym$_QMARK_todo_DASH_item], null)], null);
});})(x11172_11175))
;


var x11173_11176 = todomvc.core.Todos.prototype;
x11173_11176.om$next$IQueryParams$ = true;

x11173_11176.om$next$IQueryParams$params$arity$1 = ((function (x11173_11176){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$todo_DASH_item,om.next.get_query(todomvc.item.TodoItem)], null);
});})(x11173_11176))
;

x11173_11176.om$next$IQuery$ = true;

x11173_11176.om$next$IQuery$query$arity$1 = ((function (x11173_11176){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$todos_SLASH_list,cljs.core.cst$sym$_QMARK_todo_DASH_item], null)], null);
});})(x11173_11176))
;


todomvc.core.Todos.cljs$lang$type = true;

todomvc.core.Todos.cljs$lang$ctorStr = "todomvc.core/Todos";

todomvc.core.Todos.cljs$lang$ctorPrWriter = (function (this__10196__auto__,writer__10197__auto__,opt__10198__auto__){
return cljs.core._write(writer__10197__auto__,"todomvc.core/Todos");
});
todomvc.core.todos = om.next.factory.cljs$core$IFn$_invoke$arity$1(todomvc.core.Todos);
todomvc.core.reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state,(function (){var G__11177 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11177) : cljs.core.atom.call(null,G__11177));
})(),cljs.core.cst$kw$normalize,true,cljs.core.cst$kw$parser,om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,todomvc.parser.read,cljs.core.cst$kw$mutate,todomvc.parser.mutate], null)),cljs.core.cst$kw$send,todomvc.util.transit_post("http://localhost:8081/api")], null));
om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(todomvc.core.reconciler,todomvc.core.Todos,goog.dom.getElement("todoapp"));
