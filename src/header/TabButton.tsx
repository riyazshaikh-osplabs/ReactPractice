import { TabButtonTypes } from "../types/TabButtonTypes";

const TabButton = ({ children, isSelected, ...props }: TabButtonTypes) => {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>
                {children}
            </button>
        </li>
    );
}

export default TabButton;