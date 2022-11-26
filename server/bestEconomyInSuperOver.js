function bestEconomyInSuperOver(deliveries){
    let result = {}


    let array = deliveries.reduce((acc, curr) => {
    if(([curr.is_super_over] != '0') && ([curr.dimissal_kind] != 'run out')){
        //console.log(curr.bowler)
        if(acc[curr.bowler]){
            acc[curr.bowler].ballCount++
            acc[curr.bowler].runCount += parseInt([curr.total_runs])
        }else{
            let temp = {}
            temp.ballCount = 1
            temp.runCount = parseInt([curr.total_runs])
            acc[curr.bowler] = temp

        }
    }
    return acc
    },{})

//console.log(array)


let eachPlayerEconamy=[]

for(let ele in array){
    let playerEconomy={}
    let overs = (array[ele]['ballCount']/6)
    let economy = (array[ele]['runCount']/overs)
    playerEconomy[ele] = economy
    eachPlayerEconamy.push(playerEconomy)
}

//console.log(eachPlayerEconamy)


let bestEco = eachPlayerEconamy.sort((a, b) => a[Object.keys(a)] - b[Object.keys(b)]).splice(0,1)

return bestEco
}

module.exports = bestEconomyInSuperOver;















//     for(let ele in deliveries){
//         if(( deliveries[ele]['is_super_over'] !== "0")&(deliveries[ele]['dismissal_kind'] !== "run out")){
//             //let bowler=delivery.bowler
//            // let run=delivery.total_runs
//           // console.log(deliveries[ele]['bowler'])
//             if(result[deliveries[ele]['bowler']]){
//                 result[deliveries[ele]['bowler']].ballCount++
//                 result[deliveries[ele]['bowler']].runCount += parseInt(deliveries[ele]['total_runs'])
//             }
//             else {
//                 let temp = {}
//                  temp.ballCount = 1
//                  temp.runCount = parseInt(deliveries[ele]['total_runs'])
//                  result[deliveries[ele]['bowler']] = temp
//         }
//     }
// }

// let eachPlayerEconamy=[]

// for(let ele in array){
//     let playerEconomy={}
//     let overs = (array[ele]['ballCount']/6)
//     let economy = (array[ele]['runCount']/overs)
//     playerEconomy[ele] = economy
//     eachPlayerEconamy.push(playerEconomy)
// }

// //console.log(eachPlayerEconamy)


// let bestEco = eachPlayerEconamy.sort((a, b) => a[Object.keys(a)] - b[Object.keys(b)]).splice(0,1)

// return bestEco