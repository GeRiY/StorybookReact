export interface FormLayoutTypes {
	classes?: string,
	formData?: object,
	children?: any,
	borderColor?: string,
	onChange?: (FormDataType) => void,
	width?: string
}
export interface StyleTypes {
	borderColor?: string;
	border?: string;
	width?: string;
}

export interface FormDataType {
	name: string,
	value: any
}