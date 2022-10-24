(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);

  function Account(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__["createTranslationDictionary"])(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }

  var _proto = Account.prototype;

  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context.urls); // Injected via template

    this.passwordRequirements = this.context.passwordRequirements; // Instantiates wish list JS

    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);

    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);

      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }

    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);

      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }

    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }

    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }

    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }

    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }
  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */
  ;

  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;

    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });

      if (!submitForm) {
        event.preventDefault();
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
          text: _this2.context.selectItem,
          icon: 'error'
        });
      }
    });
  };

  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;

    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    addressValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }

        if ($last) {
          addressValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();

      if (addressValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false; // Iterate until we find a non-zero value in the dropdown for quantity

      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true; // Exit out of loop if we found at least one return

          return true;
        }
      });

      if (formSubmit) {
        return true;
      }

      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
        text: errorMessage,
        icon: 'error'
      });
      return event.preventDefault();
    });
  };

  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;

    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }

      var $field = $(field);

      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }

      if ($last) {
        paymentMethodValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
      }
    }); // Use credit card number input listener to highlight credit card type

    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["creditCardType"])(target.value);

      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    }); // Set of credit card validation

    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    }); // Set of credit card format

    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]"); // Billing address validation

    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault(); // Perform final form validation

      paymentMethodValidator.performCheck();

      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {}); // Assign country and state code


        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });

        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });

        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state; // Default Instrument

        data.default_instrument = !!data.default_instrument; // Store credit card

        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["storeInstrument"])(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
            text: _this4.context.generic_error,
            icon: 'error'
          });
        });
      }
    });
  };

  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector); // This only handles the custom fields, standard fields are added below

    editValidator.add(validationModel);

    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }

    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
          enterPassword = _this$validationDicti.password,
          matchPassword = _this$validationDicti.password_match,
          invalidPassword = _this$validationDicti.invalid_password;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword), true);
    }

    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;

          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }

          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }

    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();

      if (editValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();

      if (inboxValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */

var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};
/**
 * Get credit card type from credit card number
 * @param {string} value
 */


var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(value), true);
};
/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */

var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
      shopperId = _ref.shopperId,
      storeHash = _ref.storeHash,
      vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
      currency_code = _ref2.currency_code,
      credit_card_number = _ref2.credit_card_number,
      expiration = _ref2.expiration,
      name_on_card = _ref2.name_on_card,
      cvv = _ref2.cvv,
      default_instrument = _ref2.default_instrument,
      address1 = _ref2.address1,
      address2 = _ref2.address2,
      city = _ref2.city,
      postal_code = _ref2.postal_code,
      state_or_province_code = _ref2.state_or_province_code,
      country_code = _ref2.country_code,
      company = _ref2.company,
      first_name = _ref2.first_name,
      last_name = _ref2.last_name,
      email = _ref2.email,
      phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(target.value));
      });
    }
  },

  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
            which = _ref4.which;
        var refTarget = target;

        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");


