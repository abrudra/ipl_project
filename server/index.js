//CSV file Converted and Match
const csvFilePath = "../data/matches.csv"
const csv = require('csvtojson')
const deliveriesFilePath = "../data/deliveries.csv"   // Delivery JSON file Path

// FS writer 
const fs = require('fs');

//output File.
const outputMatchPerYear = "../public/output/matchPerYear.json"
const outputNoOfMathces = "../public/output/noOfMathces.json"
const outputExtraRuns = "../public/output/extraRun.json";
const outputBowelerEconomy = "../public/output/BowelerEconomy.json";
const outputWinToss =   "../public/output/WinToss.json";
const outputPlayerOfmatch = "../public/output/PlayerOfMatch.json";
const outputStrikeRate = "../public/output/StrikeRate.json";
const outputDismissedPlayer= "../public/output/DismissedPlayer.json";
const outputBestBowlerEconomy = "../public/output/BestBowlerEconomy.json";




//Question file Imported.
const matchesPerYear = require('../server/matchesPerYear');
const noOfMatchesWin = require('../server/noOfMatchesWin');
const extraRunPerTeam = require('../server/extraRunPerTeam');
const bowlerEconomy = require('../server/bowlerEconomy');
const wonTheToss = require('../server/wonTheToss');
const playerOfTheMatch = require('../server/playerOfTheMatch');
const strikeRate = require('./strikeRate');
const dismissedPlayer = require('./dismissedPlayer');
const bestEconomyInSuperOver = require('./bestEconomyInSuperOver');





function main(){
    csv()
    .fromFile(csvFilePath)
    .then((matches)=>{
        csv()
        .fromFile(deliveriesFilePath)
        .then((deliveries)=>{
            
            
             let result = matchesPerYear(matches);    //Question 1.
             resultMatchPerYear(result);                 //Question 1.
            
             let result1 = noOfMatchesWin(matches)      //Question 2.
             resultNoOfMatchesWin(result1);             //Question 2.

            let result3 = extraRunPerTeam(matches,deliveries); //Question 3.
            resultExtraRunPerTeam(result3);                    //Question 3
            

            let result4 = bowlerEconomy(matches,deliveries);     //Question 4
            resultBowlerEconomy(result4);                       //Question 4
            
            
            let result5 = wonTheToss(matches);                  //Question 5
            resultWonTheToss(result5);                             //Question 5

            let result6 = playerOfTheMatch(matches)             //Question 6
            resultPlayerOfTheMatch(result6)                     //Question 6
            
           
            let result7 = strikeRate(matches, deliveries);     //Question 7
            resultStrikeRate(result7);                          //Question 7

            let result8 = dismissedPlayer(deliveries);            //Question 8
            resultDismissed(result8);                               //Question 8
         

            let result9 = bestEconomyInSuperOver(deliveries)        
            resultBestEconomyInSuper(result9)

            
         });
    });

}

// //Question 1  output File.
function resultMatchPerYear(result){                  
    const jsonObj ={
        matchesPerYear : result
    };

    const jsonString = JSON.stringify(jsonObj,null,2);

    fs.writeFile(outputMatchPerYear,jsonString,"utf-8", err =>{
        if((err)){
            console.log(err)
        }
    })
}

//Question 2  output File.
function resultNoOfMatchesWin(matches){
    const jsonObj ={
        noOfMatchesWin : matches
    };

    const jsonString = JSON.stringify(jsonObj,null,1);
    fs.writeFile(outputNoOfMathces,jsonString,"utf-8", err =>{
        if(err){
            console.log(err)
        }
    })
}

//Question 3 output file.
function resultExtraRunPerTeam(matches,deliveries){
    const jsonObj ={
        extraRunPerTeam :{matches,deliveries}
    };

    const jsonString = JSON.stringify(jsonObj,null,2);
    fs.writeFile(outputExtraRuns,jsonString,"utf-8", err =>{
        if(err) {
            console.log(err)

        }
    })
}


// Question 4 output file.

function resultBowlerEconomy(matches, deliveries){
    const jsonObj = {
        bowelerEconomy :{matches,deliveries}

    };

    const jsonString = JSON.stringify(jsonObj,null,2);
    fs.writeFile(outputBowelerEconomy,jsonString,"utf-8", err =>{
        if(err){
            console.log(err)
        }
    });

}


// Question 5 output file.

function resultWonTheToss(matches){
    const jsonObj = {
        wonTheToss :{matches}

    };

    const jsonString = JSON.stringify(jsonObj,null,2);
    fs.writeFile(outputWinToss,jsonString,"utf-8", err =>{
        if(err){
            console.log(err)
        }
    });

}

//Question 6 output file.

function resultPlayerOfTheMatch(matche){
    const jsonObj = {
        playerOfTheMatch :{matche}
    };

    const jsonString = JSON.stringify(jsonObj,null,2);
    fs.writeFile(outputPlayerOfmatch,jsonString,"utf-8", err =>{
        if(err){
            console.log(err)
        }
    });

}

// Question 7 output file.

function resultStrikeRate(matche,deliveries) {
    const jsonObj = {
        strikeRate :{matche, deliveries} 
    };

    const jsonString = JSON.stringify(jsonObj,null,1);
    fs.writeFile(outputStrikeRate,jsonString,"utf-8", err =>{
        if(err){
            console.log(err)
        }
    });
}


// Question 8 output file.

function resultDismissed(deliveries){
    const jsonObj = {
        dismissedPlayer : deliveries
    }

    const jsonString = JSON.stringify(jsonObj,null,);
    fs.writeFile(outputDismissedPlayer,jsonString,"utf-8", err =>{
        if(err){
            console.log(err)
        }
    });
}

// Question 9 output file.
function resultBestEconomyInSuper(deliveries){
    const jsonObj = {
        BestBolerInSuperOver : deliveries
    }

    const jsonString = JSON.stringify(jsonObj,null,);
    fs.writeFile(outputBestBowlerEconomy,jsonString,"utf-8", err =>{
        if(err){
            console.log(err)
        }
    });
}

main()