import styled from "styled-components";

export const ReportContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const Highlights = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 700;
`;

export const Italic = styled.span`
  font-style: italic;
`;

export const Paragraf = styled.p`
  margin: 1rem 0;
  line-height: 1.2rem;
  text-indent: 2rem; 
}
`;

export const List = styled.ul`
  list-style: square;
  margin-left: 2rem;
`;

export const ListItem = styled.li``;
