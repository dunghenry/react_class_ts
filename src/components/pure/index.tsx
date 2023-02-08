import { Component } from 'react';
import Pure from './PureComponent';
class Index extends Component<{}, { show: boolean; title: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            show: true,
            title: '',
        };
    }
    // handleRemove = () => {
    //     this.setState({ show: false });
    // };
    render() {
        return (
            <>
                {this.state.show && <Pure />}
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(e) => this.setState({ title: e.currentTarget.value })}
                />
                <h3>{this.state.title}</h3>
                {/* <button onClick={this.handleRemove}>Remove Cpn</button> */}
            </>
        );
    }
}

export default Index;
