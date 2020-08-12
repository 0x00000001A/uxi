import React from 'react'

import UxiGrid from './index'

export default {
  title: '🦊 UXI / Grid',
  component: UxiGrid,
  args: {
    children: (
      <UxiGrid isRow>Something</UxiGrid>
    )
  },
  argTypes: {
  }
}

const Template = (args) => <UxiGrid {...args}/>

export const Default = Template.bind({})
Default.args = {
  action: false,
  elevation: 1
}


