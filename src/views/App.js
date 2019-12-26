import React from 'react'
import {
	CssBaseline,
	Container,
	ThemeProvider,
	createMuiTheme,
	responsiveFontSizes,
} from '@material-ui/core'
import { Hero, CurriculumVitae } from '../components'
const App = () => (
	<ThemeProvider theme={responsiveFontSizes(createMuiTheme())}>
		<Container>
			<CssBaseline />
			<Hero />
			<CurriculumVitae />
		</Container>
	</ThemeProvider>
)

export default App
