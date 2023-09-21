import { Box } from "@mui/material";
import { baseUrl } from "config";

const UserImage = ({ image, size = "60px", apiBaseUrl }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${baseUrl}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
