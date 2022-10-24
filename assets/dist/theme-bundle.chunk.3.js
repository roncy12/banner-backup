(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./assets/js/theme/common/utils/safe-string.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/utils/safe-string.js ***!
  \*****************************************************/
/*! exports provided: safeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeString", function() { return safeString; });
/**
 * This function parses HTML entities in strings
 * @param str: String
 * @returns String
*/
var safeString = function safeString(str) {
  var d = new DOMParser();
  return d.parseFromString(str, 'text/html').body.textContent;
};

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 Import all product specific js
 */








var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $(document).on(_global_modal__WEBPACK_IMPORTED_MODULE_6__["ModalEvents"].opened, '#modal-review-form', function () {
      return _this2.reviewModal.setupFocusTrap();
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);

      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }

      return false;
    });
    this.productReviewHandler();
  };

  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/safe-string */ "./assets/js/theme/common/utils/safe-string.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");






var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__["announceInputErrorMessage"]
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }
  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */


  var _proto = _default.prototype;

  _proto.initLinkBind = function initLinkBind() {
    var _this = this;

    var $content = $('#productReviews-content', this.$reviewsContent);
    $('#productReview_link').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');

      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
      }
    });
  };

  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    } // force collapse on page load


    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
  }
  /**
   * Inject ID into the pagination link
   */
  ;

  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }

    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };

  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: Object(_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__["safeString"])(this.context.reviewRating)
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: Object(_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__["safeString"])(this.context.reviewSubject)
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: Object(_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__["safeString"])(this.context.reviewComment)
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };

  _proto.validate = function validate() {
    return this.validator.performCheck();
  };

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3NhZmUtc3RyaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJzYWZlU3RyaW5nIiwic3RyIiwiZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJ0ZXh0Q29udGVudCIsIlByb2R1Y3QiLCJjb250ZXh0IiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiJHJldmlld0xpbmsiLCIkIiwiJGJ1bGtQcmljaW5nTGluayIsInJldmlld01vZGFsIiwibW9kYWxGYWN0b3J5Iiwib25SZWFkeSIsImRvY3VtZW50Iiwib24iLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJwcm9kdWN0RGV0YWlscyIsIlByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJ2aWRlb0dhbGxlcnkiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCIkcmV2aWV3Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsImxlbmd0aCIsInJldmlldyIsIlJldmlldyIsIk1vZGFsRXZlbnRzIiwib3BlbmVkIiwic2V0dXBGb2N1c1RyYXAiLCJyZWdpc3RlclZhbGlkYXRpb24iLCJhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcm9kdWN0UmV2aWV3SGFuZGxlciIsIiRmb3JtIiwiZmluZCIsImVhY2giLCJfIiwiaW5wdXQiLCIkaW5wdXQiLCJtc2dTcGFuSWQiLCJhdHRyIiwic2libGluZ3MiLCJ0cmlnZ2VyIiwiUGFnZU1hbmFnZXIiLCJub2QiLCJzdWJtaXQiLCJ0YXAiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiJHJldmlld3NDb250ZW50IiwiJGNvbGxhcHNpYmxlIiwiaW5pdExpbmtCaW5kIiwiaW5qZWN0UGFnaW5hdGlvbkxpbmsiLCJjb2xsYXBzZVJldmlld3MiLCIkY29udGVudCIsImhhc0NsYXNzIiwiQ29sbGFwc2libGVFdmVudHMiLCJjbGljayIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld0NvbW1lbnQiLCJjYiIsInZhbCIsInJlc3VsdCIsImZvcm1zIiwiZW1haWwiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImlkIiwiZGF0YSIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQVM7RUFDL0IsSUFBTUMsQ0FBQyxHQUFHLElBQUlDLFNBQUosRUFBVjtFQUNBLE9BQU9ELENBQUMsQ0FBQ0UsZUFBRixDQUFrQkgsR0FBbEIsRUFB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R0FBRzlGLENBQUMsWUFBVTZGLFNBQVYsT0FBdkI7RUFFQUMsYUFBYSxDQUFDMUQsSUFBZCxDQUFtQixVQUFDMkQsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0lBQ25DLElBQU1DLEdBQUcsR0FBR2pHLENBQUMsQ0FBQ2dHLE9BQUQsQ0FBYjtJQUNBLElBQU1FLGFBQWEsR0FBR0QsR0FBRyxDQUFDWCxJQUFKLENBQVNPLFNBQVQsYUFBK0JuQixZQUFyRDs7SUFFQSxJQUFJd0IsYUFBSixFQUFtQjtNQUNmO0lBQ0g7O0lBRURELEdBQUcsQ0FBQ1gsSUFBSixDQUFTTyxTQUFULEVBQW9CLElBQUluQixZQUFKLENBQWlCdUIsR0FBakIsQ0FBcEI7RUFDSCxDQVREO0FBVUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHBhcnNlcyBIVE1MIGVudGl0aWVzIGluIHN0cmluZ3NcclxuICogQHBhcmFtIHN0cjogU3RyaW5nXHJcbiAqIEByZXR1cm5zIFN0cmluZ1xyXG4qL1xyXG5leHBvcnQgY29uc3Qgc2FmZVN0cmluZyA9IChzdHIpID0+IHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICByZXR1cm4gZC5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJykuYm9keS50ZXh0Q29udGVudDtcclxufTtcclxuIiwiLypcclxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xyXG4gKi9cclxuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XHJcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcclxuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XHJcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IE1vZGFsRXZlbnRzIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xyXG4gICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLWJ1bGstcHJpY2luZ1wiXScpO1xyXG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xyXG5cclxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcclxuXHJcbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xyXG5cclxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoJHJldmlld0Zvcm0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbihNb2RhbEV2ZW50cy5vcGVuZWQsICcjbW9kYWwtcmV2aWV3LWZvcm0nLCAoKSA9PiB0aGlzLnJldmlld01vZGFsLnNldHVwRm9jdXNUcmFwKCkpO1xyXG5cclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzKCRyZXZpZXdGb3JtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFyaWFEZXNjcmliZVJldmlld0lucHV0cygkZm9ybSkge1xyXG4gICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLWlucHV0XScpLmVhY2goKF8sIGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xyXG4gICAgICAgICAgICBjb25zdCBtc2dTcGFuSWQgPSBgJHskaW5wdXQuYXR0cignbmFtZScpfS1tc2dgO1xyXG5cclxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xyXG4gICAgICAgICAgICAkaW5wdXQuYXR0cignYXJpYS1kZXNjcmliZWRieScsIG1zZ1NwYW5JZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidWxrUHJpY2luZ0hhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XHJcbmltcG9ydCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcclxuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xyXG5pbXBvcnQgeyBzYWZlU3RyaW5nIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL3NhZmUtc3RyaW5nJztcclxuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCRyZXZpZXdGb3JtKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICRyZXZpZXdGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyNwcm9kdWN0LXJldmlld3MnKTtcclxuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHRoaXMuJHJldmlld3NDb250ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0TGlua0JpbmQoKTtcclxuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJldmlld3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXHJcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxyXG4gICAgICovXHJcbiAgICBpbml0TGlua0JpbmQoKSB7XHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcclxuXHJcbiAgICAgICAgJCgnI3Byb2R1Y3RSZXZpZXdfbGluaycpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXJldmlld1RhYkxpbmsnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICBpZiAoISRjb250ZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VSZXZpZXdzKCkge1xyXG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZm9yY2UgY29sbGFwc2Ugb24gcGFnZSBsb2FkXHJcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3QgSUQgaW50byB0aGUgcGFnaW5hdGlvbiBsaW5rXHJcbiAgICAgKi9cclxuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xyXG4gICAgICAgIGNvbnN0ICRuZXh0TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcclxuICAgICAgICBjb25zdCAkcHJldkxpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cyAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoJG5leHRMaW5rLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkcHJldkxpbmsubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxyXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcpLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRpdGxlXCJdJyxcclxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3U3ViamVjdCksXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld0NvbW1lbnQpLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcud3JpdGVSZXZpZXctZm9ybSBbbmFtZT1cImVtYWlsXCJdJyxcclxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xyXG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXHJcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1haW5WaWRlbygpIHtcclxuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xyXG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xyXG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcclxuXHJcbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcclxuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcclxuXHJcbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==