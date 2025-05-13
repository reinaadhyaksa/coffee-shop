import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CreateCard } from "../components/CreateElements";
import { cardData } from "../data/data";

export default function HomePage() {
    const ContainerRef = useRef(null);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                }
            });
        }, {
            threshold: 0.1
        });
        reveals.forEach(el => observer.observe(el));
        return () => {
            observer.disconnect();
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const cards = ContainerRef.current.querySelectorAll(".card");
                    cards.forEach((_, i) => {
                        setTimeout(() => {
                            setVisible((prev) => [...prev, i]);
                        }, i * 300);
                    });
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        if (ContainerRef.current) {
            observer.observe(ContainerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section class="hero-section h-screen flex items-center justify-center">
                <div class="container mx-auto px-6 md:px-12 text-center animate-slide-up">
                    <h1 class="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">Kopi Hening</h1>
                    <p class="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto">Tempat di mana waktu melambat, dan setiap teguk kopi menjadi sebuah perjalanan</p>
                    <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <Link 
                            to={"/menu"}
                            class="btn-primary bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition"
                        >
                            Lihat Menu
                        </Link>
                        <Link
                            to={"/#"}
                            className="btn-primary bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-amber-800 transition"
                        >
                            Pesan Sekarang
                        </Link>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-white reveal opacity-0 translate-y-10 transition-all duration-700">
                <div class="container mx-auto px-6 md:px-12 text-center">
                    <h2 class="text-3xl font-semibold mb-6">Selamat Datang di Kopi Hening</h2>
                    <div class="w-24 h-1 bg-amber-800 mx-auto mb-10"></div>
                    <p class="text-lg mb-12 max-w-3xl mx-auto">
                        Kopi Hening adalah tempat di mana aroma kopi menyatu dengan ketenangan suasana.
                        Terletak di sudut kota yang rindang, kafe ini mengusung konsep slow living—mengajak
                        para pengunjung untuk berhenti sejenak, menikmati secangkir kopi seduh tangan,
                        dan larut dalam obrolan hangat atau kesendirian yang damai.
                    </p>
                    <div 
                        ref={ContainerRef}
                        class="grid grid-cols-1 md:grid-cols-3 gap-10"
                    >
                        {cardData.map((card, index) => (
                            <CreateCard
                                key={index}
                                logo={card.logo}
                                title={card.title}
                                text={card.text}
                                isVisible={visible.includes(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section class="py-20 bg-amber-800 text-white">
                <div class="container mx-auto px-6 md:px-12 text-center">
                    <h2 class="text-3xl font-semibold italic mb-6">"Hidup terlalu singkat untuk kopi yang biasa saja"</h2>
                    <div class="w-24 h-1 bg-white mx-auto"></div>
                </div>
            </section>
        </>
    )
}