/**
 * Created by leituo56 on 7/31/14.
 */
var myElem = $('<li class="addedDOM" style="color: darkred">Click to remove(), Bite Me!!!</li>');
myElem.click(function(){
    console.log(this);
    this.remove();
});

//Plugin
$.fn.blue = function(options){
    options = $.extend({'left':'10px'}, options);
    this.each(function(){
        var li = this;
        $(li).on('click', 'button', function(){
            $(li).animate({'margin-left': options.left}, 500).css({'color':'blue'});
        });
    });
};

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

    //Plugin Test
    $('.pluginLi').blue({'left':'50px'});

    //Promise
    $('#promiseTest').on('click', function(){
        console.log("Start Deffered!!!");
        var wait = function(time){
            var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
            var tasks = function(){
                console.log(time + "执行完毕！");
                dtd.resolve(time); // 改变Deferred对象的执行状态
            };
            setTimeout(tasks,time);
            return dtd.promise(); // 返回promise对象
        };
        $.when(wait(1000), wait(2000))
            .done(function(result1, result2){
                console.log(result1, result2)})
            .fail(function(){ alert("出错啦！"); });
    });


});