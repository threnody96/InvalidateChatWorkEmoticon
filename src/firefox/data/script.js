jQuery(function($) {
  $(document).on('inview', '.ui_emoticon', function(e) {
    $emoticon = $(e.currentTarget)
    $emoticon.replaceWith($emoticon.attr("alt"));
  });
});
