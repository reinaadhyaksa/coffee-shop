import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, List,  MapPin, Phone, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav class="bg-transparent absolute w-full z-10 py-4">
            <div class="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#" class="text-white text-2xl font-semibold">Kopi Hening</a>
                <div class="hidden md:flex space-x-8">
                    <Link
                        to={"/"}
                        className="text-white hover:text-gray-200 transition"
                    >
                        Beranda
                    </Link>
                    <Link
                        to={"/about"}
                        className="text-white hover:text-gray-200 transition"
                    >
                        Tentang Kami
                    </Link>
                    <Link
                        to={"/menu"}
                        className="text-white hover:text-gray-200 transition"
                    >
                        Menu
                    </Link>
                    <Link
                        to={"/location"}
                        className="text-white hover:text-gray-200 transition"
                    >
                        Lokasi
                    </Link>
                    <Link
                        to={"/contact"}
                        className="text-white hover:text-gray-200 transition"
                    >
                        Kontak
                    </Link>
                </div>
                <div class="md:hidden">
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)}
                        class="text-white focus:outline-none"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                </div>

                {menuOpen && (
                    <div className="fixed inset-0 bg-amber-800 z-50 flex flex-col px-10 pt-10 space-y-6 text-white text-2xl">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-6 right-6 text-white text-3xl"
                        >
                            <X size={30} />
                        </button>
                        <Link 
                            to="/" 
                            className="flex text-white hover:text-gray-200 transition gap-2"  
                            onClick={() => setMenuOpen(false)}
                        >
                            <Home size={30}  />
                            Beranda
                        </Link>
                        <Link 
                            to="/about" 
                            className="flex text-white hover:text-gray-200 transition gap-2"  
                            onClick={() => setMenuOpen(false)}
                        >
                            <Info size={30} />
                            Tentang Kami
                        </Link>
                        <Link 
                            to="/menu" 
                            className="flex text-white hover:text-gray-200 transition gap-2"  
                            onClick={() => setMenuOpen(false)}
                        >
                            <List size={30} />
                            Menu
                        </Link>
                        <Link 
                            to="/location" 
                            className="flex text-white hover:text-gray-200 transition gap-2"  
                            onClick={() => setMenuOpen(false)}
                        >
                            <MapPin size={30} />
                            Lokasi
                        </Link>
                        <Link 
                            to="/contact" 
                            className="flex text-white hover:text-gray-200 transition gap-2"  
                            onClick={() => setMenuOpen(false)}
                        >
                            <Phone size={30} />
                            Kontak
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}