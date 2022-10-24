(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }

  var _proto = CatalogPage.prototype;

  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');

    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");











var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
  priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
  modalOpen: false
};
/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    if (this.options.modal) {
      this.options.modal.$modal.on(_global_modal__WEBPACK_IMPORTED_MODULE_7__["ModalEvents"].opened, function (event) {
        var $filterItems = $(event.target).find('#facetedSearch-filterItems');

        if ($filterItems.length) {
          _this.options.modal.setupFocusTrap();
        }
      });
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__["Validators"].setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page; // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead

    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseQueryParams(queryParams);

    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    } // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead


    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };

  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl); // If searchParams does not contain a page value then modify url query string to have page=1

    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }

    $(window).trigger('statechange');
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJDYXRhbG9nUGFnZSIsImNvbnRleHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc29ydEJ5U2VsZWN0b3IiLCIkIiwiZ2V0SXRlbSIsImZvY3VzIiwicmVtb3ZlSXRlbSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwiVXJsIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbEZhY3RvcnkiLCJtb2RhbE9wZW4iLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJjb2xsYXBzZWRGYWNldHMiLCJjb2xsYXBzZWRGYWNldEl0ZW1zIiwiJG1vZGFsIiwib24iLCJNb2RhbEV2ZW50cyIsIm9wZW5lZCIsIiRmaWx0ZXJJdGVtcyIsInRhcmdldCIsImZpbmQiLCJsZW5ndGgiLCJzZXR1cEZvY3VzVHJhcCIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImluaXRQcmljZVZhbGlkYXRvciIsImVhY2giLCJpbmRleCIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJkYXRhIiwiaXNDb2xsYXBzZWQiLCJwdXNoIiwidGFyZ2V0SWQiLCJzZXRUaW1lb3V0IiwiaXMiLCJjb2xsYXBzZUFsbEZhY2V0cyIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsInNob3ciLCJhcGkiLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwiZXhwYW5kRmFjZXRJdGVtcyIsIiRuYXZMaXN0IiwiYXR0ciIsImhhc01vcmVSZXN1bHRzIiwidG9nZ2xlRmFjZXRJdGVtcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsInZhbGlkYXRvciIsIm5vZCIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJWYWxpZGF0b3JzIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJ1bmJpbmRFdmVudHMiLCJvblBvcFN0YXRlIiwiaG9va3MiLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ1cmxRdWVyeVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwicGFyc2VRdWVyeVBhcmFtcyIsImtleSIsImhhc093blByb3BlcnR5IiwiY3VycmVudFVybCIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImhhcyIsImxpbmtVcmwiLCJyZSIsInVwZGF0ZWRMaW5rVXJsIiwicmVwbGFjZSIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInRyaWdnZXIiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwidXBkYXRlQ291bnRlck5hdiIsInVybENvbnRleHQiLCJhZGRDbGFzcyIsImNvbXBhcmUiLCJqb2luIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsIm1hcCIsInZhbHVlIiwiZ2V0IiwidHJpZ2dlckhhbmRsZXIiLCJwcm9kdWN0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxXOzs7RUFDakIscUJBQVlDLE9BQVosRUFBcUI7SUFBQTs7SUFDakIsZ0NBQU1BLE9BQU47SUFFQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixjQUF4QixFQUF3QyxZQUFNO01BQzFDLElBQUlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkMsRUFBdkIsS0FBOEIsTUFBbEMsRUFBMEM7UUFDdENKLE1BQU0sQ0FBQ0ssWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsY0FBNUIsRUFBNEMsVUFBNUM7TUFDSDtJQUNKLENBSkQ7SUFIaUI7RUFRcEI7Ozs7U0FFREMsb0IsR0FBQSxnQ0FBdUI7SUFDbkIsSUFBTUMsZUFBZSxHQUFHQyxDQUFDLENBQUMsZ0NBQUQsQ0FBekI7O0lBRUEsSUFBSVQsTUFBTSxDQUFDSyxZQUFQLENBQW9CSyxPQUFwQixDQUE0QixjQUE1QixDQUFKLEVBQWlEO01BQzdDRixlQUFlLENBQUNHLEtBQWhCO01BQ0FYLE1BQU0sQ0FBQ0ssWUFBUCxDQUFvQk8sVUFBcEIsQ0FBK0IsY0FBL0I7SUFDSDtFQUNKLEM7O1NBRURDLGMsR0FBQSx3QkFBZUMsS0FBZixFQUFzQkMsYUFBdEIsRUFBcUM7SUFDakMsSUFBTUMsR0FBRyxHQUFHQywwQ0FBRyxDQUFDQyxLQUFKLENBQVVsQixNQUFNLENBQUNtQixRQUFQLENBQWdCQyxJQUExQixFQUFnQyxJQUFoQyxDQUFaO0lBQ0EsSUFBTUMsV0FBVyxHQUFHWixDQUFDLENBQUNNLGFBQUQsQ0FBRCxDQUFpQk8sU0FBakIsR0FBNkJDLEtBQTdC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LENBQWQ7TUFDQXRMLEtBQUssQ0FBQ1ksY0FBTjtJQUNIO0VBQ0osQ0FSRDtFQVVBakIsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVK0MsRUFBVixDQUFhLE9BQWIsRUFBc0IscUJBQXRCLEVBQTZDLFlBQU07SUFDL0MsSUFBTTZJLG9CQUFvQixHQUFHNUwsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVb0QsSUFBVixDQUFlLG9DQUFmLENBQTdCOztJQUVBLElBQUl3SSxvQkFBb0IsQ0FBQ3ZJLE1BQXJCLElBQStCLENBQW5DLEVBQXNDO01BQ2xDc0ksNkRBQWMsQ0FBQyxrREFBRCxDQUFkO01BQ0EsT0FBTyxLQUFQO0lBQ0g7RUFDSixDQVBEO0FBUUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xyXG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgPT09ICdzb3J0Jykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3J0QnlTdGF0dXMnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFycmFuZ2VGb2N1c09uU29ydEJ5KCkge1xyXG4gICAgICAgIGNvbnN0ICRzb3J0QnlTZWxlY3RvciA9ICQoJ1tkYXRhLXNvcnQtYnk9XCJwcm9kdWN0XCJdICNzb3J0Jyk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRCeVN0YXR1cycpKSB7XHJcbiAgICAgICAgICAgICRzb3J0QnlTZWxlY3Rvci5mb2N1cygpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NvcnRCeVN0YXR1cycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcclxuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcclxuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXRpbHMvdXJsLXV0aWxzJztcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBNb2RhbEV2ZW50cyB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcclxuXHJcblxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxyXG4gICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxyXG4gICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcclxuICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXHJcbiAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcclxuICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXHJcbiAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcclxuICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXHJcbiAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nLFxyXG4gICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyxcclxuICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxyXG4gICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxyXG4gICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXHJcbiAgICBtb2RhbE9wZW46IGZhbHNlLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XHJcbiAqL1xyXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKlxyXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcclxuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xyXG4gICAgICogICAgIH1cclxuICAgICAqIH07XHJcbiAgICAgKlxyXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XHJcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG4gICAgICogfTtcclxuICAgICAqXHJcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5vcGVuZWQsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWx0ZXJJdGVtcyA9ICQoZXZlbnQudGFyZ2V0KS5maW5kKCcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRmaWx0ZXJJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuc2V0dXBGb2N1c1RyYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xyXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xyXG5cclxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxyXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XHJcblxyXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xyXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxyXG4gICAgICAgIC8vIE5PVEU6IE5lZWQgdG8gZXhlY3V0ZSBhZnRlciBDb2xsYXBzaWJsZSBnZXRzIGJvb3RzdHJhcHBlZFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblRvZ2dsZUNsaWNrID0gdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkZhY2V0Q2xpY2sgPSB0aGlzLm9uRmFjZXRDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJGYWNldEl0ZW1zID0gdGhpcy5maWx0ZXJGYWNldEl0ZW1zLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcclxuXHJcbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXHJcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xyXG5cclxuICAgICAgICAvLyBCaW5kIGV2ZW50c1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XHJcblxyXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpZXcoY29udGVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlXHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcclxuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XHJcblxyXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcclxuICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xyXG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XHJcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckZhY2V0SXRlbXMoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkaXRlbXMgPSAkKCcubmF2TGlzdC1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcblxyXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcclxuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xyXG5cclxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kQWxsRmFjZXRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xyXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xyXG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUVycm9yU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcclxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcclxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMsIHRoaXMub3B0aW9ucy52YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcclxuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XHJcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICAvLyBDbGVhbi11cFxyXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIC8vIERPTSBldmVudHNcclxuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcclxuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xyXG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xyXG5cclxuICAgICAgICAvLyBIb29rc1xyXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XHJcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcclxuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZEV2ZW50cygpIHtcclxuICAgICAgICAvLyBET00gZXZlbnRzXHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xyXG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xyXG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcclxuXHJcbiAgICAgICAgLy8gSG9va3NcclxuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcclxuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcclxuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgVVJMXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GYWNldENsaWNrKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcclxuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XHJcblxyXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxyXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xyXG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKS5zcGxpdCgnJicpO1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwucXVlcnlba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxyXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcclxuXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcclxuXHJcbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Qb3BTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50VXJsKTtcclxuICAgICAgICAvLyBJZiBzZWFyY2hQYXJhbXMgZG9lcyBub3QgY29udGFpbiBhIHBhZ2UgdmFsdWUgdGhlbiBtb2RpZnkgdXJsIHF1ZXJ5IHN0cmluZyB0byBoYXZlIHBhZ2U9MVxyXG4gICAgICAgIGlmICghc2VhcmNoUGFyYW1zLmhhcygncGFnZScpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtVcmwgPSAkKCcucGFnaW5hdGlvbi1saW5rJykuYXR0cignaHJlZicpO1xyXG4gICAgICAgICAgICBjb25zdCByZSA9IC9wYWdlPVswLTldKy9pO1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkTGlua1VybCA9IGxpbmtVcmwucmVwbGFjZShyZSwgJ3BhZ2U9MScpO1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cGRhdGVkTGlua1VybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xyXG4iLCJpbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xyXG5cclxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XHJcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybENvbnRleHQpIHtcclxuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xyXG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xyXG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmxDb250ZXh0KSB7XHJcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcclxuXHJcbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyAkY2hlY2tlZC5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlKS5nZXQoKSA6IFtdO1xyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybENvbnRleHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnW2RhdGEtcHJvZHVjdC1jb21wYXJlXScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==