import {
  AppShell,
  Box,
  Center,
  Flex,
  Group,
  Header,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import imageHero from "../assets/image-hero.webp";
import logoLight from "../assets/logo-light.svg";

const Home = () => {
  return (
    <AppShell
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
            <SecondaryButton label="Apply for access" />
          </Group>
          <Stack
            align="center"
            mx="auto"
            w={{
              mobile: 343,
              tablet: 480,
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
            <PrimaryButton label="Learn more" />
          </Stack>
          <Box
            mx="auto"
            w={{
              mobile: 320,
              tablet: 514,
              desktop: 767,
            }}
          >
            <Image
              mt={{
                base: 64,
                tablet: 55,
                desktop: 50,
              }}
              src={imageHero}
              alt="Hero"
            />
          </Box>
        </Header>
      }
    >
      <Flex
        gap={{
          base: 40,
          tablet: 48,
          desktop: 26,
        }}
        mt={{
          base: 155.29,
          tablet: 203.76,
          desktop: 255,
        }}
        mx="auto"
        justify="center"
        align="center"
        direction={{
          base: "column",
          desktop: "row",
        }}
      >
        <Flex
          justify="center"
          align="center"
          gap={{
            base: 24,
            tablet: 32,
            desktop: 26,
          }}
          sx={theme => ({
            [theme.fn.largerThan("desktop")]: {
              flexBasis: 354,
            },
          })}
          direction={{
            base: "column",
            tablet: "row",
            desktop: "column",
          }}
        >
          <Center
            w={{ base: 48, desktop: 56 }}
            h={{ base: 48, desktop: 56 }}
            sx={theme => ({
              borderRadius: "50%",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: theme.colors._davysGray[6],
            })}
          >
            <Title
              fz={{
                base: 20,
                desktop: 24,
              }}
            >
              1
            </Title>
          </Center>
          <Stack
            w={{
              base: "100%",
              tablet: 493,
              desktop: "100%",
            }}
          >
            <Text
              sx={theme => ({
                textAlign: "center",
                [theme.fn.largerThan("tablet")]: {
                  textAlign: "left",
                },
                [theme.fn.largerThan("desktop")]: {
                  textAlign: "center",
                },
              })}
              ff="Fraunces"
              fz={{
                base: 28,
                desktop: 32,
              }}
              mb={{
                desktop: 28,
              }}
              c="_darkPurple"
            >
              Actionable Insights
            </Text>
            <Text
              sx={theme => ({
                textAlign: "center",
                [theme.fn.largerThan("tablet")]: {
                  textAlign: "left",
                },
                [theme.fn.largerThan("desktop")]: {
                  textAlign: "center",
                },
              })}
              fz={{
                base: 16,
                desktop: 18,
              }}
              c="_davysGray"
            >
              Optimize your products, improve customer satisfaction and stay
              ahead of the competition with our product data analytics.
            </Text>
          </Stack>
        </Flex>
        <Flex
          justify="center"
          align="center"
          gap={{
            base: 24,
            tablet: 32,
            desktop: 26,
          }}
          sx={theme => ({
            [theme.fn.largerThan("desktop")]: {
              flexBasis: 354,
            },
          })}
          direction={{
            base: "column",
            tablet: "row",
            desktop: "column",
          }}
        >
          <Center
            w={{ base: 48, desktop: 56 }}
            h={{ base: 48, desktop: 56 }}
            sx={theme => ({
              borderRadius: "50%",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: theme.colors._davysGray[6],
            })}
          >
            <Title
              fz={{
                base: 20,
                desktop: 24,
              }}
            >
              2
            </Title>
          </Center>
          <Stack
            w={{
              base: "100%",
              tablet: 493,
              desktop: "100%",
            }}
          >
            <Text
              ff="Fraunces"
              fz={{
                base: 28,
                desktop: 32,
              }}
              mb={{
                desktop: 28,
              }}
              c="_darkPurple"
              sx={theme => ({
                textAlign: "center",
                [theme.fn.largerThan("tablet")]: {
                  textAlign: "left",
                },
                [theme.fn.largerThan("desktop")]: {
                  textAlign: "center",
                },
              })}
            >
              Data-driven decisions
            </Text>
            <Text
              fz={{
                base: 16,
                desktop: 18,
              }}
              c="_davysGray"
              sx={theme => ({
                textAlign: "center",
                [theme.fn.largerThan("tablet")]: {
                  textAlign: "left",
                },
                [theme.fn.largerThan("desktop")]: {
                  textAlign: "center",
                },
              })}
            >
              Make data-driven decisions with our product data analytics. Our
              AI-generated reports help you unlock insights hidden in your
              product data.
            </Text>
          </Stack>
        </Flex>
        <Flex
          gap={{
            base: 24,
            tablet: 32,
            desktop: 26,
          }}
          justify="center"
          align="center"
          sx={theme => ({
            [theme.fn.largerThan("desktop")]: {
              flexBasis: 354,
            },
          })}
          direction={{
            base: "column",
            tablet: "row",
            desktop: "column",
          }}
        >
          <Center
            w={{ base: 48, desktop: 56 }}
            h={{ base: 48, desktop: 56 }}
            sx={theme => ({
              borderRadius: "50%",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: theme.colors._davysGray[6],
            })}
          >
            <Title
              fz={{
                base: 20,
                desktop: 24,
              }}
            >
              3
            </Title>
          </Center>
          <Stack
            w={{
              base: "100%",
              tablet: 493,
              desktop: "100%",
            }}
          >
            <Text
              ff="Fraunces"
              fz={{
                base: 28,
                desktop: 32,
              }}
              mb={{
                desktop: 28,
              }}
              c="_darkPurple"
              sx={theme => ({
                textAlign: "center",
                [theme.fn.largerThan("tablet")]: {
                  textAlign: "left",
                },
                [theme.fn.largerThan("desktop")]: {
                  textAlign: "center",
                },
              })}
            >
              Always affordable
            </Text>
            <Text
              fz={{
                base: 16,
                desktop: 18,
              }}
              c="_davysGray"
              fw={400}
              sx={theme => ({
                textAlign: "center",
                [theme.fn.largerThan("tablet")]: {
                  textAlign: "left",
                },
                [theme.fn.largerThan("desktop")]: {
                  textAlign: "center",
                },
              })}
            >
              Always affordable pricing that scales with your business. Get
              top-quality product data analytics services without hidden costs
              or unexpected fees.
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </AppShell>
  );
};

export default Home;
