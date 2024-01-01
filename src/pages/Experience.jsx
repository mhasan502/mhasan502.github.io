import Skeleton from "../components/Skeleton.jsx";
import {IoBriefcaseOutline} from "react-icons/io5";
import {Anchor, Container, Divider, Group, List, Space, Text, Timeline, Title} from "@mantine/core";

const Experience = () => {
  return (
    <Skeleton>
      <Container size={'md'}>
        <Space h={'xl'}/>

        <Group justify="center">
          <Title order={3}>
            <Group>
              <IoBriefcaseOutline/> Experience
            </Group>
          </Title>
        </Group>
        <Space h={'lg'}/>

        <Timeline active={3} bulletSize={20} radius={'sm'} p={0} m={0}>
          <Timeline.Item title={
            <>
              <Group justify={"space-between"}>
                <Text>Junior Machine Learning Engineer</Text>
                <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                  January 2023 - Present
                </Text>
              </Group>

              <Text size={'sm'} c={'dimmed'}>
                Team Helios, &nbsp;
                <Anchor c={'dark'} target={"_blank"} href={'https://altersense.com/'}>
                  AlterSense Limited
                </Anchor>
              </Text>
            </>
          }>
            <Space h={'lg'}/>

            <List size={'sm'} spacing={'3'}>
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

          <Timeline.Item title={
            <>
              <Group justify={'space-between'}>
                <Text>Web Development Associate</Text>
                <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                  July 2021 - December 2021
                </Text>
              </Group>

              <Text size={'sm'} c={'dimmed'}>
                Department of Electrical and Computer Engineering, &nbsp;
                <Anchor c={'dark'} target={'_blank'} href={'http://northsouth.edu/'}>
                  North South University
                </Anchor>
              </Text>
              <Text size={'xs'} c={'dimmed'}>
                Supervised by: &nbsp;
                <Anchor
                  c={'dimmed'}
                  td={'underline'}
                  target={'_blank'}
                  href={'http://ece.northsouth.edu/people/rashedur-rahman/'}
                >
                  Dr. Mohammad Rashedur Rahman
                </Anchor>
                , and &nbsp;
                <Anchor
                  c={'dimmed'}
                  td={'underline'}
                  target={'_blank'}
                  href={'http://ece.northsouth.edu/people/lutfe-elahi/'}
                >
                  Mirza Mohammad Lutfe Elahi
                </Anchor>
              </Text>
            </>
          }>
            <List size={'sm'} spacing={'3'}>
              <List.Item>
                Developed and maintained a high-traffic website for the International Conference on Computer and
                Information Technology (ICCIT) 2021, garnering positive feedback from over 30,000 visitors.
              </List.Item>
              <List.Item>
                Managed the website&apos;s technical maintenance for six months with zero downtime, ensuring a seamless
                user experience.
              </List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item title={
            <>
              <Group justify={'space-between'}>
                <Text>Software Development Associate</Text>
                <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                  June 2021 - July 2021
                </Text>
              </Group>

              <Text size={'sm'} c={'dimmed'}>
                Department of Electrical and Computer Engineering, &nbsp;
                <Anchor c={'dark'} target={'_blank'} href={'http://northsouth.edu/'}>
                  North South University
                </Anchor>
              </Text>
              <Text size={'xs'} c={'dimmed'}>
                Supervised by: &nbsp;
                <Anchor
                  c={'dimmed'}
                  td={'underline'}
                  target={'_blank'}
                  href={'http://ece.northsouth.edu/people/lutfe-elahi/'}
                >
                  Mirza Mohammad Lutfe Elahi
                </Anchor>
                , and &nbsp;
                <Anchor
                  c={'dimmed'}
                  td={'underline'}
                  target={'_blank'}
                  href={'http://ece.northsouth.edu/people/silvia-ahmed/'}
                >
                  Silvia Ahmed
                </Anchor>
              </Text>
            </>
          }>
            <List size={'sm'} spacing={'3'}>
              <List.Item>
                Conducted livelihood vulnerability assessment for 10,000+ people post-disaster, enabling targeted relief
                distribution.
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

        <Divider my={'xl'}/>

        <Timeline active={3} bulletSize={20} radius={'sm'} p={0} m={0}>
          <Timeline.Item>
            <Group justify={'space-between'}>
              <Text>Undergraduate Teaching Assistant</Text>
              <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                June 2022 - September 2022
              </Text>
            </Group>

            <Text size={'sm'} c={'dimmed'}>
              Department of Electrical and Computer Engineering, &nbsp;
              <Anchor c={'dark'} target={'_blank'} href={'http://ece.northsouth.edu/'}>
                North South University
              </Anchor>
            </Text>

            <Text size={'xs'} c={'dimmed'}>
              Worked and collaborated with &nbsp;
              <Anchor
                c={'dimmed'}
                td={'underline'}
                href={'http://ece.northsouth.edu/people/dr-nabeel-mohammed/'}
                target={'_blank'}
              >
                Dr. Nabeel Mohammed
              </Anchor>
              , &nbsp;
              <Anchor
                c={'dimmed'}
                td={'underline'}
                href={'https://www.du.ac.bd/faculty/faculty_details/CSE/2585'}
                target={'_blank'}
              >
                Dr. Sarker Tanveer Ahmed Rumee
              </Anchor>
              , and &nbsp;
              <Anchor
                c={'dimmed'}
                td={'underline'}
                href={'https://juniv.edu/teachers/sarnali.cse'}
                target={'_blank'}
              >
                Sarnali Basak
              </Anchor>
            </Text>
            <Space h={'lg'}/>

            <List size={'sm'} spacing={'3'}>
              <List.Item>
                Conducted tutorial sessions for students needing extra help outside of class hours.
              </List.Item>
              <List.Item>
                Graded home-works and assignments.
              </List.Item>
              <List.Item>
                Stayed informed about test dates, times, and other course-related deadlines.
              </List.Item>
              <List.Item>
                Maintained 04 hours per week per section divided among the assisting faculty members for student
                consultation.
              </List.Item>
              <List.Item>
                Assisted faculty members in their course-related work except for grading quiz/exam papers.
              </List.Item>
            </List>
          </Timeline.Item>
        </Timeline>
      </Container>
    </Skeleton>
  );
}

export default Experience;