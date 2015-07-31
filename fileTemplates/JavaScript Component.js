(function($) {
  'use strict';

  /**
   * @param {HTMLElement} el - The DOM element.
   * @param {Object} options
   * @constructor
   */
  function ${Pascal}(el, options) {
    this.el = $(el);
    this.options = $.extend({}, ${COMPONENT_NAME}.DEFAULTS_, options);
  }

  ${Pascal}.DEFAULTS = {};

  /**
   * jQuery plugin
   * @param  {object} options - Override default options.
   */
  $.fn.${Camel} = function() {
    return this.each(function() {
      var el = $(this);
      new ${Pascal}(el, el.data());
    });
  };

  /**
   * Data Attribute API
   */
  $(function() {
    $('[data-${Dashed}]').${Camel}();
  });
})(jQuery);
