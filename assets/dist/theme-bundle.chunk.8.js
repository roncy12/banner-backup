(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Cart = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);

  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Cart.prototype;

  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.bindEvents();
  };

  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;

    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1; // Does not quality for min/max quantity

    if (newQty < minQty) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: minError,
        icon: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: maxError,
        icon: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };

  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;

    if (preVal === void 0) {
      preVal = null;
    }

    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry; // Does not quality for min/max quantity

    if (!newQty) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: invalidEntry + " is not a valid entry",
        icon: 'error'
      });
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: minError,
        icon: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: maxError,
        icon: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };

  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };

  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this4 = this;

    var context = Object.assign({
      productForChangeId: productId
    }, this.context);
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["defaultModal"])();

    if (this.$modal === null) {
      this.$modal = $('#modal');
    }

    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this4.$modal);
      var modalBodyReservedHeight = $productOptionsContainer.outerHeight();
      $productOptionsContainer.css('height', modalBodyReservedHeight);
      _this4.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__["default"](_this4.$modal, context);

      _this4.bindGiftWrappingForm();

      modal.setupFocusTrap();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};

        if (err) {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            text: err,
            icon: 'error'
          });
          return false;
        }

        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }

        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };

  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;

    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show(); // Remove last item from cart? Reload

    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);

      _this5.$cartTotals.html(response.totals);

      _this5.$cartMessages.html(response.statusMessages);

      $cartPageTitle.replaceWith(response.pageTitle);

      _this5.bindEvents();

      _this5.$overlay.hide();

      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
      $("[data-cart-itemid='" + _this5.$activeCartItemId + "']", _this5.$cartContent).filter("[data-action='" + _this5.$activeCartItemBtnAction + "']").trigger('focus');
    });
  };

  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;

    var debounceTimeout = 400;

    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);

    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);

    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);

    var preVal; // cart update

    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdate($target);
    }); // cart qty manually updates

    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: string,
        icon: 'warning',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault(); // edit item in cart

      _this6.cartEditOptions(itemId, productId);
    });
  };

  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;

    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault(); // Empty code

      if (!code) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: $codeInput.data('error'),
          icon: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            html: response.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;

    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();

      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: $certInput.data('error'),
          icon: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            html: resp.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);

        _this9.bindGiftWrappingForm();
      });
    });
  };

  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');

      if (!id) {
        return;
      }

      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();

      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');

    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');

      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }

    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };

  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents(); // initiate shipping estimator module

    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_5__["default"]($('[data-shipping-estimator]'));
  };

  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");







var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.isEstimatorFormOpened = false;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }

  var _proto = ShippingEstimator.prototype;

  _proto.initFormValidation = function initFormValidation() {
    var _this = this;

    var shippingEstimatorAlert = $('.shipping-quotes');
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__["announceInputErrorMessage"]
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // estimator error messages are being injected in html as a result
      // of user submit; clearing and adding role on submit provides
      // regular announcement of these error messages
      if (shippingEstimatorAlert.attr('role')) {
        shippingEstimatorAlert.removeAttr('role');
      }

      shippingEstimatorAlert.attr('role', 'alert'); // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity

      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }

      if (_this.shippingValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };

  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };

  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;

    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");

        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }

        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }
  /**
   * Toggle between default shipping and ups shipping rates
   */
  ;

  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };

  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;

    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: err,
          icon: 'error'
        });
        throw new Error(err);
      }

      var $field = $(field);

      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }

      if ($last) {
        _this3.shippingValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;

        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__["Validators"].cleanUpStateValidation(field);
      } // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us


      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };

  _proto.toggleEstimatorFormState = function toggleEstimatorFormState(toggleButton, buttonSelector, $toggleContainer) {
    var changeAttributesOnToggle = function changeAttributesOnToggle(selectorToActivate) {
      $(toggleButton).attr('aria-labelledby', selectorToActivate);
      $(buttonSelector).text($("#" + selectorToActivate).text());
    };

    if (!this.isEstimatorFormOpened) {
      changeAttributesOnToggle('estimator-close');
      $toggleContainer.removeClass('u-hidden');
    } else {
      changeAttributesOnToggle('estimator-add');
      $toggleContainer.addClass('u-hidden');
    }

    this.isEstimatorFormOpened = !this.isEstimatorFormOpened;
  };

  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var _this4 = this;

    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content); // bind the select button

        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();

      _this4.toggleEstimatorFormState(event.currentTarget, '.shipping-estimate-show__btn-name', $estimatorContainer);
    });
  };

  return ShippingEstimator;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/cart-item-details.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartItemDetails; });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");


function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);

  function CartItemDetails($scope, context, productAttributesData) {
    var _this;

    if (productAttributesData === void 0) {
      productAttributesData = {};
    }

    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__["optionChangeDecorator"].call(_assertThisInitialized(_this), hasDefaultOptions); // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view

    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }

    return _this;
  }

  var _proto = CartItemDetails.prototype;

  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');

      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }

      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }

      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });

        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }

      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;

        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }

      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');

        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = Object(_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__["convertIntoArray"])(value.children);

            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };

            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };

          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__["isBrowserIE"] ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;

            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }

          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__["isBrowserIE"] ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];

            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }

          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }

          return;
        }

        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.modal-header-title');

    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;

      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }
  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */
  ;

  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);

    this.$scope.find('.modal-content').removeClass('hide-content');
  };

  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  } // Add any custom gift certificate validation logic here


  return true;
});

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");






/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */

function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');

  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }

  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }

  return $newElement;
}
/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */


function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');

  if ($newElement.length !== 0) {
    Object(_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__["insertStateHiddenField"])($newElement);
    $newElement.prev().find('small').hide();
  }

  return $newElement;
}
/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */


function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + stateObj.name + "</option>");
      }
    });

    $selectElement.html(container.join(' '));
  }
}
/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */


