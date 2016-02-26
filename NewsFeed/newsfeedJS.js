var url ="http://www.freecodecamp.com/news/hot";

$(document).ready(function(){
  $.get(url,function(stories){
  stories.forEach(function(hotStory){
  var headLine = hotStory.headline;
  var link = hotStory.link;
  var authorImage =hotStory.author.picture
  var timePosted = new Date(hotStory.timePosted).toGMTString().slice(0, -13);
      timePosted = "Posted on: " + timePosted;
  var upVote = "upvote - "+hotStory.rank;
  var authorName = "By - "+hotStory.author.username
  storyCreator(headLine, link, authorImage, timePosted, upVote,authorName);
  });
 });
  function storyCreator(headLine, link, authorImage, timePosted, upVote, authorName){
  console.log("function invoked");
  div1 = document.createElement("div");
  div2 = document.createElement("div"); //
  img1 = document.createElement("img"); // profileImage
  a1 = document.createElement("a")
  div3 = document.createElement("div"); // infoContainer
  p1 = document.createElement("h4"); //title
  p2 = document.createElement("p"); //author
  p3 = document.createElement("p"); //rank
  p4 = document.createElement("p"); //posted on

  div1.className = "profilecontainer thumbnail";
  img1.className = "profileImage";
  p1.className = "title";
  a1.innerHTML = headLine;
  p2.innerHTML = authorName;
  p3.innerHTML = upVote;
  p4.innerHTML = timePosted;

  div1.appendChild(img1);
  div1.appendChild(div3);
  div3.appendChild(p1);
  p1.appendChild(a1)
  div3.appendChild(p2);
  div3.appendChild(p3);
  div3.appendChild(p4);

  div3.className = "infocontainer";
  img1.className = "profileImage";

  img1.setAttribute("src", authorImage);
  a1.setAttribute("href",link);

  $("#posts").append(div1);


  };
});
