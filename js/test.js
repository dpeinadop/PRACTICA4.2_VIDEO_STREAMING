 "use strict";

/* 
Testeo del gestor de imágenes.
*/
function testVideoStreamig(){
  
  // Testeo Objeto Person
  
    var  videoS = VideoSystem.getInstance();
  videoS.name = "VideoSystem de prueba";
  console.log ("Instancia VideoSystem: " + videoS.name);
    var p1 = new Person ("David", "Peinado", new Date("1975/12/10"))
    var p2 = new Person("David", "Peinado", new Date("1975/12/10"), "Prieto");
    var p3 = new Person("David", "Peinado", new Date("1975/12/10"), "Prieto","PICTURE");
    console.log(p1.toString());
    console.log(p2.toString());
    console.log(p3.toString());
   

var us1 = new User("tomate","dpeinadoprieto@hotmail.com","dhui2");
var us2 = new User("lusi","drieto@hotmail.com","hola");
var us3 = new User("tomate","dpeinadoprieto@hotmail.com","dhui2");

console.log(videoS.addUser(us1));
console.log(videoS.addUser(us2));
//console.log(videoS.addUser(us3)); --> funciona
console.log(videoS.removeUser(us2));
var cat = new Category("fddafdas","ffadfioihonoioniodfnff ");
var m1 = new Movie ("HISIS",new Date("1975/12/10") );
var s1 = new Serie ("Los locos", new Date("1990/1/5"));
console.log(cat.toString());
console.log(m1.toString());
console.log(s1.toString());
//console.log(videoS.addCategory(cat)); //--> da problemas
console.log(videoS.addProductions(m1));
console.log(videoS.addProductions(s1));
//console.log(videoS.removeProductions(m1)); --> da problemas





//    var m1 = new Movie ("HISIS",new Date("1975/12/10") );
 //   var s1 = new Serie ("Los locos", new Date("1990/1/5"));
 
 // var sea = new Season ("fsdafsdaf");
  // set para lasname2 
  //p2.lastname2 = "bien";
 // 
 // var coor = new Coordinate("1","40");
 // 
   // p2.lastmane2= ("tomate");
 //  console.log(p2)
  // p2.addEpisode("titulo", "sadas", [23, "asdf", new Person("s", "s", new Date())]);
//    var p3 = new Person("David","Peinado", "prieto", 12/10/1975);
   // var p4 = new Person();
    // var p5 = new Person();
   // console.log(p1.toString());
 //  console.log(p2.toString());
 //  console.log(s1.toString());
  //  console.log(coor.toString());
   // console.log(p3.toString());
   // console.log(p4.toString());
  //  console.log(p5.toString());
} 
window.onload = testVideoStreamig;

