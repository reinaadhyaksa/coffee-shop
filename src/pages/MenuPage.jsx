import { useState } from "react";
import { CreateButton, CreateElement, CreateMenu, CreateNotes, animate } from "../components/CreateElements";
import { coffeMenu, nonCoffeeMenu, foodMenu, dataNotes, snackMenu } from "../data/data";

export default function MenuPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [loading, setLoading] = useState(false);
    const handleFilterClick = (category) => {
        setLoading(true);
        setTimeout(() => {
            setActiveFilter(category);
            setLoading(false);
        }, 500);
    };

    return (
        <>
            <CreateElement 
                title={"Menu Kami"} 
                descriptions={"Kami menawarkan berbagai pilihan kopi dari biji pilihan Nusantara dan makanan ringan homemade yang disiapkan dengan penuh kehati-hatian untuk menemani momen hening Anda."}  
            />

            <section id="menu" class="py-20 bg-white">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="flex flex-wrap justify-center mb-12">
                        <CreateButton
                            onClick={() => handleFilterClick("all")} 
                            text={"Lihat Semua"}
                        />
                        <CreateButton 
                            onClick={() => handleFilterClick("kopi")}
                            text={"Kopi"}
                        />
                        <CreateButton 
                            onClick={() => handleFilterClick("nonkopi")}
                            text={"Non-kopi"}
                        />
                        <CreateButton 
                            onClick={() => handleFilterClick("makanan")}
                            text={"Makanan"}
                        />
                        <CreateButton
                            onClick={() => handleFilterClick("camilan")} 
                            text={"Camilan"}
                        />
                    </div>

                    {
                        loading ? (
                            <div className="flex justify-center items-center py-10">
                                <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-amber-800"></div>
                            </div>
                        ) : (
                                <div 
                                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    {
                                        (activeFilter === "all" || activeFilter === "kopi") && (
                                            coffeMenu.map((item, index) => (
                                                <CreateMenu
                                                    key={index}
                                                    images={item.images}
                                                    title={item.title}
                                                    price={item.price}
                                                    descriptions={item.description}
                                                    trending={item.trending}
                                                    tags={item.tags}
                                                />
                                            ))
                                        )
                                    }
                                    {
                                        (activeFilter === "all" || activeFilter === "nonkopi") && (
                                            nonCoffeeMenu.map((item, index) => (
                                                <CreateMenu
                                                    key={index}
                                                    images={item.images}
                                                    title={item.title}
                                                    price={item.price}
                                                    descriptions={item.description}
                                                    trending={item.trending}
                                                    tags={item.tags}
                                                />
                                            ))
                                        )
                                    }
                                    {
                                        (activeFilter === "all" || activeFilter === "makanan") && (
                                            foodMenu.map((item, index) => (
                                                <CreateMenu
                                                    key={index}
                                                    images={item.images}
                                                    title={item.title}
                                                    price={item.price}
                                                    descriptions={item.description}
                                                    trending={item.trending}
                                                    tags={item.tags}
                                                />
                                            ))
                                        )
                                    }
                                    {
                                        (activeFilter === "all" || activeFilter === "camilan") && (
                                            snackMenu.map((item, index) => (
                                                <CreateMenu
                                                    key={index}
                                                    images={item.images}
                                                    title={item.title}
                                                    price={item.price}
                                                    descriptions={item.description}
                                                    trending={item.trending}
                                                    tags={item.tags}
                                                />
                                            ))
                                        )
                                    }
                                </div>
                        )
                    }

                    <div class="mt-16 text-center">
                        <p class="text-lg mb-6">Ingin melihat menu lengkap kami?</p>
                        <a 
                            href="https://drive.google.com/file/d/1_7Yu8KnuCwfj7g6qeE2GpA3KH9n78BVR/view?usp=drivesdk" 
                            class="btn-primary inline-block bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition"
                        >
                            <i class="fas fa-download mr-2"></i> Unduh Menu PDF
                        </a>
                    </div>

                    <div class="mt-16 p-8 bg-gray-50 rounded-lg shadow-sm">
                        <h3 class="text-xl font-medium mb-4 text-center">Catatan Khusus</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            {
                                dataNotes.map((item) => {
                                    return (
                                        <CreateNotes 
                                            nameclass={item.className}
                                            text={item.text}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}