var random_margin = ["-7px","-5px", "1px", "5px", "10px", "7px"];
var random_colors = ["#F9DBBB", "#9DC08B", "#865DFF", "#4E31AA", "#FF5F9E", "#16FF00"];
var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"]

var index = 0;

window.onload = document.querySelector("#user_input").select();

document.querySelector("#add_note").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "block";
});

document.querySelector("#hide").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "none";
})

document.querySelector("#user_input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const text = document.querySelector("#user_input");
        createStickyNote(text.value);
        text.value = "";
    }
})

createStickyNote = (text) => {
    let note = document.createElement("div");
    let details = document.createElement("div");
    let noteText = document.createElement("h1");

    note.className = "note";
    details.className = "details";
    noteText.textContent = text;

    details.appendChild(noteText);
    note.appendChild(details);

    if (index > random_colors.length - 1)
        index = 0;

    
note.setAttribute("style",`margin:${random_margin[Math.floor(Math.random()*random_margin.length)]};background-color:${random_colors[index++]}`)

note.addEventListener("dblclick",()=>{
    note.remove();
})

document.querySelector('#all_notes').appendChild(note);
}