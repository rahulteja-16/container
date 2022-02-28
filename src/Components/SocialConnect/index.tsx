import { staticText } from '../../Constants/Static'
import GitHubIcon from '../Icons/GithubIcon'
import InstaIcon from '../Icons/InstaIcon'
import LinkedIcon from '../Icons/LinkedInIcon'
import TwitterIcon from '../Icons/TwitterIcon'
import { ConnectWrapper, Link, SocialList } from './style'

const SocialConnect = () => {
	return (
		<ConnectWrapper>
			<SocialList>
				<li>
					<Link
						target="_blank"
						href={staticText.GITHUB_LINK}
						rel="noreferrer"
					>
						<GitHubIcon />
					</Link>
				</li>
				<li>
					<Link
						target="_blank"
						href={staticText.LINKEDIN_LINK}
						rel="noreferrer"
					>
						<LinkedIcon />
					</Link>
				</li>
				<li>
					<Link
						target="_blank"
						href={staticText.TWITTER_LINK}
						rel="noreferrer"
					>
						<TwitterIcon />
					</Link>
				</li>
				<li>
					<Link
						target="_blank"
						href={staticText.INSTA_LINK}
						rel="noreferrer"
					>
						<InstaIcon />
					</Link>
				</li>
			</SocialList>
		</ConnectWrapper>
	)
}

export default SocialConnect
