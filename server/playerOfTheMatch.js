function playerOfTheMatch(matches){
    

    let player = matches.reduce((acc,curr) => {
        
        if(acc[curr.season]){
            if(acc[curr.season][curr.player_of_match]){
                acc[curr.season][curr.player_of_match]++;
            }else{
                acc[curr.season][curr.player_of_match] = 1;
            }
        }else{
            acc[curr.season] = {};
            acc[curr.season][curr.player_of_match] = 1;
         }
        return acc
    },{})    

    for(let ele in player){
         player[ele] = Object.entries(player[ele]).sort((a,b) => b[1] - a[1])
    }
    
 
    for(let ele in player){
           player[ele] = player[ele][0][0];
        } 


  return player;
}


module.exports = playerOfTheMatch;















//    let player ={};

//     for(let ele in matches){
//         if(player[matches[ele]['season']]){
//             if(player[matches[ele]['season']][matches[ele]['player_of_match']]){
//                 player[matches[ele]['season']][matches[ele]['player_of_match']]++;
//             }else{
//                 player[matches[ele]['season']][matches[ele]['player_of_match']] = 1;
//             }
//         }else{
//             player[matches[ele]['season']] = {};
//           player[matches[ele]['season']][matches[ele]['player_of_match']] = 1;
//         }
//     }