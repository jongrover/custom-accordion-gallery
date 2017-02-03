$(function () {
  var $accordian = $('.accordion'),
      $panel = $accordian.find('.panel'),
      panelCount = $panel.length,
      panelWidth = 100 / panelCount;
      accordianWidth = $accordian.width(),
      animateSpeed = 400;
  $panel.css({'width': panelWidth+"%"});
  $panel.click(function () {
    var $selPanel = $(this),
        $nonSelPanels = $panel.not($selPanel),
        $selImg = $selPanel.find('img'),
        selImgWidth = $selImg.width(),
        nonSelPanelsWidth = (accordianWidth - selImgWidth) / (panelCount - 1);
    $nonSelPanels.animate({'width': nonSelPanelsWidth}, animateSpeed);
    $selPanel.animate({'width': selImgWidth}, animateSpeed);
  });
});
