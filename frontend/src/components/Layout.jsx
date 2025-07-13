import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import { HiMenu, HiX } from 'react-icons/hi';

const SIDEBAR_WIDTH = 280; // px

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-primary">
      {/* Sidebar: always fixed on desktop, overlays on mobile */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-[${SIDEBAR_WIDTH}px] z-40 bg-secondary
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'block' : 'hidden'}
          lg:block
        `}
        style={{ minWidth: SIDEBAR_WIDTH, maxWidth: SIDEBAR_WIDTH }}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-secondary rounded-lg text-textColor hover:bg-tertiary transition-colors"
        >
          {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content: always margin-left 280px so it never goes behind sidebar */}
      <main
        className="
          bg-primary
          min-h-screen
          h-screen
          overflow-y-auto
          transition-all
          pt-0
          ml-[280px]
        "
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;