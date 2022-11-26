function bowlerEconomy(matches, deliveries){

    let arr = [];


    matches.filter(ele => {
    if(ele.season === '2015'){
        arr.push(ele.id)
    }});

    let totalRun = {};
    let totalBall = {}

    arr.filter(ele => {ele
    let idMatch = deliveries.filter(ele2 => ele2.match_id === ele)

    idMatch.map(el =>{
        let bowlerName = el.bowler;
        if(totalBall[el.bowler]){
            totalBall[el.bowler]++
        }else{
            totalBall[el.bowler] = 1
        }
        if(!totalRun.hasOwnProperty(bowlerName)){
            totalRun[bowlerName] = el.total_runs
        }else{
            totalRun[bowlerName] = parseInt(totalRun[bowlerName]) + parseInt(el.total_runs)

        }
    })

})



for(let ele in totalRun){
    totalRun[ele] = (totalRun[ele]/totalBall[ele]*6)
}

ecoBowler =  Object.entries(totalRun).sort((a,b) => a[1] - b[1]).splice(0,10)

let result = [];
for(let ele in ecoBowler) {
    result.push(ecoBowler[ele][0])
}
return result;

}
module.exports = bowlerEconomy;











// for(let ele in matches){
//     if(matches[ele]['season'] === '2015'){
//         arr.push(matches[ele]['id'])
//         }
// }

// for(let ele in arr){
//     for(let ele2 in  deliveries){
//         if(deliveries[ele2]['match_id'] === arr[ele]){
//            // arr1.push(deliveries[ele2]['match_id'])
//             let bowler = deliveries[ele2]['bowler']
//             if(totalBall[deliveries[ele2]['bowler']]){
//                 totalBall[deliveries[ele2]['bowler']] += 1
//             }else{
//                 totalBall[deliveries[ele2]['bowler']] = 1
//             }          
//             if(!totalRun.hasOwnProperty(bowler)){
//                 totalRun[bowler] = deliveries[ele2]['total_runs']
//             }else{
//                 totalRun[bowler] = parseInt(totalRun[bowler]) + parseInt(deliveries[ele2]['total_runs']);

//             }
//         }

//     }
// }