//some update that get displayed on the browser
function displayer(value){
    document.getElementById("demo").innerHTML = value
}

const myPromise = ()=> {
    return new Promise((resolve,reject)=>{
        const x = 1;
        if(x==0){
            resolve("Success")
        }else{
            reject("Error")
        }
    })
}

myPromise().then((data)=>{
    displayer(data)
}).catch(err=>{
    displayer(err)
}).finally(()=>{console.log("promise completed")})

let stock={
    fruits:["apple","banana","orange"],
    liquid:["water","ice"],
    holder:["cup","cane","stick"],
    toppings:["chocolate","peanut"],
}

let is_shop_open=true;

let order=(time,work)=>{

    return new Promise((resolve,reject)=>{

        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            reject(console.log("Sorry our shop is closed"))
        }
    })
}

order(2000,()=>console.log(`${stock.fruits[2]} was selected`)
)

.then(()=>{
    return order(0,()=>console.log("production has started"))
})

.then(()=>{
    return order(2000,()=>console.log("fruits have been chopped"))
})

.then(()=>{
    return order(2000,()=>console.log(`Added ${stock.liquid[0]} and ${stock.liquid[1]}`))
})

.then(()=>{
    return order(1000,()=>console.log("The machine has started"))
})

.then(()=>{
    return order(2000,()=>console.log(`${stock.holder[1]} selected`))
})

.then(()=>{
    return order(2000,()=>console.log(`${stock.toppings[1]} was added`))
})

.then(()=>{
    return order(1000,()=>console.log("Ice scream serve, enjoy you recipe"))
})

.catch(()=>{
    console.log("Pass back later");
})

.finally(()=>{
    console.log("Thanks, see you next time");
});
