//this array will be put into buttons
var topics = ["bender", "professor farnsworth", "philip J Fry", "zoidberg", "rick sanchez", "morty smith", "Jerry Smith"]

//create a function that will log the name of whatever button is clicked

function logTopicName() {
    var topicName = $(this).attr("data-name");
    console.log(topicName)
}



//create a function that will loop through the array and make buttons for each of the topics
function renderButtons() {
    //empty the buttons div to prevent duplicate buttons from being made.
    $(".buttons-go-here").empty();

    for (i = 0; i < topics.length; i++) {
        //create a variable that will create a new button
        var newButton = $("<button>")
        //add attributes to the newButton variable
        newButton.addClass("giphy");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        //append the new buttons to the buttons div
        $(".buttons-go-here").append(newButton);
        console.log("data-name", topics[i]);
    }

}
//add on click listener for the submit button
$("#add-topic").on("click", function (event) {
    //grab ahold of the user submitted text and, add it to the topics array.
    event.preventDefault();
    var userInput = $("#gif-search").val();

    //push the userInput into the topics array
    topics.push(userInput);
    renderButtons();
});

//add click listener for any button
$("button").on("click", function () {

    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method : "GET"
    }).then(function (response) {
        console.log(response);
    });
    renderButtons();
})





