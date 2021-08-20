function importFile() {
  var importedFile = document.getElementById('import-file').files[0];

  var reader = new FileReader();
  reader.onload = function() {

  
    var songs = JSON.parse(reader.result);


    const songLookup = {};

    for (const song of songs) {
      songLookup[song.id] = song.title;
    }

    console.log(songs[56].id);       // logs "Harry"
    console.log(songs[56].genre);

  
  };
  reader.readAsText(importedFile); 
}

$.getJSON("sehundata", function(json) {
  console.log(json); // this will show the info it in firebug console
});






