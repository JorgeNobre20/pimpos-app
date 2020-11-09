import React,{ useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

import { 
	Container, 
	ContentContainer, 
	OverlayContainer,
	KidForm,
	KidImage,
	ProfileLabel,
	ProfileImagesOptions,
	ProfileImageOption,
	ProfileImageOptionContainer,
	ConfirmButton,
	ConfirmButtonText
} from "./styles";

import profile01 from "../../assets/images/profile-01.png";
import profile02 from "../../assets/images/profile-02.png";

import InputGroup from "../../components/InputGroup";

import api from "../../services/api";
import Schema from "../../validation/kid.schema";

const RegisterKid: React.FC = () => {

	const navigation = useNavigation();

	const [selectedImage,setSelectedImage] = useState<Number>(1);
	const [name,setName] = useState<string>("");
	const [age,setAge] = useState<string>("");
	const [weight,setWeight] = useState<string | null>(null);
	const [height,setHeight] = useState<string | null>(null);
	const [cephalicPerimeter,setCephalicPerimeter] = useState<string | null>(null);

	async function handleRegisterKid(){

		let data = {
			avatar : selectedImage,
			name,
			age,
			weight: Number(weight),
			height: Number(height),
			cephalic_perimeter: Number(cephalicPerimeter),
			created_at: new Date(),
			updated_at:	new Date()
		};
		
		Schema.validate(
			data, 
			{ 
				abortEarly: false 
			}
		)
		.then((value) => {
			if(value){
				const imc = value.weight / Math.pow(value.height,2);
				api.post("kids",{ ...data, imc });
				navigation.navigate("KidList");
			}
		})
		.catch((err) => {
			alert(err.errors[0]);
		})
		

	}

	return (
		<Container>
			<ContentContainer>
				<OverlayContainer />

				<KidForm>
					<KidImage source={ selectedImage === 1 ? profile01 : profile02} />
					<ProfileLabel>Imagem de Perfil</ProfileLabel>
					<ProfileImagesOptions>

						<ProfileImageOptionContainer 
							onPress={() => setSelectedImage(1)}
						>
							<ProfileImageOption 
								isSelected={ selectedImage === 1 ? true : false }
								source={profile01} 
							/>
						</ProfileImageOptionContainer>

						<ProfileImageOptionContainer 
							onPress={() => setSelectedImage(2)}
						>	
							<ProfileImageOption 
								isSelected={ selectedImage === 2 ? true : false }
								source={profile02} 
							/>
						</ProfileImageOptionContainer>

					</ProfileImagesOptions>

					<InputGroup 
						inputGroupLabel="Nome"
						placeholder="Ex.: Maria Clara"
						isMasked={false}
						setValue={setName}
						value={name}
					/>

					<InputGroup 
						inputGroupLabel="Idade (por extenso):"
						placeholder="Ex.: 3 meses"
						isMasked={false}
						setValue={setAge}
						value={age}
					/>

					<InputGroup 
						inputGroupLabel="Peso (em gramas):"
						placeholder="Ex.: 10.000"
						isMasked={true}
						mask="99.999"
						setValue={setWeight}
						value={weight}
					/>

					<InputGroup 
						inputGroupLabel="Altura (em centímetros):"
						placeholder="Ex.: 1.00"
						isMasked={true}
						mask="9.99"
						setValue={setHeight}
						value={height}
					/>

					<InputGroup 
						inputGroupLabel="Perímetro Cefálico (em centímetros):"
						placeholder="Ex.: 0.43"
						isMasked={true}
						mask="9.99"
						setValue={setCephalicPerimeter}
						value={cephalicPerimeter}
					/>


					<ConfirmButton
						onPress={handleRegisterKid}
					>
						<ConfirmButtonText>Cadastrar</ConfirmButtonText>
					</ConfirmButton>

				</KidForm>

			</ContentContainer>
		</Container>
	);
}

export default RegisterKid;