import Student from './greeter.ts'
class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();


const student = new Student("Xian", "Lucas", "Xu");

console.log(student)