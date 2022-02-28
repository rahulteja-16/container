import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
		--gray-100: #495670;
		--gray-200: #8892b0;
		--gray-300: #a8b2d1;
		--gray-400: #ccd6f6;

		--text-100: #E7E7E7;
		--text-200: #B7B7B7;
		--text-300: #707070;
		--text-400: #282828;

		--bg-primary: #1C1C1C;

		--orange: #e8a255;
		--orange-tint: rgba(232, 162, 85, 0.1);
		--font-sans: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
		--font-mono: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
		--easing: cubic-bezier(0.645,0.045,0.355,1);
		--transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    }

	html {
		--fs-xxs: 12px;
		--fs-xs: 14px;
		--fs-sm: 16px;
		--fs-md: 18px;
		--fs-lg: 20px;
		--fs-xl: 22px;
		--fs-xxl: 24px;
		--fs-heading: 32px;
		--border-radius: 4px;
		--fw-md: 500;
		--fw-lg: 600;
		--hg-xs: 20px;
		--hg-sm: 24px;
		--hg-md: 32px;
		--hg-lg: 40px;
		--hg-xl: 60px;
		--hg-xxl: 74px;

		box-sizing: border-box;
		width: 100%;
		scroll-behavior: smooth;
	}


	body {
        margin: 0px;
        padding: 0;
		background-color: var(--bg-primary);
		width: 100%;
		min-height: 100%;
		overflow-x: hidden;
		color: var(--gray-200);
		font-family: var(--font-sans);
		font-size: var(--fz-xl);
		line-height: 1.3;
    }

	*::-webkit-scrollbar {
		width: 1em;
	}
	
	
	*::-webkit-scrollbar-thumb {
		// background-color: var(--blue-60);
		// outline: 1px solid var(--blue-60);
		border-radius: var(--border-radius);
	}

	a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		color: inherit;
		position: relative;
		transition: var(--transition);
	}

	a:hover, a:focus {
		color: var(--orange);
	}


    h1,h2,h3,h4,h5,h6 {
        margin-top: 0;
        margin-bottom: 0;
    }

	*, ::before, ::after {
		box-sizing: inherit;
	}

	section {
		margin: 0px auto;
		padding: 100px 0px;
	}
`

export default GlobalStyles
