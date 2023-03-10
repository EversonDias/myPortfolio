import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Switch from 'react-switch';
import ThemeContext from '../../context/theme/Context';
import dark from '../../style/theme/dark';
import light from '../../style/theme/light';

export default function NavBar() {
	const {type, toggleTheme} = useContext(ThemeContext);
	return (
		<nav>
			<Link to='/projects'>Projetos</Link>
			<Link to='/about'>Sobre</Link>
			<Switch
				data-testid='toggle-theme'
				onChange={toggleTheme}
				checked={type}
				checkedIcon
				uncheckedIcon
				height={10}
				width={40}
				handleDiameter={20}
				offColor={dark.color.emphasis}
				onColor={light.color.emphasis}
			/>
		</nav>
	);
}
