class Student{
    constructor(name,course,degree){
        this.name=name,
        this.course=course,
        this.degree=degree
    }

    printStudent(){
        console.log(this.name,this.course,this.degree)
    }
}

var obj=new Student("sunil","python","B.tech")
obj.printStudent()
// class student{
//     setStudent(name,course,degree){
//         this.name=name,
//         this.course=course,
//         this.degree=degree
//     }

//     printStudent(){
//         console.log(this.name,this.course,this.degree)
//     }
// }

// var obj=new student()
// obj.setStudent("sunil","python","Btech")
// obj.printStudent()
