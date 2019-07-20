// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Counter from './counter'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
	// 现在挂载组件，你便得到了这个包裹器
	/**
	 * 用mount包裹组件 
	 * 被挂载的组件会返回到一个包裹器内，而包裹器会暴露很多封装、遍历和查询其内部的 Vue 组件实例的便捷的方法。
	 */
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">1</span>')
  })

  // it's also easy to check for the existence of elements
	// 也便于检查已存在的元素
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).toBe(1)
		const button = wrapper.find('button')
		// 点击一下button  vm.count+1
    button.trigger('click')
    expect(wrapper.vm.count).toBe(2)
  })
})
