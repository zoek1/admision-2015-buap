$(document).ready(function() {
    
    $("#buscar").click(function() {
    	var selector = $("#opcionIngreso").val().toUpperCase();
        //console.log(selector);
        //return;
    	//var li = $("a:contains('"+selector+"')").parent();
        var li = $("a:contains('"+selector+"')").each(function(index){
            console.log($(this).parent() );
            $('body').highlight( $(this).parent().text() );
            
            //if (index==0){
                $('html, body').animate({
                    scrollTop: $(this).offset().top
                }, 2000); 
            //}
        });

    });
    
    $("#opcionIngreso").click(function() {
        $('body').removeHighlight();
        $(this).val('');
       }); 
});