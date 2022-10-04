import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const {total} = this.props;
        
        return (
            <div>
                Habit tracker
                Total : {total}
            </div>
        );
    }
}

export default Navbar;