import React, { PropTypes } from 'react'
import { parseNumber, formatNumber } from '../NumberUtils'

class NumberTextInput extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    parseNumber: PropTypes.func,
    formatNumber: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    value: 0,
    parseNumber,
    formatNumber
  }

  componentWillMount = () =>
    this.setState({ value: this.props.value })

  handleChange = (event) => {
    const value = this.props.parseNumber(event.target.value)

    this.setState({ value }, () => {
      if (this.props.onChange)
        this.props.onChange(value)
    })
  }

  render = () => {
    const { value } = this.state
    const { parseNumber, formatNumber, ...props } = this.props
    const displayValue = formatNumber(value)

    return (
      <input {...props} type="text" value={displayValue} onChange={this.handleChange}/>
    )
  }
}

export default NumberTextInput
