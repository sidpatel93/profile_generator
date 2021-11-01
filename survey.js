const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = ["What's your name? Nicknames are also acceptable :)",
"What's an activity you like doing?",
"What do you listen to while doing that?",
"Which meal is your favourite (eg: dinner, brunch, etc.)", 
"What's your favourite thing to eat for that meal?",
"Which sport is your absolute favourite?",
"What is your superpower? In a few words, tell us what you are amazing at!"]


const profileGenerator = () => {
  let answers = []

 
    rl.question(questions[0], (answer0) => {
      answers.push(answer0)
      rl.question(questions[1], (answer1) => {
        answers.push(answer1)
        rl.question(questions[2], (answer2) => {
          answers.push(answer2)
          rl.question(questions[3], (answer3) => {
            answers.push(answer3)
            rl.question(questions[4], (answer4) =>{
              answers.push(answer4)
              rl.question(questions[5], (answer5) => {
                answers.push(answer5)
                rl.question(questions[6], (answer6) => {
                  answers.push(answer6)
                  console.log(`${answers[0]} loves ${answers[2]} while ${answers[1]}, ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`)
                  rl.close()
                })
              })
            })
          })
        })
      })
    });
}

profileGenerator()

// console.log(profileGenerator())

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


