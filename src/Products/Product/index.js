import React, { useContext } from 'react'
import './style.scss'
import Icon from "../../Icons";
import { LightboxContext } from '../../Lightbox'
import Img from '../../Image'
import PropTypes from 'prop-types';

Product.propTypes = {

	name: PropTypes.string.isRequired,
	thumbnail: PropTypes.object.isRequired,
	images: PropTypes.array.isRequired,
	price: PropTypes.object,
	priceRange: PropTypes.object,
	reviews: PropTypes.object.isRequired
};

export default function Product({...props}) {

	const [setImages] = useContext(LightboxContext);
	const {thumbnail, images, name, price, priceRange, reviews} = props;

	const renderPrice = price => {

		const { regular, selling, type } = price;

		return (

			<div className="card__price">
				{ selling && selling === regular 
					? <span>${ regular }</span>
					: <div>
						<span>{ type ? type : 'sale' }: ${ selling } </span>
						<span>
							<strike>${ regular }</strike>
						</span>
					  </div>
				}
			</div>
		)
	}

	const renderPriceRange = price => {

		const { regular, selling } = price;

		return (

			<div className="card__price">
				{ regular && <div>
						<div>
							<span>${ regular.low } - ${ regular.high }</span>
						</div> 
					</div>
				}
				{ selling && <div className="card__price--selling">
						<div>
							<span>sale: ${ selling.low } - ${ selling.high }</span>
						</div> 
					</div>
				}
			</div>
		)
	};

	return (
		<div className="card">
				
				<Img 
					href={thumbnail.href}
					handleClick={() => setImages(images)}
					isHovered
				/>			
				<h1 className="card__header">{name.replace('&amp;', '&')}</h1>
				{ 
					price ? 
					renderPrice(price) : 
					renderPriceRange(priceRange) 
				}
				<div className="reviews">
					<div className="reviews__item">
						<Icon name="thumb_up_alt" color="#cacaca" size={24} />
						<div className="reviews__count">{ reviews.likelihood }</div>
					</div>
					<div className="reviews__item">
						<Icon name="how_to_reg" color="#cacaca" size={24} />
						<div className="reviews__count">{ reviews.recommendationCount }</div>
					</div>
					<div className="reviews__item">
						<Icon name="announcement" color="#cacaca" size={24} />
						<div className="reviews__count">{ reviews.reviewCount }</div>
					</div>
				</div>
		</div>
	)
}