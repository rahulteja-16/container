import { staticText } from '../../Constants/Static'
import { FooterWrapper, TextPosition } from './style'

const Footer = () => {
	return (
		<FooterWrapper>
			<TextPosition>
				<div>{staticText.FOOTER_INFO}</div>
			</TextPosition>
		</FooterWrapper>
	)
}

export default Footer
