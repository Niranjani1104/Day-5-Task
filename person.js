class Person {
    constructor(name, age, country, gender) {
      this.name = name;
      this.age = age;
      this.country = country;
      this.gender = gender;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
      console.log(`Gender: ${this.gender}`);
    }
  }
  
  const person1 = new Person('Rathish', 26, 'Canada', 'Male');
  const person2 = new Person(' Niranjani', 22, 'USA', 'Female');
  
  console.log('Person-1 Details:');
  person1.displayDetails();
  
  console.log('\nPerson-2 Details:');
  person2.displayDetails();