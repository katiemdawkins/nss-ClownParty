import { Reservations } from "./Reservation.js"
import { ReservationForm } from "./ReservationForm.js"

//we will export this function to main js
//here is our html outline(?) or html document which 
//invokes functions that render html 
export const ClownParty = () => {
    return `
        <h1>Clown Party</h1>
        <section class="reservationForm">
            <h2>Make Your Reservation</h2>
            ${ReservationForm()}
        </section>

        <section class="partyReservations">
            <h2>Party Reservations</h2>
            ${Reservations()}
        </section>
    `
}