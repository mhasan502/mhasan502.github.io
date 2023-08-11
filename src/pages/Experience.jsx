import Skeleton from "../components/Skeleton.jsx";
import {IoBriefcaseOutline} from "react-icons/io5";
import {Anchor, Container, Group, List, Space, Text, Timeline, Title} from "@mantine/core";

const Experience = () => {
  return (
    <Skeleton>
      <Container size={'md'}>
        <Space h={'xl'}/>

        <Group justify="center">
          <Title order={3}>
            <IoBriefcaseOutline/> Experience
          </Title>
        </Group>
        <Space h={'lg'}/>

        <Timeline active={3} bulletSize={20}  radius={'sm'}>
          <Timeline.Item>
            <Group justify="space-between">
            <Title order={5}>
              <Text span>Junior Machine Learning Engineer - </Text>
              <Anchor c={'dark'} href="https://altersense.com/" target="_blank" inherit>
                AlterSense Limited
              </Anchor>
            </Title>
            <Text bg='gray.1' style={{display: 'inline-block'}} px={5} py={3}>
              January 2023 - Present
            </Text>
            </Group>
            <Space h="xl" />

            <List>
              <List.Item>
                Developed and deployed machine learning models for RMG and retail store analytics projects, improving
                performance and scalability by an average of 20%.
              </List.Item>
              <List.Item>
                Reduced memory overhead of a Person Tracking model by 10x by designing a demodulated inference pipeline.
              </List.Item>
              <List.Item>
                Employed TensorRT to reduce GPU VRAM overhead by 30% and inference speed by 1.7x.
              </List.Item>
              <List.Item>
                Developed and deployed machine learning models, boosting performance and scalability by 20%.
              </List.Item>
              <List.Item>
                Provided guidance and mentorship to one junior team member.
              </List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item>
            <Group justify="space-between">
            <Title order={5}>
              <Text span>Web Development Associate - </Text>
              <Anchor c={'dark'} href="http://northsouth.edu/" target="_blank" inherit>
                North South University
              </Anchor>
            </Title>
            <Text bg='gray.1' style={{display: 'inline-block'}} px={5} py={3}>
              July 2021 - December 2021
            </Text>
            </Group>

            <List>
              <List.Item>
                Developed and maintained a high-traffic website for the International Conference on Computer and Information Technology (ICCIT) 2021, garnering positive feedback from over 30,000 visitors.
              </List.Item>
              <List.Item>
                Managed the website&apos;s technical maintenance for six months with zero downtime, ensuring a seamless user experience.
              </List.Item>

            </List>
          </Timeline.Item>

          <Timeline.Item>
            <Group justify="space-between">
            <Title order={5}>
              <Text span>Web Development Associate - </Text>
              <Anchor c={'dark'} href="http://northsouth.edu/" target="_blank" inherit>
                North South University
              </Anchor>
            </Title>
            <Text bg='gray.1' style={{display: 'inline-block'}} px={5} py={3}>
              June 2021 - July 2021
            </Text>
            </Group>

            <List>
              <List.Item>
                Conducted livelihood vulnerability assessment for 10,000+ people post-disaster, enabling targeted relief distribution.
              </List.Item>
              <List.Item>
                Migrated a legacy PHP project to Django, improving performance and scalability by 20%.
              </List.Item>
              <List.Item>
                Developed an Android app for streamlined data collection, reducing errors by 10%.
              </List.Item>

            </List>
          </Timeline.Item>
        </Timeline>
      </Container>
    </Skeleton>
  );
}

export default Experience;