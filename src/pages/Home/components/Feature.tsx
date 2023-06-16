import { Center, Flex, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";

type Props = {
  index: number;
  title: string;
  description: string;
};

const Feature: FC<Props> = props => {
  const { index, title, description } = props;

  return (
    <Flex
      justify="center"
      align="center"
      gap={{ base: 24, sm: 32, xl: 26 }}
      sx={theme => ({ [theme.fn.largerThan("xl")]: { flexBasis: 354 } })}
      direction={{ base: "column", sm: "row", xl: "column" }}
    >
      <Center
        w={{ base: 48, xl: 56 }}
        h={{ base: 48, xl: 56 }}
        sx={theme => ({
          borderRadius: "50%",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: theme.colors._davysGray[6],
        })}
      >
        <Title fz={{ base: 20, xl: 24 }}>{index}</Title>
      </Center>
      <Stack
        w={{ base: "100%", sm: 493, xl: "100%" }}
        ta={{ base: "center", sm: "left", xl: "center" }}
      >
        <Text ff="Fraunces" fz={{ base: 28, xl: 32 }} mb={{ xl: 28 }} c="_darkPurple">
          {title}
        </Text>
        <Text fz={{ base: 16, xl: 18 }} c="_davysGray">
          {description}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Feature;
