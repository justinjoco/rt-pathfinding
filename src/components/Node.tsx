import { Component } from 'react'
import './Node.css'

type Props = {}
type Style = {}

class Node extends Component<Props, Style> {
  render (): JSX.Element {
    return (
            <div>
                <div className="Node" style={{ width: 80, height: 60 }}/>
            </div>
    )
  }
}

export default Node
