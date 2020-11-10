import React, { createContext, useState, useEffect, useCallback } from 'react'
import Icon from "../Icons";
import './style.scss'
import Colors from '../Colors/index.json'

import Img from '../Image'

export default function Lightbox (Component) {

	return function WithLightbox({ isLoading }) {
		
		const [toggle, setToggle] = useState(false);
		const [images, setImages] = useState([]);
		const [currentImage, setCurrentImage] = useState(0);
		const [href, setHref] = useState('')


		const pickImage = useCallback((idx) => {

			if (idx < 0) idx = images.length-1;
			else if (idx > images.length-1) idx = 0;

			setCurrentImage(idx)
			setHref(images[idx].href)

		}, [images])

		useEffect(() => {

			if (images.length) {

				pickImage(0);
				setHref(images[0].href)
				setToggle(true);
			}

		}, [images, pickImage])

		useEffect(() => {
			
			setHref('')

		}, [setToggle])


		const renderBullets = () => {

			if (images.length === 1) return;

			return images.map((image, i) => 
				<div className="bullet" key={image.href} onClick={ () => pickImage(i) }>
					<Icon name={currentImage === i ? 'lens' : 'panorama_fisheye'} color={Colors.white} size={50} isHover/> 
				</div>)
		}

		return (
			<LightboxContext.Provider value={[setImages]}>
				<Component />
				<div className="lightbox" style={{display: toggle ? 'flex' : 'none'}}>
					<div className="lightbox__close"></div>
					<div 
						className="lightbox__clear" 							
						onClick={() => {
							setToggle(false)
							setImages([])
						}}
					>	
						<Icon name={'clear'} 
							color={Colors.white}
							size={40}
							isHover 							
						/>
					</div>
					<div className="lightbox__wrap">
						{
							images.length === 1 
							? null
							: 
								<Icon name={'keyboard_arrow_left'} 
								color={Colors.white}
								size={60}
								isHover
								handleClick={ () => pickImage(currentImage - 1)} 
								/>
						}
						<div className="lightbox__image-container">
							{href && <Img href={href} />}
							<div className="lightbox__controls">
								{ renderBullets() }
							</div>
						</div>
						{
							images.length === 1 
								? null
								: <Icon name={'keyboard_arrow_right'} 
									color={Colors.white}
									size={60} 
									isHover
									handleClick={ () => pickImage(currentImage + 1)} 
								  />							
						}
					</div>
				</div> 
			</LightboxContext.Provider>
		)
	};
}

export const LightboxContext = createContext([]);