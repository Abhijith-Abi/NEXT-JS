import { useRouter } from "next/router";

function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);

    if (params.length === 2) {
        return (
            <h1>
                Viewing Docs for feturing {params[0]} and concept {params[1]}
            </h1>
        );
    } else if (params.length === 1) {
        return <h1>Viewing Docs for {params[0]}</h1>;
    }

    return <h1>This is the document page</h1>;
}

export default Doc;
