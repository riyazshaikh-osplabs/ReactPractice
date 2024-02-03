import { dataTypes } from "../types/data";

const CoreConcept = ({ image, title, description }: dataTypes) => {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default CoreConcept;