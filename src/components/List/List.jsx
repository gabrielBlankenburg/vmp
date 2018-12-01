/* Packages */
import React, { Component } from 'react';

/* Services */
import { ls } from '../../services';

/* Components */
import { Item } from '../';

/* Component it self */
class List extends Component {
    /**
     * Constructor
     *
     * @param {object} props - React Component inherit props
     */
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            active: false,
            top   : ls.get('top'),
            middle: ls.get('middle'),
            bottom: ls.get('bottom'),
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggle       = this.toggle.bind(this);
    }

    componentWillMount() {
        const { top, middle, bottom } = this.state;

        if (!top && !middle && !bottom) {
            this.toggle();
        }
    }

    handleChange(evt) {
        const { target }      = evt;
        const { name, value } = target;

        this.setState({
            [name]: value,
        }, () => {
            ls.set(name, value);
        });
    }

    toggle() {
        this.setState({
            active: !this.state.active,
        });
    }

    /* Render */
    render() {
        const { active, top, middle, bottom } = this.state;
        const concatPlus = '<div class="item__concat">+</div>';
        const concatAnd = '<div class="item__concat">&</div>';

        return (
            <div className="list">
                <div className="list__outdoor">
                    <Item preTitle={top} subTitle={bottom}>
                        <div dangerouslySetInnerHTML={{ __html: middle ? middle.replace(/\r?\n/, '<br />').replace('&', concatAnd).replace('+', concatPlus) : middle }} />
                    </Item>
                </div>
                <div className={`list__panel ${active ? 'active' : ''}`}>
                    <div className="list__item">
                        <div> FILL to SCREEN </div>
                        <div>
                            <input className="list__item__control"
                                   placeholder="top text"
                                   type="text"
                                   name="top"
                                   value={top}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <textarea className="list__item__control"
                                      placeholder="middle text"
                                      name="middle"
                                      value={middle}
                                      onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <input className="list__item__control"
                                   placeholder="bottom text"
                                   type="text"
                                   name="bottom"
                                   value={bottom}
                                   onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <button className="list__toggle"
                        type="button"
                        onClick={this.toggle}>
                    {active ? 'CLOSE' : 'EDIT'}
                </button>
            </div>
        );
    }
};

/* Exporting */
export default List;
