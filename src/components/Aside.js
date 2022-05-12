import styled from 'styled-components';

const Aside = () => {
  return (
    <aside>
      <AsideHeader>
        Hello
      </AsideHeader>
    </aside>
  )
}


const AsideHeader = styled.div`
  background-color: maroon;
  color: white;
`;

export { Aside }

