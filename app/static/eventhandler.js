$(function () {
    $(".rating_cell").dblclick(function (e) {
        e.stopPropagation();
        var currentEle = $(this);
        var value = $(this).html();
        var newEle = changeCurrentElementToInputBox(currentEle,value);
        newEle.keyup(function(event){
            if(event.keyCode == 13) {
                saveChanges(newEle,currentEle);
            }
        }) 
        $(document).click(function(){
            saveChanges(newEle,currentEle);
        })       
    });
});

function changeCurrentElementToInputBox(el, value)
{
    $(el).html('<input class="txtInput" type="text" value=' + value + '"/>');
    $(".txtInput").focus();
    return $(".txtInput");
}

function saveChanges(elNew, elCurrent)
{
    $(elCurrent).html(elNew.val().trim());
}

function updateVal(currentEle, value, id) {
    $(currentEle).html('<input class="thVal" type="text" value="' + value + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val().trim());
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val().trim());
    });
}