import {Anchor, Center, Container, Group, Image, Space, Title} from '@mantine/core';
import {FaGithub, FaLinkedin, FaStackOverflow} from 'react-icons/fa';
import {SiGooglescholar} from 'react-icons/si';
import {GoMail} from 'react-icons/go';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';

const IconLink = ({color, href, Icon}) => (
    <Anchor c={color} px={4} href={href} target={'_blank'}>
      <Icon size={36}/>
    </Anchor>
);

const Index = () => {

  const [experience, setExperience] = useState({years: 2, months: 0});

  useEffect(() => {
    const startDate = new Date(2023,  0, 1);
    const currentDate = new Date();

    const totalMonths =  (
        currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth()
    );
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const roundedYears = months >= 6 ? years + 1 : years;

    setExperience({years, roundedYears});
  }, []);

  return (
      <Container size={'xl'} style={{paddingInline: '1vh'}}>
        <Center>
          <Image
              h={{base: 240, md: 260, lg: 300}}
              w={'auto'}
              radius={'55'}
              src={'/mehedi.webp'}
          />
        </Center>
        <Space h={'xl'}/>

        <Center>
          <Title> Md. Mehedi Hasan </Title>
        </Center>
        <Space h={'xl'}/>

        <Center>
          <Container size={'lg'} style={{paddingInline: '1vh'}}>
            A dedicated and innovative Machine Learning Engineer with {experience.roundedYears} years of
            experience in developing and deploying sophisticated machine learning solutions. Specializing in real-time
            vision inference pipelines, with a focus on enhancing surveillance systems, video analysis, and real-time
            analytics.

            <Space h={'md'} />

            With a proven track record across diverse industries—including Ready-Made Garments (RMG), Retail, and
            Transportation —bringing a unique combination of technical expertise and industry insight to each project.
            Eager to contribute expertise and innovation to a collaborative team. Feel free to reach out by email or
            connect on LinkedIn.
          </Container>
        </Center>
        <Space h={'xl'}/>

        <Container style={{paddingInline: '1vh'}}>
          <Group justify={'center'}>
            <IconLink color={'#2c323b'} href={'mailto:mhasan502@gmail.com'} Icon={GoMail}/>
            <IconLink color={'#2c323b'} href={'https://github.com/mhasan502'} Icon={FaGithub}/>
            <IconLink color={'#0A65C0'} href={'https://linkedin.com/in/Mhasan502'} Icon={FaLinkedin}/>
            <IconLink color={'#2364d0'} href={'https://scholar.google.com/citations?user=1E7N-BoAAAAJ'} Icon={SiGooglescholar}/>
            <IconLink color={'#f48024'} href={'https://stackoverflow.com/users/14150890/mhasan502'} Icon={FaStackOverflow}/>
          </Group>
        </Container>

      </Container>
  );
}

IconLink.propTypes = {
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
};

export default Index;