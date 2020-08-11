import React from 'react'

import UxiSurface, {config} from './index'

export default {
  title: '🦊 UXI / Surface',
  component: UxiSurface,
  args: {
    children: 'UXI Surface content'
  },
  argTypes: {
    elevation: {
      control: {
        type: 'select',
        options: [0, ...config.elevations]
      }
    }
  }
}

const Template = (args) => <UxiSurface {...args}/>

export const Default = Template.bind({})
Default.args = {
  action: false,
  elevation: 1
}


