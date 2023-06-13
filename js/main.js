const memojiImage = document.getElementById("profile_picture");

memojiImage.addEventListener("mouseover", function() {
  memojiImage.src = "media/gifs/Memoji_smile_black_background.gif";
});

memojiImage.addEventListener("mouseout", function() {
  memojiImage.src = "media/img/circle_profile_picture.png";
});
