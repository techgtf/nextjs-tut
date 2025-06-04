export default function productDetailLayout({ children, }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h1>featured products</h1>
        </>
    )
}