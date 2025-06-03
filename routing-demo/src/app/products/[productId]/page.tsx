export default async function ProductList(
    { params }: { params: Promise<{ productId: String }>; }) {

    const productId = (await params).productId;

    return (
        <div>
            <h1>Product Details page {productId}!</h1>
        </div>
    )
}