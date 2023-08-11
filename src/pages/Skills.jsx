import Skeleton from "../components/Skeleton.jsx";
import {Container, Group, List, Space, Title, Text, Mark, Divider} from "@mantine/core";
import {VscTools} from "react-icons/vsc";

const Skills = () => {
  return (
    <Skeleton>
      <Container size={'md'}>
        <Space h={'xl'}/>

        <Group justify="center">
          <Title order={3}>
            <VscTools/> Skills
          </Title>
        </Group>
        <Space h={'lg'}/>

        <List>
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
        <Divider my="xl" />
        <Text>
          The above mentioned technologies I use large part of the day. I am flexible with programming languages and
          technologies.
        </Text>
        <Text>I have</Text>
        <List>
          <List.Item>
            built apps in <Mark color="gray.4">Java</Mark> to be used on client side.
          </List.Item>
          <List.Item>
            worked on Arduino variant of <Mark color="gray.4">C/C++</Mark> language to built Line-following Robots.
          </List.Item>
          <List.Item>
            completed Database Management System course project in <Mark color="gray.4">PHP</Mark>
          </List.Item>
          <List.Item>
            achieved 95% marks in <Mark color="gray.4">Assembly</Mark> language lab.
          </List.Item>
          <List.Item>
            scraped data using <Mark color="gray.4">BeautifulSoup</Mark> from popular newspaper sites of Bangladesh.
          </List.Item>
          <List.Item>
            solved couple programming problems languages <Mark color="gray.4">C#</Mark>
          </List.Item>
        </List>

      </Container>
    </Skeleton>
  );
}

export default Skills;