/* Packages */
import React, { Component } from 'react';
import Cam from 'react-camera';

/* Component */
class Camera extends Component {
    constructor(props) {
        super(props);

        this.props  = props;
        this.camera = React.createRef();

        this.takePicture = this.takePicture.bind(this);
    }

    takePicture() {
        this.camera.capture()
        .then(blob => {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function() {
                var base64data = reader.result;
                console.log(base64data);
            }
        });
    }

    render() {
        const { children } = this.props;

        return (
            <div className="camera">
                <div className="camera__overlay"></div>
                <Cam ref={(cam) => { this.camera = cam; }}>
                    <div className="camera__content">
                        {children}
                    </div>
                </Cam>
            </div>
        );
    }
};

/* Exporting */
export default Camera;
