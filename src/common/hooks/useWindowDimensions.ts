import { useEffect, useState } from 'react'

interface Dimensions {
  width: number
  height: number
}

const getWindowDimensions = (): Dimensions => {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

export default function useWindowDimensions(): Dimensions {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
