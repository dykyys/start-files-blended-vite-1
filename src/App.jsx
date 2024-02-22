import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
