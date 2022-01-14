// Code your solutions in this file
const namesArray=["Guadalupe", "Ollie", "Aki"]

const writeCards=(array, adjective)=>{
    let thankYouCards=[]
    for (let i=0; i<array.length; i++){
        let name=namesArray[i]
        let message=`Thank you, ${name}, for the wonderful ${adjective} gift!`
        thankYouCards.push(message)
        }
    return thankYouCards
}

function countDown(num){
    while (num>=0){
        console.log(num--)
    }
}