//example of synchronous blocking code
function fetchUser(){
    //simulate 9mlsecs delay
    start = Date.now()
    if(Date.now() - start < 900){}
    console.log("user fetched")
}

console.log("start")
fetchUser() //blocks 3secs
console.log("end")

//callback - the old way
function fetchAdmin(callback){
    setTimeout(()=>{
        console.log("Admin fetched")
        callback()
    },900)
}
console.log("admin fetch start")
fetchAdmin(()=>{
    console.log("admin fetch end")
}) //now the browser waits silently, doesn't freeze and continue

//callbacks
let stock={
    fruits:["apple","banana","orange"],
    liquid:["water","ice"],
    holder:["cup","cane","stick"],
    toppings:["chocolate","peanut"],
}

let order=(fruit_name,call_production)=>{

    setTimeout(()=>{
        console.log(`${stock.fruits[fruit_name]} was selected`);
        call_production();
    },2000)

}
let production=()=>{

    setTimeout(()=>{
        console.log("production has started")

        setTimeout(()=>{
            console.log("fruits have been chopped");

            setTimeout(()=>{
                console.log(`Added ${stock.liquid[0]} and ${stock.liquid[1]}`);

                setTimeout(()=>{
                    console.log("The machine has started");

                    setTimeout(()=>{
                        console.log(`${stock.holder[1]} selected`);

                        setTimeout(()=>{
                            console.log(`${stock.toppings[1]} was added`)

                            setTimeout(()=>{
                                console.log("Ice scream serve, enjoy you recipe")
                            },2000)
                        },2000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0)
}
order(1,production);

