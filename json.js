const tasks =[

    {
        id:1,
        text:' Node.js',
        isCompleted:false
    },
 
    {
     id:2,
     text:'JS',
     isCompleted:true
    },
 
   { 
     id:3,
     text:'Laravel',
     isCompleted:true
   }
 
 ];
 
 //converting into a JSON OBJECT
 const todoJSON = JSON.stringify(tasks);
 console.log(todoJSON);


//For LOOP
for(let i=0; i<=10; i++){
   // console.log(i);
   console.log(`For Loop Number: ${i}`);
}

//While loop
let i = 0;
while(i<10){
  console.log(`While Loop Number: ${i}`);
  i++;
}


//Looping through arrays
for(let i=0; i<tasks.length; i++){
  console.log(todos[i].text);
}

//for of loop
for(let task of tasks){
  console.log(task.text);
}


//High Order array methods //Itaration with arrays
//ForEach,Map ,Filter
tasks.forEach(function(task){
  console.log(task.text);

});


//Map returns an Array!!!!
const taskText = tasks.map(function(task){
  return task.text;
});

console.log(taskText);

//Filter

const taskCompleted = tasks.filter(function(task)
{
  return task.isCompleted===true;

});

console.log(taskCompleted);


//Filtering with Mapping

const taskCompletedwithMap = tasks.filter(function(task)
{
  return task.isCompleted===true;

}).map(function(task)
{
  return task.text;
})


console.log(taskCompleted);

