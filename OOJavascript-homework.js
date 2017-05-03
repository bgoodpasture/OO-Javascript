// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.

function Photo(filename, location){
this.filename = filename
this.location = location
}

function Album(){
  this.photos = [];
}

Album.prototype.addPhoto = function(photo){
  this.photos.push(photo)
}

Album.prototype.listphotos = function(){
  console.log(this.photos)
}

Album.prototype.accessphoto =function(postion) {
console.log(this.photos[postion])
}

var photo1 = new Photo("me", "home" )
var photo2 = new Photo("you", "home" )
var photo3 = new Photo("him", "home" )
var album1 = new Album()

album1.addPhoto(photo1)

console.log(photo1)
console.log(album1)
console.log(album1.addPhoto(photo1))
console.log(photo1.filename)


// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.

function Person(name, position){
  this.name = name;
  this.position = position;
}

function Teacher(name, position){
  Person.call(this, name, position)
  this.job = "educator";
}

function Student(name, position){
  Person.call(this, name, position)
  this.learns = "Web development";
}

Student.prototype = Object.create(Person.prototype);
Teacher.prototype = Object.create(Person.prototype);

function School(){
  this.people = []
}

School.prototype.addPerson = function(person){
  this.people.push(person);
}

var newSchool = new School();
var newTeacher = new Teacher("orlando","curriculum dev");
var newStudent = new Student("brad","WDI");
newSchool.addPerson(newTeacher);
newSchool.addPerson(newStudent);
console.log(newSchool)
