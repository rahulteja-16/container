import React from 'react'
import {
	HeaderWrapper,
	Nav,
	Anchor,
	LogoWrapper,
	ImageWrapper,
	ActionsWrapper,
	Label,
} from './style'
import NameLogo from '../../Assets/name.png'
// import Button from '../Button'
// eslint-disable-next-line import/no-unresolved
const Button = React.lazy(() => import('componentLibrary/Button'))
import { staticText } from '../../Constants/Static'

interface HeaderProps {
	label: string
}

const Header = ({ label }: HeaderProps) => {
	return (
		<React.Suspense fallback="Loading...">
			<HeaderWrapper>
				<Nav>
					<LogoWrapper>
						<Anchor>
							<ImageWrapper
								src={NameLogo}
								alt={staticText.NAME_LOGO_ALT}
							/>
						</Anchor>
						<Label>{label}</Label>
					</LogoWrapper>
					<ActionsWrapper>
						<Button>{staticText.RESUME}</Button>
					</ActionsWrapper>
				</Nav>
			</HeaderWrapper>
		</React.Suspense>
	)
}

export default Header
