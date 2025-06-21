import { StarIcon } from "@heroicons/react/24/solid";

interface RatingProps {
    ratingValue: number;
    reviewCount: number;
}

const Rating = ({ ratingValue, reviewCount }: RatingProps) => {

    return (
        <div className="flex items-center gap-3">

            <div className="flex">
                {
                    Array(5)
                        .fill(null)
                        .map((_, index) => {

                            const isFullStar = index < Math.floor(ratingValue);
                            const isHalfStar = index === Math.floor(ratingValue) && ratingValue % 1 >= 0.5;
                            return (
                                <StarIcon
                                    key={index}
                                    className={`size-5 ${isFullStar
                                        ? "text-yellow-400"
                                        : isHalfStar
                                            ? "text-yellow-300"
                                            : "text-gray-300"
                                        }`}
                                />
                            )
                        })
                }
            </div>
             {/* Cantidad de reseñas */}
             {
                reviewCount && (
                    <span className="text-sm text-gray-600 font-secondary">{reviewCount}</span>
                )
             }

        </div>
    )
}

export default Rating