let kravenVotes = 0;
let redNoticeVotes = 0;
let blackPantherVotes = 0;

let ownerPassword = "12345";


// VOTE
function vote() {

    let name = document.getElementById("name").value;

    let selectedMovie = document.querySelector(
        'input[name="movie"]:checked'
    );

    if (name == "") {
        alert("Please enter your name.");
        return;
    }

    if (selectedMovie == null) {
        alert("Please select a movie.");
        return;
    }

    let movie = selectedMovie.value;

    if (movie == "Kraven") {
        kravenVotes++;
    }

    else if (movie == "Red Notice") {
        redNoticeVotes++;
    }

    else if (movie == "Black_Panther_Wakanda") {
        blackPantherVotes++;
    }

    alert("Thank you " + name + "! Your vote has been recorded.");

    document.getElementById("name").value = "";

    selectedMovie.checked = false;
}


// OWNER LOGIN
function adminLogin() {

    let password = document.getElementById("adminPassword").value;

    if (password == ownerPassword) {

        alert("Owner login successful!");

        document.getElementById("adminPanel").style.display = "block";

        document.getElementById("adminPassword").value = "";

    }

    else {

        alert("Wrong password!");

    }
}


// CALCULATE VOTES
function calculateVotes() {

    let totalVotes =
        kravenVotes +
        redNoticeVotes +
        blackPantherVotes;

    document.getElementById("result").innerHTML =

        "Kraven Votes: " + kravenVotes + "<br>" +

        "Red Notice Votes: " + redNoticeVotes + "<br>" +

        "Black_Panther_Wakanda Votes: " + blackPantherVotes + "<br><br>" +

        "Total Votes: " + totalVotes;
}


// REFRESH
function refreshPage() {

    location.reload();

}