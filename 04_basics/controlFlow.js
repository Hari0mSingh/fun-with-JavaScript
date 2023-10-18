//When a particular code run a  condition

const marks = 70;
if(marks<=80){
    console.log("you are fail")
}
else{
    console.log("You are pass")
}

/*
Comparision operators
<= ,>= ,==, ===, !=, !==
single = is assignment operator not comparision operator
*/

/*
Logical op.=>  AND , OR , NOT
*/

//Example

const score = 98;
const attempts = 3;
if(score>=90 && attempts <=3){
    console.log("You are winner")
}
else if(score>80 || attempts <= 2){
    console.log("You completed the Match.")
}

//if condition can be used like this

const balance = 400;
if(balance>=400) console.log("You can buy a Moive ticket."), console.log("And watch movie.")


//Nesting of if-else 
const MatchScore = 600;
if(MatchScore>=500){
    console.log("Ready for 2nd round ")
    const MatchScore2nd = 700;
    if(MatchScore<=700){
        console.log("You are the Winner.")
    }
    else{
        console.log("you loose the  Match.")
    }
}