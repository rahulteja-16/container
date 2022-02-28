import styled from 'styled-components'

export const EmailWrapper = styled.div`
	width: 40px;
	position: fixed;
	bottom: 0px;
	left: auto;
	right: 40px;
	z-index: 10;
	color: var(--gray-300);
`

export const Position = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	position: relative;

	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0px auto;
		background-color: var(--gray-300);
	}
`
export const Link = styled.a`
	margin: 20px auto;
	padding: 10px;
	font-family: var(--font-mono);
	font-size: var(--fz-xxs);
	line-height: var(--fs-md);
	letter-spacing: 0.1em;
	-webkit-writing-mode: vertical-rl;
	writing-mode: vertical-rl;

	&:hover {
		transform: translateY(-3px);
	}
`
