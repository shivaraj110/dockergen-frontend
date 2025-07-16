import { useEffect, useState } from "react"
interface dockerfileProps {
  framework: string
  database: string
  env: 'production' | 'development'
  orm: string
  version: string
}
export const useDockerfile = (prop: dockerfileProps) => {
  const [dockerfile, setDockerfile] = useState("")
  useEffect(() => {
    fetch('http://localhost:3000/chat',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          framework: prop.framework,
          database: prop.database,
          orm: prop.orm,
          env: prop.env,
          version: prop.version
        })
      }).then((res => { res.json().then(json => setDockerfile(json.dockerfile)) }))
  }, [])
  return dockerfile
}
