import { ReactChild, ReactChildren, useEffect, useState } from 'react'
import EmailConnect from '../../Components/EmailConnect'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import SocialConnect from '../../Components/SocialConnect'
import GlobalStyles from '../../Styles/GlobalStyles'
import { MainSection } from './style'
import { useTransition, animated } from 'react-spring'

interface HolderProps {
	children: ReactChild | ReactChildren
	label: string
}

const Container = ({ children, label }: HolderProps) => {
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		setIsLoading(false)
	}, [])

	const transition = useTransition(isLoading, {
		config: { mass: 1, tension: 80, friction: 18 },
		from: { x: 0, y: 600, opacity: 0, delay: 400 },
		enter: { x: 0, y: 0, opacity: 1, delay: 400 },
		leave: { x: 0, y: 600, opacity: 0, delay: 400 },
	})

	return (
		<>
			<GlobalStyles />
			<div>
				<Header label={label} />
				{transition((style: any, item: any) =>
					!item ? (
						<animated.div style={style}>
							<SocialConnect />
							<EmailConnect />
							<div id="content">
								<MainSection>
									<section>{children}</section>
								</MainSection>
								<Footer />
							</div>
						</animated.div>
					) : (
						''
					)
				)}
			</div>
		</>
	)
}

export default Container
