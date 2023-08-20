export const reactComponentStyledTemplate = (
    name: string
) => `import styled from "styled-components";

export const S${name} = styled.div${'``'};
`;
