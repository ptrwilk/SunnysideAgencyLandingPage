import { Box, Popover as MuiPopover } from "@mui/material";
import styles from "./styles.module.scss";

interface IPopoverProps {
  open?: boolean;
  anchor?: any;
  children?: any;
  onClose?: () => void;
}

const Popover: React.FC<IPopoverProps> = ({
  open,
  anchor,
  children,
  onClose,
}) => (
  <MuiPopover
    PaperProps={{ sx: { borderRadius: 0, background: "transparent" } }}
    elevation={0}
    open={open ?? false}
    onClose={onClose}
    anchorEl={anchor}
    anchorOrigin={{
      vertical: 50,
      horizontal: 30,
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
  >
    <Box className={styles["MuiPopover-container"]}>
      <Box className={styles["triangle"]}></Box>
      {children}
    </Box>
  </MuiPopover>
);

export default Popover;
