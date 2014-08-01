/**
 * Created by leituo56 on 7/31/14.
 */
var myElem = $('<li class="addedDOM" style="color: darkred">Click to remove(), Bite Me!!!</li>');
myElem.click(function(){
    console.log(this)
    this.remove();
})

$(document).ready(function(){
    console.log("HiJQuery.js loaded!");

    $("#changeHeader").click(function(){
        var txt = $('.head>h1').text();
        txt += "!";
        $('.head>h1').text(txt);
        console.log("$('.head>h1').text(txt)");
    });

    // DOM Manipulation
    $("#append").click(function(){
        $('#dad').append(myElem);
        console.log("$('#dad').append(myElem)");
    });
    $("#prepend").click(function(){
        $('#dad').prepend(myElem);
        console.log("$('#dad').prepend(myElem)");
    });
    $("#before").click(function(){
        $('#son').before(myElem);
        console.log("$('#son').before(myElem)");
    });
    $("#after").click(function(){
        $('#son').after(myElem);
        console.log("$('#son').after(myElem)");
    });

    // Data and filter
    $('#filterButtonGroup').on('click', '.filterRed', function(){
        $('.highlight').removeClass('highlight');
        $('.red').addClass('highlight');
        console.log($('.red').data('size'));
    }).on('click', '.filterGreen', function(){
        $('.highlight').removeClass('highlight');
        $('.green').addClass('highlight');
        console.log($('.green').data('size'));
    });

    //Show and Hide
    $('#slide').on('click', function(){
        $('#showHide').slideToggle();
    });

    //Keyboard
    $('#keyboard').on('change', function(){
        console.log(this);
        $('#result').text($(this).val()*2);
    });
});