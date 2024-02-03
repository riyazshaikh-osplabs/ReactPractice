import { data } from "../data/data";
import CoreConcept from "./CoreConcept";

const HeaderData = () => {
    console.log('header data is rendering...');

    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {data.map((conceptItem, index) => (
                    <CoreConcept key={index} {...conceptItem} />
                ))}
            </ul>
        </section>
    )
}

export default HeaderData;