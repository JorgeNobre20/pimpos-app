import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { longArrowRight, plus } from "../../utils/icons";

const { width } = Dimensions.get("window");

export const Container = styled.ScrollView.attrs(
	props => (
		{ 	
			...props, 
			showsVerticalScrollIndicator: false,
			contentContainerStyle: { 
				paddingTop: 20,
				alignItems: "center" 
			} 
		})
)`
	flex: 1;
`;

export const KidCard = styled.TouchableOpacity`
	flex-direction: row;
	height: 170px;
	width: ${width * 0.92 + "px"};
	border-radius: 5px;
	background-color: #FFFFFF;
	margin-bottom: 16px;
`;

export const KidImageContainer = styled.View`
	height: 100%;
	width: ${width * 0.9 * 0.45 + "px"};
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	background-color: #00ABF4;
	justify-content: center;
	align-items: center;
`;

export const KidImage = styled.Image`
	height: 110px;
	width: 110px;
	border-radius: 55px;
	border-width: 3px;
	border-color: #FFFFFF;
`;

export const KidStatesContainer = styled.View`
	justify-content: center;
	flex: 1;
	padding-left: 10px;
	position: relative;
`;

export const KidName = styled.Text`
	font-size: 20px;
	font-weight: 600;
	color: #606060;
	margin-vertical: 10px;
`;

export const KidStates = styled.View``;

export const KidStateContainer = styled.View`
	align-items: center;
	flex-direction: row;
	margin-vertical: 1.5px;
`;

export const KidStateIcon = styled.Image`
	margin-right: 5px;
	height: 16px;
	width: 16px;
`;

export const KidStateValue = styled.Text<{ textColor: string; }>`
	font-weight: 600;
	font-size: 18px;
	color: ${ props => props.textColor };
`;

export const ArrowRight = styled.Image.attrs({ source: longArrowRight, resizeMode: "contain" })`
	height: 18px;
	width: 20px;
	position: absolute;
	right: 16px;
	bottom: 24px;
`;

export const AddKidButton = styled.TouchableOpacity`
	height: 70px;
	width: 70px;
	position: absolute;
	border-radius: 40px;
	z-index: 3;
	background-color: red;
	right: ${ (width - width * 0.92 ) / 2 + "px" };
	bottom: 30px;
	background-color: #00ABF4;
	elevation: 1;
	justify-content: center;
	align-items: center;
`;

export const PlusIcon = styled.Image.attrs({ source: plus })`
	height: 25px;
	width: 25px;
`;