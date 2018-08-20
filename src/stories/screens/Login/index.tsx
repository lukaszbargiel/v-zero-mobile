import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Button, Text, View, Footer } from "native-base";
import { images } from "./assets"
import { Dimensions } from "react-native";

//import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
}
export interface State {}

const deviceWidth = Dimensions.get("window").width;
const imageHeight = deviceWidth * 0.86;
class Login extends React.Component<Props, State> {
	
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
                	<Image source={images['logo']} style={{width: deviceWidth, height: imageHeight, flex: 1}} /> 

						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Copyright 2018 Vimanet </Text>
						</View>						
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Login;
