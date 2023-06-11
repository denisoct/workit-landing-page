import {
  AppShell,
  Button,
  Group,
  Header,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import logoLight from "../assets/logo-light.svg";

const Home = () => {
  return (
    <AppShell
      // p="md"
      fixed={false}
      header={
        <Header
          withBorder={false}
          height={{
            base: 481.71,
            tablet: 540.24,
            desktop: 730,
          }}
          px={{
            base: 16,
            tablet: 39,
            desktop: 165.35,
          }}
          pt={{
            base: 32,
            tablet: 32,
            desktop: 56,
          }}
          bg="_darkPurple"
        >
          <Group position="apart">
            <Image src={logoLight} width={95.76} height={24.61} alt="Logo" />
            <Button
              p={0}
              radius={0}
              bg="transparent"
              fz={{
                base: 16,
                desktop: 18,
              }}
              fw={700}
              styles={theme => ({
                root: {
                  borderWidth: 0,
                  borderBottomWidth: 3,
                  borderBottomColor: theme.colors._eucaplyptus[6],
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                },
                label: {
                  lineHeight: "32px",
                  letterSpacing: "-0.16px",
                  "&:hover": {
                    color: theme.colors._eucaplyptus[6],
                  },
                  [theme.fn.largerThan("desktop")]: {
                    letterSpacing: "-0.18px",
                  },
                },
              })}
            >
              Apply your access
            </Button>
          </Group>
          <Stack
            align="center"
            mx="auto"
            w={{
              mobile: 343,
              tablet: 573,
              desktop: 635,
            }}
            sx={theme => ({
              gap: 40,
              [theme.fn.largerThan("tablet")]: {
                gap: 39,
              },
              [theme.fn.largerThan("desktop")]: {
                gap: 37,
              },
            })}
          >
            <Title
              mt={{
                base: 64,
                tablet: 56,
                desktop: 55,
              }}
              c="white"
              align="center"
              fz={{
                base: 50,
                tablet: 60,
                desktop: 80,
              }}
              fw={600}
              sx={theme => ({
                lineHeight: "50px",
                [theme.fn.largerThan("tablet")]: {
                  lineHeight: "60px",
                },
                [theme.fn.largerThan("desktop")]: {
                  lineHeight: "80px",
                },
              })}
            >
              Data{" "}
              <Text
                inherit
                span
                sx={theme => ({
                  textDecorationThickness: 3,
                  textDecorationLine: "underline",
                  textDecorationColor: theme.colors._eucaplyptus[6],
                })}
              >
                tailored
              </Text>{" "}
              to your needs.
            </Title>
            <Button
              bg="_eucaplyptus"
              radius={0}
              size="lg"
              c="_darkPurple"
              px={{
                base: 24,
                desktop: 32,
              }}
              fz={{
                base: 16,
                desktop: 18,
              }}
              styles={theme => ({
                root: {
                  "&:hover": {
                    color: theme.colors._eucaplyptus[6],
                    backgroundColor: theme.colors._darkPurple[6],
                  },
                },
                label: {
                  letterSpacing: "-0.16px",
                  [theme.fn.largerThan("desktop")]: {
                    letterSpacing: "-0.18px",
                  },
                },
              })}
            >
              Learn more
            </Button>
          </Stack>
        </Header>
      }
    >
      <Text fz="30px">Hola</Text>
    </AppShell>
  );
};

export default Home;
