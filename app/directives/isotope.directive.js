var FitColumns = Isotope.LayoutMode.modes.fitColumns;
FitColumns.prototype._getContainerSize = function() {};

FitColumns.prototype.needsResizeLayout = function() {
  // don't trigger if size did not change
  var size = getSize( this.isotope.element );
  if ( this.isotope.size && size ) {
    return size.innerHeight !== this.isotope.size.innerHeight ||
      size.innerWidth !== this.isotope.size.innerWidth;
  } else {
    return false;
  }
};

export default [function(){
  function link(scope, element, attrs) {
    scope.$watch('data', function(c){
      if(c.length === 0) return;
      manipulateDOM(element);
    });
  }

  function manipulateDOM(element){
    $(element).isotope({
      itemSelector: 'sr-story',
      layoutMode: 'fitColumns'
    });
  }

  function getCellsLeftOffsets($cells){
    return $.unique($cells.map(function(){
      return $(this).offset().left;
    })).toArray();
  }

  return {
    restrict: 'A',
    scope: {
      data: '=isotope'
    },
    link,
  };
}];
