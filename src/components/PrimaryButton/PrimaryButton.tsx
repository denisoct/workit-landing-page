import { Button } from "@mantine/core";
import { FC } from "react";

import { PrimaryButtonProps as Props } from "./PrimaryButton.types";

const PrimaryButton: FC<Props> = props => {
  const { label } = props;

  return (
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
      {label}
    </Button>
  );
};

export default PrimaryButton;
