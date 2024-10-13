import {AppShell} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconContext} from 'react-icons';
import PropTypes from 'prop-types';
import Header from './Header.jsx';

const Skeleton = ({children}) => {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      header={{
        height: {base: 60, md: 70, lg: 80}
      }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: 'sm',
        collapsed: {desktop: true, mobile: !opened}
      }}
      padding={'md'}
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle}/>
      </AppShell.Header>
      <AppShell.Main>
        <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
          {children}
        </IconContext.Provider>
      </AppShell.Main>
    </AppShell>
  )
}

Skeleton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Skeleton;