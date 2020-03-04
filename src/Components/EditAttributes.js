import React from 'react';

class EditAttributes extends React.Component {

    render() {
        const attributesList = this.props.attributesList;
        return(
            <div className="edit-attributes-parent">
                {this.props.children}
                <div className="edit-attributes-row edit-attributes-header">
                    Edit Attributes
                </div>
                <div className="edit-attributes-row edit-attributes-search">
                    Search Attributes
                </div>
                {Object.keys(attributesList).map(item => {
                        return(
                            <div className="edit-attributes-row edit-attributes-list-item">
                                <button 
                                    className={attributesList[item] ? "checkbox checkbox-selected" : "checkbox checkbox-deselected"}
                                    onClick = {() => this.props.toggleAttribute(item)}
                                >
                                </button>
                                {item}
                            </div>
                        );
                    }) 
                }

                <button 
                    className="edit-attributes-row edit-attributes-apply"
                    onClick = {this.props.applyChange}    
                >
                    APPLY
                </button>
            </div>
        );
    }
}

export default EditAttributes;