import Link from 'next/link'
export default function Reviews() {
    return (
        <div>
            <h1>Review List Of Products</h1>
            <ul>
                <li>
                    <Link href="reviews/laptop">list 1</Link>
                </li>
                <li>
                    <Link href="reviews/phone">list 2</Link>
                </li>
                <li>
                    <Link href="reviews/buds">list 3</Link>
                </li>
                <li>
                    <Link href="reviews/headphone">list 4</Link>
                </li>
            </ul>
        </div>
    )
}