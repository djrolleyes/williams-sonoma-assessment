import React from "react";
import Icons from "./sprite.svg";
import PropTypes from 'prop-types';

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number
};

export default function Icon ({ name, color, size, handleClick, isHover }) {

	return (
		<svg className={`icon icon-${name}${isHover ? ' hover' : ''}`} fill={color} width={size} height={size} onClick={() => handleClick && handleClick()}>
			<use xlinkHref={`${Icons}#icon-${name}`} />
		</svg>
	)
}