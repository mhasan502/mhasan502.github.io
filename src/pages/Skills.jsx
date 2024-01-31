import {Container, Divider, Group, List, Mark, Space, Text, Title} from '@mantine/core';
import {VscTools} from 'react-icons/vsc';

const Skills = () => {
  return (
    <>
      <Container size={'md'}>
        <Space h={'xl'}/>

        <Group justify='center'>
          <Title order={3}>
            <Group>
              <VscTools/> Skills
            </Group>
          </Title>
        </Group>
        <Space h={'lg'}/>

        <List p={5}>
          <List.Item>
            <Text span fw={700}>Programming Languages : </Text>
            Python, Javascript, C++
          </List.Item>
          <List.Item>
            <Text span fw={700}>Machine Learning Libraries : </Text>
            PyTorch, Sci-Kit Learn, NumPy, Pandas
          </List.Item>
          <List.Item>
            <Text span fw={700}>Web : </Text>
            Django, FastAPI, RESTful API, GraphQL
          </List.Item>
          <List.Item>
            <Text span fw={700}>Databases : </Text>
            MongoDB, Redis, MySQL, PostgreSQL
          </List.Item>
          <List.Item>
            <Text span fw={700}>OS and VCS : </Text>
            Linux, Windows, Git, GitHub, BitBucket
          </List.Item>
          <List.Item>
            <Text span fw={700}>Other : </Text>
            Docker, OpenCV, CI/CD, ArcGIS
          </List.Item>
        </List>
        <Space h={'lg'}/>
        <Divider my='xl'/>
        <Text size={'sm'}>
          I love working with different type of technologies. The above mentioned technologies I use large part of the
          day on work. I am flexible with programming languages and technologies. I have
        </Text>
        <Space h={'sm'}/>
        <List size={'sm'} spacing={'3'}>
          <List.Item>
            built apps in <Mark color='gray.4'>Java</Mark> to be used on client side.
          </List.Item>
          <List.Item>
            worked on Arduino variant of <Mark color='gray.4'>C/C++</Mark> language to build Line-following Robots.
          </List.Item>
          <List.Item>
            built this portfolio website using <Mark color='gray.4'>React</Mark>
          </List.Item>
          <List.Item>
            completed Database Management System course project in <Mark color='gray.4'>PHP</Mark>
          </List.Item>
          <List.Item>
            achieved 95% marks in <Mark color='gray.4'>Assembly</Mark> language lab.
          </List.Item>
          <List.Item>
            scraped data using <Mark color='gray.4'>BeautifulSoup</Mark> from popular newspaper sites of Bangladesh.
          </List.Item>
          <List.Item>
            solved couple competitive programming problems in <Mark color='gray.4'>C#</Mark>
          </List.Item>
        </List>

      </Container>
    </>
  );
}

export default Skills;