import {Component} from 'react';

type Props = {}
type Style = {}

class Node extends Component<Props, Style>{
    render(): JSX.Element {
        return(
            <div>
                Hello World
            </div>
        )
    }

}

export default Node;