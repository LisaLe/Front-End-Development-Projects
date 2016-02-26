//array of random quotes
var quotes = ["There is but one coward on earth, and that is the coward that dare not know. -- W.E.B. Du Bois", "This social formation constitutes, therefore, the closing chapter of the prehistoric stage of human society. --Karl Marx","When people speak of ideas that revolutionize society, they do but express the fact that within the old society, the elements of a new one have been created, and that the dissolution of the old ideas keeps even pace with the dissolution of the old conditions of existence --Karl Marx","Man is something that is to be overcome. --Georg Simmel","A mind that questions everything, unless strong enough to bear the weight of its ignorance, risks questioning itself and being engulfed in doubt. -- Emile Durkheim", "All the world is not, of course, a stage, but the crucial ways in which it isn’t are not easy to specify. --Erving Goffman"];



function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

$(document).ready(function(){
  var generatedQuote="";
  $(".new-quote-button").click(function(){
    var randomNum = Math.floor(Math.random()*6) + 1;
    generatedQuote = quotes[randomNum];
    $(".quote").html(generatedQuote);
  });


  $("#twitterbutton").click(function(){
    openURL("https://twitter.com/intent/tweet?text=" + encodeURIComponent('"'+generatedQuote+'"'));
  });
});
