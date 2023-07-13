"use strict";
self["webpackHotUpdate"]("/js/app",{

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
var _hoisted_4 = ["action"];
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  name: "_method",
  value: "put"
}, null, -1 /* HOISTED */);
var _hoisted_6 = ["value"];
var _hoisted_7 = {
  "class": "row mb-4"
};
var _hoisted_8 = {
  "class": "col-2 pt-4"
};
var _hoisted_9 = {
  "class": "form-check form-check-inline px-0 mt-2 pt-1"
};
var _hoisted_10 = ["checked", "datatype"];
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label px-1",
  "for": "enableEditRoleName"
}, "Enable edit role name", -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "col-10"
};
var _hoisted_13 = {
  "class": "form-outline"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "role_name"
}, "Role name", -1 /* HOISTED */);
var _hoisted_15 = ["disabled"];
var _hoisted_16 = {
  "class": "text-danger"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "permission_list"
}, "Assign one/multiple permissions to this role:", -1 /* HOISTED */);
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_19 = ["value", "id", "checked"];
var _hoisted_20 = ["for"];
var _hoisted_21 = {
  "class": "text-danger"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_23 = ["disabled"];
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
        action: _ctx.route('roles.update', $setup.form.id),
        method: "post"
      }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "hidden",
        name: "_token",
        value: $props.csrfToken
      }, null, 8 /* PROPS */, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "checkbox",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.enableEditRoleName = $event;
        }),
        id: "enableEditRoleName",
        checked: $setup.enableEditRoleName,
        datatype: $setup.enableEditRoleName,
        onChange: _cache[1] || (_cache[1] = function () {
          return $options.toggleEnableEditRoleName && $options.toggleEnableEditRoleName.apply($options, arguments);
        })
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_10), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.enableEditRoleName]]), _hoisted_11])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        name: "role_name",
        id: "role_name",
        "class": "form-control",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.form.role_name = $event;
        }),
        disabled: !$setup.enableEditRoleName
      }, null, 8 /* PROPS */, _hoisted_15), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.role_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.errors.role_name), 1 /* TEXT */)])])]), _hoisted_17, _hoisted_18, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.permissions, function (permission) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: permission.id,
          "class": "form-check form-check-inline"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :name=\"`selectedPermissions[${permission.name}]`\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "checkbox",
          value: permission.name,
          name: "selectedPermissions[]",
          id: "permission_".concat(permission.id),
          checked: permission.checked
        }, null, 8 /* PROPS */, _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          "class": "form-check-label px-1",
          "for": "permission_".concat(permission.id)
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(permission.name), 9 /* TEXT, PROPS */, _hoisted_20)]);
      }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.errors.selectedPermissions), 1 /* TEXT */), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Submit button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        disabled: $setup.form.processing,
        "class": "btn btn-primary btn-block my-4"
      }, " Update role ", 8 /* PROPS */, _hoisted_23)], 8 /* PROPS */, _hoisted_4)])])];
    }),
    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7a839ca9563d989")
/******/ })();
/******/ 
/******/ }
);