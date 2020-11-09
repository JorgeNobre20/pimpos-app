import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { longArrowRight, plus } from "../../utils/icons";

const { height, width } = Dimensions.get("window");

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #FDFDFD;
`;

export const ContentContainer = styled.ScrollView`
	flex-grow: 0;
`;

export const OverlayContainer = styled.View`
	height: ${height * 0.18 + "px"};
	background-color: #00ABF4;
	justify-content: center;
	align-items: center;
`;

export const KidInfo = styled.View`
	flex: 1;
	align-items: center;
	top: ${height * 0.32 * -1 / 2 +  "px"};
`;

export const KidImage = styled.Image`
	height: ${height * 0.32 + "px"};
	width: ${height * 0.32 + "px"};
	border-width: 6px;
	border-color: #FFFFFF;
	border-radius: ${height * 0.32 / 2 + "px"};
`;

export const KidName = styled.Text`
	font-size: 24px;
	color: #606060;
	font-weight: 700;
	margin-vertical: 8px;
`;

export const KidStates = styled.View`
	justify-content: flex-start;
	flex-direction: row;
	flex-wrap: wrap;
	padding-vertical: 5px;
`;

export const MeasureDateContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 25px;
`;

export const MeasureDateLabel = styled.Text`
	font-size: 17px;
	color: #606060;
	font-weight: 600;
`;

export const MeasureDateValue = styled.Text`
	font-size: 17px;
	color: #00ABF4;
	font-weight: 600;
`;


export const ButtonGroup = styled.View`
	width: ${ width + "px" };
	margin-top: 30px;
	align-items: center;
	flex-direction: row;
	justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity<{ color: string; }>`
	width: ${ width / 2 - 10 + "px" };
	align-items: center;
	flex-direction: row;
	justify-content: center;
	height: 50px;
	margin-horizontal: 3px;
	border-radius: 5px;
	background-color: ${props => props.color};
`;

export const ButtonIcon = styled.Image`
	height: 16px;
	width: 16px;
	margin-right: 4px;
`;

export const ButtonText = styled.Text`
	font-size: 18px;
	color: #606060;
	font-weight: 700;
	color: #FFFFFF;
`;
