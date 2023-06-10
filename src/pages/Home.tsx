import { Button, Title } from "@mantine/core";

const Home = () => {
  return (
    <>
      <Title color="_yourDarkness">Data tailored to your needs.</Title>
      <Button
        bg="_seaGreen"
        size="lg"
        styles={theme => ({
          label: {
            color: theme.colors._yourDarkness[6],
            "&:hover": {
              color: theme.colors._seaGreen[6],
            },
          },
          root: {
            "&:hover": {
              backgroundColor: theme.colors._yourDarkness[6],
            },
          },
        })}
      >
        Apply your access
      </Button>
    </>
  );
};

export default Home;
