function noOfMatchesWin(matches){

return matches.reduce((acc,curr) => {
   if(!acc[curr['season']]){
      acc[curr['season']] = {};

      let match = matches.reduce((obj , ele) =>{
           //checking for each year
         if(ele['season'] === curr['season']){
               //creating object for per year
            if(obj[ele['winner']]){
               obj[ele['winner']] += 1;
               } else{
               obj[ele['winner']] = 1
            }
         }    
         return obj;
      }  ,{})
    //adding winning data to corosponding year
      acc[curr['season']] = match;
   }
   return acc;
},{})
}


module.exports = noOfMatchesWin;