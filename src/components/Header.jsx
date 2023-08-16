import {Link} from 'react-router-dom';
import {AppShell, Burger, Group, Box, Button, Image, Title} from '@mantine/core';
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
			<Button size={'compact-md'} p={0}
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
					<Group h='100%' px='sm'>
						<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm'/>
						<Group justify='space-between' style={{flex: 1}}>
							<Link to={'/'} style={{ textDecoration: 'none' }}>
								<Group>
								<Image
									h={{base: 35, md: 45, lg: 55}} radius={'md'}
									src={'../../public/Mehedi.jpg'}
								/>
									<Title
										order={3}
										tt="uppercase"
										c={'blue'}
										style={{ fontFamily: 'Chakra Petch'}}
									>
										Md. Mehedi Hasan
									</Title>
								</Group>
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