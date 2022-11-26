function matchesPerYear(matches){
   //let result = {};

    
    let result = matches.reduce((acc , curr) =>{
        if((acc[curr.season])){
            (acc[curr.season]) += 1;
        }else{
            (acc[curr.season]) = 1;
        }
        return acc;
    },{})
  
    return  result
   
}
module.exports = matchesPerYear













  // matches.forEach(ele => {
    //     if(result[ele.season]){
    //       result[ele.season] += 1
    //     }else{
    //       result[ele.season] = 1
    //     }
        
    // })