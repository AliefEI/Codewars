/*
betaKata is an object that contains some datas of a kata, like this:
{name:"Training JS #1",issue:0,vote:[4,3,2,1]},
rank:[8,7,6],example:true,random:true}
Your task is return a string that is the description of the state of kata. In accordance with the following rules:
Rules:
If there are issues reported(value of issue != 0), should return kata status as:
"Beta Status:Waiting for issues to be resolved"
If the number of votes is less than 5, should return kata status as:
"Beta Status:Testing & feedback needed"
If the number of ranks is less than 8, should return kata status as:
"Beta Status:Ranking feedback needed"
If Kata does not have the example testcase or/and the random testcase(one of them value=false), should return kata status as:
"Beta Status:Example testcases needed"    //example=false;random=true
"Beta Status:Random testcases needed"     //random=false;example=true
"Beta Status:Example and random testcases needed"  //example=false;rando
*/
function kataStatus(betaKata){
    //coding here..
    if (betaKata.issue !== 0){
        return "Beta Status:Waiting for issues to be resolved"
    }
    else if(betaKata.vote.length < 5){
        return "Beta Status:Testing & feedback needed"
    }
    else if(betaKata.rank.length < 8){
        return "Beta Status:Ranking feedback needed" 
    }
    else if (betaKata.example == false && betaKata.random ==false){
        return "Beta Status:Example and random testcases needed"
    }
    else if(betaKata.example== false || betaKata.random==false){
        return betaKata.example ? "Beta Status:Random testcases needed" : "Beta Status:Example testcases needed"
    }
    else{
        let scores = betaKata.vote.reduce( (a, b) => a + b, 0)
        let rank = betaKata.rank.reduce( (a, b) => a + b, 0) / betaKata.rank.length
        
        return `Kata approved. vote scores:${scores}, rank:${Math.round(rank)}kyu`
    }
}