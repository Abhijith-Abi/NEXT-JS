import { useRouter } from "next/router";

function PoroductIdPage() {
    const router = useRouter();
    const productId = router.query.productId;

    return (
        <>
            <h1>This is the product id shown page</h1>
            <h2>
                Your product id is{" "}
                <small style={{ color: "lightblue", fontStyle: "italic" }}>
                    {productId}
                </small>
            </h2>
        </>
    );
}

export default PoroductIdPage;
