import Skeleton from "../components/Skeleton.jsx";
import {Container, Group, Space, Title} from "@mantine/core";
import {IoApps} from "react-icons/io5";

const Projects = () => {
  return (
    <Skeleton>
      <Container size={'md'}>
        <Space h={'xl'}/>

        <Group justify="center">
          <Title order={3}>
            <Group>
              <IoApps/> Projects
            </Group>
          </Title>
        </Group>
        <Space h={'lg'}/>
        Will be updated Soon
      </Container>
    </Skeleton>
  );
}

export default Projects;