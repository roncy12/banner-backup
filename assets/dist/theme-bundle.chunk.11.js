(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);

  function Category(context) {
    var _this;

    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    return _this;
  }

  var _proto = Category.prototype;

  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };

  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;

    if (!$('[data-shop-by-price]').length) return;

    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }

    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };

  _proto.onReady = function onReady() {
    var _this3 = this;

    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();
  };

  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');

    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this$validationDicti = this.validationDictionary,
        onMinPriceError = _this$validationDicti.price_min_evaluation,
        onMaxPriceError = _this$validationDicti.price_max_evaluation,
        minPriceNotEntered = _this$validationDicti.price_min_not_entered,
        maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
        onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };

  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';

var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};

var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};
/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */


var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
      validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
      validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJjb250ZXh0IiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIiRlbGVtZW50Iiwicm9sZVR5cGUiLCJhcmlhTGl2ZVN0YXR1cyIsImF0dHIiLCJyb2xlIiwibWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSIsIiQiLCJsZW5ndGgiLCJoYXNDbGFzcyIsImZvY3VzIiwib24iLCJvblJlYWR5IiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJjb21wYXJlUHJvZHVjdHMiLCJ1cmxzIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsInNldExpdmVSZWdpb25zQXR0cmlidXRlcyIsImFyaWFOb3RpZnlOb1Byb2R1Y3RzIiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiQ2F0YWxvZ1BhZ2UiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsIkpTT04iLCJwYXJzZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxROzs7RUFDakIsa0JBQVlDLE9BQVosRUFBcUI7SUFBQTs7SUFDakIsZ0NBQU1BLE9BQU47SUFDQSxNQUFLQyxvQkFBTCxHQUE0QkMsMEdBQTJCLENBQUNGLE9BQUQsQ0FBdkQ7SUFGaUI7RUFHcEI7Ozs7U0FFREcsdUIsR0FBQSxpQ0FBd0JDLFFBQXhCLEVBQWtDQyxRQUFsQyxFQUE0Q0MsY0FBNUMsRUFBNEQ7SUFDeERGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjO01BQ1ZDLElBQUksRUFBRUgsUUFESTtNQUVWLGFBQWFDO0lBRkgsQ0FBZDtFQUlILEM7O1NBRURHLCtCLEdBQUEsMkNBQWtDO0lBQUE7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QUFELENBQW5DLEVBQWlEO01BQzdDLE9BQU9BLFVBQVA7SUFDSDtFQUNKO0FBQ0osQ0FQRDtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTTlELDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0YsT0FBRCxFQUFhO0VBQ3BELElBQVF1RSx3QkFBUixHQUF3R3ZFLE9BQXhHLENBQVF1RSx3QkFBUjtFQUFBLElBQWtDQyxnQ0FBbEMsR0FBd0d4RSxPQUF4RyxDQUFrQ3dFLGdDQUFsQztFQUFBLElBQW9FQywrQkFBcEUsR0FBd0d6RSxPQUF4RyxDQUFvRXlFLCtCQUFwRTtFQUNBLElBQU1DLGdCQUFnQixHQUFHUCxzQkFBc0IsQ0FBQ0ksd0JBQUQsRUFBMkJDLGdDQUEzQixFQUE2REMsK0JBQTdELENBQS9DO0VBQ0EsSUFBTUUsYUFBYSxHQUFHVixNQUFNLENBQUNXLE1BQVAsQ0FBY0YsZ0JBQWdCLENBQUNaLFlBQUQsQ0FBOUIsQ0FBdEI7RUFDQSxJQUFNZSxlQUFlLEdBQUdaLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUSxnQkFBZ0IsQ0FBQ1osWUFBRCxDQUE1QixFQUE0Q2dCLEdBQTVDLENBQWdELFVBQUFDLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUNDLEtBQUosQ0FBVSxHQUFWLEVBQWVDLEdBQWYsRUFBSjtFQUFBLENBQW5ELENBQXhCO0VBRUEsT0FBT0osZUFBZSxDQUFDSyxNQUFoQixDQUF1QixVQUFDQyxHQUFELEVBQU1KLEdBQU4sRUFBV1gsQ0FBWCxFQUFpQjtJQUMzQ2UsR0FBRyxDQUFDSixHQUFELENBQUgsR0FBV0osYUFBYSxDQUFDUCxDQUFELENBQXhCO0lBQ0EsT0FBT2UsR0FBUDtFQUNILENBSE0sRUFHSixFQUhJLENBQVA7QUFJSCxDQVZNLEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XHJcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XHJcbiAgICAgICAgICAgIHJvbGU6IHJvbGVUeXBlLFxyXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpIHtcclxuICAgICAgICBpZiAoISQoJ1tkYXRhLXNob3AtYnktcHJpY2VdJykubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICgkKCcubmF2TGlzdC1hY3Rpb24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgJCgnYS5uYXZMaXN0LWFjdGlvbi5pcy1hY3RpdmUnKS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnYS5uYXZMaXN0LWFjdGlvbicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJCgnc3Bhbi5wcmljZS1maWx0ZXItbWVzc2FnZScpLCAnc3RhdHVzJywgJ2Fzc2VydGl2ZScpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpO1xyXG5cclxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xyXG5cclxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnYS5yZXNldC1idG4nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25zQXR0cmlidXRlcygkKCdzcGFuLnJlc2V0LW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhcmlhTm90aWZ5Tm9Qcm9kdWN0cygpIHtcclxuICAgICAgICBjb25zdCAkbm9Qcm9kdWN0c01lc3NhZ2UgPSAkKCdbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dJyk7XHJcbiAgICAgICAgaWYgKCRub1Byb2R1Y3RzTWVzc2FnZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJG5vUHJvZHVjdHNNZXNzYWdlLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcclxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcclxuICAgICAgICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxyXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcclxuICAgICAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcclxuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xyXG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xyXG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXHJcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxyXG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xyXG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=