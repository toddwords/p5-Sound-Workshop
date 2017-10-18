# p5.Sound Workshop

p5.Sound adds functionality to p5.js to both generate and play sounds as part of your p5 sketch. This is really useful for making interactive sound pieces and visualizers and my personal favorite: web instruments.

Lets look at some examples:
- [Patatap](http://www.patatap.com/)
- [Sample Stitch](http://samplestitch.com/)
- [Hacker Typer](http://hackertyper.com/)
- [Oldschool Flash Soundboards](http://www.dailyhaha.com/_soundboards/Christopher_walken_more_cowbell.htm)
- [Yardley, PA 1997](http://hotwriting.net/book/inthedark/index.html)
- [GifRapBot](https://toddwords.com/gifRapBot/)
- [Advertisements in my Dreams](http://hotwriting.net/inmydreams)
- [sampl0rd](http://toddwords.com/sampl0rd)
- [wordsynths](http://toddwords.com/wordsynths)

Those last three are made using p5.sound.

Ok let's get into it, first you want to **download or clone this repo onto your computer**. Then we need to do something we haven't done before:

## Running a local web server
Running a local web server lets us simulate the internet on our computers. Normally this isn't necessary as we can just open up .html files in our browsers, but it becomes necessary when you start working with external files like the sound files we'll be using today.

Here's how to set it up:
1.  [Download and Install node.js](https://nodejs.org/en/download/) if you haven't already
2.  Open a terminal or command prompt 
3.  On OSX/Linux type

        sudo npm install -g http-server

    On Windows type (you might need to open the command prompt as admin)

        npm install -g http-server
 
Done!

From then on just `cd` to the 'p5-sound-workshop- folder on your computer that has and type 

    http-server

Then point your browser at `http://localhost:8080/`

Each example project can be accessed by putting the name of the folder after the localhost url like `http://localhost:8080/playSound` or `http://localhost:8080/oscillator`


## p5.sound Reference
You can find the documentation at [https://p5js.org/reference/#/libraries/p5.sound](https://p5js.org/reference/#/libraries/p5.sound)
There are also more examples unter the sound heading at [https://p5js.org/examples/](https://p5js.org/examples/)
