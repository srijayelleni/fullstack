function square(val){
    return val*val
}
function cube(val){
    return val*val*val
}

function sumofsomething(val1,val2,callback){
    let firstvalue=callback(val1)
    let secondvalue=callback(val2)
    return firstvalue+secondvalue
}
const ans=sumofsomething(2,3,cube)
console.log(ans);
setTimeout(()=>console.log("hellow"),2000)