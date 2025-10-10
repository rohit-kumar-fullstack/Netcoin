import { TextField, IconButton, Popover, MenuItem, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomPhoneInput = ({ code, setCode, phoneNumberLength, validCountryDataList, filteredMenuItems, anchorEl, handleCode, handleCountryCode, handleSearchTextChange, handleMenuClose, searchText, value, handleChange }) => {
    return (
        <Grid container spacing={1}>
            <Grid size={{ xs: 3, md: 3 }}>
                <TextField
                    size="small"
                    variant="outlined"
                    placeholder="91"
                    value={code?.includes("+") ? code?.slice(1) : code}
                    name="code"

                    onChange={handleCode}
                    inputProps={{
                        maxLength: 3,
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        style: { padding: "0px 0 0 10px", fontSize: "0.8rem", minHeight: "44px", textAlign: "center" },
                        onInput: (e) => e.target.value = e.target.value.replace(/[^0-9]/g, ""),
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
                    required
                    InputProps={{
                        endAdornment: (
                            <IconButton sx={{ p: 0, cursor: "pointer", color: "white" }} onClick={handleCountryCode}>
                                <ArrowDropDownIcon color='white' />
                            </IconButton>
                        ),
                        startAdornment: <Typography variant="h5" sx={{ p: 0, pl: 1, color: "white" }}>+</Typography>,
                    }}
                />
                {/* Country Code Selector Popover */}
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleMenuClose}
                    sx={{ mt: 3, maxHeight: 270 }}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        fullWidth
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
                            p: 1, position: "sticky", top: 0, zIndex: 1000, backgroundColor: "#FFFFFF"
                        }}
                        size="small"
                        onChange={handleSearchTextChange}
                    />
                    {/* Display List of Country Codes */}
                    {(searchText ? filteredMenuItems : validCountryDataList)?.map((item) => (
                        <MenuItem key={item?.name} value={item.code} onClick={() => {
                            setCode(item?.code);
                            setPhoneNumberLength(item?.phoneLength);
                            handleMenuClose();
                            if (searchText) setSearchText("");
                        }}>
                            {item?.code} ({item?.name})
                        </MenuItem>
                    ))}
                </Popover>
            </Grid>

            {/* Phone Number Field */}
            <Grid size={{ xs: 9, md: 9 }}>
                <TextField
                    variant="outlined"
                    placeholder={phoneNumberLength ? `Add ${phoneNumberLength} digit phone number` : "Please select country code"}
                    name="mobile"
                    size='small'
                    inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        maxLength: parseInt(phoneNumberLength),
                        onInput: (e) => e.target.value = e.target.value.replace(/[^0-9]/g, ""),
                        style: { padding: "0px 10px", fontSize: "0.8rem", minHeight: "44px", },
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
                    onChange={handleChange}
                    value={value}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
};

export { CustomPhoneInput };
