import {AppShell} from '@mantine/core';
import Header from './Header.jsx';
import {useDisclosure} from '@mantine/hooks';
import {IconContext} from "react-icons";

const Skeleton = ({children}) => {
  const [opened, {toggle}] = useDisclosure();
  return (
    <AppShell
      header={{height: 60}}
      navbar={{width: 300, breakpoint: 'sm', collapsed: {desktop: true, mobile: !opened}}}
      padding='md'>
      <Header opened={opened} toggle={toggle}/>
      <AppShell.Main>
        <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
          {children}
        </IconContext.Provider>
      </AppShell.Main>
    </AppShell>
  )
}

export default Skeleton;