/* Packages */
import React, { Component } from 'react';

/* Sub Components */
import { Background, Camera, List, Microphone } from './components';

/* Component */
class App extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            micData: null,
        };

        this.timer = null;
        this.onMic = this.onMic.bind(this);
    }

    /**
     * onMic
     */
    onMic(data) {
        if (this.timer) {
            return;
        }

        this.timer = setTimeout(() => {
            this.setState({
                micData: data,
            }, () => {
                this.timer = null;
            });
        }, 2000);
    }

    render() {
        return (
            <Background>
                <Camera>
                    <List />
                    <Microphone audioBitsPerSecond={32000} />
                </Camera>
            </Background>
        );
    }
}

export default App;
