import React from 'react'
import { CarouselUI, Content } from 'TYPES/Carousel'
import { BaseUiLayoutOption } from 'TYPES/Widget'
import TileContainer from 'COMPONENTS/base/TileContainer'
import Typography from 'COMPONENTS/base/Typography'
import SvgIcon from 'COMPONENTS/base/SvgIcon'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px 0;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`

const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
`

const Card = styled.div`
  flex: 0 0 38%;
  margin-right: 1%;
  margin-left: 1%;
  border-radius: 2px;
  box-shadow: 1px 1px 20px 0 rgba(24, 24, 24, 0.05);
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  box-sizing: border-box;
  transition: all 100ms;

  &:hover {
    box-shadow: 2px 2px 30px 0 rgba(24, 24, 24, 0.19);
  }
`

const CardTitle = styled(Typography)`
  flex: 0 0 1rem;
`

const CardContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

interface CarouselUiProps {
  options: BaseUiLayoutOption
}

const Carousel: React.FC<CarouselUiProps> = props => {
  const { options } = props
  const { data, size } = options
  const [column, row] = size

  const getPrefix = (item: Content) => {
    return item.type === 'icon' ? (
      <SvgIcon
        width="2rem"
        height="2rem"
        className="sw-ui-carousel-icon"
        name={item.text}
      />
    ) : (
      <Typography
        variant="caption"
        className="sw-ui-carousel-text"
        component="span"
      >
        {item.text}
      </Typography>
    )
  }

  return (
    <TileContainer className="sw-ui-carousel" column={column} row={row}>
      <Container>
        <CardWrapper>
          {(data as CarouselUI).map((item, index) => {
            return (
              <Card key={index}>
                <CardTitle variant="caption" className="sw-ui-carousel-header">
                  {item.header}
                </CardTitle>
                <CardContent>
                  {getPrefix(item.content[0])}
                  <Typography
                    variant="caption"
                    className="sw-ui-carousel-suffix"
                    component="span"
                  >
                    {item.content[0].suffix}
                  </Typography>
                </CardContent>
              </Card>
            )
          })}
        </CardWrapper>
      </Container>
    </TileContainer>
  )
}

export default Carousel
