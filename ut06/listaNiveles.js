const firstList = document.getElementById("firstList");
const secondList = document.getElementById("secondList");
const output = document.getElementById("output");

firstList.addEventListener("change", nombre);
function nombre() {
    secondList.innerHTML = "";
    const selectedOption = firstList.value;
    console.log(selectedOption);
    let options;
    if (selectedOption === "videos") {
      options = ["Humor", "Drama", "Ficción", "Otros"];
    } else if (selectedOption === "discos") {
      options = ["Pop", "Rock", "Latino", "Otros"];
    } else if (selectedOption === "juegos") {
      options = ["Simulador", "Rol", "Medieval", "Otros"];
    }
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("option");
      option.value = options[i];
      option.text = options[i];
      secondList.appendChild(option);
    }
}
secondList.addEventListener("change", nombre2);
function nombre2() {
    output.value = "Texto de " + firstList.value + " --> " + secondList.value;
}
nombre();
nombre2();