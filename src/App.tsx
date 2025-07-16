import { useState } from 'react'
import './App.css'
import { useDockerfile } from './useDockerfile'
import { CodeBlock } from './components/CodeBlock'

function App() {
	const [framework, setFramework] = useState<string>('vite + react')
	const [version, setVersion] = useState<string>('1.0.0')
	const [env, setEnv] = useState<'development' | 'production'>('development')
	const [database, setDatabase] = useState<string>('postgresql')
	const [orm, setOrm] = useState<string>('prisma')
	const dockerfile = useDockerfile({ framework, version, env, database, orm })
	return (
		<div>
			<h2>Dockergen</h2>
			<CodeBlock>{dockerfile}</CodeBlock>
		</div>

	)
}

export default App
