$('.triggers span').hover(function() {
        explode($(this).parents('.logo').attr('id'), $(this).data('letter'));

    },function(){
        
         implode($(this).parents('.logo').attr('id'), $(this).data('letter'));
        
    });
    


    
    
    function explode(letterID, letter) {
    $(' .letters g#' + letter).find('path,polygon').each(function() {

        $(this).velocity({
          translateZ:0,
            translateX: random(-80,200),
            translateY: random(-200,180),
          rotateZ:"5deg",
            opacity:0,
               });
        

        

    });
}
    
    
    
    
    
    function random(min, max) {
    return Math.floor(Math.random() * (max - min + 20) + min);
}
    
 function implode(letterID, letter) {
    $(' .letters g#' + letter).find('path, polygon').velocity({

           translateZ:0,
            translateX: 0,
            translateY:0,
      opacity:1,
      rotateZ:"0deg",
    
    },[ 170, 15]);
};