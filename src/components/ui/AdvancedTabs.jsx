import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AdvancedTabs({ tabs, layout = 'horizontal', defaultTab, tabListClassName, tabContentClassName }) {
  const [activeTab, setActiveTab] = useState(defaultTab || (tabs.length > 0 ? tabs[0].id : null));

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const HorizontalTabTrigger = ({ tab, isActive, onClick }) => {
    const Icon = tab.icon;
    return (
      <button
        onClick={onClick}
        className="relative flex flex-col items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 group focus:outline-none whitespace-nowrap flex-1"
      >
        <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
          isActive
            ? 'bg-[#cbe30b]'
            : 'bg-[#1a1a1a] group-hover:bg-[#333333]'
        }`}>
          <Icon className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-black' : 'text-[#cbe30b]'}`} />
        </div>
        <span className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#666666] group-hover:text-white'}`}>
            {tab.title}
        </span>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#cbe30b]"
            layoutId={`underline-${layout}`}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </button>
    );
  };
  
  if (layout === 'vertical') {
    return (
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        <div className={`flex flex-row md:flex-col md:w-1/4 space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto scrollbar-hide pb-4 md:pb-0 ${tabListClassName}`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {tabs.map(tab => {
             const Icon = tab.icon;
             const isActive = activeTab === tab.id;
             return (
                <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 p-4 rounded-lg w-full text-left transition-colors duration-300 group min-w-max ${isActive ? 'bg-[#1a1a1a]' : 'hover:bg-[#1a1a1a]/50'}`}
                >
                    <div className="flex-shrink-0">
                        <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#cbe30b]' : 'text-[#666666] group-hover:text-white'}`} />
                    </div>
                    <span className={`font-medium text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#666666] group-hover:text-white'}`}>
                        {tab.title}
                    </span>
                </button>
             )
          })}
        </div>
        <div className={`flex-1 ${tabContentClassName}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {activeTabData?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Horizontal Layout
  return (
    <div>
      <div className={`flex border-b border-[#333333] overflow-x-auto scrollbar-hide ${tabListClassName}`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {tabs.map(tab => (
          <HorizontalTabTrigger
            key={tab.id}
            tab={tab}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <div className={`mt-8 ${tabContentClassName}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTabData?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}