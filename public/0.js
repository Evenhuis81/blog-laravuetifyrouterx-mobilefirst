(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      carousselModel: Math.floor(Math.random() * 10)
    };
  },
  name: "Blogs",
  mounted: function mounted() {
    this.$store.dispatch("fetchBlogs");
    this.$store.dispatch("fetchCategories");
  },
  methods: {
    blogCreatedFromNow: function blogCreatedFromNow(date) {
      return this.$moment(date).fromNow();
    } // deleteBlog(blog) {
    //   this.$store.dispatch("deleteBlog", blog);
    // }

  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["blogs", "categories"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=template&id=494d9643&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Index.vue?vue&type=template&id=494d9643& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        { attrs: { "no-gutters": "" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "2" } },
            [
              _c(
                "v-list",
                {
                  staticClass: "text-center",
                  attrs: { dense: "", height: "100%" }
                },
                [
                  _c(
                    "v-list-item-group",
                    {
                      model: {
                        value: _vm.carousselModel,
                        callback: function($$v) {
                          _vm.carousselModel = $$v
                        },
                        expression: "carousselModel"
                      }
                    },
                    _vm._l(_vm.categories, function(item, i) {
                      return _c(
                        "v-list-item",
                        {
                          key: i,
                          staticClass: "my-2",
                          attrs: { color: "primary" }
                        },
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", {
                                domProps: { textContent: _vm._s(item.name) }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "10" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-carousel",
                    {
                      attrs: {
                        cycle: "",
                        "show-arrows": false,
                        "hide-delimiters": ""
                      },
                      model: {
                        value: _vm.carousselModel,
                        callback: function($$v) {
                          _vm.carousselModel = $$v
                        },
                        expression: "carousselModel"
                      }
                    },
                    _vm._l(_vm.categories, function(item, i) {
                      return _c(
                        "v-carousel-item",
                        {
                          key: i,
                          attrs: {
                            router: "",
                            to: "/about",
                            src: item.image_name,
                            "reverse-transition": "fade-transition",
                            transition: "fade-transition"
                          }
                        },
                        [
                          _c(
                            "v-row",
                            {
                              staticClass: "fill-height",
                              attrs: { align: "center", justify: "center" }
                            },
                            [
                              _c(
                                "p",
                                {
                                  staticClass: "display-3 font-weight-black",
                                  class: item.caroussel_color,
                                  attrs: { text: "" }
                                },
                                [_vm._v(_vm._s(item.subheader))]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        _vm._l(_vm.blogs, function(blog, i) {
          return _c(
            "v-col",
            { key: i, attrs: { cols: "4" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "mx-auto",
                  attrs: { "max-width": "450", outlined: "" }
                },
                [
                  _c(
                    "v-list-item",
                    { attrs: { "three-line": "" } },
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c("div", { staticClass: "overline mb-4" }, [
                            _vm._v(
                              "Written " +
                                _vm._s(_vm.blogCreatedFromNow(blog.created_at))
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-title",
                            { staticClass: "headline mb-1" },
                            [_vm._v(_vm._s(blog.title))]
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(_vm._s(blog.description))
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-avatar", {
                        attrs: { tile: "", size: "80", color: "grey" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            router: "",
                            to: { name: "blog", params: { id: blog.id } },
                            text: "",
                            color: "primary"
                          }
                        },
                        [_vm._v("Read Article")]
                      ),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { text: "", color: "red" } }, [
                        _vm._v("Edit Article")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Index.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=494d9643& */ "./resources/js/views/Index.vue?vue&type=template&id=494d9643&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Index.vue?vue&type=template&id=494d9643&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Index.vue?vue&type=template&id=494d9643& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=494d9643& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=template&id=494d9643&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);