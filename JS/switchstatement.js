let color="yellow";
switch(color){
    case "red":
        console.log("stop"); //it compare to this case that match the color if not move to next case
        break;
    case "yellow": //if the color is yellow it will execute this block
        console.log("ready to go");
        break;// if we can't apply break after target output, it then print all the output after this
    case "green": //if the color is green it will execute this block
        console.log("go");
       break; //if the color is not match to any case it will execute the default block
    default:
        console.log("invalid color"); //default block

}

let day= 3;
switch(day){
  case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday"); 
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:    
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
}       