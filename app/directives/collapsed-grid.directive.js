const MARGIN = 30;

export default [function(){
  function link(scope, element, attrs) {
    $(element).css('position', 'relative');
    window.addEventListener('resize', () => manipulateDOM(element));
    scope.$watch('data', function(c){
      setTimeout(function(){
        manipulateDOM(element);
      }, 0);
    });
  }

  function manipulateDOM(element){
    const $container = $(element);
    const $cells = $(element).children();
    resetCells($cells); 
    // subtract cell width by the margin
    $cells.outerWidth($cells.outerWidth(true) - MARGIN);

    putCellsIntoRows($cells, getColumnCount($container, $cells));
    putCellsIntoCols($cells, getColumnCount($container, $cells));
  }
  
  function resetCells($cells){
    console.log('hi');
    $cells.css('position', 'absolute')
      .css('top', '0')
      .css('left', '0')
      .css('width', '')
      .css('height', '');
  }

  function getColumnCount($container, $cells){
    const cellWidth = $cells.first().outerWidth(true);
    const containerWidth = $container.outerWidth(true);
    return Math.floor(containerWidth/cellWidth);
  }

  function putCellsIntoRows($cells, columnCount){
    const cellWidth = $cells.first().outerWidth(true);
    $cells.each(function(i){
      const col = i % columnCount;
      $(this).css('left', (cellWidth + MARGIN)*col + 'px');
    });
  }

  function putCellsIntoCols($cells, columnCount){
    const columns = [];
    for(let i = 0; i < columnCount; i++){
      columns.push(getCellsInCol(i, $cells, columnCount));
    }

    columns.forEach(putCellsIntoCol);
  }

  function putCellsIntoCol($cells){
    const columnHeights = $cells.map(function(){
      return $(this).outerHeight(true);
    }).toArray();

    // this accumulates the heights to obtain the tops
    const columnTops = columnHeights.reduce((arr, x, i) => {
      return arr.concat([arr[i] + x]);
    }, [0]);


    $cells.css('top', function(i){
      return columnTops[i] + 'px';
    });
  }

  function getCellsInCol(x, $cells, columnCount){
    return $cells.filter(function(i){
      return (i % columnCount) === x;
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
      data: '=collapsedGrid'
    },
    link,
  };
}];
