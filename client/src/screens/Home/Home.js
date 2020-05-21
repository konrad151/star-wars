import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Products from '../../components/Products/Products'

const Home = () => {
	return (
		<main>
			<Container>
				<Row>
					<Col>
						<Products />
					</Col>
				</Row>
			</Container>
		</main>
	);
};

export default Home;