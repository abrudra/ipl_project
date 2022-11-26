function dismissedPlayer(deliveries){

    let result = deliveries.reduce((acc,curr) => {
        if((curr.player_dismissed !== "") && (curr.dismissal_kind !== 'run out')){
            let bowler = curr.bowler;
            let batsman = curr.batsman;
            let str = batsman+" - "+bowler

            if(acc[str]){
                acc[str]++
            }else{
                acc[str] = 1
            }
        }
        return acc;
    },{})

    
let playerName = Object.entries(result).sort((a,b)=>b[1]-a[1]).slice(0,1)

return Object.fromEntries(playerName)


}

module.exports = dismissedPlayer;













//   let result={}

//     for(let ele in deliveries){
//         if((deliveries[ele]['player_dismissed'] !== "") && (deliveries[ele]['dismissal_kind']!=="run out")){
//             let bowler = deliveries[ele]['bowler']
//             let batsman = deliveries[ele]['batsman']
//             let str = batsman+"-"+bowler

//            if(result[str]){
//                 result[str]++
//             }else{
//                 result[str] = 1
               
//             }
//         }
//     }
// console.log(result)