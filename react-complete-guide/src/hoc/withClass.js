import React, {Component} from 'react';

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

// We can also return a stateful component (without name, it's an anonymous class) if we need state access or lifecycle hooks
const withClass = (WrappedComponent, className) => {
    // return class extends Component {
    //     render() {
    //         return (
    //             <div className={className}>
    //                 <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
    //             </div>
    //         );
    //     }
    // }

    // Or instead we can do it like this
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
                </div>
            );
        }
    };

    // forwardRef built in method from React let us expose the reserved ref property and pass it to our class
    // this let us use ref property and access to his values
    return React.forwardRef((props, ref) => {
        debugger;
        return <WithClass {...props} forwardedRef={ref}/>
    });
};


export default withClass;