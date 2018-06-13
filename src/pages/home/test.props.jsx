import React from 'react'
import PropTypes from 'prop-types'
export default function TestProps (props) {
  return <div>{props.title}</div>
}

TestProps.propTypes = {
  title: PropTypes.string
}
TestProps.defaultProps = {
  title: 'default title'
}
