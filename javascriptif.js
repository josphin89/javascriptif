let details={
    name:"agaram",
    age:1,
    skills:["python","react","MySQL"],
    batches:[{
      name:"batch1",
      year:2023,
      students:[
      {
        name:"bhuvana",
        age:22,
        skills:["python","aws"]
      },
      {
        name:"renisha",
        age:21,
        skills:["html","es6"]
      },
      {
        name:"Azim",
        age:20,
        skills:["JS","MySQL"]
      }
      ]
    },
            {
             name:"batch2",
             year:2024,
             students:[
             {
             name:"amirtha",
             age:20,
             skills:["css","Datastructure"]
             
             }
            ]
             }]
  }
  details.batches[0].students[1].skills.push("java")
  console.log(details.batches[0].students[1].skills)
  
  let marks={
    physics:90,
    chemistry:90,
    biology:90,
    maths:80,
    computer:90,
  }
  let total=marks.maths+marks.computer+marks.biology+marks.chemistry+marks.physics
  let percentage=total/5
  
  
  if(percentage>=90){
     console.log("grade a")
  }
  else if(percentage>=80){
    console.log("grade b")
  }
  else if(percentage>=70){
    console.log("grade c")
  }
  else if(percentage>=60){
    console.log("grade d")
  }
  else if(percentage>=50){
    console.log("grade e")
  }
  else if(percentage<=40){
    console.log("grade f")
  }
  
  let mark={
    maths:80,
    physics:70,
    chemistry:90,
    cs:100,
  }
  if((mark.maths>80 && marks.physics>80 && mark.cs>80)||(mark.maths>70 && mark.cs>70)){
    console.log("you are eligible")
  }