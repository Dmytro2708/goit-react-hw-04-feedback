
import { Title, Container } from "./Section.styled";

export function Section ({ title, children }) {
return (
<Container>
    <Title>{title}</Title>
{children}
</Container>
);
}
