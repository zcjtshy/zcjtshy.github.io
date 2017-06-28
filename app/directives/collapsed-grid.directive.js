const MARGIN = 30;

export default [function(){
  function link(scope, element, attrs) {
    $(element).css('position', 'relative');
    window.addEventListener('resize', () => manipulateDOM(element));

    var observer = new MutationObserver(function() {
      $(element).find('img').on('load', function(){
        manipulateDOM(element);
      });
      manipulateDOM(element);
    });
    observer.observe($(element).get(0), { childList: true });
  }

  function manipulateDOM(element){
    const $container = $(element);
    const $cells = $(element).children();
    if($cells.length === 0) return;

    resetCells($cells); 
    // subtract cell width by the margin
    $cells.outerWidth($cells.outerWidth(true) - MARGIN);

    const containerWidth = $container.outerWidth(true);
    const cellWidth = $cells.first().outerWidth(true);
    const columnCount = Math.floor(containerWidth/cellWidth);

    // set lefts
    setCellsLefts($cells, columnCount);
    // set tops
    setCellsTops($cells, columnCount);
  }
  
  function resetCells($cells){
    $cells.css('position', 'absolute')
      .css('top', '0')
      .css('left', '0')
      .css('width', '')
      .css('height', '');
  }


  function setCellsLefts($cells, columnCount){
    const cellWidth = $cells.first().outerWidth(true);
    const columns = allocateCellsIntoCols($cells, columnCount);
    columns.forEach(($col, i) => {
      $col.css('left', (cellWidth + MARGIN)*i + 'px');
    });
  }

  function setCellsTops($cells, columnCount){
    const columns = allocateCellsIntoCols($cells, columnCount);
    columns.forEach(($col) => {
      const columnHeights = $col.map(function(){
        return $(this).outerHeight(true);
      }).toArray();

      // this accumulates the heights to obtain the tops
      const columnTops = columnHeights.reduce((arr, x, i) => {
        return arr.concat([arr[i] + x]);
      }, [0]);


      $col.css('top', function(i){
        return columnTops[i] + 'px';
      });
    });
  }

  function allocateCellsIntoCols($cells, columnCount){
    function initCols(columnCount){
      return new Array(columnCount).fill(true).map(() => []);
    }
    // these are the strategies available
    function simple($cells, columnCount){
      const columns = initCols(columnCount);

      $cells.each(function(i){
        columns[i % columnCount].push(this);
      });

      return columns.map(col => $(col));
    }

    function binPacking($cells, columnCount){
      const heightSum = (cells) => {
        return cells.map(c => $(c).outerHeight(true)).reduce((x, y) => x + y, 0);
      };
      const minIndex = (arr) => arr.reduce((mi, x, i) => arr[mi] <= x? mi: i, 0);
      const columns = initCols(columnCount);

      $cells.each(function(i){
        columns[minIndex(columns.map(heightSum))].push(this); 
      });

      return columns.map(col => $(col));
    }

    return binPacking($cells, columnCount);
  }


  return {
    restrict: 'A',
    link,
  };
}];
