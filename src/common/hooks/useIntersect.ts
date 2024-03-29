import { useEffect, useRef, useState } from 'react'

export default ({
  root = null,
  rootMargin,
  threshold = 0,
}: {
  root?: any
  rootMargin?: string
  threshold: number
}): any => {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState<Element | null>(null)

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold,
    }),
  )

  useEffect(() => {
    const { current: currentObserver } = observer
    currentObserver.disconnect()

    if (node) currentObserver.observe(node)

    return (): void => currentObserver.disconnect()
  }, [node])

  return [setNode, entry]
}
