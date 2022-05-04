const songLookup = {};
$.getJSON("https://raw.githubusercontent.com/Sehun-Joo/Sehun-Joo.github.io/main/js/music_data.json", function(json) {
  var songs = json;
  var songsData = songs["data"];

  for (let songNum in songsData){
    var id = songsData[songNum]["song_id"];
    var title = songsData[songNum]["title"];
    console.log(id,title);
    songLookup[id] = title;
  }

    

    console.log(songLookup[20045]);
    
});

function importFile() {
  var importedFile = document.getElementById('import-file').files[0];

  var reader = new FileReader();
  
  reader.readAsText(importedFile); 

  var scores = [];

  reader.onload = function() {
    console.log("pain");
    var songs = JSON.parse(reader.result);
    
    for (let song in songs) {
      let curScores = songs[song];

      if(songLookup[song] != null ){
        /*
        if(curScores.hasOwnProperty('spb')){
          scores.push(getScoreObj(songLookup[song]),"beginner",curScores["spb"]["clear_type"],curScores["spb"]["ex_score"]);
        }
        if(curScores.hasOwnProperty('spn')){
          scores.push(getScoreObj(songLookup[song],"normal",curScores["spn"]["clear_type"],curScores["spn"]["ex_score"]));
        }
        */
        if(curScores.hasOwnProperty('sph')){
          scores.push(getScoreObj(songLookup[song],"hyper",curScores["sph"]["clear_type"],curScores["sph"]["ex_score"]));
        }
        if(curScores.hasOwnProperty('spa')){
          scores.push(getScoreObj(songLookup[song],"another",curScores["spa"]["clear_type"],curScores["spa"]["ex_score"]));
        }
        if(curScores.hasOwnProperty('spl')){
          scores.push(getScoreObj(songLookup[song],"leggendaria",curScores["spl"]["clear_type"],curScores["spl"]["ex_score"]));
        }
      }
      
    }

    console.log(scores[1]);


    var output = arrToString(scores);

    download_file("scoredata.txt",output);

  }


  

}

function arrToString(arr){
  var res = "[";
  
  for(score of arr){
    
    res += "{\"title\":\"" + score["title"] + "\",\"difficulty\":\"" + score["difficulty"] + "\",\"clear\":" + score["clear"] + ",\"score\":" + score["score"] + "}";
    res+=",\n";
  }

  res = res.slice(0,-2);
  res+="]";
  console.log(res);

  return res;
}

function getScoreObj(title, difficulty, clear, score){
  var jsonData = {};

  jsonData["title"] = title.replaceAll("\"","\\\"");
  jsonData["difficulty"] = difficulty;
  jsonData["clear"] = (clear+15)%8;
  jsonData["score"] = score;

  return jsonData;
}

//I stole this code from Stack Overflow
function download_file(name, contents, mime_type) {
        mime_type = mime_type || "text/plain";

        var blob = new Blob([contents], {type: mime_type});

        var dlink = document.createElement('a');
        dlink.download = name;
        dlink.href = window.URL.createObjectURL(blob);
        dlink.onclick = function(e) {
            // revokeObjectURL needs a delay to work properly
            var that = this;
            setTimeout(function() {
                window.URL.revokeObjectURL(that.href);
            }, 1500);
        };

        dlink.click();
        dlink.remove();
    }

