function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var outputText = "";
    var validChars = /^[a-z0-9\s]+$/;

    if (!validChars.test(inputText)) {
      alert("Invalido solo se aceptan minusculas o espacios");
      return;
    }

    for (var i = 0; i < inputText.length; i++) {
      var char = inputText.charAt(i);

      if (char === "e") {
        outputText += "enter";
      } else if (char === "i") {
        outputText += "imes";
      } else if (char === "a") {
        outputText += "ai";
      } else if (char === "o") {
        outputText += "ober";
      } else if (char === "u") {
        outputText += "ufat";
      } else {
        outputText += char;
      }
    }

    document.getElementById("outputText").value = outputText;
  }

  function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var outputText = "";

    for (var i = 0; i < inputText.length; i += 4) {
      var char = inputText.substr(i, 4);

      if (char === "ente") {
        outputText += "e";
      } else if (char === "imes") {
        outputText += "i";
      } else if (char === "ai") {
        outputText += "a";
      } else if (char === "ober") {
        outputText += "o";
      } else if (char === "ufat") {
        outputText += "u";
      } else {
        outputText += char;
      }
    }

    document.getElementById("outputText").value = outputText;
  }

  function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
  }

  function copyText() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("EL texto esta copiado en el clipboard!");
  }