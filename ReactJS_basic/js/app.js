/*2024/01/15-17:39*/
import '../src/react18.development'
import { Header } from './header'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div>
            <Header />
        </div>
    }
}

export default App