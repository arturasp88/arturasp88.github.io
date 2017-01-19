// On document ready:

$(function(){

	// Instantiate MixItUp:

	$('#Container').mixItUp();

});


var quoteData = [
 
        {
            category:"creativity",
            quote:"Quote Test 123",
            link:"www.google.com",
            linkText: "Some Text - Goes Here"
        }

    ];

    var container = $("#quote-container")
 
    $.each(quoteData, function(key,data){
        var quote ="";
        quote = $(".quote.template").clone();
        $(quote).removeClass("template");
        $(quote).addClass(data.category);
        $(quote).find(".quote-text").html(data.quote);
        $(quote).find(".quote-credit").attr("href",data.link);
        $(quote).find(".quote-credit").html(data.linkText);
 
        $(quote).prependTo($(container));
    });