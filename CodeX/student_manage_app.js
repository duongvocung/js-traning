
var readlineSync = require('readline-sync');
var fs = require('fs')
let students = [];

function loadData(){
    let fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showMenu(){
    console.log('1.Show all the student');
    console.log('2.Create a new student');
    console.log('3.Save & Exit');

    var option = readlineSync.question('> ');
    switch(option){
        case '1':
            showStudents();
            showMenu();
            break;
          
        case '2':
            showCreateStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break
        default:
            console.log('Worng Option');
            showMenu();
       
            break;

    }
}

function showStudents(){
    console.clear();
    let index = 1;
    for (let student of students){
        console.log(index+'.');
        console.log('Ten : '+student.name+'.');
        console.log('Tuoi. '+student.age+'.');
       console.log('---------------------')
       index++;
    }
}

function showCreateStudent(){
    let name = readlineSync.question('Name: ');
    let age = readlineSync.question('Age: ');
    let student = {
        name : name,
        age : parseInt(age)
    };
    students.push(student);
   
}

function saveAndExit(){
    let content = JSON.stringify(students);
    fs.writeFileSync('./data.json',content, { encoding : 'utf8'});
}

function Main(){
    console.clear();
    loadData();
    showMenu();
 
}
Main();
