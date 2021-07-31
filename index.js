const students = [
  { name: "Adhi", gender: "male" },
  { name: "Ahamed", gender: "male" },
  { name: "Rutika Kadam", gender: "female" },
  { name: "Priyadharsini", gender: "female" }
];

//using for loop & if 
let fem =[];
let starts=[];
let count=[];
for(let i=0;i<students.length;i++)
{
  if(students[i].gender === "female")
  {
    fem.push(students[i].name);
  }
  if(students[i].name.startsWith("A"))
  {
    starts.push(students[i].name);
  }
  if(students[i].gender === "male")
  {
    count.push(students[i].name);
  }
}
console.log(fem);
console.log(starts);
console.log("Total no of males is "+count.length);

// To fetch only the details of name whose gender is female 
let female = (students.filter(nam => nam.name && nam.gender==="female"));
console.log(female);

// To fetch only the details of name starts with A
let start = (students.filter(nam => nam.name.startsWith("A")));
console.log(start);

let mcount = (students.filter(nam => nam.name.length && nam.gender==="male"));
console.log("No of males is "+ mcount.length);