import React from 'react'
import Form from 'react-jsonschema-form'

class TodoForm extends React.Component {
  schema = {
    title: 'TO-DO Form',
    type: 'object',
    required: ['title'],
    properties: {
      title: {type: 'string', title: 'Title', default: 'A new task'},
      done: {type: 'boolean', title: 'Done?', default: false}
    }
  }

  formData = {
    title: 'First task',
    done: true
  }

  uiSchema = {
    done: {
      'ui:widget': 'radio'
    }
  }

  log = (type) => console.log.bind(console, type)

  render () {
    return (
      <Form className='animated slideInRight' schema={this.schema}
        uiSchema={this.uiSchema}
        formData={this.formData}
        onChange={this.log('changed')}
        onSubmit={this.log('submitted')}
        onError={this.log('errors')} />
    )
  }
}

export default TodoForm
