import {Link} from 'react-router-dom';
import {AppShell, Burger, Group, Box, Button, Image, Title, Center} from '@mantine/core';
import PropTypes from 'prop-types';

const buttonData = [
  {tag: 'Experience', link: '/experience/'},
  {tag: 'Education', link: '/education/'},
  {tag: 'Projects', link: '/projects/'},
  {tag: 'Skills', link: '/skills/'},
  {tag: 'Publications', link: '/publications/'},
];

const DesktopNavbarOptions = () => {
  const renderButton = (item) => (
    <Link to={item.link} key={item.tag}>
      <Button size={'compact-md'} p={2} variant={'subtle'}>
        {item.tag}
      </Button>
    </Link>
  );

  return (
    <Group gap='xs' visibleFrom='sm' justify='center'>
      {buttonData.map(renderButton)}
    </Group>
  );
}

const MobileNavbarOptions = () => {
  const renderMobileButton = (item) => (
    <Center key={item.tag} py={2}>
      <Link to={item.link}>
        <Button size={'compact-md'} p={2} variant={'subtle'}>
          {item.tag}
        </Button>
      </Link>
    </Center>
  );

  return (
    <AppShell.Navbar py='md' px={4}>
      {buttonData.map(renderMobileButton)}
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
              <Link to={'/'} style={{textDecoration: 'none'}}>
                <Group>
                  <Image h={{base: 35, md: 45, lg: 55}} radius={'md'} src={'../../public/Mehedi.jpg'}/>
                  <Title order={3} tt="uppercase" c={'blue'} style={{fontFamily: 'Chakra Petch'}}>
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