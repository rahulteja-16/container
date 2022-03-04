import { staticText } from '../../Constants/Static'
import GitHubIcon from '../Icons/GithubIcon'
import InstaIcon from '../Icons/InstaIcon'
import LinkedIcon from '../Icons/LinkedInIcon'
import TwitterIcon from '../Icons/TwitterIcon'
import { ConnectWrapper, LI, Link, SocialList } from './style'

const SocialConnect = () => {
	return (
		<ConnectWrapper>
			<SocialList>
				<LI>
					<Link
						target="_blank"
						href={staticText.GITHUB_LINK}
						rel="noreferrer"
					>
						<GitHubIcon />
					</Link>
				</LI>
				<LI>
					<Link
						target="_blank"
						href={staticText.LINKEDIN_LINK}
						rel="noreferrer"
					>
						<LinkedIcon />
					</Link>
				</LI>
				<LI>
					<Link
						target="_blank"
						href={staticText.TWITTER_LINK}
						rel="noreferrer"
					>
						<TwitterIcon />
					</Link>
				</LI>
				<LI>
					<Link
						target="_blank"
						href={staticText.INSTA_LINK}
						rel="noreferrer"
					>
						<InstaIcon />
					</Link>
				</LI>
			</SocialList>
		</ConnectWrapper>
	)
}

export default SocialConnect
