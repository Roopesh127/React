import axios from "axios"
import { useEffect, useMemo, useState } from "react"

const ProductComponent = () => {
    const [state, setstate] = useState([]);
    const [one, setone] = useState([]);
    useEffect(() => {

        const Fetchdata = async () => {
            try {
                // for first api
                const response = await axios.get(" https://fakestoreapi.com/products/categories")
                // console.log(response.data);
                setstate(response.data)
            }
            catch (error) {
                console.log("error api facthing", error);
            }
        }
        Fetchdata();

    }, []);
    useEffect(() => {

        const Fetchdata2 = async () => {
            try {
                // for first api
                const response1 = await axios.get(" https://fakestoreapi.com/products")
                // console.log(response.data);
                setone(response1.data)
            }
            catch (error) {
                console.log("error api facthing", error);
            }
        }
        Fetchdata2();

    }, []);

    const memo = useMemo(() => {
        const mapping = {};
        for (let item of state) {
            const match = one.filter((x) => x.category === item);
            if (!mapping.hasOwnProperty(item)) {
                mapping[item] = match;
            }
        }
        return mapping;
    }, [state, one]);
    console.log(memo);

    return (
        <>
            <div>
                {Object.keys(memo).map((key) => {
                    return (
                        <div key={key}>
                            <p>{key}</p>
                            <ul>
                                {memo[key].map((product) => {
                                    return <li key={product.id}>{product.title}</li>
                                })}
                            </ul>

                        </div>
                    );
                })

                }
            </div>


        </>
    )
}

export default ProductComponent


