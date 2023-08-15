import Skeleton from "../components/Skeleton.jsx";
import {Center, Image, Space, Title} from "@mantine/core";

const Index = () => {
  return (
    <Skeleton>
      <Space h={'xl'}/>
      <Center>
        <Image
          h={{base: 250, md: 280, lg: 330}}
          w="auto"
          radius={'xl'}
          src={'../../public/Mehedi.jpg'}
        />
      </Center>
			<Space h={'xl'}/>
			<Center>
				<Title>
					Md. Mehedi Hasan
				</Title>
			</Center>

    </Skeleton>
  );
}

export default Index;