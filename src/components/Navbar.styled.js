import styled from 'styled-components';

export const NavBarContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  background: lightblue;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
export const TitlePosition = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Text = styled.h2`
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const StyledList = styled.ul`
  /* list-style: none; */
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const StyledListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
`;

export const TechListItem = styled.li`
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
`;

export const StyledLink = styled.a`
  color: inherit;
`;

export const StyledIcon = styled.i`
  margin-right: 10px;
`;
