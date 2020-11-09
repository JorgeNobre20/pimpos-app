import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { longArrowRight, plus } from "../../utils/icons";

const { height, width } = Dimensions.get("window");

export const KidStateContainer = styled.View<{ color: string }>`
	width: ${ width / 3 - 10 + "px" };
	height: ${ width / 3 - 10 + "px" };
	border-radius: 5px;
	background-color: ${ props => props.color };
	margin-horizontal: 5px;
	margin-bottom: 10px;
	align-items: center;
	justify-content: center;
`;

export const KidStateLabel = styled.View`
	flex-direction: row;
	align-items: center;
	width: ${ width / 3 - 10 + "px" };
	justify-content: flex-start;
	padding-left: 8px;
`;

export const KidStateLabelText = styled.Text`
	font-size: 18px;
	color: white;
	font-weight: 500;
`;

export const KidStateIcon = styled.Image`
	height: 13px;
	width: 13px;
	margin-right: 3px;
`;

export const KidStateValue = styled.Text`
	font-size: 30px;
	font-weight: 700;
	color: white;
`;

export const KidStateDescription = styled.Text`
	font-size: 18px;
	font-weight: 500;
	color: white;
	text-transform: capitalize;
`;
