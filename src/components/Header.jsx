import {Link} from 'react-router-dom';
import {Anchor, AppShell, Box, Burger, Button, Center, Group, Image, Title} from '@mantine/core';
import PropTypes from 'prop-types';
import {FaExternalLinkAlt} from 'react-icons/fa';

const buttonData = [
  {tag: 'Blog', link: 'https://mhasan502.github.io/blogs/'},
];

const DesktopNavbarOptions = () => (
    <Group gap={'xs'} visibleFrom={'sm'} justify={'center'}>
      {buttonData.map((item) => (
          <Anchor href={item.link} key={item.tag} target={'_blank'}>
            <Button size={'compact-md'} p={2} variant={'subtle'}>
              {item.tag} &nbsp; <FaExternalLinkAlt size={14}/>
            </Button>
          </Anchor>
      ))}
    </Group>
)

const MobileNavbarOptions = () => (
    <AppShell.Navbar py={'md'} px={4}>
      {buttonData.map((item) => (
          <Center key={item.tag} py={2}>
            <Anchor href={item.link} key={item.tag} target={'_blank'}>
              <Button size={'compact-md'} p={2} variant={'subtle'}>
                {item.tag} &nbsp; <FaExternalLinkAlt size={14}/>
              </Button>
            </Anchor>
          </Center>
      ))}
    </AppShell.Navbar>
)

const Header = ({opened, toggle}) => {
  return (
      <>
        <AppShell.Header color={'#000000'}>
          <Box p={'sm'}>
            <Group h={'100%'} px={'sm'}>
              <Burger opened={opened} onClick={toggle} hiddenFrom={'sm'} size={'sm'}/>
              <Group justify={'space-between'} style={{flex: 1}}>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                  <Group>
                    <Image h={{base: 35, md: 45, lg: 55}} radius={'md'} src={'/mehedi.webp'}/>
                    <Title order={3} tt={'uppercase'} c={'blue'} style={{fontFamily: 'Chakra Petch'}}>
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