//Three parts of the message to be used to create potential joke
const messagePartOne = ["Why did the Whale",
                        "Why did the chicken",
                        "Why did the cookie",
                        "Why did the man"];

const messagePartTwo = [" cross the ocean?",
                        " cross the road?", 
                        " fall down a hole?",
                        " call the doctor?"]; 

const messagePartThree =    ["  To get to the other side!", 
                            "  Because he farted so he had to run away from the smell!",  
                            "  Because it was April fools' day!", 
                            "  Because his World was crumbling!"]

//Create a random number from length of messagePartOne                            
const randomNum = (array) => {
    return Math.floor(Math.random() * array.length)
    };

//Create joke
const createJoke = (parts) => {
    console.log(messagePartOne[randomNum(messagePartOne)]+messagePartTwo[randomNum(messagePartTwo)]+messagePartThree[randomNum(messagePartThree)])
    };

//Call createJoke function
createJoke();
