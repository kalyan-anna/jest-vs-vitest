import { kebabCase } from 'lodash-es';

export const StringKebabCase = () => {
  return <div style={{ marginTop: '50px' }}>{kebabCase('Foo Bar')}</div>;
};
