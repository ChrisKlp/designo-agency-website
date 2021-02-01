import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const useFluidImage = (imageArr, imageXL) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1049 })
  const isDesktop = useMediaQuery({ minWidth: 1050 })
  const [fluidImage, setFluidImage] = useState(
    imageArr[0].childImageSharp.fluid
  )

  useEffect(() => {
    switch (true) {
      case isMobile:
        return setFluidImage(imageArr[0].childImageSharp.fluid)
      case isTablet:
        return setFluidImage(imageArr[1].childImageSharp.fluid)
      case isDesktop:
        if (imageXL) {
          return setFluidImage(imageXL.childImageSharp.fluid)
        } else {
          return setFluidImage(imageArr[2].childImageSharp.fluid)
        }
      default:
        return setFluidImage(imageArr[0].childImageSharp.fluid)
    }
  }, [isDesktop, isTablet, isMobile])

  return fluidImage
}

export default useFluidImage
