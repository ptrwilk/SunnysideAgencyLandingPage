import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./styles.module.scss";
import { IconHamburger } from "../../assets";
import { useEffect, useRef, useState } from "react";
import Popover from "../Popover/Popover";

const Menu = () => {
  const ref = useRef<any>();

  const [open, setOpen] = useState(false);
  const isLarge = useMediaQuery("(min-width: 670px)");

  const Text = ({ text }: { text: string }) => (
    <Typography className={styles["text"]}>{text}</Typography>
  );

  const Items = ({ visible }: { visible: boolean }) => (
    <>
      {visible && (
        <List className={styles["items"]}>
          <ListItem>
            <Text text="About"></Text>
          </ListItem>
          <ListItem>
            <Text text="Services"></Text>
          </ListItem>
          <ListItem>
            <Text text="Projects"></Text>
          </ListItem>
          <ListItem>
            <Button className={styles["btn"]}>Contact</Button>
          </ListItem>
        </List>
      )}
    </>
  );

  useEffect(() => {
    if (isLarge) {
      setOpen(false);
    }
  }, [isLarge]);

  return (
    <>
      {!isLarge && (
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          anchor={ref.current}
        >
          <Box className={styles["popover-container"]}>
            <Items visible />
          </Box>
        </Popover>
      )}
      <Box className={styles["container"]}>
        {!isLarge && (
          <IconButton
            className={styles["btn-hamburger"]}
            ref={ref}
            onClick={() => setOpen(true)}
          >
            <img className={styles["img"]} src={IconHamburger} />
          </IconButton>
        )}
        <Items visible={isLarge} />
      </Box>
    </>
  );
};

export { Menu };
