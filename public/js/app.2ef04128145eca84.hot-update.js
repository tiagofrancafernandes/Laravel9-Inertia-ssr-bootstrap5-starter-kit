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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.3.4/node_modules/vue/dist/vue.esm-bundler.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BreezeAuthenticatedLayout: _Layouts_Authenticated_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Head,
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: {
    role: Object,
    grantedPermissionList: Object,
    allPermissions: Object,
    errors: Object,
    csrfToken: String
  },
  methods: {
    toggleEnableEditRoleName: function toggleEnableEditRoleName(event) {
      var _event$target$dataset, _event$target;
      var originalRoleName = (_event$target$dataset = event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.dataset.originalRoleName) !== null && _event$target$dataset !== void 0 ? _event$target$dataset : null;
      if (!originalRoleName) {
        return;
      }
      console.log(JSON.stringify(this.form));
      if (!this.enableEditRoleName) {
        this.form.role_name = originalRoleName;
      }
    }
  },
  setup: function setup(props) {
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      id: props.role.id,
      role_name: props.role.name,
      selectedPermissions: []
    });
    var permissions = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
    Object.entries(props.allPermissions).forEach(function (item) {
      var _item = _slicedToArray(item, 2),
        permissionId = _item[0],
        permissionName = _item[1];
      permissions.value.push({
        id: permissionId,
        name: permissionName,
        checked: Object.values(props.grantedPermissionList).includes(permissionName)
      });
    });
    console.log(props.role.name);
    var enableEditRoleName = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(false);
    var originalRoleName = props.role.name;
    return {
      form: form,
      permissions: permissions,
      enableEditRoleName: enableEditRoleName,
      originalRoleName: originalRoleName
    };
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5df07a0aa411bcd3")
/******/ })();
/******/ 
/******/ }
);