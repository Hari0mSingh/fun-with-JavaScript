/* Switch in JS
Switch syntax
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

//Example 1

const marks = 40;
switch (marks){
    case 20:
        console.log("failed");
        break;
    case 30:
        console.log("Passed");
        break;
    case 40:
        console.log("Scored good marks.");
        break;
    default:
        console.log("Entered Wrong marks.")
        break;
}

const day = "monday";
switch (day) {
    case "sunday":
        console.log("Sunday");
        break;
    case "monday":
        console.log("monday");
        break;
    default:
        console.log("No day found.")
        break;
}