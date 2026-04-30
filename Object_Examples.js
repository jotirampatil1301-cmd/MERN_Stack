const student={
    name:"Shubham",
    city:"Pune"
}
console.log(student)
console.log(student.name)
console.log(student["name"])


const student1=new Object()
student.name="Jotiram"
student.city="Pune"

console.log(student)
console.log(student.name)
console.log(student["name"])

//Nested Objects

const student2={
    id:1,
    name:"Shubham",
    address:{
        state:"Maharashtra",
        city:"Pune",
        pincode:411001
    }
}
console.log(student2)
console.log(student2.name)
console.log(student2.address.state.city)


const student3={
    firstName:"Vaibhav",
    lastName:"Patil",
    fullName:function(){
        console.log(this.firstName+" "+this.lastName)
    }
}
console.log(student3.firstName+" " +student3.lastName)
student3.fullName()

//with arrow function
const student3={
    firstName:"Vaibhav",
    lastName:"Patil",
    fullName:()=>{
        console.log(student3.firstName+" "+student3.lastName)
    }
}
console.log(student3.firstName+" " +student3.lastName)
student3.fullName()