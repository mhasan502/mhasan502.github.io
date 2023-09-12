import Skeleton from "../components/Skeleton.jsx";
import {Anchor, Center, Container, Group, Image, Space, Title} from "@mantine/core";
import {FaGithub, FaLinkedin, FaStackOverflow, FaSteam} from "react-icons/fa";
import {SiGooglescholar} from "react-icons/si";

const Index = () => {
  return (
    <Skeleton>
      <Space h={'xl'}/>
      <Center>
        <Image
          h={{base: 250, md: 280, lg: 330}}
          w="auto"
          radius={'55'}
          src={'../../public/Mehedi.jpg'}
        />
      </Center>
      <Space h={'xl'}/>

      <Center>
        <Title>
          Md. Mehedi Hasan
        </Title>
      </Center>
      <Space h={'xl'}/>

      <Container size={'xs'}>
        <Group justify="center">
          <Anchor c={'#2c323b'} px={10} href={'https://github.com/mhasan502'} target={'_blank'}>
            <FaGithub size={40}/>
          </Anchor>
          <Anchor c={'#0A65C0'} px={10} href={'https://linkedin.com/in/Mhasan502'} target={'_blank'}>
            <FaLinkedin size={40}/>
          </Anchor>
          <Anchor c={'#2364d0'} px={10} href={'https://scholar.google.com/citations?user=1E7N-BoAAAAJ'} target={'_blank'}>
            <SiGooglescholar size={40}/>
          </Anchor>
          <Anchor c={'#f48024'} px={10} href={'https://stackoverflow.com/users/14150890/mhasan502'} target={'_blank'}>
            <FaStackOverflow size={40}/>
          </Anchor>
          <Anchor c={'#030b67'} px={10} href={'steamcommunity.com/id/Mhasan502'} target={'_blank'}>
            <FaSteam size={40}/>
          </Anchor>
        </Group>
      </Container>

    </Skeleton>
  );
}

export default Index;