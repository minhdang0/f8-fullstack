const Person = {
    greet () {
        console.log("Hello")
    }
}

const student = Object.create(Person);
student.study = function () {
    console.log("Studying...");
}

student.greet();
student.study();

console.log(Person.greet === student.greet);

student.greet = function () {
    console.log("123");
}

console.log(student);
Person.greet();
student.greet();