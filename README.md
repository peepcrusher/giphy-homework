# Homework number: 6 AJAX and GIF's

##Samuel Thompson

###Process

in this assignment, I was instructed to build a website that had buttons that would generate gifs from the GIPHY API, and have the user, able to generate more buttons via inputs. the only things that were hard coded into the HTML were the inputs from the user, and the title for that input. 

I created a function called renderButtons that would create all the buttons that were in the topics array. I also hooked onto the input that the user submitted and pushed that into the array, therefore creating a new button. 

When you click a button, it makes a call to the GIPHY API using AJAX and returned 10 gifs, if the gifs were rated g or pg, then they were displayed on the page. otherwise they were not shown. 

The gif's also pause and play on click. I did this by assigning the img tag an attribute of paused, and play. in the paused attribute i stored a URL of a still image the same width and height as the gif. and in the play attribute I stored the regular gif image. 


![Webpage](/assets/images/Webpage.jpg)

###Built with

*HTML
*CSS
*Bootstrap
*Javascript
*Jquery
*Giphy API

