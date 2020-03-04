import React from 'react';

class Attributes extends React.Component {

    render() {
        const attributes = this.props.attributesList;
        return(
            <div className="chart-column">
                <div className="chart-header chart-row-data">
                    Attributes
                    <button 
                        className="edit-rows-button" 
                        onClick={this.props.editAttributesListClicked}
                    >
                        Edit
                    </button>
                </div>
                {Object.keys(attributes).map((key) => 
                    {
                        if(attributes[key] === true) {
                            return (
                                <div className="chart-row-attributes chart-row-data">
                                    {key}
                                </div>
                            );
                        }else {
                            return null;
                        }
                    })
                }
            </div>
        );
    };
}

export default Attributes;