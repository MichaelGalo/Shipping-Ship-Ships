import { HaulerList } from "./cargo.js";
import { DockList } from "./docks.js";
import { TransportsList } from "./transports.js";

const docksList = DockList();
const cargoList = HaulerList();
const transportsList = TransportsList();

const mainContainer = document.querySelector(".container");

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cargo Hauling Ships</h2>
        ${cargoList}
    </section>
    <section class="detail--column list details__cities">
        <h2>Cargo Hauler Transport Ships</h2>
        ${transportsList}
    </section>
    <section class="detail--column list details__cities">
        <h2>Docks available for Port</h2>
        ${docksList}
    </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;
