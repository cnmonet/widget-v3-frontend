import React, { memo } from 'react'
import styled from 'styled-components'

import { checkBy } from 'UTILS/theme'
import { SwLayoutOptions } from 'TYPES/Widget'

import Main from 'CONTAINERS/UiManager/Main'
import Carousel from 'CONTAINERS/UiManager/Carousel'
import Tile from 'CONTAINERS/UiManager/Tile'
import Chart from 'CONTAINERS/UiManager/Chart'

import SvgIcon from 'COMPONENTS/base/SvgIcon'
import Typography from 'COMPONENTS/base/Typography'

const getUI: (type: string) => React.ElementType = type => {
  switch (type) {
    case 'main':
      return Main
    case 'carousel':
      return Carousel
    case 'tile':
      return Tile
    case 'chart':
      return Chart
    default:
      return () => null
  }
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
`

const Link = styled.a`
  /* stylelint-disable */
  color: ${checkBy('color', {
    textPrimary: (props: any) => props.theme.palette.text.primary,
    textSecondary: (props: any) => props.theme.palette.text.secondary,
    inherit: 'inherit'
  })};
  text-decoration: none;
  /* color: #ffffff; */
  font-size: 12px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Icon = styled(SvgIcon)`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`

interface UiManagerProps {
  config: SwLayoutOptions
}

const UiManager: React.FC<UiManagerProps> = props => {
  const { config } = props

  return (
    <>
      {config.map((item, index) => {
        const { UIType } = item

        const Component = getUI(UIType)

        return <Component key={index} options={item} />
      })}
      <LogoContainer className="sw-ui-brand">
        <Link
          target="_blank"
          color="textPrimary"
          href="//seniverse.com?source=widget"
        >
          <Icon name="logo" />
          <Typography variant="caption">数据服务来自心知天气</Typography>
        </Link>
      </LogoContainer>
    </>
  )
}

export default memo(UiManager)
