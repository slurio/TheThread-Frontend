import React from 'react';
import styled from 'styled-components';

function OpenScreen({navigation}) {  
    return(
        <StyledView>
            <LogoContainer>
                <LogoImage source={require('../assets/whitethreadlogo.png')}/> 
                <Logo>THE THREAD</Logo>
            </LogoContainer>
            <LogInButton onPress={()=> navigation.navigate('SignInScreen')}>
                <LogInText>LOGIN</LogInText>
            </LogInButton>
            <SignUpButton onPress={()=> navigation.navigate('SignupScreen')}>
                <SignUpText>SIGN UP</SignUpText>
            </SignUpButton>
        </StyledView>
    )
}

export default OpenScreen;

const StyledView = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  resizeMode: stretch;
  background-color: #222;
` 

const LogoContainer = styled.View`
    align-items: center;
`

const LogoImage = styled.Image`
    width: 130px;
    height: 130px;
    margin-bottom: 15px;
`

const Logo = styled.Text`
    color: #fff;
    font-size: 44px;
    font-weight: 500;
    margin-bottom: 30px;
`

const LogInButton = styled.TouchableOpacity`
    width: 160px;
    height: 45px;
    align-items: center;
    justify-content: center;
    background-color:#fff;
    border-radius: 10px;
    margin-bottom: 20px;
`
const LogInText = styled.Text`
    color: #222;
    font-weight: bold;
    font-size: 17px;
    font-family: Raleway_700Bold;
    letter-spacing: 2px;
`

const SignUpButton = styled(LogInButton)`
    border: 2px solid #fff;
    color: #fff;
    background-color: transparent;
`

const SignUpText = styled(LogInText)`
    color: #fff;
`

