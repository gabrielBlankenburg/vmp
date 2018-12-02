/* Packages */
import React, { Component } from 'react';

/* Services */
import { ls, ss } from '../../services';

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

        this.handleChange     = this.handleChange.bind(this);
        this.toggle           = this.toggle.bind(this);
        this.topChangeData    = this.topChangeData.bind(this);
        this.middleChangeData = this.middleChangeData.bind(this);
        this.bottomChangeData = this.bottomChangeData.bind(this);

        ss.listenSocket({
            top: this.topChangeData, 
            middle: this.middleChangeData, 
            bottom: this.bottomChangeData
        });
    }

    topChangeData(data) {
        this.setState({
            top: data
        });
    }
    middleChangeData(data) {
        this.setState({
            middle: data
        });
    }
    bottomChangeData(data) {
        this.setState({
            bottom: data
        });
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
            </div>
        );
    }
};

/* Exporting */
export default List;