/* harmony default export */ __webpack_exports__["default"] = (function (stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }

  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();

    if (countryName === '') {
      return;
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["showAlertModal"])(context.state_error);
        return callback(err);
      }

      var $currentInput = $('[data-field-type="State"]');

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vc3RhdGUtY291bnRyeS5qcyJdLCJuYW1lcyI6WyJDYXJ0Iiwib25SZWFkeSIsIiRtb2RhbCIsIiRjYXJ0Q29udGVudCIsIiQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkb3ZlcmxheSIsImhpZGUiLCIkYWN0aXZlQ2FydEl0ZW1JZCIsIiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiIsImJpbmRFdmVudHMiLCJjYXJ0VXBkYXRlIiwiJHRhcmdldCIsIml0ZW1JZCIsImRhdGEiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvdyIsInV0aWxzIiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZSIsInJlZnJlc2hDb250ZW50IiwiZXJyb3JzIiwiam9pbiIsImNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlIiwicHJlVmFsIiwiTnVtYmVyIiwiaW52YWxpZEVudHJ5IiwiY2FydFJlbW92ZUl0ZW0iLCJpdGVtUmVtb3ZlIiwiY2FydEVkaXRPcHRpb25zIiwicHJvZHVjdElkIiwiY29udGV4dCIsInByb2R1Y3RGb3JDaGFuZ2VJZCIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwib3B0aW9ucyIsInRlbXBsYXRlIiwib3BlbiIsImZpbmQiLCJhZGRDbGFzcyIsInByb2R1Y3RBdHRyaWJ1dGVzIiwiY29uZmlndXJlSW5DYXJ0IiwidXBkYXRlQ29udGVudCIsImNvbnRlbnQiLCIkcHJvZHVjdE9wdGlvbnNDb250YWluZXIiLCJtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCIsIm91dGVySGVpZ2h0IiwiY3NzIiwicHJvZHVjdERldGFpbHMiLCJDYXJ0SXRlbURldGFpbHMiLCJiaW5kR2lmdFdyYXBwaW5nRm9ybSIsInNldHVwRm9jdXNUcmFwIiwiaG9va3MiLCJvbiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIiRmb3JtIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94Iiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwicmVzdWx0IiwicHVyY2hhc2luZ19tZXNzYWdlIiwicHJvcCIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsIiRjYXJ0SXRlbXNSb3dzIiwiJGNhcnRQYWdlVGl0bGUiLCJ0b3RhbHMiLCJwYWdlVGl0bGUiLCJzdGF0dXNNZXNzYWdlcyIsImxlbmd0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0Q29udGVudCIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInF1YW50aXR5IiwidHJpZ2dlciIsImZpbHRlciIsImJpbmRDYXJ0RXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJldmVudERlZmF1bHQiLCJvblF0eUZvY3VzIiwidmFsdWUiLCJjaGFuZ2UiLCJzdHJpbmciLCJzaG93Q2FuY2VsQnV0dG9uIiwidGhlbiIsImJpbmRQcm9tb0NvZGVFdmVudHMiLCIkY291cG9uQ29udGFpbmVyIiwiJGNvdXBvbkZvcm0iLCIkY29kZUlucHV0IiwiY29kZSIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJnaWZ0Q2VydENoZWNrIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsImdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zIiwiJHNlbGVjdCIsImlkIiwiaW5kZXgiLCJhbGxvd01lc3NhZ2UiLCJ0b2dnbGVWaWV3cyIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsInNoaXBwaW5nRXN0aW1hdG9yIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJQYWdlTWFuYWdlciIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaXNFc3RpbWF0b3JGb3JtT3BlbmVkIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ0VzdGltYXRvckFsZXJ0Iiwic2hpcHBpbmdWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJ0YXAiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiYXR0ciIsInJlbW92ZUF0dHIiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJpc05hTiIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwidXNlSWRGb3JTdGF0ZXMiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiaXMiLCJWYWxpZGF0b3JzIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInJlbW92ZUNsYXNzIiwidG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlIiwidG9nZ2xlQnV0dG9uIiwiYnV0dG9uU2VsZWN0b3IiLCIkdG9nZ2xlQ29udGFpbmVyIiwiY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlIiwic2VsZWN0b3JUb0FjdGl2YXRlIiwiJGVzdGltYXRvckNvbnRhaW5lciIsIiRlc3RpbWF0b3JGb3JtIiwiY29sbGFwc2libGVGYWN0b3J5IiwicGFyYW1zIiwiY291bnRyeV9pZCIsInN0YXRlX2lkIiwiY2l0eSIsInppcF9jb2RlIiwiZ2V0U2hpcHBpbmdRdW90ZXMiLCJjbGlja0V2ZW50IiwicXVvdGVJZCIsInN1Ym1pdFNoaXBwaW5nUXVvdGUiLCIkc2NvcGUiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsInRyaW0iLCJoYXNEZWZhdWx0T3B0aW9ucyIsInNldFByb2R1Y3RWYXJpYW50Iiwib3B0aW9uQ2hhbmdlQ2FsbGJhY2siLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJjYWxsIiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwiZWFjaCIsIm9wdGlvbkxhYmVsIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiLCJvcHRpb25UaXRsZSIsInNwbGl0IiwicmVxdWlyZWQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidHlwZSIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJwdXNoIiwiaXNTYXRpc2ZpZWQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlcnkiLCJzZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZGF0ZVN0cmluZyIsIm1hcCIsIngiLCJjaGVja2VkIiwiZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCIsInByb2R1Y3RWYXJpYW50c2xpc3QiLCJjb252ZXJ0SW50b0FycmF5IiwibWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCIsImlucHQiLCJkYXRhc2V0IiwicHJvZHVjdEF0dHJpYnV0ZVZhbHVlIiwibGFiZWwiLCJpc0Jyb3dzZXJJRSIsImxhYmVscyIsInRpdGxlIiwicHJvZHVjdFZhcmlhbnQiLCJzb3J0IiwidmlldyIsInByb2R1Y3ROYW1lIiwibWF0Y2giLCJjYXJkIiwiUHJvZHVjdERldGFpbHNCYXNlIiwiY2VydCIsIm1ha2VTdGF0ZVJlcXVpcmVkIiwic3RhdGVFbGVtZW50IiwiYXR0cnMiLCJpdGVtIiwicmV0IiwibmFtZSIsInJlcGxhY2VtZW50QXR0cmlidXRlcyIsIiRuZXdFbGVtZW50IiwiJGhpZGRlbklucHV0IiwicHJldiIsImFwcGVuZCIsIm1ha2VTdGF0ZU9wdGlvbmFsIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50IiwiY29udGFpbmVyIiwicHJlZml4Iiwic3RhdGVzIiwic3RhdGVPYmoiLCJjYWxsYmFjayIsImNvdW50cnlOYW1lIiwiY291bnRyeSIsImdldEJ5TmFtZSIsInNob3dBbGVydE1vZGFsIiwic3RhdGVfZXJyb3IiLCIkY3VycmVudElucHV0IiwibmV3RWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxJOzs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtJQUNOLEtBQUtDLE1BQUwsR0FBYyxJQUFkO0lBQ0EsS0FBS0MsWUFBTCxHQUFvQkMsQ0FBQyxDQUFDLHFCQUFELENBQXJCO0lBQ0EsS0FBS0MsYUFBTCxHQUFxQkQsQ0FBQyxDQUFDLG9CQUFELENBQXRCO0lBQ0EsS0FBS0UsV0FBTCxHQUFtQkYsQ0FBQyxDQUFDLG9CQUFELENBQXBCO0lBQ0EsS0FBS0csUUFBTCxHQUFnQkgsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FDWEksSUFEVyxFQUFoQixDQUxNLENBTU87O0lBQ2IsS0FBS0MsaUJBQUwsR0FBeUIsSUFBekI7SUFDQSxLQUFLQyx3QkFBTCxHQUFnQyxJQUFoQztJQUVBLEtBQUtDLFVBQUw7RUFDSCxDOztTQUVEQyxVLEdBQUEsb0JBQVdDLE9BQVgsRUFBb0I7SUFBQTs7SUFDaEIsSUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLElBQVIsQ0FBYSxZQUFiLENBQWY7SUFDQSxLQUFLTixpQkFBTCxHQUF5QkssTUFBekI7SUFDQSxLQUFLSix3QkFBTCxHQUFnQ0csT0FBTyxDQUFDRSxJQUFSLENBQWEsUUFBYixDQUFoQztJQUVBLElBQU1DLEdBQUcsR0FBR1osQ0FBQyxXQUFTVSxNQUFULENBQWI7SUFDQSxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0YsR0FBRyxDQUFDRyxHQUFKLEVBQUQsRUFBWSxFQUFaLENBQXZCO0lBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNGLEdBQUcsQ0FBQ0QsSUFBSixDQUFTLGFBQVQsQ0FBRCxFQUEwQixFQUExQixDQUF2QjtJQUNBLElBQU1NLE1BQU0sR0FBR0gsUUFBUSxDQUFDRixHQUFHLENBQUNELElBQUosQ0FBUyxhQUFULENBQUQsRUFBMEIsRUFBMUIsQ0FBdkI7SUFDQSxJQUFNTyxRQUFRLEdBQUdOLEdBQUcsQ0FBQ0QsSUFBSixDQUFTLGtCQUFULENBQWpCO0lBQ0EsSUFBTVEsUUFBUSxHQUFHUCxHQUFHLENBQUNELElBQUosQ0FBUyxrQkFBVCxDQUFqQjtJQUNBLElBQU1TLE1BQU0sR0FBR1gsT0FBTyxDQUFDRSxJQUFSLENBQWEsUUFBYixNQUEyQixLQUEzQixHQUFtQ0UsTUFBTSxHQUFHLENBQTVDLEdBQWdEQSxNQUFNLEdBQUcsQ0FBeEUsQ0FYZ0IsQ0FZaEI7O0lBQ0EsSUFBSU8sTUFBTSxHQUFHSCxNQUFiLEVBQXFCO01BQ2pCLE9BQU9JLDJEQUFJLENBQUNDLElBQUwsQ0FBVTtRQUNiQyxJQUFJLEVBQUVMLFFBRE87UUFFYk0sSUFBSSxFQUFFO01BRk8sQ0FBVixDQUFQO0lBSUgsQ0FMRCxNQUtPLElBQUlSLE1BQU0sR0FBRyxDQUFULElBQWNJLE1BQU0sR0FBR0osTUFBM0IsRUFBbUM7TUFDdEMsT0FBT0ssMkRBQUksQ0FBQ0MsSUFBTCxDQUFVO1FBQ2JDLElBQUksRUFBRUosUUFETztRQUViSyxJQUFJLEVBQUU7TUFGTyxDQUFWLENBQVA7SUFJSDs7SUFFRCxLQUFLckIsUUFBTCxDQUFjc0IsSUFBZDtJQUVBQyxrRUFBSyxDQUFDQyxHQUFOLENBQVVDLElBQVYsQ0FBZUMsVUFBZixDQUEwQm5CLE1BQTFCLEVBQWtDVSxNQUFsQyxFQUEwQyxVQUFDVSxHQUFELEVBQU1DLFFBQU4sRUFBbUI7TUFDekQsS0FBSSxDQUFDNUIsUUFBTCxDQUFjQyxJQUFkOztNQUVBLElBQUkyQixRQUFRLENBQUNwQixJQUFULENBQWNxQixNQUFkLEtBQXlCLFNBQTdCLEVBQXdDO1FBQ3BDO1FBQ0EsSUFBTUMsTUFBTSxHQUFJYixNQUFNLEtBQUssQ0FBM0I7O1FBRUEsS0FBSSxDQUFDYyxjQUFMLENBQW9CRCxNQUFwQjtNQUNILENBTEQsTUFLTztRQUNIckIsR0FBRyxDQUFDRyxHQUFKLENBQVFGLE1BQVI7UUFDQVEsMkRBQUksQ0FBQ0MsSUFBTCxDQUFVO1VBQ05DLElBQUksRUFBRVEsUUFBUSxDQUFDcEIsSUFBVCxDQUFjd0IsTUFBZCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FEQTtVQUVOWixJQUFJLEVBQUU7UUFGQSxDQUFWO01BSUg7SUFDSixDQWZEO0VBZ0JILEM7O1NBRURhLHVCLEdBQUEsaUNBQXdCNUIsT0FBeEIsRUFBaUM2QixNQUFqQyxFQUFnRDtJQUFBOztJQUFBLElBQWZBLE1BQWU7TUFBZkEsTUFBZSxHQUFOLElBQU07SUFBQTs7SUFDNUMsSUFBTTVCLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxJQUFSLENBQWEsWUFBYixDQUFmO0lBQ0EsSUFBTUMsR0FBRyxHQUFHWixDQUFDLFdBQVNVLE1BQVQsQ0FBYjtJQUNBLElBQU1NLE1BQU0sR0FBR0YsUUFBUSxDQUFDRixHQUFHLENBQUNELElBQUosQ0FBUyxhQUFULENBQUQsRUFBMEIsRUFBMUIsQ0FBdkI7SUFDQSxJQUFNTSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0YsR0FBRyxDQUFDRCxJQUFKLENBQVMsYUFBVCxDQUFELEVBQTBCLEVBQTFCLENBQXZCO0lBQ0EsSUFBTUUsTUFBTSxHQUFHeUIsTUFBTSxLQUFLLElBQVgsR0FBa0JBLE1BQWxCLEdBQTJCckIsTUFBMUM7SUFDQSxJQUFNQyxRQUFRLEdBQUdOLEdBQUcsQ0FBQ0QsSUFBSixDQUFTLGtCQUFULENBQWpCO0lBQ0EsSUFBTVEsUUFBUSxHQUFHUCxHQUFHLENBQUNELElBQUosQ0FBUyxrQkFBVCxDQUFqQjtJQUNBLElBQU1TLE1BQU0sR0FBR04sUUFBUSxDQUFDeUIsTUFBTSxDQUFDM0IsR0FBRyxDQUFDRyxHQUFKLEVBQUQsQ0FBUCxFQUFvQixFQUFwQixDQUF2QjtJQUNBLElBQUl5QixZQUFKLENBVDRDLENBVzVDOztJQUNBLElBQUksQ0FBQ3BCLE1BQUwsRUFBYTtNQUNUb0IsWUFBWSxHQUFHNUIsR0FBRyxDQUFDRyxHQUFKLEVBQWY7TUFDQUgsR0FBRyxDQUFDRyxHQUFKLENBQVFGLE1BQVI7TUFDQSxPQUFPUSwyREFBSSxDQUFDQyxJQUFMLENBQVU7UUFDYkMsSUFBSSxFQUFLaUIsWUFBTCwwQkFEUztRQUViaEIsSUFBSSxFQUFFO01BRk8sQ0FBVixDQUFQO0lBSUgsQ0FQRCxNQU9PLElBQUlKLE1BQU0sR0FBR0gsTUFBYixFQUFxQjtNQUN4QkwsR0FBRyxDQUFDRyxHQUFKLENBQVFGLE1BQVI7TUFDQSxPQUFPUSwyREFBSSxDQUFDQyxJQUFMLENBQVU7UUFDYkMsSUFBSSxFQUFFTCxRQURPO1FBRWJNLElBQUksRUFBRTtNQUZPLENBQVYsQ0FBUDtJQUlILENBTk0sTUFNQSxJQUFJUixNQUFNLEdBQUcsQ0FBVCxJQUFjSSxNQUFNLEdBQUdKLE1BQTNCLEVBQW1DO01BQ3RDSixHQUFHLENBQUNHLEdBQUosQ0FBUUYsTUFBUjtNQUNBLE9BQU9RLDJEQUFJLENBQUNDLElBQUwsQ0FBVTtRQUNiQyxJQUFJLEVBQUVKLFFBRE87UUFFYkssSUFBSSxFQUFFO01BRk8sQ0FBVixDQUFQO0lBSUg7O0lBRUQsS0FBS3JCLFFBQUwsQ0FBY3NCLElBQWQ7SUFDQUMsa0VBQUssQ0FBQ0MsR0FBTixDQUFVQyxJQUFWLENBQWVDLFVBQWYsQ0FBMEJuQixNQUExQixFQUFrQ1UsTUFBbEMsRUFBMEMsVUFBQ1UsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO01BQ3pELE1BQUksQ0FBQzVCLFFBQUwsQ0FBY0MsSUFBZDs7TUFFQSxJQUFJMkIsUUFBUSxDQUFDcEIsSUFBVCxDQUFjcUIsTUFBZCxLQUF5QixTQUE3QixFQUF3QztRQUNwQztRQUNBLElBQU1DLE1BQU0sR0FBSWIsTUFBTSxLQUFLLENBQTNCOztRQUVBLE1BQUksQ0FBQ2MsY0FBTCxDQUFvQkQsTUFBcEI7TUFDSCxDQUxELE1BS087UUFDSHJCLEdBQUcsQ0FBQ0csR0FBSixDQUFRRixNQUFSO1FBQ0FRLDJEQUFJLENBQUNDLElBQUwsQ0FBVTtVQUNOQyxJQUFJLEVBQUVRLFFBQVEsQ0FBQ3BCLElBQVQsQ0FBY3dCLE1BQWQsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBREE7VUFFTlosSUFBSSxFQUFFO1FBRkEsQ0FBVjtNQUlIO0lBQ0osQ0FmRDtFQWdCSCxDOztTQUVEaUIsYyxHQUFBLHdCQUFlL0IsTUFBZixFQUF1QjtJQUFBOztJQUNuQixLQUFLUCxRQUFMLENBQWNzQixJQUFkO0lBQ0FDLGtFQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBVixDQUFlYyxVQUFmLENBQTBCaEMsTUFBMUIsRUFBa0MsVUFBQ29CLEdBQUQsRUFBTUMsUUFBTixFQUFtQjtNQUNqRCxJQUFJQSxRQUFRLENBQUNwQixJQUFULENBQWNxQixNQUFkLEtBQXlCLFNBQTdCLEVBQXdDO1FBQ3BDLE1BQUksQ0FBQ0UsY0FBTCxDQUFvQixJQUFwQjtNQUNILENBRkQsTUFFTztRQUNIYiwyREFBSSxDQUFDQyxJQUFMLENBQVU7VUFDTkMsSUFBSSxFQUFFUSxRQUFRLENBQUNwQixJQUFULENBQWN3QixNQUFkLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQURBO1VBRU5aLElBQUksRUFBRTtRQUZBLENBQVY7TUFJSDtJQUNKLENBVEQ7RUFVSCxDOztTQUVEbUIsZSxHQUFBLHlCQUFnQmpDLE1BQWhCLEVBQXdCa0MsU0FBeEIsRUFBbUM7SUFBQTs7SUFDL0IsSUFBTUMsT0FBTztNQUFLQyxrQkFBa0IsRUFBRUY7SUFBekIsR0FBdUMsS0FBS0MsT0FBNUMsQ0FBYjtJQUNBLElBQU1FLEtBQUssR0FBR0Msa0VBQVksRUFBMUI7O0lBRUEsSUFBSSxLQUFLbEQsTUFBTCxLQUFnQixJQUFwQixFQUEwQjtNQUN0QixLQUFLQSxNQUFMLEdBQWNFLENBQUMsQ0FBQyxRQUFELENBQWY7SUFDSDs7SUFFRCxJQUFNaUQsT0FBTyxHQUFHO01BQ1pDLFFBQVEsRUFBRTtJQURFLENBQWhCO0lBSUFILEtBQUssQ0FBQ0ksSUFBTjtJQUNBLEtBQUtyRCxNQUFMLENBQVlzRCxJQUFaLENBQWlCLGdCQUFqQixFQUFtQ0MsUUFBbkMsQ0FBNEMsY0FBNUM7SUFFQTNCLGtFQUFLLENBQUNDLEdBQU4sQ0FBVTJCLGlCQUFWLENBQTRCQyxlQUE1QixDQUE0QzdDLE1BQTVDLEVBQW9EdUMsT0FBcEQsRUFBNkQsVUFBQ25CLEdBQUQsRUFBTUMsUUFBTixFQUFtQjtNQUM1RWdCLEtBQUssQ0FBQ1MsYUFBTixDQUFvQnpCLFFBQVEsQ0FBQzBCLE9BQTdCO01BQ0EsSUFBTUMsd0JBQXdCLEdBQUcxRCxDQUFDLENBQUMsbUNBQUQsRUFBc0MsTUFBSSxDQUFDRixNQUEzQyxDQUFsQztNQUNBLElBQU02RCx1QkFBdUIsR0FBR0Qsd0JBQXdCLENBQUNFLFdBQXpCLEVBQWhDO01BQ0FGLHdCQUF3QixDQUFDRyxHQUF6QixDQUE2QixRQUE3QixFQUF1Q0YsdUJBQXZDO01BRUEsTUFBSSxDQUFDRyxjQUFMLEdBQXNCLElBQUlDLGlFQUFKLENBQW9CLE1BQUksQ0FBQ2pFLE1BQXpCLEVBQWlDK0MsT0FBakMsQ0FBdEI7O01BRUEsTUFBSSxDQUFDbUIsb0JBQUw7O01BRUFqQixLQUFLLENBQUNrQixjQUFOO0lBQ0gsQ0FYRDtJQWFBdkMsa0VBQUssQ0FBQ3dDLEtBQU4sQ0FBWUMsRUFBWixDQUFlLHVCQUFmLEVBQXdDLFVBQUNDLEtBQUQsRUFBUUMsYUFBUixFQUEwQjtNQUM5RCxJQUFNQyxLQUFLLEdBQUd0RSxDQUFDLENBQUNxRSxhQUFELENBQUQsQ0FBaUJqQixJQUFqQixDQUFzQixNQUF0QixDQUFkO01BQ0EsSUFBTW1CLE9BQU8sR0FBR3ZFLENBQUMsQ0FBQyxjQUFELEVBQWlCc0UsS0FBakIsQ0FBakI7TUFDQSxJQUFNRSxXQUFXLEdBQUd4RSxDQUFDLENBQUMsa0JBQUQsQ0FBckI7TUFFQTBCLGtFQUFLLENBQUNDLEdBQU4sQ0FBVTJCLGlCQUFWLENBQTRCbUIsWUFBNUIsQ0FBeUM3QixTQUF6QyxFQUFvRDBCLEtBQUssQ0FBQ0ksU0FBTixFQUFwRCxFQUF1RSxVQUFDNUMsR0FBRCxFQUFNNkMsTUFBTixFQUFpQjtRQUNwRixJQUFNaEUsSUFBSSxHQUFHZ0UsTUFBTSxDQUFDaEUsSUFBUCxJQUFlLEVBQTVCOztRQUVBLElBQUltQixHQUFKLEVBQVM7VUFDTFQsMkRBQUksQ0FBQ0MsSUFBTCxDQUFVO1lBQ05DLElBQUksRUFBRU8sR0FEQTtZQUVOTixJQUFJLEVBQUU7VUFGQSxDQUFWO1VBSUEsT0FBTyxLQUFQO1FBQ0g7O1FBRUQsSUFBSWIsSUFBSSxDQUFDaUUsa0JBQVQsRUFBNkI7VUFDekI1RSxDQUFDLENBQUMsb0JBQUQsRUFBdUJ3RSxXQUF2QixDQUFELENBQXFDakQsSUFBckMsQ0FBMENaLElBQUksQ0FBQ2lFLGtCQUEvQztVQUNBTCxPQUFPLENBQUNNLElBQVIsQ0FBYSxVQUFiLEVBQXlCLElBQXpCO1VBQ0FMLFdBQVcsQ0FBQy9DLElBQVo7UUFDSCxDQUpELE1BSU87VUFDSDhDLE9BQU8sQ0FBQ00sSUFBUixDQUFhLFVBQWIsRUFBeUIsS0FBekI7VUFDQUwsV0FBVyxDQUFDcEUsSUFBWjtRQUNIOztRQUVELElBQUksQ0FBQ08sSUFBSSxDQUFDbUUsV0FBTixJQUFxQixDQUFDbkUsSUFBSSxDQUFDb0UsT0FBL0IsRUFBd0M7VUFDcENSLE9BQU8sQ0FBQ00sSUFBUixDQUFhLFVBQWIsRUFBeUIsSUFBekI7UUFDSCxDQUZELE1BRU87VUFDSE4sT0FBTyxDQUFDTSxJQUFSLENBQWEsVUFBYixFQUF5QixLQUF6QjtRQUNIO01BQ0osQ0F6QkQ7SUEwQkgsQ0EvQkQ7RUFnQ0gsQzs7U0FFRDNDLGMsR0FBQSx3QkFBZUQsTUFBZixFQUF1QjtJQUFBOztJQUNuQixJQUFNK0MsY0FBYyxHQUFHaEYsQ0FBQyxDQUFDLGlCQUFELEVBQW9CLEtBQUtELFlBQXpCLENBQXhCO0lBQ0EsSUFBTWtGLGNBQWMsR0FBR2pGLENBQUMsQ0FBQyx3QkFBRCxDQUF4QjtJQUNBLElBQU1pRCxPQUFPLEdBQUc7TUFDWkMsUUFBUSxFQUFFO1FBQ05PLE9BQU8sRUFBRSxjQURIO1FBRU55QixNQUFNLEVBQUUsYUFGRjtRQUdOQyxTQUFTLEVBQUUsaUJBSEw7UUFJTkMsY0FBYyxFQUFFO01BSlY7SUFERSxDQUFoQjtJQVNBLEtBQUtqRixRQUFMLENBQWNzQixJQUFkLEdBWm1CLENBY25COztJQUNBLElBQUlRLE1BQU0sSUFBSStDLGNBQWMsQ0FBQ0ssTUFBZixLQUEwQixDQUF4QyxFQUEyQztNQUN2QyxPQUFPQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQVA7SUFDSDs7SUFFRDlELGtFQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBVixDQUFlNkQsVUFBZixDQUEwQnhDLE9BQTFCLEVBQW1DLFVBQUNuQixHQUFELEVBQU1DLFFBQU4sRUFBbUI7TUFDbEQsTUFBSSxDQUFDaEMsWUFBTCxDQUFrQjJGLElBQWxCLENBQXVCM0QsUUFBUSxDQUFDMEIsT0FBaEM7O01BQ0EsTUFBSSxDQUFDdkQsV0FBTCxDQUFpQndGLElBQWpCLENBQXNCM0QsUUFBUSxDQUFDbUQsTUFBL0I7O01BQ0EsTUFBSSxDQUFDakYsYUFBTCxDQUFtQnlGLElBQW5CLENBQXdCM0QsUUFBUSxDQUFDcUQsY0FBakM7O01BRUFILGNBQWMsQ0FBQ1UsV0FBZixDQUEyQjVELFFBQVEsQ0FBQ29ELFNBQXBDOztNQUNBLE1BQUksQ0FBQzVFLFVBQUw7O01BQ0EsTUFBSSxDQUFDSixRQUFMLENBQWNDLElBQWQ7O01BRUEsSUFBTXdGLFFBQVEsR0FBRzVGLENBQUMsQ0FBQyxzQkFBRCxFQUF5QixNQUFJLENBQUNELFlBQTlCLENBQUQsQ0FBNkNZLElBQTdDLENBQWtELGNBQWxELEtBQXFFLENBQXRGO01BRUFYLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTZGLE9BQVYsQ0FBa0Isc0JBQWxCLEVBQTBDRCxRQUExQztNQUVBNUYsQ0FBQyx5QkFBdUIsTUFBSSxDQUFDSyxpQkFBNUIsU0FBbUQsTUFBSSxDQUFDTixZQUF4RCxDQUFELENBQ0srRixNQURMLG9CQUM2QixNQUFJLENBQUN4Rix3QkFEbEMsU0FFS3VGLE9BRkwsQ0FFYSxPQUZiO0lBR0gsQ0FoQkQ7RUFpQkgsQzs7U0FFREUsYyxHQUFBLDBCQUFpQjtJQUFBOztJQUNiLElBQU1DLGVBQWUsR0FBRyxHQUF4Qjs7SUFDQSxJQUFNeEYsVUFBVSxHQUFHLG1EQUFLLHVEQUFTLEtBQUtBLFVBQWQsRUFBMEJ3RixlQUExQixDQUFMLEVBQWlELElBQWpELENBQW5COztJQUNBLElBQU0zRCx1QkFBdUIsR0FBRyxtREFBSyx1REFBUyxLQUFLQSx1QkFBZCxFQUF1QzJELGVBQXZDLENBQUwsRUFBOEQsSUFBOUQsQ0FBaEM7O0lBQ0EsSUFBTXZELGNBQWMsR0FBRyxtREFBSyx1REFBUyxLQUFLQSxjQUFkLEVBQThCdUQsZUFBOUIsQ0FBTCxFQUFxRCxJQUFyRCxDQUF2Qjs7SUFDQSxJQUFJMUQsTUFBSixDQUxhLENBT2I7O0lBQ0F0QyxDQUFDLENBQUMsb0JBQUQsRUFBdUIsS0FBS0QsWUFBNUIsQ0FBRCxDQUEyQ29FLEVBQTNDLENBQThDLE9BQTlDLEVBQXVELFVBQUFDLEtBQUssRUFBSTtNQUM1RCxJQUFNM0QsT0FBTyxHQUFHVCxDQUFDLENBQUNvRSxLQUFLLENBQUNDLGFBQVAsQ0FBakI7TUFFQUQsS0FBSyxDQUFDNkIsY0FBTixHQUg0RCxDQUs1RDs7TUFDQXpGLFVBQVUsQ0FBQ0MsT0FBRCxDQUFWO0lBQ0gsQ0FQRCxFQVJhLENBaUJiOztJQUNBVCxDQUFDLENBQUMsc0JBQUQsRUFBeUIsS0FBS0QsWUFBOUIsQ0FBRCxDQUE2Q29FLEVBQTdDLENBQWdELE9BQWhELEVBQXlELFNBQVMrQixVQUFULEdBQXNCO01BQzNFNUQsTUFBTSxHQUFHLEtBQUs2RCxLQUFkO0lBQ0gsQ0FGRCxFQUVHQyxNQUZILENBRVUsVUFBQWhDLEtBQUssRUFBSTtNQUNmLElBQU0zRCxPQUFPLEdBQUdULENBQUMsQ0FBQ29FLEtBQUssQ0FBQ0MsYUFBUCxDQUFqQjtNQUNBRCxLQUFLLENBQUM2QixjQUFOLEdBRmUsQ0FJZjs7TUFDQTVELHVCQUF1QixDQUFDNUIsT0FBRCxFQUFVNkIsTUFBVixDQUF2QjtJQUNILENBUkQ7SUFVQXRDLENBQUMsQ0FBQyxjQUFELEVBQWlCLEtBQUtELFlBQXRCLENBQUQsQ0FBcUNvRSxFQUFyQyxDQUF3QyxPQUF4QyxFQUFpRCxVQUFBQyxLQUFLLEVBQUk7TUFDdEQsSUFBTTFELE1BQU0sR0FBR1YsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDQyxhQUFQLENBQUQsQ0FBdUIxRCxJQUF2QixDQUE0QixZQUE1QixDQUFmO01BQ0EsSUFBTTBGLE1BQU0sR0FBR3JHLENBQUMsQ0FBQ29FLEtBQUssQ0FBQ0MsYUFBUCxDQUFELENBQXVCMUQsSUFBdkIsQ0FBNEIsZUFBNUIsQ0FBZjtNQUNBVSwyREFBSSxDQUFDQyxJQUFMLENBQVU7UUFDTkMsSUFBSSxFQUFFOEUsTUFEQTtRQUVON0UsSUFBSSxFQUFFLFNBRkE7UUFHTjhFLGdCQUFnQixFQUFFO01BSFosQ0FBVixFQUlHQyxJQUpILENBSVEsVUFBQzVCLE1BQUQsRUFBWTtRQUNoQixJQUFJQSxNQUFNLENBQUN3QixLQUFYLEVBQWtCO1VBQ2Q7VUFDQTFELGNBQWMsQ0FBQy9CLE1BQUQsQ0FBZDtRQUNIO01BQ0osQ0FURDtNQVVBMEQsS0FBSyxDQUFDNkIsY0FBTjtJQUNILENBZEQ7SUFnQkFqRyxDQUFDLENBQUMsa0JBQUQsRUFBcUIsS0FBS0QsWUFBMUIsQ0FBRCxDQUF5Q29FLEVBQXpDLENBQTRDLE9BQTVDLEVBQXFELFVBQUFDLEtBQUssRUFBSTtNQUMxRCxJQUFNMUQsTUFBTSxHQUFHVixDQUFDLENBQUNvRSxLQUFLLENBQUNDLGFBQVAsQ0FBRCxDQUF1QjFELElBQXZCLENBQTRCLFVBQTVCLENBQWY7TUFDQSxJQUFNaUMsU0FBUyxHQUFHNUMsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDQyxhQUFQLENBQUQsQ0FBdUIxRCxJQUF2QixDQUE0QixXQUE1QixDQUFsQjtNQUNBeUQsS0FBSyxDQUFDNkIsY0FBTixHQUgwRCxDQUkxRDs7TUFDQSxNQUFJLENBQUN0RCxlQUFMLENBQXFCakMsTUFBckIsRUFBNkJrQyxTQUE3QjtJQUNILENBTkQ7RUFPSCxDOztTQUVENEQsbUIsR0FBQSwrQkFBc0I7SUFBQTs7SUFDbEIsSUFBTUMsZ0JBQWdCLEdBQUd6RyxDQUFDLENBQUMsY0FBRCxDQUExQjtJQUNBLElBQU0wRyxXQUFXLEdBQUcxRyxDQUFDLENBQUMsY0FBRCxDQUFyQjtJQUNBLElBQU0yRyxVQUFVLEdBQUczRyxDQUFDLENBQUMscUJBQUQsRUFBd0IwRyxXQUF4QixDQUFwQjtJQUVBMUcsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JtRSxFQUF0QixDQUF5QixPQUF6QixFQUFrQyxVQUFBQyxLQUFLLEVBQUk7TUFDdkNBLEtBQUssQ0FBQzZCLGNBQU47TUFFQWpHLENBQUMsQ0FBQ29FLEtBQUssQ0FBQ0MsYUFBUCxDQUFELENBQXVCakUsSUFBdkI7TUFDQXFHLGdCQUFnQixDQUFDaEYsSUFBakI7TUFDQXpCLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCeUIsSUFBekI7TUFDQWtGLFVBQVUsQ0FBQ2QsT0FBWCxDQUFtQixPQUFuQjtJQUNILENBUEQ7SUFTQTdGLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCbUUsRUFBekIsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQUMsS0FBSyxFQUFJO01BQzFDQSxLQUFLLENBQUM2QixjQUFOO01BRUFRLGdCQUFnQixDQUFDckcsSUFBakI7TUFDQUosQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJJLElBQXpCO01BQ0FKLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCeUIsSUFBdEI7SUFDSCxDQU5EO0lBUUFpRixXQUFXLENBQUN2QyxFQUFaLENBQWUsUUFBZixFQUF5QixVQUFBQyxLQUFLLEVBQUk7TUFDOUIsSUFBTXdDLElBQUksR0FBR0QsVUFBVSxDQUFDNUYsR0FBWCxFQUFiO01BRUFxRCxLQUFLLENBQUM2QixjQUFOLEdBSDhCLENBSzlCOztNQUNBLElBQUksQ0FBQ1csSUFBTCxFQUFXO1FBQ1AsT0FBT3ZGLDJEQUFJLENBQUNDLElBQUwsQ0FBVTtVQUNiQyxJQUFJLEVBQUVvRixVQUFVLENBQUNoRyxJQUFYLENBQWdCLE9BQWhCLENBRE87VUFFYmEsSUFBSSxFQUFFO1FBRk8sQ0FBVixDQUFQO01BSUg7O01BRURFLGtFQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBVixDQUFlaUYsU0FBZixDQUF5QkQsSUFBekIsRUFBK0IsVUFBQzlFLEdBQUQsRUFBTUMsUUFBTixFQUFtQjtRQUM5QyxJQUFJQSxRQUFRLENBQUNwQixJQUFULENBQWNxQixNQUFkLEtBQXlCLFNBQTdCLEVBQXdDO1VBQ3BDLE1BQUksQ0FBQ0UsY0FBTDtRQUNILENBRkQsTUFFTztVQUNIYiwyREFBSSxDQUFDQyxJQUFMLENBQVU7WUFDTm9FLElBQUksRUFBRTNELFFBQVEsQ0FBQ3BCLElBQVQsQ0FBY3dCLE1BQWQsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBREE7WUFFTlosSUFBSSxFQUFFO1VBRkEsQ0FBVjtRQUlIO01BQ0osQ0FURDtJQVVILENBdkJEO0VBd0JILEM7O1NBRURzRix5QixHQUFBLHFDQUE0QjtJQUFBOztJQUN4QixJQUFNQyxjQUFjLEdBQUcvRyxDQUFDLENBQUMsd0JBQUQsQ0FBeEI7SUFDQSxJQUFNZ0gsU0FBUyxHQUFHaEgsQ0FBQyxDQUFDLDZCQUFELENBQW5CO0lBQ0EsSUFBTWlILFVBQVUsR0FBR2pILENBQUMsQ0FBQyxtQkFBRCxFQUFzQmdILFNBQXRCLENBQXBCO0lBRUFoSCxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQm1FLEVBQTNCLENBQThCLE9BQTlCLEVBQXVDLFVBQUFDLEtBQUssRUFBSTtNQUM1Q0EsS0FBSyxDQUFDNkIsY0FBTjtNQUNBakcsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDQyxhQUFQLENBQUQsQ0FBdUI2QyxNQUF2QjtNQUNBSCxjQUFjLENBQUNHLE1BQWY7TUFDQWxILENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCa0gsTUFBOUI7SUFDSCxDQUxEO0lBT0FsSCxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1FLEVBQTlCLENBQWlDLE9BQWpDLEVBQTBDLFVBQUFDLEtBQUssRUFBSTtNQUMvQ0EsS0FBSyxDQUFDNkIsY0FBTjtNQUNBYyxjQUFjLENBQUNHLE1BQWY7TUFDQWxILENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCa0gsTUFBM0I7TUFDQWxILENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCa0gsTUFBOUI7SUFDSCxDQUxEO0lBT0FGLFNBQVMsQ0FBQzdDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQUFDLEtBQUssRUFBSTtNQUM1QixJQUFNd0MsSUFBSSxHQUFHSyxVQUFVLENBQUNsRyxHQUFYLEVBQWI7TUFFQXFELEtBQUssQ0FBQzZCLGNBQU47O01BRUEsSUFBSSxDQUFDa0Isa0ZBQWEsQ0FBQ1AsSUFBRCxDQUFsQixFQUEwQjtRQUN0QixPQUFPdkYsMkRBQUksQ0FBQ0MsSUFBTCxDQUFVO1VBQ2JDLElBQUksRUFBRTBGLFVBQVUsQ0FBQ3RHLElBQVgsQ0FBZ0IsT0FBaEIsQ0FETztVQUViYSxJQUFJLEVBQUU7UUFGTyxDQUFWLENBQVA7TUFJSDs7TUFFREUsa0VBQUssQ0FBQ0MsR0FBTixDQUFVQyxJQUFWLENBQWV3RixvQkFBZixDQUFvQ1IsSUFBcEMsRUFBMEMsVUFBQzlFLEdBQUQsRUFBTXVGLElBQU4sRUFBZTtRQUNyRCxJQUFJQSxJQUFJLENBQUMxRyxJQUFMLENBQVVxQixNQUFWLEtBQXFCLFNBQXpCLEVBQW9DO1VBQ2hDLE1BQUksQ0FBQ0UsY0FBTDtRQUNILENBRkQsTUFFTztVQUNIYiwyREFBSSxDQUFDQyxJQUFMLENBQVU7WUFDTm9FLElBQUksRUFBRTJCLElBQUksQ0FBQzFHLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBREE7WUFFTlosSUFBSSxFQUFFO1VBRkEsQ0FBVjtRQUlIO01BQ0osQ0FURDtJQVVILENBdEJEO0VBdUJILEM7O1NBRUQ4RixzQixHQUFBLGtDQUF5QjtJQUFBOztJQUNyQixJQUFNdkUsS0FBSyxHQUFHQyxrRUFBWSxFQUExQjtJQUVBaEQsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJtRSxFQUExQixDQUE2QixPQUE3QixFQUFzQyxVQUFBQyxLQUFLLEVBQUk7TUFDM0MsSUFBTTFELE1BQU0sR0FBR1YsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDQyxhQUFQLENBQUQsQ0FBdUIxRCxJQUF2QixDQUE0QixjQUE1QixDQUFmO01BQ0EsSUFBTXNDLE9BQU8sR0FBRztRQUNaQyxRQUFRLEVBQUU7TUFERSxDQUFoQjtNQUlBa0IsS0FBSyxDQUFDNkIsY0FBTjtNQUVBbEQsS0FBSyxDQUFDSSxJQUFOO01BRUF6QixrRUFBSyxDQUFDQyxHQUFOLENBQVVDLElBQVYsQ0FBZTJGLDBCQUFmLENBQTBDN0csTUFBMUMsRUFBa0R1QyxPQUFsRCxFQUEyRCxVQUFDbkIsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO1FBQzFFZ0IsS0FBSyxDQUFDUyxhQUFOLENBQW9CekIsUUFBUSxDQUFDMEIsT0FBN0I7O1FBRUEsTUFBSSxDQUFDTyxvQkFBTDtNQUNILENBSkQ7SUFLSCxDQWZEO0VBZ0JILEM7O1NBRURBLG9CLEdBQUEsZ0NBQXVCO0lBQ25CaEUsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJtRSxFQUExQixDQUE2QixRQUE3QixFQUF1QyxVQUFBQyxLQUFLLEVBQUk7TUFDNUMsSUFBTW9ELE9BQU8sR0FBR3hILENBQUMsQ0FBQ29FLEtBQUssQ0FBQ0MsYUFBUCxDQUFqQjtNQUNBLElBQU1vRCxFQUFFLEdBQUdELE9BQU8sQ0FBQ3pHLEdBQVIsRUFBWDtNQUNBLElBQU0yRyxLQUFLLEdBQUdGLE9BQU8sQ0FBQzdHLElBQVIsQ0FBYSxPQUFiLENBQWQ7O01BRUEsSUFBSSxDQUFDOEcsRUFBTCxFQUFTO1FBQ0w7TUFDSDs7TUFFRCxJQUFNRSxZQUFZLEdBQUdILE9BQU8sQ0FBQ3BFLElBQVIsbUJBQTZCcUUsRUFBN0IsUUFBb0M5RyxJQUFwQyxDQUF5QyxjQUF6QyxDQUFyQjtNQUVBWCxDQUFDLDBCQUF3QjBILEtBQXhCLENBQUQsQ0FBa0N0SCxJQUFsQztNQUNBSixDQUFDLDBCQUF3QjBILEtBQXhCLFNBQWlDRCxFQUFqQyxDQUFELENBQXdDaEcsSUFBeEM7O01BRUEsSUFBSWtHLFlBQUosRUFBa0I7UUFDZDNILENBQUMsNEJBQTBCMEgsS0FBMUIsQ0FBRCxDQUFvQ2pHLElBQXBDO01BQ0gsQ0FGRCxNQUVPO1FBQ0h6QixDQUFDLDRCQUEwQjBILEtBQTFCLENBQUQsQ0FBb0N0SCxJQUFwQztNQUNIO0lBQ0osQ0FuQkQ7SUFxQkFKLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCNkYsT0FBMUIsQ0FBa0MsUUFBbEM7O0lBRUEsU0FBUytCLFdBQVQsR0FBdUI7TUFDbkIsSUFBTXpCLEtBQUssR0FBR25HLENBQUMsQ0FBQywyQ0FBRCxDQUFELENBQStDZSxHQUEvQyxFQUFkO01BQ0EsSUFBTThHLFdBQVcsR0FBRzdILENBQUMsQ0FBQyxzQkFBRCxDQUFyQjtNQUNBLElBQU04SCxVQUFVLEdBQUc5SCxDQUFDLENBQUMsd0JBQUQsQ0FBcEI7O01BRUEsSUFBSW1HLEtBQUssS0FBSyxNQUFkLEVBQXNCO1FBQ2xCMEIsV0FBVyxDQUFDcEcsSUFBWjtRQUNBcUcsVUFBVSxDQUFDMUgsSUFBWDtNQUNILENBSEQsTUFHTztRQUNIeUgsV0FBVyxDQUFDekgsSUFBWjtRQUNBMEgsVUFBVSxDQUFDckcsSUFBWDtNQUNIO0lBQ0o7O0lBRUR6QixDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQm1FLEVBQTNCLENBQThCLE9BQTlCLEVBQXVDeUQsV0FBdkM7SUFFQUEsV0FBVztFQUNkLEM7O1NBRURySCxVLEdBQUEsc0JBQWE7SUFDVCxLQUFLd0YsY0FBTDtJQUNBLEtBQUtTLG1CQUFMO0lBQ0EsS0FBS2Msc0JBQUw7SUFDQSxLQUFLUix5QkFBTCxHQUpTLENBTVQ7O0lBQ0EsS0FBS2lCLGlCQUFMLEdBQXlCLElBQUlDLGdFQUFKLENBQXNCaEksQ0FBQyxDQUFDLDJCQUFELENBQXZCLENBQXpCO0VBQ0gsQzs7O0VBMWI2QmlJLHFEOzs7Ozs7Ozs7Ozs7Ozs7QUNUbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJELGlCO0VBQ2pCLDJCQUFZRSxRQUFaLEVBQXNCO0lBQ2xCLEtBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0lBRUEsS0FBS0MsTUFBTCxHQUFjbkksQ0FBQyxDQUFDLDJCQUFELEVBQThCLEtBQUtrSSxRQUFuQyxDQUFmO0lBQ0EsS0FBS0UscUJBQUwsR0FBNkIsS0FBN0I7SUFDQSxLQUFLQyxrQkFBTDtJQUNBLEtBQUtDLHNCQUFMO0lBQ0EsS0FBS0MsbUJBQUw7RUFDSDs7OztTQUVERixrQixHQUFBLDhCQUFxQjtJQUFBOztJQUNqQixJQUFNRyxzQkFBc0IsR0FBR3hJLENBQUMsQ0FBQyxrQkFBRCxDQUFoQztJQUVBLEtBQUsrSCxpQkFBTCxHQUF5QiwrQkFBekI7SUFDQSxLQUFLVSxpQkFBTCxHQUF5QkMsMkRBQUcsQ0FBQztNQUN6QkMsTUFBTSxFQUFLLEtBQUtaLGlCQUFWLCtCQURtQjtNQUV6QmEsR0FBRyxFQUFFQyxrRkFBeUJBO0lBRkwsQ0FBRCxDQUE1QjtJQUtBN0ksQ0FBQyxDQUFDLDJCQUFELEVBQThCLEtBQUtrSSxRQUFuQyxDQUFELENBQThDL0QsRUFBOUMsQ0FBaUQsT0FBakQsRUFBMEQsVUFBQUMsS0FBSyxFQUFJO01BQy9EO01BQ0E7TUFDQTtNQUNBLElBQUlvRSxzQkFBc0IsQ0FBQ00sSUFBdkIsQ0FBNEIsTUFBNUIsQ0FBSixFQUF5QztRQUNyQ04sc0JBQXNCLENBQUNPLFVBQXZCLENBQWtDLE1BQWxDO01BQ0g7O01BRURQLHNCQUFzQixDQUFDTSxJQUF2QixDQUE0QixNQUE1QixFQUFvQyxPQUFwQyxFQVIrRCxDQVMvRDtNQUNBO01BQ0E7O01BQ0EsSUFBSTlJLENBQUMsQ0FBSSxLQUFJLENBQUMrSCxpQkFBVCx3Q0FBRCxDQUErRGhILEdBQS9ELEVBQUosRUFBMEU7UUFDdEUsS0FBSSxDQUFDMEgsaUJBQUwsQ0FBdUJPLFlBQXZCO01BQ0g7O01BRUQsSUFBSSxLQUFJLENBQUNQLGlCQUFMLENBQXVCUSxNQUF2QixDQUE4QixPQUE5QixDQUFKLEVBQTRDO1FBQ3hDO01BQ0g7O01BRUQ3RSxLQUFLLENBQUM2QixjQUFOO0lBQ0gsQ0FyQkQ7SUF1QkEsS0FBS2lELGNBQUw7SUFDQSxLQUFLQyxtQkFBTDtJQUNBLEtBQUtDLFlBQUw7RUFDSCxDOztTQUVERixjLEdBQUEsMEJBQWlCO0lBQ2IsS0FBS1QsaUJBQUwsQ0FBdUJZLEdBQXZCLENBQTJCLENBQ3ZCO01BQ0lDLFFBQVEsRUFBSyxLQUFLdkIsaUJBQVYsdUNBRFo7TUFFSXdCLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLekksR0FBTCxFQUFhO1FBQ25CLElBQU0wSSxTQUFTLEdBQUdsSCxNQUFNLENBQUN4QixHQUFELENBQXhCO1FBQ0EsSUFBTTRELE1BQU0sR0FBRzhFLFNBQVMsS0FBSyxDQUFkLElBQW1CLENBQUNsSCxNQUFNLENBQUNtSCxLQUFQLENBQWFELFNBQWIsQ0FBbkM7UUFFQUQsRUFBRSxDQUFDN0UsTUFBRCxDQUFGO01BQ0gsQ0FQTDtNQVFJZ0YsWUFBWSxFQUFFO0lBUmxCLENBRHVCLENBQTNCO0VBWUgsQzs7U0FFRFIsbUIsR0FBQSwrQkFBc0I7SUFBQTs7SUFDbEIsS0FBS1YsaUJBQUwsQ0FBdUJZLEdBQXZCLENBQTJCLENBQ3ZCO01BQ0lDLFFBQVEsRUFBRXRKLENBQUMsQ0FBSSxLQUFLK0gsaUJBQVQsc0NBRGY7TUFFSXdCLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFRO1FBQ2QsSUFBSTdFLE1BQUo7UUFFQSxJQUFNaUYsSUFBSSxHQUFHNUosQ0FBQyxDQUFJLE1BQUksQ0FBQytILGlCQUFULHNDQUFkOztRQUVBLElBQUk2QixJQUFJLENBQUN2RSxNQUFULEVBQWlCO1VBQ2IsSUFBTXdFLE1BQU0sR0FBR0QsSUFBSSxDQUFDN0ksR0FBTCxFQUFmO1VBRUE0RCxNQUFNLEdBQUdrRixNQUFNLElBQUlBLE1BQU0sQ0FBQ3hFLE1BQWpCLElBQTJCd0UsTUFBTSxLQUFLLGdCQUEvQztRQUNIOztRQUVETCxFQUFFLENBQUM3RSxNQUFELENBQUY7TUFDSCxDQWRMO01BZUlnRixZQUFZLEVBQUU7SUFmbEIsQ0FEdUIsQ0FBM0I7RUFtQkg7RUFFRDtBQUNKO0FBQ0E7OztTQUNJUCxZLEdBQUEsd0JBQWU7SUFDWCxJQUFNVSxhQUFhLEdBQUcsK0JBQXRCO0lBRUE5SixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVtRSxFQUFWLENBQWEsT0FBYixFQUFzQjJGLGFBQXRCLEVBQXFDLFVBQUMxRixLQUFELEVBQVc7TUFDNUMsSUFBTTJGLGlCQUFpQixHQUFHL0osQ0FBQyxDQUFDLHNCQUFELENBQTNCO01BQ0EsSUFBTWdLLHFCQUFxQixHQUFHaEssQ0FBQyxDQUFDLDBCQUFELENBQS9CO01BRUFvRSxLQUFLLENBQUM2QixjQUFOO01BRUE4RCxpQkFBaUIsQ0FBQ0UsV0FBbEIsQ0FBOEIsa0JBQTlCO01BQ0FELHFCQUFxQixDQUFDQyxXQUF0QixDQUFrQyxrQkFBbEM7SUFDSCxDQVJEO0VBU0gsQzs7U0FFRDNCLHNCLEdBQUEsa0NBQXlCO0lBQUE7O0lBQ3JCLElBQUk0QixLQUFKLENBRHFCLENBR3JCOztJQUNBQyxxRUFBWSxDQUFDLEtBQUtoQyxNQUFOLEVBQWMsS0FBS3RGLE9BQW5CLEVBQTRCO01BQUV1SCxjQUFjLEVBQUU7SUFBbEIsQ0FBNUIsRUFBc0QsVUFBQ3RJLEdBQUQsRUFBTXVJLEtBQU4sRUFBZ0I7TUFDOUUsSUFBSXZJLEdBQUosRUFBUztRQUNMVCwyREFBSSxDQUFDQyxJQUFMLENBQVU7VUFDTkMsSUFBSSxFQUFFTyxHQURBO1VBRU5OLElBQUksRUFBRTtRQUZBLENBQVY7UUFLQSxNQUFNLElBQUk4SSxLQUFKLENBQVV4SSxHQUFWLENBQU47TUFDSDs7TUFFRCxJQUFNeUksTUFBTSxHQUFHdkssQ0FBQyxDQUFDcUssS0FBRCxDQUFoQjs7TUFFQSxJQUFJLE1BQUksQ0FBQzVCLGlCQUFMLENBQXVCK0IsU0FBdkIsQ0FBaUMsTUFBSSxDQUFDckMsTUFBdEMsTUFBa0QsV0FBdEQsRUFBbUU7UUFDL0QsTUFBSSxDQUFDTSxpQkFBTCxDQUF1QnhHLE1BQXZCLENBQThCLE1BQUksQ0FBQ2tHLE1BQW5DO01BQ0g7O01BRUQsSUFBSStCLEtBQUosRUFBVztRQUNQLE1BQUksQ0FBQ3pCLGlCQUFMLENBQXVCeEcsTUFBdkIsQ0FBOEJpSSxLQUE5QjtNQUNIOztNQUVELElBQUlLLE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLFFBQVYsQ0FBSixFQUF5QjtRQUNyQlAsS0FBSyxHQUFHRyxLQUFSOztRQUNBLE1BQUksQ0FBQ2xCLG1CQUFMO01BQ0gsQ0FIRCxNQUdPO1FBQ0hvQixNQUFNLENBQUN6QixJQUFQLENBQVksYUFBWixFQUEyQixnQkFBM0I7UUFDQTRCLG1FQUFVLENBQUNDLHNCQUFYLENBQWtDTixLQUFsQztNQUNILENBMUI2RSxDQTRCOUU7TUFDQTtNQUNBOzs7TUFDQXJLLENBQUMsQ0FBQyxNQUFJLENBQUMrSCxpQkFBTixDQUFELENBQTBCM0UsSUFBMUIsQ0FBK0Isc0JBQS9CLEVBQXVEd0gsV0FBdkQsQ0FBbUUscUJBQW5FO0lBQ0gsQ0FoQ1csQ0FBWjtFQWlDSCxDOztTQUVEQyx3QixHQUFBLGtDQUF5QkMsWUFBekIsRUFBdUNDLGNBQXZDLEVBQXVEQyxnQkFBdkQsRUFBeUU7SUFDckUsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxrQkFBRCxFQUF3QjtNQUNyRGxMLENBQUMsQ0FBQzhLLFlBQUQsQ0FBRCxDQUFnQmhDLElBQWhCLENBQXFCLGlCQUFyQixFQUF3Q29DLGtCQUF4QztNQUNBbEwsQ0FBQyxDQUFDK0ssY0FBRCxDQUFELENBQWtCeEosSUFBbEIsQ0FBdUJ2QixDQUFDLE9BQUtrTCxrQkFBTCxDQUFELENBQTRCM0osSUFBNUIsRUFBdkI7SUFDSCxDQUhEOztJQUtBLElBQUksQ0FBQyxLQUFLNkcscUJBQVYsRUFBaUM7TUFDN0I2Qyx3QkFBd0IsQ0FBQyxpQkFBRCxDQUF4QjtNQUNBRCxnQkFBZ0IsQ0FBQ0osV0FBakIsQ0FBNkIsVUFBN0I7SUFDSCxDQUhELE1BR087TUFDSEssd0JBQXdCLENBQUMsZUFBRCxDQUF4QjtNQUNBRCxnQkFBZ0IsQ0FBQzNILFFBQWpCLENBQTBCLFVBQTFCO0lBQ0g7O0lBQ0QsS0FBSytFLHFCQUFMLEdBQTZCLENBQUMsS0FBS0EscUJBQW5DO0VBQ0gsQzs7U0FFREcsbUIsR0FBQSwrQkFBc0I7SUFBQTs7SUFDbEIsSUFBTTRDLG1CQUFtQixHQUFHbkwsQ0FBQyxDQUFDLHFCQUFELENBQTdCO0lBQ0EsSUFBTW9MLGNBQWMsR0FBR3BMLENBQUMsQ0FBQyxpQkFBRCxDQUF4QjtJQUNBcUwsbUVBQWtCO0lBQ2xCRCxjQUFjLENBQUNqSCxFQUFmLENBQWtCLFFBQWxCLEVBQTRCLFVBQUFDLEtBQUssRUFBSTtNQUNqQyxJQUFNa0gsTUFBTSxHQUFHO1FBQ1hDLFVBQVUsRUFBRXZMLENBQUMsQ0FBQywyQkFBRCxFQUE4Qm9MLGNBQTlCLENBQUQsQ0FBK0NySyxHQUEvQyxFQUREO1FBRVh5SyxRQUFRLEVBQUV4TCxDQUFDLENBQUMseUJBQUQsRUFBNEJvTCxjQUE1QixDQUFELENBQTZDckssR0FBN0MsRUFGQztRQUdYMEssSUFBSSxFQUFFekwsQ0FBQyxDQUFDLHdCQUFELEVBQTJCb0wsY0FBM0IsQ0FBRCxDQUE0Q3JLLEdBQTVDLEVBSEs7UUFJWDJLLFFBQVEsRUFBRTFMLENBQUMsQ0FBQyx1QkFBRCxFQUEwQm9MLGNBQTFCLENBQUQsQ0FBMkNySyxHQUEzQztNQUpDLENBQWY7TUFPQXFELEtBQUssQ0FBQzZCLGNBQU47TUFFQXZFLGtFQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBVixDQUFlK0osaUJBQWYsQ0FBaUNMLE1BQWpDLEVBQXlDLHNCQUF6QyxFQUFpRSxVQUFDeEosR0FBRCxFQUFNQyxRQUFOLEVBQW1CO1FBQ2hGL0IsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IwRixJQUF0QixDQUEyQjNELFFBQVEsQ0FBQzBCLE9BQXBDLEVBRGdGLENBR2hGOztRQUNBekQsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJtRSxFQUE1QixDQUErQixPQUEvQixFQUF3QyxVQUFBeUgsVUFBVSxFQUFJO1VBQ2xELElBQU1DLE9BQU8sR0FBRzdMLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCZSxHQUE3QixFQUFoQjtVQUVBNkssVUFBVSxDQUFDM0YsY0FBWDtVQUVBdkUsa0VBQUssQ0FBQ0MsR0FBTixDQUFVQyxJQUFWLENBQWVrSyxtQkFBZixDQUFtQ0QsT0FBbkMsRUFBNEMsWUFBTTtZQUM5Q3ZHLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7VUFDSCxDQUZEO1FBR0gsQ0FSRDtNQVNILENBYkQ7SUFjSCxDQXhCRDtJQTBCQXhGLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCbUUsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQUMsS0FBSyxFQUFJO01BQzlDQSxLQUFLLENBQUM2QixjQUFOOztNQUNBLE1BQUksQ0FBQzRFLHdCQUFMLENBQThCekcsS0FBSyxDQUFDQyxhQUFwQyxFQUFtRCxtQ0FBbkQsRUFBd0Y4RyxtQkFBeEY7SUFDSCxDQUhEO0VBSUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE1MO0FBQ0E7QUFFQTs7SUFFcUJwSCxlOzs7RUFDakIseUJBQVlnSSxNQUFaLEVBQW9CbEosT0FBcEIsRUFBNkJtSixxQkFBN0IsRUFBeUQ7SUFBQTs7SUFBQSxJQUE1QkEscUJBQTRCO01BQTVCQSxxQkFBNEIsR0FBSixFQUFJO0lBQUE7O0lBQ3JELHVDQUFNRCxNQUFOLEVBQWNsSixPQUFkO0lBRUEsSUFBTXlCLEtBQUssR0FBR3RFLENBQUMsQ0FBQyw0QkFBRCxFQUErQixNQUFLK0wsTUFBcEMsQ0FBZjtJQUNBLElBQU1FLHNCQUFzQixHQUFHak0sQ0FBQyxDQUFDLG1DQUFELEVBQXNDc0UsS0FBdEMsQ0FBaEM7SUFDQSxJQUFNNEgsVUFBVSxHQUFHRCxzQkFBc0IsQ0FBQ3ZHLElBQXZCLEdBQThCeUcsSUFBOUIsR0FBcUM5RyxNQUF4RDtJQUNBLElBQU0rRyxpQkFBaUIsR0FBR0gsc0JBQXNCLENBQUM3SSxJQUF2QixDQUE0QixnQkFBNUIsRUFBOENpQyxNQUF4RTtJQUVBNEcsc0JBQXNCLENBQUM5SCxFQUF2QixDQUEwQixRQUExQixFQUFvQyxZQUFNO01BQ3RDLE1BQUtrSSxpQkFBTDtJQUNILENBRkQ7SUFJQSxJQUFNQyxvQkFBb0IsR0FBR0MsMkVBQXFCLENBQUNDLElBQXRCLGdDQUFpQ0osaUJBQWpDLENBQTdCLENBWnFELENBY3JEO0lBQ0E7O0lBQ0EsSUFBSSxDQUFDLHNEQUFRSixxQkFBUixLQUFrQ0ksaUJBQW5DLEtBQXlERixVQUE3RCxFQUF5RTtNQUNyRSxJQUFNdEosU0FBUyxHQUFHLE1BQUtDLE9BQUwsQ0FBYUMsa0JBQS9CO01BRUFwQixrRUFBSyxDQUFDQyxHQUFOLENBQVUyQixpQkFBVixDQUE0Qm1CLFlBQTVCLENBQXlDN0IsU0FBekMsRUFBb0QwQixLQUFLLENBQUNJLFNBQU4sRUFBcEQsRUFBdUUsOEJBQXZFLEVBQXVHNEgsb0JBQXZHO0lBQ0gsQ0FKRCxNQUlPO01BQ0gsTUFBS0csdUJBQUwsQ0FBNkJULHFCQUE3QjtJQUNIOztJQXRCb0Q7RUF1QnhEOzs7O1NBRURLLGlCLEdBQUEsNkJBQW9CO0lBQ2hCLElBQU1LLHlCQUF5QixHQUFHLEVBQWxDO0lBQ0EsSUFBTXpKLE9BQU8sR0FBRyxFQUFoQjtJQUVBakQsQ0FBQyxDQUFDMk0sSUFBRixDQUFPM00sQ0FBQyxDQUFDLDBCQUFELENBQVIsRUFBc0MsVUFBQzBILEtBQUQsRUFBUXZCLEtBQVIsRUFBa0I7TUFDcEQsSUFBTXlHLFdBQVcsR0FBR3pHLEtBQUssQ0FBQzBHLFFBQU4sQ0FBZSxDQUFmLEVBQWtCQyxTQUF0QztNQUNBLElBQU1DLFdBQVcsR0FBR0gsV0FBVyxDQUFDSSxLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLEVBQTBCYixJQUExQixFQUFwQjtNQUNBLElBQU1jLFFBQVEsR0FBR0wsV0FBVyxDQUFDTSxXQUFaLEdBQTBCQyxRQUExQixDQUFtQyxVQUFuQyxDQUFqQjtNQUNBLElBQU1DLElBQUksR0FBR2pILEtBQUssQ0FBQ2tILFlBQU4sQ0FBbUIsd0JBQW5CLENBQWI7O01BRUEsSUFBSSxDQUFDRCxJQUFJLEtBQUssWUFBVCxJQUF5QkEsSUFBSSxLQUFLLFlBQWxDLElBQWtEQSxJQUFJLEtBQUssY0FBNUQsS0FBK0VqSCxLQUFLLENBQUNtSCxhQUFOLENBQW9CLE9BQXBCLEVBQTZCbkgsS0FBN0IsS0FBdUMsRUFBdEgsSUFBNEg4RyxRQUFoSSxFQUEwSTtRQUN0SVAseUJBQXlCLENBQUNhLElBQTFCLENBQStCcEgsS0FBL0I7TUFDSDs7TUFFRCxJQUFJaUgsSUFBSSxLQUFLLFVBQVQsSUFBdUJqSCxLQUFLLENBQUNtSCxhQUFOLENBQW9CLFVBQXBCLEVBQWdDbkgsS0FBaEMsS0FBMEMsRUFBakUsSUFBdUU4RyxRQUEzRSxFQUFxRjtRQUNqRlAseUJBQXlCLENBQUNhLElBQTFCLENBQStCcEgsS0FBL0I7TUFDSDs7TUFFRCxJQUFJaUgsSUFBSSxLQUFLLE1BQWIsRUFBcUI7UUFDakIsSUFBTUksV0FBVyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV3ZILEtBQUssQ0FBQ3dILGdCQUFOLENBQXVCLFFBQXZCLENBQVgsRUFBNkNDLEtBQTdDLENBQW1ELFVBQUNDLE1BQUQ7VUFBQSxPQUFZQSxNQUFNLENBQUNDLGFBQVAsS0FBeUIsQ0FBckM7UUFBQSxDQUFuRCxDQUFwQjs7UUFFQSxJQUFJTixXQUFKLEVBQWlCO1VBQ2IsSUFBTU8sVUFBVSxHQUFHTixLQUFLLENBQUNDLElBQU4sQ0FBV3ZILEtBQUssQ0FBQ3dILGdCQUFOLENBQXVCLFFBQXZCLENBQVgsRUFBNkNLLEdBQTdDLENBQWlELFVBQUNDLENBQUQ7WUFBQSxPQUFPQSxDQUFDLENBQUM5SCxLQUFUO1VBQUEsQ0FBakQsRUFBaUUvRCxJQUFqRSxDQUFzRSxHQUF0RSxDQUFuQjtVQUNBYSxPQUFPLENBQUNzSyxJQUFSLENBQWdCUixXQUFoQixTQUErQmdCLFVBQS9CO1VBRUE7UUFDSDs7UUFFRCxJQUFJZCxRQUFKLEVBQWM7VUFDVlAseUJBQXlCLENBQUNhLElBQTFCLENBQStCcEgsS0FBL0I7UUFDSDtNQUNKOztNQUVELElBQUlpSCxJQUFJLEtBQUssWUFBYixFQUEyQjtRQUN2QixJQUFNUyxNQUFNLEdBQUcxSCxLQUFLLENBQUNtSCxhQUFOLENBQW9CLFFBQXBCLENBQWY7UUFDQSxJQUFNUSxhQUFhLEdBQUdELE1BQU0sQ0FBQ0MsYUFBN0I7O1FBRUEsSUFBSUEsYUFBYSxLQUFLLENBQXRCLEVBQXlCO1VBQ3JCN0ssT0FBTyxDQUFDc0ssSUFBUixDQUFnQlIsV0FBaEIsU0FBK0JjLE1BQU0sQ0FBQzVLLE9BQVAsQ0FBZTZLLGFBQWYsRUFBOEJoQixTQUE3RDtVQUVBO1FBQ0g7O1FBRUQsSUFBSUcsUUFBSixFQUFjO1VBQ1ZQLHlCQUF5QixDQUFDYSxJQUExQixDQUErQnBILEtBQS9CO1FBQ0g7TUFDSjs7TUFFRCxJQUFJaUgsSUFBSSxLQUFLLGVBQVQsSUFBNEJBLElBQUksS0FBSyxXQUFyQyxJQUFvREEsSUFBSSxLQUFLLFFBQTdELElBQXlFQSxJQUFJLEtBQUssZ0JBQWxGLElBQXNHQSxJQUFJLEtBQUssY0FBbkgsRUFBbUk7UUFDL0gsSUFBTWMsT0FBTyxHQUFHL0gsS0FBSyxDQUFDbUgsYUFBTixDQUFvQixVQUFwQixDQUFoQjs7UUFDQSxJQUFJWSxPQUFKLEVBQWE7VUFDVCxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07WUFDakMsSUFBTUMsbUJBQW1CLEdBQUdDLDBFQUFnQixDQUFDbEksS0FBSyxDQUFDMEcsUUFBUCxDQUE1Qzs7WUFDQSxJQUFNeUIseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFBQyxJQUFJO2NBQUEsT0FBSUEsSUFBSSxDQUFDQyxPQUFMLENBQWFDLHFCQUFiLEtBQXVDUCxPQUFPLENBQUMvSCxLQUFuRDtZQUFBLENBQXRDOztZQUNBLE9BQU9pSSxtQkFBbUIsQ0FBQ3RJLE1BQXBCLENBQTJCd0kseUJBQTNCLEVBQXNELENBQXRELENBQVA7VUFDSCxDQUpEOztVQUtBLElBQUlsQixJQUFJLEtBQUssZUFBVCxJQUE0QkEsSUFBSSxLQUFLLFdBQXJDLElBQW9EQSxJQUFJLEtBQUssY0FBakUsRUFBaUY7WUFDN0UsSUFBTXNCLEtBQUssR0FBR0MsNkRBQVcsR0FBR1Isc0JBQXNCLEdBQUdyQixTQUF6QixDQUFtQ1gsSUFBbkMsRUFBSCxHQUErQytCLE9BQU8sQ0FBQ1UsTUFBUixDQUFlLENBQWYsRUFBa0I5QixTQUExRjs7WUFDQSxJQUFJNEIsS0FBSixFQUFXO2NBQ1B6TCxPQUFPLENBQUNzSyxJQUFSLENBQWdCUixXQUFoQixTQUErQjJCLEtBQS9CO1lBQ0g7VUFDSjs7VUFFRCxJQUFJdEIsSUFBSSxLQUFLLFFBQWIsRUFBdUI7WUFDbkIsSUFBTXNCLE1BQUssR0FBR0MsNkRBQVcsR0FBR1Isc0JBQXNCLEdBQUd0QixRQUF6QixDQUFrQyxDQUFsQyxDQUFILEdBQTBDcUIsT0FBTyxDQUFDVSxNQUFSLENBQWUsQ0FBZixFQUFrQi9CLFFBQWxCLENBQTJCLENBQTNCLENBQW5FOztZQUNBLElBQUk2QixNQUFKLEVBQVc7Y0FDUHpMLE9BQU8sQ0FBQ3NLLElBQVIsQ0FBZ0JSLFdBQWhCLFNBQStCMkIsTUFBSyxDQUFDRyxLQUFyQztZQUNIO1VBQ0o7O1VBRUQsSUFBSXpCLElBQUksS0FBSyxnQkFBYixFQUErQjtZQUMzQm5LLE9BQU8sQ0FBQ3NLLElBQVIsQ0FBZ0JSLFdBQWhCO1VBQ0g7O1VBRUQ7UUFDSDs7UUFFRCxJQUFJSyxJQUFJLEtBQUssZ0JBQWIsRUFBK0I7VUFDM0JuSyxPQUFPLENBQUNzSyxJQUFSLENBQWdCUixXQUFoQjtRQUNIOztRQUVELElBQUlFLFFBQUosRUFBYztVQUNWUCx5QkFBeUIsQ0FBQ2EsSUFBMUIsQ0FBK0JwSCxLQUEvQjtRQUNIO01BQ0o7SUFDSixDQWpGRDtJQW1GQSxJQUFJMkksY0FBYyxHQUFHcEMseUJBQXlCLENBQUNySCxNQUExQixLQUFxQyxDQUFyQyxHQUF5Q3BDLE9BQU8sQ0FBQzhMLElBQVIsR0FBZTNNLElBQWYsQ0FBb0IsSUFBcEIsQ0FBekMsR0FBcUUsYUFBMUY7SUFDQSxJQUFNNE0sSUFBSSxHQUFHaFAsQ0FBQyxDQUFDLHFCQUFELENBQWQ7O0lBRUEsSUFBSThPLGNBQUosRUFBb0I7TUFDaEJBLGNBQWMsR0FBR0EsY0FBYyxLQUFLLGFBQW5CLEdBQW1DLEVBQW5DLEdBQXdDQSxjQUF6RDs7TUFDQSxJQUFJRSxJQUFJLENBQUNsRyxJQUFMLENBQVUsaUJBQVYsQ0FBSixFQUFrQztRQUM5QmtHLElBQUksQ0FBQ2xHLElBQUwsQ0FBVSxzQkFBVixFQUFrQ2dHLGNBQWxDO01BQ0gsQ0FGRCxNQUVPO1FBQ0gsSUFBTUcsV0FBVyxHQUFHRCxJQUFJLENBQUN0SixJQUFMLEdBQVl3SixLQUFaLENBQWtCLFNBQWxCLEVBQTZCLENBQTdCLENBQXBCO1FBQ0EsSUFBTUMsSUFBSSxHQUFHblAsQ0FBQyxtQkFBZ0JpUCxXQUFoQixTQUFkO1FBQ0FFLElBQUksQ0FBQ3JHLElBQUwsQ0FBVSxzQkFBVixFQUFrQ2dHLGNBQWxDO01BQ0g7SUFDSjtFQUNKO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7OztTQUNJckMsdUIsR0FBQSxpQ0FBd0I5TCxJQUF4QixFQUE4QjtJQUMxQiw4QkFBTThMLHVCQUFOLFlBQThCOUwsSUFBOUI7O0lBRUEsS0FBS29MLE1BQUwsQ0FBWTNJLElBQVosQ0FBaUIsZ0JBQWpCLEVBQW1Dd0gsV0FBbkMsQ0FBK0MsY0FBL0M7RUFDSCxDOzs7RUF4SXdDd0UsNkQ7Ozs7Ozs7Ozs7Ozs7OztBQ0w3QztBQUFlLHlFQUFVQyxJQUFWLEVBQWdCO0VBQzNCLElBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtJQUMxQixPQUFPLEtBQVA7RUFDSCxDQUgwQixDQUszQjs7O0VBQ0EsT0FBTyxJQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BEO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLGlCQUFULENBQTJCQyxZQUEzQixFQUF5QzFNLE9BQXpDLEVBQWtEO0VBQzlDLElBQU0yTSxLQUFLLEdBQUcsd0RBQVlELFlBQVksQ0FBQzFLLElBQWIsQ0FBa0IsWUFBbEIsQ0FBWixFQUE2QyxVQUFDRixNQUFELEVBQVM4SyxJQUFULEVBQWtCO0lBQ3pFLElBQU1DLEdBQUcsR0FBRy9LLE1BQVo7SUFDQStLLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxJQUFOLENBQUgsR0FBaUJGLElBQUksQ0FBQ3RKLEtBQXRCO0lBQ0EsT0FBT3VKLEdBQVA7RUFDSCxDQUphLENBQWQ7O0VBTUEsSUFBTUUscUJBQXFCLEdBQUc7SUFDMUJuSSxFQUFFLEVBQUUrSCxLQUFLLENBQUMvSCxFQURnQjtJQUUxQixjQUFjK0gsS0FBSyxDQUFDLFlBQUQsQ0FGTztJQUcxQixTQUFPLGFBSG1CO0lBSTFCRyxJQUFJLEVBQUVILEtBQUssQ0FBQ0csSUFKYztJQUsxQixtQkFBbUJILEtBQUssQ0FBQyxpQkFBRDtFQUxFLENBQTlCO0VBUUFELFlBQVksQ0FBQzVKLFdBQWIsQ0FBeUIzRixDQUFDLENBQUMsbUJBQUQsRUFBc0I0UCxxQkFBdEIsQ0FBMUI7RUFFQSxJQUFNQyxXQUFXLEdBQUc3UCxDQUFDLENBQUMsMkJBQUQsQ0FBckI7RUFDQSxJQUFNOFAsWUFBWSxHQUFHOVAsQ0FBQyxDQUFDLDJCQUFELENBQXRCOztFQUVBLElBQUk4UCxZQUFZLENBQUN6SyxNQUFiLEtBQXdCLENBQTVCLEVBQStCO0lBQzNCeUssWUFBWSxDQUFDN04sTUFBYjtFQUNIOztFQUVELElBQUk0TixXQUFXLENBQUNFLElBQVosR0FBbUIzTSxJQUFuQixDQUF3QixPQUF4QixFQUFpQ2lDLE1BQWpDLEtBQTRDLENBQWhELEVBQW1EO0lBQy9DO0lBQ0F3SyxXQUFXLENBQUNFLElBQVosR0FBbUJDLE1BQW5CLGFBQW9Dbk4sT0FBTyxDQUFDb0ssUUFBNUM7RUFDSCxDQUhELE1BR087SUFDSDRDLFdBQVcsQ0FBQ0UsSUFBWixHQUFtQjNNLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDM0IsSUFBakM7RUFDSDs7RUFFRCxPQUFPb08sV0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNJLGlCQUFULENBQTJCVixZQUEzQixFQUF5QztFQUNyQyxJQUFNQyxLQUFLLEdBQUcsd0RBQVlELFlBQVksQ0FBQzFLLElBQWIsQ0FBa0IsWUFBbEIsQ0FBWixFQUE2QyxVQUFDRixNQUFELEVBQVM4SyxJQUFULEVBQWtCO0lBQ3pFLElBQU1DLEdBQUcsR0FBRy9LLE1BQVo7SUFDQStLLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxJQUFOLENBQUgsR0FBaUJGLElBQUksQ0FBQ3RKLEtBQXRCO0lBRUEsT0FBT3VKLEdBQVA7RUFDSCxDQUxhLENBQWQ7O0VBT0EsSUFBTUUscUJBQXFCLEdBQUc7SUFDMUJ4QyxJQUFJLEVBQUUsTUFEb0I7SUFFMUIzRixFQUFFLEVBQUUrSCxLQUFLLENBQUMvSCxFQUZnQjtJQUcxQixjQUFjK0gsS0FBSyxDQUFDLFlBQUQsQ0FITztJQUkxQixTQUFPLFlBSm1CO0lBSzFCRyxJQUFJLEVBQUVILEtBQUssQ0FBQ0csSUFMYztJQU0xQixtQkFBbUJILEtBQUssQ0FBQyxpQkFBRDtFQU5FLENBQTlCO0VBU0FELFlBQVksQ0FBQzVKLFdBQWIsQ0FBeUIzRixDQUFDLENBQUMsV0FBRCxFQUFjNFAscUJBQWQsQ0FBMUI7RUFFQSxJQUFNQyxXQUFXLEdBQUc3UCxDQUFDLENBQUMsMkJBQUQsQ0FBckI7O0VBRUEsSUFBSTZQLFdBQVcsQ0FBQ3hLLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7SUFDMUI2SyxnRkFBc0IsQ0FBQ0wsV0FBRCxDQUF0QjtJQUNBQSxXQUFXLENBQUNFLElBQVosR0FBbUIzTSxJQUFuQixDQUF3QixPQUF4QixFQUFpQ2hELElBQWpDO0VBQ0g7O0VBRUQsT0FBT3lQLFdBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU00sVUFBVCxDQUFvQkMsV0FBcEIsRUFBaUNDLGNBQWpDLEVBQWlEcE4sT0FBakQsRUFBMEQ7RUFDdEQsSUFBTXFOLFNBQVMsR0FBRyxFQUFsQjtFQUVBQSxTQUFTLENBQUMvQyxJQUFWLHlCQUFtQzZDLFdBQVcsQ0FBQ0csTUFBL0M7O0VBRUEsSUFBSSxDQUFDLHNEQUFVRixjQUFWLENBQUwsRUFBZ0M7SUFDNUIsbURBQU9ELFdBQVcsQ0FBQ0ksTUFBbkIsRUFBMkIsVUFBQ0MsUUFBRCxFQUFjO01BQ3JDLElBQUl4TixPQUFPLENBQUNtSCxjQUFaLEVBQTRCO1FBQ3hCa0csU0FBUyxDQUFDL0MsSUFBVixzQkFBaUNrRCxRQUFRLENBQUNoSixFQUExQyxXQUFpRGdKLFFBQVEsQ0FBQ2QsSUFBMUQ7TUFDSCxDQUZELE1BRU87UUFDSFcsU0FBUyxDQUFDL0MsSUFBVixzQkFBaUNrRCxRQUFRLENBQUNkLElBQTFDLFdBQW1EYyxRQUFRLENBQUNkLElBQTVEO01BQ0g7SUFDSixDQU5EOztJQVFBVSxjQUFjLENBQUMzSyxJQUFmLENBQW9CNEssU0FBUyxDQUFDbE8sSUFBVixDQUFlLEdBQWYsQ0FBcEI7RUFDSDtBQUNKO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlLHlFQUFVbU4sWUFBVixFQUF3QjFNLE9BQXhCLEVBQXNDSSxPQUF0QyxFQUErQ3lOLFFBQS9DLEVBQXlEO0VBQUEsSUFBakM3TixPQUFpQztJQUFqQ0EsT0FBaUMsR0FBdkIsRUFBdUI7RUFBQTs7RUFDcEU7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxJQUFJLE9BQU9JLE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7SUFDL0I7SUFDQXlOLFFBQVEsR0FBR3pOLE9BQVg7SUFDQUEsT0FBTyxHQUFHLEVBQVY7SUFDQTtFQUNIOztFQUVEakQsQ0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUNtRSxFQUF2QyxDQUEwQyxRQUExQyxFQUFvRCxVQUFBQyxLQUFLLEVBQUk7SUFDekQsSUFBTXVNLFdBQVcsR0FBRzNRLENBQUMsQ0FBQ29FLEtBQUssQ0FBQ0MsYUFBUCxDQUFELENBQXVCdEQsR0FBdkIsRUFBcEI7O0lBRUEsSUFBSTRQLFdBQVcsS0FBSyxFQUFwQixFQUF3QjtNQUNwQjtJQUNIOztJQUVEalAsa0VBQUssQ0FBQ0MsR0FBTixDQUFVaVAsT0FBVixDQUFrQkMsU0FBbEIsQ0FBNEJGLFdBQTVCLEVBQXlDLFVBQUM3TyxHQUFELEVBQU1DLFFBQU4sRUFBbUI7TUFDeEQsSUFBSUQsR0FBSixFQUFTO1FBQ0xnUCxvRUFBYyxDQUFDak8sT0FBTyxDQUFDa08sV0FBVCxDQUFkO1FBQ0EsT0FBT0wsUUFBUSxDQUFDNU8sR0FBRCxDQUFmO01BQ0g7O01BRUQsSUFBTWtQLGFBQWEsR0FBR2hSLENBQUMsQ0FBQywyQkFBRCxDQUF2Qjs7TUFFQSxJQUFJLENBQUMsc0RBQVUrQixRQUFRLENBQUNwQixJQUFULENBQWM2UCxNQUF4QixDQUFMLEVBQXNDO1FBQ2xDO1FBQ0EsSUFBTUgsY0FBYyxHQUFHZixpQkFBaUIsQ0FBQzBCLGFBQUQsRUFBZ0JuTyxPQUFoQixDQUF4QztRQUVBc04sVUFBVSxDQUFDcE8sUUFBUSxDQUFDcEIsSUFBVixFQUFnQjBQLGNBQWhCLEVBQWdDcE4sT0FBaEMsQ0FBVjtRQUNBeU4sUUFBUSxDQUFDLElBQUQsRUFBT0wsY0FBUCxDQUFSO01BQ0gsQ0FORCxNQU1PO1FBQ0gsSUFBTVksVUFBVSxHQUFHaEIsaUJBQWlCLENBQUNlLGFBQUQsRUFBZ0JuTyxPQUFoQixDQUFwQztRQUVBNk4sUUFBUSxDQUFDLElBQUQsRUFBT08sVUFBUCxDQUFSO01BQ0g7SUFDSixDQW5CRDtFQW9CSCxDQTNCRDtBQTRCSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay44LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IHsgYmluZCwgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgZ2lmdENlcnRDaGVjayBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBTaGlwcGluZ0VzdGltYXRvciBmcm9tICcuL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yJztcclxuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XHJcbmltcG9ydCBDYXJ0SXRlbURldGFpbHMgZnJvbSAnLi9jb21tb24vY2FydC1pdGVtLWRldGFpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50ID0gJCgnW2RhdGEtY2FydC1jb250ZW50XScpO1xyXG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xyXG4gICAgICAgIHRoaXMuJGNhcnRUb3RhbHMgPSAkKCdbZGF0YS1jYXJ0LXRvdGFsc10nKTtcclxuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JylcclxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcclxuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcnRVcGRhdGUoJHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xyXG4gICAgICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtSWQgPSBpdGVtSWQ7XHJcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24gPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpO1xyXG5cclxuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xyXG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcclxuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xyXG4gICAgICAgIGNvbnN0IG5ld1F0eSA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnID8gb2xkUXR5ICsgMSA6IG9sZFF0eSAtIDE7XHJcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxyXG4gICAgICAgIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XHJcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCA9IG51bGwpIHtcclxuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcclxuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xyXG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcclxuICAgICAgICBjb25zdCBvbGRRdHkgPSBwcmVWYWwgIT09IG51bGwgPyBwcmVWYWwgOiBtaW5RdHk7XHJcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xyXG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcclxuICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChOdW1iZXIoJGVsLnZhbCgpKSwgMTApO1xyXG4gICAgICAgIGxldCBpbnZhbGlkRW50cnk7XHJcblxyXG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcclxuICAgICAgICBpZiAoIW5ld1F0eSkge1xyXG4gICAgICAgICAgICBpbnZhbGlkRW50cnkgPSAkZWwudmFsKCk7XHJcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHtpbnZhbGlkRW50cnl9IGlzIG5vdCBhIHZhbGlkIGVudHJ5YCxcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3UXR5IDwgbWluUXR5KSB7XHJcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcclxuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IG1heEVycm9yLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcclxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7IHByb2R1Y3RGb3JDaGFuZ2VJZDogcHJvZHVjdElkLCAuLi50aGlzLmNvbnRleHQgfTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kbW9kYWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kbW9kYWwgPSAkKCcjbW9kYWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcclxuICAgICAgICB0aGlzLiRtb2RhbC5maW5kKCcubW9kYWwtY29udGVudCcpLmFkZENsYXNzKCdoaWRlLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lciA9ICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlcy13cmFwcGVyXScsIHRoaXMuJG1vZGFsKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQgPSAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyLmNzcygnaGVpZ2h0JywgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBDYXJ0SXRlbURldGFpbHModGhpcy4kbW9kYWwsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xyXG5cclxuICAgICAgICAgICAgbW9kYWwuc2V0dXBGb2N1c1RyYXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ3Byb2R1Y3Qtb3B0aW9uLWNoYW5nZScsIChldmVudCwgY3VycmVudFRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoY3VycmVudFRhcmdldCkuZmluZCgnZm9ybScpO1xyXG4gICAgICAgICAgICBjb25zdCAkc3VibWl0ID0gJCgnaW5wdXQuYnV0dG9uJywgJGZvcm0pO1xyXG4gICAgICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5hbGVydE1lc3NhZ2VCb3gnKTtcclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoQ29udGVudChyZW1vdmUpIHtcclxuICAgICAgICBjb25zdCAkY2FydEl0ZW1zUm93cyA9ICQoJ1tkYXRhLWl0ZW0tcm93XScsIHRoaXMuJGNhcnRDb250ZW50KTtcclxuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICdjYXJ0L3BhZ2UtdGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcclxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcclxuICAgICAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzLmh0bWwocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZXMpO1xyXG5cclxuICAgICAgICAgICAgJGNhcnRQYWdlVGl0bGUucmVwbGFjZVdpdGgocmVzcG9uc2UucGFnZVRpdGxlKTtcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIHRoaXMuJGNhcnRDb250ZW50KS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xyXG5cclxuICAgICAgICAgICAgJChgW2RhdGEtY2FydC1pdGVtaWQ9JyR7dGhpcy4kYWN0aXZlQ2FydEl0ZW1JZH0nXWAsIHRoaXMuJGNhcnRDb250ZW50KVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihgW2RhdGEtYWN0aW9uPScke3RoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9ufSddYClcclxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRDYXJ0RXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGRlYm91bmNlVGltZW91dCA9IDQwMDtcclxuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcclxuICAgICAgICBjb25zdCBjYXJ0UmVtb3ZlSXRlbSA9IGJpbmQoZGVib3VuY2UodGhpcy5jYXJ0UmVtb3ZlSXRlbSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XHJcbiAgICAgICAgbGV0IHByZVZhbDtcclxuXHJcbiAgICAgICAgLy8gY2FydCB1cGRhdGVcclxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxyXG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXHJcbiAgICAgICAgJCgnLmNhcnQtaXRlbS1xdHktaW5wdXQnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2ZvY3VzJywgZnVuY3Rpb24gb25RdHlGb2N1cygpIHtcclxuICAgICAgICAgICAgcHJlVmFsID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB9KS5jaGFuZ2UoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XHJcbiAgICAgICAgICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydEl0ZW1pZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbmZpcm1EZWxldGUnKTtcclxuICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gY2FydFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1pdGVtLWVkaXRdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtRWRpdCcpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3Byb2R1Y3RJZCcpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxyXG4gICAgICAgICAgICB0aGlzLmNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkY291cG9uQ29udGFpbmVyID0gJCgnLmNvdXBvbi1jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xyXG5cclxuICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpO1xyXG4gICAgICAgICAgICAkY29kZUlucHV0LnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGNvdXBvbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjb2RlSW5wdXQudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxyXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICRjb2RlSW5wdXQuZGF0YSgnZXJyb3InKSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xyXG4gICAgICAgIGNvbnN0ICRjZXJ0Rm9ybSA9ICQoJy5jYXJ0LWdpZnQtY2VydGlmaWNhdGUtZm9ybScpO1xyXG4gICAgICAgIGNvbnN0ICRjZXJ0SW5wdXQgPSAkKCdbbmFtZT1cImNlcnRjb2RlXCJdJywgJGNlcnRGb3JtKTtcclxuXHJcbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcclxuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY2VydElucHV0LnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ2lmdENlcnRDaGVjayhjb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJGNlcnRJbnB1dC5kYXRhKCdlcnJvcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlHaWZ0Q2VydGlmaWNhdGUoY29kZSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogcmVzcC5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtR2lmdHdyYXAnKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyhpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XHJcbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICRzZWxlY3QuZGF0YSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsb3dNZXNzYWdlID0gJHNlbGVjdC5maW5kKGBvcHRpb25bdmFsdWU9JHtpZH1dYCkuZGF0YSgnYWxsb3dNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9LSR7aWR9YCkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0JykudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQoJ2lucHV0OnJhZGlvW25hbWUgPVwiZ2lmdHdyYXB0eXBlXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xyXG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcclxuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcclxuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xyXG5cclxuICAgICAgICB0b2dnbGVWaWV3cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xyXG5cclxuICAgICAgICAvLyBpbml0aWF0ZSBzaGlwcGluZyBlc3RpbWF0b3IgbW9kdWxlXHJcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9IG5ldyBTaGlwcGluZ0VzdGltYXRvcigkKCdbZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJykpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCBzd2FsIGZyb20gJy4uL2dsb2JhbC9zd2VldC1hbGVydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuXHJcbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nLCB0aGlzLiRlbGVtZW50KTtcclxuICAgICAgICB0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdEZvcm1WYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXN0aW1hdG9yRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEZvcm1WYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQgPSAkKCcuc2hpcHBpbmctcXVvdGVzJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSAnZm9ybVtkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nO1xyXG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IC5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXRgLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXQnLCB0aGlzLiRlbGVtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGVzdGltYXRvciBlcnJvciBtZXNzYWdlcyBhcmUgYmVpbmcgaW5qZWN0ZWQgaW4gaHRtbCBhcyBhIHJlc3VsdFxyXG4gICAgICAgICAgICAvLyBvZiB1c2VyIHN1Ym1pdDsgY2xlYXJpbmcgYW5kIGFkZGluZyByb2xlIG9uIHN1Ym1pdCBwcm92aWRlc1xyXG4gICAgICAgICAgICAvLyByZWd1bGFyIGFubm91bmNlbWVudCBvZiB0aGVzZSBlcnJvciBtZXNzYWdlc1xyXG4gICAgICAgICAgICBpZiAoc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5hdHRyKCdyb2xlJykpIHtcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQucmVtb3ZlQXR0cigncm9sZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRvckFsZXJ0LmF0dHIoJ3JvbGUnLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgLy8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBjb3VudHJpZXMsIHRoZSBzdGF0ZS9yZWdpb24gaXMgZHluYW1pY1xyXG4gICAgICAgICAgICAvLyBPbmx5IHBlcmZvcm0gYSBjaGVjayBmb3IgYWxsIGZpZWxkcyB3aGVuIGNvdW50cnkgaGFzIGEgdmFsdWVcclxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFyZUFsbCgndmFsaWQnKSB3aWxsIGNoZWNrIGNvdW50cnkgZm9yIHZhbGlkaXR5XHJcbiAgICAgICAgICAgIGlmICgkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWApLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYmluZFVQU1JhdGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlJZCA9IE51bWJlcih2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50cnlJZCAhPT0gMCAmJiAhTnVtYmVyLmlzTmFOKGNvdW50cnlJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ0NvdW50cnlcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWxlID0gJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVWYWwgPSAkZWxlLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcclxuICAgICAqL1xyXG4gICAgYmluZFVQU1JhdGVzKCkge1xyXG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xyXG5cclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgVVBTUmF0ZVRvZ2dsZSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcclxuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1EZWZhdWx0ID0gJCgnLmVzdGltYXRvci1mb3JtLS1kZWZhdWx0Jyk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1VcHMudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcclxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpIHtcclxuICAgICAgICBsZXQgJGxhc3Q7XHJcblxyXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcclxuICAgICAgICBzdGF0ZUNvdW50cnkodGhpcy4kc3RhdGUsIHRoaXMuY29udGV4dCwgeyB1c2VJZEZvclN0YXRlczogdHJ1ZSB9LCAoZXJyLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuZ2V0U3RhdHVzKHRoaXMuJHN0YXRlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZmllbGQuYXR0cigncGxhY2Vob2xkZXInLCAnU3RhdGUvcHJvdmluY2UnKTtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxyXG4gICAgICAgICAgICAvLyBOb3QgYWxsIGNvdW50cmllcyByZXF1aXJlIHRoZSBwcm92aW5jZSB0byBiZSBmaWxsZWRcclxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZW1vdmUgdGhpcyBjbGFzcyB3aGVuIHdlIHN3YXAgc2luY2Ugbm9kIHZhbGlkYXRpb24gZG9lc24ndCBjbGVhbnVwIGZvciB1c1xyXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVFc3RpbWF0b3JGb3JtU3RhdGUodG9nZ2xlQnV0dG9uLCBidXR0b25TZWxlY3RvciwgJHRvZ2dsZUNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSA9IChzZWxlY3RvclRvQWN0aXZhdGUpID0+IHtcclxuICAgICAgICAgICAgJCh0b2dnbGVCdXR0b24pLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIHNlbGVjdG9yVG9BY3RpdmF0ZSk7XHJcbiAgICAgICAgICAgICQoYnV0dG9uU2VsZWN0b3IpLnRleHQoJChgIyR7c2VsZWN0b3JUb0FjdGl2YXRlfWApLnRleHQoKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCkge1xyXG4gICAgICAgICAgICBjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUoJ2VzdGltYXRvci1jbG9zZScpO1xyXG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSgnZXN0aW1hdG9yLWFkZCcpO1xyXG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCA9ICF0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXN0aW1hdG9yRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XHJcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXHJcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIGNpdHk6ICQoJ1tuYW1lPVwic2hpcHBpbmctY2l0eVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIHppcF9jb2RlOiAkKCdbbmFtZT1cInNoaXBwaW5nLXppcFwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRTaGlwcGluZ1F1b3RlcyhwYXJhbXMsICdjYXJ0L3NoaXBwaW5nLXF1b3RlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2hpcHBpbmctcXVvdGVzJykuaHRtbChyZXNwb25zZS5jb250ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBiaW5kIHRoZSBzZWxlY3QgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAkKCcuc2VsZWN0LXNoaXBwaW5nLXF1b3RlJykub24oJ2NsaWNrJywgY2xpY2tFdmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuc3VibWl0U2hpcHBpbmdRdW90ZShxdW90ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuc2hpcHBpbmctZXN0aW1hdGUtc2hvd19fYnRuLW5hbWUnLCAkZXN0aW1hdG9yQ29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgaXNCcm93c2VySUUsIGNvbnZlcnRJbnRvQXJyYXkgfSBmcm9tICcuL3V0aWxzL2llLWhlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW1EZXRhaWxzIGV4dGVuZHMgUHJvZHVjdERldGFpbHNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0ge30pIHtcclxuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJyNDYXJ0RWRpdFByb2R1Y3RGaWVsZHNGb3JtJywgdGhpcy4kc2NvcGUpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCAkZm9ybSk7XHJcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlQ2FsbGJhY2sgPSBvcHRpb25DaGFuZ2VEZWNvcmF0b3IuY2FsbCh0aGlzLCBoYXNEZWZhdWx0T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXHJcbiAgICAgICAgLy8gb3IgaGF2ZSBkZWZhdWx0IHZhcmlhbnQgcHJvcGVydGllcyB0aGF0IGNoYW5nZSB0aGUgdmlld1xyXG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHRoaXMuY29udGV4dC5wcm9kdWN0Rm9yQ2hhbmdlSWQ7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQgPSBpbnB0ID0+IGlucHQuZGF0YXNldC5wcm9kdWN0QXR0cmlidXRlVmFsdWUgPT09IGNoZWNrZWQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcubW9kYWwtaGVhZGVyLXRpdGxlJyk7XHJcblxyXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xyXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9IHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcclxuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcclxuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHZpZXcuaHRtbCgpLm1hdGNoKC8nKC4qPyknLylbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZS1jb250ZW50Jyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcclxuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGluc2VydFN0YXRlSGlkZGVuRmllbGQgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcblxyXG4vKipcclxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXHJcbiAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcclxuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcclxuICAgICAgICBpZDogYXR0cnMuaWQsXHJcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxyXG4gICAgICAgIGNsYXNzOiAnZm9ybS1zZWxlY3QnLFxyXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXHJcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XHJcblxyXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcclxuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xyXG5cclxuICAgIGlmICgkaGlkZGVuSW5wdXQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAvLyBTdHJpbmcgaXMgaW5qZWN0ZWQgZnJvbSBsb2NhbGl6ZXJcclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuYXBwZW5kKGA8c21hbGw+JHtjb250ZXh0LnJlcXVpcmVkfTwvc21hbGw+YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZiBhIGNvdW50cnkgd2l0aCBzdGF0ZXMgaXMgdGhlIGRlZmF1bHQsIGEgc2VsZWN0IHdpbGwgYmUgc2VudCxcclxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlU3RhdGVPcHRpb25hbChzdGF0ZUVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcclxuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIGlkOiBhdHRycy5pZCxcclxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXHJcbiAgICAgICAgY2xhc3M6ICdmb3JtLWlucHV0JyxcclxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxyXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8aW5wdXQgLz4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcclxuXHJcbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG5cclxuICAgIGlmICgkbmV3RWxlbWVudC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyB0aGUgYXJyYXkgb2Ygb3B0aW9ucyBmcm9tIHRoZSByZW1vdGUgcmVxdWVzdCB0byB0aGUgbmV3bHkgY3JlYXRlZCBzZWxlY3QgYm94LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcclxuICogQHBhcmFtIHtqUXVlcnl9ICRzZWxlY3RFbGVtZW50XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRPcHRpb25zKHN0YXRlc0FycmF5LCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gW107XHJcblxyXG4gICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCJcIj4ke3N0YXRlc0FycmF5LnByZWZpeH08L29wdGlvbj5gKTtcclxuXHJcbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcclxuICAgICAgICBfLmVhY2goc3RhdGVzQXJyYXkuc3RhdGVzLCAoc3RhdGVPYmopID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudXNlSWRGb3JTdGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmoubmFtZX1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZUVsZW1lbnQsIGNvbnRleHQgPSB7fSwgb3B0aW9ucywgY2FsbGJhY2spIHtcclxuICAgIC8qKlxyXG4gICAgICogQmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIHRocmVlIHBhcmFtZXRlcnMgaW5zdGVhZCBvZiBmb3VyXHJcbiAgICAgKlxyXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XHJcbiAgICAgKlxyXG4gICAgICogdXNlSWRGb3JTdGF0ZXMge0Jvb2x9IC0gR2VuZXJhdGVzIHN0YXRlcyBkcm9wZG93biB1c2luZyBpZCBmb3IgdmFsdWVzIGluc3RlYWQgb2Ygc3RyaW5nc1xyXG4gICAgICovXHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4gICAgfVxyXG5cclxuICAgICQoJ3NlbGVjdFtkYXRhLWZpZWxkLXR5cGU9XCJDb3VudHJ5XCJdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChjb250ZXh0LnN0YXRlX2Vycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RFbGVtZW50ID0gbWFrZVN0YXRlUmVxdWlyZWQoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAkc2VsZWN0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=