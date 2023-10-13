import { useState, useMemo } from 'react'
import axios from 'axios'
const Monday = () => {
    const [state, setstate] = useState([])
    useMemo(() => {
        const Fetchdata = async () => {
            try {
                const response = await axios.get(" https://jsonplaceholder.typicode.com/users")
                console.log(response.data);
                setstate(response.data)
            }
            catch (error) {
                console.log("error api facthing", error);
            }
        }
        Fetchdata();

    }, [])
    return (
        <>
            <input type="text" value={state} onChange={(e) => setstate(e.target.value)} />
            {state.filter((item) => (
                <li key={item.include == "e"}>{item}</li>
            ))}
        </>
    )
}

export default Monday