// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('todomvc.item');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.next');
goog.require('om.dom');
goog.require('todomvc.util');
todomvc.item.ESCAPE_KEY = (27);
todomvc.item.ENTER_KEY = (13);
todomvc.item.submit = (function todomvc$item$submit(c,p__14693,e){
var map__14698 = p__14693;
var map__14698__$1 = ((((!((map__14698 == null)))?((((map__14698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14698):map__14698);
var props = map__14698__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14698__$1,cljs.core.cst$kw$db_SLASH_id);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14698__$1,cljs.core.cst$kw$todo_SLASH_title);
var edit_text = clojure.string.trim((function (){var or__5808__auto__ = om.next.get_state.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$edit_DASH_text);
if(cljs.core.truth_(or__5808__auto__)){
return or__5808__auto__;
} else {
return "";
}
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_text,title)){
} else {
om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(c,(function (){var G__14700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$todo_SLASH_cancel_DASH_edit)], null);
var G__14700__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$temp,id))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14700,cljs.core.list(cljs.core.cst$sym$todos_SLASH_delete_DASH_temp)):G__14700);
if((!(clojure.string.blank_QMARK_(edit_text))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(edit_text,title))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__14700__$1,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$todo_SLASH_update),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$todo_SLASH_title),cljs.core._conj(cljs.core.List.EMPTY,edit_text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$todos_SLASH_by_DASH_id),cljs.core._conj(cljs.core.List.EMPTY,id)))))))))))))));
} else {
return G__14700__$1;
}
})());
}

var G__14701 = e;
G__14701.preventDefault();

G__14701.stopPropagation();

return G__14701;
});
todomvc.item.edit = (function todomvc$item$edit(c,p__14702){
var map__14705 = p__14702;
var map__14705__$1 = ((((!((map__14705 == null)))?((((map__14705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14705):map__14705);
var props = map__14705__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14705__$1,cljs.core.cst$kw$db_SLASH_id);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14705__$1,cljs.core.cst$kw$todo_SLASH_title);
om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$todo_SLASH_edit),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id)))))))))))))));

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(c,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$needs_DASH_focus,true,cljs.core.cst$kw$edit_DASH_text,title], null));
});
todomvc.item.key_down = (function todomvc$item$key_down(c,p__14707,e){
var map__14714 = p__14707;
var map__14714__$1 = ((((!((map__14714 == null)))?((((map__14714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14714):map__14714);
var props = map__14714__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14714__$1,cljs.core.cst$kw$todo_SLASH_title);
var pred__14716 = cljs.core._EQ__EQ_;
var expr__14717 = e.keyCode;
if(cljs.core.truth_((pred__14716.cljs$core$IFn$_invoke$arity$2 ? pred__14716.cljs$core$IFn$_invoke$arity$2(todomvc.item.ESCAPE_KEY,expr__14717) : pred__14716.call(null,todomvc.item.ESCAPE_KEY,expr__14717)))){
om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$todo_SLASH_cancel_DASH_edit)], null));

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(c,cljs.core.assoc,cljs.core.cst$kw$edit_DASH_text,title);

var G__14719 = e;
G__14719.preventDefault();

G__14719.stopPropagation();

return G__14719;
} else {
if(cljs.core.truth_((pred__14716.cljs$core$IFn$_invoke$arity$2 ? pred__14716.cljs$core$IFn$_invoke$arity$2(todomvc.item.ENTER_KEY,expr__14717) : pred__14716.call(null,todomvc.item.ENTER_KEY,expr__14717)))){
return todomvc.item.submit(c,props,e);
} else {
return null;
}
}
});
todomvc.item.change = (function todomvc$item$change(c,e){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(c,cljs.core.assoc,cljs.core.cst$kw$edit_DASH_text,e.target.value);
});
todomvc.item.checkbox = (function todomvc$item$checkbox(c,p__14720){
var map__14724 = p__14720;
var map__14724__$1 = ((((!((map__14724 == null)))?((((map__14724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14724):map__14724);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14724__$1,cljs.core.cst$kw$db_SLASH_id);
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14724__$1,cljs.core.cst$kw$todo_SLASH_completed);
var G__14726 = {"className": "toggle", "type": "checkbox", "checked": (function (){var and__5796__auto__ = completed;
if(cljs.core.truth_(and__5796__auto__)){
return "checked";
} else {
return and__5796__auto__;
}
})(), "onChange": ((function (map__14724,map__14724__$1,id,completed){
return (function (_){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$todo_SLASH_update),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$todo_SLASH_completed),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.not(completed))], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$todos_SLASH_by_DASH_id),cljs.core._conj(cljs.core.List.EMPTY,id)))))))))))))));
});})(map__14724,map__14724__$1,id,completed))
};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__14726) : om.dom.input.call(null,G__14726));
});
todomvc.item.label = (function todomvc$item$label(c,p__14727){
var map__14732 = p__14727;
var map__14732__$1 = ((((!((map__14732 == null)))?((((map__14732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14732):map__14732);
var props = map__14732__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14732__$1,cljs.core.cst$kw$todo_SLASH_title);
var G__14734 = {"onDoubleClick": ((function (map__14732,map__14732__$1,props,title){
return (function (e){
return todomvc.item.edit(c,props);
});})(map__14732,map__14732__$1,props,title))
};
var G__14735 = om.util.force_children(title);
return React.DOM.label(G__14734,G__14735);
});
todomvc.item.delete_button = (function todomvc$item$delete_button(c,p__14736){
var map__14740 = p__14736;
var map__14740__$1 = ((((!((map__14740 == null)))?((((map__14740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14740):map__14740);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14740__$1,cljs.core.cst$kw$db_SLASH_id);
var G__14742 = {"className": "destroy", "onClick": ((function (map__14740,map__14740__$1,id){
return (function (_){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$todo_SLASH_delete),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id)))))))))))))));
});})(map__14740,map__14740__$1,id))
};
return React.DOM.button(G__14742);
});
todomvc.item.edit_field = (function todomvc$item$edit_field(c,props){
var G__14747 = {"ref": "editField", "className": "edit", "value": om.next.get_state.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$edit_DASH_text), "onBlur": (function (p1__14743_SHARP_){
return todomvc.item.submit(c,props,p1__14743_SHARP_);
}), "onChange": (function (p1__14744_SHARP_){
return todomvc.item.change(c,p1__14744_SHARP_);
}), "onKeyDown": (function (p1__14745_SHARP_){
return todomvc.item.key_down(c,props,p1__14745_SHARP_);
})};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__14747) : om.dom.input.call(null,G__14747));
});
/**
 * @constructor
 */
