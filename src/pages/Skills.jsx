import {Container, Divider, Group, List, Space, Text, Title} from '@mantine/core';
import {VscTools} from 'react-icons/vsc';

const skillsData = [
  {category: 'Programming Languages', skills: 'Python, C++, Java'},
  {category: 'Machine Learning Libraries', skills: 'PyTorch, TensorFlow, Sci-Kit Learn'},
  {category: 'Data Engineering', skills: 'Apache Kafka, Apache Flink, Apache Airflow'},
  {category: 'Databases', skills: 'MongoDB, Redis, MySQL'},
  {category: 'Web', skills: 'Django, FastAPI, RESTful API'},
  {category: 'Other', skills: 'Docker, Bash, ArcGIS'},
];

const Skills = () => {
  return (
      <Container size={'lg'}>
        <Group justify={'center'}>
          <Title order={3}>
            <Group>
              <VscTools/> Skills
            </Group>
          </Title>
        </Group>
        <Space h={'lg'}/>

        <List p={5}>
          {skillsData.map((item, index) => (
            <List.Item key={index}>
              <Text span fw={700}>{item.category}:</Text> {item.skills}
            </List.Item>
          ))}
        </List>
        <Space h={'lg'}/>
        <Divider my={'xl'}/>
      </Container>
  );
}

export default Skills;