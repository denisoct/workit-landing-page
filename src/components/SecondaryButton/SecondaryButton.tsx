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
      {label}
    </Button>
  );
};

export default SecondaryButton;
