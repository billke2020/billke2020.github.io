////Javascript

var title = document.getElementById("title");
var description = document.getElementById("description");
var storyImg = document.getElementById("storyImg");

//show title, description, and storyImage onmouseover called by html image-map
var imgLibrary = [//location is 1-16, image is 1-15
  ["https://user-images.githubusercontent.com/72178483/94980859-89322780-04fb-11eb-9452-4b1b4a5a8c3e.png", "Trojian horse"],
  ["https://user-images.githubusercontent.com/72178483/95026629-b6e4b100-0660-11eb-9a0d-3fd33434d013.png", "Ismarus"],
  ["https://user-images.githubusercontent.com/72178483/95026860-4179e000-0662-11eb-9ff9-7f6bef69fa84.png", "Lotus Eaters"],
  ["https://user-images.githubusercontent.com/72178483/95026887-653d2600-0662-11eb-93c3-d51e5e27f9b7.png", "Cyclops"],
  ["https://user-images.githubusercontent.com/72178483/95026914-ac2b1b80-0662-11eb-885f-f695a985a690.png", "Island of Aeolia"],
  ["https://user-images.githubusercontent.com/72178483/95026949-e5638b80-0662-11eb-8fb5-bc82dac503ac.png", "Laestrygonians"],
  ["https://user-images.githubusercontent.com/72178483/95027029-6de22c00-0663-11eb-849e-8f513dfb2554.png", "Circe"],
  ["https://user-images.githubusercontent.com/72178483/95027088-e943dd80-0663-11eb-909b-494b11c460bf.png", "Teirasias"],
  ["https://user-images.githubusercontent.com/72178483/95027118-290ac500-0664-11eb-8b31-1a2aff68f3bc.png", "Circe"],
  ["https://user-images.githubusercontent.com/72178483/95027152-5f484480-0664-11eb-9e2b-0c3c5c951a22.png", "Sirens"],
  ["https://user-images.githubusercontent.com/72178483/95027175-8bfc5c00-0664-11eb-809e-0af409ab3fcc.png", "Charybdis"],
  ["https://user-images.githubusercontent.com/72178483/95027199-b3532900-0664-11eb-9a4b-acd11e941d00.png", "Scylla"],
  ["https://user-images.githubusercontent.com/72178483/95027215-d7af0580-0664-11eb-8aca-dfe07757aed0.png", "Thrynacia"],
  ["https://user-images.githubusercontent.com/72178483/95027227-ee555c80-0664-11eb-9234-8f2ec5740d26.png", "Calypso"],
  ["https://user-images.githubusercontent.com/72178483/95027253-1a70dd80-0665-11eb-84c6-1fa94b455bee.png", "Phaeacia"],
  ["https://user-images.githubusercontent.com/72178483/95027272-43916e00-0665-11eb-8ea6-3c116e2b2541.png", "Ithaca"]
];

var showTitle = function(titleText) {
  title.textContent = titleText;
};
var showDescription = function(descriptionText) {
  description.style.width = "20vw";
  description.textContent = "---" + descriptionText;
};
var showStoryImg = function(whichPic) {
  storyImg.src = imgLibrary[whichPic][0];
  storyImg.alt = imgLibrary[whichPic][1];
};
