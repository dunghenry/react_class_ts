import React from 'react';
import { connect } from 'react-redux';
import { increment } from './store/slices/countSlice';
import Demo from './components/Demo';
import Layout from './components/Layout';
import Index from './components/pure';
import { RootState } from './store/store';
import './App.css';
type IProps = {
    message: string;
    increment: (a: number) => void;
    value: number;
};
type IState = {
    count: number;
    inputRef: React.RefObject<HTMLInputElement>;
};
class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            count: 0,
            inputRef: React.createRef(),
        };
    }
    componentDidMount() {
        console.log(this.props);
    }
    static getDerivedStateFromProps(props: IProps, state: IState) {
        console.log('State', state);
        // console.warn('Derived state');
        console.log('Props', props);
        return {
            ...props,
            count: 10,
        };
    }
    static defaultProps = {
        message: 'Ok',
    };
    handleIncrement = () => {
        this.props.increment(2);
    };
    render() {
        return (
            <div className="App">
                <h1>Reactjs</h1>
                <h2>{this.props.message}</h2>
                <h2>{this.state.count}</h2>
                <Layout>
                    <Demo />
                </Layout>
                <Index />
                <h3>{this.props.value}</h3>
                <input type="text" ref={this.state.inputRef} />
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}
const mapStateToProps = (state: RootState) => state.counter;
export default connect(mapStateToProps, { increment })(App);
