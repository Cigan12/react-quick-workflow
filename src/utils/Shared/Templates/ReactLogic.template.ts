export const logicTemplate = (name: string) => `import React from 'react';

interface I${name}LogicProps {
}

export const L${name} = (): I${name}LogicProps => {}`;
