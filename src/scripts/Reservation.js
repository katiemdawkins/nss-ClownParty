import { getReservations } from "./dataAccess.js"
import { deleteReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")



mainContainer.addEventListener("click", click => {
    //looking for id that starts with reservationDeny--
    if (click.target.id.startsWith ("reservationDeny--")){
        //look to the second item in the array, the item after the --
        const [,reservationObjId] = click.target.id.split("--")
        //invoke the deleteReservation function w/reservationObjId
        //parseInt makes reservationObjId an integer bc it was a string
        deleteReservation(parseInt(reservationObjId))
    }
})

//in this function I'm converting each reservation to a list item
//the parameter represents each reservation object in the array
//using string interpolation to render the list item in the HTML
const reservationToListItem = (reservationObj) => {
    let html = `<li>
        ${reservationObj.parentName} requests a party for ${reservationObj.numberOfKidGuests} kids on ${reservationObj.dateOfReservation}
        <button class ="reservation__deny"
            id="reservationDeny--${reservationObj.id}">
            Deny
        </button>
        </li>
        `
    //returning the html we created
    return html
}

//this function creates the structure for the 
//unordered list for the Reservations

export const Reservations = () => {
    const reservations = getReservations()

    let html = `
    <ul>
        ${
            //using the .map method to copy all list items from the 
            //reservationToListItems function 
            //using .join to make the list one long ??can't remember
            reservations.map(reservationToListItem).join("")
        }
    </ul>
    `
    return html
}
