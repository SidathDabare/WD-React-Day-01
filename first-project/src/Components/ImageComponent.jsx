import React from 'react'
class ImageComponent extends React.Component {

    render() {
        return (<img className='image' src={this.props.src} alt={this.props.alt} />);
    }

}
export default ImageComponent