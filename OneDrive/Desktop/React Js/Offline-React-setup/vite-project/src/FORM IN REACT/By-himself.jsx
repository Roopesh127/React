import { useState } from "react"

const RegistrationForm = () => {
    const [uname, setname] = useState("Roopesh");
    return (
        <>
            <h1>Profile</h1>
            <p>Name - {uname}</p>
            <input type="text" value={uname}
                onChange={(e) => setname(e.target.value)}
            />
        </>
    )

}
export default RegistrationForm;