(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Compare; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Compare = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Compare, _PageManager);

  function Compare() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Compare.prototype;

  _proto.onReady = function onReady() {
    var _this = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    var message = this.context.compareRemoveMessage;
    $('body').on('click', '[data-comparison-remove]', function (event) {
      if (_this.context.comparisons.length <= 2) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])(message);
        event.preventDefault();
      }
    });
  };

  return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiQ29tcGFyZSIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsIm1lc3NhZ2UiLCJjb21wYXJlUmVtb3ZlTWVzc2FnZSIsIiQiLCJvbiIsImV2ZW50IiwiY29tcGFyaXNvbnMiLCJsZW5ndGgiLCJzaG93QWxlcnRNb2RhbCIsInByZXZlbnREZWZhdWx0IiwiUGFnZU1hbmFnZXIiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybENvbnRleHQiLCJpcyIsImFkZENsYXNzIiwiYXR0ciIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJtYXAiLCJlbGVtZW50IiwidmFsdWUiLCJnZXQiLCJ0cmlnZ2VySGFuZGxlciIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtJQUFBOztJQUNOQyx3RUFBZSxDQUFDLEtBQUtDLE9BQUwsQ0FBYUMsSUFBZCxDQUFmO0lBRUEsSUFBTUMsT0FBTyxHQUFHLEtBQUtGLE9BQUwsQ0FBYUcsb0JBQTdCO0lBRUFDLENBQUMsQ0FB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QWpCLENBQWhCO0lBQ0g7O0lBRURuQixnQkFBZ0IsQ0FBQ1csY0FBRCxFQUFpQlUsbUJBQWpCLEVBQXNDbkIsVUFBdEMsQ0FBaEI7RUFDSCxDQVhEO0VBYUFsQixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLHdCQUF2QixFQUFpRCxVQUFBQyxLQUFLLEVBQUk7SUFDdEQsSUFBTXFDLEtBQUssR0FBR3ZDLENBQUMsQ0FBQ0UsS0FBSyxDQUFDa0MsYUFBUCxDQUFmO0lBQ0EsSUFBTUksaUJBQWlCLEdBQUdELEtBQUssQ0FBQ2YsSUFBTixDQUFXLG9DQUFYLENBQTFCOztJQUVBLElBQUlnQixpQkFBaUIsQ0FBQ3BDLE1BQWxCLElBQTRCLENBQWhDLEVBQW1DO01BQy9CQyw2REFBYyxDQUFDLGtEQUFELENBQWQ7TUFDQUgsS0FBSyxDQUFDSSxjQUFOO0lBQ0g7RUFDSixDQVJEO0VBVUFOLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLE9BQWIsRUFBc0IscUJBQXRCLEVBQTZDLFlBQU07SUFDL0MsSUFBTXdDLG9CQUFvQixHQUFHekMsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVd0IsSUFBVixDQUFlLG9DQUFmLENBQTdCOztJQUVBLElBQUlpQixvQkFBb0IsQ0FBQ3JDLE1BQXJCLElBQStCLENBQW5DLEVBQXNDO01BQ2xDQyw2REFBYyxDQUFDLGtEQUFELENBQWQ7TUFDQSxPQUFPLEtBQVA7SUFDSDtFQUNKLENBUEQ7QUFRSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFyZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY29udGV4dC5jb21wYXJlUmVtb3ZlTWVzc2FnZTtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJpc29uLXJlbW92ZV0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuY29tcGFyaXNvbnMubGVuZ3RoIDw9IDIpIHtcclxuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XHJcblxyXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcclxuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcclxuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xyXG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxDb250ZXh0LmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XHJcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcclxuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xyXG5cclxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/ICRjaGVja2VkLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IGVsZW1lbnQudmFsdWUpLmdldCgpIDogW107XHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1RvQ29tcGFyZSA9ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9