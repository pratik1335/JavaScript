// Switch

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         break;
// }

// NOTE : copy and then shift + alt + down arrow for paste.


// We can use any data-type as a key in switch.

const month = "march"  // case sensitive

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;
    default:
        console.log("please enter a valid month");
        break;
}

// make sure to use break statement in each case 
// otherwise once the value matches with a case, JS will run the below cases as well, default as well.