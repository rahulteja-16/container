import { ReactChild, ReactChildren } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import GlobalStyles from '../../Styles/GlobalStyles'
import { MainSection } from './style'

interface HolderProps {
	children: ReactChild | ReactChildren
}

const Container = ({ children }: HolderProps) => {
	return (
		<>
			<GlobalStyles />
			<div>
				<Header />
				<div id="content">
					<MainSection>
						<section>{children}</section>
					</MainSection>
					<Footer />
				</div>
			</div>
		</>
	)
}

export default Container
