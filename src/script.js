const messages = [
  "Seja sempre você mesmo!",
  "Nunca desista dos seus sonhos!",
  "Acredite no seu potencial!",
  "Cada dia é uma nova oportunidade!",
  "Você é capaz de grandes coisas!",
];

document.addEventListener("DOMContentLoaded", () => {
  const messageTrigger = document.getElementById("show-message");

  const showMessage = () => {
    // Pegar número aleatório
    const randomIndex = Math.floor(Math.random() * messages.length);

    // Pegar a mensagem do array
    const message = messages[randomIndex];

    // Mostrar a mensagem na página
    const messageContainer = document.getElementById("message");
    messageContainer.innerHTML = message;
    messageContainer.style.display = "block";
  };

  messageTrigger.addEventListener("click", showMessage);
});
