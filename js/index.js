/**
 * Codigo que muestra la informacion que el usuario desea al apretar un boton
 * @author Federico Arce
 */

// elementos usados en el bucle
// si las variables booleanas la hubiese inicializado como false las condiciones serian algo complejas
let iconBirthday = true;

let iconEmail = true;

let iconAddress = true;

let iconPhone = true;

let warning = document.getElementById("warning-text");

let buttonReaction = [iconBirthday, iconEmail, iconAddress, iconPhone];

let buttonId = ["birthday", "email", "address", "phone"];

let textInfo = [
  "Cumpleaños: 2 de febrero de 1993",
  "Email: hector.craig@example.com",
  "Direccion: 5944 W Campbell Ave",
  "Telefono: (759) 829-8105",
];

let interactionButtons = document.getElementsByClassName("interaction-buttons");

for (let i = 0; i < interactionButtons.length; i++) {
  const element = interactionButtons[i];
  document.getElementById(buttonId[i]).addEventListener("click", function () {
    let item;
    let listId = "list-" + buttonId[i];
    if (buttonReaction[i]) {
      item = document.createElement("li");
      item.innerHTML = textInfo[i];
      item.className = "list-item";
      item.setAttribute("id", listId);
      document.getElementById("sobre-mi-list").appendChild(item);

      // buttonReaction se vuelve verdadero ya que anteriormente era falso y al ser verdadero se crea la lista
      buttonReaction[i] = false;

      // esta condicion verifica si cualquier buttonReaction es verdadera, si al menos uno o mas lo son, la condicion sera verdadera
      let hideWarning =
        buttonReaction[0] ||
        buttonReaction[1] ||
        buttonReaction[2] ||
        buttonReaction[3];

      // por el hecho de que se creo uno o as listas y de que .warning-text sigue mostrandose .warning-text se ocultara
      if (hideWarning && warning.style.display != "none")
        warning.style.display = "none";
    } else {
      document.getElementById(listId).remove();

      // buttonReaction se vuelve verdadero ya que anteriormente era falso y al ser verdadero se elimina la lista
      buttonReaction[i] = true;

      // esta condicion verifica si todos los buttonReaction son verdaderos, si lo son la condicion sera verdadera
      let showWarning =
        buttonReaction[0] &&
        buttonReaction[1] &&
        buttonReaction[2] &&
        buttonReaction[3];

      // al no haber ninguna lista se mostrara el parrafo .warning-text
      if (showWarning) warning.style.display = "block";
    }
  });
}

/**
 *Codigo Previo Sin el for Loop
 *@see https://gist.github.com/FedeSebas/8675f2fa0721683ef2e10f898d2c51ea
 */
