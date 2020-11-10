import React, { useState, useRef, useEffect } from 'react'
import './style.scss'
import PropTypes from 'prop-types';

Img.propTypes = {

	href: PropTypes.string.isRequired,
	handleClick: PropTypes.func,
	isHovered: PropTypes.bool
};

export default function Img(props) {

	const { href, handleClick, isHovered } = props;
	const [ fadeIn, setFadeIn] = useState('image');

	const imgRef = useRef(null);

	useEffect(() => {

		imgRef.current.style.backgroundImage = '';

		const imgObj = new Image();
		imgObj.src = href;

		if (!imgObj.complete){
			setFadeIn('image');
			imgObj.onload = (cb) => {
				imgRef.current.style.backgroundImage = `url(${href})`;
				setFadeIn('image image--loaded');
			}			
		} 
		else imgRef.current.style.backgroundImage = `url(${href})`;
		
	}, [href])

	return (
		<div 
			className={`${fadeIn} ${isHovered && 'hover'}`} 
			ref={imgRef} 
			onClick={() => handleClick && handleClick()}
		>
		</div>
	)
}