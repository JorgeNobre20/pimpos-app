import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button, Icon } from "./styles";

import { arrowLeft } from "../../utils/icons";

const GoBackButton: React.FC = () => {

	const navigation = useNavigation();

	function handleNavigateGoBack(){
		navigation.goBack();
	}

	return (
		<Button onPress={handleNavigateGoBack}>
			<Icon source={arrowLeft} resizeMode="contain" />
		</Button>
	);
}

export default GoBackButton;