todomvc.item.TodoItem = (function todomvc$item$TodoItem(){
var this__13652__auto__ = this;
React.Component.apply(this__13652__auto__,arguments);

if(!((this__13652__auto__.initLocalState == null))){
this__13652__auto__.state = this__13652__auto__.initLocalState();
} else {
this__13652__auto__.state = {};
}

return this__13652__auto__;
});

todomvc.item.TodoItem.prototype = goog.object.clone(React.Component.prototype);

var x14752_14780 = todomvc.item.TodoItem.prototype;
x14752_14780.componentWillUpdate = ((function (x14752_14780){
return (function (next_props__13593__auto__,next_state__13594__auto__){
var this__13592__auto__ = this;
om.next.merge_pending_props_BANG_(this__13592__auto__);

return om.next.merge_pending_state_BANG_(this__13592__auto__);
});})(x14752_14780))
;

x14752_14780.shouldComponentUpdate = ((function (x14752_14780){
return (function (next_props__13593__auto__,next_state__13594__auto__){
var this__13592__auto__ = this;
var or__5808__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__13592__auto__),goog.object.get(next_props__13593__auto__,"omcljs$value"));
if(or__5808__auto__){
return or__5808__auto__;
} else {
var and__5796__auto__ = this__13592__auto__.state;
if(cljs.core.truth_(and__5796__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14755 = this__13592__auto__.state;
var G__14756 = "omcljs$state";
return goog.object.get(G__14755,G__14756);
})(),goog.object.get(next_state__13594__auto__,"omcljs$state"));
} else {
return and__5796__auto__;
}
}
});})(x14752_14780))
;

x14752_14780.componentWillUnmount = ((function (x14752_14780){
return (function (){
var this__13592__auto__ = this;
var r__13598__auto__ = om.next.get_reconciler(this__13592__auto__);
var cfg__13599__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__13598__auto__);
var st__13600__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__13599__auto__);
var indexer__13597__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__13599__auto__);
if((st__13600__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__13600__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__13592__auto__], 0));
}

if((indexer__13597__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__13597__auto__,this__13592__auto__);
}
});})(x14752_14780))
;

x14752_14780.isMounted = ((function (x14752_14780){
return (function (){
var this__13592__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__13592__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14752_14780))
;

x14752_14780.componentWillMount = ((function (x14752_14780){
return (function (){
var this__13592__auto__ = this;
var indexer__13597__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__13592__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__13597__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__13597__auto__,this__13592__auto__);
}
});})(x14752_14780))
;

x14752_14780.componentDidUpdate = ((function (x14752_14780){
return (function (prev_props__13582__auto__,prev_state__13583__auto__){
var this__13581__auto__ = this;
var this$ = this__13581__auto__;
var prev_props = om.next._prev_props(prev_props__13582__auto__,this__13581__auto__);
var prev_state = goog.object.get(prev_state__13583__auto__,"omcljs$previousState");
if(cljs.core.truth_((function (){var and__5796__auto__ = cljs.core.cst$kw$todo_SLASH_editing.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(and__5796__auto__)){
return om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$needs_DASH_focus);
} else {
return and__5796__auto__;
}
})())){
var node_14781 = om.dom.node.cljs$core$IFn$_invoke$arity$2(this$,"editField");
var len_14782 = node_14781.value.length;
node_14781.focus();

node_14781.setSelectionRange(len_14782,len_14782);

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$needs_DASH_focus,null);
} else {
}

return om.next.clear_prev_props_BANG_(this__13581__auto__);
});})(x14752_14780))
;

