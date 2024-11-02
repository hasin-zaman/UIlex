import GradientButton from "@/reusable-components/buttons/gradient-button/GradientButton";
import { Link } from "react-router-dom";

export default function ProductCard({ imgLink, altText = 'product image', linkToProduct, rating, title, price, currency = '$', isLoading, handleAddToCart }) {
    rating = rating.toFixed(1);
    return (
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex">
            <Link to={linkToProduct} className="rounded-lg">
                <img class="p-8 rounded-lg min-w-[300px] min-h-[250px] max-h-[250px] max-w-[300px] object-cover" src={imgLink} alt={altText} />
            </Link>
            <div class="px-5 py-8 flex flex-col justify-between">
                <div>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <div class="flex items-center mt-2.5 mb-5">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">{currency}{price}</span>
                    <GradientButton btnText="Add to Cart" borderRadius="rounded-lg" height='h-10' customClassName="flex items-center ps-2" fromColor="from-blue-500" viaColor="via-emarald-500" toColor="to-emerald-500" onClick={handleAddToCart} isLoading={isLoading} />
                </div>
            </div>
        </div>
    );
}