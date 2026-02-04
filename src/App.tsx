import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Ola mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Este é um aplicativo React simples. Ele inclui um componente de título
        estilizado usando CSS Modules e uma folha de estilos global que define a
        cor do texto do título usando uma variável CSS personalizada.
      </p>
    </>
  );
}
