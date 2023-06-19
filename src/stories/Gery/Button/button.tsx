import './button.scss';

export default function Button(props: ButtonProps) {
	function onButtonClick() {
		if (props.onClick) props.onClick();
	}
	const style: ButtonStyle = {};
	if (props.width) {
		style.width = props.width;
	}
	const classNames = ['Button'];
	if (props.className) classNames.push(props.className);
	if (props.inverse) classNames.push('inverse');
	return (
		<div className={classNames.join(' ')} style={style} onClick={onButtonClick}>
			{props.text || props.children}
		</div>
	);
}

interface ButtonStyle {
	width?: number | string;
}

interface ButtonProps {
	text?: string;
	onClick?: Function;
	width?: number | string;
	className?: string;
	inverse?: boolean;
	children?: any;
}
