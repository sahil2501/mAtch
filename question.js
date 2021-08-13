function turn_display() {
    name_one = localStorage.getItem("name_1");
    name_two = localStorage.getItem("name_2");
    document.getElementById("question").innerHTML = "<h3>" + "Question turn: " + name_one + "</h3>";
    document.getElementById("answer").innerHTML = "<h3>" + "Answer turn: " + name_two + "</h3>";
}

function back() {
    window.location = "index.html";
}

function send() {
    num1 = document.getElementById("num_1").value;
    num2 = document.getElementById("num_2").value;
    label1 = "<label>" + num1 + "</label>";
    label2 = "<label> x </label>";
    label3 = "<label>" + num2 + "</label><br><br>";
    button = "<button id = 'outputButton'>Send</button><br>";
    input = "<input type = 'text' placeholder='Answer...'><br><br>";
    document.getElementById("output").innerHTML = label1 + label2 + label3 + input + button;
}