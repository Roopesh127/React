import { useState } from "react"

const Inputformbyfunction = () => {
    const [namee, setname] = useState("");
    const [email, setemail] = useState("");
    const [gender, setgender] = useState("");

    return (
        <>
            <input type="text"
                placeholder="Username"
                value={namee}
                onChange={(e) => setname(e.target.value)}
            />
            <div>
                <p>name:{namee}</p>
            </div>

            <input type="text"
                placeholder="enter mail"
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />
            <div>
                <p>Email:{email}</p>
            </div>

            <input type="radio"
                name="gender"
                value={"male"}
                onChange={(e) => setgender(e.target.value)}
            />
            <label htmlFor="male">Male</label>
            <div>
                <p>Gender:{gender}</p>
            </div>
        </>

    );
};
export default Inputformbyfunction;