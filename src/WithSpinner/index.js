import React, { createContext, useState } from 'react'
import Icon from "../Icons";
import './style.scss'

export default function Spinner(Component) {

	return function WithSpinner({ isLoading }) {

		const [spinner, setSpinner] = useState(true)

		return (
			<SpinnerContext.Provider value={[setSpinner]}>
				<Component />
				{ spinner && <div className="spinner">
					<div className="spinner__ico"><Icon name="spinner2" color="#cacaca" size={30}/></div>
				</div> }
			</SpinnerContext.Provider>
		)
	};
}

export const SpinnerContext = createContext(false);