import React, { useEffect, useState } from 'react'
import {
  BannerContainer,
  BannerText,
  Slide,
  SlideContainer,
  Controls,
  Button
} from './BannerStyles'
import { Icon } from '@iconify/react'

const Banner = () => {
  const Images = [
    {
      path:
        'https://res.cloudinary.com/epiphanystudios/image/upload/v1474325161/Billboard_-_AnalyticsBanner_s0vsiv.jpg',
      alt: 'Image 1',
      text: '15% de descuento'
    },
    {
      path:
        'https://res.cloudinary.com/epiphanystudios/image/upload/v1474389520/Billboard_-_HipsterBanner_rzyv5r.jpg',
      alt: 'Image 2',
      text: '15% de descuento'
    },
    {
      path:
        'https://res.cloudinary.com/epiphanystudios/image/upload/v1474389522/Billboard_-_ProductsBanner_kfucs3.jpg',
      alt: 'Image 3',
      text: '15% de descuento'
    }
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(Images[0])

  const selectNewImage = (index, image, next = true) => {
    const condition = next
      ? selectedIndex < Images.length - 1
      : selectedIndex > 0
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
        ? selectedIndex - 1
        : Images.length - 1
    setSelectedImage(Images[nextIndex])
    setSelectedIndex(nextIndex)
  }
  const previous = () => {
    selectNewImage(selectedIndex, Images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, Images)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 15000)
    return () => clearInterval(interval)
  })

  return (
    <>
      <BannerContainer>
        <SlideContainer>
          <Slide>
            <img src={selectedImage.path} alt={selectedImage.title} />
            <BannerText>
              <p>{selectedImage.text}</p>
            </BannerText>
          </Slide>
        </SlideContainer>
        <Controls>
          <Button onClick={previous}>
            <Icon
              icon='akar-icons:circle-chevron-left'
              font-size='3rem'
              color='black'
            />
          </Button>
          <Button right onClick={next}>
            <Icon
              icon='akar-icons:circle-chevron-right'
              font-size='3rem'
              color='black'
            />
          </Button>
        </Controls>
      </BannerContainer>
    </>
  )
}

export default Banner
