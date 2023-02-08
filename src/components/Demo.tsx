import React, { Component } from 'react';
interface IProps {
    msg: string;
}
interface IState {
    title: string;
}
class Demo extends Component<IProps, IState> {
    state: IState = {
        title: '',
    };

    // set default props
    static defaultProps = {
        msg: 'Oke',
    };
    // handleChangeTitle = (e: React.FormEvent<HTMLInputElement>): void => {
    //     this.setState({ title: e.currentTarget.value });
    // };
    handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ title: e.currentTarget.value });
    };
    handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };
    // handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    //     e.preventDefault();
    // };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChangeTitle} title={this.state.title} />
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default Demo;
