import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as Yup from "yup";

import { 
	KidCardContainer,
	KidImageContainer,
	KidImage,
	KidStatesContainer,
	KidName,
	KidStates,
	KidStateContainer,
	KidStateIcon,
	KidStateValue,
	ArrowRight
} from "./styles";

import { coloredHourglass, coloredWeight, coloredRule } from "../../utils/icons";

import profile01 from "../../assets/images/profile-01.png";
import profile02 from "../../assets/images/profile-02.png";

import { Props } from "./KidCard";

const KidCard: React.FC<Props> = ({ kid }) => {

	const navigation = useNavigation();

	function handleNavigateToKidDescription(){
		navigation.navigate("KidDescription", { ...kid });
	}

	return (
		<KidCardContainer
			onPress={handleNavigateToKidDescription}
		>

			<KidImageContainer>
				<KidImage 
					source={kid.avatar === 1 ? profile01 : profile02} 
				/>
			</KidImageContainer>

			<KidStatesContainer>

					<KidName>{kid.name}</KidName>

				<KidStates>

					<KidStateContainer>
						<KidStateIcon source={coloredHourglass} />
						<KidStateValue textColor="#F9C200">{kid.age}</KidStateValue>
					</KidStateContainer>

					<KidStateContainer>
						<KidStateIcon source={coloredWeight} />
						<KidStateValue textColor="#00E75C">{kid.weight}g</KidStateValue>
					</KidStateContainer>

					<KidStateContainer>
						<KidStateIcon source={coloredRule} />
						<KidStateValue textColor="#AB00E7">{kid.height}cm</KidStateValue>
					</KidStateContainer>

				</KidStates>

				<ArrowRight />

			</KidStatesContainer>

		</KidCardContainer>

	);
}

export default KidCard;