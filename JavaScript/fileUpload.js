document.getElementById("uploadedFile").addEventListener("change", onChange);

function onChange(event) {
    var reader = new FileReader();
    reader.onload = readerLoad;
    reader.readAsText(event.target.files[0]);
}

function readerLoad(event) {
    console.log(event.target.result);
    
    try {
        var obj = JSON.parse(event.target.result);
        loadText(obj);
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
}

function loadText(file) {
    let heading = document.querySelector("h2");
    
    if (heading) {
        heading.innerHTML = JSON.stringify(file.username, null, 2);
    }

    let score = document.querySelector("p");

    if (score) {
        score.innerHTML = JSON.stringify(file.score, null, 2);
    }
}
