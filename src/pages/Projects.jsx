import {Anchor, Container, Group, List, Space, Text, Timeline, Title} from '@mantine/core';
import {IoApps} from 'react-icons/io5';
import PropTypes from 'prop-types';

const ProjectTimeline = ({ title, link, liveLink, technologies, responsibilities }) => (
  <Timeline active={3} bulletSize={20} radius={'sm'} p={0} m={0}>
    <Timeline.Item
      title={
        <>
          <Group justify={'space-between'}>
            <Anchor c={'dark'} target={'_blank'} href={link}>
              {title}
            </Anchor>
            {liveLink && (
              <Text bg={'gray.1'} style={{ display: 'inline-block' }} px={5} py={3}>
                <Anchor target={'_blank'} href={liveLink}>
                  Live
                </Anchor>
              </Text>
            )}
          </Group>
          <Text size={'sm'} c={'dimmed'}>
            Technologies: {technologies}
          </Text>
        </>
      }
    >
      <Space h={'lg'} />
      <List size={'sm'} spacing={3}>
        {responsibilities.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    </Timeline.Item>
  </Timeline>
);

const Projects = () => {
  return (
    <Container size={'lg'}>
      <Group justify={'center'}>
        <Title order={3}>
          <Group>
            <IoApps/> Projects
          </Group>
        </Title>
      </Group>
      <Space h={'lg'}/>

      <ProjectTimeline
        title={'Age Estimation Using Residual Neural Network with Cost Sensitive Learning Approach'}
        link={'https://github.com/mhasan502/Age_Estimation'}
        technologies={'PyTorch, NumPy, Python'}
        responsibilities={[
          'Developed a residual neural network-based age estimation model with a cost-sensitive learning approach.',
          'Employed data augmentation techniques to enhance model performance on imbalanced datasets.',
          'Applied a modulating term-based Cross-Entropy loss function to handle the class imbalance problem.',
        ]}
      />

      <Space h={'lg'} />

      <ProjectTimeline
        title={'Somachar: A Scraping-Based Bengali Newspaper'}
        link={'https://github.com/mhasan502/Somachar'}
        liveLink={'https://somachar.fly.dev/'}
        technologies={'Django, BeautifulSoup, RESTful API, Tailwind CSS, SQLite, Google Authentication'}
        responsibilities={[
          'The web scraping script was written for parse news from three popular Bangladeshi websites, Jugantor, Ittefaq and Samakal.',
          'Built a scalable and secure newspaper platform using cutting-edge technologies focusing on user experience and accessibility.',
          'Created an efficient and accurate web scraping system for news aggregation from diverse sources.',
          'Integrated innovative features like voice search, federated authentication, and text-to-speech to enhance accessibility.',
        ]}
      />

      <Space h={'lg'} />

      <ProjectTimeline
        title={'Somachar: The Android Newspaper'}
        link={'https://github.com/mhasan502/Somachar-Android-App'}
        technologies={'Java, RESTful API, XML, Google TTS'}
        responsibilities={[
          'Implemented core functionalities in Java, and employed Model—View—Presenter architecture.',
          'Leveraged APIs like Google Text-to-Speech, Picasso and Speech Detection for enhanced user experience.',
          'A lightweight Particle Animation was employed as background based on Vincent Garreau\'s particles.js.',
          'Converted the app later in Kotlin as Google is slowing deprecating Java.',
        ]}
      />
    </Container>
  );
}

ProjectTimeline.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  technologies: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Projects;