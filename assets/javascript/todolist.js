
// Añadir el efecto de tachado a los items completados
$("ul").on("click","li",function(){$(this).toggleClass("completado")}
);
// Borrar los items completados
$("ul").on("click","span", function(){
    $(this).parent().fadeOut(500,function(){$(this).remove()}); 
    event.stopPropagation();
});
//agregar contenido del imput a la lista
$("input[type='text']").keypress(function(event){
if(event.key=="Enter"){
$("ul").append("<li><span><i class='fas fa-eraser'></i></span>"+$(this).val()+"</li>");
$(this).val("");
event.stopPropagation();
}})
$(".fa-arrows-alt-v").click(function(){
    $("input").slideToggle()
   })
$(".fa-trash-restore-alt").click(function(){
   $("li").remove();
   })

