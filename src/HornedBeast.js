import React from 'react';

class HornedBeast extends React.Component {
    render(){
        console.log(this.props);
        return(
            <>
                <article>
                    <h2>{this.props.name}</h2>
                    <img src={this.props.image_url} alt={this.props.description} title={this.props.title}/>
                </article>
            </>
        )
    }
}
export default HornedBeast;