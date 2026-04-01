export default async function ProductReviews({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <div>
      <h1>All reviews for product {productId}</h1>

      <ul>
        <li>Review 1 for product {productId}</li>
        <li>Review 2 for product {productId}</li>
        <li>Review 3 for product {productId}</li>
      </ul>
    </div>
  );
}
