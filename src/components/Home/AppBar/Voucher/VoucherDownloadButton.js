import React, { useState } from "react";
import { AuthData } from "../../../Routes&Navigation/AuthWrapper";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";

const VoucherDownloadButton = () => {
  const { user, setLoggedUserPoints } = AuthData();
  const [downloadError, setDownloadError] = useState(null);

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/voucher/download",
        {
          params: {
            email: user.email,
          },
          responseType: "blob",
        }
      );

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "voucher.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        setDownloadError(null);
        setLoggedUserPoints((prevPoints) =>
          Math.round(Number(prevPoints) - 2000)
        );
        await axios.post(
          "http://localhost:8080/api/v1/users/deductPoints",
          null,
          {
            params: {
              email: user.email,
            },
          }
        );
      } else {
        setDownloadError("Failed to download voucher");
      }
    } catch (error) {
      console.error("Error during download", error);
      setDownloadError("Error during download");
    }
  };

  return (
    <div>
      <MenuItem>
        <Button onClick={handleDownload} variant="text" color="error">
          Download Voucher
        </Button>
      </MenuItem>
      {downloadError && <p style={{ color: "red" }}>{downloadError}</p>}
    </div>
  );
};

export default VoucherDownloadButton;
