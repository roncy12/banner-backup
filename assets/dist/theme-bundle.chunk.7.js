(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./assets/js/theme/auth.js":
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Auth = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Auth, _PageManager);

  function Auth(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__["createTranslationDictionary"])(context);
    _this.formCreateSelector = 'form[data-create-account-form]';
    _this.recaptcha = $('.g-recaptcha iframe[src]');
    return _this;
  }

  var _proto = Auth.prototype;

  _proto.registerLoginValidation = function registerLoginValidation($loginForm) {
    var _this2 = this;

    var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.loginValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.login-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    this.loginValidator.add([{
      selector: '.login-form input[name="login_email"]',
      validate: function validate(cb, val) {
        var result = loginModel.email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }, {
      selector: '.login-form input[name="login_pass"]',
      validate: function validate(cb, val) {
        var result = loginModel.password(val);
        cb(result);
      },
      errorMessage: this.context.enterPass
    }]);
    $loginForm.on('submit', function (event) {
      _this2.loginValidator.performCheck();

      if (_this2.loginValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
    var _this3 = this;

    this.forgotPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.forgot-password-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    this.forgotPasswordValidator.add([{
      selector: '.forgot-password-form input[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }]);
    $forgotPasswordForm.on('submit', function (event) {
      _this3.forgotPasswordValidator.performCheck();

      if (_this3.forgotPasswordValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerNewPasswordValidation = function registerNewPasswordValidation() {
    var _this$validationDicti = this.validationDictionary,
        enterPassword = _this$validationDicti.password,
        matchPassword = _this$validationDicti.password_match,
        invalidPassword = _this$validationDicti.invalid_password;
    var newPasswordForm = '.new-password-form';
    var newPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: $(newPasswordForm + " input[type=\"submit\"]"),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    var passwordSelector = $(newPasswordForm + " input[name=\"password\"]");
    var password2Selector = $(newPasswordForm + " input[name=\"password_confirm\"]");
    var errorTextMessages = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword);
    _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements, errorTextMessages);
  };

  _proto.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
    var _this4 = this;

    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_3__["default"])($createAccountForm, this.context);
    var createAccountValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.formCreateSelector + " input[type='submit']",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    var $stateElement = $('[data-field-type="State"]');
    var emailSelector = this.formCreateSelector + " [data-field-type='EmailAddress']";
    var $emailElement = $(emailSelector);
    var passwordSelector = this.formCreateSelector + " [data-field-type='Password']";
    var $passwordElement = $(passwordSelector);
    var password2Selector = this.formCreateSelector + " [data-field-type='ConfirmPassword']";
    var $password2Element = $(password2Selector);
    createAccountValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (createAccountValidator.getStatus($stateElement) !== 'undefined') {
          createAccountValidator.remove($stateElement);
        }

        if ($last) {
          createAccountValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setStateCountryValidation(createAccountValidator, field, _this4.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    if ($emailElement) {
      createAccountValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setEmailValidation(createAccountValidator, emailSelector, this.validationDictionary.valid_email);
    }

    if ($passwordElement && $password2Element) {
      var _this$validationDicti2 = this.validationDictionary,
          enterPassword = _this$validationDicti2.password,
          matchPassword = _this$validationDicti2.password_match,
          invalidPassword = _this$validationDicti2.invalid_password;
      createAccountValidator.remove(passwordSelector);
      createAccountValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setPasswordValidation(createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements, Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword));
    }

    $createAccountForm.on('submit', function (event) {
      createAccountValidator.performCheck();

      if (createAccountValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  }
  /**
   * Request is made in this function to the remote endpoint and pulls back the states for country.
   */
  ;

  _proto.onReady = function onReady() {
    if (!this.recaptcha.attr('title')) {
      this.recaptcha.attr('title', this.context.recaptchaTitle);
    }

    var $createAccountForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])(this.formCreateSelector);
    var $loginForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.login-form');
    var $forgotPasswordForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.forgot-password-form');
    var $newPasswordForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.new-password-form'); // reset password
    // Injected via auth.html

    this.passwordRequirements = this.context.passwordRequirements;

    if ($loginForm.length) {
      this.registerLoginValidation($loginForm);
    }

    if ($newPasswordForm.length) {
      this.registerNewPasswordValidation();
    }

    if ($forgotPasswordForm.length) {
      this.registerForgotPasswordValidation($forgotPasswordForm);
    }

    if ($createAccountForm.length) {
      this.registerCreateAccountValidator($createAccountForm);
    }
  };

  return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/transform.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/transform.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGb3JPd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RyYW5zZm9ybS5qcyJdLCJuYW1lcyI6WyJBdXRoIiwiY29udGV4dCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiZm9ybUNyZWF0ZVNlbGVjdG9yIiwicmVjYXB0Y2hhIiwiJCIsInJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uIiwiJGxvZ2luRm9ybSIsImxvZ2luTW9kZWwiLCJmb3JtcyIsImxvZ2luVmFsaWRhdG9yIiwibm9kIiwic3VibWl0IiwidGFwIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInZhbCIsInJlc3VsdCIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwidXNlVmFsaWRFbWFpbCIsInBhc3N3b3JkIiwiZW50ZXJQYXNzIiwib24iLCJldmVudCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24iLCIkZm9yZ290UGFzc3dvcmRGb3JtIiwiZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IiLCJyZWdpc3Rlck5ld1Bhc3N3b3JkVmFsaWRhdGlvbiIsImVudGVyUGFzc3dvcmQiLCJtYXRjaFBhc3N3b3JkIiwicGFzc3dvcmRfbWF0Y2giLCJpbnZhbGlkUGFzc3dvcmQiLCJpbnZhbGlkX3Bhc3N3b3JkIiwibmV3UGFzc3dvcmRGb3JtIiwibmV3UGFzc3dvcmRWYWxpZGF0b3IiLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJlcnJvclRleHRNZXNzYWdlcyIsImNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCIsIlZhbGlkYXRvcnMiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsInJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvciIsIiRjcmVhdGVBY2NvdW50Rm9ybSIsInZhbGlkYXRpb25Nb2RlbCIsInZhbGlkYXRpb24iLCJjcmVhdGVBY2NvdW50VmFsaWRhdG9yIiwiJHN0YXRlRWxlbWVudCIsImVtYWlsU2VsZWN0b3IiLCIkZW1haWxFbGVtZW50IiwiJHBhc3N3b3JkRWxlbWVudCIsIiRwYXNzd29yZDJFbGVtZW50IiwiJGxhc3QiLCJzdGF0ZUNvdW50cnkiLCJlcnIiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwicmVtb3ZlIiwiaXMiLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiZmllbGRfbm90X2JsYW5rIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkX2VtYWlsIiwib25SZWFkeSIsImF0dHIiLCJyZWNhcHRjaGFUaXRsZSIsImNsYXNzaWZ5Rm9ybSIsIiRuZXdQYXNzd29yZEZvcm0iLCJsZW5ndGgiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7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QjtBQUM1QyxtQkFBbUIsbUJBQU8sQ0FBQywrREFBaUI7QUFDNUMsY0FBYyxtQkFBTyxDQUFDLG1EQUFXO0FBQ2pDLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTtBQUNuQyxpQkFBaUIsbUJBQU8sQ0FBQyx5REFBYztBQUN2QyxlQUFlLG1CQUFPLENBQUMscURBQVk7QUFDbkMsbUJBQW1CLG1CQUFPLENBQUMsNkRBQWdCOztBQUUzQztBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLEVBQUU7QUFDYixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0EsSUFBSSxJQUFJO0FBQ1IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay43LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICAgIGNsYXNzaWZ5Rm9ybSxcclxuICAgIFZhbGlkYXRvcnMsXHJcbiAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QsXHJcbiAgICBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG59IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1jcmVhdGUtYWNjb3VudC1mb3JtXSc7XHJcbiAgICAgICAgdGhpcy5yZWNhcHRjaGEgPSAkKCcuZy1yZWNhcHRjaGEgaWZyYW1lW3NyY10nKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckxvZ2luVmFsaWRhdGlvbigkbG9naW5Gb3JtKSB7XHJcbiAgICAgICAgY29uc3QgbG9naW5Nb2RlbCA9IGZvcm1zO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpblZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5sb2dpbi1mb3JtIGlucHV0W25hbWU9XCJsb2dpbl9lbWFpbFwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLmVtYWlsKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudXNlVmFsaWRFbWFpbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcubG9naW4tZm9ybSBpbnB1dFtuYW1lPVwibG9naW5fcGFzc1wiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLnBhc3N3b3JkKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJQYXNzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAkbG9naW5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dpblZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbigkZm9yZ290UGFzc3dvcmRGb3JtKSB7XHJcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmZvcmdvdC1wYXNzd29yZC1mb3JtIGlucHV0W25hbWU9XCJlbWFpbFwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnVzZVZhbGlkRW1haWwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICRmb3Jnb3RQYXNzd29yZEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFzc3dvcmQ6IGVudGVyUGFzc3dvcmQsIHBhc3N3b3JkX21hdGNoOiBtYXRjaFBhc3N3b3JkLCBpbnZhbGlkX3Bhc3N3b3JkOiBpbnZhbGlkUGFzc3dvcmQgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XHJcbiAgICAgICAgY29uc3QgbmV3UGFzc3dvcmRGb3JtID0gJy5uZXctcGFzc3dvcmQtZm9ybSc7XHJcbiAgICAgICAgY29uc3QgbmV3UGFzc3dvcmRWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICQoYCR7bmV3UGFzc3dvcmRGb3JtfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCksXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZFwiXWApO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZF9jb25maXJtXCJdYCk7XHJcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0TWVzc2FnZXMgPSBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QoZW50ZXJQYXNzd29yZCwgZW50ZXJQYXNzd29yZCwgbWF0Y2hQYXNzd29yZCwgaW52YWxpZFBhc3N3b3JkKTtcclxuICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgbmV3UGFzc3dvcmRWYWxpZGF0b3IsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgICBlcnJvclRleHRNZXNzYWdlcyxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvcigkY3JlYXRlQWNjb3VudEZvcm0pIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRjcmVhdGVBY2NvdW50Rm9ybSwgdGhpcy5jb250ZXh0KTtcclxuICAgICAgICBjb25zdCBjcmVhdGVBY2NvdW50VmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gaW5wdXRbdHlwZT0nc3VibWl0J11gLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT0nRW1haWxBZGRyZXNzJ11gO1xyXG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT0nUGFzc3dvcmQnXWA7XHJcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkRWxlbWVudCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT0nQ29uZmlybVBhc3N3b3JkJ11gO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZDJFbGVtZW50ID0gJChwYXNzd29yZDJTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XHJcblxyXG4gICAgICAgIGlmICgkc3RhdGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCAkbGFzdDtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcclxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlQWNjb3VudFZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRsYXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24oY3JlYXRlQWNjb3VudFZhbGlkYXRvciwgZmllbGQsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuZmllbGRfbm90X2JsYW5rKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZShlbWFpbFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRFbWFpbFZhbGlkYXRpb24oY3JlYXRlQWNjb3VudFZhbGlkYXRvciwgZW1haWxTZWxlY3RvciwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS52YWxpZF9lbWFpbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHBhc3N3b3JkOiBlbnRlclBhc3N3b3JkLCBwYXNzd29yZF9tYXRjaDogbWF0Y2hQYXNzd29yZCwgaW52YWxpZF9wYXNzd29yZDogaW52YWxpZFBhc3N3b3JkIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xyXG5cclxuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdChlbnRlclBhc3N3b3JkLCBlbnRlclBhc3N3b3JkLCBtYXRjaFBhc3N3b3JkLCBpbnZhbGlkUGFzc3dvcmQpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGNyZWF0ZUFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3JlYXRlQWNjb3VudFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcXVlc3QgaXMgbWFkZSBpbiB0aGlzIGZ1bmN0aW9uIHRvIHRoZSByZW1vdGUgZW5kcG9pbnQgYW5kIHB1bGxzIGJhY2sgdGhlIHN0YXRlcyBmb3IgY291bnRyeS5cclxuICAgICAqL1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVjYXB0Y2hhLmF0dHIoJ3RpdGxlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNhcHRjaGEuYXR0cigndGl0bGUnLCB0aGlzLmNvbnRleHQucmVjYXB0Y2hhVGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgJGNyZWF0ZUFjY291bnRGb3JtID0gY2xhc3NpZnlGb3JtKHRoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Gb3JtID0gY2xhc3NpZnlGb3JtKCcubG9naW4tZm9ybScpO1xyXG4gICAgICAgIGNvbnN0ICRmb3Jnb3RQYXNzd29yZEZvcm0gPSBjbGFzc2lmeUZvcm0oJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybScpO1xyXG4gICAgICAgIGNvbnN0ICRuZXdQYXNzd29yZEZvcm0gPSBjbGFzc2lmeUZvcm0oJy5uZXctcGFzc3dvcmQtZm9ybScpOyAvLyByZXNldCBwYXNzd29yZFxyXG5cclxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgYXV0aC5odG1sXHJcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcclxuXHJcbiAgICAgICAgaWYgKCRsb2dpbkZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJMb2dpblZhbGlkYXRpb24oJGxvZ2luRm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJG5ld1Bhc3N3b3JkRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1Bhc3N3b3JkVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRmb3Jnb3RQYXNzd29yZEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24oJGZvcmdvdFBhc3N3b3JkRm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGNyZWF0ZUFjY291bnRGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvcigkY3JlYXRlQWNjb3VudEZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG4iLCJ2YXIgY3JlYXRlQmFzZUZvciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUJhc2VGb3InKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG4iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vX2Jhc2VGb3InKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yT3duO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd24nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKlxuICogQW4gYWx0ZXJuYXRpdmUgdG8gYF8ucmVkdWNlYDsgdGhpcyBtZXRob2QgdHJhbnNmb3JtcyBgb2JqZWN0YCB0byBhIG5ld1xuICogYGFjY3VtdWxhdG9yYCBvYmplY3Qgd2hpY2ggaXMgdGhlIHJlc3VsdCBvZiBydW5uaW5nIGVhY2ggb2YgaXRzIG93blxuICogZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyB0aHJ1IGBpdGVyYXRlZWAsIHdpdGggZWFjaCBpbnZvY2F0aW9uXG4gKiBwb3RlbnRpYWxseSBtdXRhdGluZyB0aGUgYGFjY3VtdWxhdG9yYCBvYmplY3QuIElmIGBhY2N1bXVsYXRvcmAgaXMgbm90XG4gKiBwcm92aWRlZCwgYSBuZXcgb2JqZWN0IHdpdGggdGhlIHNhbWUgYFtbUHJvdG90eXBlXV1gIHdpbGwgYmUgdXNlZC4gVGhlXG4gKiBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggZm91ciBhcmd1bWVudHM6IChhY2N1bXVsYXRvciwgdmFsdWUsIGtleSwgb2JqZWN0KS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGN1c3RvbSBhY2N1bXVsYXRvciB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50cmFuc2Zvcm0oWzIsIDMsIDRdLCBmdW5jdGlvbihyZXN1bHQsIG4pIHtcbiAqICAgcmVzdWx0LnB1c2gobiAqPSBuKTtcbiAqICAgcmV0dXJuIG4gJSAyID09IDA7XG4gKiB9LCBbXSk7XG4gKiAvLyA9PiBbNCwgOV1cbiAqXG4gKiBfLnRyYW5zZm9ybSh7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDEgfSwgZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gKiAgIChyZXN1bHRbdmFsdWVdIHx8IChyZXN1bHRbdmFsdWVdID0gW10pKS5wdXNoKGtleSk7XG4gKiB9LCB7fSk7XG4gKiAvLyA9PiB7ICcxJzogWydhJywgJ2MnXSwgJzInOiBbJ2InXSB9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybShvYmplY3QsIGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBpc0Fyckxpa2UgPSBpc0FyciB8fCBpc0J1ZmZlcihvYmplY3QpIHx8IGlzVHlwZWRBcnJheShvYmplY3QpO1xuXG4gIGl0ZXJhdGVlID0gYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCA0KTtcbiAgaWYgKGFjY3VtdWxhdG9yID09IG51bGwpIHtcbiAgICB2YXIgQ3RvciA9IG9iamVjdCAmJiBvYmplY3QuY29uc3RydWN0b3I7XG4gICAgaWYgKGlzQXJyTGlrZSkge1xuICAgICAgYWNjdW11bGF0b3IgPSBpc0FyciA/IG5ldyBDdG9yIDogW107XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIGFjY3VtdWxhdG9yID0gaXNGdW5jdGlvbihDdG9yKSA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpIDoge307XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYWNjdW11bGF0b3IgPSB7fTtcbiAgICB9XG4gIH1cbiAgKGlzQXJyTGlrZSA/IGFycmF5RWFjaCA6IGJhc2VGb3JPd24pKG9iamVjdCwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgICByZXR1cm4gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgb2JqZWN0KTtcbiAgfSk7XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9