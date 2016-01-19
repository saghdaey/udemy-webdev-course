        
        //random color generator (copied from stack overflow)
        function getRandomColor(){
            var letters='0123456789ABCDEF'.split(''); //creates array of letters/numbers used in html color code
            var color='#'; //html color codes all start with hash symbol
            for(var i=0;i<6;i++){ //i can be 0 to 5
                color+=letters[Math.round(Math.random()*15)]; //add random entry of array to our color string
            }return color;
        }

        //difference between click time and created time = reaction time in milliseconds
        var clickedTime;
        var createdTime;  
        var reactionTime; 

        function makeBox(){ 
            var time=Math.random();
            time=time*3500;
            setTimeout(function(){
                //circle or box with equal probability
                if(Math.random()>0.5){
                    document.getElementById("box").style.borderRadius="60px";
                } else {
                    document.getElementById("box").style.borderRadius="0px";
                }
                //to assign random placement on page 

                var top=Math.random();
                //random margin 0-400px
                top=top*400;

                var left=Math.random();
                left=left*600;

                document.getElementById("box").style.top=top+"px";
                document.getElementById("box").style.left=left+"px";
                document.getElementById("box").style.backgroundColor=getRandomColor();
                document.getElementById("box").style.display="block"; 
                createdTime=Date.now();
                
            }, time); 
        }

        makeBox();
        document.getElementById("box").onclick=function(){
            clickedTime=Date.now();
            reactionTime=(clickedTime-createdTime)/1000 
            document.getElementById("time").innerHTML=reactionTime;
            this.style.display="none";
            makeBox();
        }