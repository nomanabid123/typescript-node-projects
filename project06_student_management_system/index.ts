const input = require('prompt-sync')()


class Student {
   private name: string
   public id:string
   private courses: string[]
   private balance: number

   constructor(name: string, id: string) {
         this.name = name
         this.id = id
         this.courses = []
         this.balance = 0
    }

    payTuition(amount: number) {
        this.balance -= amount
    }

    checkBalance() {
        console.log(`Balance: ${this.balance}`)
    }

    enrollCourse(course: string) {
        this.courses.push(course)
    }

    checkStatus() {
        console.log('------------------\n')
        console.log(`Name: ${this.name}`)
        console.log(`ID: ${this.id}`)
        console.log(`Courses: ${this.courses}`)
        console.log(`Balance: ${this.balance}`)
        console.log('------------------\n')
    }

    addBalance(amount: number) {
        this.balance += amount
    }

}


const Students: Student[] = []

const generateID = (num:number) => {
    return `ST${num.toString().padStart(4, "0")}`;
}

const createStudent = () => {
    const name = input('Enter name: ')
    const id = generateID(Students.length + 1)
    const student = new Student(name, id)
    Students.push(student)
}

const enrollCourse = () => {
    const id = input('Enter student id: ')
    const student = Students.find(s => s.id === id)
    if (student) {
        const course = input('Enter course: ')
        student.enrollCourse(course)
    } else {
        console.log('Student not found')
    }
}

const addBalance = () => {
    const id = input('Enter student id: ')
    const student = Students.find(s => s.id === id)
    if (student) {
        const amount = parseInt(input('Enter amount: '))
        student.addBalance(amount)
    } else {
        console.log('Student not found')
    }
}

const payTuition = () => {
    const id = input('Enter student id: ')
    const student = Students.find(s => s.id === id)
    if (student) {
        const amount = parseInt(input('Enter amount: '))
        student.payTuition(amount)
    } else {
        console.log('Student not found')
    }
}

const checkStatus = () => {
    const id = input('Enter student id: ')
    const student = Students.find(s => s.id === id)
    if (student) {
        student.checkStatus()
    } else {
        console.log('Student not found')
    }
}

const checkBalance = () => {
    const id = input('Enter student id: ')
    const student = Students.find(s => s.id === id)
    if (student) {
        student.checkBalance()
    } else {
        console.log('Student not found')
    }
}

const listStudents = () => {
    Students.forEach(s => {
        s.checkStatus()
    })
}


const main = () => {
    while (true) {
        console.log('1. Create student')
        console.log('2. Enroll course')
        console.log('3. Add balance')
        console.log('4. Pay tuition')
        console.log('5. Check status')
        console.log('6. Check balance')
        console.log('7. List students')
        console.log('8. Exit')
        const choice = parseInt(input('Enter your choice: '))
        switch (choice) {
            case 1:
                createStudent()
                break
            case 2:
                enrollCourse()
                break
            case 3:
                addBalance()
                break
            case 4:
                payTuition()
                break
            case 5:
                checkStatus()
                break
            case 6:
                checkBalance()
                break
            case 7:
                listStudents()
                break
            case 8:
                return
            default:
                console.log('Invalid choice')
        }
    }
}


main()