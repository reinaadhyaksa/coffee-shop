import { CreateElement } from "../components/CreateElements";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from "react-router-dom";

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

export default function LocationPage() {
    return (
        <>
            <CreateElement
                title={"Lokasi Kami"}
                descriptions={"Kopi Hening tersembunyi di sudut tenang kota, dikelilingi pepohonan rindang yang menciptakan suasana damai. Kami memilih lokasi ini untuk memberikan pengalaman slow living yang autentik bagi para pengunjung."}
            />
            <section class="py-20 bg-white">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                            <MapContainer
                                center={[-6.2607, 106.7816]} 
                                zoom={15}
                                scrollWheelZoom={false}
                                className="w-full h-full"
                            >
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[-6.2607, 106.7816]}>
                                    <Popup>
                                        Kopi Hening<br /> Jalan Raya Kopi Hening No. 42
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        <div class="bg-white p-8 rounded-lg shadow-md">
                            <h3 class="text-2xl font-medium mb-6 font-lora">Temukan Kami</h3>

                            <div class="space-y-6">
                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <i class="fas fa-map-marker-alt text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-medium mb-2">Alamat</h4>
                                        <p class="text-gray-600">Jalan Raya Kopi Hening No. 42, Kawasan Rindang Jaya, Jakarta Selatan, Indonesia 12345</p>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <i class="fas fa-phone-alt text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-medium mb-2">Telepon</h4>
                                        <p class="text-gray-600">+62 812 3456 7890</p>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <i class="fas fa-bus text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-medium mb-2">Transportasi</h4>
                                        <p class="text-gray-600">Bus TransJakarta: Halte Rindang Jaya (5 menit berjalan kaki)</p>
                                        <p class="text-gray-600">MRT: Stasiun Asri Tenang (10 menit berjalan kaki)</p>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <i class="fas fa-car text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-medium mb-2">Parkir</h4>
                                        <p class="text-gray-600">Tersedia parkir mobil dan motor di area kafe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-16 bg-white p-8 rounded-lg shadow-md">
                        <h3 class="text-2xl font-medium mb-6 text-center font-lora">Petunjuk Arah</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 class="text-xl font-medium mb-4 flex items-center">
                                    <i class="fas fa-walking text-amber-800 mr-2"></i>
                                    Dari Stasiun MRT
                                </h4>
                                <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                                    <li>Keluar dari pintu utara Stasiun Asri Tenang</li>
                                    <li>Belok kanan menuju Jalan Raya Asri</li>
                                    <li>Ikuti jalan selama 5 menit sampai pertigaan</li>
                                    <li>Belok kiri ke Jalan Raya Kopi Hening</li>
                                    <li>Kopi Hening berada di sisi kanan jalan</li>
                                </ol>
                            </div>
                            <div>
                                <h4 class="text-xl font-medium mb-4 flex items-center">
                                    <i class="fas fa-car text-amber-800 mr-2"></i>
                                    Dengan Kendaraan Pribadi
                                </h4>
                                <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                                    <li>Dari Jalan Tol Dalam Kota, ambil exit Rindang Jaya</li>
                                    <li>Ikuti Jalan Raya Tenang selama 2 km</li>
                                    <li>Belok kanan di perempatan lampu merah kedua</li>
                                    <li>Lurus selama 500 meter</li>
                                    <li>Kopi Hening berada di kompleks Rindang Jaya</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div class="mt-16 text-center">
                        <p class="text-lg mb-6">Masih kesulitan menemukan kami?</p>
                        <Link
                            to={"/contact"}
                            className="btn-primary inline-block bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}