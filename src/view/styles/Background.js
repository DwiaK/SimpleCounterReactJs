import { createGlobalStyle } from 'styled-components';

export const BackgroundApplication = createGlobalStyle`
    body {
        background-color: ${props => (props.darkStyle? '#242424' : 'white' ) }
    }
`;