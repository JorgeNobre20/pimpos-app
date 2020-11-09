import React, { useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Container, AddKidButton, PlusIcon } from "./styles";

import KidCard from "../../components/KidCard";
import { KidData } from "./kid";

import api from "../../services/api";

const KidList: React.FC = () => {

	const navigation = useNavigation();

	const [kids,setKids] = useState<KidData[]>([]);

	async function loadData() {
		const response = await api.get("kids");
		setKids(response.data);
	}

	useFocusEffect(() => {
		loadData();
	});

	useEffect(() => {
		loadData();
	}, []);

	function handleRegisterKid(){
		navigation.navigate("RegisterKid");
	}

	return (
		<>
			<Container>
				{
					kids.map((kid,index) => (
						<KidCard
							key={index} 
							kid={kid}
						/>
					))
				}
				
			</Container>

			<AddKidButton onPress={handleRegisterKid} >
				<PlusIcon />
			</AddKidButton>
		</>
			
	);
}

export default KidList;

