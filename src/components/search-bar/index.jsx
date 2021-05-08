import React, { PureComponent } from 'react';
import { AtSearchBar } from 'taro-ui'

class Index extends PureComponent {
  constructor () {
    super (...arguments)
    this.state = {
      value: ''
    }
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }

  render() {
      return (
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
      );
  }
}

export default Index;
