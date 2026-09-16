import './App.css'
import Nav from './components/nav'
import Banner from './components/banner'
import { useEffect, useState } from 'react'
import Data from './components/data'
import type { Stack } from './components/type'
import Footer from './components/Footer'

function App() {
  const [stack, setStack] = useState<Stack[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data.json`)

        if (!response.ok) {
          throw new Error(`Could not load data.json (${response.status})`)
        }

        const data: Stack[] = await response.json()
        setStack(data)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Could not load technologies'
        )
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <>
      <Nav />
      <Banner />

      {loading && <div className="p-8 text-center">Loading technologies...</div>}

      {error && (
        <div className="p-8 text-center text-red-600">
          {error}
        </div>
      )}

      {!loading && !error && <Data data={stack} />}

      <Footer />
    </>
  )
}

export default App
