import { closeModal, MODALWINDOW } from "./modal-form.js";

function renderAddEventForm() {
    MODALWINDOW.innerHTML = `
        <div id="modalOverlay" class="modal__overlay"></div>
        <div class="modal__content">
            <span id="modalClose" class="modal__close">&#10799;</span>
            ${eventForm}
        </div>
    `;

    // To close the current Modal
    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modalOverlay").addEventListener("click", closeModal);
    document.getElementById("cancelEvent").addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // Dinamic form fields
    document.getElementById("displayEnd").addEventListener("click", function() {
        displayInputField("containerFinalDate");
    });
    document
        .getElementById("displayReminder")
        .addEventListener("click", function() {
            displayInputField("containerSetRemainder");
        });
}

// Show and Hide elements in the form
function displayInputField(element) {
    document.getElementById(element).classList.toggle("display-none");
}

let eventForm = `
<form>
<div>
    <label for="title">Title</label>
    <input type="text" id="title" name="titleEvent" maxlength="60" required />
</div>
<div>
    <label for="initialDate">Initial Date</label>
    <input type="datetime-local" id="initialDate" required />
</div>
<div>
    <label for="displayEnd">Do you need an end time?</label>
    <input type="checkbox" id="displayEnd" name="displayEnd" />End date
</div>
<div id="containerFinalDate" class="container__finaldate display-none">
    <label for="finalDate">Final Date</label>
    <input type="datetime-local" id="finalDate" required />
</div>
<div>
    <label for="displayReminder">Remind me when this event starts</label>
    <input type="checkbox" id="displayReminder" name="displayReminder" />
</div>
<div id="containerSetRemainder" class="display-none">
    <label for="setReminder">Time:</label>
    <select id="setReminder">
        <option value="5">5min</option>
        <option value="10">10min</option>
        <option value="15">15min</option>
        <option value="30">30min</option>
        <option value="60">60min</option>
    </select>
</div>
<div>
    <label for="textArea">Description</label>
    <textarea id="textArea" name="textArea"></textarea>
</div>
<div>
    <label for="eventType">Event Type</label>
    <select id="eventType">
      <option value="meeting">Meeting</option>
      <option value="personal">Personal</option>
      <option value="study">Study</option>
      <option value="others">Others</option>
    </select>
</div>
<div>
    <button id="cancelEvent" class="form__button cancel">Cancel
    </button>
    <button type="submit" id="createEvent" class="form__button submit">Create
    </button>
</div>
</form>
`;

export { renderAddEventForm };