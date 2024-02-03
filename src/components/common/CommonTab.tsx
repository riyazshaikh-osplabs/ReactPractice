import { useState } from "react";
import TabButton from "../../header/TabButton";
import { EXAMPLES } from "../../data/data";
import CustomSection from "./CustomSection";
import Tabs from "../tab/Tabs";

const CommonTab = () => {
    console.log('common tab is rendering...');

    const [selectedTopic, setSelectedTopic] = useState<string>('');

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    const handleSelect = (selectedButton: string) => setSelectedTopic(selectedButton);

    return (
        <>
            <CustomSection id="examples" title="Examples">
                <Tabs
                    tabbuttons={
                        <>
                            <TabButton
                                isSelected={selectedTopic === 'components'}
                                onClick={() => handleSelect('components')}
                            >
                                Components
                            </TabButton>
                            <TabButton
                                isSelected={selectedTopic === 'jsx'}
                                onClick={() => handleSelect('jsx')}
                            >
                                JSX
                            </TabButton>
                            <TabButton
                                isSelected={selectedTopic === 'props'}
                                onClick={() => handleSelect('props')}
                            >
                                Props
                            </TabButton>
                            <TabButton
                                isSelected={selectedTopic === 'state'}
                                onClick={() => handleSelect('state')}
                            >
                                State
                            </TabButton>
                        </>
                    }
                >

                    {tabContent}
                </Tabs>
            </CustomSection>
        </>
    )
}

export default CommonTab;