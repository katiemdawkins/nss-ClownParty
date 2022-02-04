import { Reservations } from "./Reservation.js"

export const ClownParty = () => {
    return `
        <h1> Clown Party </h1>
        <section class="reservationForm">
        </section>

        <section class="partyReservations">
            <h2> Party Reservations </h2>
            ${Reservations()}
        </section>
    `
}