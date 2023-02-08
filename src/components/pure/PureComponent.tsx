import { PureComponent } from 'react';
class Pure extends PureComponent {
    state = {
        show: true,
    };
    //call before component render
    static getDerivedStateFromProps() {
        return {};
    }
    //call after component render
    componentDidMount() {
        console.log('Called componentDidMount');
    }
    // allow re render or not
    // shouldComponentUpdate() {
    //     return true;
    // }
    // called after the component is updated in the DOM
    componentDidUpdate() {
        console.log('Update DOM');
    }
    // access props and state before the update
    getSnapshotBeforeUpdate(props: any) {
        console.log(props);
    }

    // called when the component is about to be removed from the DOM
    componentWillUnmount() {
        console.log('Component is about to be removed');
    }

    render() {
        return (
            <>
                <h1>Pure component</h1>
            </>
        );
    }
}

export default Pure;
