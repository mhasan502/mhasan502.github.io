import {IoBriefcaseOutline} from 'react-icons/io5';
import {Anchor, Container, Divider, Group, List, Space, Text, Timeline, Title} from '@mantine/core';

const Experience = () => {
  return (
    <Container size={'lg'}>
      <Divider my={'xl'}/>
      <Group justify={'center'}>
        <Title order={3}>
          <Group>
            <IoBriefcaseOutline/> Experience
          </Group>
        </Title>
      </Group>
      <Space h={'lg'}/>

      <Timeline active={1} bulletSize={20} radius={'md'} p={0} m={20}>
        <Timeline.Item title={
          <>
            <Group justify={'space-between'}>
              <Text> AI Engineer </Text>
              <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                January 2025 - Present
              </Text>
            </Group>

            <Text size={'sm'} c={'dimmed'}>
              AI Team, &nbsp;
              <Anchor c={'dark'} target={'_blank'} href={'https://projsite.com/en/'}>
                Projsite
              </Anchor>
            </Text>
          </>
        }>
          <Space h={'md'}/>

          <List size={'sm'} spacing={'3'}>
            <List.Item>
              Designed and deployed AI Agent integrated with NoSQL databases to enable real-time, context-aware user
              interactions.
            </List.Item>
            <List.Item>
              Analyzed consumer-level behavioral and interaction data to extract actionable insights and continuously
              improve AI-driven product functionalities.
            </List.Item>
            <List.Item>
              Built and maintained robust MLOps pipelines for automated model retraining, versioning, and continuous
              delivery to ensure high-availability and performance of deployed models.
            </List.Item>
            <List.Item>
              Collaborated with cross-functional remote teams to identify and execute data-driven optimization
              opportunities.
            </List.Item>
            <List.Item>
              Developed scalable, production-grade machine learning infrastructure for seamless integration of AI
              features across Projsite’s core products and services.
            </List.Item>
          </List>
        </Timeline.Item>
      </Timeline>

      <Timeline active={1} bulletSize={20} radius={'md'} p={0} m={20}>
        <Timeline.Item title={
          <>
            <Group justify={'space-between'}>
              <Text> Artificial Intelligence Engineer </Text>
              <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                May 2024 - January 2025
              </Text>
            </Group>

            <Text size={'sm'} c={'dimmed'}>
              Acote AI Innovation Hub, &nbsp;
              <Anchor c={'dark'} target={'_blank'} href={'https://www.acotegroup.com/'}>
                Acote Group
              </Anchor>
            </Text>
            <Text size={'xs'} c={'dimmed'}>
              Adviser: &nbsp;
              Dr. Mark Kim
            </Text>
          </>
        }>
          <Space h={'lg'}/>

          <List size={'sm'} spacing={'3'}>
            <List.Item>
              Developed an Object Detection model, successfully resolving significant accuracy challenges faced by the
              previous model in real-world scenarios.
            </List.Item>
            <List.Item>
              Engineered an automated ETL pipeline using Apache Airflow, streamlining data migration from model
              outputs to the software backend, significantly improving data accessibility and operational efficiency.
            </List.Item>
            <List.Item>
              Developed a Temporal Tracking-based automated data collection platform, leveraging CCTV footage to
              reduce manual effort and optimize data collection.
            </List.Item>
          </List>
        </Timeline.Item>
      </Timeline>

      <Timeline active={2} bulletSize={20} radius={'sm'} p={0} m={20}>
        <Timeline.Item title={
          <>
            <Group justify={'space-between'}>
              <Text> Machine Learning Engineer - Data Engineering & Deployment </Text>
              <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                May 2024 - May 2025
              </Text>
            </Group>

            <Text size={'sm'} c={'dimmed'}>
              Team Helios, &nbsp;
              <Anchor c={'dark'} target={'_blank'} href={'https://altersense.com/'}>
                AlterSense Limited
              </Anchor>
            </Text>
            <Text size={'xs'} c={'dimmed'}>
              Adviser: &nbsp;
              <Anchor
                c={'dimmed'}
                td={'underline'}
                href={'http://ece.northsouth.edu/people/dr-nabeel-mohammed/'}
                target={'_blank'}
              >
                Dr. Nabeel Mohammed
              </Anchor>
            </Text>
          </>
        }>
          <Space h={'lg'}/>

          <List size={'sm'} spacing={'3'}>
            <List.Item>
              Architected a real-time ML pipeline to ingest high-throughput camera streams (1.1 GB/s) and stream data
              into Apache Kafka for scalable processing.
            </List.Item>
            <List.Item>
              Developed core data ingestion modules in C++, utilizing advanced concurrency techniques (mutexes,
              condition variables, thread pools) for thread-safe, high-performance streaming.
            </List.Item>
            <List.Item>
              Designed and deployed a data warehouse solution to store both raw and processed data, facilitating
              real-time analytics and scheduled batch inference..
            </List.Item>
            <List.Item>
              Implemented scheduled inference workflows that retrieved data from the warehouse for deeper analysis,
              ensuring temporal consistency and model robustness.
            </List.Item>
            <List.Item>
              Built a horizontally and vertically scalable distributed system, ensuring high availability, fault
              tolerance, and consistent performance under sustained load.
            </List.Item>
            <List.Item>
              Prioritized architectural principles of scalability, maintainability, and reliability to support
              ongoing high-load operations and ensure seamless deployments.
            </List.Item>
          </List>
        </Timeline.Item>

        <Timeline.Item title={
          <>
            <Group justify={'space-between'}>
              <Text> Junior Machine Learning Engineer </Text>
              <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                January 2023 - April 2024
              </Text>
            </Group>

            <Text size={'sm'} c={'dimmed'}>
              Team Helios, &nbsp;
              <Anchor c={'dark'} target={'_blank'} href={'https://altersense.com/'}>
                AlterSense Limited
              </Anchor>
            </Text>
            <Text size={'xs'} c={'dimmed'}>
              Adviser: &nbsp;
              <Anchor
                c={'dimmed'}
                td={'underline'}
                href={'http://ece.northsouth.edu/people/dr-nabeel-mohammed/'}
                target={'_blank'}
              >
                Dr. Nabeel Mohammed
              </Anchor>
            </Text>
          </>
        }>
          <Space h={'lg'}/>

          <List size={'sm'} spacing={'3'}>
            <List.Item>
              Optimized multiple surveillance vision models, reducing GPU memory overhead by 10x through performance
              profiling with NVIDIA Nsight Compute.
            </List.Item>
            <List.Item>
              Delivered a robust object detection model in noisy environments, achieving an F1 Score of 0.722 by
              effectively addressing data imbalance challenges.
            </List.Item>
            <List.Item>
              Employed TensorRT framework to decrease GPU VRAM usage by 30% and inference speed by 1.7x, enabling
              deployment on low-spec hardware.
            </List.Item>
            <List.Item>
              Developed and deployed an end-to-end real-time vision inference pipeline for local servers, utilizing
              distributed computing platforms for enhanced performance.
            </List.Item>
            <List.Item>
              Engineered algorithms to automate a couple of manual software workflows on deployed machine learning
              models, boosting performance and scalability by 25%.
            </List.Item>
            <List.Item>
              Provided mentorship and strategic guidance to a junior team member, leading to the successful
              development of a new feature for an existing product.
            </List.Item>
          </List>
        </Timeline.Item>
      </Timeline>

      <Timeline active={1} bulletSize={20} radius={'md'} p={0} m={20}>
        <Timeline.Item title={
          <>
            <Group justify={'space-between'}>
              <Text> Software Development Associate </Text>
              <Text bg={'gray.1'} style={{display: 'inline-block'}} px={5} py={3}>
                June 2021 - December 2021
              </Text>
            </Group>

            <Text size={'sm'} c={'dimmed'}>
              Department of Electrical and Computer Engineering, &nbsp;
              <Anchor c={'dark'} target={'_blank'} href={'https://northsouth.edu/'}>
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
              , &nbsp;
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
          <Space h={'lg'}/>

          <List size={'sm'} spacing={'3'}>
            <List.Item>
              Delivered a high-performance website for the ICCIT 2021 Conference, exceeding 30,000+ traffic, and
              received positive feedback from attendees.
            </List.Item>
            <List.Item>
              Conducted a livelihood vulnerability assessment solution for 10,000+ people for post-disaster
              environment, enabling targeted relief distribution.
            </List.Item>
            <List.Item>
              Migrated a legacy PHP project to Django, driving a 20% performance gain and unlocking future
              scalability.
            </List.Item>
            <List.Item>
              Developed and deployed an Android app for precise data collection, reducing errors by 10% and optimizing
              field operations.
            </List.Item>

          </List>
        </Timeline.Item>
      </Timeline>

      <Divider my={'xl'}/>

      <Timeline active={1} bulletSize={20} radius={'sm'} p={0} m={20}>
        <Timeline.Item>
          <Group justify={'space-between'}>
            <Text> Undergraduate Teaching Assistant </Text>
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
      <Space h={'lg'}/>
      <Divider my={'xl'}/>
    </Container>
  );
}

export default Experience;