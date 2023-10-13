import { Component } from "react";

class IInputExample extends Component {
    state = {
        uName: "",
        uEmil: "",
        Mobile: "",
        gender: "",
    };

    render() {
        return (
            <div>
                <div className="form-elements">
                    <p>Name</p>
                    <input type="text"
                        placeholder="Enter your full Name"
                        autoComplete="none"
                        value={this.state.uName}
                        onChange={(e) => {
                            console.log(e.target.value);
                            this.setState({ uName: e.target.value });
                        }}
                    />
                </div>

                <div className="form-elements">
                    <p>Email</p>
                    <input type="email"
                        placeholder="Enter your email addess"
                        autoComplete="none"
                        value={this.state.uEmil}
                        onChange={(e) => {
                            console.log(e.target.value);
                            this.setState({ uEmil: e.target.value });
                        }}
                    />

                    <div className="form-element">
                        <p>MobileNumber</p>
                        <input type="number"
                            placeholder="Enter your mobile number"
                            autoComplete="none"
                            value={this.state.Mobile}
                            onChange={(e) => {
                                console.log(e.target.value);
                                this.setState({ Mobile: e.target.value });
                            }}
                        />

                        <div className="form-elements">
                            <p>Male</p>
                            <input type="radio"
                                name="gender"
                                value={"male"}
                                autoComplete="none"
                                // A
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ gender: e.target.value });
                                }}
                            />
                            <label htmlFor="male"></label>

                        </div>

                        <div className="form-elements">
                            <p>Female</p>
                            <input type="radio"
                                name="gender"
                                value={"female"}
                                autoComplete="none"
                                // A
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ gender: e.target.value });
                                }}
                            />
                            <label htmlFor="female"></label>

                        </div>

                    </div>
                </div>

                <div>
                    <p>Name:{this.state.uName}</p>
                    <p>Email:{this.state.uEmil}</p>
                    <p>Mobile:{this.state.Mobile}</p>
                    <p>Gender:{this.state.gender}</p>

                </div>
            </div>

        );
    }

}

export default IInputExample;