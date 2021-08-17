import { Component } from 'react'
import './Visualizer.css'
import Node from './Node'

type Props = {}
type Style = {}

class Visualizer extends Component<Props, Style> {
  render (): JSX.Element {
    return (
            <div>
                <Node row={5} col={10} />
            </div>
    )
  }
}

export default Visualizer
