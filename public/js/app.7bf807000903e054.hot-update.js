"use strict";
self["webpackHotUpdate"]("/js/app",{

/***/ "./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.22.9_webpack@5.88.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@17.2.2_@vue+compiler-sfc@3.3.4_vue@3.3.4_webpack@5.88.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Role/Edit.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.22.9_webpack@5.88.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@17.2.2_@vue+compiler-sfc@3.3.4_vue@3.3.4_webpack@5.88.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Role/Edit.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Authenticated_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Authenticated.vue */ "./resources/js/Layouts/Authenticated.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/.pnpm/@inertiajs+inertia-vue3@0.6.0_@inertiajs+inertia@0.11.1_vue@3.3.4/node_modules/@inertiajs/inertia-vue3/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BreezeAuthenticatedLayout: _Layouts_Authenticated_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Head,
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: {
    role: Object,
    granted_permission_list: Object,
    all_permissions: Object,
    errors: Object
  },
  setup: function setup(props) {
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      id: props.role.id,
      role_name: props.role.name,
      selectedPermissions: {}
    });
    var permissions = [];
    props.all_permissions.map(function (permission) {
      permissions.push({
        name: permission,
        checked: props.granted_permission_list.includes(permission)
      });
    });
    return {
      form: form
    };
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.22.9_webpack@5.88.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@17.2.2_@vue+compiler-sfc@3.3.4_vue@3.3.4_webpack@5.88.1/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.2.2_@vue+compiler-sfc@3.3.4_vue@3.3.4_webpack@5.88.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Role/Edit.vue?vue&type=template&id=e636396c":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.22.9_webpack@5.88.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@17.2.2_@vue+compiler-sfc@3.3.4_vue@3.3.4_webpack@5.88.1/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.2.2_@vue+compiler-sfc@3.3.4_vue@3.3.4_webpack@5.88.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Role/Edit.vue?vue&type=template&id=e636396c ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.3.4/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "h4 font-weight-bold"
}, "Edit role", -1 /* HOISTED */);
var _hoisted_2 = {
  "class": "card shadow-sm"
};
var _hoisted_3 = {
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "row mb-4"
};
var _hoisted_5 = {
  "class": "col"
};
var _hoisted_6 = {
  "class": "form-outline"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "role_name"
}, "Role name", -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "text-danger"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "permission_list"
}, "Assign one/multiple permissions to this role:", -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_11 = ["value", "id", "checked"];
var _hoisted_12 = ["for"];
var _hoisted_13 = {
  "class": "text-danger"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_15 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_breeze_authenticated_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breeze-authenticated-layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Roles Edit"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_authenticated_layout, null, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.form.put(_ctx.route('roles.update', $setup.form.id));
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        name: "role_name",
        id: "role_name",
        "class": "form-control",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.role_name = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.role_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.errors.role_name), 1 /* TEXT */)])])]), _hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.granted_permission_list), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.selectedPermissions), 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.all_permissions, function (permission, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: index,
          "class": "form-check form-check-inline"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "checkbox",
          value: permission,
          name: "selectedPermissions[permission]",
          id: "inlineCheckbox".concat(index),
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return $setup.form.selectedPermissions = $event;
          }),
          checked: Object.values($props.granted_permission_list).includes(permission)
        }, null, 8 /* PROPS */, _hoisted_11), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.selectedPermissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          "class": "form-check-label px-1",
          "for": "inlineCheckbox".concat(index)
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(permission) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.granted_permission_list[index]), 9 /* TEXT, PROPS */, _hoisted_12)]);
      }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.errors.selectedPermissions), 1 /* TEXT */), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Submit button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        disabled: $setup.form.processing,
        "class": "btn btn-primary btn-block my-4"
      }, " Save Role ", 8 /* PROPS */, _hoisted_15)], 32 /* HYDRATE_EVENTS */)])])];
    }),

    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("41a2e1c0c2cc70fb")
/******/ })();
/******/ 
/******/ }
);