import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
const Form = () => {
    const [FirstName, SetFirstName] = useState("");
    const [mail, Setmail] = useState("");
    const [DateofBirth, SetDateofBirth] = useState("");
    const [Mobile, SetMobile] = useState("");
    const [Gender, SetGender] = useState("");
    const [height, Setheight] = useState("");
    const [weight, setweight] = useState("");
    const [family, setfamily] = useState("");
    const [notveryactive, setnotactive] = useState("");

    // const [Disability, SetDisability] = useState();

    return (
        <>
            <Title>Application Form</Title>
            <div>
                <h3>WHAT IS YOUR NAME ?</h3>
                <input type="text" value={FirstName}
                    onChange={(e) => SetFirstName(e.target.value)}
                />
                <br /><br />

                <h3>ENTER YOUR MAIL ID</h3>
                <input type="text" value={mail}
                    onChange={(e) => { Setmail(e.target.value) }}
                />
                <br /><br />

                <h3>SELECT YOUR DATE OF BIRTH</h3>
                <input type="date" value={DateofBirth}
                    onChange={(e) => { SetDateofBirth(e.target.value) }}
                /> <br /><br />

                <h3>ENTER YOUR MOBILE NUMBER</h3>
                <input type="text" value={Mobile}
                    onChange={(e) => { SetMobile(e.target.value) }}
                />
                <br /><br />

                <div className="form-group">
                    <h3>GENDER</h3>
                    <div style={{ display: 'flex', gap: 6 }}>
                        <div>
                            <input type="checkbox" name="Gender" value={"Male"}
                                onChange={(e) => { SetGender(e.target.value) }}
                            />
                            <label htmlFor="Male">Male</label>
                        </div>

                        <div>

                            <input type="checkbox" name="Gender" value={"Female"}
                                onChange={(e) => { SetGender(e.target.value) }}
                            />
                            <label htmlFor="Female">Female</label>
                        </div>
                    </div>

                </div>

                <div className="form-group" style={{ display: 'flex', gap: 16 }}>
                    <h3>HEIGHT (in ft)</h3>
                    <input type="number" value={height}
                        placeholder="Enter you height"
                        onChange={(e) => { Setheight(e.target.value) }}
                    />

                    <h3>WEIGHT (in kg)</h3>
                    <input type="number" value={weight}
                        placeholder="Enter you weight"
                        onChange={(e) => { setweight(e.target.value) }}
                    />
                </div>


                <h3>ACTIVITY STATUS</h3>
                <input type="checkbox" name="notveryactive" value={"Not very active"}
                    onChange={(e) => { setnotactive(e.target.value) }}
                />
                <label htmlFor="not active">Not very active</label>
                <br /><br />
                <input type="checkbox" name="notveryactive" value={"Active"}
                    onChange={(e) => { setnotactive(e.target.value) }}
                />
                <label htmlFor="Active">Active</label>
                <br /><br />


                <h3>FAMILY HISTORY</h3>
                <input type="checkbox" name="family" value={"Parents"}
                    onChange={(e) => { setfamily(e.target.value) }}
                />
                <label htmlFor="Parents">Parents</label>
                <br /><br />
                <input type="checkbox" name="family" value={"Siblings"}
                    onChange={(e) => { setfamily(e.target.value) }}
                />
                <label htmlFor="Siblings">Siblings</label>
                <br /><br />
            </div>
            <div>
                <p>Name:-{FirstName}</p>
                <p>Mail ID:-{mail}</p>
                <p>Date-of-Birth :- {DateofBirth}</p>
                <p>Mobile Number :-{Mobile}</p>
                <p>Gender :- {Gender}</p>
                <p>Height:- {height} ft</p>
                <p>Weight :- {weight} kg</p>
                <p>Activity Status :-{notveryactive}</p>
                <p>Family Level :- {family}</p>
            </div>
        </>
    )

}
export default Form;