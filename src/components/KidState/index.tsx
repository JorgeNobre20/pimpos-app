import React from "react";

import { 
	KidStateContainer,
	KidStateLabel,
	KidStateLabelText,
	KidStateIcon,
	KidStateValue,
	KidStateDescription
} from "./styles";

import { arrowLeft, hourglass } from "../../utils/icons";

import { Props } from "./kidState";

const KidState: React.FC<Props> = (props) => {

	return (
		<KidStateContainer color={props.color}>
			<KidStateLabel>
				<KidStateIcon resizeMode="contain" source={props.icon} />
				<KidStateLabelText>{props.label}</KidStateLabelText>
			</KidStateLabel>

			<KidStateValue>{props.value}</KidStateValue>
			<KidStateDescription>{props.unity}</KidStateDescription>
		</KidStateContainer>
	);
}

export default KidState;