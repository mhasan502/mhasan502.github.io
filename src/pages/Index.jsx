import Skeleton from "../components/Skeleton.jsx";

const Index = () => {
	return (
		<Skeleton>
			Navbar is only visible on mobile, links that are rendered in the header on desktop are
			hidden on mobile in header and rendered in navbar instead.
		</Skeleton>
	);
}

export default Index;