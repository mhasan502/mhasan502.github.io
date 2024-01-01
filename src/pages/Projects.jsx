import Skeleton from "../components/Skeleton.jsx";
import {Anchor, Container, Group, List, Space, Text, Timeline, Title} from "@mantine/core";
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

        <Timeline active={3} bulletSize={20} radius={'sm'} p={0} m={0}>
          <Timeline.Item title={
            <>
              <Group justify={"space-between"}>
                <Anchor c={'dark'} target={"_blank"} href={'https://github.com/mhasan502/Age_Estimation'}>
                  Age Estimation Using Residual Neural Network with Cost Sensitive Learning Approach
                </Anchor>
              </Group>

              <Text size={'sm'} c={'dimmed'}>
                Technologies: PyTorch, NumPy, Python
              </Text>
            </>
          }>
            <Space h="lg"/>

            <List size={'sm'} spacing={'3'}>
              <List.Item>
                Developed a residual neural network-based age estimation model with a cost-sensitive learning approach
              </List.Item>
              <List.Item>
                Employed data augmentation techniques to enhance model performance on imbalanced datasets
              </List.Item>
              <List.Item>
                Applied a modulating term-based Cross-Entropy loss function to handle the class imbalance problem.
              </List.Item>
            </List>

          </Timeline.Item>
        </Timeline>
        <Space h={'lg'}/>

        <Timeline active={3} bulletSize={20} radius={'sm'} p={0} m={0}>
          <Timeline.Item title={
            <>
              <Group justify={"space-between"}>
                <Anchor c={'dark'} target={"_blank"} href={'https://github.com/mhasan502/Somachar'}>
                  Somachar: A Scraping-Based Bengali Newspaper
                </Anchor>
                <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                  <Anchor target={"_blank"} href={'https://somachar.fly.dev/'}>
                    Live
                  </Anchor>
                </Text>
              </Group>

              <Text size={'sm'} c={'dimmed'}>
                Technologies: Django, BeautifulSoup, RESTful API, Tailwind CSS, SQLite, Google Authentication
              </Text>
            </>
          }>
            <Space h="lg"/>

            <List size={'sm'} spacing={'3'}>
              <List.Item>
                The web scraping script was written for parse news from three popular Bangaldeshi websites, Jugantor,
                Ittefaq and Samakal
              </List.Item>
              <List.Item>
                Built a scalable and secure newspaper platform using cutting-edge technologies focusing on user
                experience and accessibility.
              </List.Item>
              <List.Item>
                Created an efficient and accurate web scraping system for news aggregation from diverse sources.
              </List.Item>
              <List.Item>
                Integrated innovative features like voice search, federated authentication, and text-to-speech to
                enhance accessibility.
              </List.Item>
            </List>

          </Timeline.Item>
        </Timeline>
        <Space h={'lg'}/>

        <Timeline active={3} bulletSize={20} radius={'sm'} p={0} m={0}>
          <Timeline.Item title={
            <>
              <Group justify={"space-between"}>
                <Anchor c={'dark'} target={"_blank"} href={'https://github.com/mhasan502/Somachar-Android-App'}>
                  Somachar: The Android Newspaper
                </Anchor>
              </Group>

              <Text size={'sm'} c={'dimmed'}>
                Technologies: Java, RESTful API, XML, Google TTS
              </Text>
            </>
          }>
            <Space h="lg"/>

            <List size={'sm'} spacing={'3'}>
              <List.Item>
                Implemented core functionalities in Java, and employed Model—View—Presenter architecture.
              </List.Item>
              <List.Item>
                Leveraged APIs like Google Text-to-Speech, Picasso and Speech Detection for enhanced user experience.
              </List.Item>
              <List.Item>
                A lightweight Particle Animation was employed as background based on Vincent Garreau&#39;s&nbsp;
                <Anchor c={'dark'} target={'_blank'} href={'https://github.com/VincentGarreau/particles.js'} inherit>
                  particles.js
                </Anchor>
              </List.Item>
              <List.Item>
                Converted the app later in Kotlin as Google is slowing deprecating Java.
              </List.Item>
            </List>

          </Timeline.Item>
        </Timeline>
      </Container>
    </Skeleton>
  );
}

export default Projects;