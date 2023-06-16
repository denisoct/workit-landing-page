import { Button } from "@mantine/core";
import { FC } from "react";

import { SecondaryButtonProps as Props } from "./SecondaryButton.types";

const SecondaryButton: FC<Props> = props => {
  const { label } = props;

  return (
    <Button
      p={0}
      radius={0}
      bg="transparent"
      fz={{ base: 16, xl: 18 }}
      fw={700}
      lh="32px"
      lts={{ base: "-0.16px", xl: "-0.18px" }}
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
          "&:hover": {
            color: theme.colors._eucaplyptus[6],
          },
        },
      })}
    >
      {label}
    </Button>
  );
};

export default SecondaryButton;
