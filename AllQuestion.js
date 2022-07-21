// Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps. 
  
 // ['JOHN', 'BABA', 'YAGA', 'WICK'] 
  
 let studentRecords = [ {name: 'John', id: 123, marks : 98 }, 
 {name: 'Baba', id: 101, marks : 23 }, 
 {name: 'yaga', id: 200, marks : 45 }, 
 {name: 'Wick', id: 115, marks : 75 } ]  
  
  
 //Ans. 
  
 for(let i=0;i<studentRecords.length;i++) 
 { 
  
     console.log(studentRecords[i].name.toUpperCase()); 
 } 
  
 // Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks. 
  
 // [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }] 
  
 for(let i=0;i<studentRecords.length;i++) 
 { 
  
     if(studentRecords[i].marks>50) 
     {