abstract class Rikkei {
    student: string
    birth: string
    constructor(student: string, birth: string) {
        this.student = student
        this.birth = birth
    }
    sayHello() {
        console.log("Xin chào RA")
    }
    abstract getInfo(): string
}

class SV1 extends Rikkei {
    course: string
    constructor(student: string, birth: string, course: string) {
        super(student, birth)
        this.course = course
    }
    getInfo() {
        super.sayHello()
        return `${this.student}`
    }
}

const huuDong = new SV1("huudong","22/5/1998","JS")
huuDong.sayHello()
console.log(huuDong.getInfo())
