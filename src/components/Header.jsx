import {AppShell, Burger, Group, Box, Button} from '@mantine/core';
import {MantineLogo} from '@mantinex/mantine-logo';
import PropTypes from "prop-types";


const NavbarOptions = () => {
	return (
		<>
			<Button size="compact-md" variant="subtle" color="#0078CD">Experience</Button>
			<Button size="compact-md" variant="subtle" color="#0078CD">Education</Button>
			<Button size="compact-md" variant="subtle" color="#0078CD">Projects</Button>
			<Button size="compact-md" variant="subtle" color="#0078CD">Skills</Button>
			<Button size="compact-md" variant="subtle" color="#0078CD">Publications</Button>
		</>
	);
}
const DesktopNavbarOptions = () => {
	return (
		<Group gap="xs" visibleFrom="sm" justify="center">
			<NavbarOptions/>
		</Group>
	);
}
const MobileNavbarOptions = () => {
	return (
		<AppShell.Navbar py="md" px={4}>
			<NavbarOptions/>
		</AppShell.Navbar>
	);
}

const Header = ({opened, toggle}) => {
	return (
		<>
			<AppShell.Header color="#000000">
				<Box p="sm" styles={[]}>
					<Group h="100%" px="md">
						<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
						<Group justify="space-between" style={{flex: 1}}>
							<MantineLogo size={30}/>
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