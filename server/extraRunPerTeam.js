function extraRunPerTeam(matches, deliveries){
    let arr = [];

    matches.filter(ele => {
    if(ele.season === '2016'){
        arr.push(ele.id);
}
}) 

let results = {};

arr.filter(ele => {
    let comman = deliveries.filter(ele2 => ele2.match_id === ele)
        
        comman.map(el => {
            let batTeam = el.batting_team;
            if(!results.hasOwnProperty(batTeam)){
                results[batTeam] = el.extra_runs
    
            }else{
                results[batTeam] = parseInt(results[batTeam]) + parseInt(el.extra_runs)
            }
        })
    })


return results

}
module.exports = extraRunPerTeam;















// for(let ele in matches){
//     if(matches[ele]['season'] === '2016'){
//         arr.push(matches[ele]['id'])
//         }
//    }


// extraRun = {}
// for(let ele in arr){
//     for(let ele2 in deliveries){
//         if(arr[ele] == deliveries[ele2]['match_id']){
          
//            let batTeam = deliveries[ele2]['batting_team'];
//            if(!extraRun.hasOwnProperty(batTeam)){
//             extraRun[batTeam] = deliveries[ele2]['extra_runs'];
//            }else{
//             extraRun[batTeam] = parseInt(extraRun[batTeam]) + parseInt(deliveries[ele2]['extra_runs'])
//            }
//          }
//     }
    
// }