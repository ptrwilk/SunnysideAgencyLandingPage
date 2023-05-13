import { Box, List, ListItem, Typography, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import {
  DesktopImageGalleryCone,
  DesktopImageGalleryMilkbottles,
  DesktopImageGalleryOrange,
  DesktopImageGallerySugarcubes,
  DesktopImageGraphicDesign,
  DesktopImagePhotography,
  DesktopImageStandOut,
  DesktopImageTransform,
  IconArrowDown,
  ImageEmily,
  ImageJennie,
  ImageThomas,
  Logo,
  LogoGreen,
  MobileImageGalleryCone,
  MobileImageGalleryMilkbottles,
  MobileImageGalleryOrange,
  MobileImageGallerySugarCubes,
  MobileImageGraphicDesign,
  MobileImagePhotography,
  MobileImageStandOut,
  MobileImageTransform,
} from "../assets";
import classNames from "classnames";
import { Menu } from "../Components";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SunnysideAgencyLandingPage = () => {
  const isLarge = useMediaQuery("(min-width: 750px)");

  const Card = ({
    className,
    title,
    text,
    lineRed,
  }: {
    className?: string;
    title: string;
    text: string;
    lineRed?: boolean;
  }) => (
    <Box className={classNames(styles["card"], className)}>
      <Typography className={styles["title"]} variant="h1">
        {title}
      </Typography>
      <Typography className={styles["text"]}>{text}</Typography>
      <Box className={styles["btn"]}>
        <Typography className={styles["text"]}>Learn more</Typography>
        <Box
          className={classNames(styles["line"], {
            [styles["line-red"]]: lineRed,
          })}
        ></Box>
      </Box>
    </Box>
  );

  const BgCard = ({
    className,
    title,
    text,
    img,
  }: {
    className?: string;
    title: string;
    text: string;
    img?: any;
  }) => (
    <Box className={classNames(styles["bg-card"], className)}>
      <img className={classNames(styles["img"])} src={img} />
      <Box className={styles["section-absolute"]}>
        <Typography className={styles["title"]}>{title}</Typography>
        <Typography className={styles["text"]}>{text}</Typography>
      </Box>
    </Box>
  );

  const AvatarCard = ({
    avatar,
    text,
    name,
    title,
  }: {
    avatar: any;
    text: string;
    name: string;
    title: string;
  }) => (
    <ListItem className={styles["avatar-card"]}>
      <img className={styles["img-avatar"]} src={avatar} />
      <Typography className={styles["text"]}>{text}</Typography>
      <Typography className={styles["name"]}>
        {name}
        <span className={styles["title"]}>{title}</span>
      </Typography>
    </ListItem>
  );

  const Awesome = ({ icon }: { icon: any }) => (
    <FontAwesomeIcon className={styles["icon"]} icon={icon} size="3x" />
  );

  const Image = ({ img }: { img: any }) => (
    <ListItem className={styles["image"]}>
      <img className={styles["img"]} src={img} />
    </ListItem>
  );

  return (
    <Box className={styles["container"]}>
      <Box className={classNames(styles["section-1"])}>
        <Box className={styles["header"]}>
          <img src={Logo} />
          <Menu />
        </Box>
        <Typography className={styles["title"]} variant="h1">
          We are creatives
        </Typography>
        <img src={IconArrowDown} />
      </Box>
      <Box className={styles["section-2"]}>
        <img
          className={classNames(styles["img"], styles["img-1"])}
          src={isLarge ? DesktopImageTransform : MobileImageTransform}
        />
        <Card
          className={styles["card-1"]}
          title="Transform your brand"
          text="We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
        />
        <img
          className={classNames(styles["img"])}
          src={isLarge ? DesktopImageStandOut : MobileImageStandOut}
        />
        <Card
          title="Stand out to the right audience"
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
          lineRed
        />
        <BgCard
          img={isLarge ? DesktopImageGraphicDesign : MobileImageGraphicDesign}
          title="Graphic design"
          text="Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potential clients' attention."
        />
        <BgCard
          className={styles["bg-card-blue"]}
          img={isLarge ? DesktopImagePhotography : MobileImagePhotography}
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </Box>
      <Box className={styles["section-3"]}>
        <Typography className={styles["title"]}>Client testimonials</Typography>
        <List className={styles["avatar-cards"]}>
          <AvatarCard
            avatar={ImageEmily}
            text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            name="Emily R."
            title="Marketing Director"
          />
          <AvatarCard
            avatar={ImageThomas}
            text="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
            name="Thomas S."
            title="Chief Operating Officer"
          />
          <AvatarCard
            avatar={ImageJennie}
            text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            name="Jennie F."
            title="Business Owner"
          />
        </List>
      </Box>
      <List className={styles["images"]}>
        <Image
          img={
            isLarge
              ? MobileImageGalleryMilkbottles
              : DesktopImageGalleryMilkbottles
          }
        />
        <Image
          img={isLarge ? MobileImageGalleryOrange : DesktopImageGalleryOrange}
        />
        <Image
          img={isLarge ? MobileImageGalleryCone : DesktopImageGalleryCone}
        />
        <Image
          img={
            isLarge
              ? MobileImageGallerySugarCubes
              : DesktopImageGallerySugarcubes
          }
        />
      </List>
      <Box className={styles["footer"]}>
        <img className={styles["img-logo"]} src={LogoGreen} />
        <List className={styles["list-1"]}>
          <ListItem>
            <Typography className={styles["text"]}>About</Typography>
          </ListItem>
          <ListItem>
            <Typography className={styles["text"]}>Services</Typography>
          </ListItem>
          <ListItem>
            <Typography className={styles["text"]}>Projects</Typography>
          </ListItem>
        </List>
        <List className={styles["list-2"]}>
          <ListItem>
            <Awesome icon={faFacebookSquare} />
          </ListItem>
          <ListItem>
            <Awesome icon={faInstagram} />
          </ListItem>
          <ListItem>
            <Awesome icon={faTwitter} />
          </ListItem>
          <ListItem>
            <Awesome icon={faPinterest} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SunnysideAgencyLandingPage;
