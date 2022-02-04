import { fetchRequests } from "./dataAccess.js";
import { ClownParty } from "./ClownParty.js";


const mainContainer = document.querySelector ("#container")

const render =() => {
    fetchRequests().then (
        () => {
            mainContainer.innerHTML = ClownParty()
        }
    )
}

render()