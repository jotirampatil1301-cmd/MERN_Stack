// function recursion(n){
//     if(n==10){
//         console.log(n*5)
//         return
//     }
   
//     console.log(n*5)
//     recursion(n+1)

// }
// recursion(1)

 function recursion(n){
    if(n > 10) return;

    console.log(n * 5);
    recursion(n + 1);
 }

 recursion(1);


function profile(id, name, city="Pune"){
    console.log(id+" "+name+" "+city)
}
profile(1,"Shubham")
profile(2,"Jotiram","Mumbai")

function myfunction(number,i=1){
    if(i>10){
        return;
    }
    console.log(number*i)
    myfunction(number,i+1)
}
myfunction(10)