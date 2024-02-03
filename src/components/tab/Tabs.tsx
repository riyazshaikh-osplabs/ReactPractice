import { TabsProps } from "../../types/Tabs";

const Tabs = ({ tabbuttons, ButtonHeader = 'menu', children }: TabsProps) => {

    return (
        <>
            <ButtonHeader>
                {tabbuttons}
            </ButtonHeader>
            {children}
        </>

    )
}

export default Tabs;