import { shallowMount } from '@vue/test-utils'
import EditTodo from '@/components/EditTodo.vue'

describe('EditTodo.vue', () => {
  it('renders props.todo when passed', () => {
    const todo = { id: 1, text: 'Test Todo' }
    const wrapper = shallowMount(EditTodo, {
      propsData: { todo }
    })
    expect(wrapper.find('input').element.value).toBe(todo.text)
  })

  it('emits save event with updated todo on saveEdit', async () => {
    const todo = { id: 1, text: 'Test Todo' }
    const wrapper = shallowMount(EditTodo, {
      propsData: { todo }
    })
    wrapper.setData({ editedText: 'Updated Todo' })
    await wrapper.vm.saveEdit()
    expect(wrapper.emitted().save[0]).toEqual([{ id: todo.id, text: 'Updated Todo' }])
  })

  it('emits cancel event on cancelEdit', async () => {
    const todo = { id: 1, text: 'Test Todo' }
    const wrapper = shallowMount(EditTodo, {
      propsData: { todo }
    })
    await wrapper.vm.cancelEdit()
    expect(wrapper.emitted().cancel).toBeTruthy()
  })
})