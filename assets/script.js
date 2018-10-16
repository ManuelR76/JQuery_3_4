// récupÃ©ration de la couleur de fond initiale du rectangle
  couleurInitiale = $('#square').css('backgroundColor');

  // lancement d'une action au clic sur le bouton #bouton1
  $('#submit1').click(function(){

    // si la hauteur est infÃ©rieur à  100px, on agrandit le rectangle de 10px
    if( $('#square').height() < 100 ) {
      //augmente de 10px la hauteur du rectangle
      $('#square').css('height', $('#square').height()+10+"px");
    } else {
      // sinon, on remet la valeur à 10px
      $('#square').css('height', '10px');
    }

  });
//2eme bouton changeant le fond du rectangle en vert
$("#submit2").click(function(){
    $("#square").css("background-color", "green");
});
//3eme bouton retour du fond initial
$("#submit3").click(function(){
    $("#square").css('backgroundColor', couleurInitiale)
});
//masque le rectangle
$("#submit4").click(function(){
    $("#square").hide();
});
//fait réapparaitre le rectangle
$("#submit5").click(function(){
    $("#square").show();
});
