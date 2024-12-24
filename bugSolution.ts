function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${(date as Date).toDateString()}.`);
  return `Hello, ${person}, today is ${(date as Date).toDateString()}.`;
}

let message = greet("Mark", new Date());
console.log(message); 