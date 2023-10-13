import { Component } from "react";

class Roopesh extends Component {
    state = {
        count: 0
    }
    render() {
        function Adding() {
            this.setState({ count: this.state.count + 1 })
        }
        return (
            <>
                <p>Counter{this.state.count}</p>
                <button onClick={Adding}>Increment</button>
            </>
        );
    }
}
export default Roopesh;