function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJBY2NvdW50IiwiY29udGV4dCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiJHN0YXRlIiwiJCIsIiRib2R5Iiwib25SZWFkeSIsIiRlZGl0QWNjb3VudEZvcm0iLCJjbGFzc2lmeUZvcm0iLCIkYWRkcmVzc0Zvcm0iLCIkaW5ib3hGb3JtIiwiJGFjY291bnRSZXR1cm5Gb3JtIiwiJHBheW1lbnRNZXRob2RGb3JtIiwiJHJlb3JkZXJGb3JtIiwiJGludm9pY2VCdXR0b24iLCJjb21wYXJlUHJvZHVjdHMiLCJ1cmxzIiwicGFzc3dvcmRSZXF1aXJlbWVudHMiLCJXaXNobGlzdCIsImxvYWQiLCJsZW5ndGgiLCJyZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbiIsImlzIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIm9uIiwibGVmdCIsIndpbmRvdyIsInNjcmVlbiIsImF2YWlsV2lkdGgiLCJ0b3AiLCJhdmFpbEhlaWdodCIsInVybCIsImRhdGEiLCJvcGVuIiwiaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbiIsInJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uIiwiaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbiIsImluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24iLCJpbml0UmVvcmRlckZvcm0iLCJiaW5kRGVsZXRlQWRkcmVzcyIsImJpbmREZWxldGVQYXltZW50TWV0aG9kIiwiZXZlbnQiLCJtZXNzYWdlIiwiY3VycmVudFRhcmdldCIsImNvbmZpcm0iLCJwcmV2ZW50RGVmYXVsdCIsIiRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMiLCJzdWJtaXRGb3JtIiwiZmluZCIsInJlbW92ZSIsImVhY2giLCJpbmRleCIsInByb2R1Y3RDaGVja2JveCIsInByb2R1Y3RJZCIsInZhbCIsIiRpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhcHBlbmQiLCJzd2FsIiwiZmlyZSIsInRleHQiLCJzZWxlY3RJdGVtIiwiaWNvbiIsInZhbGlkYXRpb25Nb2RlbCIsInZhbGlkYXRpb24iLCJzdGF0ZVNlbGVjdG9yIiwiJHN0YXRlRWxlbWVudCIsImFkZHJlc3NWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJ0YXAiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiYWRkIiwiJGxhc3QiLCJzdGF0ZUNvdW50cnkiLCJlcnIiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiVmFsaWRhdG9ycyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJmaWVsZF9ub3RfYmxhbmsiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXJyb3JNZXNzYWdlIiwiZm9ybVN1Ym1pdCIsImkiLCJlbGUiLCJwYXJzZUludCIsImF0dHIiLCJmaXJzdE5hbWVMYWJlbCIsImxhc3ROYW1lTGFiZWwiLCJjb21wYW55TGFiZWwiLCJwaG9uZUxhYmVsIiwiYWRkcmVzczFMYWJlbCIsImFkZHJlc3MyTGFiZWwiLCJjaXR5TGFiZWwiLCJjb3VudHJ5TGFiZWwiLCJjaG9vc2VDb3VudHJ5TGFiZWwiLCJzdGF0ZUxhYmVsIiwicG9zdGFsQ29kZUxhYmVsIiwicGF5bWVudE1ldGhvZFNlbGVjdG9yIiwicGF5bWVudE1ldGhvZFZhbGlkYXRvciIsImNhcmRUeXBlIiwidGFyZ2V0IiwiY3JlZGl0Q2FyZFR5cGUiLCJzaWJsaW5ncyIsImNzcyIsIkNDVmFsaWRhdG9ycyIsInNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uIiwiY3JlZGl0Q2FyZE51bWJlciIsInNldEV4cGlyYXRpb25WYWxpZGF0aW9uIiwiZXhwaXJhdGlvbiIsInNldE5hbWVPbkNhcmRWYWxpZGF0aW9uIiwibmFtZU9uQ2FyZCIsInNldEN2dlZhbGlkYXRpb24iLCJjdnYiLCJDQ0Zvcm1hdHRlcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0Iiwic2V0RXhwaXJhdGlvbkZvcm1hdCIsInNlcmlhbGl6ZUFycmF5Iiwib2JqIiwiaXRlbSIsInJlZk9iaiIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJzdGF0ZSIsInN0YXRlcyIsImNvdW50cnlfY29kZSIsImNvZGUiLCJzdGF0ZV9vcl9wcm92aW5jZV9jb2RlIiwiZGVmYXVsdF9pbnN0cnVtZW50Iiwic3RvcmVJbnN0cnVtZW50IiwibG9jYXRpb24iLCJocmVmIiwicGF5bWVudE1ldGhvZHNVcmwiLCJnZW5lcmljX2Vycm9yIiwiZm9ybUVkaXRTZWxlY3RvciIsImVkaXRWYWxpZGF0b3IiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsInBhc3N3b3JkU2VsZWN0b3IiLCIkcGFzc3dvcmRFbGVtZW50IiwicGFzc3dvcmQyU2VsZWN0b3IiLCIkcGFzc3dvcmQyRWxlbWVudCIsImN1cnJlbnRQYXNzd29yZFNlbGVjdG9yIiwiJGN1cnJlbnRQYXNzd29yZCIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkX2VtYWlsIiwiZW50ZXJQYXNzd29yZCIsInBhc3N3b3JkIiwibWF0Y2hQYXNzd29yZCIsInBhc3N3b3JkX21hdGNoIiwiaW52YWxpZFBhc3N3b3JkIiwiaW52YWxpZF9wYXNzd29yZCIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsImNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImN1cnJlbnRQYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW5ib3hWYWxpZGF0b3IiLCJOdW1iZXIiLCJlbnRlck9yZGVyTnVtIiwiZW50ZXJTdWJqZWN0IiwiZW50ZXJNZXNzYWdlIiwiUGFnZU1hbmFnZXIiLCJvbWl0TnVsbFN0cmluZyIsImtleSIsImNyZWRpdGNhcmRzIiwiY2FyZCIsInBhcnNlIiwiZG9uZSIsImZhaWwiLCJwYXltZW50c1VybCIsInNob3BwZXJJZCIsInN0b3JlSGFzaCIsInZhdWx0VG9rZW4iLCJwcm92aWRlcl9pZCIsImN1cnJlbmN5X2NvZGUiLCJjcmVkaXRfY2FyZF9udW1iZXIiLCJuYW1lX29uX2NhcmQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInBvc3RhbF9jb2RlIiwiY29tcGFueSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBob25lIiwiZXhwaXJ5Iiwic3BsaXQiLCJhamF4IiwiZGF0YVR5cGUiLCJtZXRob2QiLCJjYWNoZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsImluc3RydW1lbnQiLCJjYXJkaG9sZGVyX25hbWUiLCJudW1iZXIiLCJleHBpcnlfbW9udGgiLCJtb250aCIsImV4cGlyeV95ZWFyIiwieWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsImJpbGxpbmdfYWRkcmVzcyIsIkZvcm1hdHRlcnMiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxDb250ZXh0IiwiYWRkQ2xhc3MiLCJjb21wYXJlIiwiam9pbiIsImh0bWwiLCJyZW1vdmVDbGFzcyIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJtYXAiLCJlbGVtZW50IiwiZ2V0IiwidHJpZ2dlckhhbmRsZXIiLCJwcm9kdWN0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7RUFDakIsaUJBQVlDLE9BQVosRUFBcUI7SUFBQTs7SUFDakIsZ0NBQU1BLE9BQU47SUFDQSxNQUFLQyxvQkFBTCxHQUE0QkMsb0dBQTJCLENBQUNGLE9BQUQsQ0FBdkQ7SUFDQSxNQUFLRyxNQUFMLEdBQWNDLENBQUMsQ0FBQywyQkFBRCxDQUFmO0lBQ0EsTUFBS0MsS0FBTCxHQUFhRCxDQUFDLENBQUMsTUFBRCxDQUFkO0lBSmlCO0VBS3BCOzs7O1NBRURFLE8sR0FBQSxtQkFBVTtJQUNOLElBQU1DLGdCQUFnQixHQUFHQyw2RUFBWSxDQUFDLDhCQUFELENBQXJDO0lBQ0EsSUFBTUMsWUFBWSxHQUFHRCw2RUFBWSxDQUFDLHlCQUFELENBQWpDO0lBQ0EsSUFBTUUsVUFBVSxHQUFHRiw2RUFBWSxDQUFDLHVCQUFELENBQS9CO0lBQ0EsSUFBTUcsa0JBQWtCLEdBQUdILDZFQUFZLENBQUMsNEJBQUQsQ0FBdkM7SUFDQSxJQUFNSSxrQkFBa0IsR0FBR0osNkVBQVksQ0FBQyxnQ0FBRCxDQUF2QztJQUNBLElBQU1LLFlBQVksR0FBR0wsNkVBQVksQ0FBQyw2QkFBRCxDQUFqQztJQUNBLElBQU1NLGNBQWMsR0FBR1YsQ0FBQyxDQUFDLHNCQUFELENBQXhCO0lBRUFXLHlFQUFlLENBQUMsS0FBS2YsT0FBTCxDQUFhZ0IsSUFBZCxDQUFmLENBVE0sQ0FXTjs7SUFDQSxLQUFLQyxvQkFBTCxHQUE0QixLQUFLakIsT0FBTCxDQUFhaUIsb0JBQXpDLENBWk0sQ0FjTjs7SUFDQUMsaURBQVEsQ0FBQ0MsSUFBVCxDQUFjLEtBQUtuQixPQUFuQjs7SUFF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akIsQ0FBaEI7SUFDSCxDQUZELE1BRU87TUFDSHJCLGdCQUFnQixDQUFDYyxjQUFELEVBQWlCTyxPQUFqQixDQUFoQjtJQUNIOztJQUVEZixnQkFBZ0IsQ0FBQ1EsY0FBRCxFQUFpQlEsbUJBQWpCLEVBQXNDZCxVQUF0QyxDQUFoQjtFQUNILENBWEQ7RUFhQXpPLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9CLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLHdCQUF2QixFQUFpRCxVQUFBaUIsS0FBSyxFQUFJO0lBQ3RELElBQU1vTixLQUFLLEdBQUd6UCxDQUFDLENBQUNxQyxLQUFLLENBQUNFLGFBQVAsQ0FBZjtJQUNBLElBQU1tTixpQkFBaUIsR0FBR0QsS0FBSyxDQUFDN00sSUFBTixDQUFXLG9DQUFYLENBQTFCOztJQUVBLElBQUk4TSxpQkFBaUIsQ0FBQzFPLE1BQWxCLElBQTRCLENBQWhDLEVBQW1DO01BQy9CMk8sNkRBQWMsQ0FBQyxrREFBRCxDQUFkO01BQ0F0TixLQUFLLENBQUNJLGNBQU47SUFDSDtFQUNKLENBUkQ7RUFVQXpDLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9CLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLHFCQUF0QixFQUE2QyxZQUFNO0lBQy9DLElBQU13TyxvQkFBb0IsR0FBRzVQLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTRDLElBQVYsQ0FBZSxvQ0FBZixDQUE3Qjs7SUFFQSxJQUFJZ04sb0JBQW9CLENBQUM1TyxNQUFyQixJQUErQixDQUFuQyxFQUFzQztNQUNsQzJPLDZEQUFjLENBQUMsa0RBQUQsQ0FBZDtNQUNBLE9BQU8sS0FBUDtJQUNIO0VBQ0osQ0FQRDtBQVFILEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XHJcbmltcG9ydCBXaXNobGlzdCBmcm9tICcuL3dpc2hsaXN0JztcclxuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcclxuaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcclxuaW1wb3J0IHtcclxuICAgIGNsYXNzaWZ5Rm9ybSxcclxuICAgIFZhbGlkYXRvcnMsXHJcbiAgICBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCxcclxuICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCxcclxufSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcclxuaW1wb3J0IHsgY3JlZGl0Q2FyZFR5cGUsIHN0b3JlSW5zdHJ1bWVudCwgVmFsaWRhdG9ycyBhcyBDQ1ZhbGlkYXRvcnMsIEZvcm1hdHRlcnMgYXMgQ0NGb3JtYXR0ZXJzIH0gZnJvbSAnLi9jb21tb24vcGF5bWVudC1tZXRob2QnO1xyXG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XHJcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcclxuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29uc3QgJGVkaXRBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRyZXNzRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkYWNjb3VudFJldHVybkZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmV0dXJuLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJHBheW1lbnRNZXRob2RGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRpbnZvaWNlQnV0dG9uID0gJCgnW2RhdGEtcHJpbnQtaW52b2ljZV0nKTtcclxuXHJcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcclxuXHJcbiAgICAgICAgLy8gSW5qZWN0ZWQgdmlhIHRlbXBsYXRlXHJcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcclxuXHJcbiAgICAgICAgLy8gSW5zdGFudGlhdGVzIHdpc2ggbGlzdCBKU1xyXG4gICAgICAgIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKCRlZGl0QWNjb3VudEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkaW52b2ljZUJ1dHRvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJGludm9pY2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCAvIDIgLSA0NTA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0IC8gMiAtIDMyMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICRpbnZvaWNlQnV0dG9uLmRhdGEoJ3ByaW50SW52b2ljZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ29yZGVySW52b2ljZScsIGB3aWR0aD05MDAsaGVpZ2h0PTY1MCxsZWZ0PSR7bGVmdH0sdG9wPSR7dG9wfSxzY3JvbGxiYXJzPTFgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGFkZHJlc3NGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkaW5ib3hGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRhY2NvdW50UmV0dXJuRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHBheW1lbnRNZXRob2RGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkcmVvcmRlckZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpbmREZWxldGVBZGRyZXNzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZHMgYSBzdWJtaXQgaG9vayB0byBlbnN1cmUgdGhlIGN1c3RvbWVyIHJlY2VpdmVzIGEgY29uZmlybWF0aW9uIGRpYWxvZyBiZWZvcmUgZGVsZXRpbmcgYW4gYWRkcmVzc1xyXG4gICAgICovXHJcbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcclxuICAgICAgICAkKCdbZGF0YS1kZWxldGUtYWRkcmVzc10nKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVBZGRyZXNzJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLXBheW1lbnQtbWV0aG9kXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZVBheW1lbnRNZXRob2QnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKSB7XHJcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMgPSAkKCcuYWNjb3VudC1saXN0SXRlbSAuZm9ybS1jaGVja2JveDpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgIGxldCBzdWJtaXRGb3JtID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkcmVvcmRlckZvcm0uZmluZCgnW25hbWVePVwicmVvcmRlcml0ZW1cIl0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChwcm9kdWN0Q2hlY2tib3gpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0PicsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgcmVvcmRlcml0ZW1bJHtwcm9kdWN0SWR9XWAsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICRyZW9yZGVyRm9ybS5hcHBlbmQoJGlucHV0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXN1Ym1pdEZvcm0pIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5zZWxlY3RJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0sIHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nO1xyXG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKHN0YXRlU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgJGxhc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXHJcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGFkZHJlc3NWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGFkZHJlc3NGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICRhY2NvdW50UmV0dXJuRm9ybS5kYXRhKCdhY2NvdW50UmV0dXJuRm9ybUVycm9yJyk7XHJcblxyXG4gICAgICAgICRhY2NvdW50UmV0dXJuRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCB3ZSBmaW5kIGEgbm9uLXplcm8gdmFsdWUgaW4gdGhlIGRyb3Bkb3duIGZvciBxdWFudGl0eVxyXG4gICAgICAgICAgICAkKCdbbmFtZV49XCJyZXR1cm5fcXR5XCJdJywgJGFjY291bnRSZXR1cm5Gb3JtKS5lYWNoKChpLCBlbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkKGVsZSkudmFsKCksIDEwKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TdWJtaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBFeGl0IG91dCBvZiBsb29wIGlmIHdlIGZvdW5kIGF0IGxlYXN0IG9uZSByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybVN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKSB7XHJcbiAgICAgICAgLy8gSW5qZWN0IHZhbGlkYXRpb25zIGludG8gZm9ybSBmaWVsZHMgYmVmb3JlIHZhbGlkYXRpb24gcnVuc1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjZmlyc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuZmlyc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNsYXN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0Lmxhc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb21wYW55LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb21wYW55TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjcGhvbmUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnBob25lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczEuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MxTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMi5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczJMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjaXR5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jaXR5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb3VudHJ5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVzZWxlY3RcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvdW50cnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBwcmVmaXg6IFwiJHt0aGlzLmNvbnRleHQuY2hvb3NlQ291bnRyeUxhYmVsfVwiIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3N0YXRlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5zdGF0ZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjcG9zdGFsX2NvZGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnBvc3RhbENvZGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0sIHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXSc7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdYCk7XHJcblxyXG4gICAgICAgIGxldCAkbGFzdDtcclxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXHJcbiAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBVc2UgY3JlZGl0IGNhcmQgbnVtYmVyIGlucHV0IGxpc3RlbmVyIHRvIGhpZ2hsaWdodCBjcmVkaXQgY2FyZCB0eXBlXHJcbiAgICAgICAgbGV0IGNhcmRUeXBlO1xyXG4gICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgY2FyZFR5cGUgPSBjcmVkaXRDYXJkVHlwZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoY2FyZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdbYWx0PVwiJHtjYXJkVHlwZX1cIl1gKS5zaWJsaW5ncygpLmNzcygnb3BhY2l0eScsICcuMicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ2ApLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIHZhbGlkYXRpb25cclxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCwgdGhpcy5jb250ZXh0LmNyZWRpdENhcmROdW1iZXIpO1xyXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRFeHBpcmF0aW9uVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCwgdGhpcy5jb250ZXh0LmV4cGlyYXRpb24pO1xyXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXROYW1lT25DYXJkVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJuYW1lX29uX2NhcmRcIl1gLCB0aGlzLmNvbnRleHQubmFtZU9uQ2FyZCk7XHJcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEN2dlZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3Z2XCJdYCwgdGhpcy5jb250ZXh0LmN2diwgKCkgPT4gY2FyZFR5cGUpO1xyXG5cclxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgZm9ybWF0XHJcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldENyZWRpdENhcmROdW1iZXJGb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCk7XHJcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldEV4cGlyYXRpb25Gb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWApO1xyXG5cclxuICAgICAgICAvLyBCaWxsaW5nIGFkZHJlc3MgdmFsaWRhdGlvblxyXG4gICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XHJcblxyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGZpbmFsIGZvcm0gdmFsaWRhdGlvblxyXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBmb3JtIGRhdGEgYW5kIHJlZHVjZSBpdCB0byBvYmplY3RcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBfLnJlZHVjZSgkcGF5bWVudE1ldGhvZEZvcm0uc2VyaWFsaXplQXJyYXkoKSwgKG9iaiwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcclxuICAgICAgICAgICAgICAgICAgICByZWZPYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZk9iajtcclxuICAgICAgICAgICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gY291bnRyeSBhbmQgc3RhdGUgY29kZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IF8uZmluZCh0aGlzLmNvbnRleHQuY291bnRyaWVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5jb3VudHJ5KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY291bnRyeSAmJiBfLmZpbmQoY291bnRyeS5zdGF0ZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeV9jb2RlID0gY291bnRyeSA/IGNvdW50cnkuY29kZSA6IGRhdGEuY291bnRyeTtcclxuICAgICAgICAgICAgICAgIGRhdGEuc3RhdGVfb3JfcHJvdmluY2VfY29kZSA9IHN0YXRlID8gc3RhdGUuY29kZSA6IGRhdGEuc3RhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBJbnN0cnVtZW50XHJcbiAgICAgICAgICAgICAgICBkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudCA9ICEhZGF0YS5kZWZhdWx0X2luc3RydW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgY3JlZGl0IGNhcmRcclxuICAgICAgICAgICAgICAgIHN0b3JlSW5zdHJ1bWVudCh0aGlzLmNvbnRleHQsIGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuY29udGV4dC5wYXltZW50TWV0aG9kc1VybDtcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuZ2VuZXJpY19lcnJvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSwgdGhpcy5jb250ZXh0KTtcclxuICAgICAgICBjb25zdCBmb3JtRWRpdFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nO1xyXG4gICAgICAgIGNvbnN0IGVkaXRWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICcke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJFbWFpbEFkZHJlc3NcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiUGFzc3dvcmRcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkNvbmZpcm1QYXNzd29yZFwiXWA7XHJcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDdXJyZW50UGFzc3dvcmRcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRjdXJyZW50UGFzc3dvcmQgPSAkKGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBvbmx5IGhhbmRsZXMgdGhlIGN1c3RvbSBmaWVsZHMsIHN0YW5kYXJkIGZpZWxkcyBhcmUgYWRkZWQgYmVsb3dcclxuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShlbWFpbFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRFbWFpbFZhbGlkYXRpb24oZWRpdFZhbGlkYXRvciwgZW1haWxTZWxlY3RvciwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS52YWxpZF9lbWFpbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHBhc3N3b3JkOiBlbnRlclBhc3N3b3JkLCBwYXNzd29yZF9tYXRjaDogbWF0Y2hQYXNzd29yZCwgaW52YWxpZF9wYXNzd29yZDogaW52YWxpZFBhc3N3b3JkIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0KGVudGVyUGFzc3dvcmQsIGVudGVyUGFzc3dvcmQsIG1hdGNoUGFzc3dvcmQsIGludmFsaWRQYXNzd29yZCksXHJcbiAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRjdXJyZW50UGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnICYmICRwYXNzd29yZEVsZW1lbnQudmFsKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jdXJyZW50UGFzc3dvcmQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9maXJzdG5hbWUnXWAsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfbGFzdG5hbWUnXWAsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0Lmxhc3ROYW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAkZWRpdEFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWRpdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKSB7XHJcbiAgICAgICAgY29uc3QgaW5ib3hWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gc2VsZWN0W25hbWU9XCJtZXNzYWdlX29yZGVyX2lkXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE51bWJlcih2YWwpICE9PSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyT3JkZXJOdW0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W25hbWU9XCJtZXNzYWdlX3N1YmplY3RcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclN1YmplY3QsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHRleHRhcmVhW25hbWU9XCJtZXNzYWdlX2NvbnRlbnRcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaW5ib3hWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGNyZWRpdGNhcmRzIGZyb20gJ2NyZWRpdGNhcmRzJztcclxuXHJcbi8qKlxyXG4gKiBPbWl0IG51bGwgb3IgZW1wdHkgc3RyaW5nIHByb3BlcnRpZXMgb2Ygb2JqZWN0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbmNvbnN0IG9taXROdWxsU3RyaW5nID0gb2JqID0+IHtcclxuICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcclxuXHJcbiAgICAkLmVhY2gocmVmT2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHJlZk9ialtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZWZPYmo7XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IGNyZWRpdCBjYXJkIHR5cGUgZnJvbSBjcmVkaXQgY2FyZCBudW1iZXJcclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlZGl0Q2FyZFR5cGUgPSB2YWx1ZSA9PiBjcmVkaXRjYXJkcy5jYXJkLnR5cGUoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWx1ZSksIHRydWUpO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZm9yIGFqYXggcmVxdWVzdCB0byBzdG9yZSBhIG5ldyBpbnN0cnVtZW50IGluIGJpZ3BheVxyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGhlYWRlclxyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGJvZHlcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgc3VjY2Vzc2Z1bCByZXNwb25zZVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmYWlsIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdG9yZUluc3RydW1lbnQgPSAoe1xyXG4gICAgLy8gSG9zdG5hbWUsIElkcyAmIFRva2VuXHJcbiAgICBwYXltZW50c1VybCxcclxuICAgIHNob3BwZXJJZCxcclxuICAgIHN0b3JlSGFzaCxcclxuICAgIHZhdWx0VG9rZW4sXHJcbn0sIHtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAvLyBQcm92aWRlciBJbmZvXHJcbiAgICBwcm92aWRlcl9pZCxcclxuICAgIGN1cnJlbmN5X2NvZGUsXHJcblxyXG4gICAgLy8gSW5zdHJ1bWVudCBEZXRhaWxzXHJcbiAgICBjcmVkaXRfY2FyZF9udW1iZXIsXHJcbiAgICBleHBpcmF0aW9uLFxyXG4gICAgbmFtZV9vbl9jYXJkLFxyXG4gICAgY3Z2LFxyXG4gICAgZGVmYXVsdF9pbnN0cnVtZW50LFxyXG5cclxuICAgIC8vIEJpbGxpbmcgQWRkcmVzc1xyXG4gICAgYWRkcmVzczEsXHJcbiAgICBhZGRyZXNzMixcclxuICAgIGNpdHksXHJcbiAgICBwb3N0YWxfY29kZSxcclxuICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXHJcbiAgICBjb3VudHJ5X2NvZGUsXHJcbiAgICBjb21wYW55LFxyXG4gICAgZmlyc3RfbmFtZSxcclxuICAgIGxhc3RfbmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcGhvbmUsXHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbn0sIGRvbmUsIGZhaWwpID0+IHtcclxuICAgIGNvbnN0IGV4cGlyeSA9IGV4cGlyYXRpb24uc3BsaXQoJy8nKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogYCR7cGF5bWVudHNVcmx9L3N0b3Jlcy8ke3N0b3JlSGFzaH0vY3VzdG9tZXJzLyR7c2hvcHBlcklkfS9zdG9yZWRfaW5zdHJ1bWVudHNgLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdmF1bHRUb2tlbixcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhcmQnLFxyXG4gICAgICAgICAgICAgICAgY2FyZGhvbGRlcl9uYW1lOiBuYW1lX29uX2NhcmQsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IGNyZWRpdGNhcmRzLmNhcmQucGFyc2UoY3JlZGl0X2NhcmRfbnVtYmVyKSxcclxuICAgICAgICAgICAgICAgIGV4cGlyeV9tb250aDogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJ5X3llYXI6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX3ZhbHVlOiBjdnYsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzczogb21pdE51bGxTdHJpbmcoe1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzczEsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMixcclxuICAgICAgICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSxcclxuICAgICAgICAgICAgICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICBjb21wYW55LFxyXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBwcm92aWRlcl9pZCxcclxuICAgICAgICAgICAgZGVmYXVsdF9pbnN0cnVtZW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeV9jb2RlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgICAuZG9uZShkb25lKVxyXG4gICAgICAgIC5mYWlsKGZhaWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1hdHRlcnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGNyZWRpdCBjYXJkIG51bWJlclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKi9cclxuICAgIHNldENyZWRpdENhcmROdW1iZXJGb3JtYXQ6IGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IGNyZWRpdGNhcmRzLmNhcmQuZm9ybWF0KGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBleHBpcmF0aW9uIGRhdGVcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBzZXRFeHBpcmF0aW9uRm9ybWF0OiBmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCwgd2hpY2ggfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHdoaWNoID09PSA4ICYmIC8uKihcXC8pJC8udGVzdCh0YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgNSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdoaWNoICE9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFsxLTldXFwvfFsyLTldKSQvZywgJzAkMS8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKSQvZywgJyQxLycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswLTFdKShbMy05XSkkL2csICcwJDEvJDInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKShbMC05XXsyfSkkL2csICckMS8kMicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswXSspXFwvfFswXSskL2csICcwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFxkXFwvXXxeW1xcL10qJC9nLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZhbGlkYXRvcnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjcmVkaXQgY2FyZCBudW1iZXJcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY2FyZC5pc1ZhbGlkKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIHNldEV4cGlyYXRpb25WYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gdmFsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgL14oMFsxLTldfDFbMC0yXSlcXC8oWzAtOV17Mn0pJC8udGVzdCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiAhY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5pc1Bhc3QoY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLCBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIG5hbWUgb24gY2FyZFxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIHNldE5hbWVPbkNhcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gISF2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjdnZcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICogQHBhcmFtIHthbnl9IGNhcmRUeXBlIFRoZSBjcmVkaXQgY2FyZCBudW1iZXIgdHlwZVxyXG4gICAgICovXHJcbiAgICBzZXRDdnZWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlLCBjYXJkVHlwZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgY2FyZFR5cGUgPT09ICdmdW5jdGlvbicgPyBjYXJkVHlwZSgpIDogY2FyZFR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jdmMuaXNWYWxpZCh2YWwsIHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuXHJcbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XHJcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcclxuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xyXG4gICAgbGV0IGNvbXBhcmVDb3VudGVyID0gW107XHJcblxyXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY29tcGFyZVJlc2V0JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGNvbXBhcmVDb3VudGVyID0gJGNoZWNrZWQubGVuZ3RoID8gJGNoZWNrZWQubWFwKChpbmRleCwgZWxlbWVudCkgPT4gZWxlbWVudC52YWx1ZSkuZ2V0KCkgOiBbXTtcclxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3RzVG9Db21wYXJlLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=