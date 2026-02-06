import type React from 'react';

type DefaultInputProps = {
  type: 'text' | 'number' | 'search';
} & React.ComponentProps<'input'>;

export function DefaultInput({ type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor='meuInput'>task</label>
      <input id='meuInput' type={type} />
    </>
  );
}
