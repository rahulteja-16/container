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
						href="https://github.com/rahulteja-dev"
						rel="noreferrer"
					>
						<GitHubIcon />
					</Link>
				</li>
				<li>
					<Link
						target="_blank"
						href="https://www.linkedin.com/in/rahulteja/"
						rel="noreferrer"
					>
						<LinkedIcon />
					</Link>
				</li>
				<li>
					<Link
						target="_blank"
						href="https://twitter.com/rahultejadev"
						rel="noreferrer"
					>
						<TwitterIcon />
					</Link>
				</li>
				<li>
					<Link
						target="_blank"
						href="https://www.instagram.com/rahulteja16/"
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
