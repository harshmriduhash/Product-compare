import styled from 'styled-components';

const StyledCircles = styled.div`
    height: 16px;
    width: 16px;
    border-radius: 8px;
    margin-left: 5px;
    background-color: ${props => 
        (props.color === "green" ? "green" : (props.color === "red" ? "red" : "skyblue"))};
`

export default StyledCircles;