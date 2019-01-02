//var array for storing questions and answers
var questionsArr = [
  {
    Q:
      "Whose visit from Nebraska prompts Penny to ask Leonard to lie about them getting back together?",
    A1: "Her Father’s",
    A2: "Her Brother’s",
    A3: "Her Mother’s",
    A4: "Her cousin’s",
    ans: "Her Father's"
  },
  {
    Q:
      "What is Stuart's self-proclaimed 'dream job' that he lands after the comic store burns down due to a 'hot plate incident'?",
    A1: "Dressing up Goofy at Disneyland",
    A2: "Mrs. Wolowitz’s caregiver",
    A3: "Cartoonist for Marvel",
    A4: "A Bartender",
    ans: "Mrs. Wolowitz's caregiver"
  },
  {
    Q: "What is Sheldon's nickname for his grandmother?",
    A1: "Meemaw",
    A2: "Moonpie",
    A3: "Granny",
    A4: "Naanaa",
    ans: "Meemaw"
  },
  {
    Q: "Which band wrote the theme song for the show?",
    A1: "The Beatles",
    A2: "Backstreet Boys",
    A3: "Barenaked Ladies",
    A4: "Red Hot Chilli Peppers",
    ans: "Barenaked Ladies"
  },
  {
    Q: "Which state is Penny originally from?",
    A1: "California",
    A2: "New Jersey",
    A3: "Nebraska",
    A4: "Montonna",
    ans: "Nebraska"
  },
  {
    Q: "What is Howard allergic to?",

    A1: "Shellfish",
    A2: "Blueberries",
    A3: "Nuts",
    A4: "Eggs",
    ans: "Nuts"
  },
  {
    Q:
      "'While my brother was getting an STD, I was getting a Ph:D: Penicillin can't take this away:' Who said it ?",

    A1: "Sheldon",
    A2: "Amy",
    A3: "Raj",
    A4: "Leonard",
    ans: "Sheldon"
  },
  {
    Q:
      "Finish Penny's quote: 'So that means, you're a doctor, you 're a doctor, you're a doctor, you 're a doctor and, Howard, you ________________:",
    A1: "Know a lot of Doctors",
    A2: "Should leave",
    A3: "Should try and become one",
    A4: "Are a nurse",
    ans: "Know a lot of Doctors"
  },

  {
    Q:
      "'You better watch that attitude, buddy: You're dating the popular girl now:' Who said it ?",

    A1: "Amy",
    A2: "Bernadette",
    A3: "Penny",
    A4: "Emily",
    ans: "Amy"
  },

  {
    Q: " Who said it: 'Our babies will be smart and beautiful:'",
    A1: "Penny",
    A2: "Bernadette",
    A3: "Amy",
    A4: "Leonard",
    ans: "Leonard"
  },

  {
    Q: "What is Sheldon’ s favorite number ?",

    A1: "0",
    A2: "43",
    A3: "73",
    A4: "1",
    ans: "73"
  },

  {
    Q: "Where did Amy go to college ?",
    A1: "Harvard University",
    A2: "MIT",
    A3: "Princeton University",
    A4: "Standford University",
    ans: "Harvard University"
  },

  {
    Q:
      "Despite wanting his astronaut nickname to be 'Rocket Man', what nickname does Howard actually end up with ?",
    A1: "Buzz",
    A2: "Fruit Loops",
    A3: "Space Cowboy",
    A4: "The magician",
    ans: "Fruit Loops"
  },

  {
    Q:
      "Who accompanies Leonard to Switzerland on his and Penny 's first Valentine's Day ?",
    A1: "Penny",
    A2: "Howard",
    A3: "Sheldon",
    A4: "Raj",
    ans: "Raj"
  },

  {
    Q: "Who accompanies Sheldon and Amy on their first dinner date ?",
    A1: "Leonard",
    A2: "Penny",
    A3: "Raj",
    A4: "Howard and Bernadette",
    ans: "Penny"
  },

  {
    Q:
      "What song does Sheldon require his caretakers sing to him when he is sick ?",

    A1: "Baa Baa Black Sheep",
    A2: "Wheels on the Bus Go",
    A3: "Soft Kitty, Warm Kitty",
    A4: "Rock - A - Bye Baby",
    ans: "Soft Kitty, Warm Kitty"
  },

  {
    Q: "Finish this game title: 'Rock, paper, scissors, lizard, ______'",

    A1: "Kirk",
    A2: "Spock",
    A3: "Proton",
    A4: "Dinosaur",
    ans: "Spock"
  },
  {
    Q: "Where did Sheldon grow up ?",
    A1: "East Texas",
    A2: "West Texas",
    A3: "Louisiana",
    A4: "Oklahoma",
    ans: "East Texas"
  },

  {
    Q:
      "Why did Sheldon miss the opportunity to meet Stan Lee at the comic book store ?",
    A1: "He was in Jail",
    A2: "He was sleeping",
    A3: "He had to work",
    A4: "He could not go because it was not Wednesday(comic book store day)",
    ans: "He was in Jail"
  },

  {
    Q:
      "How many times does Sheldon have to knock on a door and say someone 's name?",
    A1: "It changes every time",
    A2: "One time",
    A3: "Two times",
    A4: "Three times",
    ans: "Three times"
  }
];

//var for incrementing question number
var count = 0;

//var for storing player answer
var ansChosen = "";

