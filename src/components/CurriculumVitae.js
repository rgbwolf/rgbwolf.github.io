import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import Markdown from 'markdown-to-jsx'
import cvPath from './cv.md'
const CurriculumVitae = () => {
	const [cv, setCv] = useState('loading...')
	useEffect(() => {
		fetch(cvPath)
			.then(response => response.text())
			.then(content => setCv(content))
	})
	return <Markdown>{cv}</Markdown>
}

export default CurriculumVitae
