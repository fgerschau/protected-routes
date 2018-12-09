import * as React from 'React';

interface TestComponentProps {
  id?: string;
}

class TestComponent extends React.Component<TestComponentProps> {
  render() {
    return (
      <div id={this.props.id || 'test-component'} />
    );
  }
}

export default TestComponent;
