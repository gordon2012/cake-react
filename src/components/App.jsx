import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './Hello';

const App = () => <div>
    <h1>Cake React</h1>
    <Hello greetee="World"/>
    <Hello greetee="Cake"/>
    <Hello greetee="React"/>
</div>
export default App;
