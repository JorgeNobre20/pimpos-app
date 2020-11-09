import React from "react";
import { Dimensions } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { InputContainer, InputLabel, Input } from "./styles";

const { width } = Dimensions.get("window");

import { Props } from "./inputGroup";

const InputGroup: React.FC<Props> = (
	{ setValue, value, ...rest }
) => {

	function handleChangeValue(text: string){

		const trimmedText = text.trim();

		if(text && trimmedText){
			setValue(text);
		}

	}

	return (
		<InputContainer>
			<InputLabel>{rest.inputGroupLabel}</InputLabel>
			{
				rest.isMasked ? 
				(
					<TextInputMask 
						type="custom"
						options={{ 
							mask: rest.mask
						}}
						keyboardType="number-pad"
						style={maskedInputStyles}
						placeholder={rest.placeholder}
						onChangeText={handleChangeValue}
						value={value ? value : ""}
					/>
				) :
				(
					<Input
						placeholder={rest.placeholder}
						onChangeText={handleChangeValue}
						value={value ? value : ""}
					/>
				)
			}
					
		</InputContainer>
	);
}

const maskedInputStyles = { 
	width: width * 0.9,
	maxWidth: 350,
	height: 50,
	paddingHorizontal: 10,
	borderRadius: 5,
	borderWidth: 1,
	borderColor: "#DDDDDD",
	backgroundColor: "#FFFFFF"
}

export default InputGroup;