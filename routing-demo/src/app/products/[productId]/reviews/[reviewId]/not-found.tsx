'use client';
import { usePathname } from "next/navigation";
export default function NotFound() {
    const pathname = usePathname();

    /* 
        It will pathname return an array  

        ["http://localhost:3000/", "products", "1", "reviews", "10002"]

        index of productId is 2 and reviewId 4
        */

    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4]

    
    return (
        <div>
            <h1>Review {reviewId} Not Found for product {productId}</h1>
        </div>
    )
}