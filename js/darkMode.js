// *Funcion darkMode()*
const darkMode = () => {
    $("header").css("background-color", "#2B214D")
    $("body").css("background-color", "#2B214D");
    $("main").css("background-color", "#2B214D");
    $(".bg").css("background-color", "#2B214D")
    $("h1").css("color", "#fff");
    $("h2").css("color", "#fff");
    $("h4").css("color", "#fff");
    $("h5").css("color", "#fff");
    $("hr").css("border-color", "#fff");
    $("p").css("color", "#fff");
    $("i").css("color", "#fff");
    $("label").css("color", "#fff");
    $("footer").css("background-color", "#2B214D");
    $("footer").css("border", "4px solid  #f7f7f7");
    $("#tema").html(`
      <ion-icon name="sunny-outline"></ion-icon>
      `);
  
    localStorage.setItem("modo", "dark");
};

  
// *Funcion ligthMode *
  const ligthMode = () => {
    $("header").css("background-color", "#6868F6")
    $("body").css("background-color", "#fff");
    $("main").css("background-color", "#fff");
    $(".bg").css("background-color", "#6868F6")
    $("footer").css("background-color", "#f3efff");
    $("h1").css("color", "#000000");
    $("h2").css("color", "#000000");
    $("h2").css("color", "#000000");
    $("h4").css("color", "#000000");
    $("h5").css("color", "#000000");
    $("hr").css("border-color", "#000000");
    $("p").css("color", "#000000");
    $("i").css("color", "#000000");
    $("label").css("color", "#000000");
    $(".swapIcon").css("color", "#fff");
    $("#tema").html(`
      <ion-icon name="moon-outline"></ion-icon>
      `);
  
    localStorage.setItem("modo", "ligth");
};
  


// * Function themeMode()*
  const themeMode = () => {
    if (localStorage.getItem("modo") == "dark") {
      ligthMode();
    } else {
      darkMode();
    }
};
  
// * / Function themeMode()*
  

// Selector con Jquery & evento con Jquery
  $("#tema").click(themeMode);
// /  Selector con Jquery & evento con Jquery
  

  
// Logica
if (localStorage.getItem("modo") == "dark") {
    darkMode();
} else {
    ligthMode();
}
  