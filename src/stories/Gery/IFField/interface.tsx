export interface IFFieldProps {
	name?: string;
	value?: string;
	label?: string;
	width?: string;
	onChange?: (onChangeProps) => void;
}

export interface OnChangeProps {
	name: string;
	value: string;
}