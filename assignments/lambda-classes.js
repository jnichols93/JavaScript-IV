/// begin Class'///
class Person{
    constructor(atts){
    this.name= atts.name;
    this.age= atts.age;
    this.location = atts.location;
    }
    speak(){
        console.log(`hello my name is ${this.name} I am from ${this.location}`)
    };

}

class Instructor extends Person{
    constructor(insAtts){
        super(insAtts);
        this.specialty = insAtts.specialty;
        this.favLanguage = insAtts.favLanguage;
        this.catchphrase = insAtts.catchphrase;
    }
    demo(subject){
            console.log(`Today we are learning about ${subject}`)
    };

    grade(){
        console.log(`${this.name} Recieves a perfect grade on ${this.subject}`)

    };
}

class Student extends Person{
    constructor(stuAtss){
        super(stuAtss);
        this.previousBackground = stuAtss.previousBackground;
        this.className=stuAtss.className;
        this.favSubjects=stuAtss.favSubjects;
    }
    listSubjects(){
        console.log(`${this.favSubjects}`)
    };
    PRAssignment(){
        console.log(`${this.name} has submitted a PR for ${this.subject}`)

    };

    sprintChallenge(){
        console.log(`${this.name} has begun sprint challenge on ${this.subject}`)
    };
    
}

class ProjectManager extends Instructor{
    cunstructor(pmstats){
        super(pmstats);
        this.gradClassName = pmstats.gradClassName;
        this.favInstructor = pmstats.favInstructor;
    }
    standUp(){


    };
    debugsCode(){
        console.log(`${this.name} debugs ${Student.name}'s code on ${this.subject}`)
    };
}
///////////////////End Class'////////////////
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const justin = new Student({
      name: 'Justin',
      location: 'Minneapolis',
      age:26,
      previousBackground: 'Sales Manager',
      className: 'Web22',
      favSubjects: ['HTML','CSS','JavaScript']
  });
  const coco = new Student({
    name: 'Coco',
    location:'Texas',
    age:6,
    previousBackground: 'Dog',
    className:'drop out',
    favSubjects:['Tail Chasing', 'Going on Walks','Eating']

  });

  const jim = new ProjectManager({
    name: 'Jim',
    location: 'Rhode Island',
    age: 77,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `forget the homies`,
    gradClassName:'Web 11',
    favInstructor: 'Britt'
  });
  /////End objects