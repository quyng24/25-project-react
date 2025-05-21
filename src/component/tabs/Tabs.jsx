import { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

const Tabs = ({data}) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className='tabs-container'>
            <div className='tabs-header'>
                {data.map((tab, index) => (
                    <button
                    key={index}
                    className={`tab-button ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className='tab-content'>
                {data[activeTab].content}
            </div>
        </div>
    )
};
Tabs.PropTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
}
export default Tabs;