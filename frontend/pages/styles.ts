import styled from 'styled-components'

export const Container = styled.div`
    width: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    >img{
        width: 15rem;
    }

`;

export const ContainerHead = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;

    >button {
            background-color: #6C63FF;
        }
`;

export const Loading = styled.div`
    height: 65%;

`;