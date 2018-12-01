/* Packages */
import React, { Component } from 'react';

/* Component */
class Item extends Component {
    render () {
        const {
            preTitle,
            subTitle,
            children,
        } = this.props;

        return (
            <div className="item">
                {preTitle && (
                    <div className="item__secondary">
                        {preTitle}
                    </div>
                )}
                <div className="item__primary">
                    {children}
                </div>
                {subTitle && (
                    <div className="item__secondary">
                        {subTitle}
                    </div>
                )}
            </div>
        );
    }
};

/* Exporting */
export default Item;
