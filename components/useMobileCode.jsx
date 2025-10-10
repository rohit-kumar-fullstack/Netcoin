
import { useState } from 'react'
import validCountryDataList from '../countryCodeAndName';

export const useMobileCode = () => {
    const [code, setCode] = useState("91");
    const [phoneNumberLength, setPhoneNumberLength] = useState("10");
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchText, setSearchText] = useState("");
    const handleCode = (e) => {
        setCode(e.target.value);
        const textPhoneNumberLength = validCountryDataList?.find(
            (index) => index?.code === `+ ${e.target.value}`
        )?.phoneLength;
        setPhoneNumberLength(textPhoneNumberLength);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const filteredMenuItems = validCountryDataList?.filter(
        (item) =>
            item?.name?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
            item?.code?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    const handleCountryCode = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };
    return { code, setCode, phoneNumberLength, setPhoneNumberLength, anchorEl, searchText, setSearchText, handleSearchTextChange, filteredMenuItems, handleCountryCode, handleMenuClose, handleCode, validCountryDataList }
}
