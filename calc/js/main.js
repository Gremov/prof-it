/* Calculator algorithm */

window.onload = function () {
    var buttons = document.getElementsByTagName('span'),
        result = document.querySelectorAll('.result p')[0],
        clear = document.getElementsByClassName('clear')[0];

    for (var i = 0; i < buttons.length; i += 1) {
        if (buttons[i].innerHTML === '=') {
            buttons[i].addEventListener("click", calculate(i));
        } else {
            buttons[i].addEventListener("click", addValue(i));
        };
    };

    clear.onclick = function () {
        result.innerHTML = '';
    };

    function addValue(i) {
        return function () {
            if (buttons[i].innerHTML === '÷') {
                result.innerHTML  += '/';
            } else if (buttons[i].innerHTML === 'x') {
                result.innerHTML  += '*';
            } else {
                result.innerHTML  += buttons[i].innerHTML;
            };
        };
    };

    function calculate(i) {
        return function () {
            result.innerHTML = eval(result.innerHTML);
        };
    };
};




/* Calculator show/hide button actions*/

$(function() {
    var calculator = $('.calculator'),
        buttonLink = $('.container .calc-button'),
        indexClick = 0;

    $(function() {
        buttonLink.click( function(e) {
            if (indexClick === 0) {
                calculator.fadeIn(700);
                calculator.addClass('active')
                indexClick = 1;
                buttonLink.css('display', 'block');
            }
            else {
                calculator.fadeOut(700);
                indexClick = 0;
                buttonLink.css('display', 'block');
            };
            e.stopPropagation();
        });
    });
    $(document).click(function(e) {
        if ($(e.target).closest(".calculator").length)
            return;
        calculator.fadeOut(700);
        indexClick = 0;
        buttonLink.css('display', 'block');
        e.stopPropagation();
    });
});

