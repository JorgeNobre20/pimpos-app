import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, Image } from "react-native";

const { height } = Dimensions.get("window");

import KidList from "./pages/KidList";
import KidDescription from "./pages/KidDescription";
import RegisterKid from "./pages/RegisterKid";
import GoBackButton from "./components/GoBackButton";
import UpdateKid from "./pages/UpdateKid";

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<AppStack.Navigator>
				<AppStack.Screen 
					name="KidList" 
					component={KidList}
					options={{
						headerTitle: "Crianças Cadastradas",
						headerTitleStyle: { 
							alignSelf: "center", 
							color: "#FFFFFF", 
							fontWeight: "600", 
							fontSize: 20 
						},
						headerStyle: { 
							backgroundColor: "#00ABF4",
							height: height * 0.1
						}
					}}
				/>
				<AppStack.Screen 
					name="KidDescription" 
					component={KidDescription}
					options={{
						headerTitle: "Dados da Criança",
						headerTitleStyle: { 
							color: "#FFFFFF", 
							fontWeight: "600", 
							fontSize: 20,
							marginLeft: 30
						},
						headerStyle: { 
							backgroundColor: "#00ABF4",
							height: height * 0.1,
							elevation: 0
						},
						headerLeft: () => <GoBackButton />
					}}
				/>
				<AppStack.Screen 
					name="RegisterKid" 
					component={RegisterKid}
					options={{
						headerTitle: "Cadastrar Criança",
						headerTitleStyle: { 
							color: "#FFFFFF", 
							fontWeight: "600", 
							fontSize: 20,
							marginLeft: 30
						},
						headerStyle: { 
							backgroundColor: "#00ABF4",
							height: height * 0.1,
							elevation: 0
						},
						headerLeft: () => <GoBackButton />
					}}
				/>
				<AppStack.Screen 
					name="UpdatedKid" 
					component={UpdateKid}
					options={{
						headerTitle: "Atualizar Dados",
						headerTitleStyle: { 
							color: "#FFFFFF", 
							fontWeight: "600", 
							fontSize: 20,
							marginLeft: 30
						},
						headerStyle: { 
							backgroundColor: "#00ABF4",
							height: height * 0.1,
							elevation: 0
						},
						headerLeft: () => <GoBackButton />
					}}
				/>
			</AppStack.Navigator>
		</NavigationContainer>
	);
}

export default Routes;