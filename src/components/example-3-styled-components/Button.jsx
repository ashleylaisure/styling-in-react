import styled from 'styled-components';

const StyledButton = styled.button`
background-color: #86ba8a;
border-radius: 8px;
color: white;
padding: 15px 50px;
font-size: 24pt;
width: 300px;`;

const Button3 = ({buttonText}) => {

    return (
        <StyledButton>{buttonText}</StyledButton>
    )
}

export default Button3;