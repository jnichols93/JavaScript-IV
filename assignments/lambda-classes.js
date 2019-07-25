// CODE here for your Lambda Classes
class Person{
    constructor(atts);
    this.name= atts.name;
    this.age= atts.age;
    this.location = atts.location;

    speak(){
        console.log(`hello my name is ${this.name} I am from ${this.location}`)
    }
}

class Instructor extends Person{
    constructor(insAtts){
        super(insAtts);
        this.specialty = insAtts.specialty;
        this.favLanguage = insAtts.favLanguage;
        this.catchphrase = insAtts.catchphrase;
    }
    demo(){

    }

    grade(){

    }
}

class Student extends Instructor{
    constructor(stuAtss){
        super(stuAtss);
        this.previousBackground = stuAtss.previousBackground;
        this.className=stuAtss.className;
        this.favSubjects=stuAtss.favSubjects;
    }
    
}