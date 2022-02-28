import { ReactChild, ReactChildren } from 'react'
import EmailConnect from '../../Components/EmailConnect'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import SocialConnect from '../../Components/SocialConnect'
import GlobalStyles from '../../Styles/GlobalStyles'
import { MainSection } from './style'

interface HolderProps {
	children: ReactChild | ReactChildren
	label: string
}

const Container = ({ children, label }: HolderProps) => {
	// const device = useDeviceType()
	// useEffect(() => {
	// 	document.body.dataset.device = device
	// }, [device])

	return (
		<>
			<GlobalStyles />
			<div>
				<Header label={label} />
				<SocialConnect />
				<EmailConnect />
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
