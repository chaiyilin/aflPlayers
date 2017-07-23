import styled from 'styled-components'

export const BaseDiv = styled.div`
    margin: auto;
    height: 100%;
    width:100%;
    padding-left: 1em;
    padding-right: 1em;
    outline: 1px solid;
    outline-color:DarkGray;
    display: flex;
    flex-direction:row;
    align-items: center;
    background: rgba(255,0,0,0);
    ${props => props.isMobile ? 'justify-content:center' : ''};
    `

export const BaseDivWithBlueFont = BaseDiv.extend`
    color:blue;
    outline:0;
    padding-left: 0;
    padding-right: 0;
`

export const ItemLeft = styled.div`
align-self: flex-start;
`
export const ItemRight = styled.div`
align-self: flex-end;
`