let playground = [40];

/*var fieldCols = 40;
var fieldRows = 40;
*/

var tileWidth = 32;
var tileHeight = 15;

var wallWidth = 18;
var wallHeight = 32;

var fieldCols = 10;
var fieldRows = 10;

var fieldBottomAdjustment = 8 ;
var fieldLeftAdjustment = 16 ;


$( document ).ready(function() {
    console.log('start');

    var body = $('body');

    for (var row = 0; row < fieldRows; row++ ) {
        for (var col = 0; col < fieldCols; col++ ) {
            var div = $('<div class="tile" data-row="'+row+'" data-col="'+col+'"><div class="tile-container"></div></div>');

            div.css('width', tileWidth);
            div.css('height', tileHeight);

            div.css('bottom', ((row) - (col)) * fieldBottomAdjustment);
            div.css('left', ((col ) + (row )) * fieldLeftAdjustment);
            body.append(div);
        }

    }

    //paintRightWall(3,3);


    //paintHouseGround(3,8)

    var no = {};
    var so = {};
    var sw = {};
    var nw = {};

    /*
    paintWall('so', 3,3);
    paintWall('sw', 3,3);
    paintWall('no', 3,3);
    paintWall('nw', 3,3);
*/
    paintWall('nw', 3,3);
    paintWall('nw', 3,4);
    paintWall('nw', 3,5);
    paintWall('nw', 3,6);
    paintWall('nw', 3,7);

    paintWall('no', 3,7);
    paintWall('no', 4,7);
    paintWall('no', 5,7);
    paintWall('no', 6,7);
    paintWall('no', 7,7);

    paintWall('so', 7,7);
    paintWall('so', 7,6);
    paintWall('so', 7,5);
    paintWall('so', 7,4);
    paintWall('so', 7,3);

    paintWall('sw', 7,3);
    paintWall('sw', 6,3);
    paintWall('sw', 5,3);
    paintWall('sw', 4,3);
    paintWall('sw', 3,3);


/*
    paintLeftWall(3, 7);
    paintLeftWall(4, 7);
    paintLeftWall(5, 7);
    paintLeftWall(6, 7);
    paintLeftWall(7, 7);

    paintRightWall(7, 6);
    paintRightWall(7, 5);
    paintRightWall(7, 4);
    paintRightWall(7, 3);
    paintRightWall(7, 2);

    paintRightWall(2, 6);
    paintRightWall(2, 5, '-window');
    paintRightWall(2, 4);
    paintRightWall(2, 3, '-window');
    paintRightWall(2, 2);

    paintLeftWall(3, 2);
    paintLeftWall(4, 2, '-window');
    paintLeftWall(5, 2, '-door');
    paintLeftWall(6, 2, '-window');
    paintLeftWall(7, 2);
*/


    paintCorner(7,2);

    function paintWall(type, paintCol, paintRow, cssModifier = '') {
        var wall = $('<div class="wall '+type+'-wall'+cssModifier+'"></div>');
        wall.css("z-index", calculateZIndex(paintRow, paintCol));
        getCell(paintRow, paintCol).append(wall);
    }

    function paintRightWall(paintCol, paintRow, cssModifier = '') {
        var wall = $('<div class="wall rightWall'+cssModifier+'"></div>');
        wall.css("z-index", calculateZIndex(paintRow, paintCol));
        getCell(paintRow, paintCol).append(wall);
    }
    function paintLeftWall(paintCol, paintRow, cssModifier = '') {
        var wall = $('<div class="wall leftWall'+cssModifier+'"></div>');
        wall.css("z-index", calculateZIndex(paintRow, paintCol));
        getCell(paintRow, paintCol).append(wall);
    }

    function paintCorner(paintCol, paintRow) {
        var wall = $('<div class="wall-corner"></div>');
        getCell(paintRow, paintCol).append(wall);
    }

    function calculateZIndex(paintRow, paintCol) {
        return 1000000 - 1000 * paintRow + 10 * paintCol;
    }

    function getCell(row, col) {
        return $('[data-row="' + row + '"][data-col="' + col + '"] .tile-container');;
    }

});
