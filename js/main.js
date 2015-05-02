$(document).ready(function () {
    displayGrid(16);

    $('.tile').mouseenter(function () {
        $(this).css('background', 'white');
    });

    $('#normal').click(function () {
        setGrid();
        $('.tile').unbind();
        $('.tile').mouseenter(function () {
            $(this).css('background', 'white');
        });
    });
    $('#random').click(function () {
        setGrid();
        $('.tile').unbind();
        $('.tile').mouseenter(function () {
            $(this).css('background', get_rand_color());
        });
    });
    $('#opacity').click(function () {
        setGrid();
        $('.tile').unbind();
        $('.tile').mouseenter(function () {
            opacity($(this));
        });
    });
    $('#trail').click(function () {
        setGrid();
        $('.tile').unbind();
        $('.tile').hover(function () {
            $(this).css('opacity', 0);
        }, function () {
            $(this).fadeTo('fast', 1);
        });
    });
    $('#clear').click(function () {
        clear();
    });
}); //end document.ready()

//Function to display the Grid that limits the width based on the viewport height, so the grid fits on the screen
function displayGrid(n) {
    var viewportSize = $(window).height();
    var heightLimit = viewportSize*.75;
    $('.wrapper').width(heightLimit);
    // Hacky element here to remove the 2 pixels of border
    var boxSize = (heightLimit/n) - 2;
    var wrapper = $('.wrapper').html("");
    for (var i=0;i<n;i++){
        for (var j=0;j<n;j++){
            wrapper.append($('<div></div>').addClass('tile').width(boxSize).css('padding-bottom', boxSize));
        }
        //wrapper.append($('<div></div>').css('clear', 'both'));
    }
    wrapper.append($('<div></div>').css('clear', 'both'));
}
function get_rand_color() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}
function opacity(tile) {
    var opacity = tile.css('opacity');
    var nextOpacity = opacity - 0.1;
    if (nextOpacity > 0) {
        tile.css('opacity', nextOpacity);
    } else {
        tile.css('opacity', 0);
    }
}
function clear() {
    $('.tile').css('background', '#1E1E1E').css('opacity', '1');
}
function setGrid() {
    var col = prompt("Enter number of columns you want: ");
    displayGrid(col);
    clear();
}