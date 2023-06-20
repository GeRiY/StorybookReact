export interface FormTypes {
	formData: FormDataType;
	children?: any;
	onChange: (formData) => void;
}

export interface FormDataType {
	[name: string]: any | null;
}