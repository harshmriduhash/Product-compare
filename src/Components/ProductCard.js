import React from 'react';

class ProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            localButtonStatus: false,
            buttonName: "COMPARE"
        }
    }

    onCardFocus = (e)=> {
        // console.log("card focused!");
        this.setState({localButtonStatus: true});
        // console.log("status: ",this.state.localButtonStatus);
    }

    onCardOutOfFocus = () => {
        // console.log("card out of focus!");
        this.setState({localButtonStatus: false});
    }

    onCompareClicked = () => {
        console.log("button clicked!");
    }

    render() {
        const {id, name, description, price, image} = this.props;
        // console.log(`name: ${name} desc: ${description} price:${price}`);
        let compareModeEnabled = this.props.compareModeEnabled === "true" ? true : false;
        let isProductSelected = this.props.isSelected === "true" ? true : false;
        return(
            <div 
                className="product-card-parent" 
                onMouseEnter ={this.onCardFocus} 
                onMouseLeave={this.onCardOutOfFocus}
            >
                <div className="product-visual">
                    <img className="product-image" src={"/assets/" + image} alt={name}></img>
                    {(compareModeEnabled || !isProductSelected) ? 
                        <div className={(this.state.localButtonStatus) ? "product-tint-show" : "product-tint-hide"}>
                            <button 
                                className = {(this.state.localButtonStatus) ? "product-button-show" : "product-button-hide"}
                                onClick = {() => this.props.compareButtonClicked(id)}
                            >
                                {this.state.buttonName}
                            </button>
                        </div>
                        :
                        <div className="product-tint-show">
                            <button
                                className = {(this.state.localButtonStatus) ? "product-button-show" : "product-button-hide"}
                                onClick = {() => this.props.removeButtonClicked(id)}
                            >
                                REMOVE
                            </button>
                        </div>
                    }
                    
                </div>

                <div className="product-data">
                    <div className="product-column">
                        <div className="product-name" >{name}</div>
                        <div className="product-price">{price}</div>
                    </div>
                    <div className="product-description">{description}</div>
                </div>
                
            </div>
        );
    };
}

export default ProductCard;