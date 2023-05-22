import {Link} from 'react-router-dom';
import {AppShell, Burger, Group, Box, Button} from '@mantine/core';
import {MantineLogo} from '@mantinex/mantine-logo';
import PropTypes from 'prop-types';
import {useState} from "react";

const buttonData = [
	{tag: 'Experience', link: '/experience/'},
	{tag: 'Education', link: '/education/'},
	{tag: 'Projects', link: '/projects/'},
	{tag: 'Skills', link: '/skills/'},
	{tag: 'Publications', link: '/publications/'},
];

const NavbarOptions = () => {
	const [activeButtonIndex, setActiveButtonIndex] = useState(null);

	const renderButton = (item, index) => (
		<Link
			to={item.link}
			key={item.tag}
		>
			<Button
				variant={index === activeButtonIndex ? 'primary' : 'subtle'}
				onClick={() => setActiveButtonIndex(index)}
			>
				{item.tag}
			</Button>
		</Link>
	);

	return (
		<>
			{buttonData.map(renderButton)}
		</>
	);
}
const DesktopNavbarOptions = () => {
	return (
		<Group gap='xs' visibleFrom='sm' justify='center'>
			<NavbarOptions/>
		</Group>
	);
}

// TODO - button position center
const MobileNavbarOptions = () => {
	return (
		<AppShell.Navbar py='md' px={4}>
			<NavbarOptions/>
		</AppShell.Navbar>
	);
}

const Header = ({opened, toggle}) => {
	return (
		<>
			<AppShell.Header color='#000000'>
				<Box p='sm' styles={[]}>
					<Group h='100%' px='md'>
						<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm'/>
						<Group justify='space-between' style={{flex: 1}}>
							<Link to={'/'}>
								<MantineLogo size={30}/>
							</Link>
							<DesktopNavbarOptions/>
						</Group>
					</Group>
				</Box>
			</AppShell.Header>
			<MobileNavbarOptions/>
		</>
	);
}

Header.propTypes = {
	opened: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
};

export default Header;