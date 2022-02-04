import { getReservations } from "./dataAccess.js"
import { deleteReservation } from "./dataAccess.js"

const convertRequestToListElement = (reservationObj) => {
    let html = `<li>
        ${reservationObj.parentName} requests a party for ${reservationObj.numberOfKidGuests} kids on ${reservationObj.dateOfReservation}
        <button class ="reservation__delete"
        id="reservation--${reservationObj.id}>
        Delete
        </button>
        </li>  
    `
    return html
}

export const Reservations = () => {
    const reservations = getReservations()

    let html = `
    <ul>
        ${
            reservations.map(convertRequestToListElement).join("")
        }
    </ul>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith ("reservation--")){
        const [,reservationObjId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationObjId))
    }
})