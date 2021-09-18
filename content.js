
$("body").arrive(`[aria-label="Post"]`, function (e) {
  console.log("Create post is now opened");
  $(e)
    .parent()
    .append(
      `<div class="make_it_bold" style="background: red; cursor: pointer;">Bold</div>
      <div class="make_it_strikeThrough" style="background: red; cursor: pointer;">Strike Through</div>
      <div class="make_it_cursive" style="background: red; cursor: pointer;">C</div>`
    );
});

const formatingType = (type) => {
  restoreSelection(selectedObj);
  if ($(`[aria-label="Post"]`).length) {
    var stringSelected = document.getSelection().toString();
    if (stringSelected) {
      var reformatedText = reformatIt(stringSelected, type);
      console.log(reformatedText);

      const blob = new Blob([reformatedText], {
        type: "text/plain",
      });
      let cpData = [
        new ClipboardItem({
          "text/plain": blob,
        }),
      ];

      navigator.clipboard.write(cpData).then(
        function () {
          restoreSelection(selectedObj);
          setTimeout(() => {
            console.log("pasting");
            document.execCommand("paste");
          }, 500);
        },
        function (error) {
          console.error("Unable to paste the data. Error:");
          console.log(error);
        }
      );
    }
  }
};

$(document).on("click", ".make_it_bold", () => {
  formatingType(0);
});

$(document).on("click", ".make_it_strikeThrough", () => {
  formatingType(3);
});

$(document).on("click", ".make_it_cursive", () => {
  formatingType(4);
});

function saveSelection() {
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }
  return null;
}

function restoreSelection(range) {
  if (range) {
    if (window.getSelection) {
      sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.selection && range.select) {
      range.select();
    }
  }
}

var selectedObj = "";

$(document).on("selectionchange", function (e) {
  if ($(`[aria-label="Post"]`).length) {
    var stringSelected = window.getSelection().toString();
    if (stringSelected) {
      selectedObj = saveSelection();
    }
  }
});


var arr = [];
arr["A"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜"];
arr["B"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ"];
arr["C"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞"];
arr["D"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟"];
arr["E"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ"];
arr["F"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ"];
arr["G"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢"];
arr["H"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ"];
arr["I"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ"];
arr["J"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥"];
arr["K"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦"];
arr["L"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ"];
arr["M"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ"];
arr["N"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩"];
arr["O"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪"];
arr["P"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫"];
arr["Q"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬"];
arr["R"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ"];
arr["S"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮"];
arr["T"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯"];
arr["U"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰"];
arr["V"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱"];
arr["W"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲"];
arr["X"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳"];
arr["Y"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴"];
arr["Z"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵"];
arr["a"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶"];
arr["b"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷"];
arr["c"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸"];
arr["d"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹"];
arr["e"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ"];
arr["f"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻"];
arr["g"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ"];
arr["h"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽"];
arr["i"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾"];
arr["j"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿"];
arr["k"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀"];
arr["l"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁"];
arr["m"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂"];
arr["n"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃"];
arr["o"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ"];
arr["p"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅"];
arr["q"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆"];
arr["r"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇"];
arr["s"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈"];
arr["t"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉"];
arr["u"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊"];
arr["v"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋"];
arr["w"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌"];
arr["x"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍"];
arr["y"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎"];
arr["z"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕"];
arr["1"] = ["𝟭", "1", "𝟭", "1̶", "1"];
arr["2"] = ["𝟮", "2", "𝟮", "2̶", "2"];
arr["3"] = ["𝟯", "3", "𝟯", "3̶", "3"];
arr["4"] = ["𝟰", "4", "𝟰", "4̶", "4"];
arr["5"] = ["𝟱", "5", "𝟱", "5̶", "5"];
arr["6"] = ["𝟲", "6", "𝟲", "6̶", "6"];
arr["7"] = ["𝟳", "7", "𝟳", "7̶", "7"];
arr["8"] = ["𝟴", "8", "𝟴", "8̶", "8"];
arr["9"] = ["𝟵", "9", "𝟵", "9̶", "9"];
arr["0"] = ["𝟬", "0", "𝟬", "0̶", "0"];

const reformatIt = (textRecieved, textType) => {
  var c = "";
  var reformatted = "";
  for (var x = 0; x < textRecieved.length; x++) {
    c = textRecieved.charAt(x);
    console.log("reformating", c);
    if (c in arr) {
        console.log("reformated single text", arr[c][textType]);
      reformatted += arr[c][textType];
    } else {
      reformatted += c;
    }
    console.log("reformated text joining", reformatted);
  }
  console.log("reformated word done", reformatted);

  console.log("pasted");
  return reformatted;
};
