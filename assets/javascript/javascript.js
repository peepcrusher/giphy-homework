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
        newButton.addClass("giphy btn btn-info m-2");
        
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        //append the new buttons to the buttons div
        $(".buttons-go-here").append(newButton);
    }

}
//add on click listener for the submit button
$("#add-topic").on("click", function (event) {
    //grab ahold of the user submitted text and, add it to the topics array.
    event.preventDefault();
    var userInput = $("#gif-search").val();

    //push the userInput into the topics array
    topics.push(userInput);
    $("#gif-search").empty();
    
    renderButtons();
});

//add click listener for any button
$(document).on("click", "button", function () {
//variables for getting user data and putting it into a url for AJAX
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=dc6zaTOxFJmzC&limit=10";
//ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data);
        var results = response.data
        for (i = 0; i < results.length; i++) {
            console.log(results[i]);
            //create variables for a gif div, image tag, and
            var gifDiv = $("<div>");
            var newImg = $("<img>");
            var newP = $("<p>")
            //simplify response
            var rating = results[i].rating
            //adding attributes to the IMG tag to allow for on click play and pausing
            newImg.attr("src", results[i].images.fixed_height_still.url);
            newImg.attr("paused", results[i].images.fixed_height_still.url);
            newImg.attr("play", results[i].images.fixed_height.url)
            newImg.attr("data-state", "still");
            //added class for styling with bootstrap, also to grab onto for onClick pause and play
            newImg.addClass("giphy");
            gifDiv.addClass("float-left m-3");
            //appending the newImg to the GifDiv
            gifDiv.append(newImg);
            newP.append("Rating: " + rating);
            newP.addClass("bg-light");
            gifDiv.append(newP);
            if(rating === "g" || rating === "pg"){
            $("#gifs-go-here").prepend(gifDiv);
            }
    

        }
        

    });

    
})

$(document).on("click", ".giphy", function(){
    var state = $(this).attr("data-state")

    if(state === "still"){
        $(this).attr("src", $(this).attr("play"))
        $(this).attr("data-state", "animate")
    }
    else{
        $(this).attr("src", $(this).attr("paused"))
        $(this).attr("data-state", "still")
    }
    })



renderButtons();


