export {};

function tidyUpString(str: string): string {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string): string {
  return str[0].toUpperCase() + str.slice(1)
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
const mentorsTidy: string[] = mentors.map((mentor) => capitalise(tidyUpString(mentor)));

// Viens variants: 
//let mentorsTidy: string[] = []; 
// mentors.forEach((mentor) => mentorsTidy.push(capitalise(tidyUpString(mentor)));
//});


// Otrs variants:
// const mentorsTidy: string[] = mentors.map((mentor) => capitalise(tidyUpString(mentor)));
//});


console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
