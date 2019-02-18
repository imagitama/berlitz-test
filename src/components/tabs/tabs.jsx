import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'
import sizes from '../../sizes'

const TabsWrapper = styled.ul({
  listStyle: 'none',
  padding: `0 ${sizes.bodyTextPadding}`,
  margin: `0 0 ${sizes.large}`,
  borderBottom: `${sizes.border} solid ${colors.muted}`
})

const Tab = styled.li(({ isSelected }) => ({
  listStyle: 'none',
  color: isSelected ? colors.primaryText : colors.secondaryText,
  borderBottom: isSelected ? `0.1rem solid ${colors.highlight}` : null,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  display: 'inline-block',
  padding: sizes.default,
  marginBottom: '-0.1rem'
}))

const TabContents = styled.div({
  padding: `0 ${sizes.bodyTextPadding}`,
  lineHeight: 1.7
})

const Tabs = ({ tabs, selectedTab, selectTab }) =>
  <div>
    <TabsWrapper>
      {tabs.map(({ id, label }) => 
        <Tab key={id} isSelected={selectedTab === id} onClick={() => selectTab(id)}>{label}</Tab>)}
    </TabsWrapper>
    {tabs
      .filter(({ id }) => selectedTab === id)
      .map(({ id, contents }) => 
        <TabContents key={id}>{contents}</TabContents>)}
  </div>

export default Tabs