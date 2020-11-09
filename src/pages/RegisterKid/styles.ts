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

export const KidForm = styled.View`
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

export const ProfileLabel = styled.Text`
	font-size: 20px;
	color: #7B7B7B;
	font-weight: 500;
	margin-vertical: 5px;
`;

export const ProfileImagesOptions = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-vertical: 10px;
`;

export const ProfileImageOptionContainer = styled.TouchableOpacity``;

export const ProfileImageOption = styled.Image<{ isSelected?: boolean }>`
	height: 90px;
	width: 90px;
	margin-horizontal: 8px;
	border-radius: ${ 90 / 2 + "px" };
	border-width: 4px;
	border-color: ${ props => props.isSelected ? "#00B2FE" : "#E0E0E0" };
	opacity: ${ props => props.isSelected ? 1 : 0.5 };
`;

export const ConfirmButton = styled.TouchableOpacity`
	width: ${ width / 2 + "px" };
	align-items: center;
	flex-direction: row;
	justify-content: center;
	height: 50px;
	margin-horizontal: 3px;
	border-radius: 5px;
	background-color: #00E75C;
	margin-top: 30px;
`;

export const ConfirmButtonText = styled.Text`
	font-size: 20px;
	color: #606060;
	font-weight: 700;
	color: #FFFFFF;
`;
