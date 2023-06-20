import './button.scss';
import { ButtonProps } from "./interface";

export interface ButtonStyle {
	width?: number | string;
}
export default function Button(props: ButtonProps) {
	function onButtonClick() {
		if (props.onClick) props.onClick();
	}
	const style: ButtonStyle = {};
	if (props.width) {
		style.width = props.width;
	}
	const classNames = ['btn'];
	if (props.className) classNames.push(props.className);
	if (props.inverse) classNames.push('inverse');
	return (
		<div className={classNames.join(' ')} style={style} onClick={onButtonClick}>
			<span>{props.children}</span>
		</div>
	);
}