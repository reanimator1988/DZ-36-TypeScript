import React from 'react';
import { Provider } from 'react-redux';
import store from './components/Store';
import ShoppingList from './components/ShoppingList';
import './App.scss';


const App = () => (
    <Provider store={store}>
        <div>
            <h1>ДЗ 35. Список покупок Pro</h1>
            <div className="app-container">
                <h2 className="app-title">Список покупок:</h2>
                <ShoppingList />
            </div>
        </div>
    </Provider>
);

export default App;
