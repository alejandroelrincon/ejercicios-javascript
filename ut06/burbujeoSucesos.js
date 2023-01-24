const buttons = document.querySelectorAll("button");
const textarea = document.getElementById("textarea");
const paragraphs = document.querySelectorAll("p");

buttons.forEach((button, index) => {
  button.addEventListener("mouseover", function() {
    if (this.style.backgroundColor !== "red") {
      this.style.backgroundColor = "orchid";
    }
  });

  button.addEventListener("click", function() {
    if (this.style.backgroundColor !== "red") {
      this.style.backgroundColor = "skyblue";
      paragraphs[index].style.color = "skyblue";
    }
  });

  button.addEventListener("dblclick", function() {
    if (this.style.backgroundColor !== "red") {
      this.style.backgroundColor = "red";
      this.style.color = "coral";
      paragraphs[index].style.color = "red";
      textarea.value += this.value + "\n";
    }
  });
});