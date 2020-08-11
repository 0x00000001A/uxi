import React from 'react'

import UxiRipple from './index'

export default {
  title: '🦊 UXI / Ripple',
  component: UxiRipple,
  args: {
    children: 'UXI Surface content'
  },
  argTypes: {}
}

const Template = (args) => <UxiRipple {...args}/>

export const Default = Template.bind({})
Default.args = {
}


