import {Anchor, Container, Group, List, Space, Text, Timeline, Title} from '@mantine/core';
import {IoSchoolOutline} from 'react-icons/io5';

const Education = () => {
  return (
    <Container size={'lg'}>
      <Group justify={'center'}>
        <Title order={3}>
          <Group>
            <IoSchoolOutline/> Education
          </Group>
        </Title>
      </Group>
      <Space h={'lg'}/>

      <Timeline active={3} bulletSize={20} radius={'sm'} p={0} m={0}>
        <Timeline.Item title={
          <>
            <Group justify={'space-between'}>
              <Text>Bachelor of Science in Computer Science and Engineering</Text>
              <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                Spring 2018 - Summer 2022
              </Text>
            </Group>

            <Text size={'sm'} c={'dimmed'}>
              Department of Electrical and Computer Engineering, &nbsp;
              <Anchor c={'dark'} target={'_blank'} href={'https://northsouth.edu/'}>
                North South University
              </Anchor>
            </Text>
          </>
        }>
          <Space h={'lg'}/>

          <List size={'sm'} spacing={'3'}>
            <List.Item>
              CGPA: 3.77 / 4.00 (90-92% marks)
            </List.Item>
            <List.Item>
              Graduated with Magna Cum Laude.
            </List.Item>
            <List.Item>
              Thesis Title: &nbsp;
              <Text fs={'italic'} span inherit>
                Inter-Dataset Critical Evaluation of Common Object Detection Model.
              </Text>
            </List.Item>
            <List.Item>
              Achieved 2nd Runner Up position in Electrathon 2018 organized by IEEE NSU.
            </List.Item>
          </List>

        </Timeline.Item>
      </Timeline>

    </Container>
  );
}

export default Education;