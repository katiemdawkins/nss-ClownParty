import { fetchRequests, sendReservation } from "./dataAccess.js";
import { ClownParty } from "./ClownParty.js";

//this is where we are sending all HTML to the DOM 
//container id within the main tag
const mainContainer = document.querySelector ("#container")



//this event Listener is listening for the "stateChanged" from the sendReservation function
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

//this function will render the HTML to the DOM
const render =() => {
    //calling fetchRequests to get the external data
    fetchRequests().then (
        () => {
            //calling Clown party function which has the html
            //outline with functions that render HTML
            mainContainer.innerHTML = ClownParty()
        }
    )
}

//invoking the render function
render()