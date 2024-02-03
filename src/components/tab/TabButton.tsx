import { TabButtonTypes } from "../../types/TabButtonTypes";

export default function TabButton({ children, isSelected, ...props }: TabButtonTypes) {
    console.log('TABBUTTON COMPONENT EXECUTING');
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
            </button>
        </li>
    );
}
