import { useRouter } from "next/router";

function Review() {
    const router = useRouter();
    const { productId, reviewId } = router.query;

    return (
        <>
            <h1>Review</h1>
            <p>Product Id : {productId}</p>
            <p>Review Id :{reviewId}</p>
        </>
    );
}

export default Review;
