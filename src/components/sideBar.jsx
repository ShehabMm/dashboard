import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Avatar, styled, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, MapOutlined, PeopleOutlineOutlined, PersonOutlineOutlined, PieChartOutline, ReceiptOutlined, TimelineOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";


const Array1 = [{ "text": "Dashboard", "icon": <HomeOutlinedIcon />, "path": "/" },


{ "text": "Manage Team", "icon": <PeopleOutlineOutlined />, "path": "/team" },
{ "text": "Contacts Information", "icon": <ContactsOutlined />, "path": "/contacts" },

{ "text": "Invoices Balances", "icon": <ReceiptOutlined />, "path": "/invoices" }


]



const Array2 = [{ "text": "Profile Form", "icon": <PersonOutlineOutlined />, "path": "/form" },


{ "text": "Calender", "icon": <CalendarTodayOutlined />, "path": "/calender" },
{ "text": "FAQ Page", "icon": <HelpOutlineOutlined />, "path": "/faq" },



]

const Array3 = [{ "text": "Bar Chart", "icon": <BarChartOutlined />, "path": "/bar" },


{ "text": "Pie Chart", "icon": <PieChartOutline />, "path": "/pie" },
{ "text": "Line Chart", "icon": <TimelineOutlined />, "path": "/line" },
{ "text": "Geography Chart", "icon": <MapOutlined />, "path": "/geography" },



]









const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// eslint-disable-next-line react/prop-types
const Side = ({ open, handleDrawerClose, handleDrawerOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate()
  let location = useLocation()

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Avatar  onClick={handleDrawerOpen}  sx={{ mx: "auto", mt: 1, width: open ? 88 : 44, height: open ? 88 : 44, border: "2px solid grey", my: 1 }} alt="Travis Howard" src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1689319406/yes_glmqyd.png" />

      <Typography align="center" sx={{ fontSize: open ? 18 : 0, mb: 1, transition: '0.25s' }} >Shehab</Typography>
      <Typography align="center" sx={{ fontSize: open ? 14 : 0, mb: 1, transition: '0.25s' }} color='info.light'>Admin</Typography>

      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton

              onClick={() => {

                navigate(item.path)

              }}

              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: item.path ==location.pathname ? "grey" : null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >

                {item.icon}

              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />



      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton

              onClick={() => {

                navigate(item.path)

              }}

              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: item.path ==location.pathname ? "grey" : null

              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >

                {item.icon}

              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>




      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton

              onClick={() => {

                navigate(item.path)

              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: item.path ==location.pathname ? "grey" : null

              }}


            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >

                {item.icon}

              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Side;
