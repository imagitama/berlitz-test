import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'

const TabsWrapper = styled.ul({
  listStyle: 'none'
})

const Tab = styled.li(({ isSelected }) => ({
  listStyle: 'none',
  color: isSelected ? colors.primaryText : colors.secondaryText,
  borderBottom: isSelected ? `0.1rem solid ${colors.highlight}` : null,
  textTransform: 'uppercase',
  fontWeight: 'bold'
}))

const Tabs = ({ tabs, selectedTab, selectTab }) =>
  <div>
    <TabsWrapper>
      {tabs.map(({ id, label }) => <Tab key={id} isSelected={selectedTab === id} onClick={() => selectTab(id)}>{label}</Tab>)}
    </TabsWrapper>
    {tabs.filter(({ id }) => selectedTab === id).map(({ id, contents }) => <div key={id}>{contents}</div>)}
  </div>

export default Tabs