import React from 'react'

export default function Job({job}) {
	return (
		<div className={'job'}>

			{job.title}
			<br />
			{job.company}

		</div>
	)
}