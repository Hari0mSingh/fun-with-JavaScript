//JS code follows a call stack when the code executes


function one(){
    console.log("Function one");
    two();
}


function two(){
    console.log("function two");
    three();
}

function three(){
    console.log("function three");
}


one();   /*   o/p = >  Function one
                       function two
                       function three  */