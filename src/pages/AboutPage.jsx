import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CreateCard, animate, AboutTeam, CreateElement, CreateRating } from "../components/CreateElements";
import { aboutTeamProfile, cardDataPhiloshopy, datarating } from "../data/data";

export default function AboutPage() {
    const ContainerRef = useRef(null);
    const [visible, setVisible] = useState([]);
    animate(".card", ContainerRef, setVisible);

    return (
        <>
            <CreateElement 
                title={"Tentang Kami"}
                descriptions={"Kopi Hening lahir dari kerinduan akan ruang yang tenang dan bermakna. Kami percaya bahwa secangkir kopi yang baik bukan hanya tentang rasa, tapi juga tentang suasana dan ketenangan hati. Dengan mengusung konsep slow living, kami menghadirkan tempat di mana setiap orang bisa berhenti sejenak, meresapi waktu, dan menikmati hidup tanpa terburu-buru."}
            />

            <section class="py-20 bg-white animation-fade-in">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="flex flex-col md:flex-row items-center gap-12">
                        <div class="md:w-1/2">
                            <img 
                                src="https://images.pexels.com/photos/31964260/pexels-photo-31964260/free-photo-of-portrait-of-smiling-man-in-white-shirt.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                alt="Pendiri Kopi Hening" 
                                class="rounded-lg shadow-lg w-full h-auto" 
                            />
                        </div>
                        <div class="md:w-1/2">
                            <h2 class="text-3xl font-semibold mb-6">Sebuah Perjalanan Rasa</h2>
                            <div class="w-24 h-1 bg-amber-800 mb-8"></div>
                            <p class="text-lg mb-6">
                                Kopi Hening bermula dari sebuah mimpi sederhana - menciptakan ruang di tengah hiruk pikuk kota
                                di mana orang dapat memperlambat waktu, menikmati secangkir kopi berkualitas, dan menemukan kembali
                                kedamaian dalam kesederhanaan.
                            </p>
                            <p class="text-lg mb-6">
                                Didirikan pada tahun 2020 oleh Adi Surya, seorang pecinta kopi yang telah menghabiskan bertahun-tahun
                                menjelajahi perkebunan kopi di berbagai pelosok nusantara. Perjalanan ini menginspirasinya untuk membawa
                                kekayaan rasa kopi Indonesia ke dalam pengalaman menikmati kopi yang lebih bermakna.
                            </p>
                            <p class="text-lg">
                                Nama "Kopi Hening" sendiri terinspirasi dari momen keheningan yang dirasakan Adi ketika menikmati kopi
                                pagi di kaki Gunung Ijen, saat matahari terbit dan kabut perlahan menghilang - momen di mana segala
                                kebisingan dunia seolah lenyap, menyisakan keheningan yang menenangkan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-gray-50">
                <div class="container mx-auto px-6 md:px-12 text-center">
                    <h2 class="text-3xl font-semibold mb-6">Filosofi Kami</h2>
                    <div class="w-24 h-1 bg-amber-800 mx-auto mb-12"></div>

                    <div 
                        ref={ContainerRef}
                        class="grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        {cardDataPhiloshopy.map((card, index) => (
                            <CreateCard
                                key={index}
                                logo={card.logo}
                                title={card.titile}
                                text={card.text}
                                isVisible={visible.includes(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section class="py-20 bg-white">
                <div class="container mx-auto px-6 md:px-12">
                    <h2 class="text-3xl font-semibold text-center mb-6">Perjalanan Kami</h2>
                    <div class="w-24 h-1 bg-amber-800 mx-auto mb-16"></div>

                    <div class="timeline-container relative">
                        <div class="timeline-item pl-0 md:pl-12 pr-0 md:pr-12 pb-16 md:ml-auto md:mr-0 md:w-1/2">
                            <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <h3 class="text-xl font-medium mb-2">2020</h3>
                                <p class="text-gray-600">
                                    Kopi Hening didirikan sebagai kedai kopi sederhana dengan hanya 5 kursi dan satu barista.
                                </p>
                            </div>
                        </div>

                        <div class="timeline-item pl-0 md:pl-0 pr-0 md:pr-0 pb-16 md:ml-0 md:mr-auto md:w-1/2">
                            <div class="bg-gray-50 p-6 rounded-lg shadow-sm md:ml-12">
                                <h3 class="text-xl font-medium mb-2">2021</h3>
                                <p class="text-gray-600">
                                    Mengembangkan program kerjasama langsung dengan petani kopi di Toraja, Aceh, dan Jawa Barat.
                                </p>
                            </div>
                        </div>

                        <div class="timeline-item pl-0 md:pl-12 pr-0 md:pr-12 pb-16 md:ml-auto md:mr-0 md:w-1/2">
                            <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <h3 class="text-xl font-medium mb-2">2022</h3>
                                <p class="text-gray-600">
                                    Pindah ke lokasi yang lebih besar dan mulai menawarkan workshop penyeduhan kopi untuk umum.
                                </p>
                            </div>
                        </div>

                        <div class="timeline-item pl-0 md:pl-0 pr-0 md:pr-0 pb-16 md:ml-0 md:mr-auto md:w-1/2">
                            <div class="bg-gray-50 p-6 rounded-lg shadow-sm md:ml-12">
                                <h3 class="text-xl font-medium mb-2">2023</h3>
                                <p class="text-gray-600">
                                    Memulai program residensi seni dan literasi, membuka ruang untuk komunitas lokal.
                                </p>
                            </div>
                        </div>

                        <div class="timeline-item pl-0 md:pl-12 pr-0 md:pr-12 md:ml-auto md:mr-0 md:w-1/2">
                            <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <h3 class="text-xl font-medium mb-2">2024 - Sekarang</h3>
                                <p class="text-gray-600">
                                    Memperluas konsep "slow living" dengan menambahkan taman kecil dan ruang baca.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-gray-50">
                <div class="container mx-auto px-6 md:px-12">
                    <h2 class="text-3xl font-semibold text-center mb-6">Tim Kami</h2>
                    <div class="w-24 h-1 bg-amber-800 mx-auto mb-16"></div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {
                                aboutTeamProfile.map((item) => {
                                    return (
                                        <AboutTeam
                                            images={item.images}
                                            name={item.name}
                                            pos={item.pos}
                                            description={item.description}
                                        />
                                    )
                                })
                            }
                    </div>
                </div>
            </section>

            <section class="py-20 bg-amber-800 text-white">
                <div class="container mx-auto px-6 md:px-12 text-center">
                    <h2 class="text-3xl font-semibold mb-12">Apa Kata Mereka</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            datarating.map((item) => {
                                return (
                                    <CreateRating 
                                        text={item.text}
                                        name={item.name}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section class="py-16 bg-white">
                <div class="container mx-auto px-6 md:px-12 text-center">
                    <h2 class="text-3xl font-semibold mb-6">Datang dan Rasakan Sendiri</h2>
                    <p class="text-lg mb-8 max-w-2xl mx-auto">
                        Kami berharap dapat menyambut Anda di Kopi Hening untuk berbagi cerita, kopi, dan momen berharga bersama.
                    </p>
                    <Link 
                        to={"/contact"}
                        class="inline-block bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </section>
        </>
    )
}