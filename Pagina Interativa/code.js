onEvent("button2", "click", function( ) {
  setProperty("screen1", "background-color", "green");
});
onEvent("button4", "click", function( ) {
  setProperty("screen1", "background-color", rgb(35, 58, 65));
});
onEvent("button3", "click", function( ) {
  textLabel("screen1", "Olá, seja bem-vindo ao meu app da aula 01 Introdução ao JavaScript");
});
