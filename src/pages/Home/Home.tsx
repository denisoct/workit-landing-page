import {
  ActionIcon,
  AppShell,
  BackgroundImage,
  Box,
  Flex,
  Footer,
  Group,
  Header,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import backgroundHeader from "@assets/background-header.png";
import bgPattern1 from "@assets/bg-pattern-1.svg";
import bgPattern2 from "@assets/bg-pattern-2.svg";
import bgPattern3 from "@assets/bg-pattern-3.svg";
import { ReactComponent as IconFacebook } from "@assets/icon-facebook.svg";
import { ReactComponent as IconInstagram } from "@assets/icon-instagram.svg";
import { ReactComponent as IconTwitter } from "@assets/icon-twitter.svg";
import imageFounder from "@assets/image-founder.webp";
import imageHero from "@assets/image-hero.webp";
import logoDark from "@assets/logo-dark.svg";
import logoLight from "@assets/logo-light.svg";
import Feature from "./components/Feature";

const Home = () => {
  return (
    <AppShell
      fixed={false}
      header={
        <Header height="auto" withBorder={false}>
          <BackgroundImage
            h={{ base: 481.71, sm: 540.24, xl: 730 }}
            src={backgroundHeader}
            px={{ base: 16, sm: 39, xl: 165.35 }}
            pt={{ base: 32, sm: 32, xl: 56 }}
          >
            <Box
              w={270}
              pos="absolute"
              top="10%"
              left={-80}
              display={{ base: "none", sm: "block" }}
            >
              <Image src={bgPattern1} alt="Pattern 1" fit="contain" />
            </Box>
            <Box
              w={140}
              pos="absolute"
              right={0}
              top="30%"
              display={{ base: "none", sm: "block" }}
            >
              <Image src={bgPattern2} alt="Pattern 2" />
            </Box>
            <Group position="apart">
              <Image src={logoLight} width={95.76} height={24.61} alt="Logo Light" />
              <SecondaryButton label="Apply for access" />
            </Group>
            <Stack
              align="center"
              mx="auto"
              w={{ xs: 343, sm: 480, xl: 635 }}
              sx={theme => ({
                gap: 40,
                [theme.fn.largerThan("sm")]: { gap: 39 },
                [theme.fn.largerThan("xl")]: { gap: 37 },
              })}
            >
              <Title
                mt={{ base: 64, sm: 56, xl: 55 }}
                c="white"
                align="center"
                fz={{ base: 50, sm: 60, xl: 80 }}
                fw={600}
                lh={{ base: "50px", sm: "60px", xl: "80px" }}
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
            <Box mx="auto" w={{ xs: 320, sm: 514, xl: 767 }}>
              <Image mt={{ base: 64, sm: 55, xl: 50 }} src={imageHero} alt="Hero" />
            </Box>
          </BackgroundImage>
        </Header>
      }
      footer={
        <Footer height="auto" withBorder={false} pb={50} mt={{ base: 60, xl: 105 }}>
          <Stack spacing={58} align="center">
            <Image src={logoDark} width={95.76} height={24.61} alt="Logo Dark" />
            <Group position="center" spacing={28}>
              <ActionIcon
                component={IconFacebook}
                sx={theme => ({
                  fill: theme.colors._davysGray[6],
                  "&:hover": { fill: theme.colors._darkPurple[6] },
                })}
              />
              <ActionIcon
                component={IconTwitter}
                sx={theme => ({
                  fill: theme.colors._davysGray[6],
                  "&:hover": { fill: theme.colors._darkPurple[6] },
                })}
              />
              <ActionIcon
                component={IconInstagram}
                sx={theme => ({
                  fill: theme.colors._davysGray[6],
                  "&:hover": { fill: theme.colors._darkPurple[6] },
                })}
              />
            </Group>
          </Stack>
        </Footer>
      }
    >
      <Flex
        gap={{ base: 40, sm: 48, xl: 26 }}
        mt={{ base: 155.29, sm: 203.76, xl: 255 }}
        mx="auto"
        justify="center"
        align="center"
        direction={{ base: "column", xl: "row" }}
      >
        <Feature
          index={1}
          title="Actionable Insights"
          description="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
        />
        <Feature
          index={2}
          title="Data-driven decisions"
          description="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
        />
        <Feature
          index={3}
          title="Always affordable"
          description="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
        />
      </Flex>
      <Flex
        justify="center"
        align="center"
        mt={{ base: 172, sm: 355, xl: 454 }}
        direction={{ base: "column", sm: "row" }}
      >
        <Box w={{ base: 280, xl: 480 }} sx={{ zIndex: -1 }}>
          <Image
            src={imageFounder}
            fit="contain"
            pos="relative"
            left={{ base: 0, sm: 85, xl: 90 }}
            bottom={{ base: -50, sm: 195, xl: 160 }}
            alt="Hero"
          />
        </Box>
        <Stack
          align="start"
          bg="_darkPurple"
          p={{ base: 31, sm: 56, xl: 64 }}
          w={{ sm: 630, xl: 730 }}
          spacing={32}
          pos="relative"
        >
          <Box
            w={170}
            pos="absolute"
            display={{ base: "none", sm: "block" }}
            inset="70% 0px 0% 60%"
          >
            <Image src={bgPattern3} alt="Pattern 3" />
          </Box>
          <Title c="white">Be the first to test</Title>
          <Text c="white" fz={{ base: 16, xl: 18 }}>
            Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to
            become a beta tester for our app and kickstart your company. Apply for access
            below and I'll be in touch to schedule a call.
          </Text>
          <PrimaryButton label="Apply for access" />
        </Stack>
      </Flex>
    </AppShell>
  );
};

export default Home;
