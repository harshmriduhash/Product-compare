import React from 'react';
import StyledCircles from './StyledCircles';

class ComparisonChart extends React.Component {

    render() {
        const {product, attributesList} = this.props;
        return(
            <div className="chart-column">
                <div className="chart-header chart-row-data">{product.name}</div>
                <div className={attributesList.price ? "chart-row-data" : "chart-row-data-hide"}>{product.price}</div>
                <div className={attributesList.colors ? "chart-row-data" : "chart-row-data-hide"}>
                    {product.colors.map((item) => 
                        {
                            // const name1 = "color-circle " + item;
                            return(
                                // <div className={name1}>
                                //     {/* {item} */}
                                // </div>
                                <StyledCircles color = {item}/>
                            );
                            
                        })
                    }
                </div>
                <div className={attributesList.condition ? (product.condition === "Fresh" ? "chart-row-data fresh" : "chart-row-data frozen") : "chart-row-data-hide"}>
                    {product.condition}
                </div>
                <div className={attributesList.vendors ? "chart-row-data" : "chart-row-data-hide "}>
                    {product.vendors.map((item, i) => {
                        if(i>0) {
                            return (", " + item)
                        } else {
                            return item;
                        }
                    })}
                </div>
            </div>
        );
    };
}

export default ComparisonChart;