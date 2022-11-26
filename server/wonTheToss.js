function wonTheToss(matches){

let winToss = {};

matches.map((ele)=>{
    if(ele.winner == ele.toss_winner){
        if(winToss[ele.winner]){
        winToss[ele.winner] += 1;
        }else{
            winToss[ele.winner] = 1;
        }
    }
})



return winToss;
}

module.exports = wonTheToss;







//     for(let ele in matches){
//         if(matches[ele]['winner'] == matches[ele]['toss_winner']){
          
//             if(winToss[matches[ele]['winner']]){
//                 winToss[matches[ele]['winner']] += 1;
//             }else{
//                 winToss[matches[ele]['winner']] = 1;
//             }
//     }
   
// }