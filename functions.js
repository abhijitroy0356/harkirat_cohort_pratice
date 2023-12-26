//map, filter , arrow fns

//input=[1,2,3,4,5]
//output=[2,4,6,8,10]

//type 1

const input =[1,2,3,4,5]

const arr=[]

for(let i=0;i<input.length;i++){
    arr.push(input[i]*2)
}
console.log(arr)

//type 2


function sum(i){
    return i*2
}
const ans=input.map(sum)
console.log(ans)

//type 3

const ref=input.map((n)=>{
    return n*2
})
console.log(ref)
//assigmnent by kirat
const ref1= (i)=>{
    return i*2
}

const ref3=(a)=>{
    const arr=[]
    for(let i=0;i<a.length;i++){
        arr.push(ref1(a[i]))
    }
    return arr
}
const un=0
const res= (a,ref)=>{
    const ans=ref(a)
    
    return ans
}
const jj=[1,2,3,4,5]
const idk=res(jj,ref3)
console.log(idk)

//filter

const evenarr=[1,2,3,4,5,6,7,8,9]
const even1=(i)=>{
    if(i%2==0){
        return true
    }
    return false
}
const res4= evenarr.filter(even1,evenarr)
console.log(res4)
//// another way

const kk= evenarr.filter(function(i){
    if(i%2==0){
        return true
    }
    return false
},evenarr)

console.log(kk)