x14752_14780.render = ((function (x14752_14780){
return (function (){
var this__13591__auto__ = this;
var this$ = this__13591__auto__;
var _STAR_reconciler_STAR_14757 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14758 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14759 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14760 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14761 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__13591__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__13591__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__13591__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__13591__auto__);

om.next._STAR_parent_STAR_ = this__13591__auto__;

try{var props = om.next.props(this$);
var map__14762 = props;
var map__14762__$1 = ((((!((map__14762 == null)))?((((map__14762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14762):map__14762);
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14762__$1,cljs.core.cst$kw$todo_SLASH_completed);
var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14762__$1,cljs.core.cst$kw$todo_SLASH_editing);
var class$ = (function (){var G__14764 = "";
var G__14764__$1 = (cljs.core.truth_(completed)?[cljs.core.str(G__14764),cljs.core.str("completed ")].join(''):G__14764);
if(cljs.core.truth_(editing)){
return [cljs.core.str(G__14764__$1),cljs.core.str("editing")].join('');
} else {
return G__14764__$1;
}
})();
var G__14765 = {"className": class$};
var G__14766 = om.util.force_children((function (){var G__14768 = {"className": "view"};
var G__14769 = om.util.force_children(todomvc.item.checkbox(this$,props));
var G__14770 = om.util.force_children(todomvc.item.label(this$,props));
var G__14771 = om.util.force_children(todomvc.item.delete_button(this$,props));
return React.DOM.div(G__14768,G__14769,G__14770,G__14771);
})());
var G__14767 = om.util.force_children(todomvc.item.edit_field(this$,props));
return React.DOM.li(G__14765,G__14766,G__14767);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14761;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14760;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14759;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14758;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14757;
}});})(x14752_14780))
;


todomvc.item.TodoItem.prototype.constructor = todomvc.item.TodoItem;

todomvc.item.TodoItem.prototype.constructor.displayName = "todomvc.item/TodoItem";

todomvc.item.TodoItem.prototype.om$isComponent = true;

var x14772_14783 = todomvc.item.TodoItem;
x14772_14783.om$next$Ident$ = true;

x14772_14783.om$next$Ident$ident$arity$2 = ((function (x14772_14783){
return (function (this$,p__14773){
var map__14774 = p__14773;
var map__14774__$1 = ((((!((map__14774 == null)))?((((map__14774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14774):map__14774);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14774__$1,cljs.core.cst$kw$db_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$todos_SLASH_by_DASH_id,id], null);
});})(x14772_14783))
;

x14772_14783.om$next$IQuery$ = true;

x14772_14783.om$next$IQuery$query$arity$1 = ((function (x14772_14783){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$todo_SLASH_editing,cljs.core.cst$kw$todo_SLASH_completed,cljs.core.cst$kw$todo_SLASH_title], null);
});})(x14772_14783))
;


var x14776_14784 = todomvc.item.TodoItem.prototype;
x14776_14784.om$next$Ident$ = true;

x14776_14784.om$next$Ident$ident$arity$2 = ((function (x14776_14784){
return (function (this$,p__14777){
var map__14778 = p__14777;
var map__14778__$1 = ((((!((map__14778 == null)))?((((map__14778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14778):map__14778);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14778__$1,cljs.core.cst$kw$db_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$todos_SLASH_by_DASH_id,id], null);
});})(x14776_14784))
;

x14776_14784.om$next$IQuery$ = true;

x14776_14784.om$next$IQuery$query$arity$1 = ((function (x14776_14784){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$todo_SLASH_editing,cljs.core.cst$kw$todo_SLASH_completed,cljs.core.cst$kw$todo_SLASH_title], null);
});})(x14776_14784))
;


todomvc.item.TodoItem.cljs$lang$type = true;

todomvc.item.TodoItem.cljs$lang$ctorStr = "todomvc.item/TodoItem";

todomvc.item.TodoItem.cljs$lang$ctorPrWriter = (function (this__13654__auto__,writer__13655__auto__,opt__13656__auto__){
return cljs.core._write(writer__13655__auto__,"todomvc.item/TodoItem");
});
todomvc.item.item = om.next.factory.cljs$core$IFn$_invoke$arity$2(todomvc.item.TodoItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$db_SLASH_id], null));
