import styled from 'styled-components';
import React from 'react';

const StyledModal = styled.div`
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: ${props => (props.show === "true" ? "flex" : "none")};
    justify-content: center;
    align-items: center;
`;

class Modal extends React.Component {

    render() {
        return(
            <div>
                <StyledModal show={this.props.show}>

                    {this.props.children}

                </StyledModal>
            </div>
        );
    }
}

export {Modal, StyledModal};