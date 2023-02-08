import React from 'react';
interface IProps {
    children: React.ReactNode;
}

interface IState {}

class Layout extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <h1>Layout component</h1>
                {this.props.children}
            </>
        );
    }
}

export default Layout;
