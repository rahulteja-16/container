import { staticText } from '../../Constants/Static'
import { EmailWrapper, Link, Position } from './style'

const EmailConnect = () => {
	return (
		<EmailWrapper>
			<Position>
				<Link href={staticText.EMAIL_TO}>{staticText.EMAIL}</Link>
			</Position>
		</EmailWrapper>
	)
}

export default EmailConnect
