import {useDisclosure} from '@mantine/hooks';
import {AppShell, Burger, Group, Box, Button} from '@mantine/core';
import {MantineLogo} from '@mantinex/mantine-logo';

const links = [
  {link: '/about', label: 'About'},
  {link: '/experience', label: 'Experience'},
  {link: '/education', label: 'Education'},
  {link: '/projects', label: 'Projects'},
  {link: '/skills', label: 'Skills'},
  {link: '/publication', label: 'Publication'},
];

const Header = () => {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      header={{height: 60}}
      navbar={{width: 300, breakpoint: 'sm', collapsed: {desktop: true, mobile: !opened}}}
      padding="md"
    >
      <AppShell.Header color="#000000">
        <Box p="sm" styles={[]}>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
            <Group justify="space-between" style={{flex: 1}}>
              <MantineLogo size={30}/>
                <Group gap="xs" visibleFrom="sm" justify="center">
                  <Button size="compact-md" variant="subtle" color="#0078CD">About</Button>
                  <Button size="compact-md" variant="subtle" color="#0078CD">Experience</Button>
                  <Button size="compact-md" variant="subtle" color="#0078CD">Education</Button>
                  <Button size="compact-md" variant="subtle" color="#0078CD">Projects</Button>
                  <Button size="compact-md" variant="subtle" color="#0078CD">Skills</Button>
                  <Button size="compact-md" variant="subtle" color="#0078CD">Publications</Button>
                </Group>
            </Group>
          </Group>
        </Box>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Button variant="subtle" color="teal">Home</Button>
        <Button variant="subtle" color="teal">Blog</Button>
        <Button variant="subtle" color="teal">Contacts</Button>
        <Button variant="subtle" color="teal">Support</Button>
      </AppShell.Navbar>

      <AppShell.Main>
        Navbar is only visible on mobile, links that are rendered in the header on desktop are
        hidden on mobile in header and rendered in navbar instead.
      </AppShell.Main>
    </AppShell>
  );
}

export default Header;