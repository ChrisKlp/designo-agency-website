import { useEffect, useState } from 'react'

const useDetectOutsideClick = (el, initialState) => {
  const [active, setActive] = useState(initialState)

  useEffect(() => {
    const onClick = e => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setActive(!active)
      }
    }
    if (active) {
      window.addEventListener('click', onClick)
    }
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [active, el])

  return [active, setActive]
}

export default useDetectOutsideClick
