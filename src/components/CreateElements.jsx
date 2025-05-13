import { Link } from "react-router-dom";
import { useEffect} from "react";

export const animate = (name, ContainerRef, setVisible) => {
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        const cards = ContainerRef.current.querySelectorAll(name);
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
}

export function CreateCard({ logo, title, text, isVisible }) {
    return (
    <div className={`p-6 bg-gray-50 rounded-lg shadow-sm card ${isVisible ? "show" : ""}`}>
      <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-6">
        <i className={logo}></i>
      </div>
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div >
  );
}

export function  CreateElement({ title, descriptions  }) {
    return (
        <div className="page-header text-center mb-16 py-20 text-white">
            <h2 class="text-3xl font-semibold mb-6 animate-slide-up">{title}</h2>
            <div class="w-24 h-1 bg-amber-800 mx-auto mb-10 animate-slide-up"></div>
            <p class="text-lg mb-12 max-w-3xl mx-auto animate-slide-up">
                {descriptions}
            </p>
        </div>
    )
}

export function CreateButton({ text, onClick }) {
    return (
        <button 
            onClick={onClick}
            class="px-6 py-2 m-2 bg-amber-800 text-white rounded-full focus:outline-none"
        >
            {text}
        </button>
    )
}

export function CreateLink({ link, logo }) {
    return (
        <Link 
            to={link}
            className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition"
        >
            <i class={logo}></i>
        </Link>
    )
}

export function CreateQuestions({ title, text  }) {
    return (
        <div class="bg-white rounded-lg shadow-sm p-6">
            <h4 class="text-lg font-medium mb-3">{title}</h4>
            <p class="text-gray-600">{text}</p>
        </div>
    )
}

export function CreateMenu({ images, title, price, descriptions, tags, trending }) {
    return (
        <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition animate-fade-in">
            <div class="h-48 overflow-hidden">
                <img
                    src={images} 
                    class="w-full h-full object-cover" 
                    alt={title}
                    />
            </div>
            <div class="p-6">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="text-xl font-medium">{title}</h4>
                    <span class="text-amber-800 font-semibold">{price}</span>
                </div>
                <p class="text-gray-600 mb-4">{descriptions}</p>
                <div class="flex items-center">
                    {trending && <span class="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full mr-2">{trending}</span>}
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{tags}</span>
                </div>
            </div>
        </div>
    )
}

export function AboutTeam({ images, name, pos, description  }) {
    return (
        <div class="text-center">
            <div class="mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img 
                    src={images}
                    alt={name}
                    class="w-full h-full object-cover" 
                />
            </div>
            <h3 class="text-xl font-medium mb-2">{name}</h3>
            <p class="text-amber-800 mb-4">{pos}</p>
            <p class="text-gray-600">{description}.</p>
        </div>
    )
}

export function CreateRating({ text, name  }) {
    return (
        <div class="bg-amber-900 p-8 rounded-lg">
            <div class="text-amber-300 mb-4">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p class="italic mb-6">"{text}"</p>
            <p class="font-medium">{name}</p>
        </div>
    )
}

export function CreateNotes({ nameclass, text }) {
    return (
        <div>
            <div class="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class={`${nameclass}  text-white text-xl`}></i>
            </div>
            <p class="text-gray-600">{text}</p>
        </div>
    )
}