import React from 'react';
import { Landmark } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b-0 rounded-none bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-lg shadow-lg">
                            <Landmark className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white font-bold text-xl tracking-wide">
                            GlobalXchange
                        </span>
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-white/70 text-sm font-medium">
                            Enterprise Currency Converter
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;