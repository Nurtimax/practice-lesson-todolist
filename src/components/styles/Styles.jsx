import styled from "styled-components";

const TodoListStyle = styled.div`
  text-decoration: ${(props) => (props.isValid ? "" : "line-through")};
`;

const CardStyle = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid;
`
export { TodoListStyle, CardStyle };
