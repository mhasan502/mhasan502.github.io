import Skeleton from "../components/Skeleton.jsx";
import {Container, Group, Space, Title, Text, Timeline, List} from "@mantine/core";
import {IoSchoolOutline} from "react-icons/io5";

const Education = () => {
  return (
    <Skeleton>
      <Container size={'md'}>
        <Space h={'xl'}/>

        <Group justify="center">
          <Title order={3}>
            <IoSchoolOutline/> Education
          </Title>
        </Group>
        <Space h={'lg'}/>
        <Timeline active={3} bulletSize={20}  radius={'sm'}>
          <Timeline.Item>
            <Title order={5}>
              Bachelor of Science in Computer Science and Engineering - North South University
            </Title>

            <Space h="sm"/>
            <Text bg='gray.1' style={{ display: 'inline-block' }} px={5} py={3}>
              Spring 2018 - Summer 2022
            </Text>
            <Space h="xs"/>

            <List>
              <List.Item>
                CGPA: 3.77/4.00 (90-92% marks)
              </List.Item>
              <List.Item>
                Graduated with Magna Cum Laude
              </List.Item>
              <List.Item>
                <Text>
                  Thesis Title:
                  <Text fs='italic' span> Inter-Dataset Critical Evaluation of Common Object Detection Model.
                  </Text>
                </Text>
              </List.Item>
            </List>

          </Timeline.Item>
        </Timeline>

      </Container>
    </Skeleton>
  );
}

export default Education;