$(function () {
    $(".rating_cell").dblclick(function (e) {
        e.stopPropagation();
        var originalElement = $(this);
        var originalValue = $(this).html().trim();
        var movieId = originalElement.parent().attr('id');
       $(this).html('<input id="input_box" type="text" value="' + originalValue + '"/>');
       $("#input_box").focus();

       $("#input_box").keyup( function(event){
            if(event.keyCode == 13) {
                var newRating = $(this).val().trim();
                originalElement.html(newRating);
                saveRating(movieId,newRating);
            }
       });

       $(document).click(function() {
           if($("#input_box").val()){
            var newRating = $("#input_box").val().trim();
            originalElement.html(newRating);
            saveRating(movieId,newRating);
           }               
       });       
    });
});

function saveRating(movie_id, rating) {
    $.ajax({
        url:'/movie/'+ movie_id +'?rating=' + rating,
        success : function(data){            
        }
    });
}