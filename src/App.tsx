import * as React from 'react';
import ToolTipRenderComponent from './components/Tooltip';

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <ToolTipRenderComponent />
      </>
    );
  }
}

export default App;