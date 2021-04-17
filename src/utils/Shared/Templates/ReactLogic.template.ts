export const logicTemplate = (name: string) => `import React from 'react';

interface I${name}LogicProps {
}

export const L${name} = (props: I${name}LogicProps) => {}`;
