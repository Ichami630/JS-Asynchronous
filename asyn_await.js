//async and await makes promises easier to write
//async makes a function return a promise
//await makes a function wait for a promise
function fetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("User fetched");
        },10000)
    })
}

const run = async () => {
    try {
        console.log("Start")
        const res = await fetchUser()
        console.log(res)
        console.log("end")
    } catch (err) {
        console.log("failed to run",err)
    }
}
run();

//real world use- fetch api

const fetchData = async () => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json()
        console.log(data)
    } catch (err) {
        console.log("failed to fetch data",err)
    } finally{
        console.log("data fetch end")
    }
}
fetchData()

let stock={
    fruits:["apple","banana","orange"],
    liquid:["water","ice"],
    holder:["cup","cane","stick"],
    toppings:["chocolate","peanut"],
}

let is_shop_open=true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if (is_shop_open){
            setTimeout(resolve,ms);
        }else{
            reject(console.log("Sorry shop is closed"));
        }
    })
}

async function kitchen(){
    try{

        await time(2000);
        console.log(`${stock.fruits[2]} was selected`)

        console.log("production has started")

        await time(2000);
        console.log("fruits have been chopped")

        await time(2000);
        console.log(`Added ${stock.liquid[0]} and ${stock.liquid[0]}`)

        await time(1000);
        console.log("The machine has started");

        await time(1000);
        console.log(`${stock.holder[0]} selected`);

        await time(2000);
        console.log(`${stock.toppings[0]} was added`);

        await time(2000);
        console.log("Ice scream serve, enjoy you recipe")
    }
    catch (err){
        console.log("Come back later",err);
    }
    finally{
        console.log("Thank You");
    }

    
}

kitchen();