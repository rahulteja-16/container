import styled from 'styled-components'

export const ConnectWrapper = styled.div`
	width: 40px;
	position: fixed;
	left: 260px;
	z-index: 10;
	color: var(--grey-300);
	transform: rotate(90deg);
`

export const SocialList = styled.ul`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	margin: 0px;
	padding: 0px;
	list-style: none;

	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0px auto;
		background-color: var(--gray-300);
	}
`

export const LI = styled.li`
	transform: rotate(270deg);
`

export const Link = styled.a`
	padding: 10px;

	&:hover {
		transform: translateY(-3px);
	}
`
