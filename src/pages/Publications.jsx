import Skeleton from "../components/Skeleton.jsx";
import {Container, List, Title, Text, Space, Anchor, Image} from '@mantine/core';

const Publications = () => {
	return (
		<Skeleton>
			<Container size={'lg'}>
				<Space h={'xl'}/>
				<Title order={3}>
					Publications:
				</Title>
				<Space h={'md'}/>
				<List>
					<List.Item>
						<Text span fw={700}>Hasan, Md Mehedi*</Text>,
						Md Sahjalal Mondol Nilay, Nahid Hossain Jibon, and Rashedur M. Rahman.
						<Anchor href="https://doi.org/10.1016/j.rineng.2023.101079" target="_blank">
							<Text c={'blue.6'} fw={600}>
								"LULC changes to riverine flooding: A case study on the Jamuna River, Bangladesh using the multilayer
								perceptron model"
							</Text>
						</Anchor>
						Results in Engineering 18 (2023): 101079.

						<Image radius={'md'} src="../../public/Publication/Graphical Abstract-min.png"/>
						<Space h={'md'}/>

						<List size={'sm'} withPadding>
							<List.Item>
								Land-Use Land-Cover (LULC) was generated by supervised classification from Landsat 5 and Landsat 8 data.
							</List.Item>
							<List.Item>
								The land-use land-cover changes were aggregated in a Markov matrix for land-use land-cover change
								analysis.
							</List.Item>
							<List.Item>
								The Riverine Flood Potential Index (RFPI) was calculated using the Multilayer Perceptron (MLP) model for
								both 1990 and 2020.
							</List.Item>
							<List.Item>
								LULC changes and riverine flood potential changes were calculated using the total relative difference
								formula.
							</List.Item>
							<List.Item>
								Geographically Weighted Regression (GWR) derived a statistical correlation between LULC and riverine
								flood potential changes.
							</List.Item>
						</List>
					</List.Item>
				</List>

			</Container>
		</Skeleton>
	);
}

export default Publications;