import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView, { props: { msg: '歡迎來到無障礙網站' } })
    expect(wrapper.text()).toContain('歡迎來到無障礙網站')
  })
})
