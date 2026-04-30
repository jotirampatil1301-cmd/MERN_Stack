

function isPrime(n){
    let i
    if(n<=1){
        return false
    }
    if(n===2){
        return true
    }
if(n%2==0){
    return false
}
for(i=3;i*i<=n;i+=2){
    if(n%i===0){
        return false
    }
}
return true;
}

let n=input(prompt("Enter n:"))
let count=0
for(i=2;i<=n;i++){
    if(isPrime(i)){
        console.log(i);
        count++
    } 
}
console.log("The count of prime numbers="+count)
