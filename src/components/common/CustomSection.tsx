import { CustomSectionTypes } from "../../types/CustomSectionTypes";

const CustomSection = ({ title, children, ...props }: CustomSectionTypes) => {

    return (
        <section {...props}>
            <h2>{title}</h2>
            <div>
                {children}
            </div>
        </section>
    )
}

export default CustomSection;