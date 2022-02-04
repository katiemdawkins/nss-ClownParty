import { getReservations } from "./Reservations.js"

const convertRequestToListElement = (reservationObj) => {
    let html = `<li>
        ${reservationObj.parentName} requests a party for ${reservationObj.numberOfKidGuests} on ${reservationObj.dateOfReservation}
        <button class = "request__delete"
            id="request--${reservationObj.id}
            Delete
        </button>
      </li>  
    `
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