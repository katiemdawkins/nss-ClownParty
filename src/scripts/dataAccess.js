const applicationState = {
    reservations:[]
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch (`${API}/reservations`)
        .then(response => response.json())
        .then(
            (serviceReservations)=> {
                applicationState.reservations = serviceReservations
            }
        )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}