import React from 'react'
import {
	HeaderWrapper,
	Nav,
	Anchor,
	LogoWrapper,
	ImageWrapper,
	ActionsWrapper,
} from './style'
import NameLogo from '../../Assets/name.png'

// eslint-disable-next-line import/no-unresolved
const Button = React.lazy(() => import('componentLibrary/Button'))
import { staticText } from '../../Constants/Static'
import SocialConnect from '../SocialConnect'

const Header = () => {
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
						<SocialConnect />
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
