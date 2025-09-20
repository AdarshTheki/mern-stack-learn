import Zustand from './zustand/Zustand';
import Redux from './redux/Redux';
import Context from './context/Context';
import ReduxToolkit from './redux-toolkite/ReduxToolkit';
import { useState } from 'react';

const App = () => {
  const stateTypes = [
    {
      id: 'useState',
      title: '1. useState (Local State)',
      label: 'Best for simple, local component states.',
    },
    {
      id: 'useContext',
      title: '2. useContext (Prop Drilling Solution)',
      label: 'Best for global state without external libraries.',
    },
    {
      id: 'simple redux',
      title: '3. Simple Redux (Manual Setup)',
      label: 'Best for large predictable apps (but verbose).',
    },
    {
      id: '@redux/toolkit',
      title: '4. Redux Toolkit (@reduxjs/toolkit)',
      label: 'Best for modern Redux apps (removes boilerplate).',
    },
    {
      id: 'zustand',
      title: '5. Zustand (Lightweight State Manager)',
      label: 'Best for small-to-medium apps, simpler than Redux.',
    },
  ];

  const [state, setState] = useState('zustand');

  const renderComponent = () => {
    switch (state) {
      case 'zustand':
        return <Zustand />;
      case 'simple redux':
        return <Redux />;
      case 'useContext':
        return <Context />;
      case '@redux/toolkit':
        return <ReduxToolkit />;
      default:
        return <h2 className='py-10 text-xl'>Empty</h2>;
    }
  };

  return (
    <div className='mx-auto max-w-4xl p-4'>
      <h2 className='text-2xl font-semibold'>State Management Todo Lists</h2>
      <p>
        This is a state management with simple used <em>useState</em>, <em>Redux</em>,{' '}
        <em>Redux ToolKite</em> & <em>Zustand</em> in typescript used.
      </p>

      <div className='flex items-center gap-4 flex-wrap my-4'>
        {stateTypes.map((it) => (
          <button
            onClick={() => setState(it.id)}
            className={`capitalize ${state !== it.id && '!bg-gray-200 !text-gray-900'}`}>
            {it.id}
          </button>
        ))}
      </div>

      <p className='font-semibold text-xl'>{stateTypes.find((i) => i.id === state)?.title}</p>
      <p>{stateTypes.find((i) => i.id === state)?.label}</p>

      {renderComponent()}
    </div>
  );
};

export default App;
