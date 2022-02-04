import { fetchRequests } from "./dataAccess.js";
import { ClownParty } from "./ClownParty.js";


const mainContainer = document.querySelector ("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render =() => {
    fetchRequests().then (
        () => {
            mainContainer.innerHTML = ClownParty()
        }
    )
}

render()