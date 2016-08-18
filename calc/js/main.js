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
// $('.calc-button').click(function() {
//     $( "#calculator" ).show( "slow" );
// });

// $("body").click(function(e) {
//     if($(e.target).closest(".calculator .active").length==0)
//         $(".calculator .active").css("display","none");
// });



// $('body').click(hideCalculator);
//
// function hideCalculator() {
//     var calculator2 = document.getElementsByClassName("calculator");
//     calculator2.style.display = "none";
// };

// var showCalculatorButton = document.getElementById("calc-button");
// showCalculatorButton.addEventListener("click", showCalculator);

// document.onclick = function () {
//     // document.getElementById('nav').style.display = 'none'
//     var hideCalculator = document.getElementById("calculator");
//     hideCalculator.style.display = "none";
// }
// function hideCalculator() {
//     var calculator = document.getElementById("calculator");
//     calculator.style.display = "none";
// };
// var hideCalculatorButton = document.getElementById("body");
// hideCalculatorButton.addEventListener("click", hideCalculator);

