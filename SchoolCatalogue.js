class School {
  constructor(name, level, studentBody) {
    this._name = name;
    this._level = level;
    this._studentBody = studentBody;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get studentBody() {
    return this._studentBody;
  }
  set studentBody(newStudentBody) {
    if (typeof newStudentBody === 'number') {
      this._studentBody = newStudentBody;
    } else {
      console.log('Invalid input: studentBody must be set to a Number.')
    }
  }
  quickFacts() {
    console.log(`${this.name} educates ${this.studentBody} students at the ${this.level} school level.`);
  }
  static pickSubTeacher(subTeachers) {
    const randomNum = Math.floor(Math.random() * subTeachers.length);
    return subTeachers[randomNum];
  }
}

class Primary extends School {
  constructor(name, level, studentBody, pickupPolicy) {
  super(name, level, studentBody);
  this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class High extends School {
  constructor(name, level, studentBody, sportsTeams) {
    super(name, level, studentBody);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
const sub = School.pickSubTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new High('Al E. Smith', 'high', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);