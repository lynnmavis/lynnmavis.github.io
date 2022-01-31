




        console.log("Yo, I am alive!");

        // Grab the div where we will put our Raphael paper
        let centerDiv = document.getElementById("centerDiv");

        // Create the Raphael paper that we will use for drawing and creating graphical objects
        let paper = new Raphael(centerDiv);

        // put the width and heigth of the canvas into variables for our own convenience
        let pWidth = paper.canvas.clientWidth;
        let pHeight = paper.canvas.clientHeight;
        console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);
        //---------------------------------------------------------------------
        // Generate a random number in [m, n-1]
        let randInt = function( m, n ) {
            let range = n-m;
            let frand = Math.random()*range;
            return m+Math.floor(frand);
        }
        //-----------------------------------------------------------------------

        let numStrips = 10;
        let stripWidth = pWidth/numStrips;

        let strip = [];
        let counter = 0;

        // initialize strip array
        while (counter < numStrips){
            strip[counter] = paper.rect(counter*stripWidth, 0, stripWidth, pHeight);
            strip[counter].myBrightness = randInt(0, 255);

            strip[counter].colorString = "rgb(" + strip[counter].myBrightness + "," + strip[counter].myBrightness + "," + strip[counter].myBrightness + ")";
            strip[counter].attr({
                "fill" : strip[counter].colorString,
                "stroke-width": 0
            });

            counter++;
        }

        //update
        let neighbour; 
        let update = function(){

            counter = 0;
            
            while(counter<numStrips){
                neighbour = counter+1;
                if (neighbour===numStrips){neighbour=0};
                strip[counter].myBrightness = strip[neighbour].myBrightness;

                strip[counter].colorString = "rgb(" + strip[counter].myBrightness + "," + strip[counter].myBrightness + "," + strip[counter].myBrightness + ")";
                strip[counter].attr({
                "fill" : strip[counter].colorString,
                })
                
                counter++;

            }

        }




setInterval (update, 250)








