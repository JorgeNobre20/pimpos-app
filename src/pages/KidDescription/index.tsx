import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";

import { 
	Container, 
	ContentContainer,
	OverlayContainer,
	KidInfo,
	KidImage,
	KidName,
	KidStates,
	MeasureDateContainer,
	MeasureDateLabel,
	MeasureDateValue,
	ButtonGroup,
	Button,
	ButtonIcon,
	ButtonText
} from "./styles";

import { hourglass, weight, rule, brain, size, trash, pencil } from "../../utils/icons";
import profile01 from "../../assets/images/profile-01.png";
import profile02 from "../../assets/images/profile-02.png";

import KidState from "../../components/KidState";
import { Kid } from "../../components/KidCard/KidCard";

import api from "../../services/api";

const KidDescription: React.FC = () => {
	
	const navigation = useNavigation();

	const route = useRoute();
	const kidData = route.params as Kid;

	const splitedAge = kidData.age.split(" ");
	const lastMeasureDate = new Date(kidData.updated_at);
	const formattedLastMeasureDate = format(lastMeasureDate, "yyyy/MM/dd");
	const splittedDate = formattedLastMeasureDate.split("/");
	const formattedLocalDate = splittedDate[2] + "/" + splittedDate[1] + "/" + splittedDate[0];

	async function handleDeleteKid(id: number){
		await api.delete(`kids/${id}`);
		navigation.navigate("KidList");
	}

	function handleUpdateKid(){
		navigation.navigate("UpdatedKid", { ...kidData });
	}


	return (
		<>
			<Container>
				<ContentContainer 
					showsVerticalScrollIndicator={false}
				>
					<OverlayContainer/>

					<KidInfo>

						<KidImage source={kidData.avatar === 1 ? profile01 : profile02}/>
						<KidName>{kidData.name}</KidName>

						<KidStates>
							<KidState 
								label="idade"
								icon={hourglass}
								color="#F9C200"
								unity={splitedAge[1]}
								value={splitedAge[0]}
							/>

							<KidState 
								label="Peso"
								icon={weight}
								color="#00E75C"
								unity="gramas"
								value={String(kidData.weight)}
							/>

							<KidState 
								label="Altura"
								icon={rule}
								color="#AB00E7"
								unity="Centímetros"
								value={String(kidData.height)}
							/>

							<KidState 
								label="PC"
								icon={brain}
								color="#F400F9"
								unity="Centímetros"
								value={String(kidData.cephalic_perimeter)}
							/>

							<KidState 
								label="IMC"
								icon={size}
								color="#F9002D"
								unity="Kg/m2"
								value={String(kidData.imc.toFixed(2))}
							/>


						</KidStates>

						<MeasureDateContainer>
							<MeasureDateLabel>Data da Medida: {" "}</MeasureDateLabel>
							<MeasureDateValue>{formattedLocalDate}</MeasureDateValue>
						</MeasureDateContainer>

						<ButtonGroup>
							<Button 
								color="#00B2FE"
								onPress={() => handleUpdateKid()}
							>
								<ButtonIcon source={pencil} resizeMode="contain" />
								<ButtonText>Atualizar</ButtonText>
							</Button>

							<Button 
								color="#FF0000"
								onPress={() => handleDeleteKid(kidData.id)}
							>
								<ButtonIcon source={trash} resizeMode="contain" />
								<ButtonText>Deletar</ButtonText>
							</Button>
						</ButtonGroup>

					</KidInfo>

				</ContentContainer>
			</Container>
		</>
			
	);
}

export default KidDescription;

