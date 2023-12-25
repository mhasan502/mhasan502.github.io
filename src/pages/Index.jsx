import Skeleton from "../components/Skeleton.jsx";
import {Anchor, Center, Container, Group, Image, Space, Title} from "@mantine/core";
import {FaGithub, FaLinkedin, FaStackOverflow, FaSteam} from "react-icons/fa";
import {SiGooglescholar} from "react-icons/si";
import {GoMail} from "react-icons/go";

const Index = () => {
  return (
    <Skeleton>
      <Space h={'xl'}/>
      <Center>
        <Image
          h={{base: 240, md: 260, lg: 300}}
          w="auto"
          radius={'55'}
          src={'/Mehedi.jpg'}
        />
      </Center>
      <Space h={'xl'}/>

      <Center>
        <Title>
          Md. Mehedi Hasan
        </Title>
      </Center>
      <Space h={'xl'}/>

      <Center>
        <Container>
          Driven professional with 1+ years of experience crafting and deploying machine learning models for ready-made
          garments and retail store analytics, consistently improving performance and scalability by an average of 20%.
          Proficient in PyTorch, Sci-Kit Learn, Django, FastAPI, Redis, Docker, and ArcGIS. Passionate about leveraging
          technology to solve real-world challenges in RMG and retail. Eager to contribute my expertise and innovation
          to a collaborative team. Feel free to reach out to me by email or connect with me on LinkedIn for further
          discussion
        </Container>
      </Center>
      <Space h={'xl'}/>

      <Container size={'xs'}>
        <Group justify="center">
          <Anchor c={'#2c323b'} px={4} href={'mailto:mhasan502@gmail.com'} target={'_blank'}>
            <GoMail size={36}/>
          </Anchor>
          <Anchor c={'#2c323b'} px={4} href={'https://github.com/mhasan502'} target={'_blank'}>
            <FaGithub size={36}/>
          </Anchor>
          <Anchor c={'#0A65C0'} px={4} href={'https://linkedin.com/in/Mhasan502'} target={'_blank'}>
            <FaLinkedin size={36}/>
          </Anchor>
          <Anchor c={'#2364d0'} px={4} href={'https://scholar.google.com/citations?user=1E7N-BoAAAAJ'}
                  target={'_blank'}>
            <SiGooglescholar size={36}/>
          </Anchor>
          <Anchor c={'#f48024'} px={4} href={'https://stackoverflow.com/users/14150890/mhasan502'} target={'_blank'}>
            <FaStackOverflow size={36}/>
          </Anchor>
          <Anchor c={'#030b67'} px={4} href={'https://steamcommunity.com/id/Mhasan502'} target={'_blank'}>
            <FaSteam size={36}/>
          </Anchor>
        </Group>
      </Container>

    </Skeleton>
  );
}

export default Index;