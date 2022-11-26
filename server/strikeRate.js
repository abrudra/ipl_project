function strikeRate(matches, deliveries){
    let batmanName = [];
    let strikeRate = {}

    for(let ele in deliveries){
        if(deliveries[ele]['batsman'] === 'V Kohli' ){
            batmanName.push(deliveries[ele]);
        }
    }
    
    

    let idSeason = {};

    for(let ele in matches){
        idSeason[matches[ele]['id']] = matches[ele]['season'];
    }


    const batsman = "V Kohli"

 


    batmanName.reduce((acc, curr) => {
        if (acc[idSeason[curr.match_id]]) {
            let ball = acc[idSeason[curr.match_id]].ball + 1;
            let run = acc[idSeason[curr.match_id]].run + Number(curr.batsman_runs);
            let strikeCal = ((run / (ball)) * 100).toFixed(1);
            acc[idSeason[curr.match_id]] = {ball,run,strikeCal}


        } else {
            let ball = 1;
            let run = Number(curr.batsman_runs);
            let strikerate = ((run / ball) * 100).toFixed(1);
            acc[idSeason[curr.match_id]] = {ball,run,strikerate}

        }

        return strikeRate[batsman] = acc

        }
    , {})

   return strikeRate
   
}

module.exports = strikeRate;