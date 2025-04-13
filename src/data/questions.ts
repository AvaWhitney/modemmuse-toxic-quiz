
export interface AnswerOption {
    text: string;
    tags: string[]; // Type1–Type6
  }
  
  export interface Question {
    id: string;
    prompt: string;
    options: AnswerOption[];
  }
  
  export const questions: Question[] = [
    {
      id: "Q1",
      prompt: "You have to accidentally send one of these to your boss. Pick your poison:",
      options: [
        { text: "A voice memo of you crying and whispering “it’s fine”", tags: ["Type6"] },
        { text: "A screenshot of your Notes app titled “things I should’ve said in that meeting”", tags: ["Type2"] },
        { text: "A Google search: “how to look confident when you’re falling apart”", tags: ["Type3"] },
        { text: "A Pinterest board titled “new life, new me, no friends”", tags: ["Type1"] },
        { text: "A selfie captioned “I’m too hot to care”", tags: ["Type5"] },      
        { text: "Nothing. You ghost them and never show up again.", tags: ["Type4"] }   
      ]
    },
    {
      id: "Q2",
      prompt: "You wake up and realize you sent a risky text last night. What does it say?",
      options: [        
        { text: "'I’m not mad, I’m just disappointed.'", tags: ["Type2"] },
        { text: "'I miss the old us.'", tags: ["Type1"] },
        { text: "'Haha forget I said that unless you agree 👀'", tags: ["Type5"] },        
        { text: "A meme that only the two of you would understand... but also might end your friendship", tags: ["Type6"] },
        { text: "nvm", tags: ["Type4"] },
        { text: "A fully itemized list of your grievances, numbered and formatted", tags: ["Type3"] }
      ]
    },
    {
      id: "Q3",
      prompt: "You can only pick one of these coping mechanisms during your next emotional crisis:",
      options: [        
        { text: "Rebranding your entire personality and aesthetic", tags: ["Type1"] },
        { text: "Writing vague Instagram captions that start fights", tags: ["Type2"] },
        { text: "Muting everyone and listening to sad girl music in airplane mode", tags: ["Type4"] },
        { text: "Starting a new hobby and making it your whole identity by next week", tags: ["Type7"] },
        { text: "Sending a 5-minute voice note then deleting it mid-send", tags: ["Type6"] },
        { text: "Scheduling a “life reset” in Notion you never open again", tags: ["Type3"] }
      ]
    },
    {
      id: "Q4",
      prompt: "You have to walk into a room full of people and say one of these things. Out loud. No context. What do you go with?",
      options: [  
        { text: "'Sorry I was weird earlier'", tags: ["Type3"] },     
        { text: "'I’m in my ‘villain era’ now.'", tags: ["Type5"] },
        { text: "We don’t talk anymore, but I still think about you sometimes.", tags: ["Type1"] },
        { text: "Haha I’m literally so annoying I can’t believe you deal with me.", tags: ["Type6"] },
        { text: "'I don’t trust any of you and that’s the healthiest boundary I’ve ever set'", tags: ["Type2", "Type7"] },    
        { text: "Nothing. You pretend you forgot how to speak.", tags: ["Type4"] }    
      ]
    },
    {
      id: "Q5",
      prompt: "You just got ghosted by someone you swore wasn’t like the others. What do you do next?",
      options: [
        { text: "Stalk their likes and piece together your downfall like a true digital detective", tags: ["Type3", "Type7"] },
        { text: "Tell everyone it’s fine, but rewatch your favorite breakup scene with tears in your eyes", tags: ["Type1"] },
        { text: "Post a cute pic with the caption 'never needed u anyway 💅'", tags: ["Type5"] },
        { text: "Draft 3 dramatic texts and delete all of them", tags: ["Type4"] },
        { text: "Block them, their friends, and their favorite coffee shop. Just in case.", tags: ["Type2"] },
        { text: "Text your ex instead. It’s called emotional recycling.", tags: ["Type7"] } 
      ]
    },
    
    
  ];
  