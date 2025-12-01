// Tabs Component
import { useState } from 'react';

export default function Tabs({ tabs, defaultTab = 0, onChange }) {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (onChange) onChange(index);
    };

    return (
        <div className="w-full">
            <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`px-4 py-2 font-medium whitespace-nowrap transition-colors relative ${activeTab === index
                                ? 'text-brand-primary'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                            }`}
                    >
                        {tab.label}
                        {activeTab === index && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary rounded-t"></span>
                        )}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabs[activeTab]?.content}
            </div>
        </div>
    );
}
