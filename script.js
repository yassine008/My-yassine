function completeTask(button) {
    button.innerText = "✅";
    button.disabled = true;
}

function resetTasks() {
    let buttons = document.querySelectorAll("table button");
    buttons.forEach(button => {
        button.innerText = "✔️";
        button.disabled = false;
    });
}

function showExercise() {
    document.getElementById("exercise-box").classList.remove("hidden");
}

function hideExercise() {
    document.getElementById("exercise-box").classList.add("hidden");
}

function toggleNotes() {
    let notesBox = document.getElementById("notes-box");
    notesBox.classList.toggle("hidden");
}

function saveNotes() {
    let notes = document.getElementById("notes").value;
    localStorage.setItem("userNotes", notes);
    alert("📌 تم حفظ الملاحظات!");
}

function loadNotes() {
    let savedNotes = localStorage.getItem("userNotes");
    if (savedNotes) {
        document.getElementById("notes").value = savedNotes;
    }
}

function rateApp() {
    window.open("https://play.google.com/store/apps/details?id=your.app.id", "_blank");
}

window.onload = loadNotes