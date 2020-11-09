import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export const InputContainer = styled.View`
	justify-content: center;
	width: ${ width * 0.9 + "px"};
	margin-vertical: 10px;
`;

export const InputLabel = styled.Text`
	font-size: 16px;
	color: #7B7B7B;
	margin-bottom: 5px;
`;

export const Input = styled.TextInput`
	width: ${ width * 0.9 + "px"};
	max-width: 350px;
	height: 50px;
	padding-horizontal: 10px;
	border-radius: 5px;
	border-width: 1px;
	border-color: #DDDDDD;
	background-color: #FFFFFF;
`;
