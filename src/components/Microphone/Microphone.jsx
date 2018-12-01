/* Packages */
import React, { Component } from 'react';
import { ReactMicPlus } from 'react-mic-plus';

/* Component it self */
class Microphone extends Component {
    /**
     * Constructor
     *
     * @param {object} props - React Component inherit props
     */
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            color     : 'rgba(255, 255, 255, 1)',
            background: 'transparent',
            recording : false,
            width     : window.innerWidth,
            height    : window.innerHeight,
        };

        this.handleResize  = this.handleResize.bind(this);
        this.onReceiveData = this.onReceiveData.bind(this);
    }

    /**
     * Will Mount
     */
    componentWillMount() {
        window.addEventListener('resize', this.handleResize);
    }

    /**
     * Will Unmount
     */
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    /**
     * Did Mount
     */
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                recording: true,
            });
        }, 1000);
    }

    /**
     * On record data
     */
    onReceiveData(recordedBlob) {
        if (this.props.onData) {
            this.props.onData(recordedBlob);
        }
    }

    /**
     * Handle with window resize
     */
    handleResize() {
        this.setState({
            width : window.innerWidth,
            height: window.innerHeight,
        });
    }

    /* Render */
    render() {
        const {
            background,
            color,
            recording,
            width,
            height
        } = this.state;

        return (
            <div className="microphone">
                <ReactMicPlus
                    record={recording}
                    width={width}
                    height={height}
                    strokeColor={color}
                    duration={5}
                    onData={this.onReceiveData}
                    backgroundColor={background}
                    className="microphone"
                />
            </div>
        );
    }
};

/* Exporting */
export default Microphone;
