export type Props = {
	isMasked?: boolean;
	inputGroupLabel: string;
	mask?: string;
	placeholder: string;
	setValue: (value: string) => void;
	value: string | null;
}