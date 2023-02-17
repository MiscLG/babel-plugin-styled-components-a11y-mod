import styled from 'styled-components'

// Should generate a warning (Ambiguous use case)
const ambiguous = styled.img`
  width: 100%;
  height: 10rem;
`

// Should not generate any warnings (This is not how components are used in reality)
const wellDefined = styled.img.attrs({ alt: "this is a test image" })`
  width: 100%;
  height: 10rem;
`;
