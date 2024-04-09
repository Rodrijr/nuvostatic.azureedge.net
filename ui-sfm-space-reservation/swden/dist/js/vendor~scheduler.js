(self.webpackJsonp = self.webpackJsonp || []).push([[6], {
    1415: function(e, t, n) {
        "use strict";
        /*!
 * devextreme-react
 * Version: 20.2.8
 * Build date: Mon Jun 21 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-react
 */
        var i, a = this && this.__extends || (i = function(e, t) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Show = t.Position = t.Offset = t.My = t.Hide = t.Collision = t.BoundaryOffset = t.At = t.Animation = t.LoadPanel = void 0;
        var r = n(853)
          , o = n(26)
          , s = n(153)
          , l = n(188)
          , _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._WidgetClass = r.default,
                t.subscribableOptions = ["position", "visible"],
                t.independentEvents = ["onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onShowing", "onShown"],
                t._defaults = {
                    defaultPosition: "position",
                    defaultVisible: "visible"
                },
                t._expectedChildren = {
                    animation: {
                        optionName: "animation",
                        isCollectionItem: !1
                    },
                    position: {
                        optionName: "position",
                        isCollectionItem: !1
                    }
                },
                t
            }
            return a(t, e),
            Object.defineProperty(t.prototype, "instance", {
                get: function() {
                    return this._instance
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        }(s.Component);
        t.LoadPanel = _,
        _.propTypes = {
            animation: o.object,
            closeOnOutsideClick: o.oneOfType([o.bool, o.func]),
            deferRendering: o.bool,
            delay: o.number,
            elementAttr: o.object,
            focusStateEnabled: o.bool,
            height: o.oneOfType([o.func, o.number, o.string]),
            hint: o.string,
            hoverStateEnabled: o.bool,
            indicatorSrc: o.string,
            maxHeight: o.oneOfType([o.func, o.number, o.string]),
            maxWidth: o.oneOfType([o.func, o.number, o.string]),
            message: o.string,
            minHeight: o.oneOfType([o.func, o.number, o.string]),
            minWidth: o.oneOfType([o.func, o.number, o.string]),
            onContentReady: o.func,
            onDisposing: o.func,
            onHidden: o.func,
            onHiding: o.func,
            onInitialized: o.func,
            onOptionChanged: o.func,
            onShowing: o.func,
            onShown: o.func,
            position: o.oneOfType([o.func, o.object, o.oneOf(["bottom", "center", "left", "left bottom", "left top", "right", "right bottom", "right top", "top"])]),
            rtlEnabled: o.bool,
            shading: o.bool,
            shadingColor: o.string,
            showIndicator: o.bool,
            showPane: o.bool,
            visible: o.bool,
            width: o.oneOfType([o.func, o.number, o.string])
        };
        var d = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "animation",
            t.ExpectedChildren = {
                hide: {
                    optionName: "hide",
                    isCollectionItem: !1
                },
                show: {
                    optionName: "show",
                    isCollectionItem: !1
                }
            },
            t
        }(l.default);
        t.Animation = d;
        var c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "at",
            t
        }(l.default);
        t.At = c;
        var h = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "boundaryOffset",
            t
        }(l.default);
        t.BoundaryOffset = h;
        var u = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "collision",
            t
        }(l.default);
        t.Collision = u;
        var f = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "hide",
            t
        }(l.default);
        t.Hide = f;
        var p = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "my",
            t
        }(l.default);
        t.My = p;
        var v = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "offset",
            t
        }(l.default);
        t.Offset = v;
        var m = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "position",
            t.ExpectedChildren = {
                at: {
                    optionName: "at",
                    isCollectionItem: !1
                },
                boundaryOffset: {
                    optionName: "boundaryOffset",
                    isCollectionItem: !1
                },
                collision: {
                    optionName: "collision",
                    isCollectionItem: !1
                },
                my: {
                    optionName: "my",
                    isCollectionItem: !1
                },
                offset: {
                    optionName: "offset",
                    isCollectionItem: !1
                }
            },
            t
        }(l.default);
        t.Position = m;
        var g = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "show",
            t
        }(l.default);
        t.Show = g,
        t.default = _
    },
    1416: function(e, t, n) {
        "use strict";
        /*!
 * devextreme-react
 * Version: 20.2.8
 * Build date: Mon Jun 21 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-react
 */
        var i, a = this && this.__extends || (i = function(e, t) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SearchEditorOptions = t.Options = t.MenuItem = t.ItemDragging = t.Item = t.CursorOffset = t.Button = t.List = void 0;
        var r = n(423)
          , o = n(26)
          , s = n(153)
          , l = n(188)
          , _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._WidgetClass = r.default,
                t.subscribableOptions = ["items", "selectedItemKeys", "selectedItems"],
                t.independentEvents = ["onContentReady", "onDisposing", "onGroupRendered", "onInitialized", "onItemClick", "onItemContextMenu", "onItemDeleted", "onItemDeleting", "onItemHold", "onItemRendered", "onItemReordered", "onItemSwipe", "onPageLoading", "onPullRefresh", "onScroll"],
                t._defaults = {
                    defaultItems: "items",
                    defaultSelectedItemKeys: "selectedItemKeys",
                    defaultSelectedItems: "selectedItems"
                },
                t._expectedChildren = {
                    item: {
                        optionName: "items",
                        isCollectionItem: !0
                    },
                    itemDragging: {
                        optionName: "itemDragging",
                        isCollectionItem: !1
                    },
                    menuItem: {
                        optionName: "menuItems",
                        isCollectionItem: !0
                    },
                    searchEditorOptions: {
                        optionName: "searchEditorOptions",
                        isCollectionItem: !1
                    }
                },
                t._templateProps = [{
                    tmplOption: "groupTemplate",
                    render: "groupRender",
                    component: "groupComponent",
                    keyFn: "groupKeyFn"
                }, {
                    tmplOption: "itemTemplate",
                    render: "itemRender",
                    component: "itemComponent",
                    keyFn: "itemKeyFn"
                }],
                t
            }
            return a(t, e),
            Object.defineProperty(t.prototype, "instance", {
                get: function() {
                    return this._instance
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        }(s.Component);
        t.List = _,
        _.propTypes = {
            accessKey: o.string,
            activeStateEnabled: o.bool,
            allowItemDeleting: o.bool,
            bounceEnabled: o.bool,
            collapsibleGroups: o.bool,
            dataSource: o.oneOfType([o.array, o.object, o.string]),
            disabled: o.bool,
            displayExpr: o.oneOfType([o.func, o.string]),
            elementAttr: o.object,
            focusStateEnabled: o.bool,
            grouped: o.bool,
            height: o.oneOfType([o.func, o.number, o.string]),
            hint: o.string,
            hoverStateEnabled: o.bool,
            indicateLoading: o.bool,
            itemDeleteMode: o.oneOf(["context", "slideButton", "slideItem", "static", "swipe", "toggle"]),
            itemDragging: o.object,
            itemHoldTimeout: o.number,
            items: o.array,
            keyExpr: o.oneOfType([o.func, o.string]),
            menuItems: o.array,
            menuMode: o.oneOf(["context", "slide"]),
            nextButtonText: o.string,
            noDataText: o.string,
            onContentReady: o.func,
            onDisposing: o.func,
            onGroupRendered: o.func,
            onInitialized: o.func,
            onItemClick: o.oneOfType([o.func, o.string]),
            onItemContextMenu: o.func,
            onItemDeleted: o.func,
            onItemDeleting: o.func,
            onItemHold: o.func,
            onItemRendered: o.func,
            onItemReordered: o.func,
            onItemSwipe: o.func,
            onOptionChanged: o.func,
            onPageLoading: o.func,
            onPullRefresh: o.func,
            onScroll: o.func,
            onSelectAllValueChanged: o.func,
            onSelectionChanged: o.func,
            pageLoadingText: o.string,
            pageLoadMode: o.oneOf(["nextButton", "scrollBottom"]),
            pulledDownText: o.string,
            pullingDownText: o.string,
            pullRefreshEnabled: o.bool,
            refreshingText: o.string,
            repaintChangesOnly: o.bool,
            rtlEnabled: o.bool,
            scrollByContent: o.bool,
            scrollByThumb: o.bool,
            scrollingEnabled: o.bool,
            searchEditorOptions: o.object,
            searchEnabled: o.bool,
            searchExpr: o.oneOfType([o.array, o.func, o.string]),
            searchMode: o.oneOf(["contains", "startswith", "equals"]),
            searchTimeout: o.number,
            searchValue: o.string,
            selectAllMode: o.oneOf(["allPages", "page"]),
            selectedItemKeys: o.array,
            selectedItems: o.array,
            selectionMode: o.oneOf(["all", "multiple", "none", "single"]),
            showScrollbar: o.oneOf(["always", "never", "onHover", "onScroll"]),
            showSelectionControls: o.bool,
            tabIndex: o.number,
            useNativeScrolling: o.bool,
            visible: o.bool,
            width: o.oneOfType([o.func, o.number, o.string])
        };
        var d = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "buttons",
            t.IsCollectionItem = !0,
            t.ExpectedChildren = {
                options: {
                    optionName: "options",
                    isCollectionItem: !1
                }
            },
            t
        }(l.default);
        t.Button = d;
        var c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "cursorOffset",
            t
        }(l.default);
        t.CursorOffset = c;
        var h = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "items",
            t.IsCollectionItem = !0,
            t.TemplateProps = [{
                tmplOption: "template",
                render: "render",
                component: "component",
                keyFn: "keyFn"
            }],
            t
        }(l.default);
        t.Item = h;
        var u = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "itemDragging",
            t.ExpectedChildren = {
                cursorOffset: {
                    optionName: "cursorOffset",
                    isCollectionItem: !1
                }
            },
            t.TemplateProps = [{
                tmplOption: "contentTemplate",
                render: "contentRender",
                component: "contentComponent",
                keyFn: "contentKeyFn"
            }, {
                tmplOption: "dragTemplate",
                render: "dragRender",
                component: "dragComponent",
                keyFn: "dragKeyFn"
            }],
            t
        }(l.default);
        t.ItemDragging = u;
        var f = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "menuItems",
            t.IsCollectionItem = !0,
            t
        }(l.default);
        t.MenuItem = f;
        var p = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "options",
            t.TemplateProps = [{
                tmplOption: "template",
                render: "render",
                component: "component",
                keyFn: "keyFn"
            }],
            t
        }(l.default);
        t.Options = p;
        var v = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "searchEditorOptions",
            t.DefaultsProps = {
                defaultValue: "value"
            },
            t.ExpectedChildren = {
                button: {
                    optionName: "buttons",
                    isCollectionItem: !0
                }
            },
            t
        }(l.default);
        t.SearchEditorOptions = v,
        t.default = _
    },
    1417: function(e, t, n) {
        "use strict";
        /*!
 * devextreme-react
 * Version: 20.2.8
 * Build date: Mon Jun 21 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-react
 */
        var i, a = this && this.__extends || (i = function(e, t) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Options = t.Button = t.TextBox = void 0;
        var r = n(422)
          , o = n(26)
          , s = n(153)
          , l = n(188)
          , _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._WidgetClass = r.default,
                t.subscribableOptions = ["value"],
                t.independentEvents = ["onChange", "onContentReady", "onCopy", "onCut", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onKeyDown", "onKeyUp", "onPaste"],
                t._defaults = {
                    defaultValue: "value"
                },
                t._expectedChildren = {
                    button: {
                        optionName: "buttons",
                        isCollectionItem: !0
                    }
                },
                t
            }
            return a(t, e),
            Object.defineProperty(t.prototype, "instance", {
                get: function() {
                    return this._instance
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        }(s.Component);
        t.TextBox = _,
        _.propTypes = {
            accessKey: o.string,
            activeStateEnabled: o.bool,
            buttons: o.array,
            disabled: o.bool,
            elementAttr: o.object,
            focusStateEnabled: o.bool,
            height: o.oneOfType([o.func, o.number, o.string]),
            hint: o.string,
            hoverStateEnabled: o.bool,
            inputAttr: o.object,
            isValid: o.bool,
            mask: o.string,
            maskChar: o.string,
            maskInvalidMessage: o.string,
            maskRules: o.object,
            maxLength: o.oneOfType([o.number, o.string]),
            mode: o.oneOf(["email", "password", "search", "tel", "text", "url"]),
            name: o.string,
            onChange: o.func,
            onContentReady: o.func,
            onCopy: o.func,
            onCut: o.func,
            onDisposing: o.func,
            onEnterKey: o.func,
            onFocusIn: o.func,
            onFocusOut: o.func,
            onInitialized: o.func,
            onInput: o.func,
            onKeyDown: o.func,
            onKeyUp: o.func,
            onOptionChanged: o.func,
            onPaste: o.func,
            onValueChanged: o.func,
            placeholder: o.string,
            readOnly: o.bool,
            rtlEnabled: o.bool,
            showClearButton: o.bool,
            showMaskMode: o.oneOf(["always", "onFocus"]),
            spellcheck: o.bool,
            stylingMode: o.oneOf(["outlined", "underlined", "filled"]),
            tabIndex: o.number,
            text: o.string,
            useMaskedValue: o.bool,
            validationError: o.object,
            validationErrors: o.array,
            validationMessageMode: o.oneOf(["always", "auto"]),
            validationStatus: o.oneOf(["valid", "invalid", "pending"]),
            value: o.string,
            valueChangeEvent: o.string,
            visible: o.bool,
            width: o.oneOfType([o.func, o.number, o.string])
        };
        var d = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "buttons",
            t.IsCollectionItem = !0,
            t.ExpectedChildren = {
                options: {
                    optionName: "options",
                    isCollectionItem: !1
                }
            },
            t
        }(l.default);
        t.Button = d;
        var c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e),
            t.OptionName = "options",
            t.TemplateProps = [{
                tmplOption: "template",
                render: "render",
                component: "component",
                keyFn: "keyFn"
            }],
            t
        }(l.default);
        t.Options = c,
        t.default = _
    },
    1423: function(e, t, n) {
        "use strict";
        var i = n(111);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = i(n(0))
          , r = (0,
        i(n(163)).default)(a.default.createElement("path", {
            d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
        }), "LockOutlined");
        t.default = r
    },
    1424: function(e, t, n) {
        "use strict";
        var i = n(111);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = i(n(0))
          , r = (0,
        i(n(163)).default)(a.default.createElement("path", {
            d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
        }), "Sync");
        t.default = r
    },
    1425: function(e, t, n) {
        "use strict";
        e.exports = n(1426)
    },
    1426: function(e, t, n) {
        "use strict";
        /** @license React v17.0.1
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var i = n(424)
          , a = n(0);
        function r(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        var o = 60106
          , s = 60107
          , l = 60108
          , _ = 60114
          , d = 60109
          , c = 60110
          , h = 60112
          , u = 60113
          , f = 60120
          , p = 60115
          , v = 60116
          , m = 60121
          , g = 60117
          , y = 60119
          , x = 60129
          , b = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
            var w = Symbol.for;
            o = w("react.portal"),
            s = w("react.fragment"),
            l = w("react.strict_mode"),
            _ = w("react.profiler"),
            d = w("react.provider"),
            c = w("react.context"),
            h = w("react.forward_ref"),
            u = w("react.suspense"),
            f = w("react.suspense_list"),
            p = w("react.memo"),
            v = w("react.lazy"),
            m = w("react.block"),
            g = w("react.fundamental"),
            y = w("react.scope"),
            x = w("react.debug_trace_mode"),
            b = w("react.legacy_hidden")
        }
        function E(e) {
            if (null == e)
                return null;
            if ("function" == typeof e)
                return e.displayName || e.name || null;
            if ("string" == typeof e)
                return e;
            switch (e) {
            case s:
                return "Fragment";
            case o:
                return "Portal";
            case _:
                return "Profiler";
            case l:
                return "StrictMode";
            case u:
                return "Suspense";
            case f:
                return "SuspenseList"
            }
            if ("object" == typeof e)
                switch (e.$$typeof) {
                case c:
                    return (e.displayName || "Context") + ".Consumer";
                case d:
                    return (e._context.displayName || "Context") + ".Provider";
                case h:
                    var t = e.render;
                    return t = t.displayName || t.name || "",
                    e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                case p:
                    return E(e.type);
                case m:
                    return E(e._render);
                case v:
                    t = e._payload,
                    e = e._init;
                    try {
                        return E(e(t))
                    } catch (e) {}
                }
            return null
        }
        var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          , D = {};
        function S(e, t) {
            for (var n = 0 | e._threadCount; n <= t; n++)
                e[n] = e._currentValue2,
                e._threadCount = n + 1
        }
        for (var O = new Uint16Array(16), C = 0; 15 > C; C++)
            O[C] = C + 1;
        O[15] = 0;
        var A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
          , M = Object.prototype.hasOwnProperty
          , T = {}
          , N = {};
        function L(e) {
            return !!M.call(N, e) || !M.call(T, e) && (A.test(e) ? N[e] = !0 : (T[e] = !0,
            !1))
        }
        function j(e, t, n, i, a, r, o) {
            this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
            this.attributeName = i,
            this.attributeNamespace = a,
            this.mustUseProperty = n,
            this.propertyName = e,
            this.type = t,
            this.sanitizeURL = r,
            this.removeEmptyString = o
        }
        var z = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
            z[e] = new j(e,0,!1,e,null,!1,!1)
        }
        )),
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
            var t = e[0];
            z[t] = new j(t,1,!1,e[1],null,!1,!1)
        }
        )),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
            z[e] = new j(e,2,!1,e.toLowerCase(),null,!1,!1)
        }
        )),
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
            z[e] = new j(e,2,!1,e,null,!1,!1)
        }
        )),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
            z[e] = new j(e,3,!1,e.toLowerCase(),null,!1,!1)
        }
        )),
        ["checked", "multiple", "muted", "selected"].forEach((function(e) {
            z[e] = new j(e,3,!0,e,null,!1,!1)
        }
        )),
        ["capture", "download"].forEach((function(e) {
            z[e] = new j(e,4,!1,e,null,!1,!1)
        }
        )),
        ["cols", "rows", "size", "span"].forEach((function(e) {
            z[e] = new j(e,6,!1,e,null,!1,!1)
        }
        )),
        ["rowSpan", "start"].forEach((function(e) {
            z[e] = new j(e,5,!1,e.toLowerCase(),null,!1,!1)
        }
        ));
        var H = /[\-:]([a-z])/g;
        function I(e) {
            return e[1].toUpperCase()
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
            var t = e.replace(H, I);
            z[t] = new j(t,1,!1,e,null,!1,!1)
        }
        )),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
            var t = e.replace(H, I);
            z[t] = new j(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
        }
        )),
        ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
            var t = e.replace(H, I);
            z[t] = new j(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
        }
        )),
        ["tabIndex", "crossOrigin"].forEach((function(e) {
            z[e] = new j(e,1,!1,e.toLowerCase(),null,!1,!1)
        }
        )),
        z.xlinkHref = new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
        ["src", "href", "action", "formAction"].forEach((function(e) {
            z[e] = new j(e,1,!1,e.toLowerCase(),null,!0,!0)
        }
        ));
        var P = /["'&<>]/;
        function R(e) {
            if ("boolean" == typeof e || "number" == typeof e)
                return "" + e;
            e = "" + e;
            var t = P.exec(e);
            if (t) {
                var n, i = "", a = 0;
                for (n = t.index; n < e.length; n++) {
                    switch (e.charCodeAt(n)) {
                    case 34:
                        t = "&quot;";
                        break;
                    case 38:
                        t = "&amp;";
                        break;
                    case 39:
                        t = "&#x27;";
                        break;
                    case 60:
                        t = "&lt;";
                        break;
                    case 62:
                        t = "&gt;";
                        break;
                    default:
                        continue
                    }
                    a !== n && (i += e.substring(a, n)),
                    a = n + 1,
                    i += t
                }
                e = a !== n ? i + e.substring(a, n) : i
            }
            return e
        }
        function F(e, t) {
            var n, i = z.hasOwnProperty(e) ? z[e] : null;
            return (n = "style" !== e) && (n = null !== i ? 0 === i.type : 2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1])),
            n || function(e, t, n, i) {
                if (null == t || function(e, t, n, i) {
                    if (null !== n && 0 === n.type)
                        return !1;
                    switch (typeof t) {
                    case "function":
                    case "symbol":
                        return !0;
                    case "boolean":
                        return !i && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                    default:
                        return !1
                    }
                }(e, t, n, i))
                    return !0;
                if (i)
                    return !1;
                if (null !== n)
                    switch (n.type) {
                    case 3:
                        return !t;
                    case 4:
                        return !1 === t;
                    case 5:
                        return isNaN(t);
                    case 6:
                        return isNaN(t) || 1 > t
                    }
                return !1
            }(e, t, i, !1) ? "" : null !== i ? (e = i.attributeName,
            3 === (n = i.type) || 4 === n && !0 === t ? e + '=""' : (i.sanitizeURL && (t = "" + t),
            e + '="' + R(t) + '"')) : L(e) ? e + '="' + R(t) + '"' : ""
        }
        var X = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , V = null
          , B = null
          , $ = null
          , q = !1
          , U = !1
          , Y = null
          , W = 0;
        function G() {
            if (null === V)
                throw Error(r(321));
            return V
        }
        function K() {
            if (0 < W)
                throw Error(r(312));
            return {
                memoizedState: null,
                queue: null,
                next: null
            }
        }
        function J() {
            return null === $ ? null === B ? (q = !1,
            B = $ = K()) : (q = !0,
            $ = B) : null === $.next ? (q = !1,
            $ = $.next = K()) : (q = !0,
            $ = $.next),
            $
        }
        function Z(e, t, n, i) {
            for (; U; )
                U = !1,
                W += 1,
                $ = null,
                n = e(t, i);
            return Q(),
            n
        }
        function Q() {
            V = null,
            U = !1,
            B = null,
            W = 0,
            $ = Y = null
        }
        function ee(e, t) {
            return "function" == typeof t ? t(e) : t
        }
        function te(e, t, n) {
            if (V = G(),
            $ = J(),
            q) {
                var i = $.queue;
                if (t = i.dispatch,
                null !== Y && void 0 !== (n = Y.get(i))) {
                    Y.delete(i),
                    i = $.memoizedState;
                    do {
                        i = e(i, n.action),
                        n = n.next
                    } while (null !== n);
                    return $.memoizedState = i,
                    [i, t]
                }
                return [$.memoizedState, t]
            }
            return e = e === ee ? "function" == typeof t ? t() : t : void 0 !== n ? n(t) : t,
            $.memoizedState = e,
            e = (e = $.queue = {
                last: null,
                dispatch: null
            }).dispatch = ie.bind(null, V, e),
            [$.memoizedState, e]
        }
        function ne(e, t) {
            if (V = G(),
            t = void 0 === t ? null : t,
            null !== ($ = J())) {
                var n = $.memoizedState;
                if (null !== n && null !== t) {
                    var i = n[1];
                    e: if (null === i)
                        i = !1;
                    else {
                        for (var a = 0; a < i.length && a < t.length; a++)
                            if (!X(t[a], i[a])) {
                                i = !1;
                                break e
                            }
                        i = !0
                    }
                    if (i)
                        return n[0]
                }
            }
            return e = e(),
            $.memoizedState = [e, t],
            e
        }
        function ie(e, t, n) {
            if (!(25 > W))
                throw Error(r(301));
            if (e === V)
                if (U = !0,
                e = {
                    action: n,
                    next: null
                },
                null === Y && (Y = new Map),
                void 0 === (n = Y.get(t)))
                    Y.set(t, e);
                else {
                    for (t = n; null !== t.next; )
                        t = t.next;
                    t.next = e
                }
        }
        function ae() {}
        var re = null
          , oe = {
            readContext: function(e) {
                var t = re.threadID;
                return S(e, t),
                e[t]
            },
            useContext: function(e) {
                G();
                var t = re.threadID;
                return S(e, t),
                e[t]
            },
            useMemo: ne,
            useReducer: te,
            useRef: function(e) {
                V = G();
                var t = ($ = J()).memoizedState;
                return null === t ? (e = {
                    current: e
                },
                $.memoizedState = e) : t
            },
            useState: function(e) {
                return te(ee, e)
            },
            useLayoutEffect: function() {},
            useCallback: function(e, t) {
                return ne((function() {
                    return e
                }
                ), t)
            },
            useImperativeHandle: ae,
            useEffect: ae,
            useDebugValue: ae,
            useDeferredValue: function(e) {
                return G(),
                e
            },
            useTransition: function() {
                return G(),
                [function(e) {
                    e()
                }
                , !1]
            },
            useOpaqueIdentifier: function() {
                return (re.identifierPrefix || "") + "R:" + (re.uniqueID++).toString(36)
            },
            useMutableSource: function(e, t) {
                return G(),
                t(e._source)
            }
        }
          , se = "http://www.w3.org/1999/xhtml";
        function le(e) {
            switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
            }
        }
        var _e = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }
          , de = i({
            menuitem: !0
        }, _e)
          , ce = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        }
          , he = ["Webkit", "ms", "Moz", "O"];
        Object.keys(ce).forEach((function(e) {
            he.forEach((function(t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1),
                ce[t] = ce[e]
            }
            ))
        }
        ));
        var ue = /([A-Z])/g
          , fe = /^ms-/
          , pe = a.Children.toArray
          , ve = k.ReactCurrentDispatcher
          , me = {
            listing: !0,
            pre: !0,
            textarea: !0
        }
          , ge = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/
          , ye = {}
          , xe = {};
        var be = Object.prototype.hasOwnProperty
          , we = {
            children: null,
            dangerouslySetInnerHTML: null,
            suppressContentEditableWarning: null,
            suppressHydrationWarning: null
        };
        function Ee(e, t) {
            if (void 0 === e)
                throw Error(r(152, E(t) || "Component"))
        }
        function ke(e, t, n) {
            function o(a, o) {
                var s = o.prototype && o.prototype.isReactComponent
                  , l = function(e, t, n, i) {
                    if (i && ("object" == typeof (i = e.contextType) && null !== i))
                        return S(i, n),
                        i[n];
                    if (e = e.contextTypes) {
                        for (var a in n = {},
                        e)
                            n[a] = t[a];
                        t = n
                    } else
                        t = D;
                    return t
                }(o, t, n, s)
                  , _ = []
                  , d = !1
                  , c = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {
                        if (null === _)
                            return null
                    },
                    enqueueReplaceState: function(e, t) {
                        d = !0,
                        _ = [t]
                    },
                    enqueueSetState: function(e, t) {
                        if (null === _)
                            return null;
                        _.push(t)
                    }
                };
                if (s) {
                    if (s = new o(a.props,l,c),
                    "function" == typeof o.getDerivedStateFromProps) {
                        var h = o.getDerivedStateFromProps.call(null, a.props, s.state);
                        null != h && (s.state = i({}, s.state, h))
                    }
                } else if (V = {},
                s = o(a.props, l, c),
                null == (s = Z(o, a.props, s, l)) || null == s.render)
                    return void Ee(e = s, o);
                if (s.props = a.props,
                s.context = l,
                s.updater = c,
                void 0 === (c = s.state) && (s.state = c = null),
                "function" == typeof s.UNSAFE_componentWillMount || "function" == typeof s.componentWillMount)
                    if ("function" == typeof s.componentWillMount && "function" != typeof o.getDerivedStateFromProps && s.componentWillMount(),
                    "function" == typeof s.UNSAFE_componentWillMount && "function" != typeof o.getDerivedStateFromProps && s.UNSAFE_componentWillMount(),
                    _.length) {
                        c = _;
                        var u = d;
                        if (_ = null,
                        d = !1,
                        u && 1 === c.length)
                            s.state = c[0];
                        else {
                            h = u ? c[0] : s.state;
                            var f = !0;
                            for (u = u ? 1 : 0; u < c.length; u++) {
                                var p = c[u];
                                null != (p = "function" == typeof p ? p.call(s, h, a.props, l) : p) && (f ? (f = !1,
                                h = i({}, h, p)) : i(h, p))
                            }
                            s.state = h
                        }
                    } else
                        _ = null;
                if (Ee(e = s.render(), o),
                "function" == typeof s.getChildContext && "object" == typeof (a = o.childContextTypes)) {
                    var v = s.getChildContext();
                    for (var m in v)
                        if (!(m in a))
                            throw Error(r(108, E(o) || "Unknown", m))
                }
                v && (t = i({}, t, v))
            }
            for (; a.isValidElement(e); ) {
                var s = e
                  , l = s.type;
                if ("function" != typeof l)
                    break;
                o(s, l)
            }
            return {
                child: e,
                context: t
            }
        }
        var De = function() {
            function e(e, t, n) {
                a.isValidElement(e) ? e.type !== s ? e = [e] : (e = e.props.children,
                e = a.isValidElement(e) ? [e] : pe(e)) : e = pe(e),
                e = {
                    type: null,
                    domNamespace: se,
                    children: e,
                    childIndex: 0,
                    context: D,
                    footer: ""
                };
                var i = O[0];
                if (0 === i) {
                    var o = O
                      , l = 2 * (i = o.length);
                    if (!(65536 >= l))
                        throw Error(r(304));
                    var _ = new Uint16Array(l);
                    for (_.set(o),
                    (O = _)[0] = i + 1,
                    o = i; o < l - 1; o++)
                        O[o] = o + 1;
                    O[l - 1] = 0
                } else
                    O[0] = O[i];
                this.threadID = i,
                this.stack = [e],
                this.exhausted = !1,
                this.currentSelectValue = null,
                this.previousWasTextNode = !1,
                this.makeStaticMarkup = t,
                this.suspenseDepth = 0,
                this.contextIndex = -1,
                this.contextStack = [],
                this.contextValueStack = [],
                this.uniqueID = 0,
                this.identifierPrefix = n && n.identifierPrefix || ""
            }
            var t = e.prototype;
            return t.destroy = function() {
                if (!this.exhausted) {
                    this.exhausted = !0,
                    this.clearProviders();
                    var e = this.threadID;
                    O[e] = O[0],
                    O[0] = e
                }
            }
            ,
            t.pushProvider = function(e) {
                var t = ++this.contextIndex
                  , n = e.type._context
                  , i = this.threadID;
                S(n, i);
                var a = n[i];
                this.contextStack[t] = n,
                this.contextValueStack[t] = a,
                n[i] = e.props.value
            }
            ,
            t.popProvider = function() {
                var e = this.contextIndex
                  , t = this.contextStack[e]
                  , n = this.contextValueStack[e];
                this.contextStack[e] = null,
                this.contextValueStack[e] = null,
                this.contextIndex--,
                t[this.threadID] = n
            }
            ,
            t.clearProviders = function() {
                for (var e = this.contextIndex; 0 <= e; e--)
                    this.contextStack[e][this.threadID] = this.contextValueStack[e]
            }
            ,
            t.read = function(e) {
                if (this.exhausted)
                    return null;
                var t = re;
                re = this;
                var n = ve.current;
                ve.current = oe;
                try {
                    for (var i = [""], a = !1; i[0].length < e; ) {
                        if (0 === this.stack.length) {
                            this.exhausted = !0;
                            var o = this.threadID;
                            O[o] = O[0],
                            O[0] = o;
                            break
                        }
                        var s = this.stack[this.stack.length - 1];
                        if (a || s.childIndex >= s.children.length) {
                            var l = s.footer;
                            if ("" !== l && (this.previousWasTextNode = !1),
                            this.stack.pop(),
                            "select" === s.type)
                                this.currentSelectValue = null;
                            else if (null != s.type && null != s.type.type && s.type.type.$$typeof === d)
                                this.popProvider(s.type);
                            else if (s.type === u) {
                                this.suspenseDepth--;
                                var _ = i.pop();
                                if (a) {
                                    a = !1;
                                    var c = s.fallbackFrame;
                                    if (!c)
                                        throw Error(r(303));
                                    this.stack.push(c),
                                    i[this.suspenseDepth] += "\x3c!--$!--\x3e";
                                    continue
                                }
                                i[this.suspenseDepth] += _
                            }
                            i[this.suspenseDepth] += l
                        } else {
                            var h = s.children[s.childIndex++]
                              , f = "";
                            try {
                                f += this.render(h, s.context, s.domNamespace)
                            } catch (e) {
                                if (null != e && "function" == typeof e.then)
                                    throw Error(r(294));
                                throw e
                            }
                            i.length <= this.suspenseDepth && i.push(""),
                            i[this.suspenseDepth] += f
                        }
                    }
                    return i[0]
                } finally {
                    ve.current = n,
                    re = t,
                    Q()
                }
            }
            ,
            t.render = function(e, t, n) {
                if ("string" == typeof e || "number" == typeof e)
                    return "" === (n = "" + e) ? "" : this.makeStaticMarkup ? R(n) : this.previousWasTextNode ? "\x3c!-- --\x3e" + R(n) : (this.previousWasTextNode = !0,
                    R(n));
                if (e = (t = ke(e, t, this.threadID)).child,
                t = t.context,
                null === e || !1 === e)
                    return "";
                if (!a.isValidElement(e)) {
                    if (null != e && null != e.$$typeof) {
                        if ((n = e.$$typeof) === o)
                            throw Error(r(257));
                        throw Error(r(258, n.toString()))
                    }
                    return e = pe(e),
                    this.stack.push({
                        type: null,
                        domNamespace: n,
                        children: e,
                        childIndex: 0,
                        context: t,
                        footer: ""
                    }),
                    ""
                }
                var m = e.type;
                if ("string" == typeof m)
                    return this.renderDOM(e, t, n);
                switch (m) {
                case b:
                case x:
                case l:
                case _:
                case f:
                case s:
                    return e = pe(e.props.children),
                    this.stack.push({
                        type: null,
                        domNamespace: n,
                        children: e,
                        childIndex: 0,
                        context: t,
                        footer: ""
                    }),
                    "";
                case u:
                    throw Error(r(294));
                case y:
                    throw Error(r(343))
                }
                if ("object" == typeof m && null !== m)
                    switch (m.$$typeof) {
                    case h:
                        V = {};
                        var w = m.render(e.props, e.ref);
                        return w = Z(m.render, e.props, w, e.ref),
                        w = pe(w),
                        this.stack.push({
                            type: null,
                            domNamespace: n,
                            children: w,
                            childIndex: 0,
                            context: t,
                            footer: ""
                        }),
                        "";
                    case p:
                        return e = [a.createElement(m.type, i({
                            ref: e.ref
                        }, e.props))],
                        this.stack.push({
                            type: null,
                            domNamespace: n,
                            children: e,
                            childIndex: 0,
                            context: t,
                            footer: ""
                        }),
                        "";
                    case d:
                        return n = {
                            type: e,
                            domNamespace: n,
                            children: m = pe(e.props.children),
                            childIndex: 0,
                            context: t,
                            footer: ""
                        },
                        this.pushProvider(e),
                        this.stack.push(n),
                        "";
                    case c:
                        m = e.type,
                        w = e.props;
                        var E = this.threadID;
                        return S(m, E),
                        m = pe(w.children(m[E])),
                        this.stack.push({
                            type: e,
                            domNamespace: n,
                            children: m,
                            childIndex: 0,
                            context: t,
                            footer: ""
                        }),
                        "";
                    case g:
                        throw Error(r(338));
                    case v:
                        return m = (w = (m = e.type)._init)(m._payload),
                        e = [a.createElement(m, i({
                            ref: e.ref
                        }, e.props))],
                        this.stack.push({
                            type: null,
                            domNamespace: n,
                            children: e,
                            childIndex: 0,
                            context: t,
                            footer: ""
                        }),
                        ""
                    }
                throw Error(r(130, null == m ? m : typeof m, ""))
            }
            ,
            t.renderDOM = function(e, t, n) {
                var o = e.type.toLowerCase();
                if (n === se && le(o),
                !ye.hasOwnProperty(o)) {
                    if (!ge.test(o))
                        throw Error(r(65, o));
                    ye[o] = !0
                }
                var s = e.props;
                if ("input" === o)
                    s = i({
                        type: void 0
                    }, s, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: null != s.value ? s.value : s.defaultValue,
                        checked: null != s.checked ? s.checked : s.defaultChecked
                    });
                else if ("textarea" === o) {
                    var l = s.value;
                    if (null == l) {
                        l = s.defaultValue;
                        var _ = s.children;
                        if (null != _) {
                            if (null != l)
                                throw Error(r(92));
                            if (Array.isArray(_)) {
                                if (!(1 >= _.length))
                                    throw Error(r(93));
                                _ = _[0]
                            }
                            l = "" + _
                        }
                        null == l && (l = "")
                    }
                    s = i({}, s, {
                        value: void 0,
                        children: "" + l
                    })
                } else if ("select" === o)
                    this.currentSelectValue = null != s.value ? s.value : s.defaultValue,
                    s = i({}, s, {
                        value: void 0
                    });
                else if ("option" === o) {
                    _ = this.currentSelectValue;
                    var d = function(e) {
                        if (null == e)
                            return e;
                        var t = "";
                        return a.Children.forEach(e, (function(e) {
                            null != e && (t += e)
                        }
                        )),
                        t
                    }(s.children);
                    if (null != _) {
                        var c = null != s.value ? s.value + "" : d;
                        if (l = !1,
                        Array.isArray(_)) {
                            for (var h = 0; h < _.length; h++)
                                if ("" + _[h] === c) {
                                    l = !0;
                                    break
                                }
                        } else
                            l = "" + _ === c;
                        s = i({
                            selected: void 0,
                            children: void 0
                        }, s, {
                            selected: l,
                            children: d
                        })
                    }
                }
                if (l = s) {
                    if (de[o] && (null != l.children || null != l.dangerouslySetInnerHTML))
                        throw Error(r(137, o));
                    if (null != l.dangerouslySetInnerHTML) {
                        if (null != l.children)
                            throw Error(r(60));
                        if ("object" != typeof l.dangerouslySetInnerHTML || !("__html"in l.dangerouslySetInnerHTML))
                            throw Error(r(61))
                    }
                    if (null != l.style && "object" != typeof l.style)
                        throw Error(r(62))
                }
                l = s,
                _ = this.makeStaticMarkup,
                d = 1 === this.stack.length,
                c = "<" + e.type;
                e: if (-1 === o.indexOf("-"))
                    h = "string" == typeof l.is;
                else
                    switch (o) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        h = !1;
                        break e;
                    default:
                        h = !0
                    }
                for (b in l)
                    if (be.call(l, b)) {
                        var u = l[b];
                        if (null != u) {
                            if ("style" === b) {
                                var f = void 0
                                  , p = ""
                                  , v = "";
                                for (f in u)
                                    if (u.hasOwnProperty(f)) {
                                        var m = 0 === f.indexOf("--")
                                          , g = u[f];
                                        if (null != g) {
                                            if (m)
                                                var y = f;
                                            else if (y = f,
                                            xe.hasOwnProperty(y))
                                                y = xe[y];
                                            else {
                                                var x = y.replace(ue, "-$1").toLowerCase().replace(fe, "-ms-");
                                                y = xe[y] = x
                                            }
                                            p += v + y + ":",
                                            v = f,
                                            p += m = null == g || "boolean" == typeof g || "" === g ? "" : m || "number" != typeof g || 0 === g || ce.hasOwnProperty(v) && ce[v] ? ("" + g).trim() : g + "px",
                                            v = ";"
                                        }
                                    }
                                u = p || null
                            }
                            f = null,
                            h ? we.hasOwnProperty(b) || (f = L(f = b) && null != u ? f + '="' + R(u) + '"' : "") : f = F(b, u),
                            f && (c += " " + f)
                        }
                    }
                _ || d && (c += ' data-reactroot=""');
                var b = c;
                l = "",
                _e.hasOwnProperty(o) ? b += "/>" : (b += ">",
                l = "</" + e.type + ">");
                e: {
                    if (null != (_ = s.dangerouslySetInnerHTML)) {
                        if (null != _.__html) {
                            _ = _.__html;
                            break e
                        }
                    } else if ("string" == typeof (_ = s.children) || "number" == typeof _) {
                        _ = R(_);
                        break e
                    }
                    _ = null
                }
                return null != _ ? (s = [],
                me.hasOwnProperty(o) && "\n" === _.charAt(0) && (b += "\n"),
                b += _) : s = pe(s.children),
                e = e.type,
                n = null == n || "http://www.w3.org/1999/xhtml" === n ? le(e) : "http://www.w3.org/2000/svg" === n && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : n,
                this.stack.push({
                    domNamespace: n,
                    type: o,
                    children: s,
                    childIndex: 0,
                    context: t,
                    footer: l
                }),
                this.previousWasTextNode = !1,
                b
            }
            ,
            e
        }();
        t.renderToNodeStream = function() {
            throw Error(r(207))
        }
        ,
        t.renderToStaticMarkup = function(e, t) {
            e = new De(e,!0,t);
            try {
                return e.read(1 / 0)
            } finally {
                e.destroy()
            }
        }
        ,
        t.renderToStaticNodeStream = function() {
            throw Error(r(208))
        }
        ,
        t.renderToString = function(e, t) {
            e = new De(e,!1,t);
            try {
                return e.read(1 / 0)
            } finally {
                e.destroy()
            }
        }
        ,
        t.version = "17.0.1"
    },
    1427: function(e, t, n) {
        "use strict";
        t.a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAIAAAArRUU2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGUlEQVQI12P4//8/A7Xx69evGWhh7rlz5wAftYKuAmb8AgAAAABJRU5ErkJggg=="
    },
    1428: function(e, t, n) {
        "use strict";
        var i = n(111);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = i(n(0))
          , r = (0,
        i(n(163)).default)(a.default.createElement("path", {
            d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        }), "ChevronRight");
        t.default = r
    },
    1429: function(module, exports) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        !function() {
            function dtmlXMLLoaderObject(e, t, n, i) {
                return this.xmlDoc = "",
                this.async = void 0 === n || n,
                this.onloadAction = e || null,
                this.mainObject = t || null,
                this.waitCall = null,
                this.rSeed = i || !1,
                this
            }
            function dhtmlDragAndDropObject() {
                return window.dhtmlDragAndDrop ? window.dhtmlDragAndDrop : (this.lastLanding = 0,
                this.dragNode = 0,
                this.dragStartNode = 0,
                this.dragStartObject = 0,
                this.tempDOMU = null,
                this.tempDOMM = null,
                this.waitDrag = 0,
                window.dhtmlDragAndDrop = this,
                this)
            }
            function _dhtmlxError(e, t, n) {
                return this.catches || (this.catches = []),
                this
            }
            function dhtmlXHeir(e, t) {
                for (var n in t)
                    "function" == typeof t[n] && (e[n] = t[n]);
                return e
            }
            window.dhtmlx || (window.dhtmlx = function(e) {
                for (var t in e)
                    dhtmlx[t] = e[t];
                return dhtmlx
            }
            ),
            dhtmlx.extend_api = function(e, t, n) {
                var i = window[e];
                i && (window[e] = function(e) {
                    var n;
                    if (e && "object" == typeof e && !e.tagName) {
                        for (var a in n = i.apply(this, t._init ? t._init(e) : arguments),
                        dhtmlx)
                            t[a] && this[t[a]](dhtmlx[a]);
                        for (var a in e)
                            t[a] ? this[t[a]](e[a]) : 0 === a.indexOf("on") && this.attachEvent(a, e[a])
                    } else
                        n = i.apply(this, arguments);
                    return t._patch && t._patch(this),
                    n || this
                }
                ,
                window[e].prototype = i.prototype,
                n && dhtmlXHeir(window[e].prototype, n))
            }
            ,
            window.dhtmlxAjax = {
                get: function(e, t) {
                    var n = new dtmlXMLLoaderObject(!0);
                    return n.async = arguments.length < 3,
                    n.waitCall = t,
                    n.loadXML(e),
                    n
                },
                post: function(e, t, n) {
                    var i = new dtmlXMLLoaderObject(!0);
                    return i.async = arguments.length < 4,
                    i.waitCall = n,
                    i.loadXML(e, !0, t),
                    i
                },
                getSync: function(e) {
                    return this.get(e, null, !0)
                },
                postSync: function(e, t) {
                    return this.post(e, t, null, !0)
                }
            },
            window.dtmlXMLLoaderObject = dtmlXMLLoaderObject,
            dtmlXMLLoaderObject.count = 0,
            dtmlXMLLoaderObject.prototype.waitLoadFunction = function(e) {
                var t = !0;
                return this.check = function() {
                    if (e && e.onloadAction && (!e.xmlDoc.readyState || 4 == e.xmlDoc.readyState)) {
                        if (!t)
                            return;
                        t = !1,
                        dtmlXMLLoaderObject.count++,
                        "function" == typeof e.onloadAction && e.onloadAction(e.mainObject, null, null, null, e),
                        e.waitCall && (e.waitCall.call(this, e),
                        e.waitCall = null)
                    }
                }
                ,
                this.check
            }
            ,
            dtmlXMLLoaderObject.prototype.getXMLTopNode = function(e, t) {
                var n;
                if (this.xmlDoc.responseXML) {
                    if (0 === (i = this.xmlDoc.responseXML.getElementsByTagName(e)).length && -1 != e.indexOf(":"))
                        var i = this.xmlDoc.responseXML.getElementsByTagName(e.split(":")[1]);
                    n = i[0]
                } else
                    n = this.xmlDoc.documentElement;
                if (n)
                    return this._retry = !1,
                    n;
                if (!this._retry && _isIE) {
                    this._retry = !0;
                    t = this.xmlDoc;
                    return this.loadXMLString(this.xmlDoc.responseText.replace(/^[\s]+/, ""), !0),
                    this.getXMLTopNode(e, t)
                }
                return dhtmlxError.throwError("LoadXML", "Incorrect XML", [t || this.xmlDoc, this.mainObject]),
                document.createElement("div")
            }
            ,
            dtmlXMLLoaderObject.prototype.loadXMLString = function(e, t) {
                if (_isIE)
                    this.xmlDoc = new ActiveXObject("Microsoft.XMLDOM"),
                    this.xmlDoc.async = this.async,
                    this.xmlDoc.onreadystatechange = function() {}
                    ,
                    this.xmlDoc.loadXML(e);
                else {
                    var n = new DOMParser;
                    this.xmlDoc = n.parseFromString(e, "text/xml")
                }
                t || (this.onloadAction && this.onloadAction(this.mainObject, null, null, null, this),
                this.waitCall && (this.waitCall(),
                this.waitCall = null))
            }
            ,
            dtmlXMLLoaderObject.prototype.loadXML = function(e, t, n, i) {
                this.rSeed && (e += (-1 != e.indexOf("?") ? "&" : "?") + "a_dhx_rSeed=" + (new Date).valueOf()),
                this.filePath = e,
                !_isIE && window.XMLHttpRequest ? this.xmlDoc = new XMLHttpRequest : this.xmlDoc = new ActiveXObject("Microsoft.XMLHTTP"),
                this.async && (this.xmlDoc.onreadystatechange = new this.waitLoadFunction(this)),
                "string" == typeof t ? this.xmlDoc.open(t, e, this.async) : this.xmlDoc.open(t ? "POST" : "GET", e, this.async),
                i ? (this.xmlDoc.setRequestHeader("User-Agent", "dhtmlxRPC v0.1 (" + navigator.userAgent + ")"),
                this.xmlDoc.setRequestHeader("Content-type", "text/xml")) : t && this.xmlDoc.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                this.xmlDoc.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                this.xmlDoc.send(n),
                this.async || new this.waitLoadFunction(this)()
            }
            ,
            dtmlXMLLoaderObject.prototype.destructor = function() {
                return this._filterXPath = null,
                this._getAllNamedChilds = null,
                this._retry = null,
                this.async = null,
                this.rSeed = null,
                this.filePath = null,
                this.onloadAction = null,
                this.mainObject = null,
                this.xmlDoc = null,
                this.doXPath = null,
                this.doXPathOpera = null,
                this.doXSLTransToObject = null,
                this.doXSLTransToString = null,
                this.loadXML = null,
                this.loadXMLString = null,
                this.doSerialization = null,
                this.xmlNodeToJSON = null,
                this.getXMLTopNode = null,
                this.setXSLParamValue = null,
                null
            }
            ,
            dtmlXMLLoaderObject.prototype.xmlNodeToJSON = function(e) {
                for (var t = {}, n = 0; n < e.attributes.length; n++)
                    t[e.attributes[n].name] = e.attributes[n].value;
                t._tagvalue = e.firstChild ? e.firstChild.nodeValue : "";
                for (n = 0; n < e.childNodes.length; n++) {
                    var i = e.childNodes[n].tagName;
                    i && (t[i] || (t[i] = []),
                    t[i].push(this.xmlNodeToJSON(e.childNodes[n])))
                }
                return t
            }
            ,
            window.dhtmlDragAndDropObject = dhtmlDragAndDropObject,
            dhtmlDragAndDropObject.prototype.removeDraggableItem = function(e) {
                e.onmousedown = null,
                e.dragStarter = null,
                e.dragLanding = null
            }
            ,
            dhtmlDragAndDropObject.prototype.addDraggableItem = function(e, t) {
                e.onmousedown = this.preCreateDragCopy,
                e.dragStarter = t,
                this.addDragLanding(e, t)
            }
            ,
            dhtmlDragAndDropObject.prototype.addDragLanding = function(e, t) {
                e.dragLanding = t
            }
            ,
            dhtmlDragAndDropObject.prototype.preCreateDragCopy = function(e) {
                if (!e && !window.event || 2 != (e || event).button)
                    return window.dhtmlDragAndDrop.waitDrag ? (window.dhtmlDragAndDrop.waitDrag = 0,
                    document.body.onmouseup = window.dhtmlDragAndDrop.tempDOMU,
                    document.body.onmousemove = window.dhtmlDragAndDrop.tempDOMM,
                    !1) : (window.dhtmlDragAndDrop.dragNode && window.dhtmlDragAndDrop.stopDrag(e),
                    window.dhtmlDragAndDrop.waitDrag = 1,
                    window.dhtmlDragAndDrop.tempDOMU = document.body.onmouseup,
                    window.dhtmlDragAndDrop.tempDOMM = document.body.onmousemove,
                    window.dhtmlDragAndDrop.dragStartNode = this,
                    window.dhtmlDragAndDrop.dragStartObject = this.dragStarter,
                    document.body.onmouseup = window.dhtmlDragAndDrop.preCreateDragCopy,
                    document.body.onmousemove = window.dhtmlDragAndDrop.callDrag,
                    window.dhtmlDragAndDrop.downtime = (new Date).valueOf(),
                    !(!e || !e.preventDefault || (e.preventDefault(),
                    1)))
            }
            ,
            dhtmlDragAndDropObject.prototype.callDrag = function(e) {
                e || (e = window.event);
                var t = window.dhtmlDragAndDrop;
                if (!((new Date).valueOf() - t.downtime < 100)) {
                    if (!t.dragNode) {
                        if (!t.waitDrag)
                            return t.stopDrag(e, !0);
                        if (t.dragNode = t.dragStartObject._createDragNode(t.dragStartNode, e),
                        !t.dragNode)
                            return t.stopDrag();
                        t.dragNode.onselectstart = function() {
                            return !1
                        }
                        ,
                        t.gldragNode = t.dragNode,
                        document.body.appendChild(t.dragNode),
                        document.body.onmouseup = t.stopDrag,
                        t.waitDrag = 0,
                        t.dragNode.pWindow = window,
                        t.initFrameRoute()
                    }
                    if (t.dragNode.parentNode != window.document.body && t.gldragNode) {
                        var n = t.gldragNode;
                        t.gldragNode.old && (n = t.gldragNode.old),
                        n.parentNode.removeChild(n);
                        var i = t.dragNode.pWindow;
                        if (n.pWindow && n.pWindow.dhtmlDragAndDrop.lastLanding && n.pWindow.dhtmlDragAndDrop.lastLanding.dragLanding._dragOut(n.pWindow.dhtmlDragAndDrop.lastLanding),
                        _isIE) {
                            var a = document.createElement("div");
                            a.innerHTML = t.dragNode.outerHTML,
                            t.dragNode = a.childNodes[0]
                        } else
                            t.dragNode = t.dragNode.cloneNode(!0);
                        t.dragNode.pWindow = window,
                        t.gldragNode.old = t.dragNode,
                        document.body.appendChild(t.dragNode),
                        i.dhtmlDragAndDrop.dragNode = t.dragNode
                    }
                    var r;
                    t.dragNode.style.left = e.clientX + 15 + (t.fx ? -1 * t.fx : 0) + (document.body.scrollLeft || document.documentElement.scrollLeft) + "px",
                    t.dragNode.style.top = e.clientY + 3 + (t.fy ? -1 * t.fy : 0) + (document.body.scrollTop || document.documentElement.scrollTop) + "px",
                    r = e.srcElement ? e.srcElement : e.target,
                    t.checkLanding(r, e)
                }
            }
            ,
            dhtmlDragAndDropObject.prototype.calculateFramePosition = function(e) {
                if (window.name) {
                    for (var t = parent.frames[window.name].frameElement.offsetParent, n = 0, i = 0; t; )
                        n += t.offsetLeft,
                        i += t.offsetTop,
                        t = t.offsetParent;
                    if (parent.dhtmlDragAndDrop) {
                        var a = parent.dhtmlDragAndDrop.calculateFramePosition(1);
                        n += 1 * a.split("_")[0],
                        i += 1 * a.split("_")[1]
                    }
                    if (e)
                        return n + "_" + i;
                    this.fx = n,
                    this.fy = i
                }
                return "0_0"
            }
            ,
            dhtmlDragAndDropObject.prototype.checkLanding = function(e, t) {
                e && e.dragLanding ? (this.lastLanding && this.lastLanding.dragLanding._dragOut(this.lastLanding),
                this.lastLanding = e,
                this.lastLanding = this.lastLanding.dragLanding._dragIn(this.lastLanding, this.dragStartNode, t.clientX, t.clientY, t),
                this.lastLanding_scr = _isIE ? t.srcElement : t.target) : e && "BODY" != e.tagName ? this.checkLanding(e.parentNode, t) : (this.lastLanding && this.lastLanding.dragLanding._dragOut(this.lastLanding, t.clientX, t.clientY, t),
                this.lastLanding = 0,
                this._onNotFound && this._onNotFound())
            }
            ,
            dhtmlDragAndDropObject.prototype.stopDrag = function(e, t) {
                var n = window.dhtmlDragAndDrop;
                if (!t) {
                    n.stopFrameRoute();
                    var i = n.lastLanding;
                    n.lastLanding = null,
                    i && i.dragLanding._drag(n.dragStartNode, n.dragStartObject, i, _isIE ? event.srcElement : e.target)
                }
                n.lastLanding = null,
                n.dragNode && n.dragNode.parentNode == document.body && n.dragNode.parentNode.removeChild(n.dragNode),
                n.dragNode = 0,
                n.gldragNode = 0,
                n.fx = 0,
                n.fy = 0,
                n.dragStartNode = 0,
                n.dragStartObject = 0,
                document.body.onmouseup = n.tempDOMU,
                document.body.onmousemove = n.tempDOMM,
                n.tempDOMU = null,
                n.tempDOMM = null,
                n.waitDrag = 0
            }
            ,
            dhtmlDragAndDropObject.prototype.stopFrameRoute = function(e) {
                e && window.dhtmlDragAndDrop.stopDrag(1, 1);
                for (var t = 0; t < window.frames.length; t++)
                    try {
                        window.frames[t] != e && window.frames[t].dhtmlDragAndDrop && window.frames[t].dhtmlDragAndDrop.stopFrameRoute(window)
                    } catch (e) {}
                try {
                    parent.dhtmlDragAndDrop && parent != window && parent != e && parent.dhtmlDragAndDrop.stopFrameRoute(window)
                } catch (e) {}
            }
            ,
            dhtmlDragAndDropObject.prototype.initFrameRoute = function(e, t) {
                e && (window.dhtmlDragAndDrop.preCreateDragCopy(),
                window.dhtmlDragAndDrop.dragStartNode = e.dhtmlDragAndDrop.dragStartNode,
                window.dhtmlDragAndDrop.dragStartObject = e.dhtmlDragAndDrop.dragStartObject,
                window.dhtmlDragAndDrop.dragNode = e.dhtmlDragAndDrop.dragNode,
                window.dhtmlDragAndDrop.gldragNode = e.dhtmlDragAndDrop.dragNode,
                window.document.body.onmouseup = window.dhtmlDragAndDrop.stopDrag,
                window.waitDrag = 0,
                !_isIE && t && (!_isFF || _FFrv < 1.8) && window.dhtmlDragAndDrop.calculateFramePosition());
                try {
                    parent.dhtmlDragAndDrop && parent != window && parent != e && parent.dhtmlDragAndDrop.initFrameRoute(window)
                } catch (e) {}
                for (var n = 0; n < window.frames.length; n++)
                    try {
                        window.frames[n] != e && window.frames[n].dhtmlDragAndDrop && window.frames[n].dhtmlDragAndDrop.initFrameRoute(window, !e || t ? 1 : 0)
                    } catch (e) {}
            }
            ;
            var _isFF = !1
              , _isIE = !1
              , _isOpera = !1
              , _isKHTML = !1
              , _isMacOS = !1
              , _isChrome = !1
              , _FFrv = !1
              , _KHTMLrv = !1
              , _OperaRv = !1;
            -1 != navigator.userAgent.indexOf("Macintosh") && (_isMacOS = !0),
            navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && (_isChrome = !0),
            -1 != navigator.userAgent.indexOf("Safari") || -1 != navigator.userAgent.indexOf("Konqueror") ? (_KHTMLrv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari") + 7, 5)),
            _KHTMLrv > 525 ? (_isFF = !0,
            _FFrv = 1.9) : _isKHTML = !0) : -1 != navigator.userAgent.indexOf("Opera") ? (_isOpera = !0,
            _OperaRv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera") + 6, 3))) : -1 != navigator.appName.indexOf("Microsoft") ? (_isIE = !0,
            -1 == navigator.appVersion.indexOf("MSIE 8.0") && -1 == navigator.appVersion.indexOf("MSIE 9.0") && -1 == navigator.appVersion.indexOf("MSIE 10.0") || "BackCompat" == document.compatMode || (_isIE = 8)) : "Netscape" == navigator.appName && -1 != navigator.userAgent.indexOf("Trident") ? _isIE = 8 : (_isFF = !0,
            _FFrv = parseFloat(navigator.userAgent.split("rv:")[1])),
            dtmlXMLLoaderObject.prototype.doXPath = function(e, t, n, i) {
                if (_isKHTML || !_isIE && !window.XPathResult)
                    return this.doXPathOpera(e, t);
                if (_isIE)
                    return t || (t = this.xmlDoc.nodeName ? this.xmlDoc : this.xmlDoc.responseXML),
                    t || dhtmlxError.throwError("LoadXML", "Incorrect XML", [t || this.xmlDoc, this.mainObject]),
                    n && t.setProperty("SelectionNamespaces", "xmlns:xsl='" + n + "'"),
                    "single" == i ? t.selectSingleNode(e) : t.selectNodes(e) || new Array(0);
                var a = t;
                t || (t = this.xmlDoc.nodeName ? this.xmlDoc : this.xmlDoc.responseXML),
                t || dhtmlxError.throwError("LoadXML", "Incorrect XML", [t || this.xmlDoc, this.mainObject]),
                -1 != t.nodeName.indexOf("document") ? a = t : (a = t,
                t = t.ownerDocument);
                var r = XPathResult.ANY_TYPE;
                "single" == i && (r = XPathResult.FIRST_ORDERED_NODE_TYPE);
                var o = []
                  , s = t.evaluate(e, a, (function(e) {
                    return n
                }
                ), r, null);
                if (r == XPathResult.FIRST_ORDERED_NODE_TYPE)
                    return s.singleNodeValue;
                for (var l = s.iterateNext(); l; )
                    o[o.length] = l,
                    l = s.iterateNext();
                return o
            }
            ,
            _dhtmlxError.prototype.catchError = function(e, t) {
                this.catches[e] = t
            }
            ,
            _dhtmlxError.prototype.throwError = function(e, t, n) {
                return this.catches[e] ? this.catches[e](e, t, n) : this.catches.ALL ? this.catches.ALL(e, t, n) : (window.alert("Error type: " + arguments[0] + "\nDescription: " + arguments[1]),
                null)
            }
            ,
            window.dhtmlxError = new _dhtmlxError,
            dtmlXMLLoaderObject.prototype.doXPathOpera = function(e, t) {
                var n = e.replace(/[\/]+/gi, "/").split("/")
                  , i = null
                  , a = 1;
                if (!n.length)
                    return [];
                if ("." == n[0])
                    i = [t];
                else {
                    if ("" !== n[0])
                        return [];
                    i = (this.xmlDoc.responseXML || this.xmlDoc).getElementsByTagName(n[a].replace(/\[[^\]]*\]/g, "")),
                    a++
                }
                for (; a < n.length; a++)
                    i = this._getAllNamedChilds(i, n[a]);
                return -1 != n[a - 1].indexOf("[") && (i = this._filterXPath(i, n[a - 1])),
                i
            }
            ,
            dtmlXMLLoaderObject.prototype._filterXPath = function(e, t) {
                for (var n = [], i = (t = t.replace(/[^\[]*\[\@/g, "").replace(/[\[\]\@]*/g, ""),
                0); i < e.length; i++)
                    e[i].getAttribute(t) && (n[n.length] = e[i]);
                return n
            }
            ,
            dtmlXMLLoaderObject.prototype._getAllNamedChilds = function(e, t) {
                var n = [];
                _isKHTML && (t = t.toUpperCase());
                for (var i = 0; i < e.length; i++)
                    for (var a = 0; a < e[i].childNodes.length; a++)
                        _isKHTML ? e[i].childNodes[a].tagName && e[i].childNodes[a].tagName.toUpperCase() == t && (n[n.length] = e[i].childNodes[a]) : e[i].childNodes[a].tagName == t && (n[n.length] = e[i].childNodes[a]);
                return n
            }
            ,
            void 0 === window.dhtmlxEvent && (window.dhtmlxEvent = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            }
            ),
            dtmlXMLLoaderObject.prototype.xslDoc = null,
            dtmlXMLLoaderObject.prototype.setXSLParamValue = function(e, t, n) {
                n || (n = this.xslDoc),
                n.responseXML && (n = n.responseXML);
                var i = this.doXPath("/xsl:stylesheet/xsl:variable[@name='" + e + "']", n, "http://www.w3.org/1999/XSL/Transform", "single");
                i && (i.firstChild.nodeValue = t)
            }
            ,
            dtmlXMLLoaderObject.prototype.doXSLTransToObject = function(e, t) {
                var n;
                if (e || (e = this.xslDoc),
                e.responseXML && (e = e.responseXML),
                t || (t = this.xmlDoc),
                t.responseXML && (t = t.responseXML),
                _isIE) {
                    n = new ActiveXObject("Msxml2.DOMDocument.3.0");
                    try {
                        t.transformNodeToObject(e, n)
                    } catch (i) {
                        n = t.transformNode(e)
                    }
                } else
                    this.XSLProcessor || (this.XSLProcessor = new XSLTProcessor,
                    this.XSLProcessor.importStylesheet(e)),
                    n = this.XSLProcessor.transformToDocument(t);
                return n
            }
            ,
            dtmlXMLLoaderObject.prototype.doXSLTransToString = function(e, t) {
                var n = this.doXSLTransToObject(e, t);
                return "string" == typeof n ? n : this.doSerialization(n)
            }
            ,
            dtmlXMLLoaderObject.prototype.doSerialization = function(e) {
                return e || (e = this.xmlDoc),
                e.responseXML && (e = e.responseXML),
                _isIE ? e.xml : (new XMLSerializer).serializeToString(e)
            }
            ,
            window.dhtmlxEventable = function(obj) {
                obj.attachEvent = function(e, t, n) {
                    return this[e = "ev_" + e.toLowerCase()] || (this[e] = new this.eventCatcher(n || this)),
                    e + ":" + this[e].addEvent(t)
                }
                ,
                obj.callEvent = function(e, t) {
                    return !this[e = "ev_" + e.toLowerCase()] || this[e].apply(this, t)
                }
                ,
                obj.checkEvent = function(e) {
                    return !!this["ev_" + e.toLowerCase()]
                }
                ,
                obj.eventCatcher = function(obj) {
                    var dhx_catch = []
                      , z = function() {
                        for (var e = !0, t = 0; t < dhx_catch.length; t++)
                            if (dhx_catch[t]) {
                                var n = dhx_catch[t].apply(obj, arguments);
                                e = e && n
                            }
                        return e
                    };
                    return z.addEvent = function(ev) {
                        return "function" != typeof ev && (ev = eval(ev)),
                        !!ev && dhx_catch.push(ev) - 1
                    }
                    ,
                    z.removeEvent = function(e) {
                        dhx_catch[e] = null
                    }
                    ,
                    z
                }
                ,
                obj.detachEvent = function(e) {
                    if (e) {
                        var t = e.split(":");
                        this[t[0]].removeEvent(t[1])
                    }
                }
                ,
                obj.detachAllEvents = function() {
                    for (var e in this)
                        0 === e.indexOf("ev_") && (this.detachEvent(e),
                        this[e] = null)
                }
                ,
                obj = null
            }
            ,
            window.dhtmlx || (window.dhtmlx = {}),
            function() {
                function e(e, t) {
                    setTimeout((function() {
                        if (e.box) {
                            var i = e.callback;
                            n(!1),
                            e.box.parentNode.removeChild(e.box),
                            dhtmlx.callEvent("onAfterMessagePopup", [e.box]),
                            h = e.box = null,
                            i && i(t)
                        }
                    }
                    ), 1)
                }
                function t(t) {
                    if (h) {
                        var n = (t = t || event).which || event.keyCode
                          , i = !1;
                        if (dhtmlx.message.keyboard) {
                            if (13 == n || 32 == n) {
                                var a = t.target || t.srcElement;
                                scheduler._getClassName(a).indexOf("dhtmlx_popup_button") > -1 && a.click ? a.click() : (e(h, !0),
                                i = !0)
                            }
                            27 == n && (e(h, !1),
                            i = !0)
                        }
                        if (i)
                            return t.preventDefault && t.preventDefault(),
                            !(t.cancelBubble = !0)
                    }
                }
                function n(e) {
                    n.cover || (n.cover = document.createElement("div"),
                    n.cover.onkeydown = t,
                    n.cover.className = "dhx_modal_cover",
                    document.body.appendChild(n.cover)),
                    document.body.scrollHeight,
                    n.cover.style.display = e ? "inline-block" : "none"
                }
                function i(e, t, n) {
                    return "<div " + scheduler._waiAria.messageButtonAttrString(e) + "class='dhtmlx_popup_button dhtmlx_" + (n || e || "").toLowerCase().replace(/ /g, "_") + "_button' result='" + t + "' ><div>" + e + "</div></div>"
                }
                function a(e) {
                    u.area || (u.area = document.createElement("div"),
                    u.area.className = "dhtmlx_message_area",
                    u.area.style[u.position] = "5px",
                    document.body.appendChild(u.area)),
                    u.hide(e.id);
                    var t = document.createElement("div");
                    return t.innerHTML = "<div>" + e.text + "</div>",
                    t.className = "dhtmlx-info dhtmlx-" + e.type,
                    t.onclick = function() {
                        u.hide(e.id),
                        e = null
                    }
                    ,
                    scheduler._waiAria.messageInfoAttr(t),
                    "bottom" == u.position && u.area.firstChild ? u.area.insertBefore(t, u.area.firstChild) : u.area.appendChild(t),
                    e.expire > 0 && (u.timers[e.id] = window.setTimeout((function() {
                        u.hide(e.id)
                    }
                    ), e.expire)),
                    u.pull[e.id] = t,
                    t = null,
                    e.id
                }
                function r(t, n, a) {
                    var r = document.createElement("div");
                    r.className = " dhtmlx_modal_box dhtmlx-" + t.type,
                    r.setAttribute("dhxbox", 1);
                    var o = scheduler.uid();
                    scheduler._waiAria.messageModalAttr(r, o);
                    var s = ""
                      , l = !1;
                    if (t.width && (r.style.width = t.width),
                    t.height && (r.style.height = t.height),
                    t.title && (s += '<div class="dhtmlx_popup_title" id="' + o + '">' + t.title + "</div>",
                    l = !0),
                    s += '<div class="dhtmlx_popup_text" ' + (l ? "" : ' id="' + o + '" ') + "><span>" + (t.content ? "" : t.text) + '</span></div><div  class="dhtmlx_popup_controls">',
                    n) {
                        var _ = t.ok || scheduler.locale.labels.message_ok;
                        void 0 === _ && (_ = "OK"),
                        s += i(_, !0, "ok")
                    }
                    if (a) {
                        var d = t.cancel || scheduler.locale.labels.message_cancel;
                        void 0 === d && (d = "Cancel"),
                        s += i(d, !1, "cancel")
                    }
                    if (t.buttons)
                        for (var c = 0; c < t.buttons.length; c++)
                            s += i(t.buttons[c], c);
                    if (s += "</div>",
                    r.innerHTML = s,
                    t.content) {
                        var u = t.content;
                        "string" == typeof u && (u = document.getElementById(u)),
                        "none" == u.style.display && (u.style.display = ""),
                        r.childNodes[t.title ? 1 : 0].appendChild(u)
                    }
                    return r.onclick = function(n) {
                        var i = (n = n || event).target || n.srcElement
                          , a = scheduler._getClassName(i);
                        if (a || (i = i.parentNode),
                        "dhtmlx_popup_button" == (a = scheduler._getClassName(i)).split(" ")[0]) {
                            var r = i.getAttribute("result");
                            e(t, r = "true" == r || "false" != r && r)
                        }
                    }
                    ,
                    t.box = r,
                    h = t,
                    r
                }
                function o(e, i, a) {
                    var o = e.tagName ? e : r(e, i, a);
                    e.hidden || n(!0),
                    document.body.appendChild(o);
                    var s = Math.abs(Math.floor(((window.innerWidth || document.documentElement.offsetWidth) - o.offsetWidth) / 2))
                      , l = Math.abs(Math.floor(((window.innerHeight || document.documentElement.offsetHeight) - o.offsetHeight) / 2));
                    return "top" == e.position ? o.style.top = "-3px" : o.style.top = l + "px",
                    o.style.left = s + "px",
                    o.onkeydown = t,
                    dhtmlx.modalbox.focus(o),
                    e.hidden && dhtmlx.modalbox.hide(o),
                    dhtmlx.callEvent("onMessagePopup", [o]),
                    o
                }
                function s(e) {
                    return o(e, !0, !1)
                }
                function l(e) {
                    return o(e, !0, !0)
                }
                function _(e) {
                    return o(e)
                }
                function d(e, t, n) {
                    return "object" != typeof e && ("function" == typeof t && (n = t,
                    t = ""),
                    e = {
                        text: e,
                        type: t,
                        callback: n
                    }),
                    e
                }
                function c(e, t, n, i) {
                    return "object" != typeof e && (e = {
                        text: e,
                        type: t,
                        expire: n,
                        id: i
                    }),
                    e.id = e.id || u.uid(),
                    e.expire = e.expire || u.expire,
                    e
                }
                var h = null;
                document.attachEvent ? document.attachEvent("onkeydown", t) : document.addEventListener("keydown", t, !0),
                dhtmlx.alert = function() {
                    var e = d.apply(this, arguments);
                    return e.type = e.type || "confirm",
                    s(e)
                }
                ,
                dhtmlx.confirm = function() {
                    var e = d.apply(this, arguments);
                    return e.type = e.type || "alert",
                    l(e)
                }
                ,
                dhtmlx.modalbox = function() {
                    var e = d.apply(this, arguments);
                    return e.type = e.type || "alert",
                    _(e)
                }
                ,
                dhtmlx.modalbox.hide = function(e) {
                    for (; e && e.getAttribute && !e.getAttribute("dhxbox"); )
                        e = e.parentNode;
                    e && (e.parentNode.removeChild(e),
                    n(!1))
                }
                ,
                dhtmlx.modalbox.focus = function(e) {
                    setTimeout((function() {
                        var t = scheduler._getFocusableNodes(e);
                        t.length && t[0].focus && t[0].focus()
                    }
                    ), 1)
                }
                ;
                var u = dhtmlx.message = function(e, t, n, i) {
                    switch ((e = c.apply(this, arguments)).type = e.type || "info",
                    e.type.split("-")[0]) {
                    case "alert":
                        return s(e);
                    case "confirm":
                        return l(e);
                    case "modalbox":
                        return _(e);
                    default:
                        return a(e)
                    }
                }
                ;
                u.seed = (new Date).valueOf(),
                u.uid = function() {
                    return u.seed++
                }
                ,
                u.expire = 4e3,
                u.keyboard = !0,
                u.position = "top",
                u.pull = {},
                u.timers = {},
                u.hideAll = function() {
                    for (var e in u.pull)
                        u.hide(e)
                }
                ,
                u.hide = function(e) {
                    var t = u.pull[e];
                    t && t.parentNode && (window.setTimeout((function() {
                        t.parentNode.removeChild(t),
                        t = null
                    }
                    ), 2e3),
                    t.className += " hidden",
                    u.timers[e] && window.clearTimeout(u.timers[e]),
                    delete u.pull[e])
                }
            }(),
            dhtmlx.attachEvent || dhtmlxEventable(dhtmlx);
            var dataProcessor = window.dataProcessor = function(e) {
                return this.serverProcessor = e,
                this.action_param = "!nativeeditor_status",
                this.object = null,
                this.updatedRows = [],
                this.autoUpdate = !0,
                this.updateMode = "cell",
                this._tMode = "GET",
                this._headers = null,
                this._payload = null,
                this.post_delim = "_",
                this._waitMode = 0,
                this._in_progress = {},
                this._invalid = {},
                this.mandatoryFields = [],
                this.messages = [],
                this.styles = {
                    updated: "font-weight:bold;",
                    inserted: "font-weight:bold;",
                    deleted: "text-decoration : line-through;",
                    invalid: "background-color:FFE0E0;",
                    invalid_cell: "border-bottom:2px solid red;",
                    error: "color:red;",
                    clear: "font-weight:normal;text-decoration:none;"
                },
                this.enableUTFencoding(!0),
                dhtmlxEventable(this),
                this
            }
            ;
            dataProcessor.prototype = {
                setTransactionMode: function(e, t) {
                    "object" == typeof e ? (this._tMode = e.mode || this._tMode,
                    void 0 !== e.headers && (this._headers = e.headers),
                    void 0 !== e.payload && (this._payload = e.payload)) : (this._tMode = e,
                    this._tSend = t),
                    "REST" == this._tMode && (this._tSend = !1,
                    this._endnm = !0),
                    "JSON" == this._tMode && (this._tSend = !1,
                    this._endnm = !0,
                    this._headers = this._headers || {},
                    this._headers["Content-type"] = "application/json")
                },
                escape: function(e) {
                    return this._utf ? encodeURIComponent(e) : escape(e)
                },
                enableUTFencoding: function(e) {
                    this._utf = !!e
                },
                setDataColumns: function(e) {
                    this._columns = "string" == typeof e ? e.split(",") : e
                },
                getSyncState: function() {
                    return !this.updatedRows.length
                },
                enableDataNames: function(e) {
                    this._endnm = !!e
                },
                enablePartialDataSend: function(e) {
                    this._changed = !!e
                },
                setUpdateMode: function(e, t) {
                    this.autoUpdate = "cell" == e,
                    this.updateMode = e,
                    this.dnd = t
                },
                ignore: function(e, t) {
                    this._silent_mode = !0,
                    e.call(t || window),
                    this._silent_mode = !1
                },
                setUpdated: function(e, t, n) {
                    if (!this._silent_mode) {
                        var i = this.findRow(e);
                        n = n || "updated";
                        var a = this.obj.getUserData(e, this.action_param);
                        a && "updated" == n && (n = a),
                        t ? (this.set_invalid(e, !1),
                        this.updatedRows[i] = e,
                        this.obj.setUserData(e, this.action_param, n),
                        this._in_progress[e] && (this._in_progress[e] = "wait")) : this.is_invalid(e) || (this.updatedRows.splice(i, 1),
                        this.obj.setUserData(e, this.action_param, "")),
                        t || this._clearUpdateFlag(e),
                        this.markRow(e, t, n),
                        t && this.autoUpdate && this.sendData(e)
                    }
                },
                _clearUpdateFlag: function(e) {},
                markRow: function(e, t, n) {
                    var i = ""
                      , a = this.is_invalid(e);
                    if (a && (i = this.styles[a],
                    t = !0),
                    this.callEvent("onRowMark", [e, t, n, a]) && (i = this.styles[t ? n : "clear"] + i,
                    this.obj[this._methods[0]](e, i),
                    a && a.details)) {
                        i += this.styles[a + "_cell"];
                        for (var r = 0; r < a.details.length; r++)
                            a.details[r] && this.obj[this._methods[1]](e, r, i)
                    }
                },
                getState: function(e) {
                    return this.obj.getUserData(e, this.action_param)
                },
                is_invalid: function(e) {
                    return this._invalid[e]
                },
                set_invalid: function(e, t, n) {
                    n && (t = {
                        value: t,
                        details: n,
                        toString: function() {
                            return this.value.toString()
                        }
                    }),
                    this._invalid[e] = t
                },
                checkBeforeUpdate: function(e) {
                    return !0
                },
                sendData: function(e) {
                    if (!this._waitMode || "tree" != this.obj.mytype && !this.obj._h2) {
                        if (this.obj.editStop && this.obj.editStop(),
                        void 0 === e || this._tSend)
                            return this.sendAllData();
                        if (this._in_progress[e])
                            return !1;
                        if (this.messages = [],
                        !this.checkBeforeUpdate(e) && this.callEvent("onValidationError", [e, this.messages]))
                            return !1;
                        this._beforeSendData(this._getRowData(e), e)
                    }
                },
                _beforeSendData: function(e, t) {
                    if (!this.callEvent("onBeforeUpdate", [t, this.getState(t), e]))
                        return !1;
                    this._sendData(e, t)
                },
                serialize: function(e, t) {
                    if ("string" == typeof e)
                        return e;
                    if (void 0 !== t)
                        return this.serialize_one(e, "");
                    var n = []
                      , i = [];
                    for (var a in e)
                        e.hasOwnProperty(a) && (n.push(this.serialize_one(e[a], a + this.post_delim)),
                        i.push(a));
                    return n.push("ids=" + this.escape(i.join(","))),
                    (scheduler.security_key || dhtmlx.security_key) && n.push("dhx_security=" + (scheduler.security_key || dhtmlx.security_key)),
                    n.join("&")
                },
                serialize_one: function(e, t) {
                    if ("string" == typeof e)
                        return e;
                    var n = [];
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            if (("id" == i || i == this.action_param) && "REST" == this._tMode)
                                continue;
                            n.push(this.escape((t || "") + i) + "=" + this.escape(e[i]))
                        }
                    return n.join("&")
                },
                _applyPayload: function(e) {
                    var t = this.obj.$ajax;
                    if (this._payload)
                        for (var n in this._payload)
                            e = e + t.urlSeparator(e) + this.escape(n) + "=" + this.escape(this._payload[n]);
                    return e
                },
                _sendData: function(e, t) {
                    if (e) {
                        if (!this.callEvent("onBeforeDataSending", t ? [t, this.getState(t), e] : [null, null, e]))
                            return !1;
                        t && (this._in_progress[t] = (new Date).valueOf());
                        var n = this
                          , i = function(i) {
                            var a = [];
                            if (t)
                                a.push(t);
                            else if (e)
                                for (var r in e)
                                    a.push(r);
                            return n.afterUpdate(n, i, a)
                        }
                          , a = this.obj.$ajax
                          , r = this.serverProcessor + (this._user ? a.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + this.obj.getUserData(0, "version")].join("&") : "")
                          , o = this._applyPayload(r);
                        if ("GET" == this._tMode)
                            a.query({
                                url: o + a.urlSeparator(o) + this.serialize(e, t),
                                method: "GET",
                                callback: i,
                                headers: this._headers
                            });
                        else if ("POST" == this._tMode)
                            a.query({
                                url: o,
                                method: "POST",
                                headers: this._headers,
                                data: this.serialize(e, t),
                                callback: i
                            });
                        else if ("JSON" == this._tMode) {
                            var s = e[this.action_param]
                              , l = {};
                            for (var _ in e)
                                l[_] = e[_];
                            delete l[this.action_param],
                            delete l.id,
                            delete l.gr_id,
                            a.query({
                                url: o,
                                method: "POST",
                                headers: this._headers,
                                callback: i,
                                data: JSON.stringify({
                                    id: t,
                                    action: s,
                                    data: l
                                })
                            })
                        } else if ("REST" == this._tMode) {
                            var d = this.getState(t)
                              , c = r.replace(/(\&|\?)editing\=true/, "")
                              , h = (l = "",
                            "post");
                            "inserted" == d ? l = this.serialize(e, t) : "deleted" == d ? (h = "DELETE",
                            c = c + ("/" == c.slice(-1) ? "" : "/") + t) : (h = "PUT",
                            l = this.serialize(e, t),
                            c = c + ("/" == c.slice(-1) ? "" : "/") + t),
                            c = this._applyPayload(c),
                            a.query({
                                url: c,
                                method: h,
                                headers: this._headers,
                                data: l,
                                callback: i
                            })
                        }
                        this._waitMode++
                    }
                },
                sendAllData: function() {
                    if (this.updatedRows.length) {
                        this.messages = [];
                        for (var e = !0, t = 0; t < this.updatedRows.length; t++)
                            e &= this.checkBeforeUpdate(this.updatedRows[t]);
                        if (!e && !this.callEvent("onValidationError", ["", this.messages]))
                            return !1;
                        if (this._tSend)
                            this._sendData(this._getAllData());
                        else
                            for (t = 0; t < this.updatedRows.length; t++)
                                if (!this._in_progress[this.updatedRows[t]]) {
                                    if (this.is_invalid(this.updatedRows[t]))
                                        continue;
                                    if (this._beforeSendData(this._getRowData(this.updatedRows[t]), this.updatedRows[t]),
                                    this._waitMode && ("tree" == this.obj.mytype || this.obj._h2))
                                        return
                                }
                    }
                },
                _getAllData: function(e) {
                    for (var t = {}, n = !1, i = 0; i < this.updatedRows.length; i++) {
                        var a = this.updatedRows[i];
                        if (!this._in_progress[a] && !this.is_invalid(a)) {
                            var r = this._getRowData(a);
                            this.callEvent("onBeforeUpdate", [a, this.getState(a), r]) && (t[a] = r,
                            n = !0,
                            this._in_progress[a] = (new Date).valueOf())
                        }
                    }
                    return n ? t : null
                },
                setVerificator: function(e, t) {
                    this.mandatoryFields[e] = t || function(e) {
                        return "" !== e
                    }
                },
                clearVerificator: function(e) {
                    this.mandatoryFields[e] = !1
                },
                findRow: function(e) {
                    var t = 0;
                    for (t = 0; t < this.updatedRows.length && e != this.updatedRows[t]; t++)
                        ;
                    return t
                },
                defineAction: function(e, t) {
                    this._uActions || (this._uActions = []),
                    this._uActions[e] = t
                },
                afterUpdateCallback: function(e, t, n, i) {
                    var a = e
                      , r = "error" != n && "invalid" != n;
                    if (r || this.set_invalid(e, n),
                    this._uActions && this._uActions[n] && !this._uActions[n](i))
                        return delete this._in_progress[a];
                    "wait" != this._in_progress[a] && this.setUpdated(e, !1);
                    var o = e;
                    switch (n) {
                    case "inserted":
                    case "insert":
                        t != e && (this.setUpdated(e, !1),
                        this.obj[this._methods[2]](e, t),
                        e = t);
                        break;
                    case "delete":
                    case "deleted":
                        return this.obj.setUserData(e, this.action_param, "true_deleted"),
                        this.obj[this._methods[3]](e, t),
                        delete this._in_progress[a],
                        this.callEvent("onAfterUpdate", [e, n, t, i])
                    }
                    "wait" != this._in_progress[a] ? (r && this.obj.setUserData(e, this.action_param, ""),
                    delete this._in_progress[a]) : (delete this._in_progress[a],
                    this.setUpdated(t, !0, this.obj.getUserData(e, this.action_param))),
                    this.callEvent("onAfterUpdate", [o, n, t, i])
                },
                _errorResponse: function(e, t) {
                    return this.obj && this.obj.callEvent && this.obj.callEvent("onSaveError", [t, e.xmlDoc]),
                    this.cleanUpdate(t)
                },
                afterUpdate: function(e, t, n) {
                    var i = this.obj.$ajax;
                    if (200 === t.xmlDoc.status) {
                        if (window.JSON) {
                            var a;
                            try {
                                a = JSON.parse(t.xmlDoc.responseText)
                            } catch (e) {
                                t.xmlDoc.responseText.length || (a = {})
                            }
                            if (a) {
                                var r = a.action || this.getState(n) || "updated"
                                  , o = a.sid || n[0]
                                  , s = a.tid || n[0];
                                return e.afterUpdateCallback(o, s, r, a),
                                void e.finalizeUpdate()
                            }
                        }
                        var l = i.xmltop("data", t.xmlDoc);
                        if (!l)
                            return this._errorResponse(t, n);
                        var _ = i.xpath("//data/action", l);
                        _.length || this._errorResponse(t, n);
                        for (var d = 0; d < _.length; d++) {
                            var c = _[d];
                            r = c.getAttribute("type"),
                            o = c.getAttribute("sid"),
                            s = c.getAttribute("tid");
                            e.afterUpdateCallback(o, s, r, c)
                        }
                        e.finalizeUpdate()
                    } else
                        this._errorResponse(t, n)
                },
                cleanUpdate: function(e) {
                    if (e)
                        for (var t = 0; t < e.length; t++)
                            delete this._in_progress[e[t]]
                },
                finalizeUpdate: function() {
                    this._waitMode && this._waitMode--,
                    ("tree" == this.obj.mytype || this.obj._h2) && this.updatedRows.length && this.sendData(),
                    this.callEvent("onAfterUpdateFinish", []),
                    this.updatedRows.length || this.callEvent("onFullSync", [])
                },
                init: function(e) {
                    this.obj = e,
                    this.obj._dp_init && this.obj._dp_init(this)
                },
                setOnAfterUpdate: function(e) {
                    this.attachEvent("onAfterUpdate", e)
                },
                enableDebug: function(e) {},
                setOnBeforeUpdateHandler: function(e) {
                    this.attachEvent("onBeforeDataSending", e)
                },
                setAutoUpdate: function(e, t) {
                    e = e || 2e3,
                    this._user = t || (new Date).valueOf(),
                    this._need_update = !1,
                    this._update_busy = !1,
                    this.attachEvent("onAfterUpdate", (function(e, t, n, i) {
                        this.afterAutoUpdate(e, t, n, i)
                    }
                    )),
                    this.attachEvent("onFullSync", (function() {
                        this.fullSync()
                    }
                    ));
                    var n = this;
                    window.setInterval((function() {
                        n.loadUpdate()
                    }
                    ), e)
                },
                afterAutoUpdate: function(e, t, n, i) {
                    return "collision" != t || (this._need_update = !0,
                    !1)
                },
                fullSync: function() {
                    return this._need_update && (this._need_update = !1,
                    this.loadUpdate()),
                    !0
                },
                getUpdates: function(e, t) {
                    var n = this.obj.$ajax;
                    if (this._update_busy)
                        return !1;
                    this._update_busy = !0,
                    n.get(e, t)
                },
                _v: function(e) {
                    return e.firstChild ? e.firstChild.nodeValue : ""
                },
                _a: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t[n] = this._v(e[n]);
                    return t
                },
                loadUpdate: function() {
                    var e = this.obj.$ajax
                      , t = this
                      , n = this.obj.getUserData(0, "version")
                      , i = this.serverProcessor + e.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + n].join("&");
                    i = i.replace("editing=true&", ""),
                    this.getUpdates(i, (function(n) {
                        var i = e.xpath("//userdata", n);
                        t.obj.setUserData(0, "version", t._v(i[0]));
                        var a = e.xpath("//update", n);
                        if (a.length) {
                            t._silent_mode = !0;
                            for (var r = 0; r < a.length; r++) {
                                var o = a[r].getAttribute("status")
                                  , s = a[r].getAttribute("id")
                                  , l = a[r].getAttribute("parent");
                                switch (o) {
                                case "inserted":
                                    t.callEvent("insertCallback", [a[r], s, l]);
                                    break;
                                case "updated":
                                    t.callEvent("updateCallback", [a[r], s, l]);
                                    break;
                                case "deleted":
                                    t.callEvent("deleteCallback", [a[r], s, l])
                                }
                            }
                            t._silent_mode = !1
                        }
                        t._update_busy = !1,
                        t = null
                    }
                    ))
                }
            },
            window.dataProcessor && !dataProcessor.prototype.init_original && (dataProcessor.prototype.init_original = dataProcessor.prototype.init,
            dataProcessor.prototype.init = function(e) {
                this.init_original(e),
                e._dataprocessor = this,
                this.setTransactionMode("POST", !0),
                this.serverProcessor += (-1 != this.serverProcessor.indexOf("?") ? "&" : "?") + "editing=true"
            }
            ),
            dhtmlxError.catchError("LoadXML", (function(e, t, n) {
                var i = n[0].responseText;
                switch (scheduler.config.ajax_error) {
                case "alert":
                    window.alert(i);
                    break;
                case "console":
                    window.console.log(i)
                }
            }
            ));
            var Scheduler = {
                _seed: 0,
                plugin: function(e) {
                    this._schedulerPlugins.push(e),
                    e(window.scheduler)
                },
                _schedulerPlugins: []
            };
            Scheduler.getSchedulerInstance = function() {
                function e(e) {
                    var t = document.createElement("div");
                    return (e || "").split(" ").forEach((function(e) {
                        t.classList.add(e)
                    }
                    )),
                    t
                }
                function t(e) {
                    var t = function(e) {
                        var t;
                        if (e.view)
                            switch (e.view) {
                            case "today":
                            case "next":
                            case "prev":
                                t = d.builtInButton;
                                break;
                            case "date":
                                t = d.date;
                                break;
                            case "spacer":
                                t = d.spacer;
                                break;
                            case "button":
                                t = d.button;
                                break;
                            case "minicalendar":
                                t = d.minicalendarButton;
                                break;
                            default:
                                t = d.view
                            }
                        else
                            e.rows ? t = d.rows_container : e.cols && (t = d.row);
                        return t
                    }(e);
                    if (t) {
                        var n = t(e);
                        if (e.css && n.classList.add(e.css),
                        e.width)
                            (i = e.width) === 1 * i && (i += "px"),
                            n.style.width = i;
                        if (e.height)
                            (i = e.height) === 1 * i && (i += "px"),
                            n.style.height = i;
                        if (e.click && n.addEventListener("click", e.click),
                        e.html && (n.innerHTML = e.html),
                        e.align) {
                            var i = "";
                            "right" == e.align ? i = "flex-end" : "left" == e.align && (i = "flex-start"),
                            n.style.justifyContent = i
                        }
                        return n
                    }
                }
                function n(e) {
                    return "string" == typeof e && (e = {
                        view: e
                    }),
                    e.view || e.rows || e.cols || (e.view = "button"),
                    e
                }
                function i(e) {
                    var a, r = document.createDocumentFragment();
                    a = Array.isArray(e) ? e : [e];
                    for (var o = 0; o < a.length; o++) {
                        var s, l = n(a[o]);
                        if ("day" === l.view && a[o + 1])
                            "week" !== (s = n(a[o + 1])).view && "month" !== s.view || (l.$firstTab = !0);
                        if ("month" === l.view && a[o - 1])
                            "week" !== (s = n(a[o - 1])).view && "day" !== s.view || (l.$lastTab = !0);
                        var _ = t(l);
                        r.appendChild(_),
                        (l.cols || l.rows) && _.appendChild(i(l.cols || l.rows))
                    }
                    return r
                }
                function a(e) {
                    return !!(e.querySelector(".dhx_cal_header") && e.querySelector(".dhx_cal_data") && e.querySelector(".dhx_cal_navline"))
                }
                function r() {
                    if (s._is_material_skin())
                        return !0;
                    if (void 0 !== g)
                        return g;
                    var e = document.createElement("div");
                    e.style.position = "absolute",
                    e.style.left = "-9999px",
                    e.style.top = "-9999px",
                    e.innerHTML = "<div class='dhx_cal_container'><div class='dhx_cal_data'><div class='dhx_cal_event'><div class='dhx_body'></div></div><div>",
                    document.body.appendChild(e);
                    var t = window.getComputedStyle(e.querySelector(".dhx_body")).getPropertyValue("box-sizing");
                    document.body.removeChild(e),
                    (g = !("border-box" !== t)) || setTimeout((function() {
                        g = void 0
                    }
                    ), 1e3)
                }
                function o() {
                    if (!s._is_material_skin() && !s._border_box_events()) {
                        var e = g;
                        g = void 0,
                        m = void 0,
                        e !== r() && s.$container && s.setCurrentView()
                    }
                }
                var s = {
                    version: "5.3.8"
                }
                  , l = {
                    agenda: "https://docs.dhtmlx.com/scheduler/agenda_view.html",
                    grid: "https://docs.dhtmlx.com/scheduler/grid_view.html",
                    map: "https://docs.dhtmlx.com/scheduler/map_view.html",
                    unit: "https://docs.dhtmlx.com/scheduler/units_view.html",
                    timeline: "https://docs.dhtmlx.com/scheduler/timeline_view.html",
                    week_agenda: "https://docs.dhtmlx.com/scheduler/weekagenda_view.html",
                    year: "https://docs.dhtmlx.com/scheduler/year_view.html",
                    anythingElse: "https://docs.dhtmlx.com/scheduler/views.html"
                }
                  , _ = {
                    agenda: "ext/dhtmlxscheduler_agenda_view.js",
                    grid: "ext/dhtmlxscheduler_grid_view.js",
                    map: "ext/dhtmlxscheduler_map_view.js",
                    unit: "ext/dhtmlxscheduler_units.js",
                    timeline: "ext/dhtmlxscheduler_timeline.js, ext/dhtmlxscheduler_treetimeline.js, ext/dhtmlxscheduler_daytimeline.js",
                    week_agenda: "ext/dhtmlxscheduler_week_agenda.js",
                    year: "ext/dhtmlxscheduler_year_view.js",
                    limit: "ext/dhtmlxscheduler_limit.js"
                };
                s._commonErrorMessages = {
                    unknownView: function(e) {
                        var t = _[e] ? "You're probably missing " + _[e] + "." : "";
                        return "`" + e + "` view is not defined. \nPlease check parameters you pass to `scheduler.init` or `scheduler.setCurrentView` in your code and ensure you've imported appropriate extensions. \n" + ("Related docs: " + (l[e] || l.anythingElse)) + "\n" + (t ? t + "\n" : "")
                    },
                    collapsedContainer: function(e) {
                        return "Scheduler container height is set to *100%* but the rendered height is zero and the scheduler is not visible. \nMake sure that the container has some initial height or use different units. For example:\n<div id='scheduler_here' class='dhx_cal_container' style='width:100%; height:600px;'> \n"
                    }
                },
                s.createTimelineView = function() {
                    throw new Error("scheduler.createTimelineView is not implemented. Be sure to add the required extension: " + _.timeline + "\nRelated docs: " + l.timeline)
                }
                ,
                s.createUnitsView = function() {
                    throw new Error("scheduler.createUnitsView is not implemented. Be sure to add the required extension: " + _.unit + "\nRelated docs: " + l.unit)
                }
                ,
                s.createGridView = function() {
                    throw new Error("scheduler.createGridView is not implemented. Be sure to add the required extension: " + _.grid + "\nRelated docs: " + l.grid)
                }
                ,
                s.addMarkedTimespan = function() {
                    throw new Error("scheduler.addMarkedTimespan is not implemented. Be sure to add the required extension: ext/dhtmlxscheduler_limit.js\nRelated docs: https://docs.dhtmlx.com/scheduler/limits.html")
                }
                ,
                s.renderCalendar = function() {
                    throw new Error("scheduler.renderCalendar is not implemented. Be sure to add the required extension: ext/dhtmlxscheduler_minical.js\nhttps://docs.dhtmlx.com/scheduler/minicalendar.html")
                }
                ,
                s.exportToPNG = function() {
                    throw new Error(["scheduler.exportToPNG is not implemented.", "This feature requires an additional module, be sure to check the related doc here https://docs.dhtmlx.com/scheduler/png.html", "Licensing info: https://dhtmlx.com/docs/products/dhtmlxScheduler/export.shtml"].join("\n"))
                }
                ,
                s.exportToPDF = function() {
                    throw new Error(["scheduler.exportToPDF is not implemented.", "This feature requires an additional module, be sure to check the related doc here https://docs.dhtmlx.com/scheduler/pdf.html", "Licensing info: https://dhtmlx.com/docs/products/dhtmlxScheduler/export.shtml"].join("\n"))
                }
                ,
                dhtmlxEventable(s);
                var d = {
                    rows_container: function() {
                        return e("dhx_cal_navbar_rows_container")
                    },
                    row: function() {
                        return e("dhx_cal_navbar_row")
                    },
                    view: function(t) {
                        var n = e("dhx_cal_tab");
                        return n.setAttribute("name", t.view + "_tab"),
                        n.setAttribute("data-viewname", t.view),
                        s.config.fix_tab_position && (t.$firstTab ? n.classList.add("dhx_cal_tab_first") : t.$lastTab ? n.classList.add("dhx_cal_tab_last") : "week" !== t.view && n.classList.add("dhx_cal_tab_standalone")),
                        n
                    },
                    date: function() {
                        return e("dhx_cal_date")
                    },
                    button: function(t) {
                        return e("dhx_cal_nav_button dhx_cal_nav_button_custom dhx_cal_tab")
                    },
                    builtInButton: function(t) {
                        return e("dhx_cal_" + t.view + "_button dhx_cal_nav_button")
                    },
                    spacer: function() {
                        return e("dhx_cal_line_spacer")
                    },
                    minicalendarButton: function(t) {
                        var n = e("dhx_minical_icon");
                        return t.click || (n.onclick = function() {
                            s.isCalendarVisible() ? s.destroyCalendar() : s.renderCalendar({
                                position: this,
                                date: s.getState().date,
                                navigation: !0,
                                handler: function(e, t) {
                                    s.setCurrentView(e),
                                    s.destroyCalendar()
                                }
                            })
                        }
                        ),
                        n
                    },
                    html_element: function(t) {
                        return e("dhx_cal_nav_content")
                    }
                };
                s._init_nav_bar = function(e) {
                    var t = this.$container.querySelector(".dhx_cal_navline");
                    return t || ((t = document.createElement("div")).className = "dhx_cal_navline dhx_cal_navline_flex",
                    s._update_nav_bar(e, t),
                    t)
                }
                ;
                var c = null;
                s._update_nav_bar = function(e, t) {
                    if (e) {
                        var n = !1
                          , a = !1
                          , r = e.height || s.xy.nav_height;
                        null !== c && c === r || (n = !0),
                        a = !0,
                        n && (s.xy.nav_height = r),
                        a && (t.innerHTML = "",
                        t.appendChild(i(e))),
                        (n || a) && (s._els = [],
                        s.get_elements(),
                        s.set_actions()),
                        t.style.display = 0 === r ? "none" : "",
                        c = r
                    }
                }
                ,
                s._detachDomEvent = function(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                }
                ,
                s._init_once = function() {
                    function e(e) {
                        return {
                            w: e.innerWidth || document.documentElement.clientWidth,
                            h: e.innerHeight || document.documentElement.clientHeight
                        }
                    }
                    function t(t, n) {
                        var i, a = e(n);
                        n.addEventListener("resize", (function() {
                            clearTimeout(i),
                            i = setTimeout((function() {
                                if (function(e) {
                                    for (var t = document.body; e && e != t; )
                                        e = e.parentNode;
                                    return !(t != e)
                                }(t.$container)) {
                                    var i = e(n);
                                    (function(e, t) {
                                        return e.w == t.w && e.h == t.h
                                    }
                                    )(a, i) || (a = i,
                                    t.callEvent("onSchedulerResize", []) && (t.updateView(),
                                    t.callEvent("onAfterSchedulerResize", [])))
                                }
                            }
                            ), 150)
                        }
                        ))
                    }
                    (function(e) {
                        var n = e.$container;
                        "static" == window.getComputedStyle(n).getPropertyValue("position") && (n.style.position = "relative");
                        var i = document.createElement("iframe");
                        i.className = "scheduler_container_resize_watcher",
                        i.tabIndex = -1,
                        e.config.wai_aria_attributes && (i.setAttribute("role", "none"),
                        i.setAttribute("aria-hidden", !0)),
                        n.appendChild(i),
                        i.contentWindow ? t(e, i.contentWindow) : (n.removeChild(i),
                        t(e, window))
                    }
                    )(s),
                    s._init_once = function() {}
                }
                ;
                var h, u = {
                    render: function(e) {
                        return s._init_nav_bar(e)
                    }
                }, f = {
                    render: function(e) {
                        var t = document.createElement("div");
                        return t.className = "dhx_cal_header",
                        t
                    }
                }, p = {
                    render: function(e) {
                        var t = document.createElement("div");
                        return t.className = "dhx_cal_data",
                        t
                    }
                };
                if (s.init = function(e, t, n) {
                    if (t = t || s._currentDate(),
                    n = n || "week",
                    this._obj && this.unset_actions(),
                    this._obj = "string" == typeof e ? document.getElementById(e) : e,
                    this.$container = this._obj,
                    !this.$container.offsetHeight && this.$container.offsetWidth && "100%" === this.$container.style.height && window.console.error(s._commonErrorMessages.collapsedContainer(), this.$container),
                    this.config.wai_aria_attributes && this.config.wai_aria_application_role && this.$container.setAttribute("role", "application"),
                    this.config.header || a(this.$container) || (this.config.header = function(e) {
                        var t = ["day", "week", "month"];
                        if (e.matrix)
                            for (var n in e.matrix)
                                t.push(n);
                        if (e._props)
                            for (var n in e._props)
                                t.push(n);
                        if (e._grid && e._grid.names)
                            for (var n in e._grid.names)
                                t.push(n);
                        return ["map", "agenda", "week_agenda", "year"].forEach((function(n) {
                            e[n + "_view"] && t.push(n)
                        }
                        )),
                        t.concat(["date"]).concat(["prev", "today", "next"])
                    }(this),
                    console.log(["Required DOM elements are missing from the scheduler container and **scheduler.config.header** is not specified.", "Using a default header configuration: ", "scheduler.config.header = " + JSON.stringify(this.config.header, null, 2), "Check this article for the details: https://docs.dhtmlx.com/scheduler/initialization.html"].join("\n"))),
                    this.config.header)
                        this.$container.innerHTML = "",
                        this.$container.classList.add("dhx_cal_container"),
                        this.config.header.height && (this.xy.nav_height = this.config.header.height),
                        this.$container.appendChild(u.render(this.config.header)),
                        this.$container.appendChild(f.render()),
                        this.$container.appendChild(p.render());
                    else if (!a(this.$container))
                        throw new Error(["Required DOM elements are missing from the scheduler container.", "Be sure to either specify them manually in the markup: https://docs.dhtmlx.com/scheduler/initialization.html#initializingschedulerviamarkup", "Or to use **scheduler.config.header** setting so they could be created automatically: https://docs.dhtmlx.com/scheduler/initialization.html#initializingschedulerviaheaderconfig"].join("\n"));
                    this.config.rtl && (this.$container.className += " dhx_cal_container_rtl"),
                    this._skin_init && s._skin_init(),
                    s.date.init(),
                    this._scroll = !0,
                    this._quirks = this.$env.isIE && "BackCompat" == document.compatMode,
                    this._quirks7 = this.$env.isIE && -1 == navigator.appVersion.indexOf("MSIE 8"),
                    this._els = [],
                    this.get_elements(),
                    this.init_templates(),
                    this.set_actions(),
                    this._init_once(),
                    this._init_touch_events(),
                    this.set_sizes(),
                    s.callEvent("onSchedulerReady", []),
                    this.setCurrentView(t, n)
                }
                ,
                s.xy = {
                    min_event_height: 40,
                    scale_width: 50,
                    scroll_width: 18,
                    scale_height: 20,
                    month_scale_height: 20,
                    menu_width: 25,
                    margin_top: 0,
                    margin_left: 0,
                    editor_width: 140,
                    month_head_height: 22,
                    event_header_height: 14
                },
                s.keys = {
                    edit_save: 13,
                    edit_cancel: 27
                },
                s.bind = function(e, t) {
                    return e.bind ? e.bind(t) : function() {
                        return e.apply(t, arguments)
                    }
                }
                ,
                s.set_sizes = function() {
                    var e = this._x = this._obj.clientWidth - this.xy.margin_left
                      , t = this._y = this._obj.clientHeight - this.xy.margin_top
                      , n = this._table_view ? 0 : this.xy.scale_width + this.xy.scroll_width
                      , i = this._table_view ? -1 : this.xy.scale_width
                      , a = this.$container.querySelector(".dhx_cal_scale_placeholder");
                    s._is_material_skin() ? (a || ((a = document.createElement("div")).className = "dhx_cal_scale_placeholder",
                    this.$container.insertBefore(a, this._els.dhx_cal_header[0])),
                    a.style.display = "block",
                    this.set_xy(a, e, this.xy.scale_height + 1, 0, this.xy.nav_height + (this._quirks ? -1 : 1))) : a && a.parentNode.removeChild(a),
                    this._lightbox && (s.$container.offsetWidth < 1200 || this._setLbPosition(document.querySelector(".dhx_cal_light"))),
                    this.set_xy(this._els.dhx_cal_navline[0], e, this.xy.nav_height, 0, 0),
                    this.set_xy(this._els.dhx_cal_header[0], e - n, this.xy.scale_height, i, this.xy.nav_height + (this._quirks ? -1 : 1));
                    var r = this._els.dhx_cal_navline[0].offsetHeight;
                    r > 0 && (this.xy.nav_height = r);
                    var o = this.xy.scale_height + this.xy.nav_height + (this._quirks ? -2 : 0);
                    this.set_xy(this._els.dhx_cal_data[0], e, t - (o + 2), 0, o + 2)
                }
                ,
                s.set_xy = function(e, t, n, i, a) {
                    var r = "left";
                    e.style.width = Math.max(0, t) + "px",
                    e.style.height = Math.max(0, n) + "px",
                    arguments.length > 3 && (this.config.rtl && (r = "right"),
                    e.style[r] = i + "px",
                    e.style.top = a + "px")
                }
                ,
                s.get_elements = function() {
                    for (var e = this._obj.getElementsByTagName("DIV"), t = 0; t < e.length; t++) {
                        var n = s._getClassName(e[t])
                          , i = e[t].getAttribute("name") || "";
                        n && (n = n.split(" ")[0]),
                        this._els[n] || (this._els[n] = []),
                        this._els[n].push(e[t]);
                        var a = s.locale.labels[i || n];
                        "string" != typeof a && i && !e[t].innerHTML && (a = i.split("_")[0]),
                        a && (this._waiAria.labelAttr(e[t], a),
                        e[t].innerHTML = a)
                    }
                }
                ,
                s.unset_actions = function() {
                    for (var e in this._els)
                        if (this._click[e])
                            for (var t = 0; t < this._els[e].length; t++)
                                this._els[e][t].onclick = null;
                    this._obj.onselectstart = null,
                    this._obj.onmousemove = null,
                    this._obj.onmousedown = null,
                    this._obj.onmouseup = null,
                    this._obj.ondblclick = null,
                    this._obj.oncontextmenu = null
                }
                ,
                s.set_actions = function() {
                    for (var e in this._els)
                        if (this._click[e])
                            for (var t = 0; t < this._els[e].length; t++)
                                this._els[e][t].onclick = s._click[e];
                    this._obj.onselectstart = function(e) {
                        return !1
                    }
                    ,
                    this._obj.onmousemove = function(e) {
                        s._temp_touch_block || s._on_mouse_move(e || event)
                    }
                    ,
                    this._obj.onmousedown = function(e) {
                        s._ignore_next_click || s._on_mouse_down(e || event)
                    }
                    ,
                    this._obj.onmouseup = function(e) {
                        s._ignore_next_click || s._on_mouse_up(e || event)
                    }
                    ,
                    this._obj.ondblclick = function(e) {
                        s._on_dbl_click(e || event)
                    }
                    ,
                    this._obj.oncontextmenu = function(e) {
                        var t = e || event
                          , n = t.target || t.srcElement;
                        return s.callEvent("onContextMenu", [s._locate_event(n), t])
                    }
                }
                ,
                s.select = function(e) {
                    this._select_id != e && (s._close_not_saved(),
                    this.editStop(!1),
                    this.unselect(),
                    this._select_id = e,
                    this.updateEvent(e))
                }
                ,
                s.unselect = function(e) {
                    if (!e || e == this._select_id) {
                        var t = this._select_id;
                        this._select_id = null,
                        t && this.getEvent(t) && this.updateEvent(t)
                    }
                }
                ,
                s.getState = function() {
                    return {
                        mode: this._mode,
                        date: new Date(this._date),
                        min_date: new Date(this._min_date),
                        max_date: new Date(this._max_date),
                        editor_id: this._edit_id,
                        lightbox_id: this._lightbox_id,
                        new_event: this._new_event,
                        select_id: this._select_id,
                        expanded: this.expanded,
                        drag_id: this._drag_id,
                        drag_mode: this._drag_mode
                    }
                }
                ,
                s._click = {
                    dhx_cal_data: function(e) {
                        if (s._ignore_next_click)
                            return e.preventDefault && e.preventDefault(),
                            e.cancelBubble = !0,
                            s._ignore_next_click = !1,
                            !1;
                        var t = e ? e.target : event.srcElement
                          , n = s._locate_event(t);
                        if (e = e || event,
                        n) {
                            if (!s.callEvent("onClick", [n, e]) || s.config.readonly)
                                return
                        } else
                            s.callEvent("onEmptyClick", [s.getActionData(e).date, e]);
                        if (n && s.config.select) {
                            s.select(n);
                            var i = s._getClassName(t);
                            -1 != i.indexOf("_icon") && s._click.buttons[i.split(" ")[1].replace("icon_", "")](n)
                        } else
                            s._close_not_saved(),
                            (new Date).valueOf() - (s._new_event || 0) > 500 && s.unselect()
                    },
                    dhx_cal_prev_button: function() {
                        s._click.dhx_cal_next_button(0, -1)
                    },
                    dhx_cal_next_button: function(e, t) {
                        var n = 1;
                        s.config.rtl && (t = -t,
                        n = -n),
                        s.setCurrentView(s.date.add(s.date[s._mode + "_start"](new Date(s._date)), t || n, s._mode))
                    },
                    dhx_cal_today_button: function() {
                        s.callEvent("onBeforeTodayDisplayed", []) && s.setCurrentView(s._currentDate())
                    },
                    dhx_cal_tab: function() {
                        var e = this.getAttribute("name")
                          , t = e.substring(0, e.search("_tab"));
                        s.setCurrentView(s._date, t)
                    },
                    buttons: {
                        delete: function(e) {
                            var t = s.locale.labels.confirm_deleting;
                            s._dhtmlx_confirm(t, s.locale.labels.title_confirm_deleting, (function() {
                                s.deleteEvent(e)
                            }
                            ))
                        },
                        edit: function(e) {
                            s.edit(e)
                        },
                        save: function(e) {
                            s.editStop(!0)
                        },
                        details: function(e) {
                            s.showLightbox(e)
                        },
                        cancel: function(e) {
                            s.editStop(!1)
                        }
                    }
                },
                s._dhtmlx_confirm = function(e, t, n) {
                    if (!e)
                        return n();
                    var i = {
                        text: e
                    };
                    t && (i.title = t),
                    n && (i.callback = function(e) {
                        e && n()
                    }
                    ),
                    dhtmlx.confirm(i)
                }
                ,
                s.addEventNow = function(e, t, n) {
                    var i = {};
                    s._isObject(e) && !s._isDate(e) && (i = e,
                    e = null);
                    var a = 6e4 * (this.config.event_duration || this.config.time_step);
                    e || (e = i.start_date || Math.round(s._currentDate().valueOf() / a) * a);
                    var r = new Date(e);
                    if (!t) {
                        var o = this.config.first_hour;
                        o > r.getHours() && (r.setHours(o),
                        e = r.valueOf()),
                        t = e.valueOf() + a
                    }
                    var l = new Date(t);
                    r.valueOf() == l.valueOf() && l.setTime(l.valueOf() + a),
                    i.start_date = i.start_date || r,
                    i.end_date = i.end_date || l,
                    i.text = i.text || this.locale.labels.new_event,
                    i.id = this._drag_id = i.id || this.uid(),
                    this._drag_mode = "new-size",
                    this._loading = !0;
                    var _ = this.addEvent(i);
                    return this.callEvent("onEventCreated", [this._drag_id, n]),
                    this._loading = !1,
                    this._drag_event = {},
                    this._on_mouse_up(n),
                    _
                }
                ,
                s._on_dbl_click = function(e, t) {
                    if (t = t || e.target || e.srcElement,
                    !this.config.readonly) {
                        var n = s._getClassName(t).split(" ")[0];
                        switch (n) {
                        case "dhx_scale_holder":
                        case "dhx_scale_holder_now":
                        case "dhx_month_body":
                        case "dhx_wa_day_data":
                            if (!s.config.dblclick_create)
                                break;
                            this.addEventNow(this.getActionData(e).date, null, e);
                            break;
                        case "dhx_cal_event":
                        case "dhx_wa_ev_body":
                        case "dhx_agenda_line":
                        case "dhx_grid_event":
                        case "dhx_cal_event_line":
                        case "dhx_cal_event_clear":
                            var i = this._locate_event(t);
                            if (!this.callEvent("onDblClick", [i, e]))
                                return;
                            this.config.details_on_dblclick || this._table_view || !this.getEvent(i)._timed || !this.config.select ? this.showLightbox(i) : this.edit(i);
                            break;
                        case "dhx_time_block":
                        case "dhx_cal_container":
                            return;
                        default:
                            var a = this["dblclick_" + n];
                            if (a)
                                a.call(this, e);
                            else if (t.parentNode && t != this)
                                return s._on_dbl_click(e, t.parentNode)
                        }
                    }
                }
                ,
                s._get_column_index = function(e) {
                    var t = 0;
                    if (this._cols) {
                        for (var n = 0, i = 0; n + this._cols[i] < e && i < this._cols.length; )
                            n += this._cols[i],
                            i++;
                        if (t = i + (this._cols[i] ? (e - n) / this._cols[i] : 0),
                        this._ignores && t >= this._cols.length)
                            for (; t >= 1 && this._ignores[Math.floor(t)]; )
                                t--
                    }
                    return t
                }
                ,
                s._week_indexes_from_pos = function(e) {
                    if (this._cols) {
                        var t = this._get_column_index(e.x);
                        return e.x = Math.min(this._cols.length - 1, Math.max(0, Math.ceil(t) - 1)),
                        e.y = Math.max(0, Math.ceil(60 * e.y / (this.config.time_step * this.config.hour_size_px)) - 1) + this.config.first_hour * (60 / this.config.time_step),
                        e
                    }
                    return e
                }
                ,
                s._mouse_coords = function(e) {
                    var t, n = document.body, i = document.documentElement;
                    t = this.$env.isIE || !e.pageX && !e.pageY ? {
                        x: e.clientX + (n.scrollLeft || i.scrollLeft || 0) - n.clientLeft,
                        y: e.clientY + (n.scrollTop || i.scrollTop || 0) - n.clientTop
                    } : {
                        x: e.pageX,
                        y: e.pageY
                    },
                    this.config.rtl && this._colsS ? (t.x = this.$container.querySelector(".dhx_cal_data").offsetWidth - t.x,
                    "month" !== this._mode && (t.x -= this.xy.scale_width)) : t.x -= this.$domHelpers.getAbsoluteLeft(this._obj) + (this._table_view ? 0 : this.xy.scale_width),
                    t.y -= this.$domHelpers.getAbsoluteTop(this._obj) + this.xy.nav_height + (this._dy_shift || 0) + this.xy.scale_height - this._els.dhx_cal_data[0].scrollTop,
                    t.ev = e;
                    var a = this["mouse_" + this._mode];
                    if (a)
                        t = a.call(this, t);
                    else if (this._table_view) {
                        var r = this._get_column_index(t.x);
                        if (!this._cols || !this._colsS)
                            return t;
                        var o = 0;
                        for (o = 1; o < this._colsS.heights.length && !(this._colsS.heights[o] > t.y); o++)
                            ;
                        t.y = Math.ceil(24 * (Math.max(0, r) + 7 * Math.max(0, o - 1)) * 60 / this.config.time_step),
                        (s._drag_mode || "month" == this._mode) && (t.y = 24 * (Math.max(0, Math.ceil(r) - 1) + 7 * Math.max(0, o - 1)) * 60 / this.config.time_step),
                        "move" == this._drag_mode && s._ignores_detected && s.config.preserve_length && (t._ignores = !0,
                        this._drag_event._event_length || (this._drag_event._event_length = this._get_real_event_length(this._drag_event.start_date, this._drag_event.end_date, {
                            x_step: 1,
                            x_unit: "day"
                        }))),
                        t.x = 0
                    } else
                        t = this._week_indexes_from_pos(t);
                    return t.timestamp = +new Date,
                    t
                }
                ,
                s._close_not_saved = function() {
                    if ((new Date).valueOf() - (s._new_event || 0) > 500 && s._edit_id) {
                        var e = s.locale.labels.confirm_closing;
                        s._dhtmlx_confirm(e, s.locale.labels.title_confirm_closing, (function() {
                            s.editStop(s.config.positive_closing)
                        }
                        )),
                        e && (this._drag_id = this._drag_pos = this._drag_mode = null)
                    }
                }
                ,
                s._correct_shift = function(e, t) {
                    return e - 6e4 * (new Date(s._min_date).getTimezoneOffset() - new Date(e).getTimezoneOffset()) * (t ? -1 : 1)
                }
                ,
                s._is_pos_changed = function(e, t) {
                    function n(e, t, n) {
                        return !!(Math.abs(e - t) > n)
                    }
                    if (!e || !this._drag_pos)
                        return !0;
                    return !!(this._drag_pos.has_moved || !this._drag_pos.timestamp || t.timestamp - this._drag_pos.timestamp > 100 || n(e.ev.clientX, t.ev.clientX, 5) || n(e.ev.clientY, t.ev.clientY, 5))
                }
                ,
                s._correct_drag_start_date = function(e) {
                    var t;
                    s.matrix && (t = s.matrix[s._mode]),
                    t = t || {
                        x_step: 1,
                        x_unit: "day"
                    },
                    e = new Date(e);
                    var n = 1;
                    return (t._start_correction || t._end_correction) && (n = 60 * (t.last_hour || 0) - (60 * e.getHours() + e.getMinutes()) || 1),
                    1 * e + (s._get_fictional_event_length(e, n, t) - n)
                }
                ,
                s._correct_drag_end_date = function(e, t) {
                    var n;
                    s.matrix && (n = s.matrix[s._mode]),
                    n = n || {
                        x_step: 1,
                        x_unit: "day"
                    };
                    var i = 1 * e + s._get_fictional_event_length(e, t, n);
                    return new Date(1 * i - (s._get_fictional_event_length(i, -1, n, -1) + 1))
                }
                ,
                s._on_mouse_move = function(e) {
                    if (this._drag_mode) {
                        var t = this._mouse_coords(e);
                        if (this._is_pos_changed(this._drag_pos, t)) {
                            var n, i;
                            if (this._edit_id != this._drag_id && this._close_not_saved(),
                            !this._drag_mode)
                                return;
                            var a = null;
                            if (this._drag_pos && !this._drag_pos.has_moved && ((a = this._drag_pos).has_moved = !0),
                            this._drag_pos = t,
                            this._drag_pos.has_moved = !0,
                            "create" == this._drag_mode) {
                                if (a && (t = a),
                                this._close_not_saved(),
                                this.unselect(this._select_id),
                                this._loading = !0,
                                n = this._get_date_from_pos(t).valueOf(),
                                !this._drag_start)
                                    return this.callEvent("onBeforeEventCreated", [e, this._drag_id]) ? (this._loading = !1,
                                    void (this._drag_start = n)) : void (this._loading = !1);
                                i = n,
                                this._drag_start;
                                var r = new Date(this._drag_start)
                                  , o = new Date(i);
                                "day" != this._mode && "week" != this._mode || r.getHours() != o.getHours() || r.getMinutes() != o.getMinutes() || (o = new Date(this._drag_start + 1e3)),
                                this._drag_id = this.uid(),
                                this.addEvent(r, o, this.locale.labels.new_event, this._drag_id, t.fields),
                                this.callEvent("onEventCreated", [this._drag_id, e]),
                                this._loading = !1,
                                this._drag_mode = "new-size"
                            }
                            var l, _ = this.config.time_step, d = this.getEvent(this._drag_id);
                            if (s.matrix && (l = s.matrix[s._mode]),
                            l = l || {
                                x_step: 1,
                                x_unit: "day"
                            },
                            "move" == this._drag_mode)
                                n = this._min_date.valueOf() + 6e4 * (t.y * this.config.time_step + 24 * t.x * 60),
                                !t.custom && this._table_view && (n += 1e3 * this.date.time_part(d.start_date)),
                                !this._table_view && this._dragEventBody && void 0 === this._drag_event._move_event_shift && (this._drag_event._move_event_shift = n - d.start_date),
                                this._drag_event._move_event_shift && (n -= this._drag_event._move_event_shift),
                                n = this._correct_shift(n),
                                t._ignores && this.config.preserve_length && this._table_view ? (n = s._correct_drag_start_date(n),
                                i = s._correct_drag_end_date(n, this._drag_event._event_length)) : i = d.end_date.valueOf() - (d.start_date.valueOf() - n);
                            else {
                                if (n = d.start_date.valueOf(),
                                i = d.end_date.valueOf(),
                                this._table_view) {
                                    var c = this._min_date.valueOf() + t.y * this.config.time_step * 6e4 + (t.custom ? 0 : 864e5);
                                    if ("month" == this._mode)
                                        if (c = this._correct_shift(c, !1),
                                        this._drag_from_start) {
                                            var h = 864e5;
                                            c <= s.date.date_part(new Date(i + h - 1)).valueOf() && (n = c - h)
                                        } else
                                            i = c;
                                    else
                                        this.config.preserve_length ? t.resize_from_start ? n = s._correct_drag_start_date(c) : i = s._correct_drag_end_date(c, 0) : t.resize_from_start ? n = c : i = c
                                } else {
                                    var u = this.date.date_part(new Date(d.end_date.valueOf() - 1)).valueOf()
                                      , f = new Date(u)
                                      , p = this.config.first_hour
                                      , v = 60 / _ * (this.config.last_hour - p);
                                    this.config.time_step = 1;
                                    var m = this._mouse_coords(e);
                                    this.config.time_step = _;
                                    var g = t.y * _ * 6e4
                                      , y = Math.min(t.y + 1, v) * _ * 6e4
                                      , x = 6e4 * m.y;
                                    i = Math.abs(g - x) > Math.abs(y - x) ? u + y : u + g,
                                    i += 6e4 * (new Date(i).getTimezoneOffset() - f.getTimezoneOffset()),
                                    this._els.dhx_cal_data[0].style.cursor = "s-resize",
                                    "week" != this._mode && "day" != this._mode || (i = this._correct_shift(i))
                                }
                                if ("new-size" == this._drag_mode)
                                    if (i <= this._drag_start) {
                                        var b = t.shift || (this._table_view && !t.custom ? 864e5 : 0);
                                        n = i - (t.shift ? 0 : b),
                                        i = this._drag_start + (b || 6e4 * _)
                                    } else
                                        n = this._drag_start;
                                else
                                    i <= n && (i = n + 6e4 * _)
                            }
                            var w = new Date(i - 1)
                              , E = new Date(n);
                            if ("move" == this._drag_mode && s.config.limit_drag_out && (+E < +s._min_date || +i > +s._max_date)) {
                                if (+d.start_date < +s._min_date || +d.end_date > +s._max_date)
                                    E = new Date(d.start_date),
                                    i = new Date(d.end_date);
                                else {
                                    var k = i - E;
                                    +E < +s._min_date ? (E = new Date(s._min_date),
                                    t._ignores && this.config.preserve_length && this._table_view ? (E = new Date(s._correct_drag_start_date(E)),
                                    l._start_correction && (E = new Date(E.valueOf() + l._start_correction)),
                                    i = new Date(1 * E + this._get_fictional_event_length(E, this._drag_event._event_length, l))) : i = new Date(+E + k)) : (i = new Date(s._max_date),
                                    t._ignores && this.config.preserve_length && this._table_view ? (l._end_correction && (i = new Date(i.valueOf() - l._end_correction)),
                                    i = new Date(1 * i - this._get_fictional_event_length(i, 0, l, !0)),
                                    E = new Date(1 * i - this._get_fictional_event_length(i, this._drag_event._event_length, l, !0)),
                                    this._ignores_detected && (E = s.date.add(E, l.x_step, l.x_unit),
                                    i = new Date(1 * i - this._get_fictional_event_length(i, 0, l, !0)),
                                    i = s.date.add(i, l.x_step, l.x_unit))) : E = new Date(+i - k))
                                }
                                w = new Date(i - 1)
                            }
                            if (!this._table_view && this._dragEventBody && !s.config.all_timed && (!s._get_section_view() && t.x != this._get_event_sday({
                                start_date: new Date(n),
                                end_date: new Date(n)
                            }) || new Date(n).getHours() < this.config.first_hour)) {
                                k = i - E;
                                if ("move" == this._drag_mode) {
                                    h = this._min_date.valueOf() + 24 * t.x * 60 * 6e4;
                                    (E = new Date(h)).setHours(this.config.first_hour),
                                    i = new Date(E.valueOf() + k),
                                    w = new Date(i - 1)
                                }
                            }
                            if (!this._table_view && !s.config.all_timed && (!s.getView() && t.x != this._get_event_sday({
                                start_date: new Date(i),
                                end_date: new Date(i)
                            }) || new Date(i).getHours() >= this.config.last_hour)) {
                                k = i - E,
                                h = this._min_date.valueOf() + 24 * t.x * 60 * 6e4;
                                (i = s.date.date_part(new Date(h))).setHours(this.config.last_hour),
                                w = new Date(i - 1),
                                "move" == this._drag_mode && (E = new Date(+i - k))
                            }
                            if (this._table_view || w.getDate() == E.getDate() && w.getHours() < this.config.last_hour || s._allow_dnd)
                                if (d.start_date = E,
                                d.end_date = new Date(i),
                                this.config.update_render) {
                                    var D = s._els.dhx_cal_data[0].scrollTop;
                                    this.update_view(),
                                    s._els.dhx_cal_data[0].scrollTop = D
                                } else
                                    this.updateEvent(this._drag_id);
                            this._table_view && this.for_rendered(this._drag_id, (function(e) {
                                e.className += " dhx_in_move dhx_cal_event_drag"
                            }
                            )),
                            this.callEvent("onEventDrag", [this._drag_id, this._drag_mode, e])
                        }
                    } else if (s.checkEvent("onMouseMove")) {
                        var S = this._locate_event(e.target || e.srcElement);
                        this.callEvent("onMouseMove", [S, e])
                    }
                }
                ,
                s._on_mouse_down = function(e, t) {
                    if (2 != e.button && !this.config.readonly && !this._drag_mode) {
                        t = t || e.target || e.srcElement;
                        var n = s._getClassName(t).split(" ")[0];
                        switch (this.config.drag_event_body && "dhx_body" == n && t.parentNode && -1 === t.parentNode.className.indexOf("dhx_cal_select_menu") && (n = "dhx_event_move",
                        this._dragEventBody = !0),
                        n) {
                        case "dhx_cal_event_line":
                        case "dhx_cal_event_clear":
                            this._table_view && (this._drag_mode = "move");
                            break;
                        case "dhx_event_move":
                        case "dhx_wa_ev_body":
                            this._drag_mode = "move";
                            break;
                        case "dhx_event_resize":
                            this._drag_mode = "resize",
                            s._getClassName(t).indexOf("dhx_event_resize_end") < 0 ? s._drag_from_start = !0 : s._drag_from_start = !1;
                            break;
                        case "dhx_scale_holder":
                        case "dhx_scale_holder_now":
                        case "dhx_month_body":
                        case "dhx_matrix_cell":
                        case "dhx_marked_timespan":
                            this._drag_mode = "create";
                            break;
                        case "":
                            if (t.parentNode)
                                return s._on_mouse_down(e, t.parentNode);
                            break;
                        default:
                            if ((!s.checkEvent("onMouseDown") || s.callEvent("onMouseDown", [n, e])) && t.parentNode && t != this && "dhx_body" != n)
                                return s._on_mouse_down(e, t.parentNode);
                            this._drag_mode = null,
                            this._drag_id = null
                        }
                        if (this._drag_mode) {
                            var i = this._locate_event(t);
                            if (this.config["drag_" + this._drag_mode] && this.callEvent("onBeforeDrag", [i, this._drag_mode, e])) {
                                if (this._drag_id = i,
                                (this._edit_id != this._drag_id || this._edit_id && "create" == this._drag_mode) && this._close_not_saved(),
                                !this._drag_mode)
                                    return;
                                this._drag_event = s._lame_clone(this.getEvent(this._drag_id) || {}),
                                this._drag_pos = this._mouse_coords(e)
                            } else
                                this._drag_mode = this._drag_id = 0
                        }
                        this._drag_start = null
                    }
                }
                ,
                s._get_private_properties = function(e) {
                    var t = {};
                    for (var n in e)
                        0 === n.indexOf("_") && (t[n] = !0);
                    return t
                }
                ,
                s._clear_temporary_properties = function(e, t) {
                    var n = this._get_private_properties(e)
                      , i = this._get_private_properties(t);
                    for (var a in i)
                        n[a] || delete t[a]
                }
                ,
                s._on_mouse_up = function(e) {
                    if (!e || 2 != e.button || !this._mobile) {
                        if (this._drag_mode && this._drag_id) {
                            this._els.dhx_cal_data[0].style.cursor = "default";
                            var t = this._drag_id
                              , n = this._drag_mode
                              , i = !this._drag_pos || this._drag_pos.has_moved;
                            delete this._drag_event._move_event_shift;
                            var a = this.getEvent(this._drag_id);
                            if (i && (this._drag_event._dhx_changed || !this._drag_event.start_date || a.start_date.valueOf() != this._drag_event.start_date.valueOf() || a.end_date.valueOf() != this._drag_event.end_date.valueOf())) {
                                var r = "new-size" == this._drag_mode;
                                if (this.callEvent("onBeforeEventChanged", [a, e, r, this._drag_event]))
                                    if (this._drag_id = this._drag_mode = null,
                                    r && this.config.edit_on_create) {
                                        if (this.unselect(),
                                        this._new_event = new Date,
                                        this._table_view || this.config.details_on_create || !this.config.select || !this.isOneDayEvent(this.getEvent(t)))
                                            return s.callEvent("onDragEnd", [t, n, e]),
                                            this.showLightbox(t);
                                        this._drag_pos = !0,
                                        this._select_id = this._edit_id = t
                                    } else
                                        this._new_event || this.callEvent(r ? "onEventAdded" : "onEventChanged", [t, this.getEvent(t)]);
                                else
                                    r ? this.deleteEvent(a.id, !0) : (this._drag_event._dhx_changed = !1,
                                    this._clear_temporary_properties(a, this._drag_event),
                                    s._lame_copy(a, this._drag_event),
                                    this.updateEvent(a.id))
                            }
                            this._drag_pos && (this._drag_pos.has_moved || !0 === this._drag_pos) && (this._drag_id = this._drag_mode = null,
                            this.render_view_data()),
                            s.callEvent("onDragEnd", [t, n, e])
                        }
                        this._drag_id = null,
                        this._drag_mode = null,
                        this._drag_pos = null
                    }
                }
                ,
                s._trigger_dyn_loading = function() {
                    return !(!this._load_mode || !this._load() || (this._render_wait = !0,
                    0))
                }
                ,
                s.update_view = function() {
                    this._reset_ignores(),
                    this._update_nav_bar(this.config.header, this.$container.querySelector(".dhx_cal_navline"));
                    var e = this[this._mode + "_view"];
                    if (e ? e(!0) : this._reset_scale(),
                    this._trigger_dyn_loading())
                        return !0;
                    this.render_view_data()
                }
                ,
                s.isViewExists = function(e) {
                    return !!(s[e + "_view"] || s.date[e + "_start"] && s.templates[e + "_date"] && s.templates[e + "_scale_date"])
                }
                ,
                s._set_aria_buttons_attrs = function() {
                    for (var e = ["dhx_cal_next_button", "dhx_cal_prev_button", "dhx_cal_tab", "dhx_cal_today_button"], t = 0; t < e.length; t++)
                        for (var n = this._els[e[t]], i = 0; n && i < n.length; i++) {
                            var a = n[i].getAttribute("name")
                              , r = this.locale.labels[e[t]];
                            a && (r = this.locale.labels[a] || r),
                            "dhx_cal_next_button" == e[t] ? r = this.locale.labels.next : "dhx_cal_prev_button" == e[t] && (r = this.locale.labels.prev),
                            this._waiAria.headerButtonsAttributes(n[i], r || "")
                        }
                }
                ,
                s.updateView = function(e, t) {
                    if (!this.$container)
                        throw new Error("The scheduler is not initialized. \n **scheduler.updateView** or **scheduler.setCurrentView** can be called only after **scheduler.init**");
                    e = e || this._date,
                    t = t || this._mode;
                    var n = "dhx_cal_data"
                      , i = this._obj
                      , a = "dhx_scheduler_" + this._mode
                      , r = "dhx_scheduler_" + t;
                    this._mode && -1 != i.className.indexOf(a) ? i.className = i.className.replace(a, r) : i.className += " " + r;
                    var o, s = "dhx_multi_day", l = !(this._mode != t || !this.config.preserve_scroll) && this._els[n][0].scrollTop;
                    this._els[s] && this._els[s][0] && (o = this._els[s][0].scrollTop),
                    this[this._mode + "_view"] && t && this._mode != t && this[this._mode + "_view"](!1),
                    this._close_not_saved(),
                    this._els[s] && (this._els[s][0].parentNode.removeChild(this._els[s][0]),
                    this._els[s] = null),
                    this._mode = t,
                    this._date = e,
                    this._table_view = "month" == this._mode,
                    this._dy_shift = 0,
                    this.update_view(),
                    this._set_aria_buttons_attrs();
                    var _ = this._els.dhx_cal_tab;
                    if (_)
                        for (var d = 0; d < _.length; d++) {
                            var c = _[d];
                            c.getAttribute("name") == this._mode + "_tab" ? (c.classList.add("active"),
                            this._waiAria.headerToggleState(c, !0)) : (c.classList.remove("active"),
                            this._waiAria.headerToggleState(c, !1))
                        }
                    "number" == typeof l && (this._els[n][0].scrollTop = l),
                    "number" == typeof o && this._els[s] && this._els[s][0] && (this._els[s][0].scrollTop = o)
                }
                ,
                s.setCurrentView = function(e, t) {
                    this.callEvent("onBeforeViewChange", [this._mode, this._date, t || this._mode, e || this._date]) && (this.updateView(e, t),
                    this.callEvent("onViewChange", [this._mode, this._date]))
                }
                ,
                s.render = function(e, t) {
                    s.setCurrentView(e, t)
                }
                ,
                s._render_x_header = function(e, t, n, i, a) {
                    a = a || 0;
                    var r = document.createElement("div");
                    r.className = "dhx_scale_bar",
                    this.templates[this._mode + "_scalex_class"] && (r.className += " " + this.templates[this._mode + "_scalex_class"](n));
                    var o = this._cols[e] - 1;
                    "month" == this._mode && 0 === e && this.config.left_border && (r.className += " dhx_scale_bar_border",
                    t += 1),
                    this.set_xy(r, o, this.xy.scale_height - 2, t, a);
                    var s = this.templates[this._mode + "_scale_date"](n, this._mode);
                    r.innerHTML = s,
                    this._waiAria.dayHeaderAttr(r, s),
                    i.appendChild(r)
                }
                ,
                s._get_columns_num = function(e, t) {
                    var n = 7;
                    if (!s._table_view) {
                        var i = s.date["get_" + s._mode + "_end"];
                        i && (t = i(e)),
                        n = Math.round((t.valueOf() - e.valueOf()) / 864e5)
                    }
                    return n
                }
                ,
                s._get_timeunit_start = function() {
                    return this.date[this._mode + "_start"](new Date(this._date.valueOf()))
                }
                ,
                s._get_view_end = function() {
                    var e = this._get_timeunit_start()
                      , t = s.date.add(e, 1, this._mode);
                    if (!s._table_view) {
                        var n = s.date["get_" + s._mode + "_end"];
                        n && (t = n(e))
                    }
                    return t
                }
                ,
                s._calc_scale_sizes = function(e, t, n) {
                    var i = this.config.rtl
                      , a = e
                      , r = this._get_columns_num(t, n);
                    this._process_ignores(t, r, "day", 1);
                    for (var o = r - this._ignores_detected, s = 0; s < r; s++)
                        this._ignores[s] ? (this._cols[s] = 0,
                        o++) : this._cols[s] = Math.floor(a / (o - s)),
                        a -= this._cols[s],
                        this._colsS[s] = (this._cols[s - 1] || 0) + (this._colsS[s - 1] || (this._table_view ? 0 : (i ? this.xy.scroll_width : this.xy.scale_width) + 2));
                    this._colsS.col_length = r,
                    this._colsS[r] = this._cols[r - 1] + this._colsS[r - 1] || 0
                }
                ,
                s._set_scale_col_size = function(e, t, n) {
                    var i = this.config;
                    this.set_xy(e, t - 1, i.hour_size_px * (i.last_hour - i.first_hour), n + this.xy.scale_width + 1, 0)
                }
                ,
                s._render_scales = function(e, t) {
                    var n = new Date(s._min_date)
                      , i = new Date(s._max_date)
                      , a = this.date.date_part(s._currentDate())
                      , r = parseInt(e.style.width, 10)
                      , o = new Date(this._min_date)
                      , l = this._get_columns_num(n, i);
                    this._calc_scale_sizes(r, n, i);
                    var _ = 0;
                    e.innerHTML = "";
                    for (var d = 0; d < l; d++) {
                        if (this._ignores[d] || this._render_x_header(d, _, o, e),
                        !this._table_view) {
                            var c = document.createElement("div")
                              , h = "dhx_scale_holder";
                            o.valueOf() == a.valueOf() && (h = "dhx_scale_holder_now"),
                            c.setAttribute("data-column-index", d),
                            this._ignores_detected && this._ignores[d] && (h += " dhx_scale_ignore"),
                            c.className = h + " " + this.templates.week_date_class(o, a),
                            this._waiAria.dayColumnAttr(c, o),
                            this._set_scale_col_size(c, this._cols[d], _),
                            t.appendChild(c),
                            this.callEvent("onScaleAdd", [c, o])
                        }
                        _ += this._cols[d],
                        o = this.date.add(o, 1, "day"),
                        o = this.date.day_start(o)
                    }
                }
                ,
                s._getNavDateElement = function() {
                    return this.$container.querySelector(".dhx_cal_date")
                }
                ,
                s._reset_scale = function() {
                    if (this.templates[this._mode + "_date"]) {
                        var e = this._els.dhx_cal_header[0]
                          , t = this._els.dhx_cal_data[0]
                          , n = this.config;
                        e.innerHTML = "",
                        t.innerHTML = "";
                        var i = (n.readonly || !n.drag_resize ? " dhx_resize_denied" : "") + (n.readonly || !n.drag_move ? " dhx_move_denied" : "");
                        t.className = "dhx_cal_data" + i,
                        this._scales = {},
                        this._cols = [],
                        this._colsS = {
                            height: 0
                        },
                        this._dy_shift = 0,
                        this.set_sizes();
                        var a, r, o = this._get_timeunit_start(), l = s._get_view_end();
                        a = r = this._table_view ? s.date.week_start(o) : o,
                        this._min_date = a;
                        var _ = this.templates[this._mode + "_date"](o, l, this._mode)
                          , d = this._getNavDateElement();
                        if (d && (d.innerHTML = _,
                        this._waiAria.navBarDateAttr(d, _)),
                        this._max_date = l,
                        s._render_scales(e, t),
                        this._table_view)
                            this._reset_month_scale(t, o, r);
                        else if (this._reset_hours_scale(t, o, r),
                        n.multi_day) {
                            var c = "dhx_multi_day";
                            this._els[c] && (this._els[c][0].parentNode.removeChild(this._els[c][0]),
                            this._els[c] = null);
                            var h = this._els.dhx_cal_navline[0].offsetHeight + this._els.dhx_cal_header[0].offsetHeight + 1
                              , u = document.createElement("div");
                            u.className = c,
                            u.style.visibility = "hidden";
                            var f = this._colsS[this._colsS.col_length]
                              , p = n.rtl ? this.xy.scale_width : this.xy.scroll_width
                              , v = Math.max(f + p - 2, 0);
                            this.set_xy(u, v, 0, 0, h),
                            t.parentNode.insertBefore(u, t);
                            var m = u.cloneNode(!0);
                            m.className = c + "_icon",
                            m.style.visibility = "hidden",
                            this.set_xy(m, this.xy.scale_width, 0, 0, h),
                            u.appendChild(m),
                            this._els[c] = [u, m],
                            this._els[c][0].onclick = this._click.dhx_cal_data
                        }
                    }
                }
                ,
                s._reset_hours_scale = function(e, t, n) {
                    var i = document.createElement("div");
                    i.className = "dhx_scale_holder";
                    for (var a = new Date(1980,1,1,this.config.first_hour,0,0), r = 1 * this.config.first_hour; r < this.config.last_hour; r++) {
                        var o = document.createElement("div");
                        o.className = "dhx_scale_hour",
                        o.style.height = this.config.hour_size_px + "px";
                        var l = this.xy.scale_width;
                        this.config.left_border && (o.className += " dhx_scale_hour_border"),
                        o.style.width = l + "px";
                        var _ = s.templates.hour_scale(a);
                        o.innerHTML = _,
                        this._waiAria.hourScaleAttr(o, _),
                        i.appendChild(o),
                        a = this.date.add(a, 1, "hour")
                    }
                    e.appendChild(i),
                    this.config.scroll_hour && (e.scrollTop = this.config.hour_size_px * (this.config.scroll_hour - this.config.first_hour))
                }
                ,
                s._currentDate = function() {
                    return s.config.now_date ? new Date(s.config.now_date) : new Date
                }
                ,
                s._reset_ignores = function() {
                    this._ignores = {},
                    this._ignores_detected = 0
                }
                ,
                s._process_ignores = function(e, t, n, i, a) {
                    this._reset_ignores();
                    var r = s["ignore_" + this._mode];
                    if (r)
                        for (var o = new Date(e), l = 0; l < t; l++)
                            r(o) && (this._ignores_detected += 1,
                            this._ignores[l] = !0,
                            a && t++),
                            o = s.date.add(o, i, n),
                            s.date[n + "_start"] && (o = s.date[n + "_start"](o))
                }
                ,
                s._render_month_scale = function(e, t, n, i) {
                    function a(e) {
                        var t = s._colsS.height;
                        return void 0 !== s._colsS.heights[e + 1] && (t = s._colsS.heights[e + 1] - (s._colsS.heights[e] || 0)),
                        t
                    }
                    var r = s.date.add(t, 1, "month")
                      , o = new Date(n)
                      , l = s._currentDate();
                    this.date.date_part(l),
                    this.date.date_part(n),
                    i = i || Math.ceil(Math.round((r.valueOf() - n.valueOf()) / 864e5) / 7);
                    for (var _ = [], d = 0; d <= 7; d++) {
                        var c = (this._cols[d] || 0) - 1;
                        0 === d && this.config.left_border && (c -= 1),
                        _[d] = c + "px"
                    }
                    var h = 0
                      , u = document.createElement("table");
                    u.setAttribute("cellpadding", "0"),
                    u.setAttribute("cellspacing", "0");
                    var f = document.createElement("tbody");
                    u.appendChild(f);
                    var p = [];
                    for (d = 0; d < i; d++) {
                        var v = document.createElement("tr");
                        f.appendChild(v);
                        for (var m = Math.max(a(d) - s.xy.month_head_height, 0), g = 0; g < 7; g++) {
                            var y = document.createElement("td");
                            v.appendChild(y);
                            var x = "";
                            n < t ? x = "dhx_before" : n >= r ? x = "dhx_after" : n.valueOf() == l.valueOf() && (x = "dhx_now"),
                            this._ignores_detected && this._ignores[g] && (x += " dhx_scale_ignore"),
                            y.className = x + " " + this.templates.month_date_class(n, l),
                            y.setAttribute("data-cell-date", s.templates.format_date(n));
                            var b = "dhx_month_body"
                              , w = "dhx_month_head";
                            if (0 === g && this.config.left_border && (b += " dhx_month_body_border",
                            w += " dhx_month_head_border"),
                            this._ignores_detected && this._ignores[g])
                                y.appendChild(document.createElement("div")),
                                y.appendChild(document.createElement("div"));
                            else {
                                this._waiAria.monthCellAttr(y, n);
                                var E = document.createElement("div");
                                E.className = w,
                                E.innerHTML = this.templates.month_day(n),
                                y.appendChild(E);
                                var k = document.createElement("div");
                                k.className = b,
                                k.style.height = m + "px",
                                k.style.width = _[g],
                                y.appendChild(k)
                            }
                            p.push(n);
                            var D = n.getDate();
                            (n = this.date.add(n, 1, "day")).getDate() - D > 1 && (n = new Date(n.getFullYear(),n.getMonth(),D + 1,12,0))
                        }
                        s._colsS.heights[d] = h,
                        h += a(d)
                    }
                    this._min_date = o,
                    this._max_date = n,
                    e.innerHTML = "",
                    e.appendChild(u),
                    this._scales = {};
                    var S = e.getElementsByTagName("div");
                    for (d = 0; d < p.length; d++) {
                        e = S[2 * d + 1];
                        var O = p[d];
                        this._scales[+O] = e
                    }
                    for (d = 0; d < p.length; d++) {
                        O = p[d];
                        this.callEvent("onScaleAdd", [this._scales[+O], O])
                    }
                    return this._max_date
                }
                ,
                s._reset_month_scale = function(e, t, n, i) {
                    var a = s.date.add(t, 1, "month")
                      , r = s._currentDate();
                    this.date.date_part(r),
                    this.date.date_part(n),
                    i = i || Math.ceil(Math.round((a.valueOf() - n.valueOf()) / 864e5) / 7);
                    var o = Math.floor(e.clientHeight / i) - this.xy.month_head_height;
                    return this._colsS.height = o + this.xy.month_head_height,
                    this._colsS.heights = [],
                    s._render_month_scale(e, t, n, i)
                }
                ,
                s.getView = function(e) {
                    return e || (e = s.getState().mode),
                    s.matrix && s.matrix[e] ? s.matrix[e] : s._props && s._props[e] ? s._props[e] : null
                }
                ,
                s.getLabel = function(e, t) {
                    for (var n = this.config.lightbox.sections, i = 0; i < n.length; i++)
                        if (n[i].map_to == e)
                            for (var a = n[i].options, r = 0; r < a.length; r++)
                                if (a[r].key == t)
                                    return a[r].label;
                    return ""
                }
                ,
                s.updateCollection = function(e, t) {
                    var n = s.serverList(e);
                    return !!n && (n.splice(0, n.length),
                    n.push.apply(n, t || []),
                    s.callEvent("onOptionsLoad", []),
                    s.resetLightbox(),
                    !0)
                }
                ,
                s._lame_clone = function(e, t) {
                    var n, i, a;
                    for (t = t || [],
                    n = 0; n < t.length; n += 2)
                        if (e === t[n])
                            return t[n + 1];
                    if (e && "object" == typeof e) {
                        for (a = {},
                        i = [Array, Date, Number, String, Boolean],
                        n = 0; n < i.length; n++)
                            e instanceof i[n] && (a = n ? new i[n](e) : new i[n]);
                        for (n in t.push(e, a),
                        e)
                            Object.prototype.hasOwnProperty.apply(e, [n]) && (a[n] = s._lame_clone(e[n], t))
                    }
                    return a || e
                }
                ,
                s._lame_copy = function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                }
                ,
                s._get_date_from_pos = function(e) {
                    var t = this._min_date.valueOf() + 6e4 * (e.y * this.config.time_step + 24 * (this._table_view ? 0 : e.x) * 60);
                    return new Date(this._correct_shift(t))
                }
                ,
                s.getActionData = function(e) {
                    var t = this._mouse_coords(e);
                    return {
                        date: this._get_date_from_pos(t),
                        section: t.section
                    }
                }
                ,
                s._focus = function(e, t) {
                    if (e && e.focus)
                        if (this._mobile)
                            window.setTimeout((function() {
                                e.focus()
                            }
                            ), 10);
                        else
                            try {
                                t && e.select && e.offsetWidth && e.select(),
                                e.focus()
                            } catch (e) {}
                }
                ,
                s._get_real_event_length = function(e, t, n) {
                    var i, a = t - e, r = n._start_correction + n._end_correction || 0, o = this["ignore_" + this._mode], l = 0;
                    n.render ? (l = this._get_date_index(n, e),
                    i = this._get_date_index(n, t)) : i = Math.round(a / 60 / 60 / 1e3 / 24);
                    for (var _ = !0; l < i; ) {
                        var d = s.date.add(t, -n.x_step, n.x_unit);
                        o && o(t) && (!_ || _ && o(d)) ? a -= t - d : (_ = !1,
                        a -= r),
                        t = d,
                        i--
                    }
                    return a
                }
                ,
                s._get_fictional_event_length = function(e, t, n, i) {
                    var a = new Date(e)
                      , r = i ? -1 : 1;
                    if (n._start_correction || n._end_correction) {
                        var o;
                        o = i ? 60 * a.getHours() + a.getMinutes() - 60 * (n.first_hour || 0) : 60 * (n.last_hour || 0) - (60 * a.getHours() + a.getMinutes());
                        var l = 60 * (n.last_hour - n.first_hour)
                          , _ = Math.ceil((t / 6e4 - o) / l);
                        _ < 0 && (_ = 0),
                        t += _ * (1440 - l) * 60 * 1e3
                    }
                    var d, c = new Date(1 * e + t * r), h = this["ignore_" + this._mode], u = 0;
                    for (n.render ? (u = this._get_date_index(n, a),
                    d = this._get_date_index(n, c)) : d = Math.round(t / 60 / 60 / 1e3 / 24); u * r <= d * r; ) {
                        var f = s.date.add(a, n.x_step * r, n.x_unit);
                        h && h(a) && (t += (f - a) * r,
                        d += r),
                        a = f,
                        u += r
                    }
                    return t
                }
                ,
                s._get_section_view = function() {
                    return this.getView()
                }
                ,
                s._get_section_property = function() {
                    return this.matrix && this.matrix[this._mode] ? this.matrix[this._mode].y_property : this._props && this._props[this._mode] ? this._props[this._mode].map_to : null
                }
                ,
                s._is_initialized = function() {
                    var e = this.getState();
                    return this._obj && e.date && e.mode
                }
                ,
                s._is_lightbox_open = function() {
                    var e = this.getState();
                    return null !== e.lightbox_id && void 0 !== e.lightbox_id
                }
                ,
                s._getClassName = function(e) {
                    if (!e)
                        return "";
                    var t = e.className || "";
                    return t.baseVal && (t = t.baseVal),
                    t.indexOf || (t = ""),
                    t || ""
                }
                ,
                s.event = function(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                }
                ,
                s.eventRemove = function(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                }
                ,
                function() {
                    function e(e) {
                        var t = !1
                          , n = !1;
                        if (window.getComputedStyle) {
                            var i = window.getComputedStyle(e, null);
                            t = i.display,
                            n = i.visibility
                        } else
                            e.currentStyle && (t = e.currentStyle.display,
                            n = e.currentStyle.visibility);
                        var a = !1
                          , r = s._locate_css({
                            target: e
                        }, "dhx_form_repeat", !1);
                        return r && (a = !("0px" != r.style.height)),
                        a = a || !e.offsetHeight,
                        "none" != t && "hidden" != n && !a
                    }
                    function t(e) {
                        return !isNaN(e.getAttribute("tabindex")) && 1 * e.getAttribute("tabindex") >= 0
                    }
                    function n(e) {
                        return !{
                            a: !0,
                            area: !0
                        }[e.nodeName.loLowerCase()] || !!e.getAttribute("href")
                    }
                    function i(e) {
                        return !{
                            input: !0,
                            select: !0,
                            textarea: !0,
                            button: !0,
                            object: !0
                        }[e.nodeName.toLowerCase()] || !e.hasAttribute("disabled")
                    }
                    s._getFocusableNodes = function(a) {
                        for (var r = a.querySelectorAll(["a[href]", "area[href]", "input", "select", "textarea", "button", "iframe", "object", "embed", "[tabindex]", "[contenteditable]"].join(", ")), o = Array.prototype.slice.call(r, 0), s = 0; s < o.length; s++) {
                            var l = o[s];
                            (t(l) || i(l) || n(l)) && e(l) || (o.splice(s, 1),
                            s--)
                        }
                        return o
                    }
                }(),
                s._trim = function(e) {
                    return (String.prototype.trim || function() {
                        return this.replace(/^\s+|\s+$/g, "")
                    }
                    ).apply(e)
                }
                ,
                s._isDate = function(e) {
                    return !(!e || "object" != typeof e || !(e.getFullYear && e.getMonth && e.getDate))
                }
                ,
                s._isObject = function(e) {
                    return e && "object" == typeof e
                }
                ,
                function() {
                    function e(e) {
                        return (e + "").replace(i, " ").replace(a, " ")
                    }
                    function t(e) {
                        return (e + "").replace(r, "&#39;")
                    }
                    function n() {
                        return !s.config.wai_aria_attributes
                    }
                    var i = new RegExp("<(?:.|\n)*?>","gm")
                      , a = new RegExp(" +","gm")
                      , r = new RegExp("'","gm");
                    for (var o in s._waiAria = {
                        getAttributeString: function(n) {
                            var i = [" "];
                            for (var a in n)
                                if ("function" != typeof n[a] && "object" != typeof n[a]) {
                                    var r = t(e(n[a]));
                                    i.push(a + "='" + r + "'")
                                }
                            return i.push(" "),
                            i.join(" ")
                        },
                        setAttributes: function(t, n) {
                            for (var i in n)
                                t.setAttribute(i, e(n[i]));
                            return t
                        },
                        labelAttr: function(e, t) {
                            return this.setAttributes(e, {
                                "aria-label": t
                            })
                        },
                        label: function(e) {
                            return s._waiAria.getAttributeString({
                                "aria-label": e
                            })
                        },
                        hourScaleAttr: function(e, t) {
                            this.labelAttr(e, t)
                        },
                        monthCellAttr: function(e, t) {
                            this.labelAttr(e, s.templates.day_date(t))
                        },
                        navBarDateAttr: function(e, t) {
                            this.labelAttr(e, t)
                        },
                        dayHeaderAttr: function(e, t) {
                            this.labelAttr(e, t)
                        },
                        dayColumnAttr: function(e, t) {
                            this.dayHeaderAttr(e, s.templates.day_date(t))
                        },
                        headerButtonsAttributes: function(e, t) {
                            return this.setAttributes(e, {
                                role: "button",
                                "aria-label": t
                            })
                        },
                        headerToggleState: function(e, t) {
                            return this.setAttributes(e, {
                                "aria-pressed": t ? "true" : "false"
                            })
                        },
                        getHeaderCellAttr: function(e) {
                            return s._waiAria.getAttributeString({
                                "aria-label": e
                            })
                        },
                        eventAttr: function(e, t) {
                            this._eventCommonAttr(e, t)
                        },
                        _eventCommonAttr: function(t, n) {
                            n.setAttribute("aria-label", e(s.templates.event_text(t.start_date, t.end_date, t))),
                            s.config.readonly && n.setAttribute("aria-readonly", !0),
                            t.$dataprocessor_class && n.setAttribute("aria-busy", !0),
                            n.setAttribute("aria-selected", s.getState().select_id == t.id ? "true" : "false")
                        },
                        setEventBarAttr: function(e, t) {
                            this._eventCommonAttr(e, t)
                        },
                        _getAttributes: function(e, t) {
                            var n = {
                                setAttribute: function(e, t) {
                                    this[e] = t
                                }
                            };
                            return e.apply(this, [t, n]),
                            n
                        },
                        eventBarAttrString: function(e) {
                            return this.getAttributeString(this._getAttributes(this.setEventBarAttr, e))
                        },
                        agendaHeadAttrString: function() {
                            return this.getAttributeString({
                                role: "row"
                            })
                        },
                        agendaHeadDateString: function(e) {
                            return this.getAttributeString({
                                role: "columnheader",
                                "aria-label": e
                            })
                        },
                        agendaHeadDescriptionString: function(e) {
                            return this.agendaHeadDateString(e)
                        },
                        agendaDataAttrString: function() {
                            return this.getAttributeString({
                                role: "grid"
                            })
                        },
                        agendaEventAttrString: function(e) {
                            var t = this._getAttributes(this._eventCommonAttr, e);
                            return t.role = "row",
                            this.getAttributeString(t)
                        },
                        agendaDetailsBtnString: function() {
                            return this.getAttributeString({
                                role: "button",
                                "aria-label": s.locale.labels.icon_details
                            })
                        },
                        gridAttrString: function() {
                            return this.getAttributeString({
                                role: "grid"
                            })
                        },
                        gridRowAttrString: function(e) {
                            return this.agendaEventAttrString(e)
                        },
                        gridCellAttrString: function(e, t, n) {
                            return this.getAttributeString({
                                role: "gridcell",
                                "aria-label": [void 0 === t.label ? t.id : t.label, ": ", n]
                            })
                        },
                        mapAttrString: function() {
                            return this.gridAttrString()
                        },
                        mapRowAttrString: function(e) {
                            return this.gridRowAttrString(e)
                        },
                        mapDetailsBtnString: function() {
                            return this.agendaDetailsBtnString()
                        },
                        minicalHeader: function(e, t) {
                            this.setAttributes(e, {
                                id: t + "",
                                "aria-live": "assertice",
                                "aria-atomic": "true"
                            })
                        },
                        minicalGrid: function(e, t) {
                            this.setAttributes(e, {
                                "aria-labelledby": t + "",
                                role: "grid"
                            })
                        },
                        minicalRow: function(e) {
                            this.setAttributes(e, {
                                role: "row"
                            })
                        },
                        minicalDayCell: function(e, t) {
                            var n = t.valueOf() < s._max_date.valueOf() && t.valueOf() >= s._min_date.valueOf();
                            this.setAttributes(e, {
                                role: "gridcell",
                                "aria-label": s.templates.day_date(t),
                                "aria-selected": n ? "true" : "false"
                            })
                        },
                        minicalHeadCell: function(e) {
                            this.setAttributes(e, {
                                role: "columnheader"
                            })
                        },
                        weekAgendaDayCell: function(e, t) {
                            var n = e.querySelector(".dhx_wa_scale_bar")
                              , i = e.querySelector(".dhx_wa_day_data")
                              , a = s.uid() + "";
                            this.setAttributes(n, {
                                id: a
                            }),
                            this.setAttributes(i, {
                                "aria-labelledby": a
                            })
                        },
                        weekAgendaEvent: function(e, t) {
                            this.eventAttr(t, e)
                        },
                        lightboxHiddenAttr: function(e) {
                            e.setAttribute("aria-hidden", "true")
                        },
                        lightboxVisibleAttr: function(e) {
                            e.setAttribute("aria-hidden", "false")
                        },
                        lightboxSectionButtonAttrString: function(e) {
                            return this.getAttributeString({
                                role: "button",
                                "aria-label": e,
                                tabindex: "0"
                            })
                        },
                        yearHeader: function(e, t) {
                            this.setAttributes(e, {
                                id: t + ""
                            })
                        },
                        yearGrid: function(e, t) {
                            this.minicalGrid(e, t)
                        },
                        yearHeadCell: function(e) {
                            return this.minicalHeadCell(e)
                        },
                        yearRow: function(e) {
                            return this.minicalRow(e)
                        },
                        yearDayCell: function(e) {
                            this.setAttributes(e, {
                                role: "gridcell"
                            })
                        },
                        lightboxAttr: function(e) {
                            e.setAttribute("role", "dialog"),
                            e.setAttribute("aria-hidden", "true"),
                            e.firstChild.setAttribute("role", "heading")
                        },
                        lightboxButtonAttrString: function(e) {
                            return this.getAttributeString({
                                role: "button",
                                "aria-label": s.locale.labels[e],
                                tabindex: "0"
                            })
                        },
                        eventMenuAttrString: function(e) {
                            return this.getAttributeString({
                                role: "button",
                                "aria-label": s.locale.labels[e]
                            })
                        },
                        lightboxHeader: function(e, t) {
                            e.setAttribute("aria-label", t)
                        },
                        lightboxSelectAttrString: function(e) {
                            var t = "";
                            switch (e) {
                            case "%Y":
                                t = s.locale.labels.year;
                                break;
                            case "%m":
                                t = s.locale.labels.month;
                                break;
                            case "%d":
                                t = s.locale.labels.day;
                                break;
                            case "%H:%i":
                                t = s.locale.labels.hour + " " + s.locale.labels.minute
                            }
                            return s._waiAria.getAttributeString({
                                "aria-label": t
                            })
                        },
                        messageButtonAttrString: function(e) {
                            return "tabindex='0' role='button' aria-label='" + e + "'"
                        },
                        messageInfoAttr: function(e) {
                            e.setAttribute("role", "alert")
                        },
                        messageModalAttr: function(e, t) {
                            e.setAttribute("role", "dialog"),
                            t && e.setAttribute("aria-labelledby", t)
                        },
                        quickInfoAttr: function(e) {
                            e.setAttribute("role", "dialog")
                        },
                        quickInfoHeaderAttrString: function() {
                            return " role='heading' "
                        },
                        quickInfoHeader: function(e, t) {
                            e.setAttribute("aria-label", t)
                        },
                        quickInfoButtonAttrString: function(e) {
                            return s._waiAria.getAttributeString({
                                role: "button",
                                "aria-label": e,
                                tabindex: "0"
                            })
                        },
                        tooltipAttr: function(e) {
                            e.setAttribute("role", "tooltip")
                        },
                        tooltipVisibleAttr: function(e) {
                            e.setAttribute("aria-hidden", "false")
                        },
                        tooltipHiddenAttr: function(e) {
                            e.setAttribute("aria-hidden", "true")
                        }
                    },
                    s._waiAria)
                        s._waiAria[o] = function(e) {
                            return function() {
                                return n() ? " " : e.apply(this, arguments)
                            }
                        }(s._waiAria[o])
                }(),
                s.utils = {
                    mixin: function(e, t, n) {
                        for (var i in t)
                            (void 0 === e[i] || n) && (e[i] = t[i]);
                        return e
                    },
                    copy: function e(t) {
                        var n, i;
                        if (t && "object" == typeof t)
                            switch (!0) {
                            case function(e) {
                                return !(!e || "object" != typeof e || !(e.getFullYear && e.getMonth && e.getDate))
                            }(t):
                                i = new Date(t);
                                break;
                            case function(e) {
                                return Array.isArray ? Array.isArray(e) : e && void 0 !== e.length && e.pop && e.push
                            }(t):
                                for (i = new Array(t.length),
                                n = 0; n < t.length; n++)
                                    i[n] = e(t[n]);
                                break;
                            case function(e) {
                                return e && "object" == typeof e && "function String() { [native code] }" === Function.prototype.toString.call(e.constructor)
                            }(t):
                                i = new String(t);
                                break;
                            case function(e) {
                                return e && "object" == typeof e && "function Number() { [native code] }" === Function.prototype.toString.call(e.constructor)
                            }(t):
                                i = new Number(t);
                                break;
                            case function(e) {
                                return e && "object" == typeof e && "function Boolean() { [native code] }" === Function.prototype.toString.call(e.constructor)
                            }(t):
                                i = new Boolean(t);
                                break;
                            default:
                                for (n in i = {},
                                t)
                                    Object.prototype.hasOwnProperty.apply(t, [n]) && (i[n] = e(t[n]))
                            }
                        return i || t
                    }
                },
                s.$domHelpers = {
                    getAbsoluteLeft: function(e) {
                        return this.getOffset(e).left
                    },
                    getAbsoluteTop: function(e) {
                        return this.getOffset(e).top
                    },
                    getOffsetSum: function(e) {
                        for (var t = 0, n = 0; e; )
                            t += parseInt(e.offsetTop),
                            n += parseInt(e.offsetLeft),
                            e = e.offsetParent;
                        return {
                            top: t,
                            left: n
                        }
                    },
                    getOffsetRect: function(e) {
                        var t = e.getBoundingClientRect()
                          , n = 0
                          , i = 0;
                        if (/Mobi/.test(navigator.userAgent)) {
                            var a = document.createElement("div");
                            a.style.position = "absolute",
                            a.style.left = "0px",
                            a.style.top = "0px",
                            a.style.width = "1px",
                            a.style.height = "1px",
                            document.body.appendChild(a);
                            var r = a.getBoundingClientRect();
                            n = t.top - r.top,
                            i = t.left - r.left,
                            a.parentNode.removeChild(a)
                        } else {
                            var o = document.body
                              , s = document.documentElement
                              , l = window.pageYOffset || s.scrollTop || o.scrollTop
                              , _ = window.pageXOffset || s.scrollLeft || o.scrollLeft
                              , d = s.clientTop || o.clientTop || 0
                              , c = s.clientLeft || o.clientLeft || 0;
                            n = t.top + l - d,
                            i = t.left + _ - c
                        }
                        return {
                            top: Math.round(n),
                            left: Math.round(i)
                        }
                    },
                    getOffset: function(e) {
                        return e.getBoundingClientRect ? this.getOffsetRect(e) : this.getOffsetSum(e)
                    },
                    closest: function(e, t) {
                        return e && t ? h(e, t) : null
                    },
                    insertAfter: function(e, t) {
                        t.nextSibling ? t.parentNode.insertBefore(e, t.nextSibling) : t.parentNode.appendChild(e)
                    }
                },
                Element.prototype.closest)
                    h = function(e, t) {
                        return e.closest(t)
                    }
                    ;
                else {
                    var v = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
                    h = function(e, t) {
                        var n = e;
                        do {
                            if (v.call(n, t))
                                return n;
                            n = n.parentElement || n.parentNode
                        } while (null !== n && 1 === n.nodeType);
                        return null
                    }
                }
                s.$env = {
                    isIE: navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("Trident") >= 0,
                    isIE6: !window.XMLHttpRequest && navigator.userAgent.indexOf("MSIE") >= 0,
                    isIE7: navigator.userAgent.indexOf("MSIE 7.0") >= 0 && navigator.userAgent.indexOf("Trident") < 0,
                    isIE8: navigator.userAgent.indexOf("MSIE 8.0") >= 0 && navigator.userAgent.indexOf("Trident") >= 0,
                    isOpera: navigator.userAgent.indexOf("Opera") >= 0,
                    isChrome: navigator.userAgent.indexOf("Chrome") >= 0,
                    isKHTML: navigator.userAgent.indexOf("Safari") >= 0 || navigator.userAgent.indexOf("Konqueror") >= 0,
                    isFF: navigator.userAgent.indexOf("Firefox") >= 0,
                    isIPad: navigator.userAgent.search(/iPad/gi) >= 0,
                    isEdge: -1 != navigator.userAgent.indexOf("Edge")
                },
                s.$ajax = {
                    _obj: s,
                    cache: !0,
                    method: "get",
                    parse: function(e) {
                        return "string" != typeof e ? e : (e = e.replace(/^[\s]+/, ""),
                        window.DOMParser && !s.$env.isIE ? t = (new window.DOMParser).parseFromString(e, "text/xml") : window.ActiveXObject !== window.undefined && ((t = new window.ActiveXObject("Microsoft.XMLDOM")).async = "false",
                        t.loadXML(e)),
                        t);
                        var t
                    },
                    xmltop: function(e, t, n) {
                        if (void 0 === t.status || t.status < 400) {
                            var i = t.responseXML ? t.responseXML || t : this.parse(t.responseText || t);
                            if (i && null !== i.documentElement && !i.getElementsByTagName("parsererror").length)
                                return i.getElementsByTagName(e)[0]
                        }
                        return -1 !== n && this._obj.callEvent("onLoadXMLError", ["Incorrect XML", arguments[1], n]),
                        document.createElement("DIV")
                    },
                    xpath: function(e, t) {
                        if (t.nodeName || (t = t.responseXML || t),
                        s.$env.isIE)
                            return t.selectNodes(e) || [];
                        for (var n, i = [], a = (t.ownerDocument || t).evaluate(e, t, null, XPathResult.ANY_TYPE, null); n = a.iterateNext(); )
                            i.push(n);
                        return i
                    },
                    query: function(e) {
                        this._call(e.method || "GET", e.url, e.data || "", e.async || !0, e.callback, null, e.headers)
                    },
                    get: function(e, t) {
                        this._call("GET", e, null, !0, t)
                    },
                    getSync: function(e) {
                        return this._call("GET", e, null, !1)
                    },
                    put: function(e, t, n) {
                        this._call("PUT", e, t, !0, n)
                    },
                    del: function(e, t, n) {
                        this._call("DELETE", e, t, !0, n)
                    },
                    post: function(e, t, n) {
                        1 == arguments.length ? t = "" : 2 != arguments.length || "function" != typeof t && "function" != typeof window[t] ? t = String(t) : (n = t,
                        t = ""),
                        this._call("POST", e, t, !0, n)
                    },
                    postSync: function(e, t) {
                        return t = null === t ? "" : String(t),
                        this._call("POST", e, t, !1)
                    },
                    getLong: function(e, t) {
                        this._call("GET", e, null, !0, t, {
                            url: e
                        })
                    },
                    postLong: function(e, t, n) {
                        2 != arguments.length || "function" != typeof t && (window[t],
                        0) || (n = t,
                        t = ""),
                        this._call("POST", e, t, !0, n, {
                            url: e,
                            postData: t
                        })
                    },
                    _call: function(e, t, n, i, a, r, o) {
                        var s = this._obj
                          , l = window.XMLHttpRequest && !s.$env.isIE ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                          , _ = null !== navigator.userAgent.match(/AppleWebKit/) && null !== navigator.userAgent.match(/Qt/) && null !== navigator.userAgent.match(/Safari/);
                        if (i && (l.onreadystatechange = function() {
                            if (4 == l.readyState || _ && 3 == l.readyState) {
                                if ((200 != l.status || "" === l.responseText) && !s.callEvent("onAjaxError", [l]))
                                    return;
                                window.setTimeout((function() {
                                    "function" == typeof a && a.apply(window, [{
                                        xmlDoc: l,
                                        filePath: t
                                    }]),
                                    r && (void 0 !== r.postData ? this.postLong(r.url, r.postData, a) : this.getLong(r.url, a)),
                                    a = null,
                                    l = null
                                }
                                ), 1)
                            }
                        }
                        ),
                        "GET" != e || this.cache || (t += (t.indexOf("?") >= 0 ? "&" : "?") + "dhxr" + (new Date).getTime() + "=1"),
                        l.open(e, t, i),
                        o)
                            for (var d in o)
                                l.setRequestHeader(d, o[d]);
                        else
                            "POST" == e.toUpperCase() || "PUT" == e || "DELETE" == e ? l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") : "GET" == e && (n = null);
                        if (l.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        l.send(n),
                        !i)
                            return {
                                xmlDoc: l,
                                filePath: t
                            }
                    },
                    urlSeparator: function(e) {
                        return -1 != e.indexOf("?") ? "&" : "?"
                    }
                };
                var m, g, y = function(e, t) {
                    for (var n = "var temp=date.match(/[a-zA-Z]+|[0-9]+/g);", i = e.match(/%[a-zA-Z]/g), a = 0; a < i.length; a++)
                        switch (i[a]) {
                        case "%j":
                        case "%d":
                            n += "set[2]=temp[" + a + "]||1;";
                            break;
                        case "%n":
                        case "%m":
                            n += "set[1]=(temp[" + a + "]||1)-1;";
                            break;
                        case "%y":
                            n += "set[0]=temp[" + a + "]*1+(temp[" + a + "]>50?1900:2000);";
                            break;
                        case "%g":
                        case "%G":
                        case "%h":
                        case "%H":
                            n += "set[3]=temp[" + a + "]||0;";
                            break;
                        case "%i":
                            n += "set[4]=temp[" + a + "]||0;";
                            break;
                        case "%Y":
                            n += "set[0]=temp[" + a + "]||0;";
                            break;
                        case "%a":
                        case "%A":
                            n += "set[3]=set[3]%12+((temp[" + a + "]||'').toLowerCase()=='am'?0:12);";
                            break;
                        case "%s":
                            n += "set[5]=temp[" + a + "]||0;";
                            break;
                        case "%M":
                            n += "set[1]=this.locale.date.month_short_hash[temp[" + a + "]]||0;";
                            break;
                        case "%F":
                            n += "set[1]=this.locale.date.month_full_hash[temp[" + a + "]]||0;"
                        }
                    var r = "set[0],set[1],set[2],set[3],set[4],set[5]";
                    return t && (r = " Date.UTC(" + r + ")"),
                    new Function("date","var set=[0,0,1,0,0,0]; " + n + " return new Date(" + r + ");")
                };
                s.date = {
                    init: function() {
                        for (var e = s.locale.date.month_short, t = s.locale.date.month_short_hash = {}, n = 0; n < e.length; n++)
                            t[e[n]] = n;
                        for (e = s.locale.date.month_full,
                        t = s.locale.date.month_full_hash = {},
                        n = 0; n < e.length; n++)
                            t[e[n]] = n
                    },
                    _bind_host_object: function(e) {
                        return e.bind ? e.bind(s) : function() {
                            return e.apply(s, arguments)
                        }
                    },
                    date_part: function(e) {
                        var t = new Date(e);
                        return e.setHours(0),
                        e.setMinutes(0),
                        e.setSeconds(0),
                        e.setMilliseconds(0),
                        e.getHours() && (e.getDate() < t.getDate() || e.getMonth() < t.getMonth() || e.getFullYear() < t.getFullYear()) && e.setTime(e.getTime() + 36e5 * (24 - e.getHours())),
                        e
                    },
                    time_part: function(e) {
                        return (e.valueOf() / 1e3 - 60 * e.getTimezoneOffset()) % 86400
                    },
                    week_start: function(e) {
                        var t = e.getDay();
                        return s.config.start_on_monday && (0 === t ? t = 6 : t--),
                        this.date_part(this.add(e, -1 * t, "day"))
                    },
                    month_start: function(e) {
                        return e.setDate(1),
                        this.date_part(e)
                    },
                    year_start: function(e) {
                        return e.setMonth(0),
                        this.month_start(e)
                    },
                    day_start: function(e) {
                        return this.date_part(e)
                    },
                    _add_days: function(e, t) {
                        var n = new Date(e.valueOf());
                        if (n.setDate(n.getDate() + t),
                        t == Math.round(t) && t > 0) {
                            var i = (+n - +e) % 864e5;
                            if (i && e.getTimezoneOffset() == n.getTimezoneOffset()) {
                                var a = i / 36e5;
                                n.setTime(n.getTime() + 60 * (24 - a) * 60 * 1e3)
                            }
                        }
                        return t >= 0 && !e.getHours() && n.getHours() && (n.getDate() < e.getDate() || n.getMonth() < e.getMonth() || n.getFullYear() < e.getFullYear()) && n.setTime(n.getTime() + 36e5 * (24 - n.getHours())),
                        n
                    },
                    add: function(e, t, n) {
                        var i = new Date(e.valueOf());
                        switch (n) {
                        case "day":
                            i = s.date._add_days(i, t);
                            break;
                        case "week":
                            i = s.date._add_days(i, 7 * t);
                            break;
                        case "month":
                            i.setMonth(i.getMonth() + t);
                            break;
                        case "year":
                            i.setYear(i.getFullYear() + t);
                            break;
                        case "hour":
                            i.setTime(i.getTime() + 60 * t * 60 * 1e3);
                            break;
                        case "minute":
                            i.setTime(i.getTime() + 60 * t * 1e3);
                            break;
                        default:
                            return s.date["add_" + n](e, t, n)
                        }
                        return i
                    },
                    to_fixed: function(e) {
                        return e < 10 ? "0" + e : e
                    },
                    copy: function(e) {
                        return new Date(e.valueOf())
                    },
                    date_to_str: function(e, t) {
                        e = e.replace(/%[a-zA-Z]/g, (function(e) {
                            switch (e) {
                            case "%d":
                                return '"+this.date.to_fixed(date.getDate())+"';
                            case "%m":
                                return '"+this.date.to_fixed((date.getMonth()+1))+"';
                            case "%j":
                                return '"+date.getDate()+"';
                            case "%n":
                                return '"+(date.getMonth()+1)+"';
                            case "%y":
                                return '"+this.date.to_fixed(date.getFullYear()%100)+"';
                            case "%Y":
                                return '"+date.getFullYear()+"';
                            case "%D":
                                return '"+this.locale.date.day_short[date.getDay()]+"';
                            case "%l":
                                return '"+this.locale.date.day_full[date.getDay()]+"';
                            case "%M":
                                return '"+this.locale.date.month_short[date.getMonth()]+"';
                            case "%F":
                                return '"+this.locale.date.month_full[date.getMonth()]+"';
                            case "%h":
                                return '"+this.date.to_fixed((date.getHours()+11)%12+1)+"';
                            case "%g":
                                return '"+((date.getHours()+11)%12+1)+"';
                            case "%G":
                                return '"+date.getHours()+"';
                            case "%H":
                                return '"+this.date.to_fixed(date.getHours())+"';
                            case "%i":
                                return '"+this.date.to_fixed(date.getMinutes())+"';
                            case "%a":
                                return '"+(date.getHours()>11?"pm":"am")+"';
                            case "%A":
                                return '"+(date.getHours()>11?"PM":"AM")+"';
                            case "%s":
                                return '"+this.date.to_fixed(date.getSeconds())+"';
                            case "%W":
                                return '"+this.date.to_fixed(this.date.getISOWeek(date))+"';
                            default:
                                return e
                            }
                        }
                        )),
                        t && (e = e.replace(/date\.get/g, "date.getUTC"));
                        var n = new Function("date",'return "' + e + '";');
                        return s.date._bind_host_object(n)
                    },
                    str_to_date: function(e, t, n) {
                        var i = y(e, t)
                          , a = /^[0-9]{4}(\-|\/)[0-9]{2}(\-|\/)[0-9]{2} ?(([0-9]{1,2}:[0-9]{1,2})(:[0-9]{1,2})?)?$/
                          , r = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4} ?(([0-9]{1,2}:[0-9]{2})(:[0-9]{1,2})?)?$/
                          , o = /^[0-9]{2}\-[0-9]{2}\-[0-9]{4} ?(([0-9]{1,2}:[0-9]{1,2})(:[0-9]{1,2})?)?$/
                          , l = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/
                          , _ = y("%Y-%m-%d %H:%i:%s", t)
                          , d = y("%m/%d/%Y %H:%i:%s", t)
                          , c = y("%d-%m-%Y %H:%i:%s", t);
                        return function(e) {
                            if (!n && !s.config.parse_exact_format) {
                                if (e && e.getISOWeek)
                                    return new Date(e);
                                if ("number" == typeof e)
                                    return new Date(e);
                                if (function(e) {
                                    return a.test(String(e))
                                }(e))
                                    return _(e);
                                if (function(e) {
                                    return r.test(String(e))
                                }(e))
                                    return d(e);
                                if (function(e) {
                                    return o.test(String(e))
                                }(e))
                                    return c(e);
                                if (function(e) {
                                    return l.test(e)
                                }(e))
                                    return new Date(e)
                            }
                            return i.call(s, e)
                        }
                    },
                    getISOWeek: function(e) {
                        if (!e)
                            return !1;
                        var t = (e = this.date_part(new Date(e))).getDay();
                        0 === t && (t = 7);
                        var n = new Date(e.valueOf());
                        n.setDate(e.getDate() + (4 - t));
                        var i = n.getFullYear()
                          , a = Math.round((n.getTime() - new Date(i,0,1).getTime()) / 864e5);
                        return 1 + Math.floor(a / 7)
                    },
                    getUTCISOWeek: function(e) {
                        return this.getISOWeek(this.convert_to_utc(e))
                    },
                    convert_to_utc: function(e) {
                        return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds())
                    }
                },
                s.locale = {
                    date: {
                        month_full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        month_short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        day_full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        day_short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                    },
                    labels: {
                        dhx_cal_today_button: "Today",
                        day_tab: "Day",
                        week_tab: "Week",
                        month_tab: "Month",
                        new_event: "New event",
                        icon_save: "Save",
                        icon_cancel: "Cancel",
                        icon_details: "Details",
                        icon_edit: "Edit",
                        icon_delete: "Delete",
                        confirm_closing: "",
                        confirm_deleting: "Event will be deleted permanently, are you sure?",
                        section_description: "Description",
                        section_time: "Time period",
                        full_day: "Full day",
                        confirm_recurring: "Do you want to edit the whole set of repeated events?",
                        section_recurring: "Repeat event",
                        button_recurring: "Disabled",
                        button_recurring_open: "Enabled",
                        button_edit_series: "Edit series",
                        button_edit_occurrence: "Edit occurrence",
                        agenda_tab: "Agenda",
                        date: "Date",
                        description: "Description",
                        year_tab: "Year",
                        week_agenda_tab: "Agenda",
                        grid_tab: "Grid",
                        drag_to_create: "Drag to create",
                        drag_to_move: "Drag to move",
                        message_ok: "OK",
                        message_cancel: "Cancel",
                        next: "Next",
                        prev: "Previous",
                        year: "Year",
                        month: "Month",
                        day: "Day",
                        hour: "Hour",
                        minute: "Minute",
                        repeat_radio_day: "Daily",
                        repeat_radio_week: "Weekly",
                        repeat_radio_month: "Monthly",
                        repeat_radio_year: "Yearly",
                        repeat_radio_day_type: "Every",
                        repeat_text_day_count: "day",
                        repeat_radio_day_type2: "Every workday",
                        repeat_week: " Repeat every",
                        repeat_text_week_count: "week next days:",
                        repeat_radio_month_type: "Repeat",
                        repeat_radio_month_start: "On",
                        repeat_text_month_day: "day every",
                        repeat_text_month_count: "month",
                        repeat_text_month_count2_before: "every",
                        repeat_text_month_count2_after: "month",
                        repeat_year_label: "On",
                        select_year_day2: "of",
                        repeat_text_year_day: "day",
                        select_year_month: "month",
                        repeat_radio_end: "No end date",
                        repeat_text_occurences_count: "occurrences",
                        repeat_radio_end2: "After",
                        repeat_radio_end3: "End by",
                        month_for_recurring: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        day_for_recurring: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    }
                },
                s.config = {
                    default_date: "%j %M %Y",
                    month_date: "%F %Y",
                    load_date: "%Y-%m-%d",
                    week_date: "%l",
                    day_date: "%D, %F %j",
                    hour_date: "%H:%i",
                    month_day: "%d",
                    date_format: "%Y-%m-%d %H:%i",
                    api_date: "%d-%m-%Y %H:%i",
                    parse_exact_format: !1,
                    preserve_length: !0,
                    time_step: 5,
                    start_on_monday: !0,
                    first_hour: 0,
                    last_hour: 24,
                    readonly: !1,
                    drag_resize: !0,
                    drag_move: !0,
                    drag_create: !0,
                    drag_event_body: !0,
                    dblclick_create: !0,
                    edit_on_create: !0,
                    details_on_create: !1,
                    header: null,
                    resize_month_events: !1,
                    resize_month_timed: !1,
                    responsive_lightbox: !1,
                    rtl: !1,
                    cascade_event_display: !1,
                    cascade_event_count: 4,
                    cascade_event_margin: 30,
                    multi_day: !0,
                    multi_day_height_limit: 0,
                    drag_lightbox: !0,
                    preserve_scroll: !0,
                    select: !0,
                    server_utc: !1,
                    touch: !0,
                    touch_tip: !0,
                    touch_drag: 500,
                    touch_swipe_dates: !1,
                    quick_info_detached: !0,
                    positive_closing: !1,
                    drag_highlight: !0,
                    limit_drag_out: !1,
                    icons_edit: ["icon_save", "icon_cancel"],
                    icons_select: ["icon_details", "icon_edit", "icon_delete"],
                    buttons_left: ["dhx_save_btn", "dhx_cancel_btn"],
                    buttons_right: ["dhx_delete_btn"],
                    lightbox: {
                        sections: [{
                            name: "description",
                            map_to: "text",
                            type: "textarea",
                            focus: !0
                        }, {
                            name: "time",
                            height: 72,
                            type: "time",
                            map_to: "auto"
                        }]
                    },
                    highlight_displayed_event: !0,
                    left_border: !1,
                    ajax_error: "alert",
                    delay_render: 0,
                    timeline_swap_resize: !0,
                    wai_aria_attributes: !0,
                    wai_aria_application_role: !0
                },
                s.config.buttons_left.$inital = s.config.buttons_left.join(),
                s.config.buttons_right.$inital = s.config.buttons_right.join(),
                s._helpers = {
                    parseDate: function(e) {
                        return (s.templates.xml_date || s.templates.parse_date)(e)
                    },
                    formatDate: function(e) {
                        return (s.templates.xml_format || s.templates.format_date)(e)
                    }
                },
                s.templates = {},
                s.init_templates = function() {
                    var e = s.locale.labels;
                    e.dhx_save_btn = e.icon_save,
                    e.dhx_cancel_btn = e.icon_cancel,
                    e.dhx_delete_btn = e.icon_delete;
                    var t = s.date.date_to_str
                      , n = s.config;
                    (function(e, t) {
                        for (var n in t)
                            e[n] || (e[n] = t[n])
                    }
                    )(s.templates, {
                        day_date: t(n.default_date),
                        month_date: t(n.month_date),
                        week_date: function(e, t) {
                            return n.rtl ? s.templates.day_date(s.date.add(t, -1, "day")) + " &ndash; " + s.templates.day_date(e) : s.templates.day_date(e) + " &ndash; " + s.templates.day_date(s.date.add(t, -1, "day"))
                        },
                        day_scale_date: t(n.default_date),
                        month_scale_date: t(n.week_date),
                        week_scale_date: t(n.day_date),
                        hour_scale: t(n.hour_date),
                        time_picker: t(n.hour_date),
                        event_date: t(n.hour_date),
                        month_day: t(n.month_day),
                        load_format: t(n.load_date),
                        format_date: t(n.date_format, n.server_utc),
                        parse_date: s.date.str_to_date(n.date_format, n.server_utc),
                        api_date: s.date.str_to_date(n.api_date, !1, !1),
                        event_header: function(e, t, n) {
                            return s.templates.event_date(e) + " - " + s.templates.event_date(t)
                        },
                        event_text: function(e, t, n) {
                            return n.text
                        },
                        event_class: function(e, t, n) {
                            return ""
                        },
                        month_date_class: function(e) {
                            return ""
                        },
                        week_date_class: function(e) {
                            return ""
                        },
                        event_bar_date: function(e, t, n) {
                            return s.templates.event_date(e) + " "
                        },
                        event_bar_text: function(e, t, n) {
                            return n.text
                        },
                        month_events_link: function(e, t) {
                            return "<a>View more(" + t + " events)</a>"
                        },
                        drag_marker_class: function(e, t, n) {
                            return ""
                        },
                        drag_marker_content: function(e, t, n) {
                            return ""
                        },
                        tooltip_date_format: s.date.date_to_str("%Y-%m-%d %H:%i"),
                        tooltip_text: function(e, t, n) {
                            return "<b>Event:</b> " + n.text + "<br/><b>Start date:</b> " + s.templates.tooltip_date_format(e) + "<br/><b>End date:</b> " + s.templates.tooltip_date_format(t)
                        }
                    }),
                    this.callEvent("onTemplatesReady", [])
                }
                ,
                s.uid = function() {
                    return this._seed || (this._seed = (new Date).valueOf()),
                    this._seed++
                }
                ,
                s._events = {},
                s.clearAll = function() {
                    this._events = {},
                    this._loaded = {},
                    this._edit_id = null,
                    this._select_id = null,
                    this._drag_id = null,
                    this._drag_mode = null,
                    this._drag_pos = null,
                    this._new_event = null,
                    this.clear_view(),
                    this.callEvent("onClearAll", [])
                }
                ,
                s.addEvent = function(e, t, n, i, a) {
                    if (!arguments.length)
                        return this.addEventNow();
                    var r = e;
                    1 != arguments.length && ((r = a || {}).start_date = e,
                    r.end_date = t,
                    r.text = n,
                    r.id = i),
                    r.id = r.id || s.uid(),
                    r.text = r.text || "",
                    "string" == typeof r.start_date && (r.start_date = this.templates.api_date(r.start_date)),
                    "string" == typeof r.end_date && (r.end_date = this.templates.api_date(r.end_date));
                    var o = 6e4 * (this.config.event_duration || this.config.time_step);
                    r.start_date.valueOf() == r.end_date.valueOf() && r.end_date.setTime(r.end_date.valueOf() + o),
                    r._timed = this.isOneDayEvent(r);
                    var l = !this._events[r.id];
                    return this._events[r.id] = r,
                    this.event_updated(r),
                    this._loading || this.callEvent(l ? "onEventAdded" : "onEventChanged", [r.id, r]),
                    r.id
                }
                ,
                s.deleteEvent = function(e, t) {
                    var n = this._events[e];
                    (t || this.callEvent("onBeforeEventDelete", [e, n]) && this.callEvent("onConfirmedBeforeEventDelete", [e, n])) && (n && (this._select_id = null,
                    delete this._events[e],
                    this.event_updated(n),
                    this._drag_id == n.id && (this._drag_id = null,
                    this._drag_mode = null,
                    this._drag_pos = null)),
                    this.callEvent("onEventDeleted", [e, n]))
                }
                ,
                s.getEvent = function(e) {
                    return this._events[e]
                }
                ,
                s.setEvent = function(e, t) {
                    t.id || (t.id = e),
                    this._events[e] = t
                }
                ,
                s.for_rendered = function(e, t) {
                    for (var n = this._rendered.length - 1; n >= 0; n--)
                        this._rendered[n].getAttribute("event_id") == e && t(this._rendered[n], n)
                }
                ,
                s.changeEventId = function(e, t) {
                    if (e != t) {
                        var n = this._events[e];
                        n && (n.id = t,
                        this._events[t] = n,
                        delete this._events[e]),
                        this.for_rendered(e, (function(e) {
                            e.setAttribute("event_id", t)
                        }
                        )),
                        this._select_id == e && (this._select_id = t),
                        this._edit_id == e && (this._edit_id = t),
                        this.callEvent("onEventIdChange", [e, t])
                    }
                }
                ,
                function() {
                    for (var e = ["text", "Text", "start_date", "StartDate", "end_date", "EndDate"], t = function(e) {
                        return function(t) {
                            return s.getEvent(t)[e]
                        }
                    }, n = function(e) {
                        return function(t, n) {
                            var i = s.getEvent(t);
                            i[e] = n,
                            i._changed = !0,
                            i._timed = this.isOneDayEvent(i),
                            s.event_updated(i, !0)
                        }
                    }, i = 0; i < e.length; i += 2)
                        s["getEvent" + e[i + 1]] = t(e[i]),
                        s["setEvent" + e[i + 1]] = n(e[i])
                }(),
                s.event_updated = function(e, t) {
                    this.is_visible_events(e) ? this.render_view_data() : this.clear_event(e.id)
                }
                ,
                s.is_visible_events = function(e) {
                    if (e.start_date.valueOf() < this._max_date.valueOf() && this._min_date.valueOf() < e.end_date.valueOf()) {
                        var t = e.start_date.getHours()
                          , n = e.end_date.getHours() + e.end_date.getMinutes() / 60
                          , i = this.config.last_hour
                          , a = this.config.first_hour;
                        return !(!this._table_view && (n > i || n < a) && (t >= i || t < a) && !((e.end_date.valueOf() - e.start_date.valueOf()) / 36e5 > 24 - (this.config.last_hour - this.config.first_hour) || t < i && n >= a))
                    }
                    return !1
                }
                ,
                s.isOneDayEvent = function(e) {
                    var t = new Date(e.end_date.valueOf() - 1);
                    return e.start_date.getFullYear() === t.getFullYear() && e.start_date.getMonth() === t.getMonth() && e.start_date.getDate() === t.getDate() && e.end_date.valueOf() - e.start_date.valueOf() < 864e5
                }
                ,
                s.get_visible_events = function(e) {
                    var t = [];
                    for (var n in this._events)
                        this.is_visible_events(this._events[n]) && (e && !this._events[n]._timed || this.filter_event(n, this._events[n]) && t.push(this._events[n]));
                    return t
                }
                ,
                s.filter_event = function(e, t) {
                    var n = this["filter_" + this._mode];
                    return !n || n(e, t)
                }
                ,
                s._is_main_area_event = function(e) {
                    return !!e._timed
                }
                ,
                s.render_view_data = function(e, t) {
                    var n = !1;
                    if (!e) {
                        if (n = !0,
                        this._not_render)
                            return void (this._render_wait = !0);
                        this._render_wait = !1,
                        this.clear_view(),
                        e = this.get_visible_events(!(this._table_view || this.config.multi_day))
                    }
                    for (var i = 0, a = e.length; i < a; i++)
                        this._recalculate_timed(e[i]);
                    if (this.config.multi_day && !this._table_view) {
                        var r = []
                          , o = [];
                        for (i = 0; i < e.length; i++)
                            this._is_main_area_event(e[i]) ? r.push(e[i]) : o.push(e[i]);
                        if (!this._els.dhx_multi_day) {
                            var l = s._commonErrorMessages.unknownView(this._mode);
                            throw new Error(l)
                        }
                        this._rendered_location = this._els.dhx_multi_day[0],
                        this._table_view = !0,
                        this.render_data(o, t),
                        this._table_view = !1,
                        this._rendered_location = this._els.dhx_cal_data[0],
                        this._table_view = !1,
                        this.render_data(r, t)
                    } else {
                        var _ = document.createDocumentFragment()
                          , d = this._els.dhx_cal_data[0];
                        this._rendered_location = _,
                        this.render_data(e, t),
                        d.appendChild(_),
                        this._rendered_location = d
                    }
                    n && this.callEvent("onDataRender", [])
                }
                ,
                s._view_month_day = function(e) {
                    var t = s.getActionData(e).date;
                    s.callEvent("onViewMoreClick", [t]) && s.setCurrentView(t, "day")
                }
                ,
                s._render_month_link = function(e) {
                    for (var t = this._rendered_location, n = this._lame_clone(e), i = e._sday; i < e._eday; i++) {
                        n._sday = i,
                        n._eday = i + 1;
                        var a = s.date
                          , r = s._min_date;
                        r = a.add(r, n._sweek, "week"),
                        r = a.add(r, n._sday, "day");
                        var o = s.getEvents(r, a.add(r, 1, "day")).length
                          , l = this._get_event_bar_pos(n)
                          , _ = l.x2 - l.x
                          , d = document.createElement("div");
                        d.onclick = function(e) {
                            s._view_month_day(e || event)
                        }
                        ,
                        d.className = "dhx_month_link",
                        d.style.top = l.y + "px",
                        d.style.left = l.x + "px",
                        d.style.width = _ + "px",
                        d.innerHTML = s.templates.month_events_link(r, o),
                        this._rendered.push(d),
                        t.appendChild(d)
                    }
                }
                ,
                s._recalculate_timed = function(e) {
                    var t;
                    e && ((t = "object" != typeof e ? this._events[e] : e) && (t._timed = s.isOneDayEvent(t)))
                }
                ,
                s.attachEvent("onEventChanged", s._recalculate_timed),
                s.attachEvent("onEventAdded", s._recalculate_timed),
                s.render_data = function(e, t) {
                    e = this._pre_render_events(e, t);
                    for (var n = {}, i = 0; i < e.length; i++)
                        if (this._table_view)
                            if ("month" != s._mode)
                                this.render_event_bar(e[i]);
                            else {
                                var a = s.config.max_month_events;
                                a !== 1 * a || e[i]._sorder < a ? this.render_event_bar(e[i]) : void 0 !== a && e[i]._sorder == a && s._render_month_link(e[i])
                            }
                        else {
                            var r = e[i]
                              , o = s.locate_holder(r._sday);
                            if (!o)
                                continue;
                            n[r._sday] || (n[r._sday] = {
                                real: o,
                                buffer: document.createDocumentFragment(),
                                width: o.clientWidth
                            });
                            var l = n[r._sday];
                            this.render_event(r, l.buffer, l.width)
                        }
                    for (var i in n) {
                        (l = n[i]).real && l.buffer && l.real.appendChild(l.buffer)
                    }
                }
                ,
                s._get_first_visible_cell = function(e) {
                    for (var t = 0; t < e.length; t++)
                        if (-1 == (e[t].className || "").indexOf("dhx_scale_ignore"))
                            return e[t];
                    return e[0]
                }
                ,
                s._pre_render_events = function(e, t) {
                    var n = this.xy.bar_height
                      , i = this._colsS.heights
                      , a = this._colsS.heights = [0, 0, 0, 0, 0, 0, 0]
                      , r = this._els.dhx_cal_data[0];
                    if (e = this._table_view ? this._pre_render_events_table(e, t) : this._pre_render_events_line(e, t),
                    this._table_view)
                        if (t)
                            this._colsS.heights = i;
                        else {
                            var o = r.firstChild;
                            if (o.rows) {
                                for (var l = 0; l < o.rows.length; l++) {
                                    a[l]++;
                                    var _ = o.rows[l].cells
                                      , d = this._colsS.height - this.xy.month_head_height;
                                    if (a[l] * n > d) {
                                        var c = d;
                                        1 * this.config.max_month_events !== this.config.max_month_events || a[l] <= this.config.max_month_events ? c = a[l] * n : (this.config.max_month_events + 1) * n > d && (c = (this.config.max_month_events + 1) * n);
                                        for (var h = 0; h < _.length; h++)
                                            _[h].childNodes[1].style.height = c + "px"
                                    }
                                    a[l] = (a[l - 1] || 0) + s._get_first_visible_cell(_).offsetHeight
                                }
                                if (a.unshift(0),
                                o.parentNode.offsetHeight < o.parentNode.scrollHeight && !s._colsS.scroll_fix && s.xy.scroll_width) {
                                    var u = s._colsS
                                      , f = u[u.col_length]
                                      , p = u.heights.slice();
                                    f -= s.xy.scroll_width || 0,
                                    this._calc_scale_sizes(f, this._min_date, this._max_date),
                                    s._colsS.heights = p,
                                    this.set_xy(this._els.dhx_cal_header[0], f, this.xy.scale_height),
                                    s._render_scales(this._els.dhx_cal_header[0]),
                                    s._render_month_scale(this._els.dhx_cal_data[0], this._get_timeunit_start(), this._min_date),
                                    u.scroll_fix = !0
                                }
                            } else if (e.length || "visible" != this._els.dhx_multi_day[0].style.visibility || (a[0] = -1),
                            e.length || -1 == a[0]) {
                                var v = (o.parentNode.childNodes,
                                (a[0] + 1) * n + 1)
                                  , m = v
                                  , g = v + "px";
                                this.config.multi_day_height_limit && (g = (m = Math.min(v, this.config.multi_day_height_limit)) + "px"),
                                r.style.top = this._els.dhx_cal_navline[0].offsetHeight + this._els.dhx_cal_header[0].offsetHeight + m + "px",
                                r.style.height = this._obj.offsetHeight - parseInt(r.style.top, 10) - (this.xy.margin_top || 0) + "px";
                                var y = this._els.dhx_multi_day[0];
                                y.style.height = g,
                                y.style.visibility = -1 == a[0] ? "hidden" : "visible";
                                var x = this._els.dhx_multi_day[1];
                                x.style.height = g,
                                x.style.visibility = -1 == a[0] ? "hidden" : "visible",
                                x.className = a[0] ? "dhx_multi_day_icon" : "dhx_multi_day_icon_small",
                                this._dy_shift = (a[0] + 1) * n,
                                this.config.multi_day_height_limit && (this._dy_shift = Math.min(this.config.multi_day_height_limit, this._dy_shift)),
                                a[0] = 0,
                                m != v && (r.style.top = parseInt(r.style.top) + 2 + "px",
                                y.style.overflowY = "auto",
                                x.style.position = "fixed",
                                x.style.top = "",
                                x.style.left = "")
                            }
                        }
                    return e
                }
                ,
                s._get_event_sday = function(e) {
                    var t = this.date.day_start(new Date(e.start_date));
                    return Math.round((t.valueOf() - this._min_date.valueOf()) / 864e5)
                }
                ,
                s._get_event_mapped_end_date = function(e) {
                    var t = e.end_date;
                    if (this.config.separate_short_events) {
                        var n = (e.end_date - e.start_date) / 6e4;
                        n < this._min_mapped_duration && (t = this.date.add(t, this._min_mapped_duration - n, "minute"))
                    }
                    return t
                }
                ,
                s._pre_render_events_line = function(e, t) {
                    e.sort((function(e, t) {
                        return e.start_date.valueOf() == t.start_date.valueOf() ? e.id > t.id ? 1 : -1 : e.start_date > t.start_date ? 1 : -1
                    }
                    ));
                    var n = []
                      , i = [];
                    this._min_mapped_duration = Math.ceil(60 * this.xy.min_event_height / this.config.hour_size_px);
                    for (var a = 0; a < e.length; a++) {
                        var r = e[a]
                          , o = r.start_date
                          , s = r.end_date
                          , l = o.getHours()
                          , _ = s.getHours();
                        if (r._sday = this._get_event_sday(r),
                        this._ignores[r._sday])
                            e.splice(a, 1),
                            a--;
                        else {
                            if (n[r._sday] || (n[r._sday] = []),
                            !t) {
                                r._inner = !1;
                                for (var d = n[r._sday]; d.length; ) {
                                    var c = d[d.length - 1];
                                    if (!(this._get_event_mapped_end_date(c).valueOf() <= r.start_date.valueOf()))
                                        break;
                                    d.splice(d.length - 1, 1)
                                }
                                for (var h = d.length, u = !1, f = 0; f < d.length; f++) {
                                    c = d[f];
                                    if (this._get_event_mapped_end_date(c).valueOf() <= r.start_date.valueOf()) {
                                        u = !0,
                                        r._sorder = c._sorder,
                                        h = f,
                                        r._inner = !0;
                                        break
                                    }
                                }
                                if (d.length && (d[d.length - 1]._inner = !0),
                                !u)
                                    if (d.length)
                                        if (d.length <= d[d.length - 1]._sorder) {
                                            if (d[d.length - 1]._sorder)
                                                for (f = 0; f < d.length; f++) {
                                                    for (var p = !1, v = 0; v < d.length; v++)
                                                        if (d[v]._sorder == f) {
                                                            p = !0;
                                                            break
                                                        }
                                                    if (!p) {
                                                        r._sorder = f;
                                                        break
                                                    }
                                                }
                                            else
                                                r._sorder = 0;
                                            r._inner = !0
                                        } else {
                                            var m = d[0]._sorder;
                                            for (f = 1; f < d.length; f++)
                                                d[f]._sorder > m && (m = d[f]._sorder);
                                            r._sorder = m + 1,
                                            r._inner = !1
                                        }
                                    else
                                        r._sorder = 0;
                                d.splice(h, h == d.length ? 0 : 1, r),
                                d.length > (d.max_count || 0) ? (d.max_count = d.length,
                                r._count = d.length) : r._count = r._count ? r._count : 1
                            }
                            (l < this.config.first_hour || _ >= this.config.last_hour) && (i.push(r),
                            e[a] = r = this._copy_event(r),
                            l < this.config.first_hour && (r.start_date.setHours(this.config.first_hour),
                            r.start_date.setMinutes(0)),
                            _ >= this.config.last_hour && (r.end_date.setMinutes(0),
                            r.end_date.setHours(this.config.last_hour)),
                            r.start_date > r.end_date || l == this.config.last_hour) && (e.splice(a, 1),
                            a--)
                        }
                    }
                    if (!t) {
                        for (a = 0; a < e.length; a++)
                            e[a]._count = n[e[a]._sday].max_count;
                        for (a = 0; a < i.length; a++)
                            i[a]._count = n[i[a]._sday].max_count
                    }
                    return e
                }
                ,
                s._time_order = function(e) {
                    e.sort((function(e, t) {
                        return e.start_date.valueOf() == t.start_date.valueOf() ? e._timed && !t._timed ? 1 : !e._timed && t._timed ? -1 : e.id > t.id ? 1 : -1 : e.start_date > t.start_date ? 1 : -1
                    }
                    ))
                }
                ,
                s._is_any_multiday_cell_visible = function(e, t, n) {
                    var i = this._cols.length
                      , a = !1
                      , r = e
                      , o = !0
                      , l = new Date(t);
                    for (s.date.day_start(new Date(t)).valueOf() != t.valueOf() && (l = s.date.day_start(l),
                    l = s.date.add(l, 1, "day")); r < l; ) {
                        o = !1;
                        var _ = this.locate_holder_day(r, !1, n) % i;
                        if (!this._ignores[_]) {
                            a = !0;
                            break
                        }
                        r = s.date.add(r, 1, "day")
                    }
                    return o || a
                }
                ,
                s._pre_render_events_table = function(e, t) {
                    this._time_order(e);
                    for (var n, i = [], a = [[], [], [], [], [], [], []], r = this._colsS.heights, o = this._cols.length, l = {}, _ = 0; _ < e.length; _++) {
                        var d = e[_]
                          , c = d.id;
                        l[c] || (l[c] = {
                            first_chunk: !0,
                            last_chunk: !0
                        });
                        var h = l[c]
                          , u = n || d.start_date
                          , f = d.end_date;
                        u < this._min_date && (h.first_chunk = !1,
                        u = this._min_date),
                        f > this._max_date && (h.last_chunk = !1,
                        f = this._max_date);
                        var p = this.locate_holder_day(u, !1, d);
                        if (d._sday = p % o,
                        !this._ignores[d._sday] || !d._timed) {
                            var v = this.locate_holder_day(f, !0, d) || o;
                            if (d._eday = v % o || o,
                            d._length = v - p,
                            d._sweek = Math.floor((this._correct_shift(u.valueOf(), 1) - this._min_date.valueOf()) / (864e5 * o)),
                            s._is_any_multiday_cell_visible(u, f, d)) {
                                var m, g = a[d._sweek];
                                for (m = 0; m < g.length && !(g[m]._eday <= d._sday); m++)
                                    ;
                                if (d._sorder && t || (d._sorder = m),
                                d._sday + d._length <= o)
                                    n = null,
                                    i.push(d),
                                    g[m] = d,
                                    r[d._sweek] = g.length - 1,
                                    d._first_chunk = h.first_chunk,
                                    d._last_chunk = h.last_chunk;
                                else {
                                    var y = this._copy_event(d);
                                    y.id = d.id,
                                    y._length = o - d._sday,
                                    y._eday = o,
                                    y._sday = d._sday,
                                    y._sweek = d._sweek,
                                    y._sorder = d._sorder,
                                    y.end_date = this.date.add(u, y._length, "day"),
                                    y._first_chunk = h.first_chunk,
                                    h.first_chunk && (h.first_chunk = !1),
                                    i.push(y),
                                    g[m] = y,
                                    n = y.end_date,
                                    r[d._sweek] = g.length - 1,
                                    _--
                                }
                            }
                        }
                    }
                    return i
                }
                ,
                s._copy_dummy = function() {
                    var e = new Date(this.start_date)
                      , t = new Date(this.end_date);
                    this.start_date = e,
                    this.end_date = t
                }
                ,
                s._copy_event = function(e) {
                    return this._copy_dummy.prototype = e,
                    new this._copy_dummy
                }
                ,
                s._rendered = [],
                s.clear_view = function() {
                    for (var e = 0; e < this._rendered.length; e++) {
                        var t = this._rendered[e];
                        t.parentNode && t.parentNode.removeChild(t)
                    }
                    this._rendered = []
                }
                ,
                s.updateEvent = function(e) {
                    var t = this.getEvent(e);
                    this.clear_event(e),
                    t && this.is_visible_events(t) && this.filter_event(e, t) && (this._table_view || this.config.multi_day || t._timed) && (this.config.update_render ? this.render_view_data() : "month" != this.getState().mode || this.getState().drag_id || this.isOneDayEvent(t) ? this.render_view_data([t], !0) : this.render_view_data())
                }
                ,
                s.clear_event = function(e) {
                    this.for_rendered(e, (function(e, t) {
                        e.parentNode && e.parentNode.removeChild(e),
                        s._rendered.splice(t, 1)
                    }
                    ))
                }
                ,
                s._y_from_date = function(e) {
                    var t = 60 * e.getHours() + e.getMinutes();
                    return Math.round((60 * t * 1e3 - 60 * this.config.first_hour * 60 * 1e3) * this.config.hour_size_px / 36e5) % (24 * this.config.hour_size_px)
                }
                ,
                s._calc_event_y = function(e, t) {
                    t = t || 0;
                    var n = 60 * e.start_date.getHours() + e.start_date.getMinutes()
                      , i = 60 * e.end_date.getHours() + e.end_date.getMinutes() || 60 * s.config.last_hour;
                    return {
                        top: this._y_from_date(e.start_date),
                        height: Math.max(t, (i - n) * this.config.hour_size_px / 60)
                    }
                }
                ,
                s.render_event = function(e, t, n) {
                    var i = s.xy.menu_width
                      , a = this.config.use_select_menu_space ? 0 : i;
                    if (!(e._sday < 0)) {
                        var r = s.locate_holder(e._sday);
                        if (r) {
                            t = t || r;
                            var o = this._calc_event_y(e, s.xy.min_event_height)
                              , l = o.top
                              , _ = o.height
                              , d = e._count || 1
                              , c = e._sorder || 0;
                            n = n || r.clientWidth;
                            var h = Math.floor((n - a) / d)
                              , u = c * h + 1;
                            if (e._inner || (h *= d - c),
                            this.config.cascade_event_display) {
                                var f = this.config.cascade_event_count
                                  , p = this.config.cascade_event_margin;
                                u = c % f * p;
                                var v = e._inner ? (d - c - 1) % f * p / 2 : 0;
                                h = Math.floor(n - a - u - v)
                            }
                            var m = this._render_v_bar(e, a + u, l, h, _, e._text_style, s.templates.event_header(e.start_date, e.end_date, e), s.templates.event_text(e.start_date, e.end_date, e));
                            if (this._waiAria.eventAttr(e, m),
                            this._rendered.push(m),
                            t.appendChild(m),
                            u = u + parseInt(this.config.rtl ? r.style.right : r.style.left, 10) + a,
                            this._edit_id == e.id) {
                                m.style.zIndex = 1,
                                h = Math.max(h - 4, s.xy.editor_width),
                                (m = document.createElement("div")).setAttribute("event_id", e.id),
                                this._waiAria.eventAttr(e, m),
                                m.className = "dhx_cal_event dhx_cal_editor",
                                this.config.rtl && u++,
                                this.set_xy(m, h, _ - 20, u, l + (s.xy.event_header_height || 14)),
                                e.color && (m.style.backgroundColor = e.color);
                                var g = s.templates.event_class(e.start_date, e.end_date, e);
                                g && (m.className += " " + g);
                                var y = document.createElement("div");
                                this.set_xy(y, h - 6, _ - 26),
                                y.style.cssText += ";margin:2px 2px 2px 2px;overflow:hidden;",
                                m.appendChild(y),
                                this._els.dhx_cal_data[0].appendChild(m),
                                this._rendered.push(m),
                                y.innerHTML = "<textarea class='dhx_cal_editor'>" + e.text + "</textarea>",
                                this._editor = y.querySelector("textarea"),
                                this._quirks7 && (this._editor.style.height = _ - 12 + "px"),
                                this._editor.onkeydown = function(e) {
                                    if ((e || event).shiftKey)
                                        return !0;
                                    var t = (e || event).keyCode;
                                    t == s.keys.edit_save && s.editStop(!0),
                                    t == s.keys.edit_cancel && s.editStop(!1),
                                    t != s.keys.edit_save && t != s.keys.edit_cancel || e.preventDefault && e.preventDefault()
                                }
                                ,
                                this._editor.onselectstart = function(e) {
                                    return (e || event).cancelBubble = !0,
                                    !0
                                }
                                ,
                                s._focus(this._editor, !0),
                                this._els.dhx_cal_data[0].scrollLeft = 0
                            }
                            if (0 !== this.xy.menu_width && this._select_id == e.id) {
                                this.config.cascade_event_display && this._drag_mode && (m.style.zIndex = 1);
                                for (var x, b = this.config["icons_" + (this._edit_id == e.id ? "edit" : "select")], w = "", E = e.color ? "background-color: " + e.color + ";" : "", k = e.textColor ? "color: " + e.textColor + ";" : "", D = 0; D < b.length; D++)
                                    x = this._waiAria.eventMenuAttrString(b[D]),
                                    w += "<div class='dhx_menu_icon " + b[D] + "' style='" + E + k + "' title='" + this.locale.labels[b[D]] + "'" + x + "></div>";
                                var S = this._render_v_bar(e, u - i + 1, l, i, 20 * b.length + 26 - 2, "", "<div style='" + E + k + "' class='dhx_menu_head'></div>", w, !0);
                                S.style.left = u - i + 1,
                                this._els.dhx_cal_data[0].appendChild(S),
                                this._rendered.push(S)
                            }
                            this.config.drag_highlight && this._drag_id == e.id && this.highlightEventPosition(e)
                        }
                    }
                }
                ,
                s._render_v_bar = function(e, t, n, i, a, r, o, l, _) {
                    var d = document.createElement("div")
                      , c = e.id
                      , h = _ ? "dhx_cal_event dhx_cal_select_menu" : "dhx_cal_event"
                      , u = s.getState();
                    u.drag_id == e.id && (h += " dhx_cal_event_drag"),
                    u.select_id == e.id && (h += " dhx_cal_event_selected");
                    var f = s.templates.event_class(e.start_date, e.end_date, e);
                    f && (h = h + " " + f),
                    this.config.cascade_event_display && (h += " dhx_cal_event_cascade");
                    var p = e.color ? "background-color:" + e.color + ";" : ""
                      , v = e.textColor ? "color:" + e.textColor + ";" : ""
                      , m = s._border_box_events()
                      , g = i - 2
                      , y = m ? g : i - 4
                      , x = m ? g : i - 6
                      , b = m ? g : i - (this._quirks ? 4 : 14)
                      , w = m ? g - 2 : i - 8
                      , E = m ? a - this.xy.event_header_height - 1 : a - (this._quirks ? 20 : 30) + 1
                      , k = '<div event_id="' + c + '" class="' + h + '" style="position:absolute; top:' + n + "px; " + (this.config.rtl ? "right:" : "left:") + t + "px; width:" + y + "px; height:" + a + "px;" + (r || "") + '"></div>';
                    d.innerHTML = k;
                    var D = d.cloneNode(!0).firstChild;
                    if (!_ && s.renderEvent(D, e, i, a, o, l))
                        return D;
                    D = d.firstChild;
                    var S = '<div class="dhx_event_move dhx_header" style=" width:' + x + "px;" + p + '" >&nbsp;</div>';
                    S += '<div class="dhx_event_move dhx_title" style="' + p + v + '">' + o + "</div>",
                    S += '<div class="dhx_body" style=" width:' + b + "px; height:" + E + "px;" + p + v + '">' + l + "</div>";
                    var O = "dhx_event_resize dhx_footer";
                    return (_ || !1 === e._drag_resize) && (O = "dhx_resize_denied " + O),
                    S += '<div class="' + O + '" style=" width:' + w + "px;" + (_ ? " margin-top:-1px;" : "") + p + v + '" ></div>',
                    D.innerHTML = S,
                    D
                }
                ,
                s.renderEvent = function() {
                    return !1
                }
                ,
                s.locate_holder = function(e) {
                    return "day" == this._mode ? this._els.dhx_cal_data[0].firstChild : this._els.dhx_cal_data[0].childNodes[e]
                }
                ,
                s.locate_holder_day = function(e, t) {
                    var n = Math.floor((this._correct_shift(e, 1) - this._min_date) / 864e5);
                    return t && this.date.time_part(e) && n++,
                    n
                }
                ,
                s._get_dnd_order = function(e, t, n) {
                    if (!this._drag_event)
                        return e;
                    this._drag_event._orig_sorder ? e = this._drag_event._orig_sorder : this._drag_event._orig_sorder = e;
                    for (var i = t * e; i + t > n; )
                        e--,
                        i -= t;
                    return Math.max(e, 0)
                }
                ,
                s._get_event_bar_pos = function(e) {
                    var t = this.config.rtl
                      , n = this._colsS
                      , i = n[e._sday]
                      , a = n[e._eday];
                    t && (i = n[n.col_length] - n[e._eday] + n[0],
                    a = n[n.col_length] - n[e._sday] + n[0]),
                    a == i && (a = n[e._eday + 1]);
                    var r = this.xy.bar_height
                      , o = e._sorder;
                    if (e.id == this._drag_id) {
                        var l = n.heights[e._sweek + 1] - n.heights[e._sweek] - this.xy.month_head_height;
                        o = s._get_dnd_order(o, r, l)
                    }
                    var _ = o * r;
                    return {
                        x: i,
                        x2: a,
                        y: n.heights[e._sweek] + (n.height ? this.xy.month_scale_height + 2 : 2) + _
                    }
                }
                ,
                s.render_event_bar = function(e) {
                    var t = this._rendered_location
                      , n = this._get_event_bar_pos(e)
                      , i = n.y
                      , a = n.x
                      , r = n.x2
                      , o = "";
                    if (r) {
                        var l = s.config.resize_month_events && "month" == this._mode && (!e._timed || s.config.resize_month_timed)
                          , _ = document.createElement("div")
                          , d = e.hasOwnProperty("_first_chunk") && e._first_chunk
                          , c = e.hasOwnProperty("_last_chunk") && e._last_chunk
                          , h = l && (e._timed || d)
                          , u = l && (e._timed || c)
                          , f = !0
                          , p = "dhx_cal_event_clear";
                        e._timed && !l || (f = !1,
                        p = "dhx_cal_event_line"),
                        d && (p += " dhx_cal_event_line_start"),
                        c && (p += " dhx_cal_event_line_end"),
                        h && (o += "<div class='dhx_event_resize dhx_event_resize_start'></div>"),
                        u && (o += "<div class='dhx_event_resize dhx_event_resize_end'></div>");
                        var v = s.templates.event_class(e.start_date, e.end_date, e);
                        v && (p += " " + v);
                        var m = e.color ? "background:" + e.color + ";" : ""
                          , g = ["position:absolute", "top:" + i + "px", "left:" + a + "px", "width:" + (r - a - 3 - (f ? 1 : 0)) + "px", e.textColor ? "color:" + e.textColor + ";" : "", m, e._text_style || ""].join(";")
                          , y = "<div event_id='" + e.id + "' class='" + p + "' style='" + g + "'" + this._waiAria.eventBarAttrString(e) + ">";
                        l && (y += o),
                        "month" == s.getState().mode && (e = s.getEvent(e.id)),
                        e._timed && (y += s.templates.event_bar_date(e.start_date, e.end_date, e)),
                        y += s.templates.event_bar_text(e.start_date, e.end_date, e) + "</div>",
                        y += "</div>",
                        _.innerHTML = y,
                        this._rendered.push(_.firstChild),
                        t.appendChild(_.firstChild)
                    }
                }
                ,
                s._locate_event = function(e) {
                    for (var t = null; e && !t && e.getAttribute; )
                        t = e.getAttribute("event_id"),
                        e = e.parentNode;
                    return t
                }
                ,
                s._locate_css = function(e, t, n) {
                    void 0 === n && (n = !0);
                    for (var i = e.target || e.srcElement, a = ""; i; ) {
                        if (a = s._getClassName(i)) {
                            var r = a.indexOf(t);
                            if (r >= 0) {
                                if (!n)
                                    return i;
                                var o = 0 === r || !s._trim(a.charAt(r - 1))
                                  , l = r + t.length >= a.length || !s._trim(a.charAt(r + t.length));
                                if (o && l)
                                    return i
                            }
                        }
                        i = i.parentNode
                    }
                    return null
                }
                ,
                s.edit = function(e) {
                    this._edit_id != e && (this.editStop(!1, e),
                    this._edit_id = e,
                    this.updateEvent(e))
                }
                ,
                s.editStop = function(e, t) {
                    if (!t || this._edit_id != t) {
                        var n = this.getEvent(this._edit_id);
                        n && (e && (n.text = this._editor.value),
                        this._edit_id = null,
                        this._editor = null,
                        this.updateEvent(n.id),
                        this._edit_stop_event(n, e))
                    }
                }
                ,
                s._edit_stop_event = function(e, t) {
                    this._new_event ? (t ? this.callEvent("onEventAdded", [e.id, e]) : e && this.deleteEvent(e.id, !0),
                    this._new_event = null) : t && this.callEvent("onEventChanged", [e.id, e])
                }
                ,
                s.getEvents = function(e, t) {
                    var n = [];
                    for (var i in this._events) {
                        var a = this._events[i];
                        a && (!e && !t || a.start_date < t && a.end_date > e) && n.push(a)
                    }
                    return n
                }
                ,
                s.getRenderedEvent = function(e) {
                    if (e) {
                        for (var t = s._rendered, n = 0; n < t.length; n++) {
                            var i = t[n];
                            if (i.getAttribute("event_id") == e)
                                return i
                        }
                        return null
                    }
                }
                ,
                s.showEvent = function(e, t) {
                    var n = "number" == typeof e || "string" == typeof e ? s.getEvent(e) : e;
                    if (t = t || s._mode,
                    n && (!this.checkEvent("onBeforeEventDisplay") || this.callEvent("onBeforeEventDisplay", [n, t]))) {
                        var i = s.config.scroll_hour;
                        s.config.scroll_hour = n.start_date.getHours();
                        var a = s.config.preserve_scroll;
                        s.config.preserve_scroll = !1;
                        var r = n.color
                          , o = n.textColor;
                        if (s.config.highlight_displayed_event && (n.color = s.config.displayed_event_color,
                        n.textColor = s.config.displayed_event_text_color),
                        s.setCurrentView(new Date(n.start_date), t),
                        n.color = r,
                        n.textColor = o,
                        s.config.scroll_hour = i,
                        s.config.preserve_scroll = a,
                        s.matrix && s.matrix[t]) {
                            var l = s.getView()
                              , _ = l.y_property
                              , d = s.getEvent(n.id);
                            if (d) {
                                var c = l.posFromSection(d[_])
                                  , h = l.posFromDate(d.start_date)
                                  , u = s.$container.querySelector(".dhx_timeline_data_wrapper");
                                h -= (u.offsetWidth - l.dx) / 2,
                                c = c - u.offsetHeight / 2 + l.dy / 2,
                                l.scrollTo({
                                    left: h,
                                    top: c
                                })
                            }
                        }
                        s.callEvent("onAfterEventDisplay", [n, t])
                    }
                }
                ,
                s._append_drag_marker = function(e) {
                    if (!e.parentNode) {
                        var t = s._els.dhx_cal_data[0].lastChild
                          , n = s._getClassName(t);
                        n.indexOf("dhx_scale_holder") < 0 && t.previousSibling && (t = t.previousSibling),
                        n = s._getClassName(t),
                        t && 0 === n.indexOf("dhx_scale_holder") && t.appendChild(e)
                    }
                }
                ,
                s._update_marker_position = function(e, t) {
                    var n = s._calc_event_y(t, 0);
                    e.style.top = n.top + "px",
                    e.style.height = n.height + "px"
                }
                ,
                s.highlightEventPosition = function(e) {
                    var t = document.createElement("div");
                    t.setAttribute("event_id", e.id),
                    this._rendered.push(t),
                    this._update_marker_position(t, e);
                    var n = this.templates.drag_marker_class(e.start_date, e.end_date, e)
                      , i = this.templates.drag_marker_content(e.start_date, e.end_date, e);
                    t.className = "dhx_drag_marker",
                    n && (t.className += " " + n),
                    i && (t.innerHTML = i),
                    this._append_drag_marker(t)
                }
                ,
                s._loaded = {},
                s._load = function(e, t) {
                    function n(e) {
                        s.on_load(e),
                        s.callEvent("onLoadEnd", [])
                    }
                    if (e = e || this._load_url) {
                        var i;
                        if (e += (-1 == e.indexOf("?") ? "?" : "&") + "timeshift=" + (new Date).getTimezoneOffset(),
                        this.config.prevent_cache && (e += "&uid=" + this.uid()),
                        t = t || this._date,
                        this._load_mode) {
                            var a = this.templates.load_format;
                            for (t = this.date[this._load_mode + "_start"](new Date(t.valueOf())); t > this._min_date; )
                                t = this.date.add(t, -1, this._load_mode);
                            i = t;
                            for (var r = !0; i < this._max_date; )
                                i = this.date.add(i, 1, this._load_mode),
                                this._loaded[a(t)] && r ? t = this.date.add(t, 1, this._load_mode) : r = !1;
                            var o = i;
                            do {
                                i = o,
                                o = this.date.add(i, -1, this._load_mode)
                            } while (o > t && this._loaded[a(o)]);
                            if (i <= t)
                                return !1;
                            for (s.$ajax.get(e + "&from=" + a(t) + "&to=" + a(i), n); t < i; )
                                this._loaded[a(t)] = !0,
                                t = this.date.add(t, 1, this._load_mode)
                        } else
                            s.$ajax.get(e, n);
                        return this.callEvent("onXLS", []),
                        this.callEvent("onLoadStart", []),
                        !0
                    }
                }
                ,
                s._parsers = {},
                s._parsers.xml = {
                    canParse: function(e, t) {
                        if (t.responseXML && t.responseXML.firstChild)
                            return !0;
                        try {
                            var n = s.$ajax.parse(t.responseText)
                              , i = s.$ajax.xmltop("data", n);
                            if (i && "data" === i.tagName)
                                return !0
                        } catch (e) {}
                        return !1
                    },
                    parse: function(e) {
                        var t;
                        if (e.xmlDoc.responseXML || (e.xmlDoc.responseXML = s.$ajax.parse(e.xmlDoc.responseText)),
                        "data" != (t = s.$ajax.xmltop("data", e.xmlDoc)).tagName)
                            return null;
                        var n = t.getAttribute("dhx_security");
                        n && (window.dhtmlx && (dhtmlx.security_key = n),
                        s.security_key = n);
                        for (var i = s.$ajax.xpath("//coll_options", e.xmlDoc), a = 0; a < i.length; a++) {
                            var r = i[a].getAttribute("for")
                              , o = s.serverList[r];
                            o || (s.serverList[r] = o = []),
                            o.splice(0, o.length);
                            for (var l = s.$ajax.xpath(".//item", i[a]), _ = 0; _ < l.length; _++) {
                                for (var d = l[_].attributes, c = {
                                    key: l[_].getAttribute("value"),
                                    label: l[_].getAttribute("label")
                                }, h = 0; h < d.length; h++) {
                                    var u = d[h];
                                    "value" != u.nodeName && "label" != u.nodeName && (c[u.nodeName] = u.nodeValue)
                                }
                                o.push(c)
                            }
                        }
                        i.length && s.callEvent("onOptionsLoad", []);
                        var f = s.$ajax.xpath("//userdata", e.xmlDoc);
                        for (a = 0; a < f.length; a++) {
                            var p = s._xmlNodeToJSON(f[a]);
                            s._userdata[p.name] = p.text
                        }
                        var v = [];
                        t = s.$ajax.xpath("//event", e.xmlDoc);
                        for (a = 0; a < t.length; a++) {
                            var m = v[a] = s._xmlNodeToJSON(t[a]);
                            s._init_event(m)
                        }
                        return v
                    }
                },
                s.json = s._parsers.json = {
                    canParse: function(e) {
                        if (e && "object" == typeof e)
                            return !0;
                        if ("string" == typeof e)
                            try {
                                var t = JSON.parse(e);
                                return "[object Object]" === Object.prototype.toString.call(t) || "[object Array]" === Object.prototype.toString.call(t)
                            } catch (e) {
                                return !1
                            }
                        return !1
                    },
                    parse: function(e) {
                        var t = [];
                        "string" == typeof e && (e = JSON.parse(e)),
                        t = (t = "[object Array]" === Object.prototype.toString.call(e) ? e : e ? e.data : []) || [],
                        e.dhx_security && (window.dhtmlx && (dhtmlx.security_key = e.dhx_security),
                        s.security_key = e.dhx_security);
                        var n = e && e.collections ? e.collections : {}
                          , i = !1;
                        for (var a in n)
                            if (n.hasOwnProperty(a)) {
                                i = !0;
                                var r = n[a]
                                  , o = s.serverList[a];
                                o || (s.serverList[a] = o = []),
                                o.splice(0, o.length);
                                for (var l = 0; l < r.length; l++) {
                                    var _ = r[l]
                                      , d = {
                                        key: _.value,
                                        label: _.label
                                    };
                                    for (var c in _)
                                        if (_.hasOwnProperty(c)) {
                                            if ("value" == c || "label" == c)
                                                continue;
                                            d[c] = _[c]
                                        }
                                    o.push(d)
                                }
                            }
                        i && s.callEvent("onOptionsLoad", []);
                        for (var h = [], u = 0; u < t.length; u++) {
                            var f = t[u];
                            s._init_event(f),
                            h.push(f)
                        }
                        return h
                    }
                },
                s.ical = s._parsers.ical = {
                    canParse: function(e) {
                        return "string" == typeof e && new RegExp("^BEGIN:VCALENDAR").test(e)
                    },
                    parse: function(e) {
                        var t = e.match(RegExp(this.c_start + "[^\f]*" + this.c_end, ""));
                        if (t.length) {
                            t[0] = t[0].replace(/[\r\n]+ /g, ""),
                            t[0] = t[0].replace(/[\r\n]+(?=[a-z \t])/g, " "),
                            t[0] = t[0].replace(/\;[^:\r\n]*:/g, ":");
                            for (var n, i = [], a = RegExp("(?:" + this.e_start + ")([^\f]*?)(?:" + this.e_end + ")", "g"); null !== (n = a.exec(t)); ) {
                                for (var r, o = {}, s = /[^\r\n]+[\r\n]+/g; null !== (r = s.exec(n[1])); )
                                    this.parse_param(r.toString(), o);
                                o.uid && !o.id && (o.id = o.uid),
                                i.push(o)
                            }
                            return i
                        }
                    },
                    parse_param: function(e, t) {
                        var n = e.indexOf(":");
                        if (-1 != n) {
                            var i = e.substr(0, n).toLowerCase()
                              , a = e.substr(n + 1).replace(/\\\,/g, ",").replace(/[\r\n]+$/, "");
                            "summary" == i ? i = "text" : "dtstart" == i ? (i = "start_date",
                            a = this.parse_date(a, 0, 0)) : "dtend" == i && (i = "end_date",
                            a = this.parse_date(a, 0, 0)),
                            t[i] = a
                        }
                    },
                    parse_date: function(e, t, n) {
                        var i = e.split("T")
                          , a = !1;
                        i[1] && (t = i[1].substr(0, 2),
                        n = i[1].substr(2, 2),
                        a = !("Z" != i[1][6]));
                        var r = i[0].substr(0, 4)
                          , o = parseInt(i[0].substr(4, 2), 10) - 1
                          , l = i[0].substr(6, 2);
                        return s.config.server_utc || a ? new Date(Date.UTC(r, o, l, t, n)) : new Date(r,o,l,t,n)
                    },
                    c_start: "BEGIN:VCALENDAR",
                    e_start: "BEGIN:VEVENT",
                    e_end: "END:VEVENT",
                    c_end: "END:VCALENDAR"
                },
                s.on_load = function(e) {
                    this.callEvent("onBeforeParse", []);
                    var t, n = !1, i = !1;
                    for (var a in this._parsers) {
                        var r = this._parsers[a];
                        if (r.canParse(e.xmlDoc.responseText, e.xmlDoc)) {
                            try {
                                var o = e.xmlDoc.responseText;
                                "xml" === a && (o = e),
                                (t = r.parse(o)) || (n = !0)
                            } catch (e) {
                                n = !0
                            }
                            i = !0;
                            break
                        }
                    }
                    if (!i)
                        if (this._process && this[this._process])
                            try {
                                t = this[this._process].parse(e.xmlDoc.responseText)
                            } catch (e) {
                                n = !0
                            }
                        else
                            n = !0;
                    (n || e.xmlDoc.status && e.xmlDoc.status >= 400) && (this.callEvent("onLoadError", [e.xmlDoc]),
                    t = []),
                    this._process_loading(t),
                    this.callEvent("onXLE", []),
                    this.callEvent("onParse", [])
                }
                ,
                s._process_loading = function(e) {
                    this._loading = !0,
                    this._not_render = !0;
                    for (var t = 0; t < e.length; t++)
                        this.callEvent("onEventLoading", [e[t]]) && this.addEvent(e[t]);
                    this._not_render = !1,
                    this._render_wait && this.render_view_data(),
                    this._loading = !1,
                    this._after_call && this._after_call(),
                    this._after_call = null
                }
                ,
                s._init_event = function(e) {
                    e.text = e.text || e._tagvalue || "",
                    e.start_date = s._init_date(e.start_date),
                    e.end_date = s._init_date(e.end_date)
                }
                ,
                s._init_date = function(e) {
                    return e ? "string" == typeof e ? s._helpers.parseDate(e) : new Date(e) : null
                }
                ,
                s.json = {},
                s.json.parse = function(e) {
                    var t = [];
                    "string" == typeof e && (e = JSON.parse(e)),
                    t = (t = "[object Array]" === Object.prototype.toString.call(e) ? e : e ? e.data : []) || [],
                    e.dhx_security && (window.dhtmlx && (dhtmlx.security_key = e.dhx_security),
                    s.security_key = e.dhx_security);
                    var n = e && e.collections ? e.collections : {}
                      , i = !1;
                    for (var a in n)
                        if (n.hasOwnProperty(a)) {
                            i = !0;
                            var r = n[a]
                              , o = s.serverList[a];
                            o || (s.serverList[a] = o = []),
                            o.splice(0, o.length);
                            for (var l = 0; l < r.length; l++) {
                                var _ = r[l]
                                  , d = {
                                    key: _.value,
                                    label: _.label
                                };
                                for (var c in _)
                                    if (_.hasOwnProperty(c)) {
                                        if ("value" == c || "label" == c)
                                            continue;
                                        d[c] = _[c]
                                    }
                                o.push(d)
                            }
                        }
                    i && s.callEvent("onOptionsLoad", []);
                    for (var h = [], u = 0; u < t.length; u++) {
                        var f = t[u];
                        s._init_event(f),
                        h.push(f)
                    }
                    return h
                }
                ,
                s.parse = function(e, t) {
                    this._process = t,
                    this.on_load({
                        xmlDoc: {
                            responseText: e
                        }
                    })
                }
                ,
                s.load = function(e, t) {
                    "string" == typeof t && (this._process = t,
                    t = arguments[2]),
                    this._load_url = e,
                    this._after_call = t,
                    this._load(e, this._date)
                }
                ,
                s.setLoadMode = function(e) {
                    "all" == e && (e = ""),
                    this._load_mode = e
                }
                ,
                s.serverList = function(e, t) {
                    return t ? (this.serverList[e] = t.slice(0),
                    this.serverList[e]) : (this.serverList[e] = this.serverList[e] || [],
                    this.serverList[e])
                }
                ,
                s._userdata = {},
                s._xmlNodeToJSON = function(e) {
                    for (var t = {}, n = 0; n < e.attributes.length; n++)
                        t[e.attributes[n].name] = e.attributes[n].value;
                    for (n = 0; n < e.childNodes.length; n++) {
                        var i = e.childNodes[n];
                        1 == i.nodeType && (t[i.tagName] = i.firstChild ? i.firstChild.nodeValue : "")
                    }
                    return t.text || (t.text = e.firstChild ? e.firstChild.nodeValue : ""),
                    t
                }
                ,
                s.attachEvent("onXLS", (function() {
                    var e;
                    !0 === this.config.show_loading && ((e = this.config.show_loading = document.createElement("div")).className = "dhx_loading",
                    e.style.left = Math.round((this._x - 128) / 2) + "px",
                    e.style.top = Math.round((this._y - 15) / 2) + "px",
                    this._obj.appendChild(e))
                }
                )),
                s.attachEvent("onXLE", (function() {
                    var e = this.config.show_loading;
                    e && "object" == typeof e && (e.parentNode && e.parentNode.removeChild(e),
                    this.config.show_loading = !0)
                }
                )),
                s._lightbox_controls = {},
                s.formSection = function(e) {
                    for (var t = this.config.lightbox.sections, n = 0; n < t.length && t[n].name != e; n++)
                        ;
                    var i = t[n];
                    s._lightbox || s.getLightbox();
                    var a = document.getElementById(i.id)
                      , r = a.nextSibling
                      , o = {
                        section: i,
                        header: a,
                        node: r,
                        getValue: function(e) {
                            return s.form_blocks[i.type].get_value(r, e || {}, i)
                        },
                        setValue: function(e, t) {
                            return s.form_blocks[i.type].set_value(r, e, t || {}, i)
                        }
                    }
                      , l = s._lightbox_controls["get_" + i.type + "_control"];
                    return l ? l(o) : o
                }
                ,
                s._lightbox_controls.get_template_control = function(e) {
                    return e.control = e.node,
                    e
                }
                ,
                s._lightbox_controls.get_select_control = function(e) {
                    return e.control = e.node.getElementsByTagName("select")[0],
                    e
                }
                ,
                s._lightbox_controls.get_textarea_control = function(e) {
                    return e.control = e.node.getElementsByTagName("textarea")[0],
                    e
                }
                ,
                s._lightbox_controls.get_time_control = function(e) {
                    return e.control = e.node.getElementsByTagName("select"),
                    e
                }
                ,
                s._lightbox_controls.defaults = {
                    template: {
                        height: 30
                    },
                    textarea: {
                        height: 200
                    },
                    select: {
                        height: 23
                    },
                    time: {
                        height: 20
                    }
                },
                s.form_blocks = {
                    template: {
                        render: function(e) {
                            var t = s._lightbox_controls.defaults.template
                              , n = t ? t.height : 30;
                            return "<div class='dhx_cal_ltext dhx_cal_template' style='height:" + (e.height || n || 30) + "px;'></div>"
                        },
                        set_value: function(e, t, n, i) {
                            e.innerHTML = t || ""
                        },
                        get_value: function(e, t, n) {
                            return e.innerHTML || ""
                        },
                        focus: function(e) {}
                    },
                    textarea: {
                        render: function(e) {
                            var t = s._lightbox_controls.defaults.textarea
                              , n = t ? t.height : 200;
                            return "<div class='dhx_cal_ltext' style='height:" + (e.height || n || "130") + "px;'><textarea></textarea></div>"
                        },
                        set_value: function(e, t, n) {
                            s.form_blocks.textarea._get_input(e).value = t || ""
                        },
                        get_value: function(e, t) {
                            return s.form_blocks.textarea._get_input(e).value
                        },
                        focus: function(e) {
                            var t = s.form_blocks.textarea._get_input(e);
                            s._focus(t, !0)
                        },
                        _get_input: function(e) {
                            return e.getElementsByTagName("textarea")[0]
                        }
                    },
                    select: {
                        render: function(e) {
                            for (var t = s._lightbox_controls.defaults.select, n = t ? t.height : 23, i = "<div class='dhx_cal_ltext' style='height:" + ((e.height || n || "23") + "px") + ";'><select style='width:100%;'>", a = 0; a < e.options.length; a++)
                                i += "<option value='" + e.options[a].key + "'>" + e.options[a].label + "</option>";
                            return i + "</select></div>"
                        },
                        set_value: function(e, t, n, i) {
                            var a = e.firstChild;
                            !a._dhx_onchange && i.onchange && (a.onchange = i.onchange,
                            a._dhx_onchange = !0),
                            void 0 === t && (t = (a.options[0] || {}).value),
                            a.value = t || ""
                        },
                        get_value: function(e, t) {
                            return e.firstChild.value
                        },
                        focus: function(e) {
                            var t = e.firstChild;
                            s._focus(t, !0)
                        }
                    },
                    time: {
                        render: function(e) {
                            e.time_format || (e.time_format = ["%H:%i", "%d", "%m", "%Y"]),
                            e._time_format_order = {};
                            var t = e.time_format
                              , n = s.config
                              , i = s.date.date_part(s._currentDate())
                              , a = 1440
                              , r = 0;
                            s.config.limit_time_select && (a = 60 * n.last_hour + 1,
                            r = 60 * n.first_hour,
                            i.setHours(n.first_hour));
                            for (var o = "", l = 0; l < t.length; l++) {
                                var _ = t[l];
                                l > 0 && (o += " ");
                                var d = ""
                                  , c = "";
                                switch (_) {
                                case "%Y":
                                    var h, u, f;
                                    d = "dhx_lightbox_year_select",
                                    e._time_format_order[3] = l,
                                    e.year_range && (isNaN(e.year_range) ? e.year_range.push && (u = e.year_range[0],
                                    f = e.year_range[1]) : h = e.year_range),
                                    h = h || 10;
                                    var p = p || Math.floor(h / 2);
                                    u = u || i.getFullYear() - p,
                                    f = f || u + h;
                                    for (var v = u; v < f; v++)
                                        c += "<option value='" + v + "'>" + v + "</option>";
                                    break;
                                case "%m":
                                    d = "dhx_lightbox_month_select",
                                    e._time_format_order[2] = l;
                                    for (v = 0; v < 12; v++)
                                        c += "<option value='" + v + "'>" + this.locale.date.month_full[v] + "</option>";
                                    break;
                                case "%d":
                                    d = "dhx_lightbox_day_select",
                                    e._time_format_order[1] = l;
                                    for (v = 1; v < 32; v++)
                                        c += "<option value='" + v + "'>" + v + "</option>";
                                    break;
                                case "%H:%i":
                                    d = "dhx_lightbox_time_select",
                                    e._time_format_order[0] = l;
                                    v = r;
                                    var m = i.getDate();
                                    for (e._time_values = []; v < a; )
                                        c += "<option value='" + v + "'>" + this.templates.time_picker(i) + "</option>",
                                        e._time_values.push(v),
                                        i.setTime(i.valueOf() + 60 * this.config.time_step * 1e3),
                                        v = 24 * (i.getDate() != m ? 1 : 0) * 60 + 60 * i.getHours() + i.getMinutes()
                                }
                                if (c) {
                                    var g = s._waiAria.lightboxSelectAttrString(_);
                                    o += "<select class='" + d + "' " + (e.readonly ? "disabled='disabled'" : "") + g + ">" + c + "</select> "
                                }
                            }
                            var y = s._lightbox_controls.defaults.select;
                            return "<div style='height:" + ((y ? y.height : 23) || 30) + "px;padding-top:0px;font-size:inherit;' class='dhx_section_time'>" + o + "<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>" + o + "</div>"
                        },
                        set_value: function(e, t, n, i) {
                            function a(e, t, n) {
                                for (var a = i._time_values, r = 60 * n.getHours() + n.getMinutes(), o = r, s = !1, l = 0; l < a.length; l++) {
                                    var _ = a[l];
                                    if (_ === r) {
                                        s = !0;
                                        break
                                    }
                                    _ < r && (o = _)
                                }
                                e[t + d[0]].value = s ? r : o,
                                s || o || (e[t + d[0]].selectedIndex = -1),
                                e[t + d[1]].value = n.getDate(),
                                e[t + d[2]].value = n.getMonth(),
                                e[t + d[3]].value = n.getFullYear()
                            }
                            var r, o, l = s.config, _ = e.getElementsByTagName("select"), d = i._time_format_order;
                            if (l.full_day) {
                                if (!e._full_day) {
                                    var c = "<label class='dhx_fullday'><input type='checkbox' name='full_day' value='true'> " + s.locale.labels.full_day + "&nbsp;</label></input>";
                                    s.config.wide_form || (c = e.previousSibling.innerHTML + c),
                                    e.previousSibling.innerHTML = c,
                                    e._full_day = !0
                                }
                                var h = e.previousSibling.getElementsByTagName("input")[0];
                                h.checked = 0 === s.date.time_part(n.start_date) && 0 === s.date.time_part(n.end_date),
                                _[d[0]].disabled = h.checked,
                                _[d[0] + _.length / 2].disabled = h.checked,
                                h.onclick = function() {
                                    if (h.checked) {
                                        var t = {};
                                        s.form_blocks.time.get_value(e, t, i),
                                        r = s.date.date_part(t.start_date),
                                        (+(o = s.date.date_part(t.end_date)) == +r || +o >= +r && (0 !== n.end_date.getHours() || 0 !== n.end_date.getMinutes())) && (o = s.date.add(o, 1, "day"))
                                    } else
                                        r = null,
                                        o = null;
                                    _[d[0]].disabled = h.checked,
                                    _[d[0] + _.length / 2].disabled = h.checked,
                                    a(_, 0, r || n.start_date),
                                    a(_, 4, o || n.end_date)
                                }
                            }
                            if (l.auto_end_date && l.event_duration)
                                for (var u = function() {
                                    r = new Date(_[d[3]].value,_[d[2]].value,_[d[1]].value,0,_[d[0]].value),
                                    o = new Date(r.getTime() + 60 * s.config.event_duration * 1e3),
                                    a(_, 4, o)
                                }, f = 0; f < 4; f++)
                                    _[f].onchange = u;
                            a(_, 0, n.start_date),
                            a(_, 4, n.end_date)
                        },
                        get_value: function(e, t, n) {
                            var i = e.getElementsByTagName("select")
                              , a = n._time_format_order;
                            if (t.start_date = new Date(i[a[3]].value,i[a[2]].value,i[a[1]].value,0,i[a[0]].value),
                            t.end_date = new Date(i[a[3] + 4].value,i[a[2] + 4].value,i[a[1] + 4].value,0,i[a[0] + 4].value),
                            !i[a[3]].value || !i[a[3] + 4].value) {
                                var r = s.getEvent(s._lightbox_id);
                                r && (t.start_date = r.start_date,
                                t.end_date = r.end_date)
                            }
                            return t.end_date <= t.start_date && (t.end_date = s.date.add(t.start_date, s.config.time_step, "minute")),
                            {
                                start_date: new Date(t.start_date),
                                end_date: new Date(t.end_date)
                            }
                        },
                        focus: function(e) {
                            s._focus(e.getElementsByTagName("select")[0])
                        }
                    }
                },
                s._setLbPosition = function(e) {
                    if (e) {
                        var t = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
                          , n = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
                          , i = window.innerHeight || document.documentElement.clientHeight;
                        e.style.top = t ? Math.round(t + Math.max((i - e.offsetHeight) / 2, 0)) + "px" : Math.round(Math.max((i - e.offsetHeight) / 2, 0) + 9) + "px",
                        document.documentElement.scrollWidth > document.body.offsetWidth ? e.style.left = Math.round(n + (document.body.offsetWidth - e.offsetWidth) / 2) + "px" : e.style.left = Math.round((document.body.offsetWidth - e.offsetWidth) / 2) + "px"
                    }
                }
                ,
                s.showCover = function(e) {
                    e && (e.style.display = "block",
                    this._setLbPosition(e)),
                    s.config.responsive_lightbox && (document.documentElement.classList.add("dhx_cal_overflow_container"),
                    document.body.classList.add("dhx_cal_overflow_container")),
                    this.show_cover()
                }
                ,
                s.showLightbox = function(e) {
                    if (e) {
                        if (!this.callEvent("onBeforeLightbox", [e]))
                            return void (this._new_event && (this._new_event = null));
                        var t = this.getLightbox();
                        this.showCover(t),
                        this._fill_lightbox(e, t),
                        this._waiAria.lightboxVisibleAttr(t),
                        this.callEvent("onLightbox", [e])
                    }
                }
                ,
                s._fill_lightbox = function(e, t) {
                    var n = this.getEvent(e)
                      , i = t.getElementsByTagName("span")
                      , a = [];
                    if (s.templates.lightbox_header) {
                        a.push("");
                        var r = s.templates.lightbox_header(n.start_date, n.end_date, n);
                        a.push(r),
                        i[1].innerHTML = "",
                        i[2].innerHTML = r
                    } else {
                        var o = this.templates.event_header(n.start_date, n.end_date, n)
                          , l = (this.templates.event_bar_text(n.start_date, n.end_date, n) || "").substr(0, 70);
                        a.push(o),
                        a.push(l),
                        i[1].innerHTML = o,
                        i[2].innerHTML = l
                    }
                    this._waiAria.lightboxHeader(t, a.join(" "));
                    for (var _ = this.config.lightbox.sections, d = 0; d < _.length; d++) {
                        var c = _[d]
                          , h = s._get_lightbox_section_node(c)
                          , u = this.form_blocks[c.type]
                          , f = void 0 !== n[c.map_to] ? n[c.map_to] : c.default_value;
                        u.set_value.call(this, h, f, n, c),
                        _[d].focus && u.focus.call(this, h)
                    }
                    s._lightbox_id = e
                }
                ,
                s._get_lightbox_section_node = function(e) {
                    return document.getElementById(e.id).nextSibling
                }
                ,
                s._lightbox_out = function(e) {
                    for (var t = this.config.lightbox.sections, n = 0; n < t.length; n++) {
                        var i = document.getElementById(t[n].id);
                        i = i ? i.nextSibling : i;
                        var a = this.form_blocks[t[n].type].get_value.call(this, i, e, t[n]);
                        "auto" != t[n].map_to && (e[t[n].map_to] = a)
                    }
                    return e
                }
                ,
                s._empty_lightbox = function(e) {
                    var t = s._lightbox_id
                      , n = this.getEvent(t);
                    this.getLightbox(),
                    this._lame_copy(n, e),
                    this.setEvent(n.id, n),
                    this._edit_stop_event(n, !0),
                    this.render_view_data()
                }
                ,
                s.hide_lightbox = function(e) {
                    s.endLightbox(!1, this.getLightbox())
                }
                ,
                s.hideLightbox = s.hide_lightbox,
                s.hideCover = function(e) {
                    e && (e.style.display = "none"),
                    this.hide_cover(),
                    s.config.responsive_lightbox && (document.documentElement.classList.remove("dhx_cal_overflow_container"),
                    document.body.classList.remove("dhx_cal_overflow_container"))
                }
                ,
                s.hide_cover = function() {
                    this._cover && this._cover.parentNode.removeChild(this._cover),
                    this._cover = null
                }
                ,
                s.show_cover = function() {
                    this._cover || (this._cover = document.createElement("div"),
                    this._cover.className = "dhx_cal_cover",
                    document.body.appendChild(this._cover))
                }
                ,
                s.save_lightbox = function() {
                    var e = this._lightbox_out({}, this._lame_copy(this.getEvent(this._lightbox_id)));
                    this.checkEvent("onEventSave") && !this.callEvent("onEventSave", [this._lightbox_id, e, this._new_event]) || (this._empty_lightbox(e),
                    this.hide_lightbox())
                }
                ,
                s.startLightbox = function(e, t) {
                    this._lightbox_id = e,
                    this._custom_lightbox = !0,
                    this._temp_lightbox = this._lightbox,
                    this._lightbox = t,
                    this.showCover(t)
                }
                ,
                s.endLightbox = function(e, t) {
                    t = t || s.getLightbox();
                    var n = s.getEvent(this._lightbox_id);
                    n && this._edit_stop_event(n, e),
                    e && s.render_view_data(),
                    this.hideCover(t),
                    this._custom_lightbox && (this._lightbox = this._temp_lightbox,
                    this._custom_lightbox = !1),
                    this._temp_lightbox = this._lightbox_id = null,
                    this._waiAria.lightboxHiddenAttr(t),
                    this.callEvent("onAfterLightbox", [])
                }
                ,
                s.resetLightbox = function() {
                    s._lightbox && !s._custom_lightbox && s._lightbox.parentNode.removeChild(s._lightbox),
                    s._lightbox = null
                }
                ,
                s.cancel_lightbox = function() {
                    this.callEvent("onEventCancel", [this._lightbox_id, this._new_event]),
                    this.hide_lightbox()
                }
                ,
                s._init_lightbox_events = function() {
                    this.getLightbox().onclick = function(e) {
                        var t = e ? e.target : event.srcElement;
                        if (t.className || (t = t.previousSibling),
                        !(t && t.className && s._getClassName(t).indexOf("dhx_btn_set") > -1) || (t = t.querySelector("[dhx_button]"))) {
                            var n = s._getClassName(t);
                            if (t && n)
                                switch (n) {
                                case "dhx_save_btn":
                                    s.save_lightbox();
                                    break;
                                case "dhx_delete_btn":
                                    var i = s.locale.labels.confirm_deleting;
                                    s._dhtmlx_confirm(i, s.locale.labels.title_confirm_deleting, (function() {
                                        s.deleteEvent(s._lightbox_id),
                                        s._new_event = null,
                                        s.hide_lightbox()
                                    }
                                    ));
                                    break;
                                case "dhx_cancel_btn":
                                    s.cancel_lightbox();
                                    break;
                                default:
                                    var a, r;
                                    if (t.getAttribute("dhx_button"))
                                        s.callEvent("onLightboxButton", [n, t, e]);
                                    else
                                        -1 != n.indexOf("dhx_custom_button") && (-1 != n.indexOf("dhx_custom_button_") ? (a = t.parentNode.getAttribute("index"),
                                        r = t.parentNode.parentNode) : (a = t.getAttribute("index"),
                                        r = t.parentNode,
                                        t = t.firstChild)),
                                        a && s.form_blocks[s.config.lightbox.sections[a].type].button_click(a, t, r, r.nextSibling)
                                }
                        }
                    }
                    ,
                    this.getLightbox().onkeydown = function(e) {
                        var t = e || window.event
                          , n = e.target || e.srcElement
                          , i = n.querySelector("[dhx_button]");
                        switch (i || (i = n.parentNode.querySelector(".dhx_custom_button, .dhx_readonly")),
                        (e || t).keyCode) {
                        case 32:
                            if ((e || t).shiftKey)
                                return;
                            i && i.click && i.click();
                            break;
                        case s.keys.edit_save:
                            if ((e || t).shiftKey)
                                return;
                            i && i.click ? i.click() : s.save_lightbox();
                            break;
                        case s.keys.edit_cancel:
                            s.cancel_lightbox()
                        }
                    }
                }
                ,
                s.setLightboxSize = function() {
                    var e = this._lightbox;
                    if (e) {
                        var t = e.childNodes[1];
                        t.style.height = "0px",
                        t.style.height = t.scrollHeight + "px",
                        e.style.height = t.scrollHeight + s.xy.lightbox_additional_height + "px",
                        t.style.height = t.scrollHeight + "px"
                    }
                }
                ,
                s._init_dnd_events = function() {
                    s.event(document.body, "mousemove", s._move_while_dnd),
                    s.event(document.body, "mouseup", s._finish_dnd),
                    s._init_dnd_events = function() {}
                }
                ,
                s._move_while_dnd = function(e) {
                    if (s._dnd_start_lb) {
                        document.dhx_unselectable || (document.body.className += " dhx_unselectable",
                        document.dhx_unselectable = !0);
                        var t = s.getLightbox()
                          , n = e && e.target ? [e.pageX, e.pageY] : [event.clientX, event.clientY];
                        t.style.top = s._lb_start[1] + n[1] - s._dnd_start_lb[1] + "px",
                        t.style.left = s._lb_start[0] + n[0] - s._dnd_start_lb[0] + "px"
                    }
                }
                ,
                s._ready_to_dnd = function(e) {
                    var t = s.getLightbox();
                    s._lb_start = [parseInt(t.style.left, 10), parseInt(t.style.top, 10)],
                    s._dnd_start_lb = e && e.target ? [e.pageX, e.pageY] : [event.clientX, event.clientY]
                }
                ,
                s._finish_dnd = function() {
                    s._lb_start && (s._lb_start = s._dnd_start_lb = !1,
                    document.body.className = document.body.className.replace(" dhx_unselectable", ""),
                    document.dhx_unselectable = !1)
                }
                ,
                s.getLightbox = function() {
                    if (!this._lightbox) {
                        var e = document.createElement("div");
                        e.className = "dhx_cal_light",
                        s.config.wide_form && (e.className += " dhx_cal_light_wide"),
                        s.form_blocks.recurring && (e.className += " dhx_cal_light_rec"),
                        s.config.rtl && (e.className += " dhx_cal_light_rtl"),
                        s.config.responsive_lightbox && (e.className += " dhx_cal_light_responsive"),
                        /msie|MSIE 6/.test(navigator.userAgent) && (e.className += " dhx_ie6"),
                        e.style.visibility = "hidden";
                        for (var t = this._lightbox_template, n = this.config.buttons_left, i = 0; i < n.length; i++)
                            t += "<div " + this._waiAria.lightboxButtonAttrString(n[i]) + " class='dhx_btn_set dhx_" + (s.config.rtl ? "right" : "left") + "_btn_set " + n[i] + "_set'><div dhx_button='1' class='" + n[i] + "'></div><div>" + s.locale.labels[n[i]] + "</div></div>";
                        n = this.config.buttons_right;
                        var a = s.config.rtl;
                        for (i = 0; i < n.length; i++)
                            t += "<div " + this._waiAria.lightboxButtonAttrString(n[i]) + " class='dhx_btn_set dhx_" + (a ? "left" : "right") + "_btn_set " + n[i] + "_set' style='float:" + (a ? "left" : "right") + ";'><div dhx_button='1' class='" + n[i] + "'></div><div>" + s.locale.labels[n[i]] + "</div></div>";
                        t += "</div>",
                        e.innerHTML = t,
                        s.config.drag_lightbox && (e.firstChild.onmousedown = s._ready_to_dnd,
                        e.firstChild.onselectstart = function() {
                            return !1
                        }
                        ,
                        e.firstChild.style.cursor = "move",
                        s._init_dnd_events()),
                        this._waiAria.lightboxAttr(e),
                        document.body.insertBefore(e, document.body.firstChild),
                        this._lightbox = e;
                        var r = this.config.lightbox.sections;
                        t = "";
                        for (i = 0; i < r.length; i++) {
                            var o = this.form_blocks[r[i].type];
                            if (o) {
                                r[i].id = "area_" + this.uid();
                                var l = "";
                                if (r[i].button)
                                    l = "<div " + s._waiAria.lightboxSectionButtonAttrString(this.locale.labels["button_" + r[i].button]) + " class='dhx_custom_button' index='" + i + "'><div class='dhx_custom_button_" + r[i].button + "'></div><div>" + this.locale.labels["button_" + r[i].button] + "</div></div>";
                                this.config.wide_form && (t += "<div class='dhx_wrap_section'>");
                                var _ = this.locale.labels["section_" + r[i].name];
                                "string" != typeof _ && (_ = r[i].name),
                                t += "<div id='" + r[i].id + "' class='dhx_cal_lsection'>" + l + "<label>" + _ + "</label></div>" + o.render.call(this, r[i]),
                                t += "</div>"
                            }
                        }
                        var d = e.getElementsByTagName("div");
                        for (i = 0; i < d.length; i++) {
                            var c = d[i];
                            if ("dhx_cal_larea" == s._getClassName(c)) {
                                c.innerHTML = t;
                                break
                            }
                        }
                        s._bindLightboxLabels(r),
                        this.setLightboxSize(),
                        this._init_lightbox_events(this),
                        e.style.display = "none",
                        e.style.visibility = "visible"
                    }
                    return this._lightbox
                }
                ,
                s._bindLightboxLabels = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n.id && document.getElementById(n.id)) {
                            for (var i = document.getElementById(n.id).querySelector("label"), a = s._get_lightbox_section_node(n); a && !a.querySelector; )
                                a = a.nextSibling;
                            var r = !0;
                            if (a) {
                                var o = a.querySelector("input, select, textarea");
                                o && (n.inputId = o.id || "input_" + s.uid(),
                                o.id || (o.id = n.inputId),
                                i.setAttribute("for", n.inputId),
                                r = !1)
                            }
                            r && s.form_blocks[n.type].focus && (i.onclick = function(e) {
                                return function() {
                                    var t = s.form_blocks[e.type]
                                      , n = s._get_lightbox_section_node(e);
                                    t && t.focus && t.focus.call(s, n)
                                }
                            }(n))
                        }
                    }
                }
                ,
                s.attachEvent("onEventIdChange", (function(e, t) {
                    this._lightbox_id == e && (this._lightbox_id = t)
                }
                )),
                s._lightbox_template = "<div class='dhx_cal_ltitle'><span class='dhx_mark'>&nbsp;</span><span class='dhx_time'></span><span class='dhx_title'></span></div><div class='dhx_cal_larea'></div>",
                s._init_touch_events = function() {
                    if (this.config.touch && (-1 != navigator.userAgent.indexOf("Mobile") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Android") || -1 != navigator.userAgent.indexOf("Touch")) && !window.MSStream && (this.xy.scroll_width = 0,
                    this._mobile = !0),
                    this.config.touch) {
                        var e = !0;
                        try {
                            document.createEvent("TouchEvent")
                        } catch (t) {
                            e = !1
                        }
                        e ? this._touch_events(["touchmove", "touchstart", "touchend"], (function(e) {
                            return e.touches && e.touches.length > 1 ? null : e.touches[0] ? {
                                target: e.target,
                                pageX: e.touches[0].pageX,
                                pageY: e.touches[0].pageY,
                                clientX: e.touches[0].clientX,
                                clientY: e.touches[0].clientY
                            } : e
                        }
                        ), (function() {
                            return !1
                        }
                        )) : window.PointerEvent || window.navigator.pointerEnabled ? this._touch_events(["pointermove", "pointerdown", "pointerup"], (function(e) {
                            return "mouse" == e.pointerType ? null : e
                        }
                        ), (function(e) {
                            return !e || "mouse" == e.pointerType
                        }
                        )) : window.navigator.msPointerEnabled && this._touch_events(["MSPointerMove", "MSPointerDown", "MSPointerUp"], (function(e) {
                            return e.pointerType == e.MSPOINTER_TYPE_MOUSE ? null : e
                        }
                        ), (function(e) {
                            return !e || e.pointerType == e.MSPOINTER_TYPE_MOUSE
                        }
                        ))
                    }
                }
                ,
                s._touch_events = function(e, t, n) {
                    function i(e, t, i) {
                        e.addEventListener(t, (function(e) {
                            return !!s._is_lightbox_open() || (n(e) ? void 0 : i(e))
                        }
                        ), {
                            passive: !1
                        })
                    }
                    function a(e) {
                        n(e) || (s._hide_global_tip(),
                        _ && (s._on_mouse_up(t(e || event)),
                        s._temp_touch_block = !1),
                        s._drag_id = null,
                        s._drag_mode = null,
                        s._drag_pos = null,
                        s._pointerDragId = null,
                        clearTimeout(l),
                        _ = c = !1,
                        d = !0)
                    }
                    var r, o, l, _, d, c, h = (-1 != navigator.userAgent.indexOf("Android") && navigator.userAgent.indexOf("WebKit"),
                    0);
                    i(document.body, e[0], (function(e) {
                        if (!n(e)) {
                            var i = t(e);
                            if (i) {
                                if (_)
                                    return function(e) {
                                        if (!n(e)) {
                                            var t = s.getState().drag_mode
                                              , i = !!s.matrix && s.matrix[s._mode]
                                              , a = s.render_view_data;
                                            "create" == t && i && (s.render_view_data = function() {
                                                for (var e = s.getState().drag_id, t = s.getEvent(e), n = i.y_property, a = s.getEvents(t.start_date, t.end_date), r = 0; r < a.length; r++)
                                                    a[r][n] != t[n] && (a.splice(r, 1),
                                                    r--);
                                                t._sorder = a.length - 1,
                                                t._count = a.length,
                                                this.render_data([t], s.getState().mode)
                                            }
                                            ),
                                            s._on_mouse_move(e),
                                            "create" == t && i && (s.render_view_data = a),
                                            e.preventDefault && e.preventDefault(),
                                            e.cancelBubble = !0
                                        }
                                    }(i),
                                    e.preventDefault && e.preventDefault(),
                                    e.cancelBubble = !0,
                                    s._update_global_tip(),
                                    !1;
                                if (o = t(e),
                                c)
                                    return o ? void ((r.target != o.target || Math.abs(r.pageX - o.pageX) > 5 || Math.abs(r.pageY - o.pageY) > 5) && (d = !0,
                                    clearTimeout(l))) : void (d = !0)
                            }
                        }
                    }
                    )),
                    i(this._els.dhx_cal_data[0], "touchcancel", a),
                    i(this._els.dhx_cal_data[0], "contextmenu", (function(e) {
                        if (!n(e))
                            return c ? (e && e.preventDefault && e.preventDefault(),
                            (e || event).cancelBubble = !0,
                            !1) : void 0
                    }
                    )),
                    i(this._obj, e[1], (function(e) {
                        if (!n(e)) {
                            var i;
                            if (s._pointerDragId = e.pointerId,
                            _ = d = !1,
                            c = !0,
                            !(i = o = t(e)))
                                return void (d = !0);
                            var a = new Date;
                            if (!d && !_ && a - h < 250)
                                return s._click.dhx_cal_data(i),
                                window.setTimeout((function() {
                                    i.type = "dblclick",
                                    s._on_dbl_click(i)
                                }
                                ), 50),
                                e.preventDefault && e.preventDefault(),
                                e.cancelBubble = !0,
                                s._block_next_stop = !0,
                                !1;
                            if (h = a,
                            !d && !_ && s.config.touch_drag) {
                                var u = s._locate_event(document.activeElement)
                                  , f = s._locate_event(i.target)
                                  , p = r ? s._locate_event(r.target) : null;
                                if (u && f && u == f && u != p)
                                    return e.preventDefault && e.preventDefault(),
                                    e.cancelBubble = !0,
                                    s._ignore_next_click = !1,
                                    s._click.dhx_cal_data(i),
                                    r = i,
                                    !1;
                                l = setTimeout((function() {
                                    _ = !0;
                                    var e = r.target
                                      , t = s._getClassName(e);
                                    e && -1 != t.indexOf("dhx_body") && (e = e.previousSibling),
                                    s._on_mouse_down(r, e),
                                    s._drag_mode && "create" != s._drag_mode && s.for_rendered(s._drag_id, (function(e, t) {
                                        e.style.display = "none",
                                        s._rendered.splice(t, 1)
                                    }
                                    )),
                                    s.config.touch_tip && s._show_global_tip(),
                                    s.updateEvent(s._drag_id)
                                }
                                ), s.config.touch_drag),
                                r = i
                            }
                        }
                    }
                    )),
                    i(this._els.dhx_cal_data[0], e[2], (function(e) {
                        if (!n(e))
                            return s.config.touch_swipe_dates && !_ && function(e, t, n, i) {
                                if (!e || !t)
                                    return !1;
                                for (var a = e.target; a && a != s._obj; )
                                    a = a.parentNode;
                                if (a != s._obj)
                                    return !1;
                                if (s.matrix && s.matrix[s.getState().mode] && s.matrix[s.getState().mode].scrollable)
                                    return !1;
                                var r = Math.abs(e.pageY - t.pageY)
                                  , o = Math.abs(e.pageX - t.pageX);
                                return r < i && o > n && (!r || o / r > 3) && (e.pageX > t.pageX ? s._click.dhx_cal_next_button() : s._click.dhx_cal_prev_button(),
                                !0)
                            }(r, o, 200, 100) && (s._block_next_stop = !0),
                            _ && (s._ignore_next_click = !0,
                            setTimeout((function() {
                                s._ignore_next_click = !1
                            }
                            ), 100)),
                            a(e),
                            s._block_next_stop ? (s._block_next_stop = !1,
                            e.preventDefault && e.preventDefault(),
                            e.cancelBubble = !0,
                            !1) : void 0
                    }
                    )),
                    s.event(document.body, e[2], a)
                }
                ,
                s._show_global_tip = function() {
                    s._hide_global_tip();
                    var e = s._global_tip = document.createElement("div");
                    e.className = "dhx_global_tip",
                    s._update_global_tip(1),
                    document.body.appendChild(e)
                }
                ,
                s._update_global_tip = function(e) {
                    var t = s._global_tip;
                    if (t) {
                        var n = "";
                        if (s._drag_id && !e) {
                            var i = s.getEvent(s._drag_id);
                            i && (n = "<div>" + (i._timed ? s.templates.event_header(i.start_date, i.end_date, i) : s.templates.day_date(i.start_date, i.end_date, i)) + "</div>")
                        }
                        "create" == s._drag_mode || "new-size" == s._drag_mode ? t.innerHTML = (s.locale.labels.drag_to_create || "Drag to create") + n : t.innerHTML = (s.locale.labels.drag_to_move || "Drag to move") + n
                    }
                }
                ,
                s._hide_global_tip = function() {
                    var e = s._global_tip;
                    e && e.parentNode && (e.parentNode.removeChild(e),
                    s._global_tip = 0)
                }
                ,
                s._dp_init = function(e) {
                    e._methods = ["_set_event_text_style", "", "_dp_change_event_id", "_dp_hook_delete"],
                    this._dp_change_event_id = function(e, t) {
                        s.getEvent(e) && s.changeEventId(e, t)
                    }
                    ,
                    this._dp_hook_delete = function(t, n) {
                        if (s.getEvent(t))
                            return n && t != n && ("true_deleted" == this.getUserData(t, e.action_param) && this.setUserData(t, e.action_param, "updated"),
                            this.changeEventId(t, n)),
                            this.deleteEvent(n, !0)
                    }
                    ,
                    this.attachEvent("onEventAdded", (function(t) {
                        !this._loading && this._validId(t) && e.setUpdated(t, !0, "inserted")
                    }
                    )),
                    this.attachEvent("onConfirmedBeforeEventDelete", (function(t) {
                        if (this._validId(t)) {
                            var n = e.getState(t);
                            return "inserted" == n || this._new_event ? (e.setUpdated(t, !1),
                            !0) : "deleted" != n && ("true_deleted" == n || (e.setUpdated(t, !0, "deleted"),
                            !1))
                        }
                    }
                    )),
                    this.attachEvent("onEventChanged", (function(t) {
                        !this._loading && this._validId(t) && e.setUpdated(t, !0, "updated")
                    }
                    )),
                    s.attachEvent("onClearAll", (function() {
                        e._in_progress = {},
                        e._invalid = {},
                        e.updatedRows = [],
                        e._waitMode = 0
                    }
                    ));
                    var t = function(e, n, i) {
                        for (var a in i = i || "",
                        n = n || {},
                        e)
                            0 !== a.indexOf("_") && (e[a] && e[a].getUTCFullYear ? n[i + a] = this.obj._helpers.formatDate(e[a]) : e[a] && "object" == typeof e[a] ? t.call(this, e[a], n, i + a + ".") : n[i + a] = e[a]);
                        return n
                    }
                      , n = function(e) {
                        var t = s.utils.copy(e);
                        for (var i in t)
                            0 === i.indexOf("_") ? delete t[i] : t[i] && (t[i].getUTCFullYear ? t[i] = this.obj._helpers.formatDate(t[i]) : "object" == typeof t[i] && (t[i] = n(t[i])));
                        return t
                    };
                    e._getRowData = function(e, i) {
                        var a = this.obj.getEvent(e);
                        return "JSON" == this._tMode ? n.call(this, a) : t.call(this, a)
                    }
                    ,
                    e._clearUpdateFlag = function() {}
                    ,
                    e.attachEvent("insertCallback", s._update_callback),
                    e.attachEvent("updateCallback", s._update_callback),
                    e.attachEvent("deleteCallback", (function(e, t) {
                        this.obj.getEvent(t) ? (this.obj.setUserData(t, this.action_param, "true_deleted"),
                        this.obj.deleteEvent(t)) : this.obj._add_rec_marker && this.obj._update_callback(e, t)
                    }
                    ))
                }
                ,
                s._validId = function(e) {
                    return !0
                }
                ,
                s.setUserData = function(e, t, n) {
                    if (e) {
                        var i = this.getEvent(e);
                        i && (i[t] = n)
                    } else
                        this._userdata[t] = n
                }
                ,
                s.getUserData = function(e, t) {
                    if (e) {
                        var n = this.getEvent(e);
                        return n ? n[t] : null
                    }
                    return this._userdata[t]
                }
                ,
                s._set_event_text_style = function(e, t) {
                    if (s.getEvent(e)) {
                        this.for_rendered(e, (function(e) {
                            e.style.cssText += ";" + t
                        }
                        ));
                        var n = this.getEvent(e);
                        n._text_style = t,
                        this.event_updated(n)
                    }
                }
                ,
                s._update_callback = function(e, t) {
                    var n = s._xmlNodeToJSON(e.firstChild);
                    "none" == n.rec_type && (n.rec_pattern = "none"),
                    n.text = n.text || n._tagvalue,
                    n.start_date = s._helpers.parseDate(n.start_date),
                    n.end_date = s._helpers.parseDate(n.end_date),
                    s.addEvent(n),
                    s._add_rec_marker && s.setCurrentView()
                }
                ,
                s.getRootView = function() {
                    return {
                        view: {
                            render: function() {
                                return {
                                    tag: "div",
                                    type: 1,
                                    attrs: {
                                        style: "width:100%;height:100%;"
                                    },
                                    hooks: {
                                        didInsert: function() {
                                            s.setCurrentView()
                                        }
                                    },
                                    body: [{
                                        el: this.el,
                                        type: 1
                                    }]
                                }
                            },
                            init: function() {
                                var e = document.createElement("DIV");
                                e.id = "scheduler_" + s.uid(),
                                e.style.width = "100%",
                                e.style.height = "100%",
                                e.classList.add("dhx_cal_container"),
                                e.cmp = "grid",
                                e.innerHTML = '<div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div><div class="dhx_cal_tab" name="day_tab"></div><div class="dhx_cal_tab" name="week_tab"></div><div class="dhx_cal_tab" name="month_tab"></div></div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div>',
                                s.init(e),
                                this.el = e
                            }
                        },
                        type: 4
                    }
                }
                ,
                s._skin_settings = {
                    fix_tab_position: [1, 0],
                    use_select_menu_space: [1, 0],
                    wide_form: [1, 0],
                    hour_size_px: [44, 42],
                    displayed_event_color: ["#ff4a4a", "ffc5ab"],
                    displayed_event_text_color: ["#ffef80", "7e2727"]
                },
                s._skin_xy = {
                    lightbox_additional_height: [90, 50],
                    nav_height: [59, 22],
                    bar_height: [24, 20]
                },
                s._is_material_skin = function() {
                    return s.skin ? (s.skin + "").indexOf("material") > -1 : function() {
                        if (void 0 === m) {
                            var e = document.createElement("div");
                            e.style.position = "absolute",
                            e.style.left = "-9999px",
                            e.style.top = "-9999px",
                            e.innerHTML = "<div class='dhx_cal_container'><div class='dhx_cal_scale_placeholder'></div><div>",
                            document.body.appendChild(e);
                            var t = window.getComputedStyle(e.querySelector(".dhx_cal_scale_placeholder")).getPropertyValue("position");
                            m = "absolute" === t,
                            setTimeout((function() {
                                m = null
                            }
                            ), 500)
                        }
                        return m
                    }()
                }
                ,
                window.addEventListener("DOMContentLoaded", o),
                window.addEventListener("load", o),
                s._border_box_events = function() {
                    return r()
                }
                ,
                s._configure = function(e, t, n) {
                    for (var i in t)
                        void 0 === e[i] && (e[i] = t[i][n])
                }
                ,
                s._skin_init = function() {
                    if (!s.skin)
                        for (var e = document.getElementsByTagName("link"), t = 0; t < e.length; t++) {
                            var n = e[t].href.match("dhtmlxscheduler_([a-z]+).css");
                            if (n) {
                                s.skin = n[1];
                                break
                            }
                        }
                    var i = 0;
                    if (!s.skin || "classic" !== s.skin && "glossy" !== s.skin || (i = 1),
                    s._is_material_skin()) {
                        var a = s.config.buttons_left.$inital
                          , r = s.config.buttons_right.$inital;
                        if (a && s.config.buttons_left.slice().join() == a && r && s.config.buttons_right.slice().join() == r) {
                            var o = s.config.buttons_left.slice();
                            s.config.buttons_left = s.config.buttons_right.slice(),
                            s.config.buttons_right = o
                        }
                        s.xy.event_header_height = 18,
                        s.xy.week_agenda_scale_height = 35,
                        s.xy.map_icon_width = 38,
                        s._lightbox_controls.defaults.textarea.height = 64,
                        s._lightbox_controls.defaults.time.height = "auto"
                    }
                    if (this._configure(s.config, s._skin_settings, i),
                    this._configure(s.xy, s._skin_xy, i),
                    "flat" === s.skin && (s.xy.scale_height = 35,
                    s.templates.hour_scale = function(e) {
                        var t = e.getMinutes();
                        return t = t < 10 ? "0" + t : t,
                        "<span class='dhx_scale_h'>" + e.getHours() + "</span><span class='dhx_scale_m'>&nbsp;" + t + "</span>"
                    }
                    ),
                    !i) {
                        var l = s.config.minicalendar;
                        l && (l.padding = 14),
                        s.templates.event_bar_date = function(e, t, n) {
                            return "• <b>" + s.templates.event_date(e) + "</b> "
                        }
                        ,
                        s.attachEvent("onTemplatesReady", (function() {
                            var e = s.date.date_to_str("%d");
                            s.templates._old_month_day || (s.templates._old_month_day = s.templates.month_day);
                            var t = s.templates._old_month_day;
                            if (s.templates.month_day = function(n) {
                                if ("month" == this._mode) {
                                    var i = e(n);
                                    return 1 == n.getDate() && (i = s.locale.date.month_full[n.getMonth()] + " " + i),
                                    +n == +s.date.date_part(this._currentDate()) && (i = s.locale.labels.dhx_cal_today_button + " " + i),
                                    i
                                }
                                return t.call(this, n)
                            }
                            ,
                            s.config.fix_tab_position) {
                                var n = s._els.dhx_cal_navline[0].getElementsByTagName("div")
                                  , i = null
                                  , a = 211
                                  , r = [14, 75, 136]
                                  , o = 14;
                                s._is_material_skin() && (r = [16, 103, 192],
                                a = 294,
                                o = -1);
                                for (var l = 0; l < n.length; l++) {
                                    var _ = n[l]
                                      , d = _.getAttribute("name");
                                    if (d) {
                                        switch (_.style.right = "auto",
                                        d) {
                                        case "day_tab":
                                            _.style.left = r[0] + "px",
                                            _.className += " dhx_cal_tab_first";
                                            break;
                                        case "week_tab":
                                            _.style.left = r[1] + "px";
                                            break;
                                        case "month_tab":
                                            _.style.left = r[2] + "px",
                                            _.className += " dhx_cal_tab_last";
                                            break;
                                        default:
                                            _.style.left = a + "px",
                                            _.className += " dhx_cal_tab_standalone",
                                            a = a + o + _.offsetWidth
                                        }
                                        _.className += " " + d
                                    } else
                                        0 === (_.className || "").indexOf("dhx_minical_icon") && _.parentNode == s._els.dhx_cal_navline[0] && (i = _)
                                }
                                i && (i.style.left = a + "px")
                            }
                        }
                        )),
                        s._skin_init = function() {}
                    }
                }
                ,
                window.jQuery && function(e) {
                    var t = 0
                      , n = [];
                    e.fn.dhx_scheduler = function(i) {
                        if ("string" != typeof i) {
                            var a = [];
                            return this.each((function() {
                                if (this && this.getAttribute)
                                    if (this.getAttribute("dhxscheduler"))
                                        a.push(window[this.getAttribute("dhxscheduler")]);
                                    else {
                                        var e = "scheduler";
                                        t && (e = "scheduler" + (t + 1),
                                        window[e] = Scheduler.getSchedulerInstance());
                                        var n = window[e];
                                        for (var r in this.setAttribute("dhxscheduler", e),
                                        i)
                                            "data" != r && (n.config[r] = i[r]);
                                        this.getElementsByTagName("div").length || (this.innerHTML = '<div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div><div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div></div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div>',
                                        this.className += " dhx_cal_container"),
                                        n.init(this, n.config.date, n.config.mode),
                                        i.data && n.parse(i.data),
                                        a.push(n),
                                        t++
                                    }
                            }
                            )),
                            1 === a.length ? a[0] : a
                        }
                        if (n[i])
                            return n[i].apply(this, []);
                        e.error("Method " + i + " does not exist on jQuery.dhx_scheduler")
                    }
                }(jQuery),
                function() {
                    function e(e, t, n) {
                        t && (e._date = t),
                        n && (e._mode = n)
                    }
                    var t = s.setCurrentView
                      , n = s.updateView
                      , i = null
                      , a = null
                      , r = function(t, r) {
                        var o = this;
                        window.clearTimeout(a),
                        window.clearTimeout(i);
                        var l = o._date
                          , _ = o._mode;
                        e(this, t, r),
                        a = setTimeout((function() {
                            o.callEvent("onBeforeViewChange", [_, l, r || o._mode, t || o._date]) ? (n.call(o, t, r),
                            o.callEvent("onViewChange", [o._mode, o._date]),
                            window.clearTimeout(i),
                            a = 0) : e(o, l, _)
                        }
                        ), s.config.delay_render)
                    }
                      , o = function(t, r) {
                        var o = this
                          , l = arguments;
                        e(this, t, r),
                        window.clearTimeout(i),
                        i = setTimeout((function() {
                            a || n.apply(o, l)
                        }
                        ), s.config.delay_render)
                    };
                    s.attachEvent("onSchedulerReady", (function() {
                        s.config.delay_render ? (s.setCurrentView = r,
                        s.updateView = o) : (s.setCurrentView = t,
                        s.updateView = n)
                    }
                    ))
                }();
                for (var x = 0; x < Scheduler._schedulerPlugins.length; x++)
                    Scheduler._schedulerPlugins[x](s);
                return s._internal_id = Scheduler._seed++,
                Scheduler.$syncFactory && Scheduler.$syncFactory(s),
                s
            }
            ,
            window.Scheduler = Scheduler,
            window.scheduler = Scheduler.getSchedulerInstance(),
            dhtmlx && dhtmlx.attaches && (dhtmlx.attaches.attachScheduler = function(e, t, n, i) {
                n = n || '<div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div>';
                var a = document.createElement("DIV");
                return a.id = "dhxSchedObj_" + this._genStr(12),
                a.innerHTML = '<div id="' + a.id + '" class="dhx_cal_container" style="width:100%; height:100%;"><div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div>' + n + '</div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div></div>',
                document.body.appendChild(a.firstChild),
                this.attachObject(a.id, !1, !0),
                this.vs[this.av].sched = i,
                this.vs[this.av].schedId = a.id,
                i.setSizes = i.updateView,
                i.destructor = function() {}
                ,
                i.init(a.id, e, t),
                this.vs[this._viewRestore()].sched
            }
            )
        }()
    },
    1430: function(e, t, n) {},
    1431: function(e, t) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        Scheduler.plugin((function(e) {
            e.config.limit_start = null,
            e.config.limit_end = null,
            e.config.limit_view = !1,
            e.config.check_limits = !0,
            e.config.mark_now = !0,
            e.config.display_marked_timespans = !0,
            e._temp_limit_scope = function() {
                function t(t, n, i, a, r) {
                    var o = e
                      , s = []
                      , l = {
                        _props: "map_to",
                        matrix: "y_property"
                    };
                    for (var _ in l) {
                        var d = l[_];
                        if (o[_])
                            for (var c in o[_]) {
                                var h = o[_][c][d];
                                t[h] && (s = o._add_timespan_zones(s, e._get_blocked_zones(n[c], t[h], i, a, r)))
                            }
                    }
                    return o._add_timespan_zones(s, e._get_blocked_zones(n, "global", i, a, r))
                }
                var n = null
                  , i = "dhx_time_block"
                  , a = "default"
                  , r = function(e, t, n) {
                    var a = "object" == typeof e ? e : {
                        days: e
                    };
                    return a.type = i,
                    a.css = "",
                    t && (n && (a.sections = n),
                    a = function(e, t, n) {
                        return t instanceof Date && n instanceof Date ? (e.start_date = t,
                        e.end_date = n) : (e.days = t,
                        e.zones = n),
                        e
                    }(a, e, t)),
                    a
                };
                e.blockTime = function(t, n, i) {
                    var a = r(t, n, i);
                    return e.addMarkedTimespan(a)
                }
                ,
                e.unblockTime = function(t, n, i) {
                    var a = r(t, n = n || "fullday", i);
                    return e.deleteMarkedTimespan(a)
                }
                ,
                e.attachEvent("onBeforeViewChange", (function(t, n, i, a) {
                    function r(t, n) {
                        var i = e.config.limit_start
                          , a = e.config.limit_end
                          , r = e.date.add(t, 1, n);
                        return t.valueOf() > a.valueOf() || r <= i.valueOf()
                    }
                    return !e.config.limit_view || (!r(a = a || n, i = i || t) || n.valueOf() == a.valueOf()) || (setTimeout((function() {
                        var t = r(n, i) ? e.config.limit_start : n;
                        e.setCurrentView(r(t, i) ? null : t, i)
                    }
                    ), 1),
                    !1)
                }
                )),
                e.checkInMarkedTimespan = function(n, i, r) {
                    i = i || a;
                    for (var o = !0, s = new Date(n.start_date.valueOf()), l = e.date.add(s, 1, "day"), _ = e._marked_timespans; s < n.end_date; s = e.date.date_part(l),
                    l = e.date.add(s, 1, "day")) {
                        var d = +e.date.date_part(new Date(s))
                          , c = t(n, _, s.getDay(), d, i);
                        if (c)
                            for (var h = 0; h < c.length; h += 2) {
                                var u = e._get_zone_minutes(s)
                                  , f = n.end_date > l || n.end_date.getDate() != s.getDate() ? 1440 : e._get_zone_minutes(n.end_date)
                                  , p = c[h]
                                  , v = c[h + 1];
                                if (p < f && v > u && !(o = "function" == typeof r && r(n, u, f, p, v)))
                                    break
                            }
                    }
                    return !o
                }
                ;
                var o = e.checkLimitViolation = function(t) {
                    if (!t)
                        return !0;
                    if (!e.config.check_limits)
                        return !0;
                    var n = e
                      , a = n.config
                      , r = [];
                    if (t.rec_type)
                        for (var o = e.getRecDates(t), s = 0; s < o.length; s++) {
                            var l = e._copy_event(t);
                            e._lame_copy(l, o[s]),
                            r.push(l)
                        }
                    else
                        r = [t];
                    for (var _ = !0, d = 0; d < r.length; d++) {
                        var c = !0;
                        (l = r[d])._timed = e.isOneDayEvent(l),
                        (c = !a.limit_start || !a.limit_end || l.start_date.valueOf() >= a.limit_start.valueOf() && l.end_date.valueOf() <= a.limit_end.valueOf()) && (c = !e.checkInMarkedTimespan(l, i, (function(e, t, i, a, r) {
                            var o = !0;
                            return t <= r && t >= a && ((1440 == r || i < r) && (o = !1),
                            e._timed && n._drag_id && "new-size" == n._drag_mode ? (e.start_date.setHours(0),
                            e.start_date.setMinutes(r)) : o = !1),
                            (i >= a && i < r || t < a && i > r) && (e._timed && n._drag_id && "new-size" == n._drag_mode ? (e.end_date.setHours(0),
                            e.end_date.setMinutes(a)) : o = !1),
                            o
                        }
                        ))),
                        c || (c = n.checkEvent("onLimitViolation") ? n.callEvent("onLimitViolation", [l.id, l]) : c),
                        _ = _ && c
                    }
                    return _ || (n._drag_id = null,
                    n._drag_mode = null),
                    _
                }
                ;
                e._get_blocked_zones = function(e, t, n, i, a) {
                    var r = [];
                    if (e && e[t])
                        for (var o = e[t], s = this._get_relevant_blocked_zones(n, i, o, a), l = 0; l < s.length; l++)
                            r = this._add_timespan_zones(r, s[l].zones);
                    return r
                }
                ,
                e._get_relevant_blocked_zones = function(e, t, n, i) {
                    return n[t] && n[t][i] ? n[t][i] : n[e] && n[e][i] ? n[e][i] : []
                }
                ,
                e.attachEvent("onMouseDown", (function(e) {
                    return !(e == i)
                }
                )),
                e.attachEvent("onBeforeDrag", (function(t) {
                    return !t || o(e.getEvent(t))
                }
                )),
                e.attachEvent("onClick", (function(t, n) {
                    return o(e.getEvent(t))
                }
                )),
                e.attachEvent("onBeforeLightbox", (function(t) {
                    var i = e.getEvent(t);
                    return n = [i.start_date, i.end_date],
                    o(i)
                }
                )),
                e.attachEvent("onEventSave", (function(t, n, i) {
                    if (!n.start_date || !n.end_date) {
                        var a = e.getEvent(t);
                        n.start_date = new Date(a.start_date),
                        n.end_date = new Date(a.end_date)
                    }
                    if (n.rec_type) {
                        var r = e._lame_clone(n);
                        return e._roll_back_dates(r),
                        o(r)
                    }
                    return o(n)
                }
                )),
                e.attachEvent("onEventAdded", (function(t) {
                    if (!t)
                        return !0;
                    var n = e.getEvent(t);
                    return !o(n) && e.config.limit_start && e.config.limit_end && (n.start_date < e.config.limit_start && (n.start_date = new Date(e.config.limit_start)),
                    n.start_date.valueOf() >= e.config.limit_end.valueOf() && (n.start_date = this.date.add(e.config.limit_end, -1, "day")),
                    n.end_date < e.config.limit_start && (n.end_date = new Date(e.config.limit_start)),
                    n.end_date.valueOf() >= e.config.limit_end.valueOf() && (n.end_date = this.date.add(e.config.limit_end, -1, "day")),
                    n.start_date.valueOf() >= n.end_date.valueOf() && (n.end_date = this.date.add(n.start_date, this.config.event_duration || this.config.time_step, "minute")),
                    n._timed = this.isOneDayEvent(n)),
                    !0
                }
                )),
                e.attachEvent("onEventChanged", (function(t) {
                    if (!t)
                        return !0;
                    var i = e.getEvent(t);
                    if (!o(i)) {
                        if (!n)
                            return !1;
                        i.start_date = n[0],
                        i.end_date = n[1],
                        i._timed = this.isOneDayEvent(i)
                    }
                    return !0
                }
                )),
                e.attachEvent("onBeforeEventChanged", (function(e, t, n) {
                    return o(e)
                }
                )),
                e.attachEvent("onBeforeEventCreated", (function(t) {
                    var n = e.getActionData(t).date
                      , i = {
                        _timed: !0,
                        start_date: n,
                        end_date: e.date.add(n, e.config.time_step, "minute")
                    };
                    return o(i)
                }
                )),
                e.attachEvent("onViewChange", (function() {
                    e._mark_now()
                }
                )),
                e.attachEvent("onAfterSchedulerResize", (function() {
                    return window.setTimeout((function() {
                        e._mark_now()
                    }
                    ), 1),
                    !0
                }
                )),
                e.attachEvent("onTemplatesReady", (function() {
                    e._mark_now_timer = window.setInterval((function() {
                        e._is_initialized() && e._mark_now()
                    }
                    ), 6e4)
                }
                )),
                e._mark_now = function(t) {
                    var n = "dhx_now_time";
                    this._els[n] || (this._els[n] = []);
                    var i = e._currentDate()
                      , a = this.config;
                    if (e._remove_mark_now(),
                    !t && a.mark_now && i < this._max_date && i > this._min_date && i.getHours() >= a.first_hour && i.getHours() < a.last_hour) {
                        var r = this.locate_holder_day(i);
                        this._els[n] = e._append_mark_now(r, i)
                    }
                }
                ,
                e._append_mark_now = function(t, n) {
                    var i = "dhx_now_time"
                      , a = e._get_zone_minutes(n)
                      , r = {
                        zones: [a, a + 1],
                        css: i,
                        type: i
                    };
                    if (!this._table_view) {
                        if (this._props && this._props[this._mode]) {
                            var o, s, l = this._props[this._mode], _ = l.size || l.options.length;
                            l.days > 1 ? (l.size && l.options.length && (t = (l.position + t) / l.options.length * l.size),
                            o = t,
                            s = t + _) : s = (o = 0) + _;
                            for (var d = [], c = o; c < s; c++) {
                                var h = c;
                                r.days = h;
                                var u = e._render_marked_timespan(r, null, h)[0];
                                d.push(u)
                            }
                            return d
                        }
                        return r.days = t,
                        e._render_marked_timespan(r, null, t)
                    }
                    if ("month" == this._mode)
                        return r.days = +e.date.date_part(n),
                        e._render_marked_timespan(r, null, null)
                }
                ,
                e._remove_mark_now = function() {
                    for (var e = "dhx_now_time", t = this._els[e], n = 0; n < t.length; n++) {
                        var i = t[n]
                          , a = i.parentNode;
                        a && a.removeChild(i)
                    }
                    this._els[e] = []
                }
                ,
                e._marked_timespans = {
                    global: {}
                },
                e._get_zone_minutes = function(e) {
                    return 60 * e.getHours() + e.getMinutes()
                }
                ,
                e._prepare_timespan_options = function(t) {
                    var n = []
                      , i = [];
                    if ("fullweek" == t.days && (t.days = [0, 1, 2, 3, 4, 5, 6]),
                    t.days instanceof Array) {
                        for (var r = t.days.slice(), o = 0; o < r.length; o++) {
                            var s = e._lame_clone(t);
                            s.days = r[o],
                            n.push.apply(n, e._prepare_timespan_options(s))
                        }
                        return n
                    }
                    if (!t || !(t.start_date && t.end_date && t.end_date > t.start_date || void 0 !== t.days && t.zones) && !t.type)
                        return n;
                    "fullday" == t.zones && (t.zones = [0, 1440]),
                    t.zones && t.invert_zones && (t.zones = e.invertZones(t.zones)),
                    t.id = e.uid(),
                    t.css = t.css || "",
                    t.type = t.type || a;
                    var l = t.sections;
                    if (l) {
                        for (var _ in l)
                            if (l.hasOwnProperty(_)) {
                                var d = l[_];
                                d instanceof Array || (d = [d]);
                                for (o = 0; o < d.length; o++) {
                                    (m = e._lame_copy({}, t)).sections = {},
                                    m.sections[_] = d[o],
                                    i.push(m)
                                }
                            }
                    } else
                        i.push(t);
                    for (var c = 0; c < i.length; c++) {
                        var h = i[c]
                          , u = h.start_date
                          , f = h.end_date;
                        if (u && f)
                            for (var p = e.date.date_part(new Date(u)), v = e.date.add(p, 1, "day"); p < f; ) {
                                var m;
                                delete (m = e._lame_copy({}, h)).start_date,
                                delete m.end_date,
                                m.days = p.valueOf();
                                var g = u > p ? e._get_zone_minutes(u) : 0
                                  , y = f > v || f.getDate() != p.getDate() ? 1440 : e._get_zone_minutes(f);
                                m.zones = [g, y],
                                n.push(m),
                                p = v,
                                v = e.date.add(v, 1, "day")
                            }
                        else
                            h.days instanceof Date && (h.days = e.date.date_part(h.days).valueOf()),
                            h.zones = t.zones.slice(),
                            n.push(h)
                    }
                    return n
                }
                ,
                e._get_dates_by_index = function(t, n, i) {
                    var a = [];
                    n = e.date.date_part(new Date(n || e._min_date)),
                    i = new Date(i || e._max_date);
                    for (var r = n.getDay(), o = t - r >= 0 ? t - r : 7 - n.getDay() + t, s = e.date.add(n, o, "day"); s < i; s = e.date.add(s, 1, "week"))
                        a.push(s);
                    return a
                }
                ,
                e._get_css_classes_by_config = function(e) {
                    var t = [];
                    return e.type == i && (t.push(i),
                    e.css && t.push(i + "_reset")),
                    t.push("dhx_marked_timespan", e.css),
                    t.join(" ")
                }
                ,
                e._get_block_by_config = function(e) {
                    var t = document.createElement("div");
                    return e.html && ("string" == typeof e.html ? t.innerHTML = e.html : t.appendChild(e.html)),
                    t
                }
                ,
                e._render_marked_timespan = function(t, n, i) {
                    var a = []
                      , r = e.config
                      , o = this._min_date
                      , s = this._max_date
                      , l = !1;
                    if (!r.display_marked_timespans)
                        return a;
                    if (!i && 0 !== i) {
                        if (t.days < 7)
                            i = t.days;
                        else {
                            var _ = new Date(t.days);
                            if (l = +_,
                            !(+s > +_ && +o <= +_))
                                return a;
                            i = _.getDay()
                        }
                        var d = o.getDay();
                        d > i ? i = 7 - (d - i) : i -= d
                    }
                    var c = t.zones
                      , h = e._get_css_classes_by_config(t);
                    if (e._table_view && "month" == e._mode) {
                        var u = []
                          , f = [];
                        if (n)
                            u.push(n),
                            f.push(i);
                        else {
                            f = l ? [l] : e._get_dates_by_index(i);
                            for (var p = 0; p < f.length; p++)
                                u.push(this._scales[f[p]])
                        }
                        for (p = 0; p < u.length; p++) {
                            n = u[p],
                            i = f[p];
                            var v = Math.floor((this._correct_shift(i, 1) - o.valueOf()) / (864e5 * this._cols.length))
                              , m = this.locate_holder_day(i, !1) % this._cols.length;
                            if (!this._ignores[m]) {
                                var g = this.config.rtl ? this._colsS.col_length - 1 - m : m
                                  , y = e._get_block_by_config(t)
                                  , x = Math.max(n.offsetHeight - 1, 0)
                                  , b = Math.max(n.offsetWidth - 1, 0)
                                  , w = this._colsS[g]
                                  , E = this._colsS.heights[v] + (this._colsS.height ? this.xy.month_scale_height + 2 : 2) - 1;
                                y.className = h,
                                y.style.top = E + "px",
                                y.style.lineHeight = y.style.height = x + "px";
                                for (var k = 0; k < c.length; k += 2) {
                                    var D = c[p];
                                    if ((A = c[p + 1]) <= D)
                                        return [];
                                    (M = y.cloneNode(!0)).style.left = w + Math.round(D / 1440 * b) + "px",
                                    M.style.width = Math.round((A - D) / 1440 * b) + "px",
                                    n.appendChild(M),
                                    a.push(M)
                                }
                            }
                        }
                    } else {
                        var S = i;
                        if (this._ignores[this.locate_holder_day(i, !1)])
                            return a;
                        if (this._props && this._props[this._mode] && t.sections && t.sections[this._mode]) {
                            var O = this._props[this._mode];
                            S = O.order[t.sections[this._mode]];
                            var C = O.order[t.sections[this._mode]];
                            O.days > 1 ? S = S * (O.size || O.options.length) + C : (S = C,
                            O.size && S > O.position + O.size && (S = 0))
                        }
                        n = n || e.locate_holder(S);
                        for (p = 0; p < c.length; p += 2) {
                            var A, M;
                            D = Math.max(c[p], 60 * r.first_hour);
                            if ((A = Math.min(c[p + 1], 60 * r.last_hour)) <= D) {
                                if (p + 2 < c.length)
                                    continue;
                                return []
                            }
                            (M = e._get_block_by_config(t)).className = h;
                            var T = 24 * this.config.hour_size_px + 1
                              , N = 36e5;
                            M.style.top = Math.round((60 * D * 1e3 - this.config.first_hour * N) * this.config.hour_size_px / N) % T + "px",
                            M.style.lineHeight = M.style.height = Math.max(Math.round(60 * (A - D) * 1e3 * this.config.hour_size_px / N) % T, 1) + "px",
                            n.appendChild(M),
                            a.push(M)
                        }
                    }
                    return a
                }
                ,
                e._mark_timespans = function() {
                    var t = this._els.dhx_cal_data[0]
                      , n = [];
                    if (e._table_view && "month" == e._mode)
                        for (var i in this._scales) {
                            var a = new Date(+i);
                            n.push.apply(n, e._on_scale_add_marker(this._scales[i], a))
                        }
                    else {
                        a = new Date(e._min_date);
                        for (var r = 0, o = t.childNodes.length; r < o; r++) {
                            var s = t.childNodes[r];
                            s.firstChild && e._getClassName(s.firstChild).indexOf("dhx_scale_hour") > -1 || (n.push.apply(n, e._on_scale_add_marker(s, a)),
                            a = e.date.add(a, 1, "day"))
                        }
                    }
                    return n
                }
                ,
                e.markTimespan = function(t) {
                    var n = !1;
                    this._els.dhx_cal_data || (e.get_elements(),
                    n = !0);
                    var i = e._marked_timespans_ids
                      , a = e._marked_timespans_types
                      , r = e._marked_timespans;
                    e.deleteMarkedTimespan(),
                    e.addMarkedTimespan(t);
                    var o = e._mark_timespans();
                    return n && (e._els = []),
                    e._marked_timespans_ids = i,
                    e._marked_timespans_types = a,
                    e._marked_timespans = r,
                    o
                }
                ,
                e.unmarkTimespan = function(e) {
                    if (e)
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.parentNode && n.parentNode.removeChild(n)
                        }
                }
                ,
                e._addMarkerTimespanConfig = function(t) {
                    var n = "global"
                      , i = e._marked_timespans
                      , a = t.id
                      , r = e._marked_timespans_ids;
                    r[a] || (r[a] = []);
                    var o = t.days
                      , s = t.sections
                      , l = t.type;
                    if (t.id = a,
                    s) {
                        for (var _ in s)
                            if (s.hasOwnProperty(_)) {
                                i[_] || (i[_] = {});
                                var d = s[_]
                                  , c = i[_];
                                c[d] || (c[d] = {}),
                                c[d][o] || (c[d][o] = {}),
                                c[d][o][l] || (c[d][o][l] = [],
                                e._marked_timespans_types || (e._marked_timespans_types = {}),
                                e._marked_timespans_types[l] || (e._marked_timespans_types[l] = !0));
                                var h = c[d][o][l];
                                t._array = h,
                                h.push(t),
                                r[a].push(t)
                            }
                    } else {
                        i[n][o] || (i[n][o] = {}),
                        i[n][o][l] || (i[n][o][l] = []),
                        e._marked_timespans_types || (e._marked_timespans_types = {}),
                        e._marked_timespans_types[l] || (e._marked_timespans_types[l] = !0);
                        h = i[n][o][l];
                        t._array = h,
                        h.push(t),
                        r[a].push(t)
                    }
                }
                ,
                e._marked_timespans_ids = {},
                e.addMarkedTimespan = function(t) {
                    var n = e._prepare_timespan_options(t);
                    if (n.length) {
                        for (var i = n[0].id, a = 0; a < n.length; a++)
                            e._addMarkerTimespanConfig(n[a]);
                        return i
                    }
                }
                ,
                e._add_timespan_zones = function(e, t) {
                    var n = e.slice();
                    if (t = t.slice(),
                    !n.length)
                        return t;
                    for (var i = 0; i < n.length; i += 2)
                        for (var a = n[i], r = n[i + 1], o = i + 2 == n.length, s = 0; s < t.length; s += 2) {
                            var l = t[s]
                              , _ = t[s + 1];
                            if (_ > r && l <= r || l < a && _ >= a)
                                n[i] = Math.min(a, l),
                                n[i + 1] = Math.max(r, _),
                                i -= 2;
                            else {
                                if (!o)
                                    continue;
                                var d = a > l ? 0 : 2;
                                n.splice(i + d, 0, l, _)
                            }
                            t.splice(s--, 2);
                            break
                        }
                    return n
                }
                ,
                e._subtract_timespan_zones = function(e, t) {
                    for (var n = e.slice(), i = 0; i < n.length; i += 2)
                        for (var a = n[i], r = n[i + 1], o = 0; o < t.length; o += 2) {
                            var s = t[o]
                              , l = t[o + 1];
                            if (l > a && s < r) {
                                var _ = !1;
                                a >= s && r <= l && n.splice(i, 2),
                                a < s && (n.splice(i, 2, a, s),
                                _ = !0),
                                r > l && n.splice(_ ? i + 2 : i, _ ? 0 : 2, l, r),
                                i -= 2;
                                break
                            }
                        }
                    return n
                }
                ,
                e.invertZones = function(t) {
                    return e._subtract_timespan_zones([0, 1440], t.slice())
                }
                ,
                e._delete_marked_timespan_by_id = function(t) {
                    var n = e._marked_timespans_ids[t];
                    if (n)
                        for (var i = 0; i < n.length; i++)
                            for (var a = n[i], r = a._array, o = 0; o < r.length; o++)
                                if (r[o] == a) {
                                    r.splice(o, 1);
                                    break
                                }
                }
                ,
                e._delete_marked_timespan_by_config = function(t) {
                    var n, i = e._marked_timespans, r = t.sections, o = t.days, s = t.type || a;
                    if (r) {
                        for (var l in r)
                            if (r.hasOwnProperty(l) && i[l]) {
                                var _ = r[l];
                                i[l][_] && (n = i[l][_])
                            }
                    } else
                        n = i.global;
                    if (n)
                        if (void 0 !== o)
                            n[o] && n[o][s] && (e._addMarkerTimespanConfig(t),
                            e._delete_marked_timespans_list(n[o][s], t));
                        else
                            for (var d in n)
                                if (n[d][s]) {
                                    var c = e._lame_clone(t);
                                    t.days = d,
                                    e._addMarkerTimespanConfig(c),
                                    e._delete_marked_timespans_list(n[d][s], t)
                                }
                }
                ,
                e._delete_marked_timespans_list = function(t, n) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i]
                          , r = e._subtract_timespan_zones(a.zones, n.zones);
                        if (r.length)
                            a.zones = r;
                        else {
                            t.splice(i, 1),
                            i--;
                            for (var o = e._marked_timespans_ids[a.id], s = 0; s < o.length; s++)
                                if (o[s] == a) {
                                    o.splice(s, 1);
                                    break
                                }
                        }
                    }
                }
                ,
                e.deleteMarkedTimespan = function(t) {
                    if (arguments.length || (e._marked_timespans = {
                        global: {}
                    },
                    e._marked_timespans_ids = {},
                    e._marked_timespans_types = {}),
                    "object" != typeof t)
                        e._delete_marked_timespan_by_id(t);
                    else {
                        t.start_date && t.end_date || (void 0 !== t.days || t.type || (t.days = "fullweek"),
                        t.zones || (t.zones = "fullday"));
                        var n = [];
                        if (t.type)
                            n.push(t.type);
                        else
                            for (var i in e._marked_timespans_types)
                                n.push(i);
                        for (var a = e._prepare_timespan_options(t), r = 0; r < a.length; r++)
                            for (var o = a[r], s = 0; s < n.length; s++) {
                                var l = e._lame_clone(o);
                                l.type = n[s],
                                e._delete_marked_timespan_by_config(l)
                            }
                    }
                }
                ,
                e._get_types_to_render = function(t, n) {
                    var i = t ? e._lame_copy({}, t) : {};
                    for (var a in n || {})
                        n.hasOwnProperty(a) && (i[a] = n[a]);
                    return i
                }
                ,
                e._get_configs_to_render = function(e) {
                    var t = [];
                    for (var n in e)
                        e.hasOwnProperty(n) && t.push.apply(t, e[n]);
                    return t
                }
                ,
                e._on_scale_add_marker = function(t, n) {
                    if (!e._table_view || "month" == e._mode) {
                        var i = n.getDay()
                          , a = n.valueOf()
                          , r = this._mode
                          , o = e._marked_timespans
                          , s = []
                          , l = [];
                        if (this._props && this._props[r]) {
                            var _ = this._props[r]
                              , d = _.options
                              , c = d[e._get_unit_index(_, n)];
                            if (_.days > 1) {
                                var h = Math.round((n - e._min_date) / 864e5)
                                  , u = _.size || d.length;
                                n = e.date.add(e._min_date, Math.floor(h / u), "day"),
                                n = e.date.date_part(n)
                            } else
                                n = e.date.date_part(new Date(this._date));
                            if (i = n.getDay(),
                            a = n.valueOf(),
                            o[r] && o[r][c.key]) {
                                var f = o[r][c.key]
                                  , p = e._get_types_to_render(f[i], f[a]);
                                s.push.apply(s, e._get_configs_to_render(p))
                            }
                        }
                        var v = o.global
                          , m = v[a] || v[i];
                        s.push.apply(s, e._get_configs_to_render(m));
                        for (var g = 0; g < s.length; g++)
                            l.push.apply(l, e._render_marked_timespan(s[g], t, n));
                        return l
                    }
                }
                ,
                e.attachEvent("onScaleAdd", (function() {
                    e._on_scale_add_marker.apply(e, arguments)
                }
                )),
                e.dblclick_dhx_marked_timespan = function(t, n) {
                    e.callEvent("onScaleDblClick", [e.getActionData(t).date, n, t]),
                    e.config.dblclick_create && e.addEventNow(e.getActionData(t).date, null, t)
                }
            }
            ,
            e._temp_limit_scope()
        }
        ))
    },
    1432: function(e, t) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        Scheduler.plugin((function(e) {
            e._temp_matrix_scope = function() {
                function t(e, t) {
                    var n = t.order[e];
                    return void 0 === n && (n = "$_" + e),
                    n
                }
                function n(e, t) {
                    if (t[e.key] = e,
                    e.children)
                        for (var i = 0; i < e.children.length; i++)
                            n(e.children[i], t)
                }
                function i(e) {
                    for (var t = {}, i = e.y_unit_original || e.y_unit, a = 0; a < i.length; a++)
                        n(i[a], t);
                    return t
                }
                function a() {
                    var e = document.createElement("p");
                    e.style.width = "100%",
                    e.style.height = "200px";
                    var t = document.createElement("div");
                    t.style.position = "absolute",
                    t.style.top = "0px",
                    t.style.left = "0px",
                    t.style.visibility = "hidden",
                    t.style.width = "200px",
                    t.style.height = "150px",
                    t.style.overflow = "hidden",
                    t.appendChild(e),
                    document.body.appendChild(t);
                    var n = e.offsetWidth;
                    t.style.overflow = "scroll";
                    var i = e.offsetWidth;
                    return n == i && (i = t.clientWidth),
                    document.body.removeChild(t),
                    n - i
                }
                function r(t) {
                    return e._helpers.formatDate(t)
                }
                function o(t, n) {
                    var i = t.querySelector(".dhx_timeline_data_wrapper");
                    return n.scrollable || (i = e.$container.querySelector(".dhx_cal_data")),
                    i
                }
                function s() {
                    return e.$container.querySelector(".dhx_cal_data .dhx_timeline_label_col")
                }
                function l(t, n, i, r) {
                    function l(e) {
                        if (!(e = e || window.event).shiftKey) {
                            var t = e.deltaY || e.detail || -e.wheelDelta;
                            t = t < 0 ? -100 : 100,
                            d.scrollTop += t,
                            e.preventDefault && e.preventDefault()
                        }
                    }
                    n._is_ev_creating = !1;
                    var _, d = o(t, n), c = e._els.dhx_cal_header[0], h = function(e) {
                        return e.querySelector(".dhx_timeline_label_wrapper")
                    }(t);
                    if (h && (h.addEventListener ? "onwheel"in document ? h.addEventListener("wheel", l) : "onmousewheel"in document && h.addEventListener("mousewheel", l) : h.attachEvent("onmousewheel", l),
                    !h.$eventsAttached)) {
                        h.$eventsAttached = !0;
                        var u = {
                            pageX: 0,
                            pageY: 0
                        };
                        h.addEventListener("touchstart", (function(e) {
                            var t = e;
                            e.touches && (t = e.touches[0]),
                            u = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            }
                        }
                        )),
                        h.addEventListener("touchmove", (function(e) {
                            var t = e;
                            e.touches && (t = e.touches[0]);
                            var n = u.pageY - t.pageY;
                            u = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            },
                            n && (d.scrollTop += n),
                            e && e.preventDefault && e.preventDefault()
                        }
                        ))
                    }
                    if (d.onscroll = function(l) {
                        var h = o(t, n)
                          , u = h.scrollTop
                          , f = n.scrollHelper.getScrollValue(h)
                          , p = e._timeline_smart_render.getViewPort(n.scrollHelper, 0, f, u)
                          , v = s();
                        if (n.scrollable && (v.style.top = -u + "px"),
                        !1 !== n.smart_rendering) {
                            if ((f !== n._x_scroll || n._is_ev_creating) && (n.second_scale ? e._timeline_smart_render.updateHeader(n, p, c.children[1]) : e._timeline_smart_render.updateHeader(n, p, c.children[0])),
                            e.config.rtl) {
                                var m = +e.$container.querySelector(".dhx_timeline_label_wrapper").style.height.replace("px", "")
                                  , g = n._section_height[n.y_unit.length] + n._label_rows[n._label_rows.length - 1].top;
                                n.scrollHelper.getMode() == n.scrollHelper.modes.minMax && (g > m || "tree" == n.render) ? c.style.right = -1 - f - a() + "px" : c.style.right = -1 - f + "px",
                                c.style.left = "unset"
                            } else
                                c.style.left = -1 - f + "px";
                            (n._options_changed || u !== n._y_scroll || n._is_ev_creating) && e._timeline_smart_render.updateLabels(n, p, v),
                            n._is_ev_creating = !1,
                            e._timeline_smart_render.updateGridCols(n, p),
                            e._timeline_smart_render.updateGridRows(n, p);
                            var y = !1;
                            "cell" != n.render && (window.requestAnimationFrame ? (y = !0,
                            _ && cancelAnimationFrame(_),
                            _ = requestAnimationFrame((function() {
                                e._timeline_smart_render.updateEvents(n, p),
                                _ = 0,
                                n.callEvent("onScroll", [n.scrollHelper.getScrollValue(d), d.scrollTop])
                            }
                            ))) : e._timeline_smart_render.updateEvents(n, p));
                            var x, b = 0;
                            n._scales = {};
                            for (var w = 0, E = (x = "cell" === n.render ? h.querySelectorAll(".dhx_timeline_data_col .dhx_timeline_data_row") : h.querySelectorAll(".dhx_timeline_data_col .dhx_matrix_line")).length; w < E; w++) {
                                var k = x[w].getAttribute("data-section-id")
                                  , D = n.order[k];
                                i[D] = r[D].height,
                                n._scales[k] = x[w]
                            }
                            for (w = 0,
                            E = i.length; w < E; w++)
                                b += i[w];
                            e.$container.querySelector(".dhx_timeline_data_col").style.height = b + "px";
                            var S = h.scrollTop
                              , O = n.scrollHelper.getScrollValue(h)
                              , C = n._summ - e.$container.querySelector(".dhx_cal_data").offsetWidth + n.dx + n.custom_scroll_width;
                            e._timeline_save_scroll_pos(n, S, O, C),
                            y || n.callEvent("onScroll", [O, S]),
                            n._is_new_view = !1
                        }
                    }
                    ,
                    !d.$eventsAttached) {
                        d.$eventsAttached = !0;
                        var f = {
                            pageX: 0,
                            pageY: 0
                        };
                        d.addEventListener("touchstart", (function(e) {
                            var t = e;
                            e.touches && (t = e.touches[0]),
                            f = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            }
                        }
                        )),
                        d.addEventListener("touchmove", (function(t) {
                            var i = t;
                            t.touches && (i = t.touches[0]);
                            var a = s()
                              , r = f.pageX - i.pageX
                              , o = f.pageY - i.pageY;
                            if (f = {
                                pageX: i.pageX,
                                pageY: i.pageY
                            },
                            (r || o) && !e.getState().drag_id) {
                                var l = Math.abs(r)
                                  , _ = Math.abs(o)
                                  , c = Math.sqrt(r * r + o * o);
                                l / c < .42 ? r = 0 : _ / c < .42 && (o = 0),
                                n.scrollHelper.setScrollValue(n.scrollHelper.getScrollValue(d) + r),
                                d.scrollTop += o,
                                n.scrollable && o && (a.style.top = -d.scrollTop + "px")
                            }
                            return t && t.preventDefault && t.preventDefault(),
                            !1
                        }
                        ))
                    }
                    n.scroll_position && n._is_new_view ? n.scrollTo(n.scroll_position) : e._timeline_set_scroll_pos(t, n),
                    n._is_ev_creating = !0
                }
                function _(t) {
                    y && clearInterval(y),
                    e._schedulerOuter = e.$container.querySelector(".dhx_timeline_data_wrapper");
                    var n = {
                        pageX: t.touches ? t.touches[0].pageX : t.pageX,
                        pageY: t.touches ? t.touches[0].pageY : t.pageY
                    };
                    y = setInterval((function() {
                        !function(t) {
                            if (!e.getState().drag_id)
                                return clearInterval(y),
                                void (x = null);
                            var n = e.matrix[e._mode];
                            if (n) {
                                var i = e._schedulerOuter
                                  , a = function(t, n) {
                                    var i = e.matrix[e._mode]
                                      , a = {}
                                      , r = {}
                                      , o = n;
                                    for (a.x = t.touches ? t.touches[0].pageX : t.pageX,
                                    a.y = t.touches ? t.touches[0].pageY : t.pageY,
                                    r.left = o.offsetLeft + i.dx,
                                    r.top = o.offsetTop; o; )
                                        r.left += o.offsetLeft,
                                        r.top += o.offsetTop,
                                        o = o.offsetParent;
                                    return {
                                        x: a.x - r.left,
                                        y: a.y - r.top
                                    }
                                }(t, i)
                                  , r = i.offsetWidth - n.dx
                                  , o = i.offsetHeight
                                  , s = a.x
                                  , l = a.y
                                  , _ = n.autoscroll || {};
                                e._merge(_, {
                                    range_x: 200,
                                    range_y: 100,
                                    speed_x: 20,
                                    speed_y: 10
                                });
                                var c = d(s, r, x ? x.x : 0, _.range_x);
                                n.scrollable || (c = 0);
                                var h = d(l, o, x ? x.y : 0, _.range_y);
                                !h && !c || x || (x = {
                                    x: s,
                                    y: l
                                },
                                c = 0,
                                h = 0),
                                c *= _.speed_x,
                                h *= _.speed_y,
                                c && h && (Math.abs(c / 5) > Math.abs(h) ? h = 0 : Math.abs(h / 5) > Math.abs(c) && (c = 0)),
                                c || h ? (x.started = !0,
                                function(t, n) {
                                    var i = e._schedulerOuter;
                                    n && (i.scrollTop += n),
                                    t && (i.scrollLeft += t)
                                }(c, h)) : clearInterval(y)
                            }
                        }(n)
                    }
                    ), g)
                }
                function d(e, t, n, i) {
                    return e < i && (!x || x.started || e < n) ? -1 : t - e < i && (!x || x.started || e > n) ? 1 : 0
                }
                var c = function() {
                    function e() {
                        var e = a.minMax
                          , t = function() {
                            var e = document.createElement("div");
                            e.style.cssText = "direction: rtl;overflow: auto;width:100px;height: 100px;position:absolute;top: -100500px;left: -100500px;";
                            var t = document.createElement("div");
                            return t.style.cssText = "width: 100500px;height: 1px;",
                            e.appendChild(t),
                            e
                        }();
                        return document.body.appendChild(t),
                        t.scrollLeft > 0 ? e = a.minMax : (t.scrollLeft = -50,
                        e = -50 === t.scrollLeft ? a.nMaxMin : a.maxMin),
                        document.body.removeChild(t),
                        e
                    }
                    function t(e, t) {
                        var i = n();
                        return i === a.nMaxMin ? e ? -e : 0 : i === a.minMax ? t - e : e
                    }
                    function n() {
                        return i || (i = e()),
                        i
                    }
                    var i, a = {
                        minMax: "[0;max]",
                        maxMin: "[max;0]",
                        nMaxMin: "[-max;0]"
                    };
                    return {
                        modes: a,
                        getMode: n,
                        normalizeValue: t,
                        getScrollValue: function(e) {
                            var n = getComputedStyle(e).direction;
                            if (n && "ltr" !== n) {
                                var i = e.scrollWidth - e.offsetWidth;
                                return t(e.scrollLeft, i)
                            }
                            return e.scrollLeft
                        },
                        setScrollValue: function(e, n) {
                            var i = getComputedStyle(e).direction;
                            if (i && "ltr" !== i) {
                                var a = t(n, e.scrollWidth - e.offsetWidth);
                                e.scrollLeft = a
                            } else
                                e.scrollLeft = n
                        }
                    }
                };
                e.matrix = {},
                e._merge = function(e, t) {
                    for (var n in t)
                        void 0 === e[n] && (e[n] = t[n])
                }
                ,
                e.createTimelineView = function(t) {
                    function n(t, n, i) {
                        var a = e._timeline_smart_render.getPreparedEvents(i)
                          , r = i.order[t]
                          , o = i.y_unit[r];
                        if (!o)
                            return [];
                        var s = [t];
                        n && function e(t, n) {
                            if (n = n || [],
                            t.children)
                                for (var i = 0; i < t.children.length; i++)
                                    n.push(t.children[i].key),
                                    e(t.children[i], n);
                            return n
                        }(o, s);
                        for (var l = [], _ = 0; _ < s.length; _++) {
                            if (void 0 !== (r = i.order[s[_]]) && a[r])
                                l = l.concat(a[r]);
                            else if (a.undefined)
                                for (var d = 0; d < a.undefined.length; d++) {
                                    var c = a.undefined[d];
                                    c[i.y_property] == s[_] && l.push(c)
                                }
                        }
                        return l
                    }
                    function i(t, n, i, a) {
                        var r = e._timeline_smart_render.getPreparedEvents(a)
                          , o = []
                          , s = []
                          , l = a.order[t]
                          , _ = a.y_unit[l];
                        if (!_)
                            return [];
                        var d = e._get_date_index(a, n);
                        return r.$matrix ? (o = r.$matrix[l][d] || [],
                        i && r.$matrix.$tree && r.$matrix.$tree[_.key] && (s = r.$matrix.$tree[_.key][d] || []),
                        o.concat(s)) : r[l] || []
                    }
                    e._skin_init(),
                    e._merge(t, {
                        scrollHelper: c(),
                        column_width: 100,
                        autoscroll: {
                            range_x: 200,
                            range_y: 100,
                            speed_x: 20,
                            speed_y: 10
                        },
                        _is_new_view: !0,
                        _section_autowidth: !0,
                        _x_scroll: 0,
                        _y_scroll: 0,
                        _h_cols: {},
                        _label_rows: [],
                        section_autoheight: !0,
                        name: "matrix",
                        x: "time",
                        y: "time",
                        x_step: 1,
                        x_unit: "hour",
                        y_unit: "day",
                        y_step: 1,
                        x_start: 0,
                        x_size: 24,
                        y_start: 0,
                        y_size: 7,
                        render: "cell",
                        dx: 200,
                        dy: 50,
                        event_dy: e.xy.bar_height - 5,
                        event_min_dy: e.xy.bar_height - 5,
                        resize_events: !0,
                        fit_events: !0,
                        show_unassigned: !1,
                        second_scale: !1,
                        round_position: !1,
                        _logic: function(t, n, i) {
                            var a = {};
                            return e.checkEvent("onBeforeSectionRender") && (a = e.callEvent("onBeforeSectionRender", [t, n, i])),
                            a
                        }
                    }),
                    t._original_x_start = t.x_start,
                    "day" != t.x_unit && (t.first_hour = t.last_hour = 0),
                    t._start_correction = t.first_hour ? 60 * t.first_hour * 60 * 1e3 : 0,
                    t._end_correction = t.last_hour ? 60 * (24 - t.last_hour) * 60 * 1e3 : 0,
                    e.checkEvent("onTimelineCreated") && e.callEvent("onTimelineCreated", [t]),
                    dhtmlxEventable(t);
                    var r = e.render_data;
                    e.render_data = function(n, i) {
                        if (this._mode != t.name)
                            return r.apply(this, arguments);
                        if (i && !t.show_unassigned && "cell" != t.render)
                            for (var a = 0; a < n.length; a++)
                                this.clear_event(n[a]),
                                this.render_timeline_event.call(this.matrix[this._mode], n[a], !0);
                        else
                            e._renderMatrix.call(t, !0, !0)
                    }
                    ,
                    e.matrix[t.name] = t,
                    e.templates[t.name + "_cell_value"] = function(e) {
                        return e ? e.length : ""
                    }
                    ,
                    e.templates[t.name + "_cell_class"] = function(e) {
                        return ""
                    }
                    ,
                    e.templates[t.name + "_scalex_class"] = function(e) {
                        return ""
                    }
                    ,
                    e.templates[t.name + "_second_scalex_class"] = function(e) {
                        return ""
                    }
                    ,
                    e.templates[t.name + "_scaley_class"] = function(e, t, n) {
                        return ""
                    }
                    ,
                    e.templates[t.name + "_scale_label"] = function(e, t, n) {
                        return t
                    }
                    ,
                    e.templates[t.name + "_tooltip"] = function(e, t, n) {
                        return n.text
                    }
                    ,
                    e.templates[t.name + "_date"] = function(t, n) {
                        return t.getDay() == n.getDay() && n - t < 864e5 || +t == +e.date.date_part(new Date(n)) || +e.date.add(t, 1, "day") == +n && 0 === n.getHours() && 0 === n.getMinutes() ? e.templates.day_date(t) : t.getDay() != n.getDay() && n - t < 864e5 ? e.templates.day_date(t) + " &ndash; " + e.templates.day_date(n) : e.templates.week_date(t, n)
                    }
                    ,
                    e.templates[t.name + "_scale_date"] = e.date.date_to_str(t.x_date || e.config.hour_date),
                    e.templates[t.name + "_second_scale_date"] = e.date.date_to_str(t.second_scale && t.second_scale.x_date ? t.second_scale.x_date : e.config.hour_date),
                    e.date["add_" + t.name + "_private"] = function(n, i) {
                        var a = i
                          , r = t.x_unit;
                        if ("minute" == t.x_unit || "hour" == t.x_unit) {
                            var o = a;
                            "hour" == t.x_unit && (o *= 60),
                            o % 1440 || (a = o / 1440,
                            r = "day")
                        }
                        return e.date.add(n, a, r)
                    }
                    ,
                    e.date["add_" + t.name] = function(n, i, a) {
                        var r = e.date["add_" + t.name + "_private"](n, (t.x_length || t.x_size) * t.x_step * i);
                        if ("minute" == t.x_unit || "hour" == t.x_unit) {
                            var o = t.x_length || t.x_size
                              , s = "hour" == t.x_unit ? 60 * t.x_step : t.x_step;
                            if (s * o % 1440)
                                if (+e.date.date_part(new Date(n)) == +e.date.date_part(new Date(r)))
                                    t.x_start += i * o;
                                else {
                                    var l = 1440 / (o * s) - 1
                                      , _ = Math.round(l * o);
                                    t.x_start = i > 0 ? t.x_start - _ : _ + t.x_start
                                }
                        }
                        return r
                    }
                    ,
                    e.date[t.name + "_start"] = function(n) {
                        var i = (e.date[t.x_unit + "_start"] || e.date.day_start).call(e.date, n)
                          , a = i.getTimezoneOffset()
                          , r = (i = e.date.add(i, t.x_step * t.x_start, t.x_unit)).getTimezoneOffset();
                        return a != r && i.setTime(i.getTime() + 6e4 * (r - a)),
                        i
                    }
                    ,
                    t.scrollTo = e.bind((function(t) {
                        if (t) {
                            var n;
                            n = t.date ? t.date : t.left ? t.left : t;
                            var i, r = -1;
                            if (t.section ? r = this.posFromSection(t.section) : t.top && (r = t.top),
                            i = "number" == typeof n ? n : this.posFromDate(n),
                            e.config.rtl) {
                                var o = +e.$container.querySelector(".dhx_timeline_label_wrapper").style.height.replace("px", "")
                                  , s = this._section_height[this.y_unit.length] + this._label_rows[this._label_rows.length - 1].top;
                                this.scrollHelper.getMode() == this.scrollHelper.modes.minMax && (s > o || "tree" == this.render) && (i -= a())
                            }
                            var l = e.$container.querySelector(".dhx_timeline_data_wrapper");
                            this.scrollable || (l = e.$container.querySelector(".dhx_cal_data")),
                            this.scrollable && this.scrollHelper.setScrollValue(l, i),
                            r > 0 && (l.scrollTop = r)
                        }
                    }
                    ), t),
                    t.getScrollPosition = e.bind((function() {
                        return {
                            left: this._x_scroll || 0,
                            top: this._y_scroll || 0
                        }
                    }
                    ), t),
                    t.posFromDate = e.bind((function(t) {
                        return e._timeline_getX({
                            start_date: t
                        }, !1, this) - 1
                    }
                    ), t),
                    t.posFromSection = e.bind((function(e) {
                        var t = this.order[e];
                        if (void 0 === t)
                            return -1;
                        var n = 0;
                        for (var i in this.order)
                            this.order[i] < t && (n += this._section_height[i]);
                        return n
                    }
                    ), t),
                    t.selectEvents = e.bind((function(e) {
                        var t = e.section
                          , a = e.date
                          , r = e.selectNested;
                        return a ? i(t, a, r, this) : t ? n(t, r, this) : void 0
                    }
                    ), t),
                    t.setRange = e.bind((function(t, n) {
                        var i = e.date[this.name + "_start"](new Date(t))
                          , a = function(t, n, i) {
                            for (var a = 0, r = e.date[i.name + "_start"](new Date(t)), o = i.x_step, s = i.x_unit; r < n; )
                                a++,
                                r = e.date.add(r, o, s);
                            return a
                        }(t, n, this);
                        this.x_size = a,
                        e.setCurrentView(i, this.name)
                    }
                    ), t),
                    e.callEvent("onOptionsLoad", [t]),
                    e[t.name + "_view"] = function(n) {
                        n ? e._set_timeline_dates(t) : e._renderMatrix.apply(t, arguments)
                    }
                    ;
                    var o = new Date;
                    e.date.add(o, t.x_step, t.x_unit).valueOf(),
                    o.valueOf(),
                    e["mouse_" + t.name] = function(n) {
                        var i = this._drag_event;
                        if (this._drag_id && (i = this.getEvent(this._drag_id)),
                        t.scrollable && !n.converted) {
                            if (n.converted = 1,
                            n.x += -t.dx + t._x_scroll,
                            e.config.rtl) {
                                var r = +e.$container.querySelector(".dhx_timeline_label_wrapper").style.height.replace("px", "")
                                  , o = t._section_height[t.y_unit.length] + t._label_rows[t._label_rows.length - 1].top;
                                n.x += e.xy.scale_width,
                                t.scrollHelper.getMode() == t.scrollHelper.modes.minMax && (o > r || "tree" == t.render) && (n.x += a())
                            }
                            n.y += t._y_scroll
                        } else
                            e.config.rtl ? n.x -= t.dx - e.xy.scale_width : n.x -= t.dx;
                        var s = e._timeline_drag_date(t, n.x);
                        if (n.x = 0,
                        n.force_redraw = !0,
                        n.custom = !0,
                        "move" == this._drag_mode && this._drag_id && this._drag_event) {
                            i = this.getEvent(this._drag_id);
                            var l = this._drag_event;
                            if (n._ignores = this._ignores_detected || t._start_correction || t._end_correction,
                            void 0 === l._move_delta && (l._move_delta = (i.start_date - s) / 6e4,
                            this.config.preserve_length && n._ignores && (l._move_delta = this._get_real_event_length(i.start_date, s, t),
                            l._event_length = this._get_real_event_length(i.start_date, i.end_date, t))),
                            this.config.preserve_length && n._ignores) {
                                var _ = (l._event_length,
                                this._get_fictional_event_length(s, l._move_delta, t, !0));
                                s = new Date(s - _)
                            } else
                                s = e.date.add(s, l._move_delta, "minute")
                        }
                        if ("resize" == this._drag_mode && i && (this.config.timeline_swap_resize && this._drag_id && (this._drag_from_start && +s > +i.end_date ? this._drag_from_start = !1 : !this._drag_from_start && +s < +i.start_date && (this._drag_from_start = !0)),
                        n.resize_from_start = this._drag_from_start,
                        !this.config.timeline_swap_resize && this._drag_id && this._drag_from_start && +s >= +e.date.add(i.end_date, -e.config.time_step, "minute") && (s = e.date.add(i.end_date, -e.config.time_step, "minute"))),
                        t.round_position)
                            switch (this._drag_mode) {
                            case "move":
                                this.config.preserve_length || (s = e._timeline_get_rounded_date.call(t, s, !1),
                                "day" == t.x_unit && (n.custom = !1));
                                break;
                            case "resize":
                                this._drag_event && (null !== this._drag_event._resize_from_start && void 0 !== this._drag_event._resize_from_start || (this._drag_event._resize_from_start = n.resize_from_start),
                                n.resize_from_start = this._drag_event._resize_from_start,
                                s = e._timeline_get_rounded_date.call(t, s, !this._drag_event._resize_from_start))
                            }
                        this._resolve_timeline_section(t, n),
                        n.section && this._update_timeline_section({
                            pos: n,
                            event: this.getEvent(this._drag_id),
                            view: t
                        }),
                        n.y = Math.round((this._correct_shift(s, 1) - this._min_date) / (6e4 * this.config.time_step)),
                        n.shift = this.config.time_step,
                        t.round_position && "new-size" == this._drag_mode && s <= this._drag_start && (n.shift = e.date.add(this._drag_start, t.x_step, t.x_unit) - this._drag_start);
                        var d = this._is_pos_changed(this._drag_pos, n);
                        return this._drag_pos && d && (this._drag_event._dhx_changed = !0),
                        d || this._drag_pos.has_moved || (n.force_redraw = !1),
                        n
                    }
                }
                ,
                e._prepare_timeline_events = function(t) {
                    var n = [];
                    if ("cell" == t.render)
                        n = e._timeline_trace_events.call(t);
                    else {
                        for (var i = e.get_visible_events(), a = t.order, r = 0; r < i.length; r++) {
                            var o = i[r]
                              , s = o[t.y_property]
                              , l = t.order[s];
                            if (t.y_unit[l],
                            t.show_unassigned && !s) {
                                for (var _ in a)
                                    if (a.hasOwnProperty(_)) {
                                        n[l = a[_]] || (n[l] = []);
                                        var d = e._lame_copy({}, o);
                                        d[t.y_property] = _,
                                        n[l].push(d);
                                        break
                                    }
                            } else
                                n[l] || (n[l] = []),
                                n[l].push(o)
                        }
                        n.$matrix = e._timeline_trace_events.call(t)
                    }
                    return n
                }
                ,
                e._populate_timeline_rendered = function(t) {
                    e._rendered = [];
                    for (var n = t.querySelectorAll("div[event_id]"), i = 0; i < n.length; i++)
                        e._rendered.push(n[i])
                }
                ,
                e._get_timeline_event_height = function(e, t) {
                    var n = e[t.y_property]
                      , i = t.event_dy;
                    return "full" == t.event_dy && (i = t.section_autoheight ? t._section_height[n] - 6 : t.dy - 3),
                    t.resize_events && (i = Math.max(Math.floor(i / (e._count || 1)), t.event_min_dy)),
                    i
                }
                ,
                e._get_timeline_event_y = function(t, n) {
                    var i = t || 0
                      , a = 2 + i * n + (i ? 2 * i : 0);
                    return e.config.cascade_event_display && (a = 2 + i * e.config.cascade_event_margin + (i ? 2 * i : 0)),
                    a
                }
                ,
                e.render_timeline_event = function(t, n) {
                    var i = t[this.y_property];
                    if (!i)
                        return "";
                    var a = t._sorder
                      , r = e._timeline_getX(t, !1, this)
                      , o = e._timeline_getX(t, !0, this)
                      , s = e._get_timeline_event_height(t, this)
                      , l = s - 2;
                    t._inner || "full" != this.event_dy || (l = (l + 2) * (t._count - a) - 2),
                    l += 3;
                    var _ = e._get_timeline_event_y(t._sorder, s)
                      , d = s + _ + 2;
                    (!this._events_height[i] || this._events_height[i] < d) && (this._events_height[i] = d);
                    var c = e.templates.event_class(t.start_date, t.end_date, t);
                    c = "dhx_cal_event_line " + (c || ""),
                    e.getState().select_id == t.id && (c += " dhx_cal_event_selected"),
                    t._no_drag_move && (c += " no_drag_move");
                    var h = t.color ? "background:" + t.color + ";" : ""
                      , u = t.textColor ? "color:" + t.textColor + ";" : ""
                      , f = e.templates.event_bar_text(t.start_date, t.end_date, t)
                      , p = "<div " + e._waiAria.eventBarAttrString(t) + " event_id='" + t.id + "' class='" + c + "' style='" + h + u + "position:absolute; top:" + _ + "px; height: " + l + "px; " + (e.config.rtl ? "right:" : "left:") + r + "px; width:" + Math.max(0, o - r) + "px;" + (t._text_style || "") + "'>";
                    if (e.config.drag_resize && !e.config.readonly) {
                        var v = "dhx_event_resize"
                          , m = l + 1
                          , g = "<div class='" + v + " " + v + "_start' style='height: " + m + "px;'></div>"
                          , y = "<div class='" + v + " " + v + "_end' style='height: " + m + "px;'></div>";
                        p += (t._no_resize_start ? "" : g) + (t._no_resize_end ? "" : y)
                    }
                    if (p += f + "</div>",
                    !n)
                        return p;
                    var x = document.createElement("div");
                    x.innerHTML = p;
                    var b = this._scales[i];
                    b && (e._rendered.push(x.firstChild),
                    b.appendChild(x.firstChild))
                }
                ,
                e._timeline_trace_events = function() {
                    return function(n, a) {
                        function r(e, t, n, i) {
                            e[t] || (e[t] = []);
                            for (var a = n; a <= i; a++)
                                e[t][a] || (e[t][a] = []),
                                e[t][a].push(h)
                        }
                        for (var o = [], s = 0; s < a.y_unit.length; s++)
                            o[s] = [];
                        var l;
                        o[l] || (o[l] = []);
                        var _ = i(a)
                          , d = "tree" == a.render;
                        d && (o.$tree = {});
                        var c = a.y_property;
                        for (s = 0; s < n.length; s++) {
                            var h = n[s]
                              , u = h[c];
                            l = t(u, a);
                            var f = e._get_date_index(a, h.start_date)
                              , p = e._get_date_index(a, h.end_date);
                            h.end_date.valueOf() == a._trace_x[p].valueOf() && (p -= 1),
                            o[l] || (o[l] = []),
                            r(o, l, f, p);
                            var v = _[u];
                            if (d && v && v.$parent)
                                for (; v.$parent; ) {
                                    var m = _[v.$parent];
                                    r(o.$tree, m.key, f, p),
                                    v = m
                                }
                        }
                        return o
                    }(e.get_visible_events(), this)
                }
                ,
                e._timeline_getX = function(t, n, i) {
                    var a = 0
                      , r = i._step
                      , o = i.round_position
                      , s = 0
                      , l = n ? t.end_date : t.start_date;
                    l.valueOf() > e._max_date.valueOf() && (l = e._max_date);
                    var _ = l - e._min_date_timeline;
                    if (_ > 0) {
                        var d = e._get_date_index(i, l);
                        e._ignores[d] && (o = !0);
                        for (var c = 0; c < d; c++)
                            a += e._cols[c];
                        var h = e._timeline_get_rounded_date.apply(i, [l, !1]);
                        o ? +l > +h && n && (s = e._cols[d]) : (_ = l - h,
                        i.first_hour || i.last_hour ? ((_ -= i._start_correction) < 0 && (_ = 0),
                        (s = Math.round(_ / r)) > e._cols[d] && (s = e._cols[d])) : s = Math.round(_ / r))
                    }
                    return e._border_box_events(),
                    a + (n ? 0 === _ || o ? s - 2 : s : s + 1)
                }
                ,
                e._timeline_get_rounded_date = function(t, n) {
                    var i = e._get_date_index(this, t)
                      , a = this._trace_x[i];
                    return n && +t != +this._trace_x[i] && (a = this._trace_x[i + 1] ? this._trace_x[i + 1] : e.date.add(this._trace_x[i], this.x_step, this.x_unit)),
                    new Date(a)
                }
                ,
                e._timeline_skip_ignored = function(t) {
                    if (e._ignores_detected)
                        for (var n, i, a, r, o = 0; o < t.length; o++) {
                            for (r = t[o],
                            a = !1,
                            n = e._get_date_index(this, r.start_date),
                            i = e._get_date_index(this, r.end_date); n < i; ) {
                                if (!e._ignores[n]) {
                                    a = !0;
                                    break
                                }
                                n++
                            }
                            a || n != i || e._ignores[i] || +r.end_date > +this._trace_x[i] && (a = !0),
                            a || (t.splice(o, 1),
                            o--)
                        }
                }
                ,
                e._timeline_calculate_event_positions = function(t) {
                    if (t && "cell" != this.render) {
                        e._timeline_skip_ignored.call(this, t),
                        t.sort(this.sort || function(e, t) {
                            return e.start_date.valueOf() == t.start_date.valueOf() ? e.id > t.id ? 1 : -1 : e.start_date > t.start_date ? 1 : -1
                        }
                        );
                        for (var n = [], i = t.length, a = -1, r = null, o = 0; o < i; o++) {
                            var s = t[o];
                            s._inner = !1;
                            var l = this.round_position ? e._timeline_get_rounded_date.apply(this, [s.start_date, !1]) : s.start_date;
                            for (this.round_position ? e._timeline_get_rounded_date.apply(this, [s.end_date, !0]) : s.end_date; n.length && n[n.length - 1].end_date.valueOf() <= l.valueOf(); )
                                n.splice(n.length - 1, 1);
                            for (var _ = !1, d = 0; d < n.length; d++) {
                                var c = n[d];
                                if (c.end_date.valueOf() <= l.valueOf()) {
                                    _ = !0,
                                    s._sorder = c._sorder,
                                    n.splice(d, 1),
                                    s._inner = !0;
                                    break
                                }
                            }
                            if (n.length && (n[n.length - 1]._inner = !0),
                            !_)
                                if (n.length)
                                    if (n.length <= n[n.length - 1]._sorder) {
                                        if (n[n.length - 1]._sorder)
                                            for (var h = 0; h < n.length; h++) {
                                                for (var u = !1, f = 0; f < n.length; f++)
                                                    if (n[f]._sorder == h) {
                                                        u = !0;
                                                        break
                                                    }
                                                if (!u) {
                                                    s._sorder = h;
                                                    break
                                                }
                                            }
                                        else
                                            s._sorder = 0;
                                        s._inner = !0
                                    } else {
                                        for (var p = n[0]._sorder, v = 1; v < n.length; v++)
                                            n[v]._sorder > p && (p = n[v]._sorder);
                                        s._sorder = p + 1,
                                        a < s._sorder && (a = s._sorder,
                                        r = s),
                                        s._inner = !1
                                    }
                                else
                                    s._sorder = 0;
                            n.push(s),
                            n.length > (n.max_count || 0) ? (n.max_count = n.length,
                            s._count = n.length) : s._count = s._count ? s._count : 1
                        }
                        for (var m = 0; m < t.length; m++)
                            t[m]._count = n.max_count,
                            e._register_copy && e._register_copy(t[m]);
                        (r || t[0]) && e.render_timeline_event.call(this, r || t[0], !1)
                    }
                }
                ,
                e._timeline_get_events_html = function(t) {
                    var n = "";
                    if (t && "cell" != this.render)
                        for (var i = 0; i < t.length; i++)
                            n += e.render_timeline_event.call(this, t[i], !1);
                    return n
                }
                ,
                e._timeline_update_events_html = function(t) {
                    var n = "";
                    if (t && "cell" != this.render) {
                        var i = e.getView()
                          , a = {}
                          , r = function(e, t) {
                            return e + "_" + t
                        };
                        t.forEach((function(e) {
                            a[r(e.id, e[i.y_property])] = !0
                        }
                        )),
                        e._rendered.forEach((function(e) {
                            if (e.parentNode) {
                                var t = e.parentNode.getAttribute("data-section-id");
                                a[r(e.getAttribute("event_id"), t)] && e.parentNode.removeChild(e)
                            }
                        }
                        ));
                        for (var o = 0; o < t.length; o++)
                            n += e.render_timeline_event.call(this, t[o], !1)
                    }
                    return n
                }
                ,
                e._timeline_get_block_stats = function(t, n) {
                    var i = {};
                    return n._sch_height = t.offsetHeight,
                    i.style_data_wrapper = (e.config.rtl ? "padding-right:" : "padding-left:") + n.dx + "px;",
                    i.style_label_wrapper = "width: " + n.dx + "px;",
                    n.scrollable ? (i.style_data_wrapper += "height:" + (n._sch_height - 1) + "px;",
                    void 0 === n.html_scroll_width && (n.html_scroll_width = a()),
                    n._section_autowidth ? n.custom_scroll_width = 0 : n.custom_scroll_width = n.html_scroll_width,
                    i.style_label_wrapper += "height:" + (n._sch_height - 1 - n.custom_scroll_width) + "px;") : (i.style_data_wrapper += "height:" + (n._sch_height - 1) + "px;",
                    i.style_label_wrapper += "height:" + (n._sch_height - 1) + "px;overflow:visible;"),
                    i
                }
                ,
                e._timeline_get_cur_row_stats = function(t, n) {
                    var i = t._logic(t.render, t.y_unit[n], t);
                    if (e._merge(i, {
                        height: t.dy
                    }),
                    t.section_autoheight) {
                        var a = t.scrollable ? t._sch_height - e.xy.scroll_width : t._sch_height;
                        t.y_unit.length * i.height < a && (i.height = Math.max(i.height, Math.floor((a - 1) / t.y_unit.length)))
                    }
                    return t._section_height[t.y_unit[n].key] = i.height,
                    i.td_className || (i.td_className = "dhx_matrix_scell" + (e.templates[t.name + "_scaley_class"](t.y_unit[n].key, t.y_unit[n].label, t.y_unit[n]) ? " " + e.templates[t.name + "_scaley_class"](t.y_unit[n].key, t.y_unit[n].label, t.y_unit[n]) : "")),
                    i.td_content || (i.td_content = e.templates[t.name + "_scale_label"](t.y_unit[n].key, t.y_unit[n].label, t.y_unit[n])),
                    e._merge(i, {
                        tr_className: "",
                        style_height: "height:" + i.height + "px;",
                        style_width: "width:" + t.dx + "px;",
                        summ_width: "width:" + t._summ + "px;",
                        table_className: ""
                    }),
                    i
                }
                ,
                e._timeline_get_fit_events_stats = function(e, t, n) {
                    if (e.fit_events) {
                        var i = e._events_height[e.y_unit[t].key] || 0;
                        n.height = i > n.height ? i : n.height,
                        n.style_height = "height:" + n.height + "px;",
                        n.style_line_height = "line-height:" + (n.height - 1) + "px;",
                        e._section_height[e.y_unit[t].key] = n.height
                    }
                    return n.style_height = "height:" + n.height + "px;",
                    n.style_line_height = "line-height:" + (n.height - 1) + "px;",
                    e._section_height[e.y_unit[t].key] = n.height,
                    n
                }
                ,
                e._timeline_set_scroll_pos = function(e, t) {
                    var n = e.querySelector(".dhx_timeline_data_wrapper");
                    n.scrollTop = t._y_scroll || 0,
                    t.scrollHelper.setScrollValue(n, t._x_scroll || 0),
                    t.scrollHelper.getMode() != t.scrollHelper.modes.maxMin && n.scrollLeft == t._summ - n.offsetWidth + t.dx && (n.scrollLeft += a())
                }
                ,
                e._timeline_save_scroll_pos = function(e, t, n, i) {
                    e._y_scroll = t || 0,
                    e._x_scroll = n || 0
                }
                ,
                e._timeline_get_html_for_cell_data_row = function(e, t, n, i) {
                    return "<div class='dhx_timeline_data_row' data-section-id='" + i + "' data-section-index='" + e + "' style='" + t.summ_width + t.style_height + " position:absolute; top:" + n + "px;'>"
                }
                ,
                e._timeline_get_html_for_cell_ignores = function(e) {
                    return '<div class="dhx_matrix_cell dhx_timeline_data_cell" style="' + e.style_height + e.style_line_height + ';display:none"></div>'
                }
                ,
                e._timeline_get_html_for_cell = function(t, n, i, a, o, s) {
                    var l = i._trace_x[t]
                      , _ = i.y_unit[n]
                      , d = e._cols[t]
                      , c = r(l)
                      , h = e.templates[i.name + "_cell_value"](a, l, _);
                    return "<div data-col-id='" + t + "' data-col-date='" + c + "' class='dhx_matrix_cell dhx_timeline_data_cell " + e.templates[i.name + "_cell_class"](a, l, _) + "' style='width:" + d + "px;" + o.style_height + o.style_line_height + (e.config.rtl ? " right:" : "  left:") + s + "px;'><div style='width:auto'>" + h + "</div></div>"
                }
                ,
                e._timeline_get_html_for_bar_matrix_line = function(e, t, n, i) {
                    return "<div style='" + t.summ_width + " " + t.style_height + " position:absolute; top:" + n + "px;' data-section-id='" + i + "' data-section-index='" + e + "' class='dhx_matrix_line'>"
                }
                ,
                e._timeline_get_html_for_bar_data_row = function(e) {
                    return "<div class='dhx_timeline_data_row " + e.table_className + "' style='" + e.summ_width + " " + e.style_height + "' >"
                }
                ,
                e._timeline_get_html_for_bar_ignores = function() {
                    return ""
                }
                ,
                e._timeline_get_html_for_bar = function(t, n, i, a, o, s) {
                    var l = r(i._trace_x[t])
                      , _ = i.y_unit[n]
                      , d = "";
                    i.cell_template && (d = e.templates[i.name + "_cell_value"](a, i._trace_x[t], _, s));
                    var c = "line-height:" + i._section_height[_.key] + "px;";
                    return "<div class='dhx_matrix_cell dhx_timeline_data_cell " + e.templates[i.name + "_cell_class"](a, i._trace_x[t], _, s) + "' style='width:" + e._cols[t] + "px; " + (e.config.rtl ? "right:" : "left:") + o + "px;'  data-col-id='" + t + "' data-col-date='" + l + "' ><div style='width:auto; height:100%;position:relative;" + c + "'>" + d + "</div></div>"
                }
                ,
                e._timeline_render_scale_header = function(t, n) {
                    var i = e.$container.querySelector(".dhx_timeline_scale_header");
                    if (i && i.parentNode.removeChild(i),
                    n) {
                        i = document.createElement("div");
                        var a = "dhx_timeline_scale_header";
                        t.second_scale && (a += " dhx_timeline_second_scale");
                        var r = e.xy.scale_height;
                        i.className = a,
                        i.style.cssText = ["width:" + (t.dx - 1) + "px", "height:" + r + "px", "line-height:" + r + "px", "top:" + (e.xy.nav_height + 2) + "px", e.config.rtl ? "right:0" : "left:0"].join(";"),
                        i.innerHTML = e.locale.labels[t.name + "_scale_header"] || "",
                        e.$container.appendChild(i)
                    }
                }
                ,
                e._timeline_y_scale = function(t) {
                    var n = e._timeline_get_block_stats(t, this)
                      , i = this.scrollable ? " dhx_timeline_scrollable_data" : ""
                      , a = "<div class='dhx_timeline_table_wrapper'>"
                      , r = "<div class='dhx_timeline_label_wrapper' style='" + n.style_label_wrapper + "'><div class='dhx_timeline_label_col'>"
                      , o = "<div class='dhx_timeline_data_wrapper" + i + "' style='" + n.style_data_wrapper + "'><div class='dhx_timeline_data_col'>";
                    e._load_mode && e._load(),
                    e._timeline_smart_render.clearPreparedEventsCache(s);
                    var s = e._timeline_smart_render.getPreparedEvents(this);
                    e._timeline_smart_render.cachePreparedEvents(s);
                    for (var _ = 0, d = 0; d < e._cols.length; d++)
                        _ += e._cols[d];
                    var c = new Date
                      , h = e._cols.length - e._ignores_detected;
                    c = (e.date.add(c, this.x_step * h, this.x_unit) - c - (this._start_correction + this._end_correction) * h) / _,
                    this._step = c,
                    this._summ = _;
                    var u = e._colsS.heights = []
                      , f = [];
                    this._events_height = {},
                    this._section_height = {},
                    this._label_rows = [];
                    var p = !1
                      , v = 0
                      , m = null;
                    (this.scrollable || this.smart_rendering) && (m = e._timeline_smart_render.getViewPort(this.scrollHelper, this._sch_height)),
                    e._timeline_smart_render._rendered_labels_cache = [],
                    e._timeline_smart_render._rendered_events_cache = [];
                    var g, y = !!m;
                    g = this.scrollable ? !1 !== this.smart_rendering && !!y : !!this.smart_rendering && y;
                    for (var x = [], b = 0, w = 0; w < this.y_unit.length; w++) {
                        var E = e._timeline_get_cur_row_stats(this, w);
                        x.push(E),
                        b += E.height
                    }
                    m && b < m.scrollTop && (m.scrollTop = Math.max(0, b - m.height));
                    for (w = 0; w < this.y_unit.length; w++) {
                        E = x[w];
                        var k = this.y_unit[w];
                        e._timeline_calculate_event_positions.call(this, s[w]);
                        var D = "<div class='dhx_timeline_label_row " + (E = e._timeline_get_fit_events_stats(this, w, E)).tr_className + "' style='top:" + v + "px;" + E.style_height + E.style_line_height + "'data-row-index='" + w + "' data-row-id='" + k.key + "'><div class='" + E.td_className + "' style='" + E.style_width + " height:" + E.height + "px;' " + e._waiAria.label(E.td_content) + ">" + E.td_content + "</div></div>";
                        if (g && this._label_rows.push({
                            div: D,
                            top: v,
                            section: k
                        }),
                        g && (e._timeline_smart_render.isInYViewPort({
                            top: v,
                            bottom: v + E.height
                        }, m) || (p = !0)),
                        v += E.height,
                        p)
                            p = !1;
                        else {
                            r += D,
                            g && e._timeline_smart_render._rendered_labels_cache.push(w);
                            var S = 0;
                            if ("cell" == this.render) {
                                o += e._timeline_get_html_for_cell_data_row(w, E, v - E.height, k.key);
                                for (var O = 0; O < e._cols.length; O++)
                                    e._ignores[O] && !g ? o += e._timeline_get_html_for_cell_ignores(E) : g && y ? e._timeline_smart_render.isInXViewPort({
                                        left: S,
                                        right: S + e._cols[O]
                                    }, m) && (o += e._timeline_get_html_for_cell(O, w, this, s[w][O], E, S)) : o += e._timeline_get_html_for_cell(O, w, this, s[w][O], E, S),
                                    S += e._cols[O];
                                o += "</div>"
                            } else {
                                o += e._timeline_get_html_for_bar_matrix_line(w, E, v - E.height, k.key);
                                var C = s[w];
                                g && y && (C = e._timeline_smart_render.getVisibleEventsForRow(this, m, s, w)),
                                o += e._timeline_get_events_html.call(this, C),
                                o += e._timeline_get_html_for_bar_data_row(E);
                                for (O = 0; O < e._cols.length; O++)
                                    e._ignores[O] ? o += e._timeline_get_html_for_bar_ignores() : g && y ? e._timeline_smart_render.isInXViewPort({
                                        left: S,
                                        right: S + e._cols[O]
                                    }, m) && (o += e._timeline_get_html_for_bar(O, w, this, s[w], S)) : o += e._timeline_get_html_for_bar(O, w, this, s[w], S),
                                    S += e._cols[O];
                                o += "</div></div>"
                            }
                        }
                        E.sectionKey = k.key,
                        f.push(E)
                    }
                    a += r + "</div></div>",
                    a += o + "</div></div>",
                    a += "</div>",
                    this._matrix = s,
                    t.innerHTML = a,
                    g && (e.$container.querySelector(".dhx_timeline_data_col").style.height = v + "px"),
                    e._populate_timeline_rendered(t),
                    this._scales = {};
                    d = 0;
                    for (var A = f.length; d < A; d++) {
                        u.push(f[d].height);
                        var M = f[d].sectionKey;
                        e._timeline_finalize_section_add(this, M, t)
                    }
                    g && e._timeline_smart_render && (e._timeline_smart_render._rendered_events_cache = []),
                    (g || this.scrollable) && l(t, this, u, f)
                }
                ,
                e._timeline_finalize_section_add = function(t, n, i) {
                    var a = t._scales[n] = i.querySelector(".dhx_timeline_data_col [data-section-id='" + n + "']");
                    a && e.callEvent("onScaleAdd", [a, n])
                }
                ,
                e.attachEvent("onBeforeViewChange", (function(t, n, i, a) {
                    if (e.matrix[i]) {
                        var r = e.matrix[i];
                        if (r.scrollable) {
                            if ("tree" == r.render && t === i && n === a)
                                return !0;
                            r._x_scroll = r._y_scroll = 0,
                            e.$container.querySelector(".dhx_timeline_scrollable_data") && e._timeline_set_scroll_pos(e._els.dhx_cal_data[0], r)
                        }
                    }
                    return !0
                }
                )),
                e._timeline_x_dates = function(t) {
                    var n = e._min_date
                      , i = e._max_date;
                    e._process_ignores(n, this.x_size, this.x_unit, this.x_step, t);
                    for (var a = (this.x_size,
                    t && e._ignores_detected,
                    0), r = 0; +n < +i; )
                        if (this._trace_x[r] = new Date(n),
                        "month" == this.x_unit && e.date[this.x_unit + "_start"] && (n = e.date[this.x_unit + "_start"](new Date(n))),
                        n = e.date.add(n, this.x_step, this.x_unit),
                        e.date[this.x_unit + "_start"] && (n = e.date[this.x_unit + "_start"](n)),
                        e._ignores[r] || a++,
                        r++,
                        t)
                            if (a < this.x_size && !(+n < +i))
                                i = e.date["add_" + this.name + "_private"](i, (this.x_length || this.x_size) * this.x_step);
                            else if (a >= this.x_size) {
                                e._max_date = n;
                                break
                            }
                    return {
                        total: r,
                        displayed: a
                    }
                }
                ,
                e._timeline_x_scale = function(t) {
                    var n = e.xy.scale_height
                      , i = this._header_resized || e.xy.scale_height;
                    e._cols = [],
                    e._colsS = {
                        height: 0
                    },
                    this._trace_x = [];
                    var a = e._x - this.dx - e.xy.scroll_width;
                    if (this.scrollable && this.column_width > 0) {
                        var o = this.column_width * this.x_size;
                        o > a && (a = o,
                        this._section_autowidth = !1)
                    }
                    var s = [this.dx];
                    e._els.dhx_cal_header[0].style.width = s[0] + a + "px";
                    for (var l = e._min_date_timeline = e._min_date, _ = e.config.preserve_scale_length, d = e._timeline_x_dates.call(this, _), c = d.displayed, h = d.total, u = 0; u < h; u++)
                        e._ignores[u] ? (e._cols[u] = 0,
                        c++) : e._cols[u] = Math.floor(a / (c - u)),
                        a -= e._cols[u],
                        s[u + 1] = s[u] + e._cols[u];
                    if (t.innerHTML = "<div></div>",
                    this.second_scale) {
                        for (var f = this.second_scale.x_unit, p = [this._trace_x[0]], v = [], m = [this.dx, this.dx], g = 0, y = 0; y < this._trace_x.length; y++) {
                            var x = this._trace_x[y];
                            e._timeline_is_new_interval(f, x, p[g]) && (p[++g] = x,
                            m[g + 1] = m[g]);
                            var b = g + 1;
                            v[g] = e._cols[y] + (v[g] || 0),
                            m[b] += e._cols[y]
                        }
                        t.innerHTML = "<div></div><div></div>";
                        var w = t.firstChild;
                        w.style.height = i + "px";
                        var E = t.lastChild;
                        E.style.position = "relative",
                        E.className = "dhx_bottom_scale_container";
                        for (var k = 0; k < p.length; k++) {
                            var D = p[k]
                              , S = e.templates[this.name + "_second_scalex_class"](D)
                              , O = document.createElement("div");
                            O.className = "dhx_scale_bar dhx_second_scale_bar" + (S ? " " + S : ""),
                            e.set_xy(O, v[k] - 1, i - 3, m[k], 0),
                            O.innerHTML = e.templates[this.name + "_second_scale_date"](D),
                            w.appendChild(O)
                        }
                    }
                    e.xy.scale_height = i,
                    t = t.lastChild,
                    this._h_cols = {};
                    for (var C = 0; C < this._trace_x.length; C++)
                        if (!e._ignores[C]) {
                            l = this._trace_x[C],
                            e._render_x_header(C, s[C], l, t);
                            var A = e.templates[this.name + "_scalex_class"](l);
                            A && (t.lastChild.className += " " + A),
                            t.lastChild.setAttribute("data-col-id", C),
                            t.lastChild.setAttribute("data-col-date", r(l));
                            var M = t.lastChild.cloneNode(!0);
                            this._h_cols[C] = {
                                div: M,
                                left: s[C]
                            }
                        }
                    e.xy.scale_height = n;
                    var T = this._trace_x;
                    t.onclick = function(t) {
                        var n = e._timeline_locate_hcell(t);
                        n && e.callEvent("onXScaleClick", [n.x, T[n.x], t || event])
                    }
                    ,
                    t.ondblclick = function(t) {
                        var n = e._timeline_locate_hcell(t);
                        n && e.callEvent("onXScaleDblClick", [n.x, T[n.x], t || event])
                    }
                }
                ,
                e._timeline_is_new_interval = function(t, n, i) {
                    switch (t) {
                    case "hour":
                        return n.getHours() != i.getHours() || e._timeline_is_new_interval("day", n, i);
                    case "day":
                        return !(n.getDate() == i.getDate() && n.getMonth() == i.getMonth() && n.getFullYear() == i.getFullYear());
                    case "week":
                        return !(e.date.week_start(new Date(n)).valueOf() == e.date.week_start(new Date(i)).valueOf());
                    case "month":
                        return !(n.getMonth() == i.getMonth() && n.getFullYear() == i.getFullYear());
                    case "year":
                        return !(n.getFullYear() == i.getFullYear());
                    default:
                        return !1
                    }
                }
                ,
                e._timeline_reset_scale_height = function(t) {
                    if (this._header_resized && (!t || !this.second_scale)) {
                        e.xy.scale_height /= 2,
                        this._header_resized = !1;
                        var n = e._els.dhx_cal_header[0];
                        n.className = n.className.replace(/ dhx_second_cal_header/gi, "")
                    }
                }
                ,
                e._timeline_set_full_view = function(t) {
                    if (e._timeline_reset_scale_height.call(this, t),
                    t) {
                        this.second_scale && !this._header_resized && (this._header_resized = e.xy.scale_height,
                        e.xy.scale_height *= 2,
                        e._els.dhx_cal_header[0].className += " dhx_second_cal_header"),
                        e.set_sizes(),
                        e._init_matrix_tooltip();
                        var n = e._min_date;
                        if (e._timeline_x_scale.call(this, e._els.dhx_cal_header[0]),
                        e.$container.querySelector(".dhx_timeline_scrollable_data")) {
                            var i = e._timeline_smart_render.getViewPort(this.scrollHelper)
                              , a = e._timeline_smart_render.getVisibleHeader(this, i);
                            a && (this.second_scale ? e._els.dhx_cal_header[0].children[1].innerHTML = a : e._els.dhx_cal_header[0].children[0].innerHTML = a)
                        }
                        e._timeline_y_scale.call(this, e._els.dhx_cal_data[0]),
                        e._min_date = n;
                        var r = e._getNavDateElement();
                        r && (r.innerHTML = e.templates[this.name + "_date"](e._min_date, e._max_date)),
                        e._mark_now && e._mark_now(),
                        e._timeline_reset_scale_height.call(this, t)
                    }
                    e._timeline_render_scale_header(this, t),
                    e._timeline_hideToolTip()
                }
                ,
                e._timeline_hideToolTip = function() {
                    e._tooltip && (e._tooltip.style.display = "none",
                    e._tooltip.date = "")
                }
                ,
                e._timeline_showToolTip = function(t, n, i) {
                    if ("cell" == t.render) {
                        var a = n.x + "_" + n.y
                          , r = t._matrix[n.y][n.x];
                        if (!r)
                            return e._timeline_hideToolTip();
                        if (r.sort((function(e, t) {
                            return e.start_date > t.start_date ? 1 : -1
                        }
                        )),
                        e._tooltip) {
                            if (e._tooltip.date == a)
                                return;
                            e._tooltip.innerHTML = ""
                        } else {
                            var o = e._tooltip = document.createElement("div");
                            o.className = "dhx_year_tooltip",
                            e.config.rtl && (o.className += " dhx_tooltip_rtl"),
                            document.body.appendChild(o),
                            o.onclick = e._click.dhx_cal_data
                        }
                        for (var s = "", l = 0; l < r.length; l++) {
                            var _ = r[l].color ? "background-color:" + r[l].color + ";" : ""
                              , d = r[l].textColor ? "color:" + r[l].textColor + ";" : "";
                            s += "<div class='dhx_tooltip_line' event_id='" + r[l].id + "' style='" + _ + d + "'>",
                            s += "<div class='dhx_tooltip_date'>" + (r[l]._timed ? e.templates.event_date(r[l].start_date) : "") + "</div>",
                            s += "<div class='dhx_event_icon icon_details'>&nbsp;</div>",
                            s += e.templates[t.name + "_tooltip"](r[l].start_date, r[l].end_date, r[l]) + "</div>"
                        }
                        e._tooltip.style.display = "",
                        e._tooltip.style.top = "0px",
                        e.config.rtl && i.left - e._tooltip.offsetWidth >= 0 || document.body.offsetWidth - n.src.offsetWidth - i.left - e._tooltip.offsetWidth < 0 ? e._tooltip.style.left = i.left - e._tooltip.offsetWidth + "px" : e._tooltip.style.left = i.left + n.src.offsetWidth + "px",
                        e._tooltip.date = a,
                        e._tooltip.innerHTML = s,
                        document.body.offsetHeight - i.top - e._tooltip.offsetHeight < 0 ? e._tooltip.style.top = i.top - e._tooltip.offsetHeight + n.src.offsetHeight + "px" : e._tooltip.style.top = i.top + "px"
                    }
                }
                ,
                e._matrix_tooltip_handler = function(t) {
                    var n = e.matrix[e._mode];
                    if (n && "cell" == n.render) {
                        if (n) {
                            var i = e._locate_cell_timeline(t);
                            if ((t = t || event).target || t.srcElement,
                            i)
                                return e._timeline_showToolTip(n, i, e.$domHelpers.getOffset(i.src))
                        }
                        e._timeline_hideToolTip()
                    }
                }
                ,
                e._init_matrix_tooltip = function() {
                    e._detachDomEvent(e._els.dhx_cal_data[0], "mouseover", e._matrix_tooltip_handler),
                    e.event(e._els.dhx_cal_data[0], "mouseover", e._matrix_tooltip_handler)
                }
                ,
                e._set_timeline_dates = function(t) {
                    e._min_date = e.date[t.name + "_start"](new Date(e._date)),
                    e._max_date = e.date["add_" + t.name + "_private"](e._min_date, t.x_size * t.x_step),
                    e.date[t.x_unit + "_start"] && (e._max_date = e.date[t.x_unit + "_start"](e._max_date)),
                    e._table_view = !0
                }
                ,
                e._renderMatrix = function(t, n) {
                    n || (e._els.dhx_cal_data[0].scrollTop = 0),
                    e._set_timeline_dates(this),
                    e._timeline_set_full_view.call(this, t)
                }
                ,
                e._timeline_html_index = function(t) {
                    for (var n = t.parentNode.childNodes, i = -1, a = 0; a < n.length; a++)
                        if (n[a] == t) {
                            i = a;
                            break
                        }
                    var r = i;
                    if (e._ignores_detected)
                        for (var o in e._ignores)
                            e._ignores[o] && 1 * o <= r && r++;
                    return r
                }
                ,
                e._timeline_locate_hcell = function(t) {
                    for (var n = (t = t || event).target ? t.target : t.srcElement; n && "DIV" != n.tagName; )
                        n = n.parentNode;
                    if (n && "DIV" == n.tagName && "dhx_scale_bar" == e._getClassName(n).split(" ")[0])
                        return {
                            x: e._timeline_html_index(n),
                            y: -1,
                            src: n,
                            scale: !0
                        }
                }
                ,
                e._locate_cell_timeline = function(t) {
                    for (var n = (t = t || event).target ? t.target : t.srcElement, i = {}, a = e.matrix[e._mode], r = e.getActionData(t), o = e._ignores, s = 0, l = 0; l < a._trace_x.length - 1 && !(+r.date < a._trace_x[l + 1]); l++)
                        o[l] || s++;
                    i.x = 0 === s ? 0 : l,
                    i.y = a.order[r.section];
                    var _ = (e._isRender("cell"),
                    0);
                    if (a.scrollable && "cell" === a.render) {
                        if (!a._scales[r.section] || !a._scales[r.section].querySelector(".dhx_matrix_cell"))
                            return;
                        var d = a._scales[r.section].querySelector(".dhx_matrix_cell");
                        if (!d)
                            return;
                        var c = d.offsetLeft;
                        if (c > 0) {
                            for (var h = e._timeline_drag_date(a, c), u = 0; u < a._trace_x.length - 1 && !(+h < a._trace_x[u + 1]); u++)
                                ;
                            _ = u
                        }
                    }
                    i.src = a._scales[r.section] ? a._scales[r.section].querySelectorAll(".dhx_matrix_cell")[l - _] : null;
                    var f = !1
                      , p = function(e, t) {
                        if (e.closest)
                            return e.closest(t);
                        if (e.matches || e.msMatchesSelector || e.webkitMatchesSelector) {
                            var n = e;
                            if (!document.documentElement.contains(n))
                                return null;
                            do {
                                if ((n.matches || n.msMatchesSelector || n.webkitMatchesSelector).call(n, t))
                                    return n;
                                n = n.parentElement || n.parentNode
                            } while (null !== n && 1 === n.nodeType);
                            return null
                        }
                        return window.console.error("Your browser is not supported"),
                        null
                    }(n, ".dhx_matrix_scell");
                    return p && (n = p,
                    f = !0),
                    f ? (i.x = -1,
                    i.src = n,
                    i.scale = !0) : i.x = l,
                    i
                }
                ;
                var h = e._click.dhx_cal_data;
                e._click.dhx_marked_timespan = e._click.dhx_cal_data = function(t) {
                    var n = h.apply(this, arguments)
                      , i = e.matrix[e._mode];
                    if (i) {
                        var a = e._locate_cell_timeline(t);
                        a && (a.scale ? e.callEvent("onYScaleClick", [a.y, i.y_unit[a.y], t || event]) : (e.callEvent("onCellClick", [a.x, a.y, i._trace_x[a.x], (i._matrix[a.y] || {})[a.x] || [], t || event]),
                        e._timeline_set_scroll_pos(e._els.dhx_cal_data[0], i)))
                    }
                    return n
                }
                ,
                e.dblclick_dhx_matrix_cell = function(t) {
                    var n = e.matrix[e._mode];
                    if (n) {
                        var i = e._locate_cell_timeline(t);
                        i && (i.scale ? e.callEvent("onYScaleDblClick", [i.y, n.y_unit[i.y], t || event]) : e.callEvent("onCellDblClick", [i.x, i.y, n._trace_x[i.x], (n._matrix[i.y] || {})[i.x] || [], t || event]))
                    }
                }
                ;
                var u = e.dblclick_dhx_marked_timespan || function() {}
                ;
                e.dblclick_dhx_marked_timespan = function(t) {
                    return e.matrix[e._mode] ? e.dblclick_dhx_matrix_cell(t) : u.apply(this, arguments)
                }
                ,
                e.dblclick_dhx_matrix_scell = function(t) {
                    return e.dblclick_dhx_matrix_cell(t)
                }
                ,
                e._isRender = function(t) {
                    return e.matrix[e._mode] && e.matrix[e._mode].render == t
                }
                ,
                e.attachEvent("onCellDblClick", (function(t, n, i, a, r) {
                    if (!this.config.readonly && ("dblclick" != r.type || this.config.dblclick_create)) {
                        var o = e.matrix[e._mode]
                          , s = {};
                        s.start_date = o._trace_x[t],
                        s.end_date = o._trace_x[t + 1] ? o._trace_x[t + 1] : e.date.add(o._trace_x[t], o.x_step, o.x_unit),
                        o._start_correction && (s.start_date = new Date(1 * s.start_date + o._start_correction)),
                        o._end_correction && (s.end_date = new Date(s.end_date - o._end_correction)),
                        s[o.y_property] = o.y_unit[n].key,
                        e.addEventNow(s, null, r)
                    }
                }
                )),
                e.attachEvent("onBeforeDrag", (function(t, n, i) {
                    return !e._isRender("cell")
                }
                )),
                e.attachEvent("onEventChanged", (function(e, t) {
                    t._timed = this.isOneDayEvent(t)
                }
                )),
                e.attachEvent("onBeforeEventChanged", (function(e, t, n, i) {
                    return e && (e._move_delta = void 0),
                    i && (i._move_delta = void 0),
                    !0
                }
                )),
                e._is_column_visible = function(t) {
                    var n = e.matrix[e._mode]
                      , i = e._get_date_index(n, t);
                    return !e._ignores[i]
                }
                ;
                var f = e._render_marked_timespan;
                e._render_marked_timespan = function(t, n, i, a, r) {
                    if (!e.config.display_marked_timespans)
                        return [];
                    if (e.matrix && e.matrix[e._mode]) {
                        if (e._isRender("cell"))
                            return;
                        var o = e._lame_copy({}, e.matrix[e._mode]);
                        o.round_position = !1;
                        var s = []
                          , l = []
                          , _ = []
                          , d = t.sections ? t.sections.units || t.sections.timeline : null;
                        if (i)
                            _ = [n],
                            l = [i];
                        else {
                            var c = o.order;
                            if (d)
                                c.hasOwnProperty(d) && (l.push(d),
                                _.push(o._scales[d]));
                            else if (o._scales)
                                for (var h in c)
                                    c.hasOwnProperty(h) && o._scales[h] && (l.push(h),
                                    _.push(o._scales[h]))
                        }
                        a = a ? new Date(a) : e._min_date,
                        r = r ? new Date(r) : e._max_date;
                        if (a.valueOf() < e._min_date.valueOf() && (a = new Date(e._min_date)),
                        r.valueOf() > e._max_date.valueOf() && (r = new Date(e._max_date)),
                        !o._trace_x)
                            return;
                        for (var u = 0; u < o._trace_x.length && !e._is_column_visible(o._trace_x[u]); u++)
                            ;
                        if (u == o._trace_x.length)
                            return;
                        var p = [];
                        if (t.days > 6) {
                            var v = new Date(t.days);
                            e.date.date_part(new Date(a)) <= +v && +r >= +v && p.push(v)
                        } else
                            p.push.apply(p, e._get_dates_by_index(t.days));
                        for (var m = t.zones, g = e._get_css_classes_by_config(t), y = 0; y < l.length; y++) {
                            n = _[y],
                            i = l[y];
                            for (u = 0; u < p.length; u++)
                                for (var x = p[u], b = 0; b < m.length; b += 2) {
                                    var w = m[b]
                                      , E = m[b + 1]
                                      , k = new Date(+x + 60 * w * 1e3)
                                      , D = new Date(+x + 60 * E * 1e3);
                                    if (k = new Date(k.valueOf() + 1e3 * (k.getTimezoneOffset() - x.getTimezoneOffset()) * 60),
                                    a < (D = new Date(D.valueOf() + 1e3 * (D.getTimezoneOffset() - x.getTimezoneOffset()) * 60)) && r > k) {
                                        var S = e._get_block_by_config(t);
                                        S.className = g;
                                        var O = e._timeline_getX({
                                            start_date: k
                                        }, !1, o) - 1
                                          , C = e._timeline_getX({
                                            start_date: D
                                        }, !1, o) - 1
                                          , A = Math.max(1, C - O - 1)
                                          , M = o._section_height[i] - 1 || o.dy - 1;
                                        S.style.cssText = "height: " + M + "px; " + (e.config.rtl ? "right: " : "left: ") + O + "px; width: " + A + "px; top: 0;",
                                        n.insertBefore(S, n.firstChild),
                                        s.push(S)
                                    }
                                }
                        }
                        return s
                    }
                    return f.apply(e, [t, n, i])
                }
                ;
                var p = e._append_mark_now;
                e._append_mark_now = function(t, n) {
                    if (e.matrix && e.matrix[e._mode]) {
                        var i = e._currentDate()
                          , a = e._get_zone_minutes(i)
                          , r = {
                            days: +e.date.date_part(i),
                            zones: [a, a + 1],
                            css: "dhx_matrix_now_time",
                            type: "dhx_now_time"
                        };
                        return e._render_marked_timespan(r)
                    }
                    return p.apply(e, [t, n])
                }
                ;
                var v = e._mark_timespans;
                e._mark_timespans = function() {
                    if (e.matrix && e.matrix[e.getState().mode]) {
                        for (var t = [], n = e.matrix[e.getState().mode], i = n.y_unit, a = 0; a < i.length; a++) {
                            var r = i[a].key
                              , o = n._scales[r]
                              , s = e._on_scale_add_marker(o, r);
                            t.push.apply(t, s)
                        }
                        return t
                    }
                    return v.apply(this, arguments)
                }
                ;
                var m = e._on_scale_add_marker;
                e._on_scale_add_marker = function(t, n) {
                    if (e.matrix && e.matrix[e._mode]) {
                        var i = []
                          , a = e._marked_timespans;
                        if (a && e.matrix && e.matrix[e._mode])
                            for (var r = e._mode, o = e._min_date, s = e._max_date, l = a.global, _ = e.date.date_part(new Date(o)); _ < s; _ = e.date.add(_, 1, "day")) {
                                var d = +_
                                  , c = _.getDay()
                                  , h = []
                                  , u = l[d] || l[c];
                                if (h.push.apply(h, e._get_configs_to_render(u)),
                                a[r] && a[r][n]) {
                                    var f = []
                                      , p = e._get_types_to_render(a[r][n][c], a[r][n][d]);
                                    f.push.apply(f, e._get_configs_to_render(p)),
                                    f.length && (h = f)
                                }
                                for (var v = 0; v < h.length; v++) {
                                    var g = h[v]
                                      , y = g.days;
                                    y < 7 ? (y = d,
                                    i.push.apply(i, e._render_marked_timespan(g, t, n, _, e.date.add(_, 1, "day"))),
                                    y = c) : i.push.apply(i, e._render_marked_timespan(g, t, n, _, e.date.add(_, 1, "day")))
                                }
                            }
                        return i
                    }
                    return m.apply(this, arguments)
                }
                ,
                e._resolve_timeline_section = function(e, t) {
                    for (var n = 0, i = 0; n < this._colsS.heights.length && !((i += this._colsS.heights[n]) > t.y); n++)
                        ;
                    e.y_unit[n] || (n = e.y_unit.length - 1),
                    this._drag_event && !this._drag_event._orig_section && (this._drag_event._orig_section = e.y_unit[n].key),
                    t.fields = {},
                    n >= 0 && e.y_unit[n] && (t.section = t.fields[e.y_property] = e.y_unit[n].key)
                }
                ,
                e._update_timeline_section = function(e) {
                    var t = e.view
                      , n = e.event
                      , i = e.pos;
                    if (n) {
                        if (n[t.y_property] != i.section) {
                            var a = this._get_timeline_event_height(n, t);
                            n._sorder = this._get_dnd_order(n._sorder, a, t._section_height[i.section])
                        }
                        n[t.y_property] = i.section
                    }
                }
                ,
                e._get_date_index = function(e, t) {
                    for (var n = e._trace_x, i = 0, a = n.length - 1, r = t.valueOf(); a - i > 3; ) {
                        var o = i + Math.floor((a - i) / 2);
                        n[o].valueOf() > r ? a = o : i = o
                    }
                    for (var s = i; s <= a && +t >= +n[s + 1]; )
                        s++;
                    return s
                }
                ,
                e._timeline_drag_date = function(t, n) {
                    var i = t
                      , a = n;
                    if (!i._trace_x.length)
                        return new Date(e.getState().date);
                    for (var r, o, s, l = 0, _ = 0; _ <= this._cols.length - 1; _++)
                        if ((l += o = this._cols[_]) > a) {
                            r = (r = (a - (l - o)) / o) < 0 ? 0 : r;
                            break
                        }
                    if (i.round_position) {
                        var d = 1
                          , c = e.getState().drag_mode;
                        c && "move" != c && "create" != c && (d = .5),
                        r >= d && _++,
                        r = 0
                    }
                    if (0 === _ && this._ignores[0])
                        for (_ = 1,
                        r = 0; this._ignores[_]; )
                            _++;
                    else if (_ == this._cols.length && this._ignores[_ - 1]) {
                        for (_ = this._cols.length - 1,
                        r = 0; this._ignores[_]; )
                            _--;
                        _++
                    }
                    if (_ >= i._trace_x.length)
                        s = e.date.add(i._trace_x[i._trace_x.length - 1], i.x_step, i.x_unit),
                        i._end_correction && (s = new Date(s - i._end_correction));
                    else {
                        var h = r * o * i._step + i._start_correction;
                        s = new Date(+i._trace_x[_] + h)
                    }
                    return s
                }
                ,
                e.attachEvent("onBeforeTodayDisplayed", (function() {
                    for (var t in e.matrix) {
                        var n = e.matrix[t];
                        n.x_start = n._original_x_start
                    }
                    return !0
                }
                )),
                e.attachEvent("onOptionsLoad", (function() {
                    for (var t in e.matrix) {
                        var n = e.matrix[t];
                        n.order = {},
                        e.callEvent("onOptionsLoadStart", []);
                        for (t = 0; t < n.y_unit.length; t++)
                            n.order[n.y_unit[t].key] = t;
                        e.callEvent("onOptionsLoadFinal", []),
                        e._date && n.name == e._mode && (n._options_changed = !0,
                        e.setCurrentView(e._date, e._mode),
                        setTimeout((function() {
                            n._options_changed = !1
                        }
                        )))
                    }
                }
                )),
                e.attachEvent("onEventIdChange", (function() {
                    var t = e.getView();
                    t && e.matrix[t.name] && e._timeline_smart_render && (e._timeline_smart_render.clearPreparedEventsCache(),
                    e._timeline_smart_render.getPreparedEvents(t))
                }
                )),
                e.attachEvent("onBeforeDrag", (function(t, n, i) {
                    if ("resize" == n) {
                        var a = i.target || i.srcElement;
                        e._getClassName(a).indexOf("dhx_event_resize_end") < 0 ? e._drag_from_start = !0 : e._drag_from_start = !1
                    }
                    return !0
                }
                ));
                var g = 10
                  , y = null
                  , x = null
                  , b = e.attachEvent("onSchedulerReady", (function() {
                    e.matrix && (e.event(document.body, "mousemove", _),
                    e.detachEvent(b))
                }
                ));
                e._timeline_smart_render = {
                    _prepared_events_cache: null,
                    _rendered_events_cache: [],
                    _rendered_header_cache: [],
                    _rendered_labels_cache: [],
                    _rows_to_delete: [],
                    _rows_to_add: [],
                    _cols_to_delete: [],
                    _cols_to_add: [],
                    getViewPort: function(t, n, i, a) {
                        var r = e.$container.querySelector(".dhx_cal_data")
                          , o = r.getBoundingClientRect()
                          , s = e.$container.querySelector(".dhx_timeline_scrollable_data");
                        s && void 0 === i && (i = t.getScrollValue(s)),
                        void 0 === a && (a = s ? s.scrollTop : r.scrollTop);
                        var l = {};
                        for (var _ in o)
                            l[_] = o[_];
                        return l.scrollLeft = i || 0,
                        l.scrollTop = a || 0,
                        n && (o.height = n),
                        l
                    },
                    isInXViewPort: function(e, t) {
                        var n = t.scrollLeft
                          , i = t.width + t.scrollLeft;
                        return e.left < i + 100 && e.right > n - 100
                    },
                    isInYViewPort: function(e, t) {
                        var n = t.scrollTop
                          , i = t.height + t.scrollTop;
                        return e.top < i + 100 && e.bottom > n - 100
                    },
                    getVisibleHeader: function(t, n) {
                        var i = "";
                        for (var a in this._rendered_header_cache = [],
                        t._h_cols) {
                            var r = t._h_cols[a];
                            this.isInXViewPort({
                                left: r.left,
                                right: r.left + e._cols[a]
                            }, n) && (i += r.div.outerHTML,
                            this._rendered_header_cache.push(r.div.getAttribute("data-col-id")))
                        }
                        return i
                    },
                    updateHeader: function(t, n, i) {
                        this._cols_to_delete = [],
                        this._cols_to_add = [];
                        for (var a = e.$container.querySelectorAll(".dhx_cal_header > div"), r = a[a.length - 1].querySelectorAll(".dhx_scale_bar"), o = [], s = 0; s < r.length; s++)
                            o.push(r[s].getAttribute("data-col-id"));
                        if (this.getVisibleHeader(t, n)) {
                            for (var l = this._rendered_header_cache.slice(), _ = [], d = (s = 0,
                            o.length); s < d; s++) {
                                var c = l.indexOf(o[s]);
                                c > -1 ? l.splice(c, 1) : _.push(o[s])
                            }
                            _.length && (this._cols_to_delete = _.slice(),
                            this._deleteHeaderCells(_, t, i)),
                            l.length && (this._cols_to_add = l.slice(),
                            this._addHeaderCells(l, t, i))
                        }
                    },
                    _deleteHeaderCells: function(e, t, n) {
                        for (var i = 0; i < e.length; i++) {
                            var a = n.querySelector('[data-col-id="' + e[i] + '"]');
                            a && n.removeChild(a)
                        }
                    },
                    _addHeaderCells: function(e, t, n) {
                        for (var i = "", a = 0; a < e.length; a++)
                            i += t._h_cols[e[a]].div.outerHTML;
                        n.insertAdjacentHTML("beforeEnd", i)
                    },
                    getVisibleLabels: function(e, t) {
                        if (e._label_rows.length) {
                            var n = "";
                            this._rendered_labels_cache = [];
                            for (var i = 0; i < e._label_rows.length; i++)
                                if (this.isInYViewPort({
                                    top: e._label_rows[i].top,
                                    bottom: e._label_rows[i].top + e._section_height[e.y_unit[i].key]
                                }, t)) {
                                    n += e._label_rows[i].div,
                                    this._rendered_labels_cache.push(i)
                                }
                            return n
                        }
                    },
                    updateLabels: function(e, t, n) {
                        this._rows_to_delete = [],
                        this._rows_to_add = [];
                        var i = this._rendered_labels_cache.slice();
                        if (i.length || (this.getVisibleLabels(e, t),
                        i = this._rendered_labels_cache.slice()),
                        this.getVisibleLabels(e, t)) {
                            for (var a = this._rendered_labels_cache.slice(), r = [], o = 0, s = i.length; o < s; o++) {
                                var l = a.indexOf(i[o]);
                                l > -1 ? a.splice(l, 1) : r.push(i[o])
                            }
                            r.length && (this._rows_to_delete = r.slice(),
                            this._deleteLabelCells(r, e, n)),
                            a.length && (this._rows_to_add = a.slice(),
                            this._addLabelCells(a, e, n))
                        }
                    },
                    _deleteLabelCells: function(e, t, n) {
                        for (var i = 0; i < e.length; i++) {
                            var a = n.querySelector('[data-row-index="' + e[i] + '"]');
                            a && n.removeChild(a)
                        }
                    },
                    _addLabelCells: function(e, t, n) {
                        for (var i = "", a = 0; a < e.length; a++)
                            i += t._label_rows[e[a]].div;
                        n.insertAdjacentHTML("beforeEnd", i)
                    },
                    clearPreparedEventsCache: function() {
                        this.cachePreparedEvents(null)
                    },
                    cachePreparedEvents: function(e) {
                        this._prepared_events_cache = e,
                        this._prepared_events_coordinate_cache = e
                    },
                    getPreparedEvents: function(t) {
                        var n;
                        return this._prepared_events_cache ? n = this._prepared_events_cache : ((n = e._prepare_timeline_events(t)).$coordinates = {},
                        this.cachePreparedEvents(n)),
                        n
                    },
                    updateEvents: function(t, n) {
                        var i = this.getPreparedEvents(t)
                          , a = this._rendered_events_cache.slice();
                        this._rendered_events_cache = [];
                        var r = e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col");
                        if (r) {
                            for (var o = 0; o < this._rendered_labels_cache.length; o++) {
                                var s = this._rendered_labels_cache[o]
                                  , l = []
                                  , _ = a[s] ? a[s].slice() : [];
                                e._timeline_calculate_event_positions.call(t, i[s]);
                                for (var d = e._timeline_smart_render.getVisibleEventsForRow(t, n, i, s), c = 0, h = d.length; c < h; c++) {
                                    var u = _.indexOf(d[c].id);
                                    u > -1 ? _.splice(u, 1) : l.push(d[c])
                                }
                                var f = r.querySelector('[data-section-index="' + s + '"]');
                                _.length && this._deleteEvents(_, t, f),
                                l.length && this._addEvents(l, t, f, s)
                            }
                            e._populate_timeline_rendered(e.$container),
                            t._matrix = i
                        }
                    },
                    _deleteEvents: function(e, t, n) {
                        for (var i = 0; i < e.length; i++) {
                            var a = n.querySelector('[event_id="' + e[i] + '"]');
                            a && (a.classList.contains("dhx_in_move") || n.removeChild(a))
                        }
                    },
                    _addEvents: function(t, n, i, a) {
                        var r = e._timeline_update_events_html.call(n, t);
                        i.insertAdjacentHTML("beforeEnd", r)
                    },
                    getVisibleEventsForRow: function(t, n, i, a) {
                        var r = [];
                        if ("cell" == t.render)
                            r = i;
                        else {
                            var o = i[a];
                            if (o)
                                for (var s = 0, l = o.length; s < l; s++) {
                                    var _, d, c = o[s], h = a + "_" + c.id;
                                    i.$coordinates && i.$coordinates[h] ? (_ = i.$coordinates[h].xStart,
                                    d = i.$coordinates[h].xEnd) : (_ = e._timeline_getX(c, !1, t),
                                    d = e._timeline_getX(c, !0, t),
                                    i.$coordinates && (i.$coordinates[h] = {
                                        xStart: _,
                                        xEnd: d
                                    })),
                                    e._timeline_smart_render.isInXViewPort({
                                        left: _,
                                        right: d
                                    }, n) && (r.push(c),
                                    this._rendered_events_cache[a] || (this._rendered_events_cache[a] = []),
                                    this._rendered_events_cache[a].push(c.id))
                                }
                        }
                        return r
                    },
                    getVisibleRowCellsHTML: function(t, n, i, a, r) {
                        for (var o, s = "", l = this._rendered_header_cache, _ = 0; _ < l.length; _++) {
                            var d = l[_];
                            o = t._h_cols[d].left - t.dx,
                            e._ignores[d] ? "cell" == t.render ? s += e._timeline_get_html_for_cell_ignores(i) : s += e._timeline_get_html_for_bar_ignores() : "cell" == t.render ? s += e._timeline_get_html_for_cell(d, r, t, a[r][d], i, o) : s += e._timeline_get_html_for_bar(d, r, t, a[r], o)
                        }
                        return s
                    },
                    getVisibleTimelineRowsHTML: function(t, n, i, a) {
                        var r = ""
                          , o = e._timeline_get_cur_row_stats(t, a);
                        o = e._timeline_get_fit_events_stats(t, a, o);
                        var s = t._label_rows[a];
                        return "cell" == t.render ? (r += e._timeline_get_html_for_cell_data_row(a, o, s.top, s.section.key),
                        r += this.getVisibleRowCellsHTML(t, n, o, i, a),
                        r += "</div>") : (r += e._timeline_get_html_for_bar_matrix_line(a, o, s.top, s.section.key),
                        r += e._timeline_get_html_for_bar_data_row(o),
                        r += this.getVisibleRowCellsHTML(t, n, o, i, a),
                        r += "</div></div>"),
                        r
                    },
                    updateGridRows: function(e, t) {
                        this._rows_to_delete.length && this._deleteGridRows(this._rows_to_delete),
                        this._rows_to_add.length && this._addGridRows(this._rows_to_add, e, t)
                    },
                    _deleteGridRows: function(t) {
                        var n = e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col");
                        if (n) {
                            for (var i = 0; i < t.length; i++) {
                                var a = n.querySelector('[data-section-index="' + t[i] + '"]');
                                n.removeChild(a)
                            }
                            this._rows_to_delete = []
                        }
                    },
                    _addGridRows: function(t, n, i) {
                        var a = e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col");
                        if (a) {
                            for (var r = this.getPreparedEvents(n), o = "", s = 0; s < t.length; s++)
                                o += this.getVisibleTimelineRowsHTML(n, i, r, t[s]);
                            a.insertAdjacentHTML("beforeEnd", o);
                            for (s = 0; s < t.length; s++)
                                e._timeline_finalize_section_add(n, n.y_unit[t[s]].key, a);
                            e._mark_now && e._mark_now(),
                            this._rows_to_add = []
                        }
                    },
                    updateGridCols: function(t, n) {
                        for (var i = this._rendered_header_cache, a = {}, r = {}, o = 0; o < i.length; o++)
                            r[i[o]] = !0;
                        var s = e.$container.querySelector(".dhx_timeline_data_row");
                        if (s) {
                            var l = s.querySelectorAll("[data-col-id]");
                            for (o = 0; o < l.length; o++)
                                a[l[o].getAttribute("data-col-id")] = !0
                        }
                        var _ = []
                          , d = [];
                        for (var o in a)
                            r[o] || _.push(o);
                        for (var o in r)
                            a[o] || d.push(o);
                        _.length && this._deleteGridCols(_, t),
                        d.length && this._addGridCols(d, t, n)
                    },
                    _deleteGridCols: function(t, n) {
                        var i = e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col");
                        if (i) {
                            for (var a = 0; a < this._rendered_labels_cache.length; a++) {
                                var r;
                                if (r = "cell" == n.render ? i.querySelector('[data-section-index="' + this._rendered_labels_cache[a] + '"]') : i.querySelector('[data-section-index="' + this._rendered_labels_cache[a] + '"] .dhx_timeline_data_row '))
                                    for (var o = 0; o < t.length; o++) {
                                        var s = r.querySelector('[data-col-id="' + t[o] + '"]');
                                        s && r.removeChild(s)
                                    }
                            }
                            this._cols_to_delete = []
                        }
                    },
                    _addGridCols: function(t, n, i) {
                        var a = e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col");
                        if (a) {
                            for (var r = this.getPreparedEvents(n), o = 0; o < this._rendered_labels_cache.length; o++) {
                                var s, l = this._rendered_labels_cache[o], _ = "", d = e._timeline_get_cur_row_stats(n, l);
                                if (d = e._timeline_get_fit_events_stats(n, l, d),
                                s = "cell" == n.render ? a.querySelector('[data-section-index="' + l + '"]') : a.querySelector('[data-section-index="' + l + '"] .dhx_timeline_data_row')) {
                                    for (var c = 0; c < t.length; c++)
                                        if (!s.querySelector('[data-col-id="' + t[c] + '"]')) {
                                            var h = this.getVisibleGridCell(n, i, d, r, l, t[c]);
                                            h && (_ += h)
                                        }
                                    s.insertAdjacentHTML("beforeEnd", _)
                                }
                            }
                            this._cols_to_add = []
                        }
                    },
                    getVisibleGridCell: function(t, n, i, a, r, o) {
                        if (t._h_cols[o]) {
                            var s = ""
                              , l = t._h_cols[o].left - t.dx;
                            return "cell" == t.render ? e._ignores[o] || (s += e._timeline_get_html_for_cell(o, r, t, a[r][o], i, l)) : e._ignores[o] || (s += e._timeline_get_html_for_bar(o, r, t, a[r], l)),
                            s
                        }
                    }
                }
            }
            ,
            e._temp_matrix_scope()
        }
        ))
    },
    1433: function(e, t) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        Scheduler.plugin((function(e) {
            var t;
            e.attachEvent("onTimelineCreated", (function(t) {
                "tree" == t.render && (t.y_unit_original = t.y_unit,
                t.y_unit = e._getArrayToDisplay(t.y_unit_original),
                e.attachEvent("onOptionsLoadStart", (function() {
                    t.y_unit = e._getArrayToDisplay(t.y_unit_original)
                }
                )),
                e.form_blocks[t.name] = {
                    render: function(e) {
                        return "<div class='dhx_section_timeline' style='overflow: hidden; height: " + e.height + "px'></div>"
                    },
                    set_value: function(t, n, i, a) {
                        var r = e._getArrayForSelect(e.matrix[a.type].y_unit_original, a.type);
                        t.innerHTML = "";
                        var o = document.createElement("select");
                        t.appendChild(o);
                        var s = t.getElementsByTagName("select")[0];
                        !s._dhx_onchange && a.onchange && (s.onchange = a.onchange,
                        s._dhx_onchange = !0);
                        for (var l = 0; l < r.length; l++) {
                            var _ = document.createElement("option");
                            _.value = r[l].key,
                            _.value == i[e.matrix[a.type].y_property] && (_.selected = !0),
                            _.innerHTML = r[l].label,
                            s.appendChild(_)
                        }
                    },
                    get_value: function(e, t, n) {
                        return e.firstChild.value
                    },
                    focus: function(e) {}
                })
            }
            )),
            e.attachEvent("onBeforeSectionRender", (function(t, n, i) {
                var a, r, o, s, l, _, d = {};
                "tree" == t && (s = "dhx_matrix_scell",
                n.children ? (a = i.folder_dy || i.dy,
                i.folder_dy && !i.section_autoheight && (o = "height:" + i.folder_dy + "px;"),
                r = "dhx_row_folder",
                s += " folder",
                n.open ? s += " opened" : s += " closed",
                l = "<div class='dhx_scell_expand'>" + (n.open ? "-" : "+") + "</div>",
                _ = i.folder_events_available ? "dhx_data_table folder folder_events" : "dhx_data_table folder") : (a = i.dy,
                r = "dhx_row_item",
                s += " item",
                l = "",
                _ = "dhx_data_table"),
                d = {
                    height: a,
                    style_height: o,
                    tr_className: r,
                    td_className: s += e.templates[i.name + "_scaley_class"](n.key, n.label, n) ? " " + e.templates[i.name + "_scaley_class"](n.key, n.label, n) : "",
                    td_content: "<div class='dhx_scell_level" + n.level + "'>" + l + "<div class='dhx_scell_name'>" + (e.templates[i.name + "_scale_label"](n.key, n.label, n) || n.label) + "</div></div>",
                    table_className: _
                });
                return d
            }
            )),
            e.attachEvent("onBeforeEventChanged", (function(n, i, a) {
                if (e._isRender("tree"))
                    for (var r = e._get_event_sections ? e._get_event_sections(n) : [n[e.matrix[e._mode].y_property]], o = 0; o < r.length; o++) {
                        var s = e.getSection(r[o]);
                        if (s && s.children && !e.matrix[e._mode].folder_events_available)
                            return a || (n[e.matrix[e._mode].y_property] = t),
                            !1
                    }
                return !0
            }
            )),
            e.attachEvent("onBeforeDrag", (function(n, i, a) {
                if (e._isRender("tree")) {
                    var r, o = e._locate_cell_timeline(a);
                    if (o && (r = e.matrix[e._mode].y_unit[o.y].key,
                    e.matrix[e._mode].y_unit[o.y].children && !e.matrix[e._mode].folder_events_available))
                        return !1;
                    var s = e.getEvent(n)
                      , l = e.matrix[e._mode].y_property;
                    t = s && s[l] ? s[l] : r
                }
                return !0
            }
            )),
            e._getArrayToDisplay = function(t) {
                var n = []
                  , i = function(t, a, r, o) {
                    for (var s = a || 0, l = 0; l < t.length; l++) {
                        var _ = t[l];
                        _.level = s,
                        _.$parent = r || null,
                        _.children && void 0 === _.key && (_.key = e.uid()),
                        o || n.push(_),
                        _.children && i(_.children, s + 1, _.key, o || !_.open)
                    }
                };
                return i(t),
                n
            }
            ,
            e._getArrayForSelect = function(t, n) {
                var i = []
                  , a = function(t) {
                    for (var r = 0; r < t.length; r++)
                        e.matrix[n].folder_events_available ? i.push(t[r]) : t[r].children || i.push(t[r]),
                        t[r].children && a(t[r].children, n)
                };
                return a(t),
                i
            }
            ,
            e._toggleFolderDisplay = function(t, n, i) {
                var a = function(e, t, n, i) {
                    for (var r = 0; r < t.length && (t[r].key != e && !i || !t[r].children || (t[r].open = void 0 !== n ? n : !t[r].open,
                    !0,
                    i)); r++)
                        t[r].children && a(e, t[r].children, n, i)
                }
                  , r = e.getSection(t);
                void 0 !== n || i || (n = !r.open),
                e.callEvent("onBeforeFolderToggle", [r, n, i]) && (a(t, e.matrix[e._mode].y_unit_original, n, i),
                e.matrix[e._mode].y_unit = e._getArrayToDisplay(e.matrix[e._mode].y_unit_original),
                e.callEvent("onOptionsLoad", []),
                e.callEvent("onAfterFolderToggle", [r, n, i]))
            }
            ,
            e.attachEvent("onCellClick", (function(t, n, i, a, r) {
                e._isRender("tree") && (e.matrix[e._mode].folder_events_available || void 0 !== e.matrix[e._mode].y_unit[n] && e.matrix[e._mode].y_unit[n].children && e._toggleFolderDisplay(e.matrix[e._mode].y_unit[n].key))
            }
            )),
            e.attachEvent("onYScaleClick", (function(t, n, i) {
                e._isRender("tree") && n.children && e._toggleFolderDisplay(n.key)
            }
            )),
            e.getSection = function(t) {
                if (e._isRender("tree")) {
                    var n, i = function(e, t) {
                        for (var a = 0; a < t.length; a++)
                            t[a].key == e && (n = t[a]),
                            t[a].children && i(e, t[a].children)
                    };
                    return i(t, e.matrix[e._mode].y_unit_original),
                    n || null
                }
            }
            ,
            e.deleteSection = function(t) {
                if (e._isRender("tree")) {
                    var n = !1
                      , i = function(e, t) {
                        for (var a = 0; a < t.length && (t[a].key == e && (t.splice(a, 1),
                        n = !0),
                        !n); a++)
                            t[a].children && i(e, t[a].children)
                    };
                    return i(t, e.matrix[e._mode].y_unit_original),
                    e.matrix[e._mode].y_unit = e._getArrayToDisplay(e.matrix[e._mode].y_unit_original),
                    e.callEvent("onOptionsLoad", []),
                    n
                }
            }
            ,
            e.deleteAllSections = function() {
                e._isRender("tree") && (e.matrix[e._mode].y_unit_original = [],
                e.matrix[e._mode].y_unit = e._getArrayToDisplay(e.matrix[e._mode].y_unit_original),
                e.callEvent("onOptionsLoad", []))
            }
            ,
            e.addSection = function(t, n) {
                if (e._isRender("tree")) {
                    var i = !1
                      , a = function(e, t, r) {
                        if (n)
                            for (var o = 0; o < r.length && (r[o].key == t && r[o].children && (r[o].children.push(e),
                            i = !0),
                            !i); o++)
                                r[o].children && a(e, t, r[o].children);
                        else
                            r.push(e),
                            i = !0
                    };
                    return a(t, n, e.matrix[e._mode].y_unit_original),
                    e.matrix[e._mode].y_unit = e._getArrayToDisplay(e.matrix[e._mode].y_unit_original),
                    e.callEvent("onOptionsLoad", []),
                    i
                }
            }
            ,
            e.openAllSections = function() {
                e._isRender("tree") && e._toggleFolderDisplay(1, !0, !0)
            }
            ,
            e.closeAllSections = function() {
                e._isRender("tree") && e._toggleFolderDisplay(1, !1, !0)
            }
            ,
            e.openSection = function(t) {
                e._isRender("tree") && e._toggleFolderDisplay(t, !0)
            }
            ,
            e.closeSection = function(t) {
                e._isRender("tree") && e._toggleFolderDisplay(t, !1)
            }
        }
        ))
    },
    1434: function(e, t) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        Scheduler.plugin((function(e) {
            e._props = {},
            e.createUnitsView = function(t, n, i, a, r, o, s) {
                function l(t) {
                    return Math.round((e._correct_shift(+t, 1) - +e._min_date) / 864e5)
                }
                function _() {
                    d && (e.xy.scale_height /= 2,
                    d = !1)
                }
                "object" == typeof t && (i = t.list,
                n = t.property,
                a = t.size || 0,
                r = t.step || 1,
                o = t.skip_incorrect,
                s = t.days || 1,
                t = t.name),
                e._props[t] = {
                    map_to: n,
                    options: i,
                    step: r,
                    position: 0,
                    days: s
                },
                a > e._props[t].options.length && (e._props[t]._original_size = a,
                a = 0),
                e._props[t].size = a,
                e._props[t].skip_incorrect = o || !1,
                e.date[t + "_start"] = e.date.day_start,
                e.templates[t + "_date"] = function(n, i) {
                    return e._props[t].days > 1 ? e.templates.week_date(n, i) : e.templates.day_date(n)
                }
                ,
                e._get_unit_index = function(e, t) {
                    var n = e.position || 0
                      , i = l(t)
                      , a = e.size || e.options.length;
                    return i >= a && (i %= a),
                    n + i
                }
                ,
                e.templates[t + "_scale_text"] = function(e, t, n) {
                    return n.css ? "<span class='" + n.css + "'>" + t + "</span>" : t
                }
                ,
                e.templates[t + "_scale_date"] = function(n) {
                    var i = e._props[t]
                      , a = i.options;
                    if (!a.length)
                        return "";
                    var r = a[e._get_unit_index(i, n)]
                      , o = l(n)
                      , s = i.size || i.options.length
                      , _ = e.date.add(e.getState().min_date, Math.floor(o / s), "day");
                    return e.templates[t + "_scale_text"](r.key, r.label, r, _)
                }
                ,
                e.templates[t + "_second_scale_date"] = function(t) {
                    return e.templates.week_scale_date(t)
                }
                ,
                e.date["add_" + t] = function(n, i) {
                    return e.date.add(n, i * e._props[t].days, "day")
                }
                ,
                e.date["get_" + t + "_end"] = function(n) {
                    return e.date.add(n, (e._props[t].size || e._props[t].options.length) * e._props[t].days, "day")
                }
                ,
                e.attachEvent("onOptionsLoad", (function() {
                    for (var n = e._props[t], i = n.order = {}, a = n.options, r = 0; r < a.length; r++)
                        i[a[r].key] = r;
                    n._original_size && 0 === n.size && (n.size = n._original_size,
                    delete n._original_size),
                    n.size > a.length ? (n._original_size = n.size,
                    n.position = 0,
                    n.size = 0) : n.size = n._original_size || n.size,
                    e._date && e._mode == t && e.setCurrentView(e._date, e._mode)
                }
                )),
                e["mouse_" + t] = function(t) {
                    var n = e._props[this._mode];
                    if (n) {
                        if (t = this._week_indexes_from_pos(t),
                        this._drag_event || (this._drag_event = {}),
                        this._drag_id && this._drag_mode && (this._drag_event._dhx_changed = !0),
                        this._drag_mode && "new-size" == this._drag_mode) {
                            var i = e._get_event_sday(e._events[e._drag_id]);
                            Math.floor(t.x / n.options.length) != Math.floor(i / n.options.length) && (t.x = i)
                        }
                        var a = n.size || n.options.length
                          , r = t.x % a
                          , o = Math.min(r + n.position, n.options.length - 1);
                        t.section = (n.options[o] || {}).key,
                        t.x = Math.floor(t.x / a);
                        var s = this.getEvent(this._drag_id);
                        this._update_unit_section({
                            view: n,
                            event: s,
                            pos: t
                        })
                    }
                    return t.force_redraw = !0,
                    t
                }
                ;
                var d = !1;
                e[t + "_view"] = function(t) {
                    var n = e._props[e._mode];
                    t ? (n && n.days > 1 ? d || (d = e.xy.scale_height,
                    e.xy.scale_height = 2 * e.xy.scale_height) : _(),
                    e._reset_scale()) : _()
                }
                ,
                e.callEvent("onOptionsLoad", [])
            }
            ,
            e._update_unit_section = function(e) {
                var t = e.view
                  , n = e.event
                  , i = e.pos;
                n && (n[t.map_to] = i.section)
            }
            ,
            e.scrollUnit = function(t) {
                var n = e._props[this._mode];
                n && (n.position = Math.min(Math.max(0, n.position + t), n.options.length - n.size),
                this.setCurrentView())
            }
            ,
            function() {
                var t = function(t) {
                    var n = e._props[e._mode];
                    if (n && n.order && n.skip_incorrect) {
                        for (var i = [], a = 0; a < t.length; a++)
                            void 0 !== n.order[t[a][n.map_to]] && i.push(t[a]);
                        t.splice(0, t.length),
                        t.push.apply(t, i)
                    }
                    return t
                }
                  , n = e._pre_render_events_table;
                e._pre_render_events_table = function(e, i) {
                    return e = t(e),
                    n.apply(this, [e, i])
                }
                ;
                var i = e._pre_render_events_line;
                e._pre_render_events_line = function(e, n) {
                    return e = t(e),
                    i.apply(this, [e, n])
                }
                ;
                var a = function(t, n) {
                    if (t && void 0 === t.order[n[t.map_to]]) {
                        var i = e
                          , a = Math.floor((n.end_date - i._min_date) / 864e5);
                        return t.options.length && (n[t.map_to] = t.options[Math.min(a + t.position, t.options.length - 1)].key),
                        !0
                    }
                }
                  , r = e.is_visible_events;
                e.is_visible_events = function(t) {
                    var n = r.apply(this, arguments);
                    if (n) {
                        var i = e._props[this._mode];
                        if (i && i.size) {
                            var a = i.order[t[i.map_to]];
                            if (a < i.position || a >= i.size + i.position)
                                return !1
                        }
                    }
                    return n
                }
                ;
                var o = e._process_ignores;
                e._process_ignores = function(t, n, i, a, r) {
                    if (e._props[this._mode]) {
                        this._ignores = {},
                        this._ignores_detected = 0;
                        var s = e["ignore_" + this._mode];
                        if (s) {
                            var l = e._props && e._props[this._mode] ? e._props[this._mode].size || e._props[this._mode].options.length : 1;
                            n /= l;
                            for (var _ = new Date(t), d = 0; d < n; d++) {
                                if (s(_))
                                    for (var c = (d + 1) * l, h = d * l; h < c; h++)
                                        this._ignores_detected += 1,
                                        this._ignores[h] = !0,
                                        r && n++;
                                _ = e.date.add(_, a, i),
                                e.date[i + "_start"] && (_ = e.date[i + "_start"](_))
                            }
                        }
                    } else
                        o.call(this, t, n, i, a, r)
                }
                ;
                var s = e._reset_scale;
                e._reset_scale = function() {
                    var t = e._props[this._mode];
                    t && (t.size && t.position && t.size + t.position > t.options.length ? t.position = Math.max(0, t.options.length - t.size) : t.size || (t.position = 0));
                    var n = s.apply(this, arguments);
                    if (t) {
                        this._max_date = this.date.add(this._min_date, t.days, "day");
                        for (var i = this._els.dhx_cal_data[0].childNodes, a = 0; a < i.length; a++)
                            i[a].className = i[a].className.replace("_now", "");
                        var r = this._currentDate();
                        if (r.valueOf() >= this._min_date && r.valueOf() < this._max_date) {
                            var o = 864e5
                              , l = Math.floor((r - e._min_date) / o)
                              , _ = t.size || t.options.length
                              , d = l * _
                              , c = d + _;
                            for (a = d; a < c; a++)
                                i[a] && (i[a].className = i[a].className.replace("dhx_scale_holder", "dhx_scale_holder_now"))
                        }
                        if (t.size && t.size < t.options.length) {
                            var h = this._els.dhx_cal_header[0]
                              , u = document.createElement("div");
                            t.position && (this._waiAria.headerButtonsAttributes(u, ""),
                            e.config.rtl ? (u.className = "dhx_cal_next_button",
                            u.style.cssText = "left:auto; right:0px;top:2px;position:absolute;") : (u.className = "dhx_cal_prev_button",
                            u.style.cssText = "left:1px;top:2px;position:absolute;"),
                            u.innerHTML = "&nbsp;",
                            h.firstChild.appendChild(u),
                            u.onclick = function() {
                                e.scrollUnit(-1 * t.step)
                            }
                            ),
                            t.position + t.size < t.options.length && (this._waiAria.headerButtonsAttributes(u, ""),
                            u = document.createElement("div"),
                            e.config.rtl ? (u.className = "dhx_cal_prev_button",
                            u.style.cssText = "left:1px;top:2px;position:absolute;") : (u.className = "dhx_cal_next_button",
                            u.style.cssText = "left:auto; right:0px;top:2px;position:absolute;"),
                            u.innerHTML = "&nbsp;",
                            h.lastChild.appendChild(u),
                            u.onclick = function() {
                                e.scrollUnit(t.step)
                            }
                            )
                        }
                    }
                    return n
                }
                ;
                var l = e._get_view_end;
                e._get_view_end = function() {
                    var t = e._props[this._mode];
                    if (t && t.days > 1) {
                        var n = this._get_timeunit_start();
                        return e.date.add(n, t.days, "day")
                    }
                    return l.apply(this, arguments)
                }
                ;
                var _ = e._render_x_header;
                e._render_x_header = function(t, n, i, a) {
                    var r = e._props[this._mode];
                    if (!r || r.days <= 1)
                        return _.apply(this, arguments);
                    if (r.days > 1) {
                        var o = a.querySelector(".dhx_second_cal_header");
                        o || ((o = document.createElement("div")).className = "dhx_second_cal_header",
                        a.appendChild(o));
                        var s = e.xy.scale_height;
                        e.xy.scale_height = Math.ceil(s / 2),
                        _.call(this, t, n, i, o, Math.ceil(e.xy.scale_height));
                        var l = r.size || r.options.length;
                        if ((t + 1) % l == 0) {
                            var d = document.createElement("div");
                            d.className = "dhx_scale_bar dhx_second_scale_bar";
                            var c = this.date.add(this._min_date, Math.floor(t / l), "day");
                            this.templates[this._mode + "_second_scalex_class"] && (d.className += " " + this.templates[this._mode + "_second_scalex_class"](new Date(c)));
                            var h, u = this._cols[t] * l - 1;
                            h = l > 1 && this.config.rtl ? this._colsS[t - (l - 1)] - this.xy.scroll_width - 2 : l > 1 ? this._colsS[t - (l - 1)] - this.xy.scale_width - 2 : n,
                            this.set_xy(d, u, this.xy.scale_height - 2, h, 0),
                            d.innerHTML = this.templates[this._mode + "_second_scale_date"](new Date(c), this._mode),
                            o.appendChild(d)
                        }
                        e.xy.scale_height = s
                    }
                }
                ;
                var d = e._get_event_sday;
                e._get_event_sday = function(t) {
                    var n = e._props[this._mode];
                    return n ? n.days <= 1 ? (a(n, t),
                    this._get_section_sday(t[n.map_to])) : Math.floor((t.end_date.valueOf() - 1 - 60 * t.end_date.getTimezoneOffset() * 1e3 - (e._min_date.valueOf() - 60 * e._min_date.getTimezoneOffset() * 1e3)) / 864e5) * (n.size || n.options.length) + n.order[t[n.map_to]] - n.position : d.call(this, t)
                }
                ,
                e._get_section_sday = function(t) {
                    var n = e._props[this._mode];
                    return n.order[t] - n.position
                }
                ;
                var c = e.locate_holder_day;
                e.locate_holder_day = function(t, n, i) {
                    var r, o = e._props[this._mode];
                    return o ? (i ? a(o, i) : (i = {
                        start_date: t,
                        end_date: t
                    },
                    r = 0),
                    o.days <= 1 ? 1 * (void 0 === r ? o.order[i[o.map_to]] : r) + (n ? 1 : 0) - o.position : Math.floor((i.start_date.valueOf() - e._min_date.valueOf()) / 864e5) * (o.size || o.options.length) + 1 * (void 0 === r ? o.order[i[o.map_to]] : r) + (n ? 1 : 0) - o.position) : c.apply(this, arguments)
                }
                ;
                var h = e._time_order;
                e._time_order = function(t) {
                    var n = e._props[this._mode];
                    n ? t.sort((function(e, t) {
                        return n.order[e[n.map_to]] > n.order[t[n.map_to]] ? 1 : -1
                    }
                    )) : h.apply(this, arguments)
                }
                ;
                var u = e._pre_render_events_table;
                e._pre_render_events_table = function(t, n) {
                    function i(t) {
                        var n = e.date.add(t, 1, "day");
                        return e.date.date_part(n)
                    }
                    var a = e._props[this._mode];
                    if (a && a.days > 1) {
                        for (var r = {}, o = 0; o < t.length; o++) {
                            var s = t[o];
                            if (e.isOneDayEvent(t[o])) {
                                r[d = +e.date.date_part(new Date(s.start_date))] || (r[d] = []),
                                r[d].push(s)
                            } else {
                                var l = new Date(Math.min(+s.end_date, +this._max_date))
                                  , _ = new Date(Math.max(+s.start_date, +this._min_date));
                                for (_ = e.date.day_start(_),
                                t.splice(o, 1),
                                o--; +_ < +l; ) {
                                    var d, c = this._copy_event(s);
                                    c.start_date = _,
                                    c.end_date = i(c.start_date),
                                    _ = e.date.add(_, 1, "day"),
                                    r[d = +e.date.date_part(new Date(_))] || (r[d] = []),
                                    r[d].push(c)
                                }
                            }
                        }
                        var h;
                        t = [];
                        for (var o in r) {
                            var f = u.apply(this, [r[o], n])
                              , p = this._colsS.heights;
                            (!h || p[0] > h[0]) && (h = p.slice()),
                            t.push.apply(t, f)
                        }
                        var v = this._colsS.heights;
                        v.splice(0, v.length),
                        v.push.apply(v, h);
                        for (o = 0; o < t.length; o++)
                            if (this._ignores[t[o]._sday])
                                t.splice(o, 1),
                                o--;
                            else {
                                var m = t[o];
                                m._first_chunk = m._last_chunk = !1,
                                this.getEvent(m.id)._sorder = m._sorder
                            }
                        t.sort((function(e, t) {
                            return e.start_date.valueOf() == t.start_date.valueOf() ? e.id > t.id ? 1 : -1 : e.start_date > t.start_date ? 1 : -1
                        }
                        ))
                    } else
                        t = u.apply(this, [t, n]);
                    return t
                }
                ,
                e.attachEvent("onEventAdded", (function(t, n) {
                    if (this._loading)
                        return !0;
                    for (var i in e._props) {
                        var a = e._props[i];
                        void 0 === n[a.map_to] && a.options[0] && (n[a.map_to] = a.options[0].key)
                    }
                    return !0
                }
                )),
                e.attachEvent("onEventCreated", (function(t, n) {
                    var i = e._props[this._mode];
                    if (i && n) {
                        var r = this.getEvent(t);
                        a(i, r);
                        var o = this._mouse_coords(n);
                        this._update_unit_section({
                            view: i,
                            event: r,
                            pos: o
                        }),
                        this.event_updated(r)
                    }
                    return !0
                }
                ))
            }()
        }
        ))
    },
    1435: function(e, t) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        Scheduler.plugin((function(e) {
            e.config.multisection = !0,
            e.config.multisection_shift_all = !0,
            e.config.section_delimiter = ",",
            e.attachEvent("onSchedulerReady", (function() {
                e._inited_multisection_copies || (e.attachEvent("onEventIdChange", (function(e, t) {
                    var n = this._multisection_copies;
                    if (n && n[e] && !n[t]) {
                        var i = n[e];
                        delete n[e],
                        n[t] = i
                    }
                }
                )),
                e._inited_multisection_copies = !0),
                e._register_copies_array = function(e) {
                    for (var t = 0; t < e.length; t++)
                        this._register_copy(e[t])
                }
                ,
                e._register_copy = function(e) {
                    if (this._multisection_copies) {
                        this._multisection_copies[e.id] || (this._multisection_copies[e.id] = {});
                        var t = e[this._get_section_property()];
                        this._multisection_copies[e.id][t] = e
                    }
                }
                ,
                e._get_copied_event = function(t, n) {
                    if (!this._multisection_copies[t])
                        return null;
                    if (this._multisection_copies[t][n])
                        return this._multisection_copies[t][n];
                    var i = this._multisection_copies[t];
                    if (e._drag_event && e._drag_event._orig_section && i[e._drag_event._orig_section])
                        return i[e._drag_event._orig_section];
                    var a = 1 / 0
                      , r = null;
                    for (var o in i)
                        i[o]._sorder < a && (r = i[o],
                        a = i[o]._sorder);
                    return r
                }
                ,
                e._clear_copied_events = function() {
                    this._multisection_copies = {}
                }
                ,
                e._restore_render_flags = function(t) {
                    for (var n = this._get_section_property(), i = 0; i < t.length; i++) {
                        var a = t[i]
                          , r = e._get_copied_event(a.id, a[n]);
                        if (r)
                            for (var o in r)
                                0 === o.indexOf("_") && (a[o] = r[o])
                    }
                }
                ;
                var t = e._update_unit_section;
                e._update_unit_section = function(n) {
                    return e._update_sections(n, t)
                }
                ;
                var n = e._update_timeline_section;
                e._update_timeline_section = function(t) {
                    return e._update_sections(t, n)
                }
                ,
                e.isMultisectionEvent = function(e) {
                    return !(!e || !this._get_multisection_view()) && this._get_event_sections(e).length > 1
                }
                ,
                e._get_event_sections = function(e) {
                    var t = e[this._get_section_property()] || "";
                    return this._parse_event_sections(t)
                }
                ,
                e._parse_event_sections = function(t) {
                    return t instanceof Array ? t : t.toString().split(e.config.section_delimiter)
                }
                ,
                e._clear_copied_events(),
                e._split_events = function(t) {
                    var n = []
                      , i = this._get_multisection_view()
                      , a = this._get_section_property();
                    if (i)
                        for (var r = 0; r < t.length; r++) {
                            var o = this._get_event_sections(t[r]);
                            if (o.length > 1) {
                                for (var s = 0; s < o.length; s++)
                                    if (void 0 !== i.order[o[s]]) {
                                        var l = e._copy_event(t[r]);
                                        l[a] = o[s],
                                        n.push(l)
                                    }
                            } else
                                n.push(t[r])
                        }
                    else
                        n = t;
                    return n
                }
                ,
                e._get_multisection_view = function() {
                    return !!this.config.multisection && e._get_section_view()
                }
                ;
                var i = e.get_visible_events;
                e.get_visible_events = function(e) {
                    this._clear_copied_events();
                    var t = i.apply(this, arguments);
                    if (this._get_multisection_view()) {
                        t = this._split_events(t);
                        for (var n = 0; n < t.length; n++)
                            this.is_visible_events(t[n]) || (t.splice(n, 1),
                            n--);
                        this._register_copies_array(t)
                    }
                    return t
                }
                ,
                e._rendered_events = {};
                var a = e.render_view_data;
                e.render_view_data = function(e, t) {
                    return this._get_multisection_view() && e && (e = this._split_events(e),
                    this._restore_render_flags(e)),
                    a.apply(this, [e, t])
                }
                ,
                e._update_sections = function(t, n) {
                    var i = t.view
                      , a = t.event
                      , r = t.pos;
                    if (e.isMultisectionEvent(a)) {
                        if (e._drag_event._orig_section || (e._drag_event._orig_section = r.section),
                        e._drag_event._orig_section != r.section) {
                            var o = i.order[r.section] - i.order[e._drag_event._orig_section];
                            if (o) {
                                var s = this._get_event_sections(a)
                                  , l = []
                                  , _ = !0;
                                if (e.config.multisection_shift_all)
                                    for (var d = 0; d < s.length; d++) {
                                        if (null === (c = e._shift_sections(i, s[d], o))) {
                                            l = s,
                                            _ = !1;
                                            break
                                        }
                                        l[d] = c
                                    }
                                else
                                    for (d = 0; d < s.length; d++) {
                                        if (s[d] == r.section) {
                                            l = s,
                                            _ = !1;
                                            break
                                        }
                                        if (s[d] == e._drag_event._orig_section) {
                                            var c;
                                            if (null === (c = e._shift_sections(i, s[d], o))) {
                                                l = s,
                                                _ = !1;
                                                break
                                            }
                                            l[d] = c
                                        } else
                                            l[d] = s[d]
                                    }
                                _ && (e._drag_event._orig_section = r.section),
                                a[e._get_section_property()] = l.join(e.config.section_delimiter)
                            }
                        }
                    } else
                        n.apply(e, [t])
                }
                ,
                e._shift_sections = function(e, t, n) {
                    for (var i = null, a = e.y_unit || e.options, r = 0; r < a.length; r++)
                        if (a[r].key == t) {
                            i = r;
                            break
                        }
                    var o = a[i + n];
                    return o ? o.key : null
                }
                ;
                var r = e._get_blocked_zones;
                e._get_blocked_zones = function(e, t, n, i, a) {
                    if (t && this.config.multisection) {
                        t = this._parse_event_sections(t);
                        for (var o = [], s = 0; s < t.length; s++)
                            o = o.concat(r.apply(this, [e, t[s], n, i, a]));
                        return o
                    }
                    return r.apply(this, arguments)
                }
                ;
                var o = e._check_sections_collision;
                e._check_sections_collision = function(e, t) {
                    if (this.config.multisection && this._get_section_view()) {
                        e = this._split_events([e]),
                        t = this._split_events([t]);
                        for (var n = !1, i = 0, a = e.length; i < a && !n; i++)
                            for (var r = 0, s = t.length; r < s; r++)
                                if (o.apply(this, [e[i], t[r]])) {
                                    n = !0;
                                    break
                                }
                        return n
                    }
                    return o.apply(this, arguments)
                }
            }
            ))
        }
        ))
    },
    1436: function(e, t) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        Scheduler.plugin((function(e) {
            !function() {
                e.config.all_timed = "short",
                e.config.all_timed_month = !1;
                var t = function(t) {
                    return !((t.end_date - t.start_date) / 36e5 >= 24) || "resize" == e._drag_mode && e._drag_id == t.id
                };
                e._safe_copy = function(t) {
                    var n = null
                      , i = e._copy_event(t);
                    return t.event_pid && (n = e.getEvent(t.event_pid)),
                    n && n.isPrototypeOf(t) && (delete i.event_length,
                    delete i.event_pid,
                    delete i.rec_pattern,
                    delete i.rec_type),
                    i
                }
                ;
                var n = e._pre_render_events_line
                  , i = e._pre_render_events_table
                  , a = function(e, t) {
                    return this._table_view ? i.call(this, e, t) : n.call(this, e, t)
                };
                e._pre_render_events_line = e._pre_render_events_table = function(n, i) {
                    function r(e) {
                        var t = o(e.start_date);
                        return +e.end_date > +t
                    }
                    function o(t) {
                        var n = e.date.add(t, 1, "day");
                        return e.date.date_part(n)
                    }
                    function s(t, n) {
                        var i = e.date.date_part(new Date(t));
                        return i.setHours(n),
                        i
                    }
                    if (!this.config.all_timed || this._table_view && "month" != this._mode || "month" == this._mode && !this.config.all_timed_month)
                        return a.call(this, n, i);
                    for (var l = 0; l < n.length; l++) {
                        var _ = n[l];
                        if (!_._timed)
                            if ("short" != this.config.all_timed || t(_)) {
                                var d = this._safe_copy(_);
                                _._virtual ? d._first_chunk = !1 : d._first_chunk = !0,
                                d._drag_resize = !1,
                                d._virtual = !0,
                                d.start_date = new Date(d.start_date),
                                r(_) ? (d.end_date = o(d.start_date),
                                24 != this.config.last_hour && (d.end_date = s(d.start_date, this.config.last_hour))) : d.end_date = new Date(_.end_date);
                                var c = !1;
                                d.start_date < this._max_date && d.end_date > this._min_date && d.start_date < d.end_date && (n[l] = d,
                                c = !0);
                                var h = this._safe_copy(_);
                                if (h._virtual = !0,
                                h.end_date = new Date(h.end_date),
                                h.start_date < this._min_date ? h.start_date = s(this._min_date, this.config.first_hour) : h.start_date = s(o(_.start_date), this.config.first_hour),
                                h.start_date < this._max_date && h.start_date < h.end_date) {
                                    if (!c) {
                                        n[l--] = h;
                                        continue
                                    }
                                    n.splice(l + 1, 0, h),
                                    h._last_chunk = !1
                                } else
                                    d._last_chunk = !0,
                                    d._drag_resize = !0
                            } else
                                "month" != this._mode && n.splice(l--, 1)
                    }
                    var u = "move" != this._drag_mode && i;
                    return a.call(this, n, u)
                }
                ;
                var r = e.get_visible_events;
                e.get_visible_events = function(e) {
                    return this.config.all_timed && this.config.multi_day ? r.call(this, !1) : r.call(this, e)
                }
                ,
                e.attachEvent("onBeforeViewChange", (function(t, n, i, a) {
                    return e._allow_dnd = "day" == i || "week" == i,
                    !0
                }
                )),
                e._is_main_area_event = function(e) {
                    return !!(e._timed || !0 === this.config.all_timed || "short" == this.config.all_timed && t(e))
                }
                ;
                var o = e.updateEvent;
                e.updateEvent = function(t) {
                    var n, i, a = e.getEvent(t);
                    a && (n = e.config.all_timed && !(e.isOneDayEvent(e._events[t]) || e.getState().drag_id)) && (i = e.config.update_render,
                    e.config.update_render = !0),
                    o.apply(e, arguments),
                    a && n && (e.config.update_render = i)
                }
            }()
        }
        ))
    },
    1437: function(e, t) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        Scheduler.plugin((function(e) {
            !function() {
                function t(t) {
                    e._get_section_view() && t && (n = e.getEvent(t)[e._get_section_property()])
                }
                var n, i;
                e.config.collision_limit = 1,
                e.attachEvent("onBeforeDrag", (function(e) {
                    return t(e),
                    !0
                }
                )),
                e.attachEvent("onBeforeLightbox", (function(n) {
                    var a = e.getEvent(n);
                    return i = [a.start_date, a.end_date],
                    t(n),
                    !0
                }
                )),
                e.attachEvent("onEventChanged", (function(t) {
                    if (!t || !e.getEvent(t))
                        return !0;
                    var n = e.getEvent(t);
                    if (!e.checkCollision(n)) {
                        if (!i)
                            return !1;
                        n.start_date = i[0],
                        n.end_date = i[1],
                        n._timed = this.isOneDayEvent(n)
                    }
                    return !0
                }
                )),
                e.attachEvent("onBeforeEventChanged", (function(t, n, i) {
                    return e.checkCollision(t)
                }
                )),
                e.attachEvent("onEventAdded", (function(t, n) {
                    e.checkCollision(n) || e.deleteEvent(t)
                }
                )),
                e.attachEvent("onEventSave", (function(t, n, i) {
                    if ((n = e._lame_clone(n)).id = t,
                    !n.start_date || !n.end_date) {
                        var a = e.getEvent(t);
                        n.start_date = new Date(a.start_date),
                        n.end_date = new Date(a.end_date)
                    }
                    return n.rec_type && e._roll_back_dates(n),
                    e.checkCollision(n)
                }
                )),
                e._check_sections_collision = function(t, n) {
                    var i = e._get_section_property();
                    return t[i] == n[i] && t.id != n.id
                }
                ,
                e.checkCollision = function(t) {
                    var i = []
                      , a = e.config.collision_limit;
                    if (t.rec_type)
                        for (var r = e.getRecDates(t), o = 0; o < r.length; o++)
                            for (var s = e.getEvents(r[o].start_date, r[o].end_date), l = 0; l < s.length; l++)
                                (s[l].event_pid || s[l].id) != t.id && i.push(s[l]);
                    else {
                        i = e.getEvents(t.start_date, t.end_date);
                        for (var _ = 0; _ < i.length; _++) {
                            var d = i[_];
                            if (d.id == t.id || d.event_length && [d.event_pid, d.event_length].join("#") == t.id) {
                                i.splice(_, 1);
                                break
                            }
                        }
                    }
                    var c = e._get_section_view()
                      , h = e._get_section_property()
                      , u = !0;
                    if (c) {
                        var f = 0;
                        for (_ = 0; _ < i.length; _++)
                            i[_].id != t.id && this._check_sections_collision(i[_], t) && f++;
                        f >= a && (u = !1)
                    } else
                        i.length >= a && (u = !1);
                    if (!u) {
                        var p = !e.callEvent("onEventCollision", [t, i]);
                        return p || (t[h] = n || t[h]),
                        p
                    }
                    return u
                }
            }()
        }
        ))
    },
    1438: function(e, t) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        Scheduler._external_drag = {
            from_scheduler: null,
            to_scheduler: null,
            drag_data: null,
            drag_placeholder: null,
            delete_dnd_holder: function() {
                var e = this.drag_placeholder;
                e && (e.parentNode && e.parentNode.removeChild(e),
                document.body.className = document.body.className.replace(" dhx_no_select", ""),
                this.drag_placeholder = null)
            },
            copy_event_node: function(e, t) {
                for (var n = null, i = 0; i < t._rendered.length; i++) {
                    var a = t._rendered[i];
                    if (a.getAttribute("event_id") == e.id || a.getAttribute("event_id") == t._drag_id) {
                        (n = a.cloneNode(!0)).style.position = n.style.top = n.style.left = "";
                        break
                    }
                }
                return n || document.createElement("div")
            },
            create_dnd_holder: function(e, t) {
                if (this.drag_placeholder)
                    return this.drag_placeholder;
                var n = document.createElement("div")
                  , i = t.templates.event_outside(e.start_date, e.end_date, e);
                return i ? n.innerHTML = i : n.appendChild(this.copy_event_node(e, t)),
                n.className = "dhx_drag_placeholder",
                n.style.position = "absolute",
                this.drag_placeholder = n,
                document.body.appendChild(n),
                document.body.className += " dhx_no_select",
                n
            },
            move_dnd_holder: function(e) {
                var t = {
                    x: e.clientX,
                    y: e.clientY
                };
                if (this.create_dnd_holder(this.drag_data.ev, this.from_scheduler),
                this.drag_placeholder) {
                    var n = t.x
                      , i = t.y
                      , a = document.documentElement
                      , r = document.body
                      , o = this.drag_placeholder;
                    o.style.left = 10 + n + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a.clientLeft || 0) + "px",
                    o.style.top = 10 + i + (a && a.scrollTop || r && r.scrollTop || 0) - (a.clientTop || 0) + "px"
                }
            },
            clear_scheduler_dnd: function(e) {
                e._drag_id = e._drag_pos = e._drag_mode = e._drag_event = e._new_event = null
            },
            stop_drag: function(e) {
                e && this.clear_scheduler_dnd(e),
                this.delete_dnd_holder(),
                this.drag_data = null
            },
            inject_into_scheduler: function(e, t, n) {
                e._count = 1,
                e._sorder = 0,
                e.event_pid && "0" != e.event_pid && (e.event_pid = null,
                e.rec_type = e.rec_pattern = "",
                e.event_length = 0),
                t._drag_event = e,
                t._events[e.id] = e,
                t._drag_id = e.id,
                t._drag_mode = "move",
                n && t._on_mouse_move(n)
            },
            start_dnd: function(e) {
                if (e.config.drag_out) {
                    this.from_scheduler = e,
                    this.to_scheduler = e;
                    var t = this.drag_data = {};
                    t.ev = e._drag_event,
                    t.orig_id = e._drag_event.id
                }
            },
            land_into_scheduler: function(e, t) {
                if (!e.config.drag_in)
                    return this.move_dnd_holder(t),
                    !1;
                var n = this.drag_data
                  , i = e._lame_clone(n.ev);
                if (e != this.from_scheduler) {
                    i.id = e.uid();
                    var a = i.end_date - i.start_date;
                    i.start_date = new Date(e.getState().min_date),
                    i.end_date = new Date(i.start_date.valueOf() + a)
                } else
                    i.id = this.drag_data.orig_id,
                    i._dhx_changed = !0;
                return this.drag_data.target_id = i.id,
                !!e.callEvent("onBeforeEventDragIn", [i.id, i, t]) && (this.to_scheduler = e,
                this.inject_into_scheduler(i, e, t),
                this.delete_dnd_holder(),
                e.updateView(),
                e.callEvent("onEventDragIn", [i.id, i, t]),
                !0)
            },
            drag_from_scheduler: function(e, t) {
                if (this.drag_data && e._drag_id && e.config.drag_out) {
                    if (this.to_scheduler == e && (this.to_scheduler = null),
                    !e.callEvent("onBeforeEventDragOut", [e._drag_id, e._drag_event, t]))
                        return !1;
                    this.create_dnd_holder(this.drag_data.ev, e);
                    var n = e._drag_id;
                    return this.drag_data.target_id = null,
                    delete e._events[n],
                    this.clear_scheduler_dnd(e),
                    e.updateEvent(n),
                    e.callEvent("onEventDragOut", [n, this.drag_data.ev, t]),
                    !0
                }
                return !1
            },
            reset_event: function(e, t) {
                this.inject_into_scheduler(e, t),
                this.stop_drag(t),
                t.updateView()
            },
            move_permanently: function(e, t, n, i) {
                i.callEvent("onEventAdded", [t.id, t]),
                this.inject_into_scheduler(e, n),
                this.stop_drag(n),
                e.event_pid && "0" != e.event_pid ? (n.callEvent("onConfirmedBeforeEventDelete", [e.id]),
                n.updateEvent(t.event_pid)) : n.deleteEvent(e.id),
                n.updateView(),
                i.updateView()
            }
        },
        scheduler.event(window, "load", (function() {
            scheduler.event(document.body, "mousemove", (function(e) {
                var t = Scheduler._external_drag
                  , n = t.target_scheduler;
                if (n)
                    if (t.from_scheduler)
                        if (n._drag_id)
                            ;
                        else {
                            var i = t.to_scheduler;
                            i && !t.drag_from_scheduler(i, e) || t.land_into_scheduler(n, e)
                        }
                    else
                        "move" == n.getState().drag_mode && n.config.drag_out && t.start_dnd(n);
                else
                    t.from_scheduler && (t.to_scheduler ? t.drag_from_scheduler(t.to_scheduler, e) : t.move_dnd_holder(e));
                t.target_scheduler = null
            }
            )),
            scheduler.event(document.body, "mouseup", (function(e) {
                var t = Scheduler._external_drag
                  , n = t.from_scheduler
                  , i = t.to_scheduler;
                if (n)
                    if (i && n == i)
                        n.updateEvent(t.drag_data.target_id);
                    else if (i && n !== i) {
                        var a = t.drag_data.ev
                          , r = i.getEvent(t.drag_data.target_id);
                        n.callEvent("onEventDropOut", [a.id, a, i, e]) ? t.move_permanently(a, r, n, i) : t.reset_event(a, n)
                    } else {
                        a = t.drag_data.ev;
                        n.callEvent("onEventDropOut", [a.id, a, null, e]) && t.reset_event(a, n)
                    }
                t.stop_drag(),
                t.current_scheduler = t.from_scheduler = t.to_scheduler = null
            }
            ))
        }
        )),
        Scheduler.plugin((function(e) {
            e.config.drag_in = !0,
            e.config.drag_out = !0,
            e.templates.event_outside = function(e, t, n) {}
            ;
            var t = Scheduler._external_drag;
            e.attachEvent("onTemplatesReady", (function() {
                e.event(e._obj, "mousemove", (function(n) {
                    t.target_scheduler = e
                }
                )),
                e.event(e._obj, "mouseup", (function(n) {
                    t.target_scheduler = e
                }
                ))
            }
            ))
        }
        ))
    },
    1439: function(e, t) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        Scheduler.plugin((function(e) {
            e.templates.calendar_month = e.date.date_to_str("%F %Y"),
            e.templates.calendar_scale_date = e.date.date_to_str("%D"),
            e.templates.calendar_date = e.date.date_to_str("%d"),
            e.config.minicalendar = {
                mark_events: !0
            },
            e._synced_minicalendars = [],
            e.renderCalendar = function(t, n, i) {
                var a = null
                  , r = t.date || e._currentDate();
                if ("string" == typeof r && (r = this.templates.api_date(r)),
                n)
                    a = this._render_calendar(n.parentNode, r, t, n),
                    e.unmarkCalendar(a);
                else {
                    var o = t.container
                      , s = t.position;
                    if ("string" == typeof o && (o = document.getElementById(o)),
                    "string" == typeof s && (s = document.getElementById(s)),
                    s && void 0 === s.left) {
                        var l = e.$domHelpers.getOffset(s);
                        s = {
                            top: l.top + s.offsetHeight,
                            left: l.left
                        }
                    }
                    o || (o = e._get_def_cont(s)),
                    (a = this._render_calendar(o, r, t)).onclick = function(t) {
                        var n = (t = t || event).target || t.srcElement
                          , i = e.$domHelpers;
                        if (i.closest(n, ".dhx_month_head") && !i.closest(n, ".dhx_after") && !i.closest(n, ".dhx_before")) {
                            var a = i.closest(n, "[data-cell-date]").getAttribute("data-cell-date")
                              , r = e.templates.parse_date(a);
                            e.unmarkCalendar(this),
                            e.markCalendar(this, r, "dhx_calendar_click"),
                            this._last_date = r,
                            this.conf.handler && this.conf.handler.call(e, r, this)
                        }
                    }
                }
                if (e.config.minicalendar.mark_events)
                    for (var _ = e.date.month_start(r), d = e.date.add(_, 1, "month"), c = this.getEvents(_, d), h = this["filter_" + this._mode], u = {}, f = 0; f < c.length; f++) {
                        var p = c[f];
                        if (!h || h(p.id, p)) {
                            var v = p.start_date;
                            for (v.valueOf() < _.valueOf() && (v = _),
                            v = e.date.date_part(new Date(v.valueOf())); v < p.end_date && (u[+v] || (u[+v] = !0,
                            this.markCalendar(a, v, "dhx_year_event")),
                            !((v = this.date.add(v, 1, "day")).valueOf() >= d.valueOf())); )
                                ;
                        }
                    }
                return this._markCalendarCurrentDate(a),
                a.conf = t,
                t.sync && !i && this._synced_minicalendars.push(a),
                a.conf._on_xle_handler || (a.conf._on_xle_handler = e.attachEvent("onXLE", (function() {
                    e.updateCalendar(a, a.conf.date)
                }
                ))),
                this.config.wai_aria_attributes && this.config.wai_aria_application_role && a.setAttribute("role", "application"),
                a
            }
            ,
            e._get_def_cont = function(e) {
                return this._def_count || (this._def_count = document.createElement("div"),
                this._def_count.className = "dhx_minical_popup",
                this._def_count.onclick = function(e) {
                    (e || event).cancelBubble = !0
                }
                ,
                document.body.appendChild(this._def_count)),
                this._def_count.style.left = e.left + "px",
                this._def_count.style.top = e.top + "px",
                this._def_count._created = new Date,
                this._def_count
            }
            ,
            e._locateCalendar = function(t, n) {
                if ("string" == typeof n && (n = e.templates.api_date(n)),
                +n > +t._max_date || +n < +t._min_date)
                    return null;
                for (var i = t.querySelector(".dhx_year_body").childNodes[0], a = 0, r = new Date(t._min_date); +this.date.add(r, 1, "week") <= +n; )
                    r = this.date.add(r, 1, "week"),
                    a++;
                var o = e.config.start_on_monday
                  , s = (n.getDay() || (o ? 7 : 0)) - (o ? 1 : 0);
                return i.rows[a].cells[s].firstChild
            }
            ,
            e.markCalendar = function(e, t, n) {
                var i = this._locateCalendar(e, t);
                i && (i.className += " " + n)
            }
            ,
            e.unmarkCalendar = function(e, t, n) {
                if (n = n || "dhx_calendar_click",
                t = t || e._last_date) {
                    var i = this._locateCalendar(e, t);
                    i && (i.className = (i.className || "").replace(RegExp(n, "g")))
                }
            }
            ,
            e._week_template = function(t) {
                for (var n = t || 250, i = 0, a = document.createElement("div"), r = this.date.week_start(e._currentDate()), o = 0; o < 7; o++)
                    this._cols[o] = Math.floor(n / (7 - o)),
                    this._render_x_header(o, i, r, a),
                    r = this.date.add(r, 1, "day"),
                    n -= this._cols[o],
                    i += this._cols[o];
                return a.lastChild.className += " dhx_scale_bar_last",
                a
            }
            ,
            e.updateCalendar = function(e, t) {
                e.conf.date = t,
                this.renderCalendar(e.conf, e, !0)
            }
            ,
            e._mini_cal_arrows = ["&nbsp;", "&nbsp;"],
            e._render_calendar = function(t, n, i, a) {
                var r = e.templates
                  , o = this._cols;
                this._cols = [];
                var s = this._mode;
                this._mode = "calendar";
                var l = this._colsS;
                this._colsS = {
                    height: 0
                };
                var _ = new Date(this._min_date)
                  , d = new Date(this._max_date)
                  , c = new Date(e._date)
                  , h = r.month_day
                  , u = this._ignores_detected;
                this._ignores_detected = 0,
                r.month_day = r.calendar_date,
                n = this.date.month_start(n);
                var f, p = this._week_template(t.offsetWidth - 1 - this.config.minicalendar.padding);
                a ? f = a : (f = document.createElement("div")).className = "dhx_cal_container dhx_mini_calendar",
                f.setAttribute("date", this._helpers.formatDate(n)),
                f.innerHTML = "<div class='dhx_year_month'></div><div class='dhx_year_grid" + (e.config.rtl ? " dhx_grid_rtl'>" : "'>") + "<div class='dhx_year_week'>" + (p ? p.innerHTML : "") + "</div><div class='dhx_year_body'></div></div>";
                var v = f.querySelector(".dhx_year_month")
                  , m = f.querySelector(".dhx_year_week")
                  , g = f.querySelector(".dhx_year_body");
                if (v.innerHTML = this.templates.calendar_month(n),
                i.navigation)
                    for (var y = function(t, n) {
                        var i = e.date.add(t._date, n, "month");
                        e.updateCalendar(t, i),
                        e._date.getMonth() == t._date.getMonth() && e._date.getFullYear() == t._date.getFullYear() && e._markCalendarCurrentDate(t)
                    }, x = ["dhx_cal_prev_button", "dhx_cal_next_button"], b = ["left:1px;top:2px;position:absolute;", "left:auto; right:1px;top:2px;position:absolute;"], w = [-1, 1], E = function(t) {
                        return function() {
                            if (i.sync)
                                for (var n = e._synced_minicalendars, a = 0; a < n.length; a++)
                                    y(n[a], t);
                            else
                                e.config.rtl && (t = -t),
                                y(f, t)
                        }
                    }, k = [e.locale.labels.prev, e.locale.labels.next], D = 0; D < 2; D++) {
                        var S = document.createElement("div");
                        S.className = x[D],
                        e._waiAria.headerButtonsAttributes(S, k[D]),
                        S.style.cssText = b[D],
                        S.innerHTML = this._mini_cal_arrows[D],
                        v.appendChild(S),
                        S.onclick = E(w[D])
                    }
                f._date = new Date(n),
                f.week_start = (n.getDay() - (this.config.start_on_monday ? 1 : 0) + 7) % 7;
                var O = f._min_date = this.date.week_start(n);
                f._max_date = this.date.add(f._min_date, 6, "week"),
                this._reset_month_scale(g, n, O, 6),
                a || t.appendChild(f),
                m.style.height = m.childNodes[0].offsetHeight - 1 + "px";
                var C = e.uid();
                e._waiAria.minicalHeader(v, C),
                e._waiAria.minicalGrid(f.querySelector(".dhx_year_grid"), C),
                e._waiAria.minicalRow(m);
                for (var A = m.querySelectorAll(".dhx_scale_bar"), M = 0; M < A.length; M++)
                    e._waiAria.minicalHeadCell(A[M]);
                var T = g.querySelectorAll("td")
                  , N = new Date(O);
                for (M = 0; M < T.length; M++)
                    e._waiAria.minicalDayCell(T[M], new Date(N)),
                    N = e.date.add(N, 1, "day");
                return e._waiAria.minicalHeader(v, C),
                this._cols = o,
                this._mode = s,
                this._colsS = l,
                this._min_date = _,
                this._max_date = d,
                e._date = c,
                r.month_day = h,
                this._ignores_detected = u,
                f
            }
            ,
            e.destroyCalendar = function(t, n) {
                !t && this._def_count && this._def_count.firstChild && (n || (new Date).valueOf() - this._def_count._created.valueOf() > 500) && (t = this._def_count.firstChild),
                t && (t.onclick = null,
                t.innerHTML = "",
                t.parentNode && t.parentNode.removeChild(t),
                this._def_count && (this._def_count.style.top = "-1000px"),
                t.conf && t.conf._on_xle_handler && e.detachEvent(t.conf._on_xle_handler))
            }
            ,
            e.isCalendarVisible = function() {
                return !!(this._def_count && parseInt(this._def_count.style.top, 10) > 0) && this._def_count
            }
            ,
            e._attach_minical_events = function() {
                e.event(document.body, "click", (function() {
                    e.destroyCalendar()
                }
                )),
                e._attach_minical_events = function() {}
            }
            ,
            e.attachEvent("onTemplatesReady", (function() {
                e._attach_minical_events()
            }
            )),
            e.templates.calendar_time = e.date.date_to_str("%d-%m-%Y"),
            e.form_blocks.calendar_time = {
                render: function(t) {
                    var n = "<input class='dhx_readonly' type='text' readonly='true'>"
                      , i = e.config
                      , a = this.date.date_part(e._currentDate())
                      , r = 1440
                      , o = 0;
                    i.limit_time_select && (o = 60 * i.first_hour,
                    r = 60 * i.last_hour + 1),
                    a.setHours(o / 60),
                    t._time_values = [],
                    n += " <select class='dhx_lightbox_time_select'>";
                    for (var s = o; s < r; s += 1 * this.config.time_step)
                        n += "<option value='" + s + "'>" + this.templates.time_picker(a) + "</option>",
                        t._time_values.push(s),
                        a = this.date.add(a, this.config.time_step, "minute");
                    return n += "</select>",
                    e.config.full_day,
                    "<div style='height:30px;padding-top:0; font-size:inherit;' class='dhx_section_time dhx_lightbox_minical'>" + n + "<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>" + n + "</div>"
                },
                set_value: function(t, n, i, a) {
                    function r(t, n, i) {
                        c(t, n, i),
                        t.value = e.templates.calendar_time(n),
                        t._date = e.date.date_part(new Date(n))
                    }
                    function o(e) {
                        for (var t = a._time_values, n = 60 * e.getHours() + e.getMinutes(), i = n, r = !1, o = 0; o < t.length; o++) {
                            var s = t[o];
                            if (s === n) {
                                r = !0;
                                break
                            }
                            s < n && (i = s)
                        }
                        return r || i ? r ? n : i : -1
                    }
                    var s, l, _ = t.getElementsByTagName("input"), d = t.getElementsByTagName("select"), c = function(t, n, i) {
                        t.onclick = function() {
                            e.destroyCalendar(null, !0),
                            e.renderCalendar({
                                position: t,
                                date: new Date(this._date),
                                navigation: !0,
                                handler: function(n) {
                                    t.value = e.templates.calendar_time(n),
                                    t._date = new Date(n),
                                    e.destroyCalendar(),
                                    e.config.event_duration && e.config.auto_end_date && 0 === i && p()
                                }
                            })
                        }
                    };
                    if (e.config.full_day) {
                        if (!t._full_day) {
                            var h = "<label class='dhx_fullday'><input type='checkbox' name='full_day' value='true'> " + e.locale.labels.full_day + "&nbsp;</label></input>";
                            e.config.wide_form || (h = t.previousSibling.innerHTML + h),
                            t.previousSibling.innerHTML = h,
                            t._full_day = !0
                        }
                        var u = t.previousSibling.getElementsByTagName("input")[0]
                          , f = 0 === e.date.time_part(i.start_date) && 0 === e.date.time_part(i.end_date);
                        u.checked = f,
                        d[0].disabled = u.checked,
                        d[1].disabled = u.checked,
                        u.onclick = function() {
                            if (!0 === u.checked) {
                                var n = {};
                                e.form_blocks.calendar_time.get_value(t, n),
                                s = e.date.date_part(n.start_date),
                                (+(l = e.date.date_part(n.end_date)) == +s || +l >= +s && (0 !== i.end_date.getHours() || 0 !== i.end_date.getMinutes())) && (l = e.date.add(l, 1, "day"))
                            }
                            var a = s || i.start_date
                              , o = l || i.end_date;
                            r(_[0], a),
                            r(_[1], o),
                            d[0].value = 60 * a.getHours() + a.getMinutes(),
                            d[1].value = 60 * o.getHours() + o.getMinutes(),
                            d[0].disabled = u.checked,
                            d[1].disabled = u.checked
                        }
                    }
                    if (e.config.event_duration && e.config.auto_end_date) {
                        var p = function() {
                            s = e.date.add(_[0]._date, d[0].value, "minute"),
                            l = new Date(s.getTime() + 60 * e.config.event_duration * 1e3),
                            _[1].value = e.templates.calendar_time(l),
                            _[1]._date = e.date.date_part(new Date(l)),
                            d[1].value = 60 * l.getHours() + l.getMinutes()
                        };
                        d[0].onchange = p
                    }
                    r(_[0], i.start_date, 0),
                    r(_[1], i.end_date, 1),
                    c = function() {}
                    ,
                    d[0].value = o(i.start_date),
                    d[1].value = o(i.end_date)
                },
                get_value: function(t, n) {
                    var i = t.getElementsByTagName("input")
                      , a = t.getElementsByTagName("select");
                    return n.start_date = e.date.add(i[0]._date, a[0].value, "minute"),
                    n.end_date = e.date.add(i[1]._date, a[1].value, "minute"),
                    n.end_date <= n.start_date && (n.end_date = e.date.add(n.start_date, e.config.time_step, "minute")),
                    {
                        start_date: new Date(n.start_date),
                        end_date: new Date(n.end_date)
                    }
                },
                focus: function(e) {}
            },
            e.linkCalendar = function(t, n) {
                var i = function() {
                    var i = e._date
                      , a = new Date(i.valueOf());
                    return n && (a = n(a)),
                    a.setDate(1),
                    e.updateCalendar(t, a),
                    !0
                };
                e.attachEvent("onViewChange", i),
                e.attachEvent("onXLE", i),
                e.attachEvent("onEventAdded", i),
                e.attachEvent("onEventChanged", i),
                e.attachEvent("onEventDeleted", i),
                i()
            }
            ,
            e._markCalendarCurrentDate = function(t) {
                var n = e.getState()
                  , i = n.min_date
                  , a = n.max_date
                  , r = n.mode
                  , o = e.date.month_start(new Date(t._date))
                  , s = e.date.add(o, 1, "month");
                if (!({
                    month: !0,
                    year: !0,
                    agenda: !0,
                    grid: !0
                }[r] || i.valueOf() <= o.valueOf() && a.valueOf() >= s.valueOf()))
                    for (var l = i; l.valueOf() < a.valueOf(); )
                        o.valueOf() <= l.valueOf() && s > l && e.markCalendar(t, l, "dhx_calendar_click"),
                        l = e.date.add(l, 1, "day")
            }
            ,
            e.attachEvent("onEventCancel", (function() {
                e.destroyCalendar(null, !0)
            }
            ))
        }
        ))
    },
    1440: function(e, t) {
        /*

@license
dhtmlxScheduler v.5.3.8 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
        Scheduler.plugin((function(e) {
            window.dhtmlXTooltip = e.dhtmlXTooltip = e.tooltip = {},
            dhtmlXTooltip.config = {
                className: "dhtmlXTooltip tooltip",
                timeout_to_display: 50,
                timeout_to_hide: 50,
                delta_x: 15,
                delta_y: -20
            },
            dhtmlXTooltip.tooltip = document.createElement("div"),
            dhtmlXTooltip.tooltip.className = dhtmlXTooltip.config.className,
            e._waiAria.tooltipAttr(dhtmlXTooltip.tooltip),
            dhtmlXTooltip.show = function(t, n) {
                if (!this._mobile || e.config.touch_tooltip) {
                    var i = dhtmlXTooltip
                      , a = this.tooltip
                      , r = a.style;
                    i.tooltip.className = i.config.className;
                    var o = this.position(t)
                      , s = t.target || t.srcElement;
                    if (!this.isTooltip(s)) {
                        var l = o.x + (i.config.delta_x || 0)
                          , _ = o.y - (i.config.delta_y || 0);
                        r.visibility = "hidden",
                        r.removeAttribute ? (r.removeAttribute("right"),
                        r.removeAttribute("bottom")) : (r.removeProperty("right"),
                        r.removeProperty("bottom")),
                        r.left = "0",
                        r.top = "0",
                        e.config.rtl && (a.className += " dhtmlXTooltip_rtl"),
                        this.tooltip.innerHTML = n,
                        document.body.appendChild(this.tooltip);
                        var d = this.tooltip.offsetWidth
                          , c = this.tooltip.offsetHeight;
                        document.documentElement.clientWidth - l - d < 0 ? (r.removeAttribute ? r.removeAttribute("left") : r.removeProperty("left"),
                        r.right = document.documentElement.clientWidth - l + 2 * (i.config.delta_x || 0) + "px") : r.left = l < 0 ? o.x + Math.abs(i.config.delta_x || 0) + "px" : l + "px",
                        document.documentElement.clientHeight - _ - c < 0 ? (r.removeAttribute ? r.removeAttribute("top") : r.removeProperty("top"),
                        r.bottom = document.documentElement.clientHeight - _ - 2 * (i.config.delta_y || 0) + "px") : r.top = _ < 0 ? o.y + Math.abs(i.config.delta_y || 0) + "px" : _ + "px",
                        e._waiAria.tooltipVisibleAttr(this.tooltip),
                        r.visibility = "visible",
                        this.tooltip.onmouseleave = function(t) {
                            t = t || window.event;
                            for (var n = e.dhtmlXTooltip, i = t.relatedTarget; i != e._obj && i; )
                                i = i.parentNode;
                            i != e._obj && n.delay(n.hide, n, [], n.config.timeout_to_hide)
                        }
                        ,
                        e.callEvent("onTooltipDisplayed", [this.tooltip, this.tooltip.event_id])
                    }
                }
            }
            ,
            dhtmlXTooltip._clearTimeout = function() {
                this.tooltip._timeout_id && window.clearTimeout(this.tooltip._timeout_id)
            }
            ,
            dhtmlXTooltip.hide = function() {
                if (this.tooltip.parentNode) {
                    e._waiAria.tooltipHiddenAttr(this.tooltip);
                    var t = this.tooltip.event_id;
                    this.tooltip.event_id = null,
                    this.tooltip.onmouseleave = null,
                    this.tooltip.parentNode.removeChild(this.tooltip),
                    e.callEvent("onAfterTooltip", [t])
                }
                this._clearTimeout()
            }
            ,
            dhtmlXTooltip.delay = function(e, t, n, i) {
                this._clearTimeout(),
                this.tooltip._timeout_id = setTimeout((function() {
                    var i = e.apply(t, n);
                    return e = t = n = null,
                    i
                }
                ), i || this.config.timeout_to_display)
            }
            ,
            dhtmlXTooltip.isTooltip = function(e) {
                for (var t = !1; e && !t; )
                    t = e.className == this.tooltip.className,
                    e = e.parentNode;
                return t
            }
            ,
            dhtmlXTooltip.position = function(e) {
                return {
                    x: (e = e || window.event).clientX,
                    y: e.clientY
                }
            }
            ,
            e.attachEvent("onMouseMove", (function(t, n) {
                var i = window.event || n
                  , a = i.target || i.srcElement
                  , r = dhtmlXTooltip
                  , o = r.isTooltip(a)
                  , s = r.isTooltipTarget && r.isTooltipTarget(a);
                if (t && e.getState().editor_id != t || o || s) {
                    var l, _;
                    if (t || r.tooltip.event_id) {
                        var d = e.getEvent(t) || e.getEvent(r.tooltip.event_id);
                        if (!d)
                            return;
                        if (r.tooltip.event_id = d.id,
                        !(l = e.templates.tooltip_text(d.start_date, d.end_date, d)))
                            return r.hide()
                    }
                    if (s && (l = ""),
                    e.$env.isIE)
                        for (var c in _ = {
                            pageX: void 0,
                            pageY: void 0,
                            clientX: void 0,
                            clientY: void 0,
                            target: void 0,
                            srcElement: void 0
                        })
                            _[c] = i[c];
                    if (!e.callEvent("onBeforeTooltip", [t]) || !l)
                        return;
                    r.delay(r.show, r, [_ || i, l])
                } else
                    r.delay(r.hide, r, [], r.config.timeout_to_hide)
            }
            )),
            e.attachEvent("onBeforeDrag", (function() {
                return dhtmlXTooltip.hide(),
                !0
            }
            )),
            e.attachEvent("onEventDeleted", (function() {
                return dhtmlXTooltip.hide(),
                !0
            }
            ))
        }
        ))
    },
    1459: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return h
        }
        ));
        var i = n(37)
          , a = n(6)
          , r = n(0)
          , o = (n(26),
        n(27))
          , s = n(137)
          , l = n(220)
          , _ = n(806)
          , d = n(252)
          , c = r.forwardRef((function(e, t) {
            var n = e.children
              , s = e.classes
              , l = e.className
              , c = e.color
              , h = void 0 === c ? "default" : c
              , u = e.component
              , f = void 0 === u ? "button" : u
              , p = e.disabled
              , v = void 0 !== p && p
              , m = e.disableElevation
              , g = void 0 !== m && m
              , y = e.disableFocusRipple
              , x = void 0 !== y && y
              , b = e.endIcon
              , w = e.focusVisibleClassName
              , E = e.fullWidth
              , k = void 0 !== E && E
              , D = e.size
              , S = void 0 === D ? "medium" : D
              , O = e.startIcon
              , C = e.type
              , A = void 0 === C ? "button" : C
              , M = e.variant
              , T = void 0 === M ? "text" : M
              , N = Object(i.a)(e, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"])
              , L = O && r.createElement("span", {
                className: Object(o.a)(s.startIcon, s["iconSize".concat(Object(d.a)(S))])
            }, O)
              , j = b && r.createElement("span", {
                className: Object(o.a)(s.endIcon, s["iconSize".concat(Object(d.a)(S))])
            }, b);
            return r.createElement(_.a, Object(a.a)({
                className: Object(o.a)(s.root, s[T], l, "inherit" === h ? s.colorInherit : "default" !== h && s["".concat(T).concat(Object(d.a)(h))], "medium" !== S && [s["".concat(T, "Size").concat(Object(d.a)(S))], s["size".concat(Object(d.a)(S))]], g && s.disableElevation, v && s.disabled, k && s.fullWidth),
                component: f,
                disabled: v,
                focusRipple: !x,
                focusVisibleClassName: Object(o.a)(s.focusVisible, w),
                ref: t,
                type: A
            }, N), r.createElement("span", {
                className: s.label
            }, L, n, j))
        }
        ))
          , h = Object(s.a)((function(e) {
            return {
                root: Object(a.a)({}, e.typography.button, {
                    boxSizing: "border-box",
                    minWidth: 64,
                    padding: "6px 16px",
                    borderRadius: e.shape.borderRadius,
                    color: e.palette.text.primary,
                    transition: e.transitions.create(["background-color", "box-shadow", "border"], {
                        duration: e.transitions.duration.short
                    }),
                    "&:hover": {
                        textDecoration: "none",
                        backgroundColor: Object(l.c)(e.palette.text.primary, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        },
                        "&$disabled": {
                            backgroundColor: "transparent"
                        }
                    },
                    "&$disabled": {
                        color: e.palette.action.disabled
                    }
                }),
                label: {
                    width: "100%",
                    display: "inherit",
                    alignItems: "inherit",
                    justifyContent: "inherit"
                },
                text: {
                    padding: "6px 8px"
                },
                textPrimary: {
                    color: e.palette.primary.main,
                    "&:hover": {
                        backgroundColor: Object(l.c)(e.palette.primary.main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    }
                },
                textSecondary: {
                    color: e.palette.secondary.main,
                    "&:hover": {
                        backgroundColor: Object(l.c)(e.palette.secondary.main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    }
                },
                outlined: {
                    padding: "5px 15px",
                    border: "1px solid ".concat("light" === e.palette.type ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
                    "&$disabled": {
                        border: "1px solid ".concat(e.palette.action.disabledBackground)
                    }
                },
                outlinedPrimary: {
                    color: e.palette.primary.main,
                    border: "1px solid ".concat(Object(l.c)(e.palette.primary.main, .5)),
                    "&:hover": {
                        border: "1px solid ".concat(e.palette.primary.main),
                        backgroundColor: Object(l.c)(e.palette.primary.main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    }
                },
                outlinedSecondary: {
                    color: e.palette.secondary.main,
                    border: "1px solid ".concat(Object(l.c)(e.palette.secondary.main, .5)),
                    "&:hover": {
                        border: "1px solid ".concat(e.palette.secondary.main),
                        backgroundColor: Object(l.c)(e.palette.secondary.main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    },
                    "&$disabled": {
                        border: "1px solid ".concat(e.palette.action.disabled)
                    }
                },
                contained: {
                    color: e.palette.getContrastText(e.palette.grey[300]),
                    backgroundColor: e.palette.grey[300],
                    boxShadow: e.shadows[2],
                    "&:hover": {
                        backgroundColor: e.palette.grey.A100,
                        boxShadow: e.shadows[4],
                        "@media (hover: none)": {
                            boxShadow: e.shadows[2],
                            backgroundColor: e.palette.grey[300]
                        },
                        "&$disabled": {
                            backgroundColor: e.palette.action.disabledBackground
                        }
                    },
                    "&$focusVisible": {
                        boxShadow: e.shadows[6]
                    },
                    "&:active": {
                        boxShadow: e.shadows[8]
                    },
                    "&$disabled": {
                        color: e.palette.action.disabled,
                        boxShadow: e.shadows[0],
                        backgroundColor: e.palette.action.disabledBackground
                    }
                },
                containedPrimary: {
                    color: e.palette.primary.contrastText,
                    backgroundColor: e.palette.primary.main,
                    "&:hover": {
                        backgroundColor: e.palette.primary.dark,
                        "@media (hover: none)": {
                            backgroundColor: e.palette.primary.main
                        }
                    }
                },
                containedSecondary: {
                    color: e.palette.secondary.contrastText,
                    backgroundColor: e.palette.secondary.main,
                    "&:hover": {
                        backgroundColor: e.palette.secondary.dark,
                        "@media (hover: none)": {
                            backgroundColor: e.palette.secondary.main
                        }
                    }
                },
                disableElevation: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none"
                    },
                    "&$focusVisible": {
                        boxShadow: "none"
                    },
                    "&:active": {
                        boxShadow: "none"
                    },
                    "&$disabled": {
                        boxShadow: "none"
                    }
                },
                focusVisible: {},
                disabled: {},
                colorInherit: {
                    color: "inherit",
                    borderColor: "currentColor"
                },
                textSizeSmall: {
                    padding: "4px 5px",
                    fontSize: e.typography.pxToRem(13)
                },
                textSizeLarge: {
                    padding: "8px 11px",
                    fontSize: e.typography.pxToRem(15)
                },
                outlinedSizeSmall: {
                    padding: "3px 9px",
                    fontSize: e.typography.pxToRem(13)
                },
                outlinedSizeLarge: {
                    padding: "7px 21px",
                    fontSize: e.typography.pxToRem(15)
                },
                containedSizeSmall: {
                    padding: "4px 10px",
                    fontSize: e.typography.pxToRem(13)
                },
                containedSizeLarge: {
                    padding: "8px 22px",
                    fontSize: e.typography.pxToRem(15)
                },
                sizeSmall: {},
                sizeLarge: {},
                fullWidth: {
                    width: "100%"
                },
                startIcon: {
                    display: "inherit",
                    marginRight: 8,
                    marginLeft: -4,
                    "&$iconSizeSmall": {
                        marginLeft: -2
                    }
                },
                endIcon: {
                    display: "inherit",
                    marginRight: -4,
                    marginLeft: 8,
                    "&$iconSizeSmall": {
                        marginRight: -2
                    }
                },
                iconSizeSmall: {
                    "& > *:first-child": {
                        fontSize: 18
                    }
                },
                iconSizeMedium: {
                    "& > *:first-child": {
                        fontSize: 20
                    }
                },
                iconSizeLarge: {
                    "& > *:first-child": {
                        fontSize: 22
                    }
                }
            }
        }
        ), {
            name: "MuiButton"
        })(c)
    }
}]);
//# sourceMappingURL=vendors~scheduler.js.map
