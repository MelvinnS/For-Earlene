const message = `hallo earlene zabrina anak kecil yang paling imut dan lucu, i send u this message to say sorry, cause i made u upset yesterday😞😞. seriously i never want to hurt u ellen. aku tau niatku cumin bercanda, tapi bercandaan ku keterlaluan sampe ngebikin kamu marahh, sekali lagi aku minta maaf yaa, semoga dengan aku bikin website ini yg kubuat penuh effort bisa ngebikin kamu maafin akuu, thank uu Earlene🫂🫂